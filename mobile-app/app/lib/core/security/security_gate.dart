// security_gate.dart
//
// Camada anti-tamper da À Nossa!: deteta se a app está a correr num ambiente
// comprometido (root/jailbreak, emulador, app modificado/re-assinado, debugger
// ligado) e decide o que fazer.
//
// Este ficheiro NÃO traz dependências novas, por isso compila tal como está e
// não parte o build. Por omissão, todas as verificações respondem "seguro" —
// é só o esqueleto e a política. A deteção real liga-se à biblioteca nativa
// (ver `_runNativeChecks` em baixo e o doc `docs/security/anti-tamper.md`).
//
// Porquê no servidor E no cliente: a proteção que conta é a do servidor (RLS +
// funções SECURITY DEFINER no Supabase); um cliente nunca é de confiar. Esta
// camada é defesa em profundidade — levanta o custo de correr um cliente
// adulterado, não o substitui.

import 'package:flutter/foundation.dart';

/// Resultado de uma verificação de integridade do ambiente.
@immutable
class SecurityVerdict {
  const SecurityVerdict({
    required this.isRooted,
    required this.isEmulator,
    required this.isTampered,
    required this.isDebugged,
  });

  /// Ambiente com root (Android) ou jailbreak (iOS).
  final bool isRooted;

  /// A correr num emulador/simulador em vez de hardware real.
  final bool isEmulator;

  /// Assinatura/hooks alterados (app re-empacotado, Frida, Xposed, etc.).
  final bool isTampered;

  /// Debugger ligado ao processo.
  final bool isDebugged;

  /// Nada detetado.
  static const SecurityVerdict clean = SecurityVerdict(
    isRooted: false,
    isEmulator: false,
    isTampered: false,
    isDebugged: false,
  );

  bool get isCompromised => isRooted || isTampered || isDebugged;

  List<String> get reasons => [
        if (isRooted) 'root/jailbreak',
        if (isTampered) 'app adulterado',
        if (isDebugged) 'debugger ligado',
        if (isEmulator) 'emulador',
      ];
}

/// Como a app reage a um ambiente comprometido.
enum SecurityPolicy {
  /// Não faz nada (web, debug, testes). É o padrão quando a app não está
  /// compilada em modo release numa plataforma móvel.
  off,

  /// Deixa correr, mas comunica o veredito (ex.: para análise/telemetria).
  monitor,

  /// Bloqueia a app (ecrã de aviso, sem acesso aos dados).
  block,
}

class SecurityGate {
  const SecurityGate._();

  /// Política efetiva. Fora de release móvel não faz sentido bloquear
  /// (a app também corre na web e nos testes), por isso aí fica `off`.
  static SecurityPolicy get policy {
    if (kIsWeb || kDebugMode) return SecurityPolicy.off;
    // Emulador por si só não bloqueia; só monitoriza. Root/tamper bloqueiam.
    return SecurityPolicy.block;
  }

  /// Corre as verificações e aplica a política.
  ///
  /// Devolve `true` se a app pode seguir, `false` se deve ser bloqueada.
  /// Nunca lança: qualquer falha interna conta como "seguir" para não deixar
  /// a app presa por um erro da própria verificação.
  static Future<bool> evaluate({void Function(SecurityVerdict)? onVerdict}) async {
    if (policy == SecurityPolicy.off) return true;
    SecurityVerdict verdict = SecurityVerdict.clean;
    try {
      verdict = await _runNativeChecks();
    } catch (_) {
      return true; // falha a verificar => não prende o utilizador
    }
    onVerdict?.call(verdict);
    switch (policy) {
      case SecurityPolicy.off:
      case SecurityPolicy.monitor:
        return true;
      case SecurityPolicy.block:
        return !verdict.isCompromised;
    }
  }

  // ---------------------------------------------------------------------------
  // Ponto de ligação à deteção nativa.
  //
  // Hoje devolve sempre "limpo" (sem dependências novas). Para ligar a deteção
  // real, adiciona `freerasp` ao pubspec e substitui o corpo por uma chamada
  // ao talsec/freerasp — ver docs/security/anti-tamper.md. A assinatura
  // (Future<SecurityVerdict>) foi pensada para isso e não precisa de mudar.
  // ---------------------------------------------------------------------------
  static Future<SecurityVerdict> _runNativeChecks() async {
    return SecurityVerdict.clean;
  }
}
