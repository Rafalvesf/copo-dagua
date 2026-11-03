# Imagem nas notificações do iPhone

O servidor já envia a imagem (`send-push` v18: `fcm_options.image` e
`mutable-content: 1`). O Android mostra-a sozinho; o **iPhone precisa desta
extensão** ("Notification Service Extension") dentro da app. Os ficheiros
estão prontos aqui; falta ligá-los no Xcode, o que só dá para fazer num Mac
com a conta Apple Developer (assinatura).

## Passos (uma vez, ~10 min, num Mac)

1. `cd mobile-app/app && flutter pub get && cd ios && pod install`
2. Abrir `ios/Runner.xcworkspace` no Xcode.
3. **File → New → Target… → Notification Service Extension**
   - Product Name: `ImageNotification`
   - Language: Swift · Embed in Application: **Runner**
   - Quando perguntar "Activate scheme?" → **Cancel**.
4. O Xcode cria a pasta `ImageNotification` com ficheiros de exemplo:
   **substituir** `NotificationService.swift` e `Info.plist` pelos desta pasta
   (ou apagar os criados e arrastar estes para o target).
5. No target **ImageNotification → Signing & Capabilities**:
   - Team: a mesma da app.
   - Bundle Identifier: `pt.anossa.app.ImageNotification`
6. No target **ImageNotification → General → Minimum Deployments**: o mesmo
   iOS mínimo do Runner.
7. No `ios/Podfile`, depois do bloco `target 'Runner' do … end`, juntar:

   ```ruby
   target 'ImageNotification' do
     use_frameworks!
     pod 'Firebase/Messaging'
   end
   ```

   e correr `pod install` outra vez.
8. **Product → Build** e testar: enviar uma mensagem da Equipa com imagem
   (admin → Mensagens) para uma conta com notificações ativas no iPhone.

## Notas
- Na App Store Connect / perfis de provisioning, a extensão precisa do seu
  próprio App ID (`pt.anossa.app.ImageNotification`); com assinatura
  automática o Xcode cria-o.
- Se a imagem não descarregar em ~30 s, o iPhone mostra só o texto.
