import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';

/// Barra de pesquisa exatamente como no design (Mensagens): pílula
/// branca de 48 px, borda verde de 1 px, sombra suave verde por baixo.
/// Antes usava o `InputDecoration` do tema, que punha a borda cinzenta
/// (o verde só aparecia num estado que nunca era usado) e outra sombra.
class SearchPill extends StatelessWidget {
  final TextEditingController controller;
  final String hint;

  const SearchPill({super.key, required this.controller, required this.hint});

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 48,
      padding: const EdgeInsets.symmetric(horizontal: 16),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(AppRadius.pill),
        // Sem contorno, com a sombra suave dos cartões (redesign
        // 2026-10-19) — igual à pesquisa de Parceiros.
        boxShadow: const [
          BoxShadow(color: Color(0x12171713), blurRadius: 18, offset: Offset(0, 6)),
          BoxShadow(color: Color(0x0D171713), blurRadius: 3, offset: Offset(0, 1)),
        ],
      ),
      child: Row(
        children: [
          const Icon(Icons.search_rounded, size: 18, color: AppTheme.inkMuted),
          const SizedBox(width: 10),
          Expanded(
            child: TextField(
              controller: controller,
              style: const TextStyle(fontSize: 15, color: AppTheme.ink),
              decoration: InputDecoration(
                hintText: hint,
                hintStyle: const TextStyle(fontSize: 15, color: Color(0xFF8F8B84)),
                isDense: true,
                filled: false,
                border: InputBorder.none,
                enabledBorder: InputBorder.none,
                focusedBorder: InputBorder.none,
                contentPadding: EdgeInsets.zero,
              ),
            ),
          ),
        ],
      ),
    );
  }
}
