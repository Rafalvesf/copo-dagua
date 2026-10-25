import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';

import '../../../core/payments/partner_connect.dart';
import '../../../core/theme/app_theme.dart';

/// Dados para receber pagamentos, pedidos com o UI da própria app
/// (2026-10-25: "nada de links nem caixas com o site da Stripe"). Os dados
/// vão para o servidor da À Nossa!, que os passa à Stripe; nada fica
/// guardado na À Nossa! além do estado.
class PayoutDetailsForm extends StatefulWidget {
  /// Nome do negócio (pré-preenche a atividade e o titular da empresa).
  final String? businessName;
  final String? businessDescription;
  final ValueChanged<ConnectStatus> onDone;
  final VoidCallback onLater;

  const PayoutDetailsForm({super.key, this.businessName, this.businessDescription, required this.onDone, required this.onLater});

  @override
  State<PayoutDetailsForm> createState() => _PayoutDetailsFormState();
}

enum _Step { type, person, company, address, activity, bank, confirm, document }

class _PayoutDetailsFormState extends State<PayoutDetailsForm> {
  bool _loading = true;
  bool _saving = false;
  String? _error;
  String _type = 'individual';
  int _index = 0;
  bool _accept = false;
  bool _tosAlready = false;
  String? _bankLast4;
  bool _nifProvided = false;
  bool _companyTaxProvided = false;
  ConnectStatus? _status;

  final _first = TextEditingController();
  final _last = TextEditingController();
  final _dob = TextEditingController();
  final _nif = TextEditingController();
  final _email = TextEditingController();
  final _phone = TextEditingController();
  final _title = TextEditingController(text: 'Gerente');
  final _companyName = TextEditingController();
  final _companyNif = TextEditingController();
  final _companyPhone = TextEditingController();
  final _line1 = TextEditingController();
  final _line2 = TextEditingController();
  final _postal = TextEditingController();
  final _city = TextEditingController();
  final _description = TextEditingController();
  final _url = TextEditingController();
  final _iban = TextEditingController();
  final _holder = TextEditingController();

  XFile? _docFront;
  XFile? _docBack;

  List<TextEditingController> get _all => [
        _first, _last, _dob, _nif, _email, _phone, _title, _companyName, _companyNif, _companyPhone,
        _line1, _line2, _postal, _city, _description, _url, _iban, _holder,
      ];

  List<_Step> get _steps => [
        _Step.type,
        _Step.person,
        if (_type == 'company') _Step.company,
        _Step.address,
        _Step.activity,
        _Step.bank,
        _Step.confirm,
      ];

  _Step get _step => _status != null ? _Step.document : _steps[_index.clamp(0, _steps.length - 1)];

  @override
  void initState() {
    super.initState();
    _description.text = widget.businessDescription ?? '';
    _companyName.text = widget.businessName ?? '';
    _load();
  }

  @override
  void dispose() {
    for (final c in _all) {
      c.dispose();
    }
    super.dispose();
  }

  Future<void> _load() async {
    try {
      final p = await fetchPayoutPrefill();
      if (p != null) {
        _type = p['business_type'] == 'company' ? 'company' : 'individual';
        final person = (p['person'] as Map?) ?? const {};
        void set(TextEditingController c, Object? v) {
          if (v is String && v.isNotEmpty) c.text = v;
        }
        set(_first, person['first_name']);
        set(_last, person['last_name']);
        set(_email, person['email']);
        set(_phone, person['phone']);
        set(_title, person['title']);
        final dob = person['dob'] as String?;
        if (dob != null && dob.length == 10) _dob.text = '${dob.substring(8)}/${dob.substring(5, 7)}/${dob.substring(0, 4)}';
        _nifProvided = person['nif_provided'] == true;
        final addr = (person['address'] as Map?) ?? ((p['company'] as Map?)?['address'] as Map?);
        if (addr != null) {
          set(_line1, addr['line1']);
          set(_line2, addr['line2']);
          set(_postal, addr['postal_code']);
          set(_city, addr['city']);
        }
        final company = p['company'] as Map?;
        if (company != null) {
          set(_companyName, company['name']);
          set(_companyPhone, company['phone']);
          _companyTaxProvided = company['tax_id_provided'] == true;
        }
        set(_description, p['product_description']);
        set(_url, p['url']);
        set(_holder, p['account_holder_name']);
        _bankLast4 = p['bank_last4'] as String?;
        _tosAlready = p['tos_accepted'] == true;
      }
    } catch (_) {
      // Sem conta ainda (ou sem ligação): começa vazio.
    }
    if (mounted) setState(() => _loading = false);
  }

  // ---------- Validação ----------

  String? _dobIso() {
    final m = RegExp(r'^(\d{1,2})[/.-](\d{1,2})[/.-](\d{4})$').firstMatch(_dob.text.trim());
    if (m == null) return null;
    final d = int.parse(m.group(1)!), mo = int.parse(m.group(2)!), y = int.parse(m.group(3)!);
    if (mo < 1 || mo > 12 || d < 1 || d > 31) return null;
    return '${y.toString().padLeft(4, '0')}-${mo.toString().padLeft(2, '0')}-${d.toString().padLeft(2, '0')}';
  }

  bool _nifOk(String v) => RegExp(r'^\d{9}$').hasMatch(v.replaceAll(' ', ''));

  String? _validate(_Step s) {
    switch (s) {
      case _Step.type:
        return null;
      case _Step.person:
        if (_first.text.trim().isEmpty || _last.text.trim().isEmpty) return 'Escreve o nome e o apelido.';
        if (_dobIso() == null) return 'Escreve a data de nascimento como DD/MM/AAAA.';
        if (!(_nifProvided && _nif.text.trim().isEmpty) && !_nifOk(_nif.text)) return 'O NIF tem 9 dígitos.';
        if (!_email.text.contains('@')) return 'Escreve um email válido.';
        if (_phone.text.replaceAll(RegExp(r'\D'), '').length < 9) return 'Escreve o número de telemóvel.';
        return null;
      case _Step.company:
        if (_companyName.text.trim().isEmpty) return 'Escreve o nome da empresa.';
        if (!(_companyTaxProvided && _companyNif.text.trim().isEmpty) && !_nifOk(_companyNif.text)) {
          return 'O NIPC tem 9 dígitos.';
        }
        return null;
      case _Step.address:
        if (_line1.text.trim().isEmpty || _city.text.trim().isEmpty) return 'Escreve a morada e a localidade.';
        if (!RegExp(r'^\d{4}-?\d{3}$').hasMatch(_postal.text.trim())) return 'O código postal é do tipo 1000-001.';
        return null;
      case _Step.activity:
        if (_description.text.trim().length < 10) return 'Descreve em poucas palavras o serviço que prestas.';
        return null;
      case _Step.bank:
        final iban = _iban.text.replaceAll(' ', '').toUpperCase();
        if (iban.isEmpty && _bankLast4 != null) return null;
        if (!RegExp(r'^[A-Z]{2}\d{2}[A-Z0-9]{11,30}$').hasMatch(iban)) return 'O IBAN não parece válido (ex.: PT50 …).';
        return null;
      case _Step.confirm:
        if (!_accept && !_tosAlready) return 'Confirma para continuar.';
        return null;
      case _Step.document:
        if (_docFront == null) return 'Fotografa a frente do documento.';
        return null;
    }
  }

  Map<String, dynamic> _payload() {
    String postal(String v) {
      final d = v.replaceAll(RegExp(r'\D'), '');
      return d.length == 7 ? '${d.substring(0, 4)}-${d.substring(4)}' : v.trim();
    }

    final address = {
      'line1': _line1.text.trim(),
      'line2': _line2.text.trim(),
      'postal_code': postal(_postal.text),
      'city': _city.text.trim(),
    };
    return {
      'business_type': _type,
      'person': {
        'first_name': _first.text.trim(),
        'last_name': _last.text.trim(),
        'email': _email.text.trim(),
        'phone': _phone.text.trim(),
        'dob': _dobIso(),
        if (_nif.text.trim().isNotEmpty) 'nif': _nif.text.trim(),
        'address': address,
        if (_type == 'company') 'title': _title.text.trim(),
      },
      if (_type == 'company')
        'company': {
          'name': _companyName.text.trim(),
          if (_companyNif.text.trim().isNotEmpty) 'tax_id': _companyNif.text.trim(),
          'phone': (_companyPhone.text.trim().isEmpty ? _phone.text : _companyPhone.text).trim(),
          'address': address,
        },
      'product_description': _description.text.trim(),
      if (_url.text.trim().isNotEmpty) 'url': _url.text.trim().startsWith('http') ? _url.text.trim() : 'https://${_url.text.trim()}',
      if (_iban.text.trim().isNotEmpty) 'iban': _iban.text.trim(),
      if (_holder.text.trim().isNotEmpty) 'account_holder_name': _holder.text.trim(),
      'accept_tos': _accept || _tosAlready,
    };
  }

  Future<void> _next() async {
    final err = _validate(_step);
    if (err != null) {
      setState(() => _error = err);
      return;
    }
    setState(() => _error = null);
    if (_step == _Step.confirm) return _submit();
    if (_step == _Step.document) return _submitDocument();
    setState(() => _index++);
  }

  void _back() {
    if (_status != null || _index == 0) {
      widget.onLater();
      return;
    }
    setState(() {
      _error = null;
      _index--;
    });
  }

  Future<void> _submit() async {
    setState(() => _saving = true);
    try {
      final s = await submitPayoutDetails(_payload());
      if (!mounted) return;
      if (needsIdDocument(s)) {
        setState(() {
          _status = s;
          _saving = false;
        });
        return;
      }
      widget.onDone(s);
    } on ConnectError catch (e) {
      if (mounted) setState(() => _error = e.message ?? connectErrorMessage(e.code));
    } catch (_) {
      if (mounted) setState(() => _error = 'Sem ligação. Tenta outra vez.');
    } finally {
      if (mounted) setState(() => _saving = false);
    }
  }

  Future<void> _submitDocument() async {
    setState(() => _saving = true);
    try {
      final front = _docFront!;
      final back = _docBack;
      final s = await submitIdDocument(
        frontBase64: base64Encode(await front.readAsBytes()),
        frontType: front.mimeType ?? 'image/jpeg',
        backBase64: back == null ? null : base64Encode(await back.readAsBytes()),
        backType: back?.mimeType,
      );
      if (mounted) widget.onDone(s);
    } on ConnectError catch (e) {
      if (mounted) setState(() => _error = e.message ?? connectErrorMessage(e.code));
    } catch (_) {
      if (mounted) setState(() => _error = 'Sem ligação. Tenta outra vez.');
    } finally {
      if (mounted) setState(() => _saving = false);
    }
  }

  Future<void> _pick(bool front) async {
    final f = await ImagePicker().pickImage(source: ImageSource.gallery, maxWidth: 2000, imageQuality: 85);
    if (f == null || !mounted) return;
    setState(() => front ? _docFront = f : _docBack = f);
  }

  // ---------- UI ----------

  @override
  Widget build(BuildContext context) {
    if (_loading) {
      return Padding(
        padding: const EdgeInsets.all(40),
        child: Center(child: CircularProgressIndicator(color: AppTheme.accentOliveDark)),
      );
    }
    final steps = _steps;
    final pos = _status != null ? steps.length : _index;
    final total = steps.length + (_status != null ? 1 : 0);
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Text('PASSO ${pos + 1} DE $total',
            style: TextStyle(fontSize: AppFontSize.sm, fontWeight: FontWeight.w700, letterSpacing: 1, color: AppTheme.accentOliveDark)),
        const SizedBox(height: 8),
        ClipRRect(
          borderRadius: BorderRadius.circular(3),
          child: LinearProgressIndicator(
            value: (pos + 1) / total,
            minHeight: 5,
            backgroundColor: AppTheme.borderMuted,
            color: AppTheme.accentOliveDark,
          ),
        ),
        const SizedBox(height: 20),
        ..._content(),
        if (_error != null) ...[
          const SizedBox(height: 12),
          Container(
            padding: const EdgeInsets.all(12),
            decoration: BoxDecoration(color: const Color(0xFFE9E8E4), borderRadius: BorderRadius.circular(14)),
            child: Row(children: [
              const Icon(Icons.info_outline_rounded, size: 18, color: AppTheme.ink),
              const SizedBox(width: 8),
              Expanded(child: Text(_error!, style: const TextStyle(fontSize: AppFontSize.md, color: AppTheme.ink))),
            ]),
          ),
        ],
        const SizedBox(height: 20),
        Row(children: [
          TextButton(
            onPressed: _saving ? null : _back,
            style: TextButton.styleFrom(foregroundColor: AppTheme.inkMuted, minimumSize: const Size(0, 52)),
            child: Text(_index == 0 && _status == null ? 'Mais tarde' : 'Voltar'),
          ),
          const SizedBox(width: 10),
          Expanded(
            child: FilledButton(
              onPressed: _saving ? null : _next,
              style: FilledButton.styleFrom(
                minimumSize: const Size.fromHeight(52),
                backgroundColor: AppTheme.accentOliveDark,
                shape: const StadiumBorder(),
                textStyle: const TextStyle(fontWeight: FontWeight.w700, fontSize: AppFontSize.lg),
              ),
              child: _saving
                  ? const SizedBox(width: 22, height: 22, child: CircularProgressIndicator(strokeWidth: 2.5, color: Colors.white))
                  : Text(switch (_step) {
                      _Step.confirm => 'Enviar dados',
                      _Step.document => 'Enviar documento',
                      _ => 'Continuar',
                    }),
            ),
          ),
        ]),
      ],
    );
  }

  List<Widget> _content() {
    switch (_step) {
      case _Step.type:
        return [
          const _Title('Como trabalhas?', 'Escolhe como recebes os pagamentos dos clientes.'),
          _Choice(
            selected: _type == 'individual',
            icon: Icons.person_outline_rounded,
            title: 'Em nome individual',
            sub: 'Trabalhador independente ou empresário em nome individual',
            onTap: () => setState(() => _type = 'individual'),
          ),
          const SizedBox(height: 10),
          _Choice(
            selected: _type == 'company',
            icon: Icons.business_outlined,
            title: 'Empresa',
            sub: 'Sociedade (Lda., Unipessoal, S.A.) com NIPC',
            onTap: () => setState(() => _type = 'company'),
          ),
        ];
      case _Step.person:
        return [
          _Title(_type == 'company' ? 'Responsável da empresa' : 'Os teus dados',
              'Como aparecem no Cartão de Cidadão. A lei obriga a confirmar quem recebe o dinheiro.'),
          _Row2(_Field('Nome', _first, hints: const [AutofillHints.givenName]), _Field('Apelido', _last, hints: const [AutofillHints.familyName])),
          _Field('Data de nascimento', _dob, hint: 'DD/MM/AAAA', keyboard: TextInputType.datetime, hints: const [AutofillHints.birthday]),
          _Field(_nifProvided ? 'NIF (já indicado — escreve só para mudar)' : 'NIF', _nif, hint: '123456789', keyboard: TextInputType.number),
          _Field('Email', _email, keyboard: TextInputType.emailAddress, hints: const [AutofillHints.email]),
          _Field('Telemóvel', _phone, hint: '912 345 678', keyboard: TextInputType.phone, hints: const [AutofillHints.telephoneNumber]),
          if (_type == 'company') _Field('Cargo', _title, hint: 'Gerente'),
        ];
      case _Step.company:
        return [
          const _Title('A tua empresa', 'Os dados da certidão permanente.'),
          _Field('Nome da empresa', _companyName),
          _Field(_companyTaxProvided ? 'NIPC (já indicado — escreve só para mudar)' : 'NIPC', _companyNif, hint: '501234567', keyboard: TextInputType.number),
          _Field('Telefone da empresa (opcional)', _companyPhone, keyboard: TextInputType.phone),
        ];
      case _Step.address:
        return [
          _Title(_type == 'company' ? 'Morada da empresa' : 'A tua morada', 'A morada fiscal.'),
          _Field('Rua e número', _line1, hints: const [AutofillHints.streetAddressLine1]),
          _Field('Andar, porta (opcional)', _line2, hints: const [AutofillHints.streetAddressLine2]),
          _Row2(
            _Field('Código postal', _postal, hint: '1000-001', keyboard: TextInputType.number, hints: const [AutofillHints.postalCode]),
            _Field('Localidade', _city, hints: const [AutofillHints.addressCity]),
          ),
        ];
      case _Step.activity:
        return [
          const _Title('O teu serviço', 'Aparece no extrato do cartão dos clientes e ajuda a confirmar a atividade.'),
          _Field('Descrição do serviço', _description, maxLines: 3, hint: 'Ex.: espaço para casamentos e eventos em Sintra'),
          _Field('Site ou Instagram (opcional)', _url, hint: 'oteusite.pt', keyboard: TextInputType.url),
        ];
      case _Step.bank:
        return [
          const _Title('Conta para receber', 'Os pagamentos dos clientes vão para esta conta.'),
          if (_bankLast4 != null)
            Padding(
              padding: const EdgeInsets.only(bottom: 12),
              child: Text('Conta atual: IBAN terminado em $_bankLast4. Escreve outro só se quiseres mudar.',
                  style: const TextStyle(fontSize: AppFontSize.md, color: AppTheme.inkMuted)),
            ),
          _Field('IBAN', _iban, hint: 'PT50 0000 0000 0000 0000 0000 0', keyboard: TextInputType.text),
          _Field(_type == 'company' ? 'Titular (nome da empresa)' : 'Titular da conta', _holder,
              hint: _type == 'company' ? _companyName.text : '${_first.text} ${_last.text}'.trim()),
        ];
      case _Step.confirm:
        return [
          const _Title('Confirmar e enviar', 'Revê antes de enviar.'),
          _Summary([
            (_type == 'company' ? 'Empresa' : 'Em nome individual', _type == 'company' ? _companyName.text : '${_first.text} ${_last.text}'),
            if (_type == 'company') ('Responsável', '${_first.text} ${_last.text}'),
            ('Morada', '${_line1.text}, ${_postal.text} ${_city.text}'),
            ('Contacto', '${_email.text} · ${_phone.text}'),
            ('IBAN', _iban.text.trim().isEmpty ? (_bankLast4 == null ? '—' : '•••• $_bankLast4') : _maskIban(_iban.text)),
          ]),
          const SizedBox(height: 14),
          if (!_tosAlready)
            InkWell(
              borderRadius: BorderRadius.circular(16),
              onTap: () => setState(() => _accept = !_accept),
              child: Container(
                padding: const EdgeInsets.all(14),
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(16),
                  border: Border.all(color: _accept ? AppTheme.accentOliveDark : AppTheme.borderMuted, width: _accept ? 2 : 1),
                ),
                child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  Icon(_accept ? Icons.check_box_rounded : Icons.check_box_outline_blank_rounded,
                      color: _accept ? AppTheme.accentOliveDark : AppTheme.inkMuted),
                  const SizedBox(width: 10),
                  const Expanded(
                    child: Text(
                      'Confirmo que os dados são verdadeiros, que a conta bancária está em meu nome ou da minha empresa, '
                      'e aceito os termos de serviço da Stripe, que processa os pagamentos da À Nossa!.',
                      style: TextStyle(fontSize: AppFontSize.md, color: AppTheme.ink, height: 1.4),
                    ),
                  ),
                ]),
              ),
            ),
          const SizedBox(height: 10),
          const Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Icon(Icons.lock_outline, size: 16, color: AppTheme.inkMuted),
            SizedBox(width: 8),
            Expanded(
              child: Text('Enviados de forma segura. A À Nossa! não guarda o teu IBAN completo nem o NIF.',
                  style: TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted, height: 1.4)),
            ),
          ]),
        ];
      case _Step.document:
        return [
          const _Title('Documento de identificação', 'Para terminar, uma fotografia do Cartão de Cidadão (frente e verso) ou do passaporte.'),
          _DocPick(label: 'Frente', file: _docFront, onTap: () => _pick(true)),
          const SizedBox(height: 10),
          _DocPick(label: 'Verso (opcional no passaporte)', file: _docBack, onTap: () => _pick(false)),
        ];
    }
  }

  String _maskIban(String v) {
    final s = v.replaceAll(' ', '').toUpperCase();
    return s.length < 8 ? s : '${s.substring(0, 4)} •••• ${s.substring(s.length - 4)}';
  }
}

class _Title extends StatelessWidget {
  final String title;
  final String sub;
  const _Title(this.title, this.sub);

  @override
  Widget build(BuildContext context) => Padding(
        padding: const EdgeInsets.only(bottom: 16),
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Text(title, style: const TextStyle(fontSize: AppFontSize.h3, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          const SizedBox(height: 6),
          Text(sub, style: const TextStyle(fontSize: AppFontSize.base, color: AppTheme.inkMuted, height: 1.4)),
        ]),
      );
}

class _Field extends StatelessWidget {
  final String label;
  final TextEditingController controller;
  final String? hint;
  final TextInputType? keyboard;
  final int maxLines;
  final Iterable<String>? hints;
  const _Field(this.label, this.controller, {this.hint, this.keyboard, this.maxLines = 1, this.hints});

  @override
  Widget build(BuildContext context) => Padding(
        padding: const EdgeInsets.only(bottom: 12),
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Text(label, style: const TextStyle(fontSize: AppFontSize.md, fontWeight: FontWeight.w600, color: AppTheme.ink)),
          const SizedBox(height: 6),
          TextField(
            controller: controller,
            keyboardType: keyboard,
            maxLines: maxLines,
            autofillHints: hints,
            decoration: InputDecoration(
              hintText: hint,
              filled: true,
              fillColor: Colors.white,
              contentPadding: const EdgeInsets.symmetric(horizontal: 14, vertical: 14),
              border: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: const BorderSide(color: AppTheme.borderMuted)),
              enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: const BorderSide(color: AppTheme.borderMuted)),
              focusedBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide(color: AppTheme.accentOliveDark, width: 2)),
            ),
          ),
        ]),
      );
}

class _Row2 extends StatelessWidget {
  final Widget a;
  final Widget b;
  const _Row2(this.a, this.b);

  @override
  Widget build(BuildContext context) => Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Expanded(child: a),
        const SizedBox(width: 10),
        Expanded(child: b),
      ]);
}

class _Choice extends StatelessWidget {
  final bool selected;
  final IconData icon;
  final String title;
  final String sub;
  final VoidCallback onTap;
  const _Choice({required this.selected, required this.icon, required this.title, required this.sub, required this.onTap});

  @override
  Widget build(BuildContext context) => InkWell(
        borderRadius: BorderRadius.circular(18),
        onTap: onTap,
        child: Container(
          padding: const EdgeInsets.all(14),
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(18),
            border: Border.all(color: selected ? AppTheme.accentOliveDark : AppTheme.borderMuted, width: selected ? 2 : 1),
          ),
          child: Row(children: [
            Container(
              width: 42,
              height: 42,
              decoration: BoxDecoration(color: AppTheme.accentTint, shape: BoxShape.circle),
              child: Icon(icon, color: AppTheme.accentOliveDark),
            ),
            const SizedBox(width: 12),
            Expanded(
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Text(title, style: const TextStyle(fontWeight: FontWeight.w700, fontSize: AppFontSize.base, color: AppTheme.ink)),
                const SizedBox(height: 2),
                Text(sub, style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted, height: 1.3)),
              ]),
            ),
            Icon(selected ? Icons.radio_button_checked : Icons.radio_button_unchecked,
                color: selected ? AppTheme.accentOliveDark : AppTheme.inkMuted),
          ]),
        ),
      );
}

class _Summary extends StatelessWidget {
  final List<(String, String)> rows;
  const _Summary(this.rows);

  @override
  Widget build(BuildContext context) => Container(
        padding: const EdgeInsets.all(14),
        decoration: BoxDecoration(color: const Color(0xFFE9E8E4), borderRadius: BorderRadius.circular(18)),
        child: Column(children: [
          for (final (k, v) in rows)
            Padding(
              padding: const EdgeInsets.symmetric(vertical: 5),
              child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
                SizedBox(width: 110, child: Text(k, style: const TextStyle(fontSize: AppFontSize.md, color: AppTheme.inkMuted))),
                Expanded(child: Text(v, style: const TextStyle(fontSize: AppFontSize.md, color: AppTheme.ink, fontWeight: FontWeight.w600))),
              ]),
            ),
        ]),
      );
}

class _DocPick extends StatelessWidget {
  final String label;
  final XFile? file;
  final VoidCallback onTap;
  const _DocPick({required this.label, required this.file, required this.onTap});

  @override
  Widget build(BuildContext context) => InkWell(
        borderRadius: BorderRadius.circular(18),
        onTap: onTap,
        child: Container(
          padding: const EdgeInsets.all(16),
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(18),
            border: Border.all(color: file != null ? AppTheme.accentOliveDark : AppTheme.borderMuted, width: file != null ? 2 : 1),
          ),
          child: Row(children: [
            Icon(file != null ? Icons.check_circle_rounded : Icons.photo_camera_outlined, color: AppTheme.accentOliveDark),
            const SizedBox(width: 12),
            Expanded(
              child: Text(file != null ? '$label · ${file!.name}' : label,
                  style: const TextStyle(fontWeight: FontWeight.w600, color: AppTheme.ink)),
            ),
            Text(file != null ? 'Trocar' : 'Escolher', style: TextStyle(color: AppTheme.accentOliveDark, fontWeight: FontWeight.w700)),
          ]),
        ),
      );
}
