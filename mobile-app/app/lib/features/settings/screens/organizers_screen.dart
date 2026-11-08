import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:share_plus/share_plus.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/public_link.dart';
import '../../../core/wedding/organizers.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/page_header.dart';

/// Organizadores do evento (migração 159): o dono escolhe o que cada
/// co-organizador pode fazer, ou retira-o. Os outros veem o que podem.
class OrganizersScreen extends ConsumerWidget {
  const OrganizersScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final wedding = ref.watch(weddingControllerProvider.select((s) => s.wedding));
    final listAsync = wedding == null ? null : ref.watch(weddingOrganizersProvider(wedding.id));
    final mine = ref.watch(myWeddingPermsProvider).value ?? OrganizerPerms.all;
    return GradientScaffold(
      background: AppBackground.subtle,
      body: SafeArea(
        bottom: false,
        child: Column(children: [
          const PageHeader(title: 'Organizadores', subtitle: 'Quem organiza contigo e o que pode fazer.', centered: true),
          Expanded(
            child: listAsync == null
                ? const SizedBox.shrink()
                : listAsync.when(
                    loading: () => const Center(child: CircularProgressIndicator()),
                    error: (e, s) => const _Message('Não foi possível carregar os organizadores.'),
                    data: (list) {
                      if (list == null) {
                        return const _Message('Falta correr a migração 159 para escolher o que cada organizador pode fazer.');
                      }
                      final others = list.where((o) => !o.isOwner).toList();
                      return ListView(
                        padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 12, AppTheme.screenMargin, 40),
                        children: [
                          for (final o in list.where((o) => o.isOwner)) _OwnerTile(o),
                          const SizedBox(height: 12),
                          // Convidar o par ou outro organizador, só por link
                          // (pedido 2026-11-08: juntar aqui e sem email).
                          if (mine.isOwner) ...[
                            _InviteCard(wedding: wedding!),
                            const SizedBox(height: 12),
                          ],
                          if (others.isEmpty)
                            const _Message('Ainda não há mais ninguém a organizar.')
                          else
                            for (final o in others) ...[
                              _CollaboratorCard(organizer: o, editable: mine.isOwner, weddingId: wedding!.id),
                              const SizedBox(height: 12),
                            ],
                        ],
                      );
                    },
                  ),
          ),
        ]),
      ),
    );
  }
}

class _Message extends StatelessWidget {
  final String text;
  const _Message(this.text);
  @override
  Widget build(BuildContext context) => Padding(
        padding: const EdgeInsets.all(24),
        child: Text(text, textAlign: TextAlign.center, style: const TextStyle(fontSize: 14, height: 1.4, color: AppTheme.inkMuted)),
      );
}

class _OwnerTile extends StatelessWidget {
  final Organizer o;
  const _OwnerTile(this.o);
  @override
  Widget build(BuildContext context) => Container(
        padding: const EdgeInsets.all(14),
        decoration: BoxDecoration(color: AppTheme.surface, borderRadius: BorderRadius.circular(AppRadius.lg)),
        child: Row(children: [
          _Avatar(o.name),
          const SizedBox(width: 12),
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text(o.name, style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              const Text('Organizador principal · pode tudo', style: TextStyle(fontSize: 12.5, color: AppTheme.inkMuted)),
            ]),
          ),
        ]),
      );
}

class _Avatar extends StatelessWidget {
  final String name;
  const _Avatar(this.name);
  @override
  Widget build(BuildContext context) => CircleAvatar(
        radius: 18,
        backgroundColor: AppTheme.accentTint,
        child: Text(
          name.trim().isEmpty ? '?' : name.trim().characters.first.toUpperCase(),
          style: TextStyle(fontWeight: FontWeight.w700, color: AppTheme.accentOliveDark),
        ),
      );
}

class _CollaboratorCard extends ConsumerStatefulWidget {
  final Organizer organizer;
  final bool editable;
  final String weddingId;
  const _CollaboratorCard({required this.organizer, required this.editable, required this.weddingId});

  @override
  ConsumerState<_CollaboratorCard> createState() => _CollaboratorCardState();
}

class _CollaboratorCardState extends ConsumerState<_CollaboratorCard> {
  OrganizerPerms? _local;
  bool _saving = false;

  Future<void> _set(OrganizerPerms next) async {
    final id = widget.organizer.collaboratorId;
    if (id == null) return;
    final before = _local;
    setState(() {
      _local = next;
      _saving = true;
    });
    try {
      await setOrganizerPermissions(id, next);
      ref.invalidate(weddingOrganizersProvider(widget.weddingId));
    } catch (_) {
      if (!mounted) return;
      setState(() => _local = before);
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Não foi possível guardar. Tenta outra vez.')));
    } finally {
      if (mounted) setState(() => _saving = false);
    }
  }

  Future<void> _remove() async {
    final id = widget.organizer.collaboratorId;
    if (id == null) return;
    final ok = await showDialog<bool>(
      context: context,
      builder: (ctx) => AlertDialog(
        title: Text('Retirar ${widget.organizer.name}?'),
        content: const Text('Deixa de ver e de organizar este evento.'),
        actions: [
          TextButton(onPressed: () => Navigator.pop(ctx, false), child: const Text('Cancelar')),
          FilledButton(onPressed: () => Navigator.pop(ctx, true), child: const Text('Retirar')),
        ],
      ),
    );
    if (ok != true) return;
    try {
      await removeOrganizer(id);
      ref.invalidate(weddingOrganizersProvider(widget.weddingId));
    } catch (_) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Não foi possível retirar. Tenta outra vez.')));
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    final o = widget.organizer;
    final perms = _local ?? o.perms;
    final green = AppTheme.accentOliveDark;
    final pending = o.status == 'pending';
    return Container(
      padding: const EdgeInsets.fromLTRB(14, 14, 14, 6),
      decoration: BoxDecoration(color: AppTheme.surface, borderRadius: BorderRadius.circular(AppRadius.lg)),
      child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Row(children: [
          _Avatar(o.name),
          const SizedBox(width: 12),
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text(o.name, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              Text(
                pending ? 'Convite por aceitar' : '${perms.count} de ${OrganizerPerm.values.length} permissões',
                style: const TextStyle(fontSize: 12.5, color: AppTheme.inkMuted),
              ),
            ]),
          ),
          if (_saving) const SizedBox(width: 16, height: 16, child: CircularProgressIndicator(strokeWidth: 2)),
          if (widget.editable)
            IconButton(
              onPressed: _remove,
              tooltip: 'Retirar organizador',
              icon: const Icon(Icons.person_remove_outlined, color: AppTheme.inkMuted),
            ),
        ]),
        if (widget.editable) ...[
          const SizedBox(height: 8),
          Wrap(spacing: 8, runSpacing: 8, children: [
            ChoiceChip(
              label: const Text('Tudo'),
              selected: perms.count == OrganizerPerm.values.length,
              showCheckmark: false,
              onSelected: _saving ? null : (_) => _set(OrganizerPerms(isOwner: false, map: {for (final p in OrganizerPerm.values) p.key: true})),
            ),
            ChoiceChip(
              label: const Text('Só bilhetes e entradas'),
              selected: perms.count == 1 && perms.can(OrganizerPerm.bilhetes),
              showCheckmark: false,
              onSelected: _saving
                  ? null
                  : (_) => _set(OrganizerPerms(isOwner: false, map: {for (final p in OrganizerPerm.values) p.key: p == OrganizerPerm.bilhetes})),
            ),
          ]),
        ],
        const SizedBox(height: 4),
        for (final p in OrganizerPerm.values)
          widget.editable
              ? SwitchListTile.adaptive(
                  contentPadding: EdgeInsets.zero,
                  secondary: Icon(p.icon, color: perms.can(p) ? green : AppTheme.inkMuted),
                  title: Text(p.label, style: const TextStyle(fontWeight: FontWeight.w700, color: AppTheme.ink)),
                  subtitle: Text(p.description, style: const TextStyle(fontSize: 12.5, color: AppTheme.inkMuted)),
                  value: perms.can(p),
                  onChanged: _saving ? null : (v) => _set(perms.withPerm(p, v)),
                )
              : ListTile(
                  contentPadding: EdgeInsets.zero,
                  leading: Icon(p.icon, color: perms.can(p) ? green : AppTheme.inkMuted),
                  title: Text(p.label, style: const TextStyle(fontWeight: FontWeight.w700, color: AppTheme.ink)),
                  trailing: Icon(perms.can(p) ? Icons.check_rounded : Icons.block_rounded,
                      color: perms.can(p) ? green : AppTheme.inkMuted, semanticLabel: perms.can(p) ? 'Pode' : 'Não pode'),
                ),
      ]),
    );
  }
}

/// Ecrãs do organizador que precisam de uma permissão (migração 159).
/// Sem ela mostra uma explicação em vez do ecrã.
class PermissionGate extends ConsumerWidget {
  final OrganizerPerm perm;
  final Widget child;
  const PermissionGate({super.key, required this.perm, required this.child});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final perms = ref.watch(myWeddingPermsProvider).value ?? OrganizerPerms.all;
    if (perms.can(perm)) return child;
    return GradientScaffold(
      background: AppBackground.subtle,
      body: SafeArea(
        child: Center(
          child: Padding(
            padding: const EdgeInsets.all(28),
            child: Column(mainAxisSize: MainAxisSize.min, children: [
              const Icon(Icons.lock_outline_rounded, size: 56, color: AppTheme.inkMuted),
              const SizedBox(height: 14),
              Text('Sem acesso a ${perm.label.toLowerCase()}',
                  textAlign: TextAlign.center,
                  style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              const SizedBox(height: 8),
              const Text(
                'O organizador principal não te deu esta permissão. Pede-lhe em Definições › Organizadores.',
                textAlign: TextAlign.center,
                style: TextStyle(fontSize: 14, height: 1.4, color: AppTheme.inkMuted),
              ),
              const SizedBox(height: 20),
              TextButton(
                onPressed: () => context.canPop() ? context.pop() : context.go('/home'),
                child: const Text('Voltar'),
              ),
            ]),
          ),
        ),
      ),
    );
  }
}

/// Convidar por link: um link por pessoa (o par, um wedding planner, a
/// família…); quem o abre fica a organizar (migração 079/159).
class _InviteCard extends ConsumerStatefulWidget {
  final Wedding wedding;
  const _InviteCard({required this.wedding});
  @override
  ConsumerState<_InviteCard> createState() => _InviteCardState();
}

class _InviteCardState extends ConsumerState<_InviteCard> {
  bool _busy = false;

  Future<String?> _link() async {
    try {
      final token = await ref.read(weddingControllerProvider.notifier).createPartnerInviteToken(widget.wedding.id);
      return publicLink('/juntar/$token');
    } catch (_) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Não foi possível criar o link de convite.')));
      }
      return null;
    }
  }

  Future<void> _share() async {
    setState(() => _busy = true);
    final link = await _link();
    if (mounted) setState(() => _busy = false);
    if (link == null) return;
    var shared = false;
    try {
      final result = await SharePlus.instance.share(
        ShareParams(text: 'Junta-te a mim para organizarmos o evento na app À Nossa!: $link', subject: 'Organiza comigo'),
      );
      shared = result.status != ShareResultStatus.unavailable;
    } catch (_) {}
    if (!shared) await _copy(link);
  }

  Future<void> _copy([String? existing]) async {
    final link = existing ?? await _link();
    if (link == null) return;
    await Clipboard.setData(ClipboardData(text: link));
    if (mounted) ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Link copiado.')));
  }

  @override
  Widget build(BuildContext context) {
    final isWedding = widget.wedding.eventType == EventType.wedding;
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(AppRadius.lg),
        border: Border.all(color: const Color(0xFFDCD8CE)),
      ),
      child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Text(isWedding ? 'Convidar o teu par ou outro organizador' : 'Convidar outro organizador',
            style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        const SizedBox(height: 4),
        const Text('Envia o link a quem vai organizar contigo. Cada link serve para uma pessoa.',
            style: TextStyle(fontSize: 13, height: 1.4, color: AppTheme.inkMuted)),
        const SizedBox(height: 12),
        Row(children: [
          Expanded(
            child: FilledButton.icon(
              onPressed: _busy ? null : _share,
              icon: const Icon(Icons.ios_share, size: 18),
              label: const FittedBox(child: Text('Enviar link', maxLines: 1, style: TextStyle(fontWeight: FontWeight.w700))),
              style: FilledButton.styleFrom(
                backgroundColor: AppTheme.accentOliveDark,
                foregroundColor: Colors.white,
                minimumSize: const Size.fromHeight(46),
                padding: const EdgeInsets.symmetric(horizontal: 12),
                shape: const StadiumBorder(),
              ),
            ),
          ),
          const SizedBox(width: 8),
          Expanded(
            child: OutlinedButton(
              onPressed: _busy ? null : () => _copy(),
              style: OutlinedButton.styleFrom(
                foregroundColor: AppTheme.ink,
                side: const BorderSide(color: Color(0xFFDCD8CE), width: 1.5),
                minimumSize: const Size.fromHeight(46),
                padding: const EdgeInsets.symmetric(horizontal: 10),
                shape: const StadiumBorder(),
              ),
              // Numa linha só, como o Enviar link (2026-11-08: "desformatado").
              child: const FittedBox(child: Text('Copiar link', maxLines: 1, style: TextStyle(fontWeight: FontWeight.w700))),
            ),
          ),
        ]),
      ]),
    );
  }
}
