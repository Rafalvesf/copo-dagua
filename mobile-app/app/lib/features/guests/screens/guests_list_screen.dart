import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:copo_dagua_app/shared/utils_clipboard.dart';
import 'package:flutter/material.dart';
import '../../../core/events/events_providers.dart';
import '../../../shared/widgets/section_frame.dart';
import 'package:flutter/services.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:share_plus/share_plus.dart';

import '../../../core/guests/guest_controller.dart';
import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/cards.dart';
import '../../../shared/widgets/fading_scroll.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/guest_widgets.dart';
import '../../../shared/widgets/page_kit.dart';
import '../../../shared/widgets/search_pill.dart';
import '../../../shared/widgets/v2_kit.dart';
import '../../../shared/widgets/green_hero.dart';
import '../../../shared/widgets/sticker_icon.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/feedback.dart';
import '../../../shared/widgets/mascot.dart';
import '../../../shared/widgets/floating_filter_bar.dart';
import '../../../shared/widgets/island_sheet.dart';

class GuestsListScreen extends ConsumerStatefulWidget {
  const GuestsListScreen({super.key});

  @override
  ConsumerState<GuestsListScreen> createState() => _GuestsListScreenState();
}

class _GuestsListScreenState extends ConsumerState<GuestsListScreen> {
  final _search = TextEditingController();
  String? _groupFilter;

  /// Grupos abertos em «Ver todos».
  final Set<String> _expanded = {};

  @override
  void initState() {
    super.initState();
    _search.addListener(() => setState(() {}));
  }

  @override
  void dispose() {
    _search.dispose();
    super.dispose();
  }

  Future<void> _addGuest() async {
    final weddingId = ref
        .read(guestsControllerProvider.notifier)
        .currentWeddingId;
    if (weddingId == null) return;
    final result = await showGuestFormSheet(context);
    if (result == null) return;
    ref
        .read(guestsControllerProvider.notifier)
        .addGuest(
          Guest(
            id: '',
            weddingId: weddingId,
            name: result.name,
            email: result.email,
            phone: result.phone,
            group: result.group,
            side: result.side,
            plusOneAllowed: result.plusOneAllowed,
            maxCompanions: result.maxCompanions,
          ),
        );
  }


  @override
  Widget build(BuildContext context) {
    final state = ref.watch(guestsControllerProvider);
    final wedding = ref.watch(weddingControllerProvider).wedding;
    final total = state.guests.length;

    final groups =
        state.guests
            .map((g) => g.group)
            .where((g) => g.isNotEmpty)
            .toSet()
            .toList()
          ..sort();

    final query = _search.text.trim().toLowerCase();
    final visible = state.filtered.where((g) {
      final matchesGroup = _groupFilter == null || g.group == _groupFilter;
      final matchesQuery =
          query.isEmpty || g.name.toLowerCase().contains(query);
      return matchesGroup && matchesQuery;
    }).toList();

    int countIn(String g) => state.guests.where((x) => x.group == g).length;

    // Mockup «Páginas do evento · com molduras» → Convidados (2026-11-22):
    // o teto no resumo, os pedidos para entrar e os grupos por resposta,
    // cada um numa moldura.
    final cap = wedding?.estimatedGuests;
    final requests = wedding == null ? const <JoinRequest>[] : (ref.watch(joinRequestsProvider(wedding.id)).value ?? const <JoinRequest>[]);
    Widget guestRow(Guest guest) => KitRow(
          lead: V2Avatar(guest.name, size: 44),
          title: guest.name,
          sub: [
            guest.group.isEmpty ? 'Convidado' : guest.group,
            if (guest.maxCompanions > 0) 'pode trazer ${guest.maxCompanions}',
          ].join(' · '),
          trailing: switch (guest.rsvpStatus) {
            RsvpStatus.confirmed => const KitTag('Vai'),
            RsvpStatus.declined => const KitTag('Não vai', kind: KitTagKind.neutral),
            _ => const KitTag('Por responder', kind: KitTagKind.pending),
          },
          onTap: () => context.push('/guests/${guest.id}'),
        );
    Widget group(String key, String title, List<Guest> list) {
      final open = _expanded.contains(key);
      final shown = open ? list : list.take(kListPreview).toList();
      void toggle() => setState(() => open ? _expanded.remove(key) : _expanded.add(key));
      return SectionFrame(title: '$title · ${list.length}', children: [
        KitGroup([for (final g in shown) guestRow(g)]),
        // Mais de 4: as fotos dos seguintes, «+X pessoas» e «Ver todos».
        if (list.length > kListPreview && !open)
          MoreFacesRow(rest: [for (final g in list.skip(kListPreview)) (g.name, null)], onTap: toggle)
        else if (list.length > kListPreview)
          FrameButton44('Ver menos', outlined: true, onTap: toggle),
      ]);
    }

    return GradientScaffold(
      background: AppBackground.feed,
      body: state.loading && state.guests.isEmpty
          ? const Center(child: CircularProgressIndicator())
          : KitPage(
              pinnedBack: true,
              rotateBack: false,
              children: [
                KitHeader(actions: [
                  if (wedding != null) V2RoundButton(icon: Hi.arrowUpOnSquare, tooltip: 'Convidar', onTap: () => context.push('/guests/convidar')),
                  KitAddButton(tooltip: 'Adicionar convidado', onTap: _addGuest),
                ]),
                KitTitle('Convidados',
                    subtitle: total == 0 ? 'Ainda sem convidados' : '$total ${total == 1 ? 'convidado' : 'convidados'} · ${state.confirmedCount} ${state.confirmedCount == 1 ? 'vai' : 'vão'}'),
                if (total > 0) ...[
                  Padding(padding: const EdgeInsets.only(top: 16), child: SearchPill(controller: _search, hint: 'Pesquisar convidados')),
                  if (groups.isNotEmpty)
                    KitPills([
                      KitPill(label: 'Todos', count: total, selected: _groupFilter == null, onTap: () => setState(() => _groupFilter = null)),
                      for (final g in groups)
                        KitPill(label: g, count: countIn(g), selected: _groupFilter == g, onTap: () => setState(() => _groupFilter = g)),
                    ]),
                ],
                // Tocar no resumo muda o teto de convidados (o do
                // onboarding); sem ele, «Definir o teto».
                SnappyTap(
                  onTap: wedding == null ? () {} : () => _editCap(wedding),
                  semanticLabel: 'Teto de convidados',
                  child: KitSummary(
                    kicker: 'A vossa lista',
                    value: '$total',
                    unit: cap != null && cap > 0
                        ? 'de $cap convidados'
                        : '${total == 1 ? 'convidado' : 'convidados'} · sem teto',
                    progress: total == 0 ? 0 : state.confirmedCount / total,
                    legend: total == 0
                        ? const []
                        : [
                            KitLegend(AppTheme.accentOliveDark, '${state.confirmedCount}', 'sim'),
                            KitLegend(const Color(0xFFF2A01B), '${state.pendingCount}', 'por responder'),
                            KitLegend(const Color(0xFFC8553D), '${state.declinedCount}', 'não'),
                          ],
                    footer: cap != null && cap > 0 ? null : 'Quantos convidados no máximo? Ajuda a contar lugares e menus.',
                    extra: wedding == null
                        ? null
                        : cap != null && cap > 0
                            ? const Padding(
                                padding: EdgeInsets.only(top: 8),
                                child: Text('Mudar o teto ›', style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                              )
                            : FrameButton44('Definir o teto', outlined: true, onTap: () => _editCap(wedding)),
                  ),
                ),
                // Pedidos para entrar: até 4 com «Ver»; mais, «+X pedidos».
                if (requests.isNotEmpty)
                  SectionFrame(
                    title: 'Pedidos para entrar · ${requests.length}',
                    trailing: SnappyTap(
                      onTap: () => context.push('/guests/pedidos'),
                      semanticLabel: 'Ver todos os pedidos',
                      child: const Text('Ver todos', style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                    ),
                    children: [
                      for (final r in requests.take(4))
                        FrameTaskRow(
                          lead: V2Avatar(r.name, size: 44),
                          title: r.name,
                          sub: [_ago(r.createdAt), if ((r.bringing ?? 0) > 0) 'traz ${r.bringing}'].join(' · '),
                          action: 'Ver',
                          onTap: () => context.push('/guests/pedidos?id=${r.id}'),
                        ),
                      if (requests.length > 4)
                        MoreFacesRow(
                          rest: [for (final r in requests.skip(4)) (r.name, null)],
                          noun: 'pedido',
                          nounPlural: 'pedidos',
                          action: 'Ver',
                          onTap: () => context.push('/guests/pedidos'),
                        ),
                    ],
                  ),
                if (total == 0)
                  SectionFrame(title: 'Convidados', children: [
                    FrameEmpty(
                      title: 'Ainda sem convidados',
                      text: 'Partilha o convite ou junta-os à mão.',
                      actions: [
                        if (wedding != null) FrameButton44('Convidar', onTap: () => context.push('/guests/convidar')),
                        FrameButton44('+ Juntar à mão', outlined: true, onTap: _addGuest),
                      ],
                    ),
                  ])
                else if (visible.isEmpty)
                  SectionFrame(title: 'Convidados', children: const [FrameNote('Sem convidados aqui.', top: 4)])
                else ...[
                  for (final (key, title, list) in [
                    ('pending', 'Por responder', [for (final g in visible) if (g.rsvpStatus != RsvpStatus.confirmed && g.rsvpStatus != RsvpStatus.declined) g]),
                    ('going', 'Vão', [for (final g in visible) if (g.rsvpStatus == RsvpStatus.confirmed) g]),
                    ('declined', 'Não vão', [for (final g in visible) if (g.rsvpStatus == RsvpStatus.declined) g]),
                  ])
                    if (list.isNotEmpty) group(key, title, list),
                ],
              ],
            ),
    );
  }

  /// Teto de convidados (o do onboarding, `estimated_guests`).
  Future<void> _editCap(Wedding wedding) async {
    final controller = TextEditingController(text: (wedding.estimatedGuests ?? 0) > 0 ? '${wedding.estimatedGuests}' : '');
    final v = await showIslandDialog<int>(
      context: context,
      builder: (d) => IslandAlert(
        title: Text((wedding.estimatedGuests ?? 0) > 0 ? 'Mudar o teto' : 'Teto de convidados'),
        content: TextField(
          controller: controller,
          autofocus: true,
          keyboardType: TextInputType.number,
          decoration: const InputDecoration(suffixText: 'convidados'),
        ),
        actions: [
          TextButton(onPressed: () => Navigator.of(d).pop(), child: const Text('Cancelar')),
          FilledButton(onPressed: () => Navigator.of(d).pop(int.tryParse(controller.text.trim())), child: const Text('Guardar')),
        ],
      ),
    );
    if (v == null || v < 0) return;
    try {
      await ref.read(weddingControllerProvider.notifier).update(wedding.copyWith(estimatedGuests: v));
    } catch (_) {
      if (mounted) ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Não foi possível guardar o teto.')));
    }
  }
}


String _ago(DateTime d) {
  final days = DateTime.now().difference(d).inDays;
  return days <= 0 ? 'Pediu hoje' : days == 1 ? 'Pediu ontem' : 'Pediu há $days dias';
}

/// "Partilhar convite": abre logo a partilha do telemóvel (WhatsApp,
/// Mensagens, Mail…) com o link e o código (pedido do utilizador,
/// 2026-10-20). Sem partilha disponível (ex: computador), mostra a folha
/// com o link e o código para copiar.
Future<void> shareWeddingInvite(BuildContext context, Wedding wedding) async {
  final url = wedding.inviteUrl;
  final code = wedding.guestCode;
  if (url != null) {
    final text = 'Estás convidado/a para o evento de ${wedding.displayNames}! '
        'Confirma a tua presença aqui: $url'
        '${code == null ? '' : '\nCódigo do evento: $code'}';
    try {
      final result = await SharePlus.instance.share(ShareParams(text: text, subject: 'Convite — ${wedding.displayNames}'));
      if (result.status != ShareResultStatus.unavailable) return;
    } catch (_) {}
  }
  if (!context.mounted) return;
  await showIslandSheet(
    context: context,
    isScrollControlled: true,
    builder: (context) => InviteShareSheet(wedding: wedding),
  );
}

class InviteShareSheet extends StatefulWidget {
  final Wedding wedding;

  const InviteShareSheet({super.key, required this.wedding});

  @override
  State<InviteShareSheet> createState() => InviteShareSheetState();
}

class InviteShareSheetState extends State<InviteShareSheet> {
  bool _linkCopied = false;
  bool _codeCopied = false;

  Future<void> _copyLink() async {
    await copyText(widget.wedding.inviteUrl ?? '');
    if (!mounted) return;
    setState(() => _linkCopied = true);
  }

  Future<void> _copyCode(String code) async {
    await copyText(code);
    if (!mounted) return;
    setState(() => _codeCopied = true);
  }

  @override
  Widget build(BuildContext context) {
    final guestCode = widget.wedding.guestCode;
    final inviteUrl = widget.wedding.inviteUrl;
    return Padding(
      padding: const EdgeInsets.fromLTRB(20, 20, 20, 32),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Text(
            'Partilhar convite',
            style: Theme.of(context).textTheme.titleLarge,
          ),
          const SizedBox(height: 6),
          Text(
            'Envia este link aos teus convidados — vão precisar de criar '
            'conta para confirmar presença.',
            style: TextStyle(color: AppTheme.inkMuted, fontSize: AppFontSize.md),
          ),
          if (inviteUrl != null) ...[
          const SizedBox(height: 16),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
            decoration: BoxDecoration(
              color: AppTheme.accentTint,
              borderRadius: BorderRadius.circular(AppRadius.md),
            ),
            child: Row(
              children: [
                Expanded(
                  child: Text(
                    inviteUrl,
                    style: const TextStyle(
                      fontWeight: FontWeight.w600,
                      fontSize: AppFontSize.md,
                    ),
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 12),
          ElevatedButton.icon(
            onPressed: _copyLink,
            icon: Icon(_linkCopied ? Hi.check : Hi.documentDuplicate, size: 18),
            label: Text(_linkCopied ? 'Copiado!' : 'Copiar link'),
          ),
          ],
          if (guestCode != null) ...[
            const SizedBox(height: 24),
            Text(
              'Código do casal',
              style: Theme.of(context).textTheme.titleLarge,
            ),
            const SizedBox(height: 6),
            Text(
              'Se já têm a app instalada, os convidados usam este código '
              'ao criar conta para ficar ligados ao vosso casamento.',
              style: TextStyle(color: AppTheme.inkMuted, fontSize: AppFontSize.md),
            ),
            const SizedBox(height: 16),
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
              decoration: BoxDecoration(
                color: AppTheme.accentTint,
                borderRadius: BorderRadius.circular(AppRadius.md),
              ),
              child: Row(
                children: [
                  Expanded(
                    child: Text(
                      guestCode,
                      style: const TextStyle(
                        fontWeight: FontWeight.w700,
                        fontSize: AppFontSize.lg,
                        letterSpacing: 0.5,
                      ),
                    ),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 12),
            ElevatedButton.icon(
              onPressed: () => _copyCode(guestCode),
              icon: Icon(_codeCopied ? Hi.check : Hi.documentDuplicate, size: 18),
              label: Text(_codeCopied ? 'Copiado!' : 'Copiar código'),
            ),
          ],
        ],
      ),
    );
  }
}
