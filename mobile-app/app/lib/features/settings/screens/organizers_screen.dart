import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:copo_dagua_app/shared/utils_clipboard.dart';
import 'package:flutter/material.dart';
import 'package:share_plus/share_plus.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/public_link.dart';
import '../../../core/wedding/organizers.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import 'package:copo_dagua_app/shared/widgets/island_sheet.dart';

/// Uma só sombra dos cartões em destaque (DESIGN.md §5).
const _soft = [BoxShadow(color: Color(0x0F171713), blurRadius: 18, offset: Offset(0, 6))];

/// Título de grupo em maiúsculas (DESIGN.md §3): 12, espaçamento 2, `#57534E`.
Widget _caps(String text) => Padding(
      padding: const EdgeInsets.only(top: 6, bottom: 2),
      child: Text(text,
          style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, letterSpacing: 2, color: AppTheme.inkMuted)),
    );

/// Resumo curto das permissões, mostrado quando "O que pode fazer" está
/// recolhido (ex.: "Pode tudo", "Só bilhetes e entradas", "3 de 6").
String _permsSummary(OrganizerPerms perms, int total) {
  if (perms.count >= total) return 'Pode tudo';
  if (perms.count == 0) return 'Sem acessos';
  if (perms.count == 1 && perms.can(OrganizerPerm.bilhetes)) return 'Só bilhetes e entradas';
  return '${perms.count} de $total';
}

BoxDecoration _card() => BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22), boxShadow: _soft);

/// Organizadores do evento (migração 159): o dono escolhe o que cada
/// co-organizador pode fazer, ou retira-o. Os outros veem o que podem.
/// Estilo do mockup «Organizadores» (2026-11-17).
class OrganizersScreen extends ConsumerWidget {
  const OrganizersScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final wedding = ref.watch(weddingControllerProvider.select((s) => s.wedding));
    final listAsync = wedding == null ? null : ref.watch(weddingOrganizersProvider(wedding.id));
    final mine = ref.watch(myWeddingPermsProvider).value ?? OrganizerPerms.all;
    final topInset = MediaQuery.paddingOf(context).top;

    Widget content;
    if (listAsync == null) {
      content = const SizedBox.shrink();
    } else {
      content = listAsync.when(
        loading: () => const Padding(padding: EdgeInsets.only(top: 60), child: Center(child: CircularProgressIndicator())),
        error: (e, s) => const _Message('Não foi possível carregar os organizadores.'),
        data: (list) {
          if (list == null) {
            return const _Message('Falta correr a migração 159 para escolher o que cada organizador pode fazer.');
          }
          final owners = list.where((o) => o.isOwner).toList();
          final others = list.where((o) => !o.isOwner).toList();
          return Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              if (owners.isNotEmpty) ...[
                _caps('ORGANIZADOR PRINCIPAL'),
                const SizedBox(height: 6),
                for (final o in owners) _OwnerCard(o),
              ],
              if (mine.isOwner) ...[
                const SizedBox(height: 14),
                _InviteCard(wedding: wedding!),
              ],
              const SizedBox(height: 14),
              _caps('A ORGANIZAR CONTIGO · ${others.length}'),
              const SizedBox(height: 6),
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
      );
    }

    return GradientScaffold(
      background: AppBackground.subtle,
      body: ListView(
        padding: EdgeInsets.fromLTRB(AppTheme.screenMargin, topInset + 12, AppTheme.screenMargin, 40),
        children: [
          // Voltar redondo branco 44 (§2).
          _RoundButton(
            icon: Hi.chevronLeft,
            label: 'Voltar',
            onTap: () => context.canPop() ? context.pop() : context.go('/home'),
          ),
          const SizedBox(height: 14),
          const Text('Organizadores', style: TextStyle(fontSize: 28, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          const SizedBox(height: 4),
          const Text('Quem organiza o evento contigo. Convida por link e escolhe o que cada um pode fazer.',
              style: TextStyle(fontSize: 13, height: 1.4, color: AppTheme.inkMuted)),
          const SizedBox(height: 14),
          content,
        ],
      ),
    );
  }
}

class _RoundButton extends StatelessWidget {
  final IconData icon;
  final String label;
  final VoidCallback onTap;
  const _RoundButton({required this.icon, required this.label, required this.onTap});
  @override
  Widget build(BuildContext context) => Align(
        alignment: Alignment.centerLeft,
        child: Semantics(
          button: true,
          label: label,
          child: Material(
            color: AppTheme.ink,
            shape: const CircleBorder(),
            elevation: 0,
            child: InkWell(
              customBorder: const CircleBorder(),
              onTap: onTap,
              child: SizedBox(
                width: 44,
                height: 44,
                child: Icon(icon, size: 20, color: Colors.white),
              ),
            ),
          ),
        ),
      );
}

/// Toggle verde do mockup (ligado = verde, knob branco). 44×26.
class _PermToggle extends StatelessWidget {
  final bool on;
  const _PermToggle(this.on);
  @override
  Widget build(BuildContext context) => AnimatedContainer(
        duration: const Duration(milliseconds: 160),
        width: 44,
        height: 26,
        decoration: BoxDecoration(
          color: on ? AppTheme.accentOliveDark : const Color(0xFFD8D3C8),
          borderRadius: BorderRadius.circular(999),
        ),
        child: AnimatedAlign(
          duration: const Duration(milliseconds: 160),
          curve: Curves.easeOut,
          alignment: on ? Alignment.centerRight : Alignment.centerLeft,
          child: Container(
            margin: const EdgeInsets.all(3),
            width: 20,
            height: 20,
            decoration: const BoxDecoration(color: Colors.white, shape: BoxShape.circle),
          ),
        ),
      );
}

class _Message extends StatelessWidget {
  final String text;
  const _Message(this.text);
  @override
  Widget build(BuildContext context) => Container(
        decoration: _card(),
        padding: const EdgeInsets.all(16),
        child: Text(text, style: const TextStyle(fontSize: 14, height: 1.4, color: AppTheme.inkMuted)),
      );
}

class _OwnerCard extends StatelessWidget {
  final Organizer o;
  const _OwnerCard(this.o);
  @override
  Widget build(BuildContext context) => Container(
        decoration: _card(),
        padding: const EdgeInsets.all(16),
        child: Row(children: [
          _Avatar(o.name),
          const SizedBox(width: 12),
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text(o.name,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              const Text('Pode tudo', style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
            ]),
          ),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
            decoration: BoxDecoration(color: const Color(0xFFE6EDE1), borderRadius: BorderRadius.circular(999)),
            child: const Text('Tu',
                style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: Color(0xFF3F7A4F))),
          ),
        ]),
      );
}

class _Avatar extends StatelessWidget {
  final String name;
  const _Avatar(this.name);
  @override
  Widget build(BuildContext context) => Container(
        width: 44,
        height: 44,
        alignment: Alignment.center,
        decoration: const BoxDecoration(color: Color(0xFFE6EDE1), shape: BoxShape.circle),
        child: Text(
          name.trim().isEmpty ? '?' : name.trim().characters.first.toUpperCase(),
          style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.accentOliveDark),
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
  // "O que pode fazer" começa recolhido (pedido 2026-11-18): a lista é
  // longa, por isso mostra só o resumo até se tocar para abrir.
  bool _open = false;
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
    final ok = await showIslandDialog<bool>(
      context: context,
      builder: (ctx) => IslandAlert(
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
    final pending = o.status == 'pending';
    final total = OrganizerPerm.values.length;
    return Container(
      decoration: _card(),
      padding: const EdgeInsets.all(16),
      child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Row(children: [
          _Avatar(o.name),
          const SizedBox(width: 12),
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text(o.name,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              Text(
                pending ? 'Convite por aceitar' : 'A organizar contigo',
                style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted),
              ),
            ]),
          ),
          if (_saving)
            const SizedBox(width: 20, height: 20, child: CircularProgressIndicator(strokeWidth: 2))
          else if (widget.editable)
            _RemoveButton(onTap: _remove, label: 'Retirar ${o.name}'),
        ]),
        const Divider(height: 28, color: Color(0xFFD9D9D9)),
        // Cabeçalho recolhível: resumo à direita + chevron para abrir/fechar.
        InkWell(
          onTap: () => setState(() => _open = !_open),
          borderRadius: BorderRadius.circular(10),
          child: Row(children: [
            _caps('O QUE PODE FAZER'),
            const Spacer(),
            Text(_permsSummary(perms, total),
                style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
            const SizedBox(width: 8),
            AnimatedRotation(
              turns: _open ? 0.5 : 0,
              duration: const Duration(milliseconds: 150),
              child: const Icon(Icons.keyboard_arrow_down_rounded, size: 22, color: AppTheme.inkMuted),
            ),
          ]),
        ),
        if (_open && widget.editable) ...[
          const SizedBox(height: 10),
          // Presets rápidos (filtro §6): ativo verde, inativo branco.
          Row(children: [
            _Preset(
              label: 'Tudo',
              selected: perms.count == total,
              onTap: _saving ? null : () => _set(OrganizerPerms(isOwner: false, map: {for (final p in OrganizerPerm.values) p.key: true})),
            ),
            const SizedBox(width: 8),
            _Preset(
              label: 'Só bilhetes e entradas',
              selected: perms.count == 1 && perms.can(OrganizerPerm.bilhetes),
              onTap: _saving
                  ? null
                  : () => _set(OrganizerPerms(isOwner: false, map: {for (final p in OrganizerPerm.values) p.key: p == OrganizerPerm.bilhetes})),
            ),
          ]),
          const SizedBox(height: 4),
          for (var i = 0; i < OrganizerPerm.values.length; i++) ...[
            if (i > 0) const Divider(height: 1, color: Color(0xFFD9D9D9)),
            _PermRow(
              perm: OrganizerPerm.values[i],
              on: perms.can(OrganizerPerm.values[i]),
              onTap: _saving ? null : () => _set(perms.withPerm(OrganizerPerm.values[i], !perms.can(OrganizerPerm.values[i]))),
            ),
          ],
        ] else if (_open) ...[
          const SizedBox(height: 4),
          for (var i = 0; i < OrganizerPerm.values.length; i++) ...[
            if (i > 0) const Divider(height: 1, color: Color(0xFFD9D9D9)),
            _PermRow(perm: OrganizerPerm.values[i], on: perms.can(OrganizerPerm.values[i]), onTap: null),
          ],
        ],
      ]),
    );
  }
}

class _RemoveButton extends StatelessWidget {
  final VoidCallback onTap;
  final String label;
  const _RemoveButton({required this.onTap, required this.label});
  @override
  Widget build(BuildContext context) => Semantics(
        button: true,
        label: label,
        child: Material(
          color: AppTheme.background,
          shape: const CircleBorder(),
          child: InkWell(
            customBorder: const CircleBorder(),
            onTap: onTap,
            child: const SizedBox(
              width: 44,
              height: 44,
              child: Icon(Hi.trash, size: 20, color: Color(0xFFC8553D)),
            ),
          ),
        ),
      );
}

class _Preset extends StatelessWidget {
  final String label;
  final bool selected;
  final VoidCallback? onTap;
  const _Preset({required this.label, required this.selected, this.onTap});
  @override
  Widget build(BuildContext context) => GestureDetector(
        onTap: onTap,
        child: Container(
          height: 38,
          alignment: Alignment.center,
          padding: const EdgeInsets.symmetric(horizontal: 16),
          decoration: BoxDecoration(
            color: selected ? AppTheme.accentOliveDark : Colors.white,
            borderRadius: BorderRadius.circular(19),
          ),
          child: Text(label,
              style: TextStyle(
                  fontSize: 14, fontWeight: FontWeight.w700, color: selected ? Colors.white : AppTheme.ink)),
        ),
      );
}

class _PermRow extends StatelessWidget {
  final OrganizerPerm perm;
  final bool on;
  final VoidCallback? onTap;
  const _PermRow({required this.perm, required this.on, this.onTap});
  @override
  Widget build(BuildContext context) {
    final green = AppTheme.accentOliveDark;
    return InkWell(
      onTap: onTap,
      child: Padding(
        padding: const EdgeInsets.symmetric(vertical: 12),
        child: Row(children: [
          Icon(perm.icon, size: 22, color: on ? green : AppTheme.inkMuted),
          const SizedBox(width: 12),
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text(perm.label, style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              Text(perm.description, style: const TextStyle(fontSize: 13, height: 1.35, color: AppTheme.inkMuted)),
            ]),
          ),
          const SizedBox(width: 10),
          onTap == null
              ? Icon(on ? Hi.check : Hi.noSymbol, color: on ? green : AppTheme.inkMuted, semanticLabel: on ? 'Pode' : 'Não pode')
              : _PermToggle(on),
        ]),
      ),
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
              const Icon(Hi.lockClosed, size: 56, color: AppTheme.inkMuted),
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
  final Set<String> _invited = {};

  Future<void> _inviteFriend(InviteCandidate c) async {
    setState(() => _invited.add(c.id));
    try {
      await inviteOrganizer(widget.wedding.id, c.id);
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('Convite enviado a ${c.name}.')));
      }
    } catch (_) {
      if (mounted) {
        setState(() => _invited.remove(c.id));
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Não foi possível enviar o convite.')));
      }
    }
  }

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
    await copyText(link);
    if (mounted) ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Link copiado.')));
  }

  @override
  Widget build(BuildContext context) {
    final candidates = ref.watch(organizerInviteCandidatesProvider(widget.wedding.id)).value ?? const <InviteCandidate>[];
    final hasFriends = candidates.isNotEmpty;
    return Container(
      decoration: _card(),
      padding: const EdgeInsets.all(18),
      child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        const Text('Convidar para organizar',
            style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        const SizedBox(height: 4),
        Text(
            hasFriends
                ? 'Convida amigos que já segues na app, ou envia um link a quem quiseres.'
                : 'Envia o link a quem vai organizar contigo. Cada link serve para uma pessoa.',
            style: const TextStyle(fontSize: 13, height: 1.45, color: AppTheme.inkMuted)),
        if (hasFriends) ...[
          const SizedBox(height: 16),
          _caps('AMIGOS QUE SEGUES'),
          const SizedBox(height: 2),
          for (var i = 0; i < candidates.length; i++) ...[
            if (i > 0) const Divider(height: 1, color: Color(0xFFD9D9D9)),
            _FriendInviteRow(
              candidate: candidates[i],
              invited: _invited.contains(candidates[i].id),
              onInvite: () => _inviteFriend(candidates[i]),
            ),
          ],
          const Divider(height: 28, color: Color(0xFFD9D9D9)),
          _caps('OU POR LINK'),
          const SizedBox(height: 2),
          const Text('Para quem ainda não está na app. Cada link serve para uma pessoa.',
              style: TextStyle(fontSize: 13, height: 1.45, color: AppTheme.inkMuted)),
        ],
        const SizedBox(height: 14),
        Row(children: [
          Expanded(
            child: FilledButton.icon(
              onPressed: _busy ? null : _share,
              icon: const Icon(Hi.arrowUpOnSquare, size: 18),
              label: const FittedBox(child: Text('Enviar link', maxLines: 1, style: TextStyle(fontSize: 15, fontWeight: FontWeight.w700))),
              style: FilledButton.styleFrom(
                backgroundColor: AppTheme.ink,
                foregroundColor: Colors.white,
                minimumSize: const Size.fromHeight(52),
                padding: const EdgeInsets.symmetric(horizontal: 12),
                shape: const StadiumBorder(),
              ),
            ),
          ),
          const SizedBox(width: 10),
          Expanded(
            child: OutlinedButton(
              onPressed: _busy ? null : () => _copy(),
              style: OutlinedButton.styleFrom(
                foregroundColor: AppTheme.ink,
                side: const BorderSide(color: AppTheme.ink, width: 1.5),
                minimumSize: const Size.fromHeight(52),
                padding: const EdgeInsets.symmetric(horizontal: 10),
                shape: const StadiumBorder(),
              ),
              child: const FittedBox(child: Text('Copiar link', maxLines: 1, style: TextStyle(fontSize: 15, fontWeight: FontWeight.w700))),
            ),
          ),
        ]),
      ]),
    );
  }
}

/// Linha de um amigo que segues, com botão "Convidar" (ou "Convidado" depois).
class _FriendInviteRow extends StatelessWidget {
  final InviteCandidate candidate;
  final bool invited;
  final VoidCallback onInvite;
  const _FriendInviteRow({required this.candidate, required this.invited, required this.onInvite});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 10),
      child: Row(children: [
        _Avatar(candidate.name),
        const SizedBox(width: 12),
        Expanded(
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text(candidate.name,
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
                style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            Text(
                candidate.username != null && candidate.username!.isNotEmpty ? '@${candidate.username}' : 'Já se seguem',
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
                style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
          ]),
        ),
        const SizedBox(width: 10),
        if (invited)
          const Padding(
            padding: EdgeInsets.symmetric(horizontal: 6),
            child: Text('Convidado',
                style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
          )
        else
          SizedBox(
            height: 36,
            child: FilledButton(
              onPressed: onInvite,
              style: FilledButton.styleFrom(
                backgroundColor: AppTheme.ink,
                foregroundColor: Colors.white,
                padding: const EdgeInsets.symmetric(horizontal: 16),
                minimumSize: const Size(0, 36),
                shape: const StadiumBorder(),
                textStyle: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700, fontFamily: AppTheme.fontFamily),
              ),
              child: const Text('Convidar'),
            ),
          ),
      ]),
    );
  }
}
