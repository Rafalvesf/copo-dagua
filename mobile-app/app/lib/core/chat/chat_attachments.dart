import 'dart:convert';
import 'dart:math';
import 'dart:typed_data';

import 'package:file_selector/file_selector.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:image_picker/image_picker.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show FileOptions;
import 'package:url_launcher/url_launcher.dart';

import '../../shared/widgets/island_sheet.dart';
import '../supabase/supabase_config.dart';
import '../theme/app_theme.dart';
import 'package:copo_dagua_app/shared/widgets/sized_network_image.dart';

/// Anexos do chat (pedido do utilizador, 2026-10-20): fotos, ficheiros,
/// stickers e GIFs, nas conversas com parceiros e nos grupos do evento.
/// Ficheiros vão para o bucket `chat-attachments`
/// (`105_chat_groups_attachments.sql`), em `{uid}/{aleatório}.{ext}`.
class ChatAttachment {
  final String url;
  final String type; // image | file | sticker | gif
  final String? name;
  const ChatAttachment(this.url, this.type, [this.name]);
}

/// Chave da GIPHY (cliente), passada no build: `--dart-define=GIPHY_KEY=…`.
const _giphyKey = String.fromEnvironment('GIPHY_KEY');

/// Stickers da mascote (assets da app — iguais em todos os telemóveis).
const chatStickers = [
  'assets/mascot/duo_clink.png',
  'assets/mascot/duo_wave.png',
  'assets/mascot/duo_chat.png',
  'assets/mascot/duo_budget.png',
  'assets/mascot/duo_sleep.png',
  'assets/mascot/duo_sad.png',
  'assets/mascot/glass_gold.png',
  'assets/mascot/glass_rose.png',
];

String _rand() {
  final r = Random.secure();
  return List.generate(16, (_) => r.nextInt(256).toRadixString(16).padLeft(2, '0')).join();
}

Future<String> _upload(List<int> bytes, String name, String mime) async {
  final uid = supabase.auth.currentUser!.id;
  final ext = name.contains('.') ? name.split('.').last.toLowerCase() : 'bin';
  final path = '$uid/${_rand()}.$ext';
  await supabase.storage.from('chat-attachments').uploadBinary(
        path,
        bytes is Uint8List ? bytes : Uint8List.fromList(bytes),
        fileOptions: FileOptions(contentType: mime, upsert: false),
      );
  return supabase.storage.from('chat-attachments').getPublicUrl(path);
}

String _mimeFor(String name) {
  final e = name.split('.').last.toLowerCase();
  return switch (e) {
    'jpg' || 'jpeg' => 'image/jpeg',
    'png' => 'image/png',
    'gif' => 'image/gif',
    'webp' => 'image/webp',
    'heic' => 'image/heic',
    'pdf' => 'application/pdf',
    'doc' => 'application/msword',
    'docx' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'xls' => 'application/vnd.ms-excel',
    'xlsx' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    _ => 'application/octet-stream',
  };
}

/// Abre o menu "+" do chat e devolve o anexo escolhido (já enviado para o
/// Storage), ou `null` se o utilizador cancelar.
Future<ChatAttachment?> pickChatAttachment(BuildContext context) async {
  final choice = await showIslandSheet<String>(
    context: context,
    builder: (context) => Padding(
      padding: const EdgeInsets.fromLTRB(20, 18, 20, 24),
      child: Column(mainAxisSize: MainAxisSize.min, children: [
        Row(mainAxisAlignment: MainAxisAlignment.spaceAround, children: [
          _AttachOption(icon: Icons.photo_rounded, label: 'Foto', value: 'photo'),
          _AttachOption(icon: Icons.attach_file_rounded, label: 'Ficheiro', value: 'file'),
          _AttachOption(icon: Icons.emoji_emotions_outlined, label: 'Sticker', value: 'sticker'),
          _AttachOption(icon: Icons.gif_box_outlined, label: 'GIF', value: 'gif'),
        ]),
      ]),
    ),
  );
  if (choice == null || !context.mounted) return null;
  switch (choice) {
    case 'photo':
      final f = await ImagePicker().pickImage(source: ImageSource.gallery, imageQuality: 85, maxWidth: 2048);
      if (f == null) return null;
      final bytes = await f.readAsBytes();
      final name = f.name.isEmpty ? 'foto.jpg' : f.name;
      final type = name.toLowerCase().endsWith('.gif') ? 'gif' : 'image';
      return ChatAttachment(await _upload(bytes, name, _mimeFor(name)), type, name);
    case 'file':
      // file_selector (equipa Flutter): compila com o Kotlin embutido do
      // Android, ao contrário do file_picker.
      final x = await openFile();
      if (x == null) return null;
      final bytes = await x.readAsBytes();
      final f = (name: x.name.isEmpty ? 'ficheiro' : x.name, size: bytes.length, bytes: bytes);
      if (f.size > 15 * 1024 * 1024) {
        if (context.mounted) {
          ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('O ficheiro tem de ter até 15 MB.')));
        }
        return null;
      }
      final lower = f.name.toLowerCase();
      final isImage = ['.jpg', '.jpeg', '.png', '.webp', '.heic'].any(lower.endsWith);
      final type = lower.endsWith('.gif') ? 'gif' : isImage ? 'image' : 'file';
      return ChatAttachment(await _upload(f.bytes, f.name, _mimeFor(f.name)), type, f.name);
    case 'sticker':
      final s = await showIslandSheet<String>(context: context, builder: (_) => const _StickerPicker());
      return s == null ? null : ChatAttachment('asset:$s', 'sticker');
    case 'gif':
      final g = await showIslandSheet<String>(context: context, isScrollControlled: true, builder: (_) => const _GifPicker());
      return g == null ? null : ChatAttachment(g, 'gif', 'GIF');
  }
  return null;
}

class _AttachOption extends StatelessWidget {
  final IconData icon;
  final String label;
  final String value;
  const _AttachOption({required this.icon, required this.label, required this.value});

  @override
  Widget build(BuildContext context) => InkWell(
        borderRadius: BorderRadius.circular(18),
        onTap: () => Navigator.of(context).pop(value),
        child: Padding(
          padding: const EdgeInsets.all(8),
          child: Column(mainAxisSize: MainAxisSize.min, children: [
            Container(
              width: 58,
              height: 58,
              decoration: BoxDecoration(color: const Color(0xFFF2F0EB), borderRadius: BorderRadius.circular(18)),
              child: Icon(icon, color: AppTheme.accentOliveDark, size: 26),
            ),
            const SizedBox(height: 6),
            Text(label, style: const TextStyle(fontSize: AppFontSize.sm, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          ]),
        ),
      );
}

class _StickerPicker extends StatelessWidget {
  const _StickerPicker();

  @override
  Widget build(BuildContext context) => Padding(
        padding: const EdgeInsets.fromLTRB(16, 16, 16, 24),
        child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.start, children: [
          const Text('Stickers', style: TextStyle(fontSize: AppFontSize.lg, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          const SizedBox(height: 12),
          GridView.count(
            crossAxisCount: 4,
            shrinkWrap: true,
            mainAxisSpacing: 8,
            crossAxisSpacing: 8,
            physics: const NeverScrollableScrollPhysics(),
            children: [
              for (final s in chatStickers)
                InkWell(
                  borderRadius: BorderRadius.circular(14),
                  onTap: () => Navigator.of(context).pop(s),
                  child: Padding(padding: const EdgeInsets.all(4), child: Image.asset(s, fit: BoxFit.contain)),
                ),
            ],
          ),
        ]),
      );
}

class _GifPicker extends StatefulWidget {
  const _GifPicker();

  @override
  State<_GifPicker> createState() => _GifPickerState();
}

class _GifPickerState extends State<_GifPicker> {
  final _q = TextEditingController();
  List<(String preview, String url)> _gifs = const [];
  bool _loading = false;
  String? _error;

  @override
  void initState() {
    super.initState();
    _search('');
  }

  @override
  void dispose() {
    _q.dispose();
    super.dispose();
  }

  Future<void> _search(String q) async {
    if (_giphyKey.isEmpty) {
      setState(() => _error = 'A pesquisa de GIFs ainda não está configurada.');
      return;
    }
    setState(() {
      _loading = true;
      _error = null;
    });
    try {
      final base = q.trim().isEmpty ? 'trending' : 'search';
      final uri = Uri.https('api.giphy.com', '/v1/gifs/$base', {
        'api_key': _giphyKey,
        'limit': '24',
        'rating': 'pg',
        if (q.trim().isNotEmpty) 'q': q.trim(),
        if (q.trim().isNotEmpty) 'lang': 'pt',
      });
      final res = await http.get(uri);
      final data = (jsonDecode(res.body) as Map<String, dynamic>)['data'] as List;
      setState(() => _gifs = [
            for (final g in data.cast<Map<String, dynamic>>())
              (
                ((g['images'] as Map)['fixed_width_small'] as Map)['url'] as String,
                ((g['images'] as Map)['fixed_height'] as Map)['url'] as String,
              ),
          ]);
    } catch (_) {
      setState(() => _error = 'Não foi possível carregar os GIFs.');
    } finally {
      if (mounted) setState(() => _loading = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: MediaQuery.of(context).size.height * 0.62,
      child: Padding(
        padding: const EdgeInsets.fromLTRB(16, 16, 16, 12),
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          TextField(
            controller: _q,
            textInputAction: TextInputAction.search,
            onSubmitted: _search,
            decoration: const InputDecoration(hintText: 'Pesquisar GIFs', prefixIcon: Icon(Icons.search_rounded)),
          ),
          const SizedBox(height: 10),
          Expanded(
            child: _error != null
                ? Center(child: Text(_error!, textAlign: TextAlign.center, style: const TextStyle(color: AppTheme.inkMuted)))
                : _loading
                    ? const Center(child: CircularProgressIndicator())
                    : GridView.builder(
                        gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(crossAxisCount: 3, mainAxisSpacing: 6, crossAxisSpacing: 6),
                        itemCount: _gifs.length,
                        itemBuilder: (context, i) => InkWell(
                          onTap: () => Navigator.of(context).pop(_gifs[i].$2),
                          child: ClipRRect(
                            borderRadius: BorderRadius.circular(10),
                            child: SizedNetworkImage(_gifs[i].$1, fit: BoxFit.cover),
                          ),
                        ),
                      ),
          ),
          const SizedBox(height: 6),
          const Align(
            alignment: Alignment.centerRight,
            child: Text('Powered by GIPHY', style: TextStyle(fontSize: AppFontSize.xxs, color: AppTheme.inkMuted)),
          ),
        ]),
      ),
    );
  }
}

/// Mostra um anexo dentro da conversa.
class ChatAttachmentView extends StatelessWidget {
  final String url;
  final String type;
  final String? name;
  final bool isMe;
  const ChatAttachmentView({super.key, required this.url, required this.type, this.name, required this.isMe});

  @override
  Widget build(BuildContext context) {
    final maxW = MediaQuery.of(context).size.width * 0.62;
    if (type == 'sticker' && url.startsWith('asset:')) {
      return Image.asset(url.substring(6), width: 120, height: 120, fit: BoxFit.contain);
    }
    if (type == 'image' || type == 'gif') {
      return GestureDetector(
        onTap: () => Navigator.of(context).push(MaterialPageRoute<void>(
          builder: (_) => Scaffold(
            backgroundColor: Colors.black,
            appBar: AppBar(backgroundColor: Colors.black, foregroundColor: Colors.white),
            body: Center(child: InteractiveViewer(child: Image.network(url))),
          ),
        )),
        child: ClipRRect(
          borderRadius: BorderRadius.circular(16),
          child: ConstrainedBox(
            constraints: BoxConstraints(maxWidth: maxW, maxHeight: 320),
            child: SizedNetworkImage(
              url,
              fit: BoxFit.cover,
              loadingBuilder: (c, child, p) => p == null
                  ? child
                  : Container(width: maxW, height: 180, color: const Color(0xFFF2F0EB), child: const Center(child: CircularProgressIndicator(strokeWidth: 2))),
              errorBuilder: (c, e, s) => Container(
                width: maxW,
                height: 120,
                color: const Color(0xFFF2F0EB),
                child: const Icon(Icons.broken_image_outlined, color: AppTheme.inkMuted),
              ),
            ),
          ),
        ),
      );
    }
    // Ficheiro.
    return InkWell(
      onTap: () => launchUrl(Uri.parse(url), mode: LaunchMode.externalApplication),
      borderRadius: BorderRadius.circular(16),
      child: Container(
        constraints: BoxConstraints(maxWidth: maxW),
        padding: const EdgeInsets.fromLTRB(12, 10, 14, 10),
        decoration: BoxDecoration(
          color: isMe ? AppTheme.accentOliveDark : const Color(0xFFF2F0EB),
          borderRadius: BorderRadius.circular(16),
        ),
        child: Row(mainAxisSize: MainAxisSize.min, children: [
          Icon(Icons.insert_drive_file_outlined, color: isMe ? Colors.white : AppTheme.accentOliveDark),
          const SizedBox(width: 8),
          Flexible(
            child: Text(name ?? 'Ficheiro',
                maxLines: 2,
                overflow: TextOverflow.ellipsis,
                style: TextStyle(fontSize: AppFontSize.md, fontWeight: FontWeight.w700, color: isMe ? Colors.white : AppTheme.ink)),
          ),
          const SizedBox(width: 6),
          Icon(Icons.download_rounded, size: 18, color: isMe ? Colors.white : AppTheme.inkMuted),
        ]),
      ),
    );
  }
}
