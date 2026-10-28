import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import '../../core/supabase/supabase_config.dart';
import '../../core/theme/app_theme.dart';
import '../../shared/widgets/buttons.dart';
import '../../shared/widgets/gradient_scaffold.dart';
import '../../shared/widgets/page_header.dart';
import '../../shared/widgets/sticker_icon.dart';

/// Mensagem da equipa À Nossa! (migrações 133/134): abre ao tocar na
/// notificação. Mostra a mensagem completa e deixa responder — a resposta
/// cria um pedido de suporte que a equipa vê no admin.
class AdminMessageScreen extends StatefulWidget {
  final String id;
  const AdminMessageScreen({super.key, required this.id});

  @override
  State<AdminMessageScreen> createState() => _AdminMessageScreenState();
}

class _AdminMessageScreenState extends State<AdminMessageScreen> {
  Map<String, dynamic>? _msg;
  bool _loading = true;
  bool _sending = false;
  bool _sent = false;
  String? _error;
  final _reply = TextEditingController();

  @override
  void initState() {
    super.initState();
    _load();
  }

  @override
  void dispose() {
    _reply.dispose();
    super.dispose();
  }

  Future<void> _load() async {
    try {
      final rows = await supabase.rpc('get_admin_message', params: {'p_id': widget.id}) as List;
      if (!mounted) return;
      setState(() {
        _msg = rows.isEmpty ? null : rows.first as Map<String, dynamic>;
        _loading = false;
      });
    } catch (_) {
      if (mounted) setState(() => _loading = false);
    }
  }

  Future<void> _send() async {
    final text = _reply.text.trim();
    if (text.length < 2) {
      setState(() => _error = 'Escreve a tua resposta.');
      return;
    }
    setState(() {
      _sending = true;
      _error = null;
    });
    try {
      await supabase.rpc('reply_admin_message', params: {'p_id': widget.id, 'p_body': text});
      if (!mounted) return;
      setState(() {
        _sending = false;
        _sent = true;
      });
    } catch (_) {
      if (!mounted) return;
      setState(() {
        _sending = false;
        _error = 'Não foi possível enviar. Tenta outra vez.';
      });
    }
  }

  String _date(String? iso) {
    final d = iso == null ? null : DateTime.tryParse(iso)?.toLocal();
    if (d == null) return '';
    String two(int n) => n.toString().padLeft(2, '0');
    return '${two(d.day)}/${two(d.month)}/${d.year} · ${two(d.hour)}:${two(d.minute)}';
  }

  @override
  Widget build(BuildContext context) {
    final m = _msg;
    final link = m?['link'] as String?;
    return GradientScaffold(
      background: AppBackground.subtle,
      body: SafeArea(
        child: Column(children: [
          const PageHeader(title: 'Mensagem da À Nossa!', centered: true),
          Expanded(
            child: _loading
                ? const Center(child: CircularProgressIndicator())
                : m == null
                    ? const Padding(
                        padding: EdgeInsets.all(24),
                        child: Text('Esta mensagem já não está disponível.', textAlign: TextAlign.center),
                      )
                    : ListView(
                        padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 8, AppTheme.screenMargin, 32),
                        children: [
                          Container(
                            padding: const EdgeInsets.all(18),
                            decoration: whiteLineCard(radius: 20, line: AppTheme.borderMuted),
                            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                              Text(m['title'] as String? ?? '',
                                  style: const TextStyle(fontSize: AppFontSize.lg, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                              const SizedBox(height: 4),
                              Text(_date(m['created_at'] as String?),
                                  style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted)),
                              const SizedBox(height: 12),
                              SelectableText(m['body'] as String? ?? '',
                                  style: const TextStyle(fontSize: AppFontSize.base, height: 1.5, color: AppTheme.ink)),
                              if (link != null && link.isNotEmpty) ...[
                                const SizedBox(height: 16),
                                OutlinedButton(onPressed: () => context.push(link), child: const Text('Abrir')),
                              ],
                            ]),
                          ),
                          const SizedBox(height: 20),
                          if (_sent)
                            Container(
                              padding: const EdgeInsets.all(16),
                              decoration: BoxDecoration(color: AppTheme.accentTint, borderRadius: BorderRadius.circular(16)),
                              child: const Text(
                                'Resposta enviada. A equipa À Nossa! vai responder-te em breve — recebes uma notificação.',
                                style: TextStyle(fontSize: AppFontSize.base, height: 1.4),
                              ),
                            )
                          else ...[
                            const Text('Responder', style: TextStyle(fontSize: AppFontSize.base, fontWeight: FontWeight.w700)),
                            const SizedBox(height: 8),
                            TextField(
                              controller: _reply,
                              minLines: 3,
                              maxLines: 8,
                              maxLength: 2000,
                              decoration: InputDecoration(
                                hintText: 'Escreve a tua resposta…',
                                errorText: _error,
                                filled: true,
                                fillColor: Colors.white,
                                border: OutlineInputBorder(borderRadius: BorderRadius.circular(16)),
                              ),
                            ),
                            const SizedBox(height: 8),
                            PrimaryButton(label: 'Enviar resposta', loading: _sending, onPressed: _sending ? null : _send),
                          ],
                        ],
                      ),
          ),
        ]),
      ),
    );
  }
}
