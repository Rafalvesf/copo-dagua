import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';
import 'line_icon.dart';

import '../../core/theme/app_theme.dart';

/// Barra de pesquisa exatamente como no design (Mensagens): pílula
/// branca de 48 px, borda verde de 1 px, sombra suave verde por baixo.
/// Antes usava o `InputDecoration` do tema, que punha a borda cinzenta
/// (o verde só aparecia num estado que nunca era usado) e outra sombra.
class SearchPill extends StatelessWidget {
  final TextEditingController controller;
  final String hint;

  /// Como no mockup das Mensagens (2026-11-12): sem sombra e lupa de traço.
  final bool flat;

  const SearchPill({super.key, required this.controller, required this.hint, this.flat = true});

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
        boxShadow: flat
            ? null
            : const [
          BoxShadow(color: Color(0x0F171713), blurRadius: 18, offset: Offset(0, 6)),
        ],
      ),
      child: Row(
        children: [
          flat
              ? const LineIcon(LineIcon.search, size: 18, color: AppTheme.inkMuted, stroke: 2.2, circles: LineIcon.searchCircle)
              : const Icon(Hi.magnifyingGlass, size: 18, color: AppTheme.inkMuted),
          const SizedBox(width: 10),
          Expanded(
            child: TextField(
              controller: controller,
              textInputAction: TextInputAction.search,
              style: TextStyle(fontSize: 15, fontWeight: flat ? FontWeight.w600 : null, color: AppTheme.ink),
              decoration: InputDecoration(
                hintText: hint,
                hintStyle: TextStyle(fontSize: 15, fontWeight: flat ? FontWeight.w600 : null, color: const Color(0xFF6E6A63)),
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
