import UserNotifications
import FirebaseMessaging

/// Notification Service Extension: junta a imagem (`fcm_options.image`,
/// enviada por `send-push` com `mutable-content: 1`) às notificações no
/// iPhone. Sem isto o iOS mostra só o texto. Ver `README.md` nesta pasta.
class NotificationService: UNNotificationServiceExtension {
  var contentHandler: ((UNNotificationContent) -> Void)?
  var bestAttemptContent: UNMutableNotificationContent?

  override func didReceive(
    _ request: UNNotificationRequest,
    withContentHandler contentHandler: @escaping (UNNotificationContent) -> Void
  ) {
    self.contentHandler = contentHandler
    bestAttemptContent = request.content.mutableCopy() as? UNMutableNotificationContent
    guard let content = bestAttemptContent else {
      contentHandler(request.content)
      return
    }
    // Descarrega a imagem do `fcm_options.image` e anexa-a.
    Messaging.serviceExtension().populateNotificationContent(content, withContentHandler: contentHandler)
  }

  // O iOS dá ~30 s; se a imagem não chegar a tempo, mostra só o texto.
  override func serviceExtensionTimeWillExpire() {
    if let contentHandler = contentHandler, let content = bestAttemptContent {
      contentHandler(content)
    }
  }
}
