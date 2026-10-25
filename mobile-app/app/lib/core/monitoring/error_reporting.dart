import 'dart:async';

import 'package:sentry_flutter/sentry_flutter.dart';

/// Registo de erros (Sentry, pedido 2026-10-25): quando a app falha no
/// telemóvel de alguém, o erro chega ao painel do Sentry.
///
/// Só fica ativo com `--dart-define=SENTRY_DSN=...` — passado só no deploy
/// para produção (`deploy-gh-pages.yml`, projeto Sentry anossa/copo-dagua;
/// o DSN é público por natureza, vai dentro da app). Sem DSN — previews, testes, local — não
/// faz nada. Não envia dados pessoais: só o id da conta (sem nome nem
/// email), sem gravação de ecrã.
const _dsn = String.fromEnvironment('SENTRY_DSN');
const _version = String.fromEnvironment('APP_VERSION', defaultValue: 'dev');

bool get errorReportingEnabled => _dsn.isNotEmpty;

Future<void> runWithErrorReporting(FutureOr<void> Function() appRunner) async {
  if (!errorReportingEnabled) {
    await appRunner();
    return;
  }
  await SentryFlutter.init(
    (o) {
      o.dsn = _dsn;
      o.environment = 'production';
      o.release = 'a-nossa@$_version';
      o.sendDefaultPii = false;
      o.tracesSampleRate = 0;
      o.attachScreenshot = false;
    },
    appRunner: appRunner,
  );
}

/// Associa os erros à conta (só o id), para se saber quantas pessoas
/// foram afetadas. `null` ao terminar sessão.
void setErrorReportingUser(String? profileId) {
  if (!errorReportingEnabled) return;
  Sentry.configureScope((s) => s.setUser(profileId == null ? null : SentryUser(id: profileId)));
}
