String pushStatus() => 'unsupported';
Future<String> pushSubscribe(String publicKey) async => '{"error":"unsupported"}';
Future<String> pushCurrent() async => '';
Future<String> pushUnsubscribe() async => '';
Future<void> pushInit() async {}
void pushOnOpen(void Function(String link) cb) {}
