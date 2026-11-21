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
      AG: x0 => x0.name,
      AH: () => typeof dartUseDateNowForTicks !== "undefined",
      AI: x0 => x0.stopPropagation(),
      AJ: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmF32ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      AK: (x0,x1) => x0.querySelector(x1),
      AL: x0 => x0.displayHeight,
      AM: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      AN: x0 => x0.code,
      AO: (x0,x1,x2,x3) => x0.drawImage(x1,x2,x3),
      B: () => new Error().stack,
      BB: (x0,x1,x2,x3) => x0.addEventListener(x1,x2,x3),
      BC: Function.prototype.call.bind(DataView.prototype.setUint32),
      BD: x0 => x0.devicePixelRatio,
      BE: (x0,x1) => x0.get(x1),
      BF: x0 => x0.changedTouches,
      BG: x0 => x0.statusText,
      BH: () => 1000 * performance.now(),
      BI: x0 => x0.value,
      BJ: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmF64ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      BK: (x0,x1) => { x0.title = x1 },
      BL: x0 => x0.displayWidth,
      BM: (x0,x1,x2,x3) => x0.mountCard(x1,x2,x3),
      BN: x0 => x0.repeat,
      BO: (x0,x1,x2,x3,x4,x5) => x0.drawImage(x1,x2,x3,x4,x5),
      C: (c) =>
      queueMicrotask(() => dartInstance.exports.$invokeCallback(c)),
      CB: b => !!b,
      CC: Function.prototype.call.bind(DataView.prototype.setInt16),
      CD: x0 => x0.height,
      CE: (o, p) => p in o,
      CF: x0 => x0.key,
      CG: x0 => x0.url,
      CH: (x0,x1,x2,x3) => x0.removeEventListener(x1,x2,x3),
      CI: x0 => x0.disabled,
      CJ: x0 => x0.maxHeight,
      CK: (x0,x1) => x0.vibrate(x1),
      CL: x0 => x0.duration,
      CM: (wasmFunction,f) => finalizeWrapper(f, function() { return wasmFunction(f,arguments.length) }),
      CN: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      CO: x0 => x0.height,
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
      DG: x0 => x0.status,
      DH: (x0,x1,x2,x3) => x0.addEventListener(x1,x2,x3),
      DI: (x0,x1) => { x0.type = x1 },
      DJ: x0 => x0.maxWidth,
      DK: x0 => x0.content,
      DL: (x0,x1) => ({frameIndex: x0,completeFramesOnly: x1}),
      DM: (x0,x1) => x0.payWallet(x1),
      DN: (x0,x1) => x0.canShare(x1),
      DO: x0 => x0.width,
      E: Function.prototype.call.bind(Number.prototype.toString),
      EB: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      EC: Function.prototype.call.bind(DataView.prototype.setUint8),
      ED: x0 => x0.screen,
      EE: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      EF: x0 => x0.touches,
      EG: x0 => x0.getReader(),
      EH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      EI: (x0,x1) => { x0.min = x1 },
      EJ: x0 => x0.minHeight,
      EK: x0 => x0.document,
      EL: (x0,x1) => x0.decode(x1),
      EM: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1) { return wasmFunction(f,arguments.length,x0,x1) }),
      EN: (x0,x1) => x0.share(x1),
      EO: (x0,x1) => x0.getContext(x1),
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
      FG: x0 => x0.read(),
      FH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      FI: (x0,x1) => { x0.max = x1 },
      FJ: x0 => x0.minWidth,
      FK: () => globalThis.tchinSetThemeColor,
      FL: x0 => x0.image,
      FM: (o,s,v) => o[s] = v,
      FN: x0 => x0.message,
      FO: (x0,x1) => { x0.height = x1 },
      G: s => JSON.stringify(s),
      GB: () => ({}),
      GC: Function.prototype.call.bind(DataView.prototype.getInt8),
      GD: x0 => x0.tabIndex,
      GE: (x0,x1) => x0.matchMedia(x1),
      GF: x0 => x0.tiltY,
      GG: x0 => x0.value,
      GH: x0 => x0.body,
      GI: (x0,x1) => { x0.value = x1 },
      GJ: (handle) => clearInterval(handle),
      GK: () => globalThis.tchinSafeTop,
      GL: x0 => x0.close(),
      GM: () => Symbol("jsBoxedDartObjectProperty"),
      GN: (x0,x1,x2,x3) => x0.open(x1,x2,x3),
      GO: (x0,x1) => { x0.width = x1 },
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
      HG: x0 => x0.done,
      HH: () => globalThis.document,
      HI: (x0,x1) => { x0.disabled = x1 },
      HJ: (ms, c) =>
      setInterval(() => dartInstance.exports.$invokeCallback(c), ms),
      HK: x0 => new WeakRef(x0),
      HL: (x0,x1,x2,x3,x4) => ({type: x0,data: x1,premultiplyAlpha: x2,colorSpaceConversion: x3,preferAnimation: x4}),
      HM: (x0,x1,x2,x3) => x0.wallet(x1,x2,x3),
      HN: x0 => x0.click(),
      HO: x0 => x0.height,
      I: Function.prototype.call.bind(String.prototype.indexOf),
      IB: () => [],
      IC: (o, start, length) => new Float64Array(o.buffer, o.byteOffset + start, length),
      ID: x0 => x0.activeElement,
      IE: o => typeof o === 'function' && o[jsWrappedDartFunctionSymbol] === true,
      IF: x0 => x0.pointerType,
      IG: x0 => x0.cancel(),
      IH: () => globalThis.window._flutter_skwasmInstance,
      II: (a, l) => a.length = l,
      IJ: () => Date.now(),
      IK: x0 => x0.deref(),
      IL: x0 => new window.ImageDecoder(x0),
      IM: x0 => x0.createHost(),
      IN: (o, a) => o + a,
      IO: x0 => x0.width,
      J: (s, p, i) => s.lastIndexOf(p, i),
      JB: (a, i) => a.push(i),
      JC: (o, start, length) => new Float32Array(o.buffer, o.byteOffset + start, length),
      JD: x0 => x0.parentNode,
      JE: f => f.dartFunction,
      JF: x0 => x0.pointerId,
      JG: x0 => x0.body,
      JH: () => globalThis.window.flutterCanvasKit,
      JI: (x0,x1) => { x0.scrollTop = x1 },
      JJ: x0 => x0.debugSkipFontRetryDelay,
      JK: () => globalThis.WeakRef,
      JL: x0 => x0.name,
      JM: (x0,x1,x2,x3) => x0.putImageData(x1,x2,x3),
      JN: x0 => x0.children,
      JO: (x0,x1) => { x0.src = x1 },
      K: o => o,
      KB: x0 => new Int8Array(x0),
      KC: (o, start, length) => new Uint32Array(o.buffer, o.byteOffset + start, length),
      KD: x0 => x0.tagName,
      KE: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      KF: x0 => x0.getCoalescedEvents(),
      KG: x0 => x0.headers,
      KH: () => globalThis.globalThis,
      KI: (x0,x1) => { x0.scrollLeft = x1 },
      KJ: x0 => x0.status,
      KK: (o, offsetInBytes, lengthInBytes) => {
        var dst = new ArrayBuffer(lengthInBytes);
        new Uint8Array(dst).set(new Uint8Array(o, offsetInBytes, lengthInBytes));
        return new DataView(dst);
      },
      KL: x0 => x0.repetitionCount,
      KM: x0 => x0.arrayBuffer(),
      KN: (x0,x1) => { x0.download = x1 },
      KO: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
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
      LG: x0 => x0.signal,
      LH: x0 => x0.remove(),
      LI: (d, digits) => d.toFixed(digits),
      LJ: x0 => new Uint8Array(x0),
      LK: (a, s, e) => a.slice(s, e),
      LL: x0 => x0.frameCount,
      LM: (x0,x1) => { x0.height = x1 },
      LN: (x0,x1) => { x0.display = x1 },
      LO: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      M: x0 => x0.index,
      MB: x0 => new Uint8Array(x0),
      MC: (o, start, length) => new Uint16Array(o.buffer, o.byteOffset + start, length),
      MD: x0 => x0.clientY,
      ME: (p, s, f) => p.then(s, (e) => f(e, e === undefined)),
      MF: s => s.toUpperCase(),
      MG: x0 => x0.abort(),
      MH: (x0,x1) => x0.querySelectorAll(x1),
      MI: (x0,x1) => x0.add(x1),
      MJ: (x0,x1,x2) => x0.set(x1,x2),
      MK: () => globalThis.tchinPayReturn,
      ML: x0 => x0.selectedTrack,
      MM: (x0,x1) => { x0.width = x1 },
      MN: x0 => x0.style,
      MO: (x0,x1,x2) => ({enableHighAccuracy: x0,timeout: x1,maximumAge: x2}),
      N: o => String(o),
      NB: x0 => new Uint8ClampedArray(x0),
      NC: (o, start, length) => new Int16Array(o.buffer, o.byteOffset + start, length),
      ND: x0 => x0.clientX,
      NE: (o, i) => o[i],
      NF: x0 => x0.pop(),
      NG: x0 => x0.origin,
      NH: (x0,x1) => x0.item(x1),
      NI: (x0,x1) => { x0.value = x1 },
      NJ: x0 => x0.buffer,
      NK: () => new Array(),
      NL: x0 => x0.completed,
      NM: x0 => x0.convertToBlob(),
      NN: (x0,x1) => { x0.href = x1 },
      NO: (x0,x1,x2,x3) => x0.getCurrentPosition(x1,x2,x3),
      O: o => o === undefined,
      OB: x0 => new Int16Array(x0),
      OC: (o, start, length) => new Uint8ClampedArray(o.buffer, o.byteOffset + start, length),
      OD: (x0,x1,x2) => x0.addEventListener(x1,x2),
      OE: o => o.length,
      OF: x0 => x0.flags,
      OG: x0 => x0.location,
      OH: x0 => x0.length,
      OI: x0 => x0.value,
      OJ: x0 => x0.wasmMemory,
      OK: (x0,x1) => new WebSocket(x0,x1),
      OL: x0 => x0.ready,
      OM: (x0,x1,x2) => new ImageData(x0,x1,x2),
      ON: x0 => ({url: x0}),
      OO: x0 => x0.message,
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
      PG: () => globalThis.window,
      PH: () => globalThis.Sentry.close(),
      PI: x0 => x0.selectionDirection,
      PJ: () => globalThis.window._flutter_skwasmInstance,
      PK: x0 => x0.reason,
      PL: x0 => x0.tracks,
      PM: (x0,x1) => x0.getContext(x1),
      PN: (x0,x1,x2) => ({files: x0,title: x1,text: x2}),
      PO: x0 => x0.code,
      Q: (x0,x1) => { x0.lastIndex = x1 },
      QB: x0 => new Uint16Array(x0),
      QC: (o, start, length) => new Int8Array(o.buffer, o.byteOffset + start, length),
      QD: (x0,x1) => x0.closest(x1),
      QE: x0 => x0.language,
      QF: (x0,x1) => x0.error(x1),
      QG: (o, p) => p in o,
      QH: (o, p, v) => o[p] = v,
      QI: x0 => x0.selectionStart,
      QJ: x0 => x0.arrayBuffer(),
      QK: x0 => x0.code,
      QL: () => globalThis.window.ImageDecoder,
      QM: (x0,x1) => new OffscreenCanvas(x0,x1),
      QN: (x0,x1) => ({files: x0,text: x1}),
      QO: x0 => x0.speed,
      R: o => o,
      RB: x0 => new Int32Array(x0),
      RC: (x0,x1) => x0.querySelector(x1),
      RD: (ms, c) =>
      setTimeout(() => dartInstance.exports.$invokeCallback(c),ms),
      RE: (x0,x1,x2,x3) => x0.register(x1,x2,x3),
      RF: () => globalThis.console,
      RG: x0 => x0.groups,
      RH: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1) { return wasmFunction(f,arguments.length,x0,x1) }),
      RI: x0 => x0.selectionEnd,
      RJ: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof ArrayBuffer) return 1;
        if (globalThis.SharedArrayBuffer !== undefined &&
            o instanceof SharedArrayBuffer) {
          return 2;
        }
        return 3;
      },
      RK: (o, t) => typeof o === t,
      RL: x0 => x0.decode(),
      RM: x0 => x0.allocationSize(),
      RN: (x0,x1) => ({files: x0,title: x1}),
      RO: x0 => x0.heading,
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
      SG: (a, i) => a.splice(i, 1),
      SH: x0 => globalThis.Sentry.init(x0),
      SI: x0 => x0.selectionDirection,
      SJ: (x0,x1) => x0.fetch(x1),
      SK: x0 => x0.data,
      SL: (x0,x1,x2,x3) => x0.open(x1,x2,x3),
      SM: (x0,x1) => x0.copyTo(x1),
      SN: x0 => ({files: x0}),
      SO: x0 => x0.accuracy,
      T: o => o instanceof RegExp,
      TB: x0 => new Uint32Array(x0),
      TC: x0 => x0.length,
      TD: x0 => x0.maxTouchPoints,
      TE: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      TF: x0 => x0.blur(),
      TG: secondsSinceEpoch => {
        const date = new Date(secondsSinceEpoch * 1000);
        const match = /\((.*)\)/.exec(date.toString());
        if (match == null) {
            // This should never happen on any recent browser.
            return '';
        }
        return match[1];
      },
      TH: () => new Sentry.getClient(),
      TI: x0 => x0.selectionStart,
      TJ: x0 => x0.fontFallbackBaseUrl,
      TK: (x0,x1,x2) => x0.close(x1,x2),
      TL: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      TM: (x0,x1) => x0.toDataURL(x1),
      TN: (x0,x1) => ({title: x0,text: x1}),
      TO: x0 => x0.altitudeAccuracy,
      U: (string, times) => string.repeat(times),
      UB: x0 => new Float32Array(x0),
      UC: (x0,x1) => x0.querySelectorAll(x1),
      UD: x0 => x0.platform,
      UE: x0 => new window.FinalizationRegistry(x0),
      UF: x0 => x0.button,
      UG: x0 => x0.devicePixelRatio,
      UH: x0 => x0.getOptions(),
      UI: x0 => x0.selectionEnd,
      UJ: (x0,x1,x2) => x0.slice(x1,x2),
      UK: (x0,x1) => x0.close(x1),
      UL: (x0,x1,x2) => x0.addEventListener(x1,x2),
      UM: x0 => x0.format,
      UN: x0 => ({text: x0}),
      UO: x0 => x0.altitude,
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
      VG: x0 => x0.availWidth,
      VH: (x0,x1) => { x0.name = x1 },
      VI: (x0,x1) => { x0.name = x1 },
      VJ: (x0,x1) => x0.decode(x1),
      VK: x0 => x0.close(),
      VL: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      VM: (x0,x1,x2,x3,x4) => x0.getImageData(x1,x2,x3,x4),
      VN: () => ({}),
      VO: x0 => x0.timestamp,
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
      WG: x0 => x0.availHeight,
      WH: (x0,x1) => { x0.sdk = x1 },
      WI: (x0,x1) => { x0.placeholder = x1 },
      WJ: (x0,x1) => x0.adoptText(x1),
      WK: (x0,x1) => x0.send(x1),
      WL: x0 => x0.send(),
      WM: x0 => x0.data,
      WN: (x0,x1,x2) => new File(x0,x1,x2),
      WO: x0 => x0.longitude,
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
      XG: x0 => x0.screen,
      XH: x0 => x0.sdk,
      XI: (x0,x1) => { x0.autocomplete = x1 },
      XJ: x0 => x0.first(),
      XK: x0 => x0.readyState,
      XL: x0 => x0.status,
      XM: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1) { return wasmFunction(f,arguments.length,x0,x1) }),
      XN: (x0,x1) => { x0.type = x1 },
      XO: x0 => x0.latitude,
      Y: x0 => x0.unicode,
      YB: x0 => new ArrayBuffer(x0),
      YC: (x0,x1) => x0.append(x1),
      YD: () => new TextDecoder("utf-8", {fatal: false}),
      YE: x0 => x0.timeStamp,
      YF: x0 => x0.innerWidth,
      YG: x0 => x0.type,
      YH: () => globalThis.Sentry.globalHandlersIntegration(),
      YI: (x0,x1) => { x0.name = x1 },
      YJ: x0 => x0.next(),
      YK: (x0,x1) => { x0.binaryType = x1 },
      YL: x0 => x0.response,
      YM: (x0,x1,x2,x3,x4) => x0.render(x1,x2,x3,x4),
      YN: (x0,x1) => x0.key(x1),
      YO: x0 => x0.coords,
      Z: x0 => x0.ignoreCase,
      ZB: (x0,x1,x2) => new Uint8Array(x0,x1,x2),
      ZC: (x0,x1,x2,x3) => x0.setProperty(x1,x2,x3),
      ZD: (a, i, v) => a[i] = v,
      ZE: (x0,x1) => x0.hasAttribute(x1),
      ZF: x0 => x0.height,
      ZG: x0 => x0.orientation,
      ZH: () => globalThis.Sentry.dedupeIntegration(),
      ZI: (x0,x1) => { x0.placeholder = x1 },
      ZJ: x0 => x0.current(),
      ZK: (a, l) => a.length = l,
      ZL: (x0,x1,x2) => x0.setRequestHeader(x1,x2),
      ZM: x0 => x0.createHost(),
      ZN: x0 => x0.length,
      ZO: (x0,x1) => x0.query(x1),
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
      aG: x0 => x0.deviceMemory,
      aH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      aI: (x0,x1) => { x0.spellcheck = x1 },
      aJ: (x0,x1) => new Intl.v8BreakIterator(x0,x1),
      aK: x0 => x0.current(),
      aL: (x0,x1) => { x0.responseType = x1 },
      aM: () => globalThis.tchinGoogle,
      aN: x0 => x0.baseURI,
      aO: x0 => x0.state,
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
      bG: x0 => x0.onLine,
      bH: x0 => ({createScriptURL: x0}),
      bI: (x0,x1) => { x0.disabled = x1 },
      bJ: x0 => x0.v8BreakIterator,
      bK: () => globalThis.tchinPush,
      bL: () => new XMLHttpRequest(),
      bM: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      bN: x0 => x0.document,
      bO: x0 => x0.permissions,
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
      cG: x0 => x0.navigator,
      cH: (x0,x1,x2) => x0.createPolicy(x1,x2),
      cI: (x0,x1,x2) => x0.setSelectionRange(x1,x2),
      cJ: () => globalThis.Intl,
      cK: x0 => x0.status(),
      cL: x0 => x0.request(),
      cM: (wasmFunction,f) => finalizeWrapper(f, function() { return wasmFunction(f,arguments.length) }),
      cN: (x0,x1) => x0.querySelector(x1),
      cO: x0 => x0.geolocation,
      d: s => printToConsole(s),
      dB: Function.prototype.call.bind(Object.getOwnPropertyDescriptor(DataView.prototype, 'byteLength').get),
      dC: x0 => x0.console,
      dD: (s) => +s,
      dE: x0 => x0.ctrlKey,
      dF: x0 => x0.isConnected,
      dG: x0 => x0.pathname,
      dH: (x0,x1,x2) => x0.createScriptURL(x1,x2),
      dI: (x0,x1,x2) => x0.setSelectionRange(x1,x2),
      dJ: (x0,x1) => x0.segment(x1),
      dK: (x0,x1) => x0.call(x1),
      dL: () => globalThis.tchinCamera,
      dM: x0 => { globalThis.tchinKbDone = x0 },
      dN: (x0,x1) => { x0.id = x1 },
      dO: (x0,x1,x2) => globalThis.firebase_core.registerVersion(x0,x1,x2),
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
      eG: x0 => x0.userAgent,
      eH: x0 => x0.hasChildNodes(),
      eI: x0 => x0.data,
      eJ: x0 => x0.index,
      eK: () => globalThis.tchinReloadForNewVersion,
      eL: (x0,x1) => x0.subscribe(x1),
      eM: x0 => { globalThis.tchinKbNav = x0 },
      eN: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      eO: x0 => x0.sessionStorage,
      f: (x0,x1) => x0.didCreateEngineInitializer(x1),
      fB: o => o.buffer,
      fC: (o, c) => o instanceof c,
      fD: s => s.trim(),
      fE: x0 => x0.y,
      fF: (x0,x1) => { x0.content = x1 },
      fG: (x0,x1) => x0.matchMedia(x1),
      fH: (x0,x1,x2) => x0.insertBefore(x1,x2),
      fI: s => {
        if (/[[\]{}()*+?.\\^$|]/.test(s)) {
            s = s.replace(/[[\]{}()*+?.\\^$|]/g, '\\$&');
        }
        return s;
      },
      fJ: x0 => x0.next(),
      fK: x0 => x0.naturalHeight,
      fL: x0 => x0.status(),
      fM: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      fN: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      fO: (x0,x1) => x0.appendChild(x1),
      g: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      gB: Function.prototype.call.bind(DataView.prototype.getUint8),
      gC: (x0,x1) => x0[x1],
      gD: x0 => x0.classList,
      gE: x0 => x0.x,
      gF: (x0,x1) => { x0.name = x1 },
      gG: x0 => x0.matches,
      gH: (x0,x1) => x0.append(x1),
      gI: x0 => x0.keyCode,
      gJ: x0 => x0.value,
      gK: x0 => x0.naturalWidth,
      gL: x0 => x0.unsubscribe(),
      gM: (x0,x1) => globalThis.window.addEventListener(x0,x1),
      gN: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      gO: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      h: (wasmFunction,f) => finalizeWrapper(f, function() { return wasmFunction(f,arguments.length) }),
      hB: (b, o) => new DataView(b, o),
      hC: x0 => x0.length,
      hD: x0 => x0.relatedTarget,
      hE: x0 => x0.top,
      hF: (x0,x1) => x0.removeChild(x1),
      hG: x0 => x0.platform,
      hH: x0 => x0.firstChild,
      hI: (x0,x1) => x0.scrollIntoView(x1),
      hJ: x0 => x0.done,
      hK: (x0,x1) => x0.createElement(x1),
      hL: () => new FileReader(),
      hM: (x0,x1) => x0.getItem(x1),
      hN: (x0,x1) => { x0.onerror = x1 },
      hO: (x0,x1,x2) => x0.addEventListener(x1,x2),
      i: (x0,x1) => ({initializeEngine: x0,autoStart: x1}),
      iB: (b, o, l) => new DataView(b, o, l),
      iC: (string, token) => string.split(token),
      iD: x0 => x0.hasFocus(),
      iE: x0 => x0.left,
      iF: x0 => x0.firstChild,
      iG: (map, o, v) => map.set(o, v),
      iH: x0 => x0.head,
      iI: x0 => x0.multiViewEnabled,
      iJ: (o, m, a) => o[m].apply(o, a),
      iK: (x0,x1) => { x0.pointerEvents = x1 },
      iL: (x0,x1) => x0.readAsArrayBuffer(x1),
      iM: x0 => x0.localStorage,
      iN: (x0,x1) => { x0.oncancel = x1 },
      iO: x0 => x0.message,
      j: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1) { return wasmFunction(f,arguments.length,x0,x1) }),
      jB: Function.prototype.call.bind(DataView.prototype.getFloat64),
      jC: o => o instanceof Array,
      jD: x0 => x0.shiftKey,
      jE: x0 => x0.scrollTop,
      jF: x0 => x0.viewConstraints,
      jG: Function.prototype.call.bind(DataView.prototype.getBigInt64),
      jH: (x0,x1) => { x0.integrity = x1 },
      jI: (x0,x1) => x0.replaceWith(x1),
      jJ: x0 => x0.iterator,
      jK: (x0,x1) => { x0.height = x1 },
      jL: x0 => x0.result,
      jM: (x0,x1,x2,x3) => x0.replaceState(x1,x2,x3),
      jN: (x0,x1) => { x0.onchange = x1 },
      jO: x0 => x0.extraAssets,
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
      kG: Function.prototype.call.bind(DataView.prototype.setBigInt64),
      kH: (x0,x1) => { x0.src = x1 },
      kI: (x0,x1) => { x0.className = x1 },
      kJ: () => globalThis.Symbol,
      kK: (x0,x1) => { x0.width = x1 },
      kL: () => new XMLHttpRequest(),
      kM: x0 => x0.history,
      kN: x0 => x0.type,
      kO: x0 => x0.fontManifest,
      l: (x0,x1,x2) => x0.call(x1,x2),
      lB: Function.prototype.call.bind(DataView.prototype.setFloat64),
      lC: a => a.length,
      lD: x0 => x0.visibilityState,
      lE: x0 => x0.scrollLeft,
      lF: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      lG: (o, start, length) => new BigInt64Array(o.buffer, o.byteOffset + start, length),
      lH: x0 => x0.trustedTypes,
      lI: (x0,x1) => { x0.action = x1 },
      lJ: (x0,x1) => new Intl.Segmenter(x0,x1),
      lK: x0 => x0.style,
      lL: (x0,x1,x2,x3) => x0.open(x1,x2,x3),
      lM: x0 => x0.href,
      lN: x0 => x0.lastModified,
      lO: x0 => x0.assetManifest,
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
      mG: x0 => x0.hash,
      mH: (x0,x1) => { x0.crossOrigin = x1 },
      mI: (x0,x1) => { x0.method = x1 },
      mJ: x0 => x0.Segmenter,
      mK: (x0,x1) => { x0.src = x1 },
      mL: x0 => x0.send(),
      mM: (x0,x1) => x0.removeItem(x1),
      mN: x0 => x0.size,
      mO: x0 => x0.buildConfig,
      n: x0 => new Array(x0),
      nB: Function.prototype.call.bind(DataView.prototype.setFloat32),
      nC: x0 => x0.userAgent,
      nD: x0 => x0.disconnect(),
      nE: x0 => x0.offsetParent,
      nF: (x0,x1) => x0.getRandomValues(x1),
      nG: x0 => x0.location,
      nH: (x0,x1) => x0.createElement(x1),
      nI: (x0,x1) => { x0.noValidate = x1 },
      nJ: () => new TextDecoder(),
      nK: () => globalThis.document,
      nL: x0 => x0.type,
      nM: (x0,x1,x2) => x0.setItem(x1,x2),
      nN: x0 => x0.name,
      nO: x0 => x0.length,
      o: o => [o],
      oB: Function.prototype.call.bind(DataView.prototype.getFloat32),
      oC: x0 => x0.navigator,
      oD: x0 => new Intl.Locale(x0),
      oE: x0 => x0.offsetY,
      oF: () => globalThis.crypto,
      oG: (x0,x1,x2,x3) => x0.replaceState(x1,x2,x3),
      oH: (x0,x1) => x0.requestAnimationFrame(x1),
      oI: (x0,x1,x2,x3) => x0.drawImage(x1,x2,x3),
      oJ: a => a.pop(),
      oK: x0 => x0.nextSibling,
      oL: x0 => x0.response,
      oM: x0 => new BroadcastChannel(x0),
      oN: (x0,x1) => x0.item(x1),
      oO: x0 => x0.getReader(),
      p: (o0, o1) => [o0, o1],
      pB: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Float32Array) return 1;
        return 2;
      },
      pC: Function.prototype.call.bind(String.prototype.toLowerCase),
      pD: x0 => x0.region,
      pE: x0 => x0.offsetX,
      pF: l => new DataView(new ArrayBuffer(l)),
      pG: x0 => x0.history,
      pH: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      pI: (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9) => x0.drawImage(x1,x2,x3,x4,x5,x6,x7,x8,x9),
      pJ: x0 => x0.click(),
      pK: (x0,x1) => x0.debug(x1),
      pL: (x0,x1) => { x0.responseType = x1 },
      pM: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      pN: x0 => x0.length,
      pO: x0 => x0.value,
      q: (o0, o1, o2) => [o0, o1, o2],
      qB: Function.prototype.call.bind(DataView.prototype.getUint32),
      qC: Object.is,
      qD: x0 => x0.script,
      qE: (o, p, r) => o.replace(p, () => r),
      qF: () => new WeakMap(),
      qG: x0 => x0.search,
      qH: x0 => x0.now(),
      qI: (x0,x1) => x0.getContext(x1),
      qJ: (x0,x1) => x0.getElementsByClassName(x1),
      qK: x0 => x0.src,
      qL: x0 => x0.vendor,
      qM: x0 => x0.close(),
      qN: x0 => x0.files,
      qO: x0 => x0.done,
      r: (o0, o1, o2, o3) => [o0, o1, o2, o3],
      rB: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Uint32Array) return 1;
        return 2;
      },
      rC: x0 => x0.vendor,
      rD: x0 => x0.language,
      rE: (o, p, r) => o.replaceAll(p, () => r),
      rF: (map, o) => map.get(o),
      rG: x0 => x0.pathname,
      rH: x0 => x0.performance,
      rI: (x0,x1) => { x0.height = x1 },
      rJ: (x0,x1) => x0.dispatchEvent(x1),
      rK: x0 => x0.close(),
      rL: x0 => globalThis.URL.createObjectURL(x0),
      rM: (x0,x1) => x0.postMessage(x1),
      rN: x0 => x0.target,
      rO: x0 => x0.read(),
      s: (x0,x1,x2) => { x0[x1] = x2 },
      sB: Function.prototype.call.bind(DataView.prototype.getInt32),
      sC: (x0,x1) => x0.createTextNode(x1),
      sD: x0 => x0.languages,
      sE: x0 => x0.deltaMode,
      sF: () => {
        return typeof process != "undefined" &&
               Object.prototype.toString.call(process) == "[object process]" &&
               process.platform == "win32"
      },
      sG: o => {
        const proto = Object.getPrototypeOf(o);
        return proto === Object.prototype || proto === null;
      },
      sH: (x0,x1) => x0.removeProperty(x1),
      sI: (x0,x1) => { x0.width = x1 },
      sJ: (x0,x1) => x0.createEvent(x1),
      sK: (x0,x1,x2,x3,x4,x5) => x0.createImageBitmap(x1,x2,x3,x4,x5),
      sL: x0 => ({type: x0}),
      sM: (x0,x1) => { x0.onmessage = x1 },
      sN: (x0,x1) => x0.replaceChildren(x1),
      sO: x0 => x0.body,
      t: (o, p) => o[p],
      tB: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Int32Array) return 1;
        return 2;
      },
      tC: (x0,x1) => { x0.id = x1 },
      tD: (x0,x1) => x0.observe(x1),
      tE: x0 => x0.deltaY,
      tF: () => {
        // On browsers return `globalThis.location.href`
        if (globalThis.location != null) {
          return globalThis.location.href;
        }
        return null;
      },
      tG: o => Object.keys(o),
      tH: (x0,x1,x2) => x0.insertBefore(x1,x2),
      tI: (x0,x1) => x0.transferFromImageBitmap(x1),
      tJ: (x0,x1,x2,x3) => x0.initEvent(x1,x2,x3),
      tK: (x0,x1,x2) => x0.createImageBitmap(x1,x2),
      tL: (x0,x1) => new Blob(x0,x1),
      tM: x0 => x0.hostElement,
      tN: (x0,x1,x2) => x0.setAttribute(x1,x2),
      tO: x0 => x0.assetBase,
      u: () => globalThis,
      uB: o => o instanceof Uint16Array,
      uC: (x0,x1) => { x0.nonce = x1 },
      uD: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1) { return wasmFunction(f,arguments.length,x0,x1) }),
      uE: x0 => x0.deltaX,
      uF: () => new AbortController(),
      uG: x0 => x0.state,
      uH: x0 => x0.id,
      uI: x0 => x0.height,
      uJ: x0 => x0.readText(),
      uK: (x0,x1) => x0.createImageBitmap(x1),
      uL: o => o.byteLength,
      uM: x0 => x0.location,
      uN: (x0,x1) => { x0.accept = x1 },
      uO: x0 => x0.loader,
      v: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      vB: Function.prototype.call.bind(DataView.prototype.getUint16),
      vC: x0 => x0.nonce,
      vD: x0 => new ResizeObserver(x0),
      vE: x0 => x0.wheelDeltaY,
      vF: (x0,x1,x2,x3,x4,x5) => ({method: x0,headers: x1,body: x2,credentials: x3,redirect: x4,signal: x5}),
      vG: (x0,x1,x2,x3) => x0.pushState(x1,x2,x3),
      vH: (x0,x1) => x0.querySelectorAll(x1),
      vI: x0 => x0.width,
      vJ: x0 => x0.clipboard,
      vK: x0 => new Blob(x0),
      vL: x0 => x0.unmount(),
      vM: (x0,x1) => x0.getModifierState(x1),
      vN: (x0,x1) => { x0.multiple = x1 },
      vO: () => globalThis._flutter,
      w: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      wB: o => o instanceof Int16Array,
      wC: () => globalThis.window.flutterConfiguration,
      wD: (x0,x1) => x0.getPropertyValue(x1),
      wE: x0 => x0.wheelDeltaX,
      wF: (x0,x1) => globalThis.fetch(x0,x1),
      wG: (x0,x1) => x0.go(x1),
      wH: x0 => x0.offsetHeight,
      wI: x0 => x0.rasterEndMilliseconds,
      wJ: (x0,x1) => x0.writeText(x1),
      wK: x0 => x0.close(),
      wL: () => globalThis.tchinPay,
      wM: x0 => x0.metaKey,
      wN: (x0,x1) => { x0.type = x1 },
      x: (x0,x1) => ({addView: x0,removeView: x1}),
      xB: Function.prototype.call.bind(DataView.prototype.getInt16),
      xC: (x0,x1) => x0.attachShadow(x1),
      xD: x0 => globalThis.parseFloat(x0),
      xE: x0 => x0.bottom,
      xF: (x0,x1) => x0.get(x1),
      xG: x0 => x0.state,
      xH: x0 => x0.offsetWidth,
      xI: x0 => x0.rasterStartMilliseconds,
      xJ: x0 => x0.unlock(),
      xK: x0 => x0.naturalHeight,
      xL: (x0,x1,x2,x3) => x0.payCard(x1,x2,x3),
      xM: x0 => x0.altKey,
      xN: x0 => globalThis.URL.revokeObjectURL(x0),
      y: (l, r) => l === r,
      yB: o => o instanceof Uint8ClampedArray,
      yC: (x0,x1) => x0.createElement(x1),
      yD: (x0,x1) => x0.getComputedStyle(x1),
      yE: x0 => x0.right,
      yF: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1,x2) { return wasmFunction(f,arguments.length,x0,x1,x2) }),
      yG: (x0,x1) => x0.sendEnvelope(x1),
      yH: (x0,x1) => x0.removeAttribute(x1),
      yI: x0 => x0.imageBitmaps,
      yJ: (x0,x1) => x0.lock(x1),
      yK: x0 => x0.naturalWidth,
      yL: (x0,x1) => x0.cardMethod(x1),
      yM: x0 => x0.ctrlKey,
      yN: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      z: x0 => x0.random(),
      zB: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Uint8Array) return 1;
        return 2;
      },
      zC: x0 => x0.scale,
      zD: x0 => x0.documentElement,
      zE: x0 => x0.clientY,
      zF: (x0,x1) => x0.forEach(x1),
      zG: () => Date.now(),
      zH: (x0,x1) => { x0.tabIndex = x1 },
      zI: x0 => x0.canvasKitMaximumSurfaces,
      zJ: x0 => x0.orientation,
      zK: (x0,x1) => { x0.src = x1 },
      zL: (x0,x1,x2) => ({number: x0,expiry: x1,cvc: x2}),
      zM: x0 => x0.isComposing,
      zN: (x0,x1,x2,x3) => x0.toBlob(x1,x2,x3),

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
