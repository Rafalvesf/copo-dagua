# Anti-tamper (deteção de root / jailbreak / app adulterado)

Esta camada é **defesa em profundidade**. A proteção que realmente protege os
dados é a do servidor (RLS + funções `SECURITY DEFINER` no Supabase): o cliente
nunca é de confiar. A deteção no cliente só torna mais caro correr um cliente
adulterado — não substitui o servidor.

## O que já está no repositório

- `mobile-app/app/lib/core/security/security_gate.dart` — o esqueleto e a
  política (`off` / `monitor` / `block`). **Por omissão não deteta nada** (não
  traz dependências novas, por isso não parte o build). É preciso ligar a
  biblioteca nativa para passar a detetar a sério.

## Ligar a deteção real (a fazer e a testar pelo Rafael)

Recomendado: [`freerasp`](https://pub.dev/packages/freerasp) (Talsec) — cobre
root/jailbreak, emulador, app re-assinado/adulterado, hooks (Frida/Xposed) e
debugger, em Android e iOS.

1. `mobile-app/app/pubspec.yaml`, em `dependencies:`

   ```yaml
   freerasp: ^6.0.0   # confirmar a versão mais recente em pub.dev
   ```

2. `flutter pub get` e, no iOS, `cd ios && pod install`.

3. Em `_runNativeChecks()` (no `security_gate.dart`), substituir o corpo por
   uma chamada ao freerasp e mapear as callbacks dele para o `SecurityVerdict`
   (`isRooted`, `isEmulator`, `isTampered`, `isDebugged`). Pôr nos `TalsecConfig`
   os IDs reais: `packageName` (Android), `bundleIds` (iOS) e os
   `signingCertHashes`/`teamId` da assinatura de produção — sem estes, a deteção
   de "app adulterado" não funciona.

4. Ligar no arranque, em `mobile-app/app/lib/main.dart`, antes do `runApp`:

   ```dart
   final ok = await SecurityGate.evaluate(
     onVerdict: (v) => Funnel.track('security_verdict', {'reasons': v.reasons}),
   );
   if (!ok) { runApp(const _BlockedApp()); return; }
   ```

   (`_BlockedApp` = um ecrã simples a dizer que a app não corre em ambiente
   comprometido — seguir o `DESIGN.md`: fundo `#F2F0EB`, mascote «triste»,
   botão preto. Nada de amarelo.)

## Testar

- **Android:** APK release num emulador (deve dar `isEmulator`) e, se der,
  num telemóvel com root (deve dar `isRooted` + `block`).
- **iOS:** build release; jailbreak é difícil de testar, confirmar ao menos
  que não bloqueia um iPhone normal (falsos positivos deixam utilizadores reais
  de fora — é o maior risco desta camada).
- Confirmar que a **web** e os **testes** continuam a correr (a política é
  `off` fora de release móvel, por isso devem passar na mesma).

## Não esquecer

- Começar em `monitor` (só telemetria) antes de `block`, para medir falsos
  positivos com utilizadores reais.
- A ofuscação do build release (`scripts/build-release.sh`) anda a par disto:
  sem ofuscação, é trivial arrancar estas verificações do binário.
