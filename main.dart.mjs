// Compiles a dart2wasm-generated main module from `source` which can then
// be instantiated via the `instantiate` method.
//
// `source` needs to be a `Response` object (or promise thereof) e.g. created
// via the `fetch()` JS API.
export async function compileStreaming(source) {
  const builtins = {builtins: ['js-string'], importedStringConstants: ''};
  return new CompiledApp(
      await _compileStreaming(source, builtins), builtins);
}

// Compiles a dart2wasm-generated wasm module from `bytes` which is then
// instantiable via the `instantiate` method.
export async function compile(bytes) {
  const builtins = {builtins: ['js-string'], importedStringConstants: ''};
  return new CompiledApp(await WebAssembly.compile(bytes, builtins), builtins);
}

let _isCompileStreamingSupported;
async function _compileStreaming(source, builtins) {
  _isCompileStreamingSupported ??= WebAssembly.compileStreaming(
    new Response(
      new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,2,23,1,14,119,97,115,109,58,106,115,45,115,116,114,105,110,103,4,99,97,115,116,0,0]),
      {headers: {'Content-Type': 'application/wasm'}},
    ),
    builtins,
  ).then(() => false, (e) => e instanceof WebAssembly.CompileError);
  if (await _isCompileStreamingSupported) {
    return WebAssembly.compileStreaming(source, builtins);
  }
  return WebAssembly.compile(await (await source).arrayBuffer(), builtins);
}

class CompiledApp {
  constructor(module, builtins) {
    this.module = module;
    this.builtins = builtins;
  }

  // The second argument is an options object containing:
  // `loadDeferredModules` is a JS function that takes an array of module names
  //   matching wasm files produced by the dart2wasm compiler. It also takes a
  //   callback that should be invoked for each loaded module with 2 arguments:
  //   (1) the module name, (2) the loaded module in a format supported by
  //   `WebAssembly.compile` or `WebAssembly.compileStreaming`. The callback
  //   returns a Promise that resolves when the module is instantiated.
  //   loadDeferredModules should return a Promise that resolves when all the
  //   modules have been loaded and the callback promises have resolved.
  // `loadDeferredId` is a JS function that takes load ID produced by the
  //   compiler when the `use-load-ids` option is passed. Each load ID maps to
  //   one or more wasm files as specified in the emitted JSON file. It also
  //   takes a callback that should be invoked for each loaded module with 2
  //   arguments: (1) the module name, (2) the loaded module in a format
  //   supported by `WebAssembly.compile` or `WebAssembly.compileStreaming`.
  //   The callback returns a Promise that resolves when the module is
  //   instantiated.
  //   loadDeferredId should return a Promise that resolves when all the
  //   modules have been loaded and the callback promises have resolved.
  async instantiate(additionalImports, {loadDeferredModules, loadDeferredId} = {}) {
    let dartInstance;

    // Prints to the console
    function printToConsole(value) {
      if (typeof dartPrint == "function") {
        dartPrint(value);
        return;
      }
      if (typeof console == "object" && typeof console.log != "undefined") {
        console.log(value);
        return;
      }
      if (typeof print == "function") {
        print(value);
        return;
      }

      throw "Unable to print message: " + value;
    }

    // A special symbol attached to functions that wrap Dart functions.
    const jsWrappedDartFunctionSymbol = Symbol("JSWrappedDartFunction");

    function finalizeWrapper(dartFunction, wrapped) {
      wrapped.dartFunction = dartFunction;
      wrapped[jsWrappedDartFunctionSymbol] = true;
      return wrapped;
    }

    // Imports
    const dart2wasm = {
            AB: () => globalThis.Math,
      AC: Function.prototype.call.bind(DataView.prototype.setInt32),
      AD: x0 => x0.visualViewport,
      AE: x0 => x0.computedStyleMap(),
      AF: x0 => x0.clientX,
      AG: (x0,x1) => globalThis.fetch(x0,x1),
      AH: (x0,x1) => x0.sendEnvelope(x1),
      AI: (x0,x1) => x0.removeAttribute(x1),
      AJ: x0 => x0.imageBitmaps,
      AK: (x0,x1) => x0.lock(x1),
      AL: x0 => x0.naturalWidth,
      AM: (wasmFunction,f) => finalizeWrapper(f, function() { return wasmFunction(f,arguments.length) }),
      AN: x0 => x0.metaKey,
      AO: x0 => x0.facingMode,
      AP: x0 => x0.length,
      AQ: x0 => x0.done,
      B: () => new Error().stack,
      BB: (x0,x1,x2,x3) => x0.addEventListener(x1,x2,x3),
      BC: Function.prototype.call.bind(DataView.prototype.setUint32),
      BD: x0 => x0.devicePixelRatio,
      BE: (x0,x1) => x0.get(x1),
      BF: x0 => x0.changedTouches,
      BG: (x0,x1) => x0.get(x1),
      BH: () => Date.now(),
      BI: (x0,x1) => { x0.tabIndex = x1 },
      BJ: x0 => x0.canvasKitMaximumSurfaces,
      BK: x0 => x0.orientation,
      BL: (x0,x1) => { x0.src = x1 },
      BM: (x0,x1) => x0.payWallet(x1),
      BN: x0 => x0.altKey,
      BO: x0 => x0.height,
      BP: x0 => x0.files,
      BQ: x0 => x0.read(),
      C: (c) =>
      queueMicrotask(() => dartInstance.exports.$invokeCallback(c)),
      CB: b => !!b,
      CC: Function.prototype.call.bind(DataView.prototype.setInt16),
      CD: x0 => x0.height,
      CE: (o, p) => p in o,
      CF: x0 => x0.key,
      CG: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1,x2) { return wasmFunction(f,arguments.length,x0,x1,x2) }),
      CH: () => typeof dartUseDateNowForTicks !== "undefined",
      CI: x0 => x0.stopPropagation(),
      CJ: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmF32ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      CK: (x0,x1) => x0.querySelector(x1),
      CL: x0 => x0.displayHeight,
      CM: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1) { return wasmFunction(f,arguments.length,x0,x1) }),
      CN: x0 => x0.ctrlKey,
      CO: x0 => x0.width,
      CP: x0 => x0.target,
      CQ: x0 => x0.body,
      D: (exn) => {
        let stackString = exn.toString();
        let frames = stackString.split('\n');
        let drop = 4;
        if (frames[0].startsWith('Error')) {
            drop += 1;
        }
        return frames.slice(drop).join('\n');
      },
      DB: () => globalThis.document,
      DC: Function.prototype.call.bind(DataView.prototype.setUint16),
      DD: x0 => x0.width,
      DE: (x0,x1) => { x0.textContent = x1 },
      DF: x0 => x0.identifier,
      DG: (x0,x1) => x0.forEach(x1),
      DH: () => 1000 * performance.now(),
      DI: x0 => x0.value,
      DJ: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmF64ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      DK: (x0,x1) => { x0.title = x1 },
      DL: x0 => x0.displayWidth,
      DM: (o,s,v) => o[s] = v,
      DN: x0 => x0.isComposing,
      DO: x0 => x0.facingMode,
      DP: (x0,x1) => x0.replaceChildren(x1),
      DQ: x0 => x0.assetBase,
      E: Function.prototype.call.bind(Number.prototype.toString),
      EB: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      EC: Function.prototype.call.bind(DataView.prototype.setUint8),
      ED: x0 => x0.screen,
      EE: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      EF: x0 => x0.touches,
      EG: x0 => x0.name,
      EH: (x0,x1,x2,x3) => x0.removeEventListener(x1,x2,x3),
      EI: x0 => x0.disabled,
      EJ: x0 => x0.maxHeight,
      EK: (x0,x1) => x0.vibrate(x1),
      EL: x0 => x0.duration,
      EM: () => Symbol("jsBoxedDartObjectProperty"),
      EN: x0 => x0.code,
      EO: x0 => x0.getCapabilities,
      EP: (x0,x1,x2) => x0.setAttribute(x1,x2),
      EQ: x0 => x0.loader,
      F: Function.prototype.call.bind(BigInt.prototype.toString),
      FB: (x0,x1) => x0.focus(x1),
      FC: Function.prototype.call.bind(DataView.prototype.setInt8),
      FD: o => {
        if (o === null || o === undefined) return 0;
        if (typeof(o) === 'string') return 1;
        return 2;
      },
      FE: x0 => x0.matches,
      FF: x0 => x0.pressure,
      FG: x0 => x0.statusText,
      FH: (x0,x1,x2,x3) => x0.addEventListener(x1,x2,x3),
      FI: (x0,x1) => { x0.type = x1 },
      FJ: x0 => x0.maxWidth,
      FK: x0 => x0.content,
      FL: (x0,x1) => ({frameIndex: x0,completeFramesOnly: x1}),
      FM: x0 => x0.createHost(),
      FN: x0 => x0.repeat,
      FO: x0 => x0.attachStreamToVideo,
      FP: (x0,x1) => { x0.accept = x1 },
      FQ: () => globalThis._flutter,
      G: s => JSON.stringify(s),
      GB: () => ({}),
      GC: Function.prototype.call.bind(DataView.prototype.getInt8),
      GD: x0 => x0.tabIndex,
      GE: (x0,x1) => x0.matchMedia(x1),
      GF: x0 => x0.tiltY,
      GG: x0 => x0.url,
      GH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      GI: (x0,x1) => { x0.min = x1 },
      GJ: x0 => x0.minHeight,
      GK: x0 => x0.document,
      GL: (x0,x1) => x0.decode(x1),
      GM: (x0,x1,x2,x3) => x0.payCard(x1,x2,x3),
      GN: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      GO: () => new Map(),
      GP: (x0,x1) => { x0.multiple = x1 },
      H: Function.prototype.call.bind(Number.prototype.toString),
      HB: (o, p, v) => o[p] = v,
      HC: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Int8Array) return 1;
        return 2;
      },
      HD: (x0,x1) => x0.contains(x1),
      HE: x0 => x0.matches,
      HF: x0 => x0.tiltX,
      HG: x0 => x0.status,
      HH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      HI: (x0,x1) => { x0.max = x1 },
      HJ: x0 => x0.minWidth,
      HK: () => globalThis.tchinSetThemeColor,
      HL: x0 => x0.image,
      HM: (x0,x1) => x0.cardMethod(x1),
      HN: (x0,x1) => x0.canShare(x1),
      HO: (x0,x1,x2) => x0.set(x1,x2),
      HP: (x0,x1) => { x0.type = x1 },
      I: Function.prototype.call.bind(String.prototype.indexOf),
      IB: () => [],
      IC: (o, start, length) => new Float64Array(o.buffer, o.byteOffset + start, length),
      ID: x0 => x0.activeElement,
      IE: o => typeof o === 'function' && o[jsWrappedDartFunctionSymbol] === true,
      IF: x0 => x0.pointerType,
      IG: x0 => x0.getReader(),
      IH: x0 => x0.body,
      II: (x0,x1) => { x0.value = x1 },
      IJ: (handle) => clearInterval(handle),
      IK: () => globalThis.tchinSafeTop,
      IL: x0 => x0.close(),
      IM: (x0,x1,x2) => ({number: x0,expiry: x1,cvc: x2}),
      IN: (x0,x1) => x0.share(x1),
      IO: (x0,x1) => { x0.transform = x1 },
      IP: x0 => globalThis.URL.revokeObjectURL(x0),
      J: (s, p, i) => s.lastIndexOf(p, i),
      JB: (a, i) => a.push(i),
      JC: (o, start, length) => new Float32Array(o.buffer, o.byteOffset + start, length),
      JD: x0 => x0.parentNode,
      JE: f => f.dartFunction,
      JF: x0 => x0.pointerId,
      JG: x0 => x0.read(),
      JH: () => globalThis.document,
      JI: (x0,x1) => { x0.disabled = x1 },
      JJ: (ms, c) =>
      setInterval(() => dartInstance.exports.$invokeCallback(c), ms),
      JK: x0 => new WeakRef(x0),
      JL: (x0,x1,x2,x3,x4) => ({type: x0,data: x1,premultiplyAlpha: x2,colorSpaceConversion: x3,preferAnimation: x4}),
      JM: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      JN: x0 => x0.message,
      JO: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      JP: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      K: o => o,
      KB: x0 => new Int8Array(x0),
      KC: (o, start, length) => new Uint32Array(o.buffer, o.byteOffset + start, length),
      KD: x0 => x0.tagName,
      KE: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      KF: x0 => x0.getCoalescedEvents(),
      KG: x0 => x0.value,
      KH: () => globalThis.window._flutter_skwasmInstance,
      KI: (a, l) => a.length = l,
      KJ: () => Date.now(),
      KK: x0 => x0.deref(),
      KL: x0 => new window.ImageDecoder(x0),
      KM: (x0,x1,x2,x3) => x0.mountCard(x1,x2,x3),
      KN: (x0,x1,x2,x3) => x0.open(x1,x2,x3),
      KO: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      KP: (x0,x1,x2,x3) => x0.toBlob(x1,x2,x3),
      L: o => {
        if (o === undefined || o === null) return 0;
        if (typeof o === 'number') return 1;
        return 2;
      },
      LB: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI8ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      LC: (o, start, length) => new Int32Array(o.buffer, o.byteOffset + start, length),
      LD: x0 => x0.target,
      LE: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1) { return wasmFunction(f,arguments.length,x0,x1) }),
      LF: s => s.trimLeft(),
      LG: x0 => x0.done,
      LH: () => globalThis.window.flutterCanvasKit,
      LI: (x0,x1) => { x0.scrollTop = x1 },
      LJ: x0 => x0.debugSkipFontRetryDelay,
      LK: () => globalThis.WeakRef,
      LL: x0 => x0.name,
      LM: (x0,x1,x2,x3,x4) => x0.call(x1,x2,x3,x4),
      LN: x0 => x0.click(),
      LO: (x0,x1) => { x0.onpause = x1 },
      LP: (x0,x1,x2,x3) => x0.drawImage(x1,x2,x3),
      M: x0 => x0.index,
      MB: x0 => new Uint8Array(x0),
      MC: (o, start, length) => new Uint16Array(o.buffer, o.byteOffset + start, length),
      MD: x0 => x0.clientY,
      ME: (p, s, f) => p.then(s, (e) => f(e, e === undefined)),
      MF: s => s.toUpperCase(),
      MG: x0 => x0.cancel(),
      MH: () => globalThis.globalThis,
      MI: (x0,x1) => { x0.scrollLeft = x1 },
      MJ: x0 => x0.status,
      MK: (o, offsetInBytes, lengthInBytes) => {
        var dst = new ArrayBuffer(lengthInBytes);
        new Uint8Array(dst).set(new Uint8Array(o, offsetInBytes, lengthInBytes));
        return new DataView(dst);
      },
      ML: x0 => x0.repetitionCount,
      MM: () => globalThis.tchinConvertImage,
      MN: (o, a) => o + a,
      MO: (x0,x1) => { x0.onplay = x1 },
      MP: (x0,x1,x2,x3,x4,x5) => x0.drawImage(x1,x2,x3,x4,x5),
      N: o => String(o),
      NB: x0 => new Uint8ClampedArray(x0),
      NC: (o, start, length) => new Int16Array(o.buffer, o.byteOffset + start, length),
      ND: x0 => x0.clientX,
      NE: (o, i) => o[i],
      NF: x0 => x0.pop(),
      NG: x0 => x0.body,
      NH: x0 => x0.remove(),
      NI: (d, digits) => d.toFixed(digits),
      NJ: x0 => new Uint8Array(x0),
      NK: (a, s, e) => a.slice(s, e),
      NL: x0 => x0.frameCount,
      NM: (x0,x1,x2,x3) => x0.putImageData(x1,x2,x3),
      NN: x0 => x0.children,
      NO: (x0,x1) => { x0.controls = x1 },
      NP: x0 => x0.height,
      O: o => o === undefined,
      OB: x0 => new Int16Array(x0),
      OC: (o, start, length) => new Uint8ClampedArray(o.buffer, o.byteOffset + start, length),
      OD: (x0,x1,x2) => x0.addEventListener(x1,x2),
      OE: o => o.length,
      OF: x0 => x0.flags,
      OG: x0 => x0.headers,
      OH: (x0,x1) => x0.querySelectorAll(x1),
      OI: (x0,x1) => x0.add(x1),
      OJ: (x0,x1,x2) => x0.set(x1,x2),
      OK: () => globalThis.tchinPayReturn,
      OL: x0 => x0.selectedTrack,
      OM: x0 => x0.arrayBuffer(),
      ON: (x0,x1) => { x0.download = x1 },
      OO: (x0,x1) => { x0.pointerEvents = x1 },
      OP: x0 => x0.width,
      P: (x0,x1) => x0.exec(x1),
      PB: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI16ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      PC: (o, start, length) => new Uint8Array(o.buffer, o.byteOffset + start, length),
      PD: (x0,x1,x2) => x0.setAttribute(x1,x2),
      PE: o => {
        if (o === undefined) return 1;
        var type = typeof o;
        if (type === 'boolean') return 2;
        if (type === 'number') return 3;
        if (type === 'string') return 4;
        if (o instanceof Array) return 5;
        if (ArrayBuffer.isView(o)) {
          if (o instanceof Int8Array) return 6;
          if (o instanceof Uint8Array) return 7;
          if (o instanceof Uint8ClampedArray) return 8;
          if (o instanceof Int16Array) return 9;
          if (o instanceof Uint16Array) return 10;
          if (o instanceof Int32Array) return 11;
          if (o instanceof Uint32Array) return 12;
          if (o instanceof Float32Array) return 13;
          if (o instanceof Float64Array) return 14;
          if (o instanceof DataView) return 15;
        }
        if (o instanceof ArrayBuffer) return 16;
        // Feature check for `SharedArrayBuffer` before doing a type-check.
        if (globalThis.SharedArrayBuffer !== undefined &&
            o instanceof SharedArrayBuffer) {
            return 17;
        }
        if (o instanceof Promise) return 18;
        return 19;
      },
      PF: (a, s) => a.join(s),
      PG: x0 => x0.signal,
      PH: (x0,x1) => x0.item(x1),
      PI: (x0,x1) => { x0.value = x1 },
      PJ: x0 => x0.buffer,
      PK: () => new Array(),
      PL: x0 => x0.completed,
      PM: (x0,x1) => { x0.height = x1 },
      PN: (x0,x1) => { x0.display = x1 },
      PO: (x0,x1) => { x0.transformOrigin = x1 },
      PP: (x0,x1) => x0.getContext(x1),
      Q: (x0,x1) => { x0.lastIndex = x1 },
      QB: x0 => new Uint16Array(x0),
      QC: (o, start, length) => new Int8Array(o.buffer, o.byteOffset + start, length),
      QD: (x0,x1) => x0.closest(x1),
      QE: x0 => x0.language,
      QF: (x0,x1) => x0.error(x1),
      QG: x0 => x0.abort(),
      QH: x0 => x0.length,
      QI: x0 => x0.value,
      QJ: x0 => x0.wasmMemory,
      QK: (x0,x1) => new WebSocket(x0,x1),
      QL: x0 => x0.ready,
      QM: (x0,x1) => { x0.width = x1 },
      QN: x0 => x0.style,
      QO: (x0,x1) => { x0.objectFit = x1 },
      QP: (x0,x1) => { x0.height = x1 },
      R: o => o,
      RB: x0 => new Int32Array(x0),
      RC: (x0,x1) => x0.querySelector(x1),
      RD: (ms, c) =>
      setTimeout(() => dartInstance.exports.$invokeCallback(c),ms),
      RE: (x0,x1,x2,x3) => x0.register(x1,x2,x3),
      RF: () => globalThis.console,
      RG: x0 => x0.origin,
      RH: () => globalThis.Sentry.close(),
      RI: x0 => x0.selectionDirection,
      RJ: () => globalThis.window._flutter_skwasmInstance,
      RK: x0 => x0.reason,
      RL: x0 => x0.tracks,
      RM: x0 => x0.convertToBlob(),
      RN: (x0,x1) => { x0.href = x1 },
      RO: (x0,x1) => { x0.width = x1 },
      RP: (x0,x1) => { x0.width = x1 },
      S: (s, m) => {
        try {
          return new RegExp(s, m);
        } catch (e) {
          return String(e);
        }
      },
      SB: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI32ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      SC: (x0,x1) => x0.item(x1),
      SD: (handle) => clearTimeout(handle),
      SE: () => globalThis.window.FinalizationRegistry,
      SF: s => s.trimRight(),
      SG: x0 => x0.location,
      SH: (o, p, v) => o[p] = v,
      SI: x0 => x0.selectionStart,
      SJ: x0 => x0.arrayBuffer(),
      SK: x0 => x0.code,
      SL: () => globalThis.window.ImageDecoder,
      SM: (x0,x1,x2) => new ImageData(x0,x1,x2),
      SN: x0 => ({url: x0}),
      SO: (x0,x1) => { x0.height = x1 },
      SP: x0 => x0.height,
      T: o => o instanceof RegExp,
      TB: x0 => new Uint32Array(x0),
      TC: x0 => x0.length,
      TD: x0 => x0.maxTouchPoints,
      TE: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      TF: x0 => x0.blur(),
      TG: () => globalThis.window,
      TH: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1) { return wasmFunction(f,arguments.length,x0,x1) }),
      TI: x0 => x0.selectionEnd,
      TJ: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof ArrayBuffer) return 1;
        if (globalThis.SharedArrayBuffer !== undefined &&
            o instanceof SharedArrayBuffer) {
          return 2;
        }
        return 3;
      },
      TK: (o, t) => typeof o === t,
      TL: x0 => x0.decode(),
      TM: (x0,x1) => x0.getContext(x1),
      TN: (x0,x1,x2) => ({files: x0,title: x1,text: x2}),
      TO: x0 => x0.getSupportedConstraints(),
      TP: x0 => x0.width,
      U: (string, times) => string.repeat(times),
      UB: x0 => new Float32Array(x0),
      UC: (x0,x1) => x0.querySelectorAll(x1),
      UD: x0 => x0.platform,
      UE: x0 => new window.FinalizationRegistry(x0),
      UF: x0 => x0.button,
      UG: (o, p) => p in o,
      UH: x0 => globalThis.Sentry.init(x0),
      UI: x0 => x0.selectionDirection,
      UJ: (x0,x1) => x0.fetch(x1),
      UK: x0 => x0.data,
      UL: (x0,x1,x2,x3) => x0.open(x1,x2,x3),
      UM: (x0,x1) => new OffscreenCanvas(x0,x1),
      UN: (x0,x1) => ({files: x0,text: x1}),
      UO: x0 => ({video: x0}),
      UP: (x0,x1) => { x0.src = x1 },
      V: o => o,
      VB: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmF32ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      VC: (x0,x1) => x0.getAttribute(x1),
      VD: (x0,x1) => x0.contains(x1),
      VE: (x0,x1) => x0.unregister(x1),
      VF: (x0,x1) => x0.prepend(x1),
      VG: x0 => x0.groups,
      VH: () => new Sentry.getClient(),
      VI: x0 => x0.selectionStart,
      VJ: x0 => x0.fontFallbackBaseUrl,
      VK: (x0,x1,x2) => x0.close(x1,x2),
      VL: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      VM: x0 => x0.allocationSize(),
      VN: (x0,x1) => ({files: x0,title: x1}),
      VO: x0 => ({facingMode: x0}),
      VP: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      W: o => {
        if (o === undefined || o === null) return 0;
        if (typeof o === 'boolean') return 1;
        return 2;
      },
      WB: x0 => new Float64Array(x0),
      WC: x0 => x0.remove(),
      WD: (decoder, codeUnits) => decoder.decode(codeUnits),
      WE: x0 => x0.preventDefault(),
      WF: x0 => x0.parentElement,
      WG: (a, i) => a.splice(i, 1),
      WH: x0 => x0.getOptions(),
      WI: x0 => x0.selectionEnd,
      WJ: (x0,x1,x2) => x0.slice(x1,x2),
      WK: (x0,x1) => x0.close(x1),
      WL: (x0,x1,x2) => x0.addEventListener(x1,x2),
      WM: (x0,x1) => x0.copyTo(x1),
      WN: x0 => ({files: x0}),
      WO: (x0,x1) => x0.getUserMedia(x1),
      WP: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      X: x0 => x0.dotAll,
      XB: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmF64ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      XC: (x0,x1) => x0.appendChild(x1),
      XD: () => new TextDecoder("utf-8", {fatal: true}),
      XE: x0 => x0.parent,
      XF: x0 => x0.innerHeight,
      XG: secondsSinceEpoch => {
        const date = new Date(secondsSinceEpoch * 1000);
        const match = /\((.*)\)/.exec(date.toString());
        if (match == null) {
            // This should never happen on any recent browser.
            return '';
        }
        return match[1];
      },
      XH: (x0,x1) => { x0.name = x1 },
      XI: (x0,x1) => { x0.name = x1 },
      XJ: (x0,x1) => x0.decode(x1),
      XK: x0 => x0.close(),
      XL: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      XM: (x0,x1) => x0.toDataURL(x1),
      XN: (x0,x1) => ({title: x0,text: x1}),
      XO: x0 => x0.facingMode,
      XP: (x0,x1,x2) => ({enableHighAccuracy: x0,timeout: x1,maximumAge: x2}),
      Y: x0 => x0.unicode,
      YB: x0 => new ArrayBuffer(x0),
      YC: (x0,x1) => x0.append(x1),
      YD: () => new TextDecoder("utf-8", {fatal: false}),
      YE: x0 => x0.timeStamp,
      YF: x0 => x0.innerWidth,
      YG: x0 => x0.devicePixelRatio,
      YH: (x0,x1) => { x0.sdk = x1 },
      YI: (x0,x1) => { x0.placeholder = x1 },
      YJ: (x0,x1) => x0.adoptText(x1),
      YK: (x0,x1) => x0.send(x1),
      YL: x0 => x0.send(),
      YM: x0 => x0.format,
      YN: x0 => ({text: x0}),
      YO: x0 => x0.mediaDevices,
      YP: (x0,x1,x2,x3) => x0.getCurrentPosition(x1,x2,x3),
      Z: x0 => x0.ignoreCase,
      ZB: (x0,x1,x2) => new Uint8Array(x0,x1,x2),
      ZC: (x0,x1,x2,x3) => x0.setProperty(x1,x2,x3),
      ZD: (a, i, v) => a[i] = v,
      ZE: (x0,x1) => x0.hasAttribute(x1),
      ZF: x0 => x0.height,
      ZG: x0 => x0.availWidth,
      ZH: x0 => x0.sdk,
      ZI: (x0,x1) => { x0.autocomplete = x1 },
      ZJ: x0 => x0.first(),
      ZK: x0 => x0.readyState,
      ZL: x0 => x0.status,
      ZM: (x0,x1,x2,x3,x4) => x0.getImageData(x1,x2,x3,x4),
      ZN: () => ({}),
      ZO: (x0,x1) => x0.querySelector(x1),
      ZP: x0 => x0.message,
      a: x0 => x0.multiline,
      aB: (x0,x1,x2) => new DataView(x0,x1,x2),
      aC: x0 => x0.style,
      aD: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmI8ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      aE: x0 => x0.type,
      aF: x0 => x0.width,
      aG: x0 => x0.availHeight,
      aH: () => globalThis.Sentry.globalHandlersIntegration(),
      aI: (x0,x1) => { x0.name = x1 },
      aJ: x0 => x0.next(),
      aK: (x0,x1) => { x0.binaryType = x1 },
      aL: x0 => x0.response,
      aM: x0 => x0.data,
      aN: (x0,x1,x2) => new File(x0,x1,x2),
      aO: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      aP: x0 => x0.code,
      b: s => new Date(s * 1000).getTimezoneOffset() * 60,
      bB: (o, p) => o[p],
      bC: x0 => x0.debugShowSemanticsNodes,
      bD: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmI16ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      bE: (x0,x1) => x0.getModifierState(x1),
      bF: x0 => x0.clientHeight,
      bG: x0 => x0.screen,
      bH: () => globalThis.Sentry.dedupeIntegration(),
      bI: (x0,x1) => { x0.placeholder = x1 },
      bJ: x0 => x0.current(),
      bK: (a, l) => a.length = l,
      bL: (x0,x1,x2) => x0.setRequestHeader(x1,x2),
      bM: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1) { return wasmFunction(f,arguments.length,x0,x1) }),
      bN: (x0,x1) => { x0.type = x1 },
      bO: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      bP: x0 => x0.speed,
      c: Date.now,
      cB: (o) => new DataView(o.buffer, o.byteOffset, o.byteLength),
      cC: (x0,x1) => x0.warn(x1),
      cD: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmI32ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      cE: x0 => x0.buttons,
      cF: x0 => x0.clientWidth,
      cG: x0 => x0.type,
      cH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      cI: (x0,x1) => { x0.spellcheck = x1 },
      cJ: (x0,x1) => new Intl.v8BreakIterator(x0,x1),
      cK: x0 => x0.current(),
      cL: (x0,x1) => { x0.responseType = x1 },
      cM: (x0,x1,x2,x3,x4) => x0.render(x1,x2,x3,x4),
      cN: (x0,x1) => x0.key(x1),
      cO: (x0,x1) => x0.appendChild(x1),
      cP: x0 => x0.heading,
      d: s => printToConsole(s),
      dB: Function.prototype.call.bind(Object.getOwnPropertyDescriptor(DataView.prototype, 'byteLength').get),
      dC: x0 => x0.console,
      dD: (s) => +s,
      dE: x0 => x0.ctrlKey,
      dF: x0 => x0.isConnected,
      dG: x0 => x0.orientation,
      dH: x0 => ({createScriptURL: x0}),
      dI: (x0,x1) => { x0.disabled = x1 },
      dJ: x0 => x0.v8BreakIterator,
      dK: () => globalThis.tchinPush,
      dL: () => new XMLHttpRequest(),
      dM: x0 => x0.createHost(),
      dN: x0 => x0.length,
      dO: (x0,x1) => { x0.onerror = x1 },
      dP: x0 => x0.accuracy,
      e: (exn) => {
        if (exn instanceof Error) {
          return exn.stack;
        } else {
          return null;
        }
      },
      eB: o => o.byteOffset,
      eC: () => globalThis.window,
      eD: s => {
        if (!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(s)) {
          return NaN;
        }
        return parseFloat(s);
      },
      eE: x0 => x0.getBoundingClientRect(),
      eF: x0 => x0.head,
      eG: x0 => x0.deviceMemory,
      eH: (x0,x1,x2) => x0.createPolicy(x1,x2),
      eI: (x0,x1,x2) => x0.setSelectionRange(x1,x2),
      eJ: () => globalThis.Intl,
      eK: x0 => x0.status(),
      eL: x0 => x0.request(),
      eM: () => globalThis.tchinGoogle,
      eN: x0 => x0.baseURI,
      eO: (x0,x1) => x0.removeChild(x1),
      eP: x0 => x0.altitudeAccuracy,
      f: (x0,x1) => x0.didCreateEngineInitializer(x1),
      fB: o => o.buffer,
      fC: (o, c) => o instanceof c,
      fD: s => s.trim(),
      fE: x0 => x0.y,
      fF: (x0,x1) => { x0.content = x1 },
      fG: x0 => x0.onLine,
      fH: (x0,x1,x2) => x0.createScriptURL(x1,x2),
      fI: (x0,x1,x2) => x0.setSelectionRange(x1,x2),
      fJ: (x0,x1) => x0.segment(x1),
      fK: () => globalThis.tchinReloadNow,
      fL: () => globalThis.tchinCamera,
      fM: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      fN: x0 => x0.document,
      fO: (x0,x1) => { x0.onload = x1 },
      fP: x0 => x0.altitude,
      g: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      gB: Function.prototype.call.bind(DataView.prototype.getUint8),
      gC: (x0,x1) => x0[x1],
      gD: x0 => x0.classList,
      gE: x0 => x0.x,
      gF: (x0,x1) => { x0.name = x1 },
      gG: x0 => x0.navigator,
      gH: x0 => x0.hasChildNodes(),
      gI: x0 => x0.data,
      gJ: x0 => x0.index,
      gK: () => globalThis.tchinNewerVersionAvailable,
      gL: (x0,x1) => x0.subscribe(x1),
      gM: (wasmFunction,f) => finalizeWrapper(f, function() { return wasmFunction(f,arguments.length) }),
      gN: x0 => x0.reset,
      gO: (x0,x1) => { x0.lang = x1 },
      gP: x0 => x0.timestamp,
      h: (wasmFunction,f) => finalizeWrapper(f, function() { return wasmFunction(f,arguments.length) }),
      hB: (b, o) => new DataView(b, o),
      hC: x0 => x0.length,
      hD: x0 => x0.relatedTarget,
      hE: x0 => x0.top,
      hF: (x0,x1) => x0.removeChild(x1),
      hG: x0 => x0.pathname,
      hH: (x0,x1,x2) => x0.insertBefore(x1,x2),
      hI: s => {
        if (/[[\]{}()*+?.\\^$|]/.test(s)) {
            s = s.replace(/[[\]{}()*+?.\\^$|]/g, '\\$&');
        }
        return s;
      },
      hJ: x0 => x0.next(),
      hK: x0 => x0.naturalHeight,
      hL: x0 => x0.status(),
      hM: x0 => { globalThis.tchinKbDone = x0 },
      hN: x0 => x0.stopContinuousDecode,
      hO: (x0,x1) => { x0.type = x1 },
      hP: x0 => x0.longitude,
      i: (x0,x1) => ({initializeEngine: x0,autoStart: x1}),
      iB: (b, o, l) => new DataView(b, o, l),
      iC: (string, token) => string.split(token),
      iD: x0 => x0.hasFocus(),
      iE: x0 => x0.left,
      iF: x0 => x0.firstChild,
      iG: x0 => x0.userAgent,
      iH: (x0,x1) => x0.append(x1),
      iI: x0 => x0.keyCode,
      iJ: x0 => x0.value,
      iK: x0 => x0.naturalWidth,
      iL: x0 => x0.unsubscribe(),
      iM: x0 => { globalThis.tchinKbNav = x0 },
      iN: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1) { return wasmFunction(f,arguments.length,x0,x1) }),
      iO: (x0,x1) => { x0.defer = x1 },
      iP: x0 => x0.latitude,
      j: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1) { return wasmFunction(f,arguments.length,x0,x1) }),
      jB: Function.prototype.call.bind(DataView.prototype.getFloat64),
      jC: o => o instanceof Array,
      jD: x0 => x0.shiftKey,
      jE: x0 => x0.scrollTop,
      jF: x0 => x0.viewConstraints,
      jG: (x0,x1) => x0.matchMedia(x1),
      jH: x0 => x0.firstChild,
      jI: (x0,x1) => x0.scrollIntoView(x1),
      jJ: x0 => x0.done,
      jK: (x0,x1) => x0.createElement(x1),
      jL: () => new FileReader(),
      jM: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      jN: (x0,x1,x2,x3) => x0.call(x1,x2,x3),
      jO: (x0,x1) => { x0.async = x1 },
      jP: x0 => x0.coords,
      k: x0 => new Promise(x0),
      kB: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Float64Array) return 1;
        return 2;
      },
      kC: (a, i) => a[i],
      kD: x0 => x0.body,
      kE: x0 => x0.offsetTop,
      kF: x0 => x0.hostElement,
      kG: x0 => x0.matches,
      kH: x0 => x0.head,
      kI: x0 => x0.multiViewEnabled,
      kJ: (o, m, a) => o[m].apply(o, a),
      kK: (x0,x1) => { x0.pointerEvents = x1 },
      kL: (x0,x1) => x0.readAsArrayBuffer(x1),
      kM: (x0,x1) => globalThis.window.addEventListener(x0,x1),
      kN: x0 => x0.rawBytes,
      kO: (x0,x1) => { x0.id = x1 },
      kP: (x0,x1) => x0.query(x1),
      l: (x0,x1,x2) => x0.call(x1,x2),
      lB: Function.prototype.call.bind(DataView.prototype.setFloat64),
      lC: a => a.length,
      lD: x0 => x0.visibilityState,
      lE: x0 => x0.scrollLeft,
      lF: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      lG: x0 => x0.platform,
      lH: (x0,x1) => { x0.integrity = x1 },
      lI: (x0,x1) => x0.replaceWith(x1),
      lJ: x0 => x0.iterator,
      lK: (x0,x1) => { x0.height = x1 },
      lL: x0 => x0.result,
      lM: (x0,x1) => x0.getItem(x1),
      lN: x0 => x0.text,
      lO: x0 => x0.videoHeight,
      lP: x0 => x0.state,
      m: (constructor, args) => {
        const factoryFunction = constructor.bind.apply(
            constructor, [null, ...args]);
        return new factoryFunction();
      },
      mB: (t, s) => t.set(s),
      mC: (x0,x1) => x0.test(x1),
      mD: (x0,x1,x2) => x0.removeEventListener(x1,x2),
      mE: x0 => x0.offsetLeft,
      mF: x0 => ({runApp: x0}),
      mG: (map, o, v) => map.set(o, v),
      mH: (x0,x1) => { x0.src = x1 },
      mI: (x0,x1) => { x0.className = x1 },
      mJ: () => globalThis.Symbol,
      mK: (x0,x1) => { x0.width = x1 },
      mL: () => new XMLHttpRequest(),
      mM: x0 => x0.localStorage,
      mN: x0 => x0.barcodeFormat,
      mO: x0 => x0.videoWidth,
      mP: x0 => x0.permissions,
      n: x0 => new Array(x0),
      nB: Function.prototype.call.bind(DataView.prototype.setFloat32),
      nC: x0 => x0.userAgent,
      nD: x0 => x0.disconnect(),
      nE: x0 => x0.offsetParent,
      nF: (x0,x1) => x0.call(x1),
      nG: Function.prototype.call.bind(DataView.prototype.getBigInt64),
      nH: x0 => x0.trustedTypes,
      nI: (x0,x1) => { x0.action = x1 },
      nJ: (x0,x1) => new Intl.Segmenter(x0,x1),
      nK: x0 => x0.style,
      nL: (x0,x1,x2,x3) => x0.open(x1,x2,x3),
      nM: (x0,x1,x2,x3) => x0.replaceState(x1,x2,x3),
      nN: x0 => x0.y,
      nO: x0 => x0.play(),
      nP: x0 => x0.geolocation,
      o: o => [o],
      oB: Function.prototype.call.bind(DataView.prototype.getFloat32),
      oC: x0 => x0.navigator,
      oD: x0 => new Intl.Locale(x0),
      oE: x0 => x0.offsetY,
      oF: o => {
        const proto = Object.getPrototypeOf(o);
        return proto === Object.prototype || proto === null;
      },
      oG: Function.prototype.call.bind(DataView.prototype.setBigInt64),
      oH: (x0,x1) => { x0.crossOrigin = x1 },
      oI: (x0,x1) => { x0.method = x1 },
      oJ: x0 => x0.Segmenter,
      oK: (x0,x1) => { x0.src = x1 },
      oL: x0 => x0.send(),
      oM: x0 => x0.history,
      oN: x0 => x0.x,
      oO: x0 => x0.paused,
      oP: (x0,x1,x2) => globalThis.firebase_core.registerVersion(x0,x1,x2),
      p: (o0, o1) => [o0, o1],
      pB: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Float32Array) return 1;
        return 2;
      },
      pC: Function.prototype.call.bind(String.prototype.toLowerCase),
      pD: x0 => x0.region,
      pE: x0 => x0.offsetX,
      pF: o => Object.keys(o),
      pG: (o, start, length) => new BigInt64Array(o.buffer, o.byteOffset + start, length),
      pH: (x0,x1) => x0.createElement(x1),
      pI: (x0,x1) => { x0.noValidate = x1 },
      pJ: () => new TextDecoder(),
      pK: () => globalThis.document,
      pL: x0 => x0.type,
      pM: x0 => x0.href,
      pN: x0 => x0.resultPoints,
      pO: x0 => x0.stream,
      pP: x0 => x0.sessionStorage,
      q: (o0, o1, o2) => [o0, o1, o2],
      qB: Function.prototype.call.bind(DataView.prototype.getUint32),
      qC: Object.is,
      qD: x0 => x0.script,
      qE: (o, p, r) => o.replace(p, () => r),
      qF: () => globalThis.tchinTakeReloadReport,
      qG: x0 => x0.hash,
      qH: (x0,x1) => x0.requestAnimationFrame(x1),
      qI: (x0,x1,x2,x3) => x0.drawImage(x1,x2,x3),
      qJ: a => a.pop(),
      qK: x0 => x0.nextSibling,
      qL: x0 => x0.response,
      qM: (x0,x1) => x0.removeItem(x1),
      qN: x0 => x0.message,
      qO: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      qP: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      r: (o0, o1, o2, o3) => [o0, o1, o2, o3],
      rB: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Uint32Array) return 1;
        return 2;
      },
      rC: x0 => x0.vendor,
      rD: x0 => x0.language,
      rE: (o, p, r) => o.replaceAll(p, () => r),
      rF: (x0,x1) => x0.getRandomValues(x1),
      rG: x0 => x0.location,
      rH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      rI: (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9) => x0.drawImage(x1,x2,x3,x4,x5,x6,x7,x8,x9),
      rJ: x0 => x0.click(),
      rK: (x0,x1) => x0.debug(x1),
      rL: (x0,x1) => { x0.responseType = x1 },
      rM: (x0,x1,x2) => x0.setItem(x1,x2),
      rN: x0 => x0.videoElement,
      rO: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      rP: (x0,x1,x2) => x0.addEventListener(x1,x2),
      s: (x0,x1,x2) => { x0[x1] = x2 },
      sB: Function.prototype.call.bind(DataView.prototype.getInt32),
      sC: (x0,x1) => x0.createTextNode(x1),
      sD: x0 => x0.languages,
      sE: x0 => x0.deltaMode,
      sF: () => globalThis.crypto,
      sG: (x0,x1,x2,x3) => x0.replaceState(x1,x2,x3),
      sH: x0 => x0.now(),
      sI: (x0,x1) => x0.getContext(x1),
      sJ: (x0,x1) => x0.getElementsByClassName(x1),
      sK: x0 => x0.src,
      sL: x0 => x0.vendor,
      sM: x0 => new BroadcastChannel(x0),
      sN: x0 => x0.decodeContinuously,
      sO: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      sP: x0 => x0.message,
      t: (o, p) => o[p],
      tB: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Int32Array) return 1;
        return 2;
      },
      tC: (x0,x1) => { x0.id = x1 },
      tD: (x0,x1) => x0.observe(x1),
      tE: x0 => x0.deltaY,
      tF: l => new DataView(new ArrayBuffer(l)),
      tG: x0 => x0.history,
      tH: x0 => x0.performance,
      tI: (x0,x1) => { x0.height = x1 },
      tJ: (x0,x1) => x0.dispatchEvent(x1),
      tK: x0 => x0.close(),
      tL: x0 => globalThis.URL.createObjectURL(x0),
      tM: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      tN: (x0,x1) => new ZXing.BrowserMultiFormatReader(x0,x1),
      tO: (x0,x1) => { x0.oncancel = x1 },
      tP: x0 => x0.extraAssets,
      u: () => globalThis,
      uB: o => o instanceof Uint16Array,
      uC: (x0,x1) => { x0.nonce = x1 },
      uD: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1) { return wasmFunction(f,arguments.length,x0,x1) }),
      uE: x0 => x0.deltaX,
      uF: () => new WeakMap(),
      uG: x0 => x0.search,
      uH: (x0,x1) => x0.removeProperty(x1),
      uI: (x0,x1) => { x0.width = x1 },
      uJ: (x0,x1) => x0.createEvent(x1),
      uK: (x0,x1,x2,x3,x4,x5) => x0.createImageBitmap(x1,x2,x3,x4,x5),
      uL: x0 => ({type: x0}),
      uM: x0 => x0.close(),
      uN: x0 => x0.getVideoTracks(),
      uO: (x0,x1) => { x0.onchange = x1 },
      uP: x0 => x0.fontManifest,
      v: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      vB: Function.prototype.call.bind(DataView.prototype.getUint16),
      vC: x0 => x0.nonce,
      vD: x0 => new ResizeObserver(x0),
      vE: x0 => x0.wheelDeltaY,
      vF: (map, o) => map.get(o),
      vG: x0 => x0.pathname,
      vH: (x0,x1,x2) => x0.insertBefore(x1,x2),
      vI: (x0,x1) => x0.transferFromImageBitmap(x1),
      vJ: (x0,x1,x2,x3) => x0.initEvent(x1,x2,x3),
      vK: (x0,x1,x2) => x0.createImageBitmap(x1,x2),
      vL: (x0,x1) => new Blob(x0,x1),
      vM: (x0,x1) => x0.postMessage(x1),
      vN: x0 => x0.getCapabilities(),
      vO: x0 => x0.type,
      vP: x0 => x0.assetManifest,
      w: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      wB: o => o instanceof Int16Array,
      wC: () => globalThis.window.flutterConfiguration,
      wD: (x0,x1) => x0.getPropertyValue(x1),
      wE: x0 => x0.wheelDeltaX,
      wF: () => {
        return typeof process != "undefined" &&
               Object.prototype.toString.call(process) == "[object process]" &&
               process.platform == "win32"
      },
      wG: x0 => x0.state,
      wH: x0 => x0.id,
      wI: x0 => x0.height,
      wJ: x0 => x0.readText(),
      wK: (x0,x1) => x0.createImageBitmap(x1),
      wL: o => o.byteLength,
      wM: (x0,x1) => { x0.onmessage = x1 },
      wN: () => ({}),
      wO: x0 => x0.lastModified,
      wP: x0 => x0.buildConfig,
      x: (x0,x1) => ({addView: x0,removeView: x1}),
      xB: Function.prototype.call.bind(DataView.prototype.getInt16),
      xC: (x0,x1) => x0.attachShadow(x1),
      xD: x0 => globalThis.parseFloat(x0),
      xE: x0 => x0.bottom,
      xF: () => {
        // On browsers return `globalThis.location.href`
        if (globalThis.location != null) {
          return globalThis.location.href;
        }
        return null;
      },
      xG: (x0,x1,x2,x3) => x0.pushState(x1,x2,x3),
      xH: (x0,x1) => x0.querySelectorAll(x1),
      xI: x0 => x0.width,
      xJ: x0 => x0.clipboard,
      xK: x0 => new Blob(x0),
      xL: x0 => x0.unmount(),
      xM: x0 => x0.hostElement,
      xN: x0 => x0.getSettings(),
      xO: x0 => x0.size,
      xP: x0 => x0.length,
      y: (l, r) => l === r,
      yB: o => o instanceof Uint8ClampedArray,
      yC: (x0,x1) => x0.createElement(x1),
      yD: (x0,x1) => x0.getComputedStyle(x1),
      yE: x0 => x0.right,
      yF: () => new AbortController(),
      yG: (x0,x1) => x0.go(x1),
      yH: x0 => x0.offsetHeight,
      yI: x0 => x0.rasterEndMilliseconds,
      yJ: (x0,x1) => x0.writeText(x1),
      yK: x0 => x0.close(),
      yL: () => globalThis.tchinPay,
      yM: x0 => x0.location,
      yN: (x0,x1) => ({width: x0,height: x1}),
      yO: x0 => x0.name,
      yP: x0 => x0.getReader(),
      z: x0 => x0.random(),
      zB: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Uint8Array) return 1;
        return 2;
      },
      zC: x0 => x0.scale,
      zD: x0 => x0.documentElement,
      zE: x0 => x0.clientY,
      zF: (x0,x1,x2,x3,x4,x5) => ({method: x0,headers: x1,body: x2,credentials: x3,redirect: x4,signal: x5}),
      zG: x0 => x0.state,
      zH: x0 => x0.offsetWidth,
      zI: x0 => x0.rasterStartMilliseconds,
      zJ: x0 => x0.unlock(),
      zK: x0 => x0.naturalHeight,
      zL: (x0,x1,x2,x3) => x0.wallet(x1,x2,x3),
      zM: (x0,x1) => x0.getModifierState(x1),
      zN: (x0,x1,x2) => ({width: x0,height: x1,facingMode: x2}),
      zO: (x0,x1) => x0.item(x1),
      zP: x0 => x0.value,

    };

    const baseImports = {
      _: dart2wasm,
      Math: Math,
      Date: Date,
      Object: Object,
      Array: Array,
      Reflect: Reflect,
      WebAssembly: {
        JSTag: WebAssembly.JSTag,
      },
      "": new Proxy({}, { get(_, prop) { return prop; } }),

    };

    

    dartInstance = await WebAssembly.instantiate(this.module, {
      ...baseImports,
      ...additionalImports,
      
    });

    return new InstantiatedApp(this, dartInstance);
  }
}

class InstantiatedApp {
  constructor(compiledApp, instantiatedModule) {
    this.compiledApp = compiledApp;
    this.instantiatedModule = instantiatedModule;
  }

  // Call the main function with the given arguments.
  invokeMain(...args) {
    this.instantiatedModule.exports.$invokeMain(args);
  }
}
