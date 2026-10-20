import 'pay_return_stub.dart' if (dart.library.js_interop) 'pay_return_web.dart' as impl;

/// Regresso de um pagamento que teve de sair da app (2026-10-21).
///
/// Alguns métodos (ex.: autenticação do banco) podem levar o organizador a
/// uma página fora da app; ao voltar, a página recarrega. `web/index.html`
/// guarda o id do pagamento (`?pay_return=`), limpa o endereço e salta a
/// abertura; a app abre direto em `/pay/return` (sem brinde).
class PayReturn {
  static String? _id = impl.readPayReturn();

  /// Pagamento à espera de confirmação depois de voltar à app.
  static String? get pending => _id;

  /// Lido pelo ecrã de regresso — só uma vez.
  static String? take() {
    final id = _id;
    _id = null;
    return id;
  }

  /// Endereço para onde a Stripe volta, se precisar de sair da app.
  static String returnUrl(String paymentId) {
    final base = Uri.base;
    if (base.scheme != 'http' && base.scheme != 'https') return 'https://rafalvesf.github.io/copo-dagua/?pay_return=$paymentId';
    final path = base.path.endsWith('/') ? base.path : base.path.substring(0, base.path.lastIndexOf('/') + 1);
    return '${base.origin}$path?pay_return=${Uri.encodeQueryComponent(paymentId)}';
  }
}
