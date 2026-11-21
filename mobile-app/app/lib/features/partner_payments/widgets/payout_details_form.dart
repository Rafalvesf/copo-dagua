import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';

import '../../../core/payments/partner_connect.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/line_icon.dart';
import '../../../shared/widgets/onb_kit.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/address_picker.dart' show AddressField;

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

enum _Step { type, person, contact, company, address, activity, bank, document }

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
  final _addrSearch = TextEditingController();
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

  // Mockup "Pagamentos · Ativar pagamentos" (2026-11-14): uma ou duas
  // perguntas por ecrã.
  List<_Step> get _steps => [
        _Step.type,
        _Step.person,
        _Step.contact,
        if (_type == 'company') _Step.company,
        _Step.address,
        _Step.activity,
        _Step.bank,
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
    _addrSearch.dispose();
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
        return null;
      case _Step.contact:
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
    if (_step == _Step.bank) {
      // Ao enviar aceita os termos da Stripe (texto por baixo do botão).
      _accept = true;
      if (_holder.text.trim().isEmpty) {
        _holder.text = _type == 'company' ? _companyName.text.trim() : '${_first.text} ${_last.text}'.trim();
      }
      return _submit();
    }
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

  // ---------- UI (mockup "Ativar pagamentos") ----------

  // A barra começa em 20%: tipo 30, quem és 40, NIF 50, empresa 55,
  // morada 60, serviço 70, IBAN 80, documento 90.
  double get _progress => switch (_step) {
        _Step.type => 0.3,
        _Step.person => 0.4,
        _Step.contact => 0.5,
        _Step.company => 0.55,
        _Step.address => 0.6,
        _Step.activity => 0.7,
        _Step.bank => 0.8,
        _Step.document => 0.9,
      };

  @override
  Widget build(BuildContext context) {
    if (_loading) {
      return const Scaffold(
        backgroundColor: AppTheme.background,
        body: Center(child: CircularProgressIndicator(color: Color(0xFF4F6B4A))),
      );
    }
    final steps = _steps;
    final pos = _status != null ? steps.length + 1 : _index + 1;
    final total = steps.length + 1; // + documento
    final (title, sub) = _texts();
    final label = switch (_step) {
      _Step.bank => 'Enviar',
      _Step.document => 'Enviar',
      _ => 'Continuar',
    };
    return OnbStep(
      onBack: _saving ? null : _back,
      progress: _progress,
      kicker: '$pos de $total',
      title: title,
      subtitle: sub,
      bottom: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        if (_error != null) ...[_ErrorLine(_error!), const SizedBox(height: 12)],
        OnbButton(label: label, loading: _saving, onPressed: _saving ? null : _next),
      ]),
      child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: _content()),
    );
  }

  (String, String) _texts() => switch (_step) {
        _Step.type => ('Recebes como?', 'É o nome que aparece nas faturas.'),
        _Step.person => (_type == 'company' ? 'Quem é o responsável?' : 'Quem és?', 'Igual ao teu documento de identificação.'),
        _Step.contact => ('NIF e telemóvel', 'Para as faturas e para te avisarmos de cada pagamento.'),
        _Step.company => ('A tua empresa', 'Os dados da certidão permanente.'),
        _Step.address => ('Onde fica o teu negócio?', 'A morada fiscal.'),
        _Step.activity => ('O que fazes?', 'Uma frase chega.'),
        _Step.bank => ('Para onde enviamos o dinheiro?', 'A conta tem de estar em teu nome ou da tua empresa.'),
        _Step.document => ('Confirma a tua identidade', 'Cartão de cidadão ou passaporte, com tudo legível.'),
      };

  Widget _gap() => const SizedBox(height: 12);

  List<Widget> _content() {
    switch (_step) {
      case _Step.type:
        return [
          OnbOption(
            title: 'Em nome individual',
            subtitle: 'Trabalhas por conta própria, com o teu NIF.',
            selected: _type == 'individual',
            onTap: () => setState(() => _type = 'individual'),
          ),
          _gap(),
          OnbOption(
            title: 'Empresa',
            subtitle: 'Tens uma sociedade, com NIPC.',
            selected: _type == 'company',
            onTap: () => setState(() => _type = 'company'),
          ),
        ];
      case _Step.person:
        return [
          Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Expanded(child: OnbField(controller: _first, label: 'Nome', hint: 'Rafael')),
            const SizedBox(width: 10),
            Expanded(child: OnbField(controller: _last, label: 'Apelido', hint: 'Alves')),
          ]),
          _gap(),
          OnbField(controller: _dob, label: 'Data de nascimento', hint: 'DD/MM/AAAA', keyboardType: TextInputType.datetime),
          if (_type == 'company') ...[_gap(), OnbField(controller: _title, label: 'Cargo', hint: 'Gerente')],
        ];
      case _Step.contact:
        return [
          OnbField(
            controller: _nif,
            label: 'NIF',
            hint: _nifProvided ? 'Já indicado — escreve só para mudar' : '123 456 789',
            keyboardType: TextInputType.number,
          ),
          _gap(),
          OnbField(controller: _phone, label: 'Telemóvel', hint: '912 345 678', keyboardType: TextInputType.phone),
          if (!_email.text.contains('@')) ...[
            _gap(),
            OnbField(controller: _email, label: 'Email', hint: 'nome@email.com', keyboardType: TextInputType.emailAddress),
          ],
        ];
      case _Step.company:
        return [
          OnbField(controller: _companyName, label: 'Nome da empresa'),
          _gap(),
          OnbField(
            controller: _companyNif,
            label: 'NIPC',
            hint: _companyTaxProvided ? 'Já indicado — escreve só para mudar' : '501 234 567',
            keyboardType: TextInputType.number,
          ),
        ];
      case _Step.address:
        return [
          // Procurar com o Google preenche a rua, o código postal e a
          // cidade; ficam editáveis (2026-11-20).
          const OnbGroupLabel('Procurar morada'),
          const SizedBox(height: 8),
          AddressField(
            controller: _addrSearch,
            hint: 'Rua, número, localidade',
            pickerTitle: 'Morada da empresa',
            onPicked: (p) => setState(() {
              if (p.addressLine.isNotEmpty) _line1.text = p.addressLine;
              if (p.postalCode.isNotEmpty) _postal.text = p.postalCode;
              if (p.city.isNotEmpty) _city.text = p.city;
            }),
          ),
          _gap(),
          OnbField(controller: _line1, label: 'Morada', hint: 'Rua e número'),
          _gap(),
          Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Expanded(child: OnbField(controller: _postal, label: 'Código postal', hint: '1000-001', keyboardType: TextInputType.number)),
            const SizedBox(width: 10),
            Expanded(child: OnbField(controller: _city, label: 'Cidade', hint: 'Lisboa')),
          ]),
        ];
      case _Step.activity:
        return [
          OnbField(controller: _description, label: 'Descrição', hint: 'Ex.: fotografia de casamentos em Lisboa'),
          _gap(),
          OnbField(controller: _url, label: 'Site ou Instagram · opcional', hint: 'oteusite.pt', keyboardType: TextInputType.url),
        ];
      case _Step.bank:
        return [
          OnbField(
            controller: _iban,
            label: 'IBAN',
            hint: _bankLast4 != null ? 'Atual: •••• $_bankLast4 (escreve só para mudar)' : 'PT50 0000 0000 0000 0000 0000 0',
          ),
          _gap(),
          const _LockNote('Vai direto para a Stripe. A À Nossa! não guarda o IBAN completo nem o NIF.'),
          if (!_tosAlready) ...[
            const SizedBox(height: 10),
            const OnbMeta('Ao enviar, confirmas que os dados são verdadeiros, que a conta está em teu nome ou da tua '
                'empresa, e aceitas os termos de serviço da Stripe, que processa os pagamentos da À Nossa!.'),
          ],
        ];
      case _Step.document:
        return [
          Row(children: [
            Expanded(child: _DocTile(label: 'Frente', file: _docFront, onTap: () => _pick(true))),
            const SizedBox(width: 10),
            Expanded(child: _DocTile(label: 'Verso', file: _docBack, onTap: () => _pick(false))),
          ]),
          _gap(),
          const OnbMeta('No passaporte só precisas da frente.'),
        ];
    }
  }
}

class _LockNote extends StatelessWidget {
  final String text;
  const _LockNote(this.text);

  @override
  Widget build(BuildContext context) => Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
        const Padding(
          padding: EdgeInsets.only(top: 2),
          child: LineIcon('M7 11h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2zM8 11V7a4 4 0 0 1 8 0v4',
              size: 14, color: AppTheme.inkMuted),
        ),
        const SizedBox(width: 6),
        Expanded(child: OnbMeta(text)),
      ]);
}

/// Erro: linha vermelha 1,5 + ponto (DESIGN.md §7).
class _ErrorLine extends StatelessWidget {
  final String text;
  const _ErrorLine(this.text);

  @override
  Widget build(BuildContext context) {
    const red = Color(0xFFC8553D);
    return Container(
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(16), border: Border.all(color: red, width: 1.5)),
      child: Row(children: [
        Container(width: 8, height: 8, decoration: const BoxDecoration(color: red, shape: BoxShape.circle)),
        const SizedBox(width: 10),
        Expanded(child: Text(text, style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w600, color: AppTheme.ink))),
      ]),
    );
  }
}

/// Frente / verso do documento: cartão branco 150, círculo preto "+" ou
/// verde com visto.
class _DocTile extends StatelessWidget {
  final String label;
  final XFile? file;
  final VoidCallback onTap;
  const _DocTile({required this.label, required this.file, required this.onTap});

  @override
  Widget build(BuildContext context) => SnappyTap(
        onTap: onTap,
        child: Container(
          height: 150,
          padding: const EdgeInsets.all(16),
          decoration: BoxDecoration(color: Colors.white, border: AppTheme.cardBorder, borderRadius: BorderRadius.circular(22)),
          child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
            Container(
              width: 40,
              height: 40,
              decoration: BoxDecoration(color: file != null ? const Color(0xFF4F6B4A) : AppTheme.ink, shape: BoxShape.circle),
              alignment: Alignment.center,
              child: LineIcon(file != null ? LineIcon.check : LineIcon.plus, size: 18, color: Colors.white, stroke: file != null ? 2.6 : 2),
            ),
            const SizedBox(height: 8),
            Text(label, style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            const SizedBox(height: 2),
            Text(file?.name ?? 'Tirar foto ou escolher',
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
                textAlign: TextAlign.center,
                style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w600, color: AppTheme.inkMuted)),
          ]),
        ),
      );
}
