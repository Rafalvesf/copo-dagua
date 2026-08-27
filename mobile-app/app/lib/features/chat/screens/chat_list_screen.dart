import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/models/models.dart';
import '../../../core/partners/partner_providers.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/floating_bottom_nav.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../partners/partner_style.dart';

/// Pré-visualizações de conversa ilustrativas por categoria — não há
/// ainda um modelo de conversas por parceiro do lado do casal (ver
/// `ChatController`, que só cobre o fio único parceiro↔casal do lado
/// do parceiro). Esta lista mostra uma conversa por categoria com um
/// parceiro real do backend mock, com texto de pré-visualização
/// estático — o envio de mensagens fica marcado como "em breve",
/// seguindo o mesmo padrão usado em `SupportScreen`.
const _previewByCategory = {
  PartnerCategory.catering: (
    'Perfeito! Vamos avançar com o catering para o número de convidados '
    'que combinámos.',
    '12:24',
    2,
  ),
  PartnerCategory.photography: (
    'Obrigada! Envio já a proposta completa com os dois pacotes.',
    'Ontem',
    0,
  ),
  PartnerCategory.music: (
    'Adorámos a vossa playlist! Podemos ajustar mais perto da data.',
    'Ontem',
    0,
  ),
  PartnerCategory.decoration: (
    'Podemos reunir na quinta-feira para afinar os últimos detalhes?',
    'Seg',
    0,
  ),
  PartnerCategory.venue: (
    'Disponível para visita no próximo fim de semana, digam-nos o melhor dia.',
    'Seg',
    0,
  ),
};

class ChatListScreen extends ConsumerWidget {
  const ChatListScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final partnersAsync = ref.watch(partnersProvider(null));

    return GradientScaffold(
      background: AppBackground.feed,
      body: Stack(
        children: [
          SafeArea(
            bottom: false,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Padding(
                  padding: const EdgeInsets.fromLTRB(
                    AppTheme.screenMargin,
                    20,
                    AppTheme.screenMargin,
                    0,
                  ),
                  child: const CircleBackButton(),
                ),
                Padding(
                  padding: const EdgeInsets.fromLTRB(
                    AppTheme.screenMargin,
                    16,
                    AppTheme.screenMargin,
                    0,
                  ),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text('Chat', style: Theme.of(context).textTheme.headlineSmall),
                      const SizedBox(height: 4),
                      Text(
                        'Conversas, dúvidas e tudo o que precisam de organizar.',
                        style: Theme.of(context).textTheme.bodyMedium,
                      ),
                    ],
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.fromLTRB(
                    AppTheme.screenMargin,
                    16,
                    AppTheme.screenMargin,
                    0,
                  ),
                  child: Row(
                    children: [
                      Expanded(
                        child: Container(
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(999),
                            boxShadow: AppTheme.cardShadow,
                          ),
                          child: TextField(
                            decoration: InputDecoration(
                              hintText: 'Pesquisar conversas...',
                              prefixIcon: const Icon(Icons.search, size: 20),
                              filled: true,
                              fillColor: Colors.white,
                              border: OutlineInputBorder(
                                borderRadius: BorderRadius.circular(999),
                                borderSide: BorderSide.none,
                              ),
                              contentPadding: const EdgeInsets.symmetric(vertical: 12),
                            ),
                          ),
                        ),
                      ),
                      const SizedBox(width: 8),
                      Container(
                        padding: const EdgeInsets.all(11),
                        decoration: BoxDecoration(
                          color: Colors.white,
                          borderRadius: BorderRadius.circular(999),
                          boxShadow: AppTheme.cardShadow,
                        ),
                        child: const Icon(Icons.tune, size: 16, color: AppTheme.ink),
                      ),
                    ],
                  ),
                ),
                Expanded(
                  child: partnersAsync.when(
                    loading: () => const Center(child: CircularProgressIndicator()),
                    error: (err, st) => const Center(
                      child: Text('Não foi possível carregar as conversas.'),
                    ),
                    data: (allPartners) {
                      final byCategory = <PartnerCategory, Partner>{};
                      for (final partner in allPartners) {
                        byCategory.putIfAbsent(partner.category, () => partner);
                      }
                      final conversations = byCategory.values.toList()
                        ..sort((a, b) => a.category.label.compareTo(b.category.label));

                      if (conversations.isEmpty) {
                        return const Center(child: Text('Sem conversas por agora.'));
                      }

                      return ListView.separated(
                        padding: const EdgeInsets.fromLTRB(
                          AppTheme.screenMargin,
                          20,
                          AppTheme.screenMargin,
                          140,
                        ),
                        itemCount: conversations.length,
                        separatorBuilder: (context, index) => const SizedBox(height: 10),
                        itemBuilder: (context, index) {
                          final partner = conversations[index];
                          final preview = _previewByCategory[partner.category];
                          return _ConversationTile(
                            partner: partner,
                            preview: preview?.$1 ?? 'Nova conversa.',
                            time: preview?.$2 ?? '',
                            unread: preview?.$3 ?? 0,
                          );
                        },
                      );
                    },
                  ),
                ),
              ],
            ),
          ),
          const Positioned(
            left: 0,
            right: 0,
            bottom: 0,
            child: FloatingBottomNav(current: AppTab.chat),
          ),
        ],
      ),
    );
  }
}

class _ConversationTile extends StatelessWidget {
  final Partner partner;
  final String preview;
  final String time;
  final int unread;

  const _ConversationTile({
    required this.partner,
    required this.preview,
    required this.time,
    required this.unread,
  });

  @override
  Widget build(BuildContext context) {
    return SnappyTap.builder(
      onTap: () => Navigator.of(context).push(
        MaterialPageRoute(builder: (context) => ChatThreadScreen(partner: partner, preview: preview)),
      ),
      builder: (context, hovered) => Container(
        padding: const EdgeInsets.all(12),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(20),
          boxShadow: hovered ? AppTheme.cardShadowStrong : AppTheme.cardShadow,
        ),
        child: Row(
          children: [
            CircleAvatar(
              radius: 26,
              backgroundColor: colorForPartnerCategory(partner.category),
              backgroundImage: NetworkImage(partner.imageUrl),
            ),
            const SizedBox(width: 12),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    partner.name,
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    style: const TextStyle(fontWeight: FontWeight.w700, fontSize: 14.5),
                  ),
                  const SizedBox(height: 3),
                  Text(
                    preview,
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    style: TextStyle(color: AppTheme.inkMuted, fontSize: 12.5),
                  ),
                ],
              ),
            ),
            const SizedBox(width: 8),
            Column(
              crossAxisAlignment: CrossAxisAlignment.end,
              children: [
                Text(time, style: TextStyle(color: AppTheme.inkMuted, fontSize: 11)),
                const SizedBox(height: 8),
                if (unread > 0)
                  Container(
                    width: 18,
                    height: 18,
                    alignment: Alignment.center,
                    decoration: const BoxDecoration(
                      color: AppTheme.accentLavender,
                      shape: BoxShape.circle,
                    ),
                    child: Text(
                      '$unread',
                      style: const TextStyle(
                        color: Colors.white,
                        fontSize: 10.5,
                        fontWeight: FontWeight.w700,
                      ),
                    ),
                  ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}

/// Fio de conversa estático — sem backend de conversas múltiplas do
/// lado do casal ainda (ver nota em cima do ficheiro), o campo de
/// texto fica desativado com feedback "em breve", tal como o padrão já
/// usado em `SupportScreen`.
class ChatThreadScreen extends StatelessWidget {
  final Partner partner;
  final String preview;

  const ChatThreadScreen({super.key, required this.partner, required this.preview});

  void _comingSoon(BuildContext context) {
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Conversa em tempo real em breve.')),
    );
  }

  @override
  Widget build(BuildContext context) {
    return GradientScaffold(
      background: AppBackground.subtle,
      appBar: AppBar(
        leading: const CircleBackButton(),
        title: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisSize: MainAxisSize.min,
          children: [
            Text(partner.name, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700)),
            Text(
              partner.category.label,
              style: TextStyle(fontSize: 12, color: AppTheme.inkMuted, fontWeight: FontWeight.w400),
            ),
          ],
        ),
      ),
      body: SafeArea(
        child: Column(
          children: [
            Expanded(
              child: ListView(
                padding: const EdgeInsets.all(AppTheme.screenMargin),
                children: [
                  _Bubble(text: preview, fromMe: false),
                  const SizedBox(height: 10),
                  const _Bubble(text: 'Combinado, obrigada pela atualização!', fromMe: true),
                ],
              ),
            ),
            Padding(
              padding: const EdgeInsets.fromLTRB(
                AppTheme.screenMargin,
                0,
                AppTheme.screenMargin,
                16,
              ),
              child: Row(
                children: [
                  Expanded(
                    child: TextField(
                      enabled: false,
                      decoration: InputDecoration(
                        hintText: 'Escreve uma mensagem...',
                        filled: true,
                        fillColor: Colors.white,
                        border: OutlineInputBorder(
                          borderRadius: BorderRadius.circular(999),
                          borderSide: BorderSide.none,
                        ),
                        contentPadding: const EdgeInsets.symmetric(horizontal: 18, vertical: 14),
                      ),
                    ),
                  ),
                  const SizedBox(width: 10),
                  CircleIconButton(
                    icon: Icons.send_rounded,
                    background: AppTheme.ink,
                    foreground: Colors.white,
                    onTap: () => _comingSoon(context),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _Bubble extends StatelessWidget {
  final String text;
  final bool fromMe;

  const _Bubble({required this.text, required this.fromMe});

  @override
  Widget build(BuildContext context) {
    return Align(
      alignment: fromMe ? Alignment.centerRight : Alignment.centerLeft,
      child: Container(
        constraints: const BoxConstraints(maxWidth: 260),
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
        decoration: BoxDecoration(
          color: fromMe ? AppTheme.ink : Colors.white,
          borderRadius: BorderRadius.circular(18),
          boxShadow: AppTheme.cardShadow,
        ),
        child: Text(
          text,
          style: TextStyle(
            color: fromMe ? Colors.white : AppTheme.ink,
            fontSize: 13.5,
            height: 1.4,
          ),
        ),
      ),
    );
  }
}
