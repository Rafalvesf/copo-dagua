import 'package:flutter/material.dart';

import '../../shared/widgets/island_sheet.dart';
import '../supabase/supabase_config.dart';

/// Apagar mensagens, grupos e conversas (`179_chat_delete.sql`,
/// pedido 2026-11-11).

Future<void> deleteMessage(String id) => supabase.rpc('delete_message', params: {'p_message_id': id});

Future<void> deleteGroupMessage(String id) => supabase.rpc('delete_group_message', params: {'p_message_id': id});

Future<void> deleteChatGroup(String groupId) => supabase.rpc('delete_chat_group', params: {'p_group_id': groupId});

/// Esconde a conversa só para este lado (o parceiro continua a vê-la).
Future<void> hideConversation(String id) => supabase.rpc('hide_conversation', params: {'p_conversation_id': id});

/// Pergunta antes de apagar. Devolve true se a pessoa confirmou.
Future<bool> confirmChatDelete(
  BuildContext context, {
  required String title,
  required String body,
  String cta = 'Apagar',
}) async {
  final ok = await showIslandDialog<bool>(
    context: context,
    builder: (ctx) => IslandAlert(
      title: Text(title),
      content: Text(body),
      actions: [
        TextButton(onPressed: () => Navigator.of(ctx).pop(false), child: const Text('Cancelar')),
        FilledButton(
          onPressed: () => Navigator.of(ctx).pop(true),
          child: Text(cta),
        ),
      ],
    ),
  );
  return ok == true;
}

/// Corre [action] e mostra um aviso curto se falhar (por exemplo, se a
/// migração 179 ainda não foi corrida).
Future<bool> runChatDelete(BuildContext context, Future<void> Function() action) async {
  final messenger = ScaffoldMessenger.maybeOf(context);
  try {
    await action();
    return true;
  } catch (_) {
    messenger?.showSnackBar(const SnackBar(content: Text('Não foi possível apagar. Tenta outra vez.')));
    return false;
  }
}
