// Apps nativas: o código dos ecrãs já vem todo na app, não há versões a
// mudar por baixo.
bool reloadForNewVersion() => false;

bool reloadNow() => false;

Future<bool?> newerVersionAvailable() async => null;

String? takeReloadReport() => null;
