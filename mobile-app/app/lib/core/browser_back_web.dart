import 'dart:js_interop';

@JS('window.addEventListener')
external void _addEventListener(JSString type, JSFunction listener);

/// Avisa quando o utilizador volta atrás pelo browser (gesto de deslizar
/// da esquerda para a direita no Safari, ou botão "voltar").
void listenBrowserBack(void Function() onBack) {
  _addEventListener('popstate'.toJS, ((JSAny? _) => onBack()).toJS);
}
