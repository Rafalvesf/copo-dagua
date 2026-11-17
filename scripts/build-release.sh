#!/usr/bin/env bash
#
# Build de lançamento OFUSCADO da À Nossa! (Android + iOS).
#
# A ofuscação (`--obfuscate`) baralha os nomes de classes, métodos e campos no
# código Dart compilado, para que ninguém consiga ler nem alterar a lógica da
# app facilmente a partir do APK/IPA. O `--split-debug-info` tira os símbolos
# para fora do binário (sem isto, a ofuscação quase não protege).
#
# IMPORTANTE: os símbolos em `build/symbols/` são a ÚNICA forma de voltar a ler
# os crashes/stack traces desta versão. Guarda-os (nunca no git) por versão —
# sem eles, os relatórios de erro ficam ilegíveis.
#
# Uso:
#   FIREBASE_ANDROID_API_KEY=... FIREBASE_IOS_API_KEY=... scripts/build-release.sh [android|ios|all]
#
set -euo pipefail

cd "$(dirname "$0")/../mobile-app/app"

TARGET="${1:-all}"
STAMP="$(date +%Y%m%d-%H%M%S)"
SYMBOLS_DIR="build/symbols/$STAMP"
mkdir -p "$SYMBOLS_DIR"

echo "==> Símbolos de debug: mobile-app/app/$SYMBOLS_DIR (guardar fora do git!)"

flutter pub get

build_android() {
  echo "==> Android (App Bundle ofuscado)"
  flutter build appbundle --release \
    --obfuscate --split-debug-info="$SYMBOLS_DIR/android" \
    --dart-define=FIREBASE_ANDROID_API_KEY="${FIREBASE_ANDROID_API_KEY:?define FIREBASE_ANDROID_API_KEY}"
  echo "    -> build/app/outputs/bundle/release/app-release.aab"
}

build_ios() {
  echo "==> iOS (ofuscado, assinatura feita no Xcode/CI de lançamento)"
  flutter build ipa --release \
    --obfuscate --split-debug-info="$SYMBOLS_DIR/ios" \
    --dart-define=FIREBASE_IOS_API_KEY="${FIREBASE_IOS_API_KEY:?define FIREBASE_IOS_API_KEY}"
  echo "    -> build/ios/ipa/*.ipa"
}

case "$TARGET" in
  android) build_android ;;
  ios)     build_ios ;;
  all)     build_android; build_ios ;;
  *) echo "alvo inválido: $TARGET (usa android|ios|all)"; exit 1 ;;
esac

echo "==> Feito. NÃO apagues $SYMBOLS_DIR — precisas dele para ler os crashes."
