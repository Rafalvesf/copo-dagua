/// Permissões (notificações, localização, câmara) pedidas uma vez, quando
/// a pessoa entra na app logo a seguir a criar a conta (pedido do Rafael,
/// 2026-11-27: já não fazem parte do criar evento). O `redirect` do router
/// leva a `/permissoes` enquanto [pending] for `true`.
abstract final class PermissionsGate {
  static bool pending = false;
}
