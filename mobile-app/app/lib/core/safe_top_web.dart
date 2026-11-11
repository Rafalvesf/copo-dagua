import 'dart:js_interop';

@JS('tchinSafeTop')
external JSNumber? get _safeTop;

/// Altura da barra das horas no telemóvel (CSS safe-area-inset-top),
/// lida pelo index.html.
double webSafeTop() => _safeTop?.toDartDouble ?? 0;
