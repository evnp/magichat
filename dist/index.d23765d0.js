// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8Wj8M":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "b0e4e87fd23765d0";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"dQ0rW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _l = require("L");
var _lDefault = parcelHelpers.interopDefault(_l);
var _core = require("./core");
const questionHeading = _lDefault.default("h1");
const repeatingCheckbox = _lDefault.default('input[type="checkbox"]');
const secondsInput = _lDefault.default('input[type="number"]');
const nextButton = _lDefault.default("button.next");
const copyUrlButton = _lDefault.default("button.copy");
const infoSection = _lDefault.default(".info");
const copyCliButton = _lDefault.default("button.cli");
let question;
let seconds = 0;
let repeating = false;
let seed = window.location.pathname.slice(1); // slice off leading slash
const originalTitleText = document.title.trim();
const originalCopyUrlText = copyUrlButton.idx(0).textContent.trim();
const originalCopyCliText = copyCliButton.idx(0).textContent.trim();
function askQuestion() {
    document.title = `${originalTitleText} · ${seed}`;
    questionHeading.idx(0).textContent = question;
    copyUrlButton.idx(0).textContent = originalCopyUrlText;
    copyCliButton.idx(0).textContent = `${originalCopyCliText} ${seed}`;
    window.history.pushState(null, "", `/${seed}`);
}
// Question-back functionality is accomplished via native browser history API:
// (clicking the browser back button)
window.onpopstate = function() {
    const prevSeed = seed;
    seed = window.location.pathname.slice(1); // slice off leading slash
    if (seed.length && _core.magicHatIsValidSeed(seed)) {
        [seed, question] = _core.magicHatGo(seed, prevSeed, repeating ? seconds : null);
        window.history.replaceState(null, "", `/${seed}`);
        questionHeading.idx(0).textContent = question;
    }
};
if (seed.length && !_core.magicHatIsValidSeed(seed)) {
    seed = "";
    window.history.replaceState(null, "", "/");
}
// Select initial question and generate seed if necessary:
[seed, question, seconds] = _core.magicHatBegin(seed, ()=>{
    [seed, question] = _core.magicHatNext(seed, seconds);
    askQuestion();
});
// Ask initial question:
askQuestion();
if (seconds > 0) {
    repeating = true;
    secondsInput.idx(0).value = seconds;
    repeatingCheckbox.idx(0).checked = true;
}
nextButton.on("click", ()=>{
    [seed, question] = _core.magicHatNext(seed, repeating ? seconds : null);
    askQuestion();
});
function onRepeatSettingChange() {
    const checked = repeatingCheckbox.idx(0).checked;
    if (checked) {
        seconds = parseInt(secondsInput.idx(0).value, 10);
        [seed, question, seconds] = _core.magicHatStartRepeat(seed, seconds, ()=>{
            [seed, question] = _core.magicHatNext(seed, seconds);
            askQuestion();
        });
        askQuestion();
        repeating = true;
    } else if (!checked) {
        [seed, question] = _core.magicHatStopRepeat(seed);
        askQuestion();
        repeating = false;
    }
}
repeatingCheckbox.on("change", onRepeatSettingChange);
secondsInput.on("change", ()=>{
    repeatingCheckbox.idx(0).checked = true;
    onRepeatSettingChange();
});
copyUrlButton.on("click", ()=>{
    _lDefault.default.copy(window.location.href);
    copyUrlButton.idx(0).textContent = "Copied!";
});
infoSection.on("click", ()=>{
    const button = copyCliButton.idx(0);
    _lDefault.default.copy(button.textContent.trim());
    button.textContent = "Copied!";
});

},{"L":"lHIzz","./core":"6Wpln","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lHIzz":[function(require,module,exports) {
"use strict";
/// L -- Functional, Minimalist DOM/Browser Utils ///
var __assign = this && this.__assign || function() {
    __assign = Object.assign || function(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = this && this.__spreadArrays || function() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
};
exports.__esModule = true;
/// Types /// BEGIN ///
///
var EaseFunc;
(function(EaseFunc1) {
    EaseFunc1["linear"] = "linear";
    EaseFunc1["quadradic"] = "quadradic";
    EaseFunc1["cubic"] = "cubic";
    EaseFunc1["quartic"] = "quartic";
    EaseFunc1["quintic"] = "quintic";
})(EaseFunc || (EaseFunc = {
}));
var EaseStyle;
(function(EaseStyle1) {
    EaseStyle1["default"] = "default";
    EaseStyle1["in"] = "in";
    EaseStyle1["out"] = "out";
    EaseStyle1["both"] = "both";
})(EaseStyle || (EaseStyle = {
}));
///
/// Types /// END ///
/// Utils /// BEGIN ///
///
var easeStyles = new Set(Object.values(EaseStyle));
var easeFuncs = new Set(Object.values(EaseFunc));
function _parseAnimationArgs() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
    return {
        easeStyle: args.filter(function(arg) {
            return easeStyles.has(arg);
        })[0] || EaseStyle["default"],
        easeFunc: args.filter(function(arg) {
            return easeFuncs.has(arg);
        })[0] || null,
        durationMs: args.filter(function(arg) {
            return Number.isInteger(arg);
        })[0] || 0
    };
}
function _bezier(animation) {
    var beziers = {
        linear: "cubic-bezier(0.250, 0.250, 0.750, 0.750)",
        "in": "cubic-bezier(0.420, 0.000, 1.000, 1.000)",
        out: "cubic-bezier(0.000, 0.000, 0.580, 1.000)",
        both: "cubic-bezier(0.420, 0.000, 0.580, 1.000)",
        "default": "cubic-bezier(0.250, 0.100, 0.250, 1.000)",
        "in-quad": "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
        "in-cubic": "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
        "in-quartic": "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
        "in-quintic": "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
        "out-quad": "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
        "out-cubic": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
        "out-quartic": "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
        "out-quintic": "cubic-bezier(0.230, 1.000, 0.320, 1.000)",
        "both-quad": "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
        "both-cubic": "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
        "both-quartic": "cubic-bezier(0.770, 0.000, 0.175, 1.000)",
        "both-quintic": "cubic-bezier(0.860, 0.000, 0.070, 1.000)",
        // if ease func provided, default == both for easing:
        "default-quad": "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
        "default-cubic": "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
        "default-quartic": "cubic-bezier(0.770, 0.000, 0.175, 1.000)",
        "default-quintic": "cubic-bezier(0.860, 0.000, 0.070, 1.000)"
    };
    if (!animation.easeStyle && !animation.easeFunc) return beziers["default"]; // browser default
    else if (animation.easeStyle && !animation.easeFunc) return beziers[animation.easeStyle];
    else if (!animation.easeStyle && animation.easeFunc) return beziers["both-" + animation.easeFunc];
    else if (animation.easeFunc === EaseFunc.linear) return beziers.linear;
    return beziers[animation.easeStyle + "-" + animation.easeFunc];
}
///
/// Utils /// END ///
/// L -- DOM query & manipulation utils /// BEGIN ///
///
function L(tgt) {
    /// query DOM for an array of elements ///
    var l = {
        elements: [],
        all: function(requery) {
            if (requery === void 0) requery = false;
            if (requery || !l.elements.length) {
                var res = tgt;
                if (typeof tgt === "string") res = Array.from(document.body.querySelectorAll(tgt));
                else if (typeof tgt.all === "function") {
                    var lres = tgt.all(); // unwrap another L object
                    if (Array.isArray(lres)) res = lres;
                }
                l.elements = !Array.isArray(res) ? [
                    res
                ] : res;
            }
            return l.elements;
        },
        idx: function(index) {
            return l.all()[0] || null;
        }
    };
    [
        "get",
        "set",
        "del",
        "cyc",
        "rnd"
    ].forEach(function(func) {
        l[func] = function() {
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
            return L[func].apply(L, __spreadArrays([
                tgt
            ], args));
        };
        l[func].cls = function() {
            var _a;
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
            return (_a = L[func]).cls.apply(_a, __spreadArrays([
                tgt
            ], args));
        };
        l[func].sty = function() {
            var _a;
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
            return (_a = L[func]).sty.apply(_a, __spreadArrays([
                tgt
            ], args));
        };
    });
    return __assign(__assign({
    }, l), {
        on: function() {
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
            return L.on.apply(L, __spreadArrays([
                tgt
            ], args));
        },
        off: function() {
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
            return L.off.apply(L, __spreadArrays([
                tgt
            ], args));
        },
        one: function() {
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
            return L.one.apply(L, __spreadArrays([
                tgt
            ], args));
        },
        add: function() {
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
            return L.add.apply(L, __spreadArrays([
                tgt
            ], args));
        },
        rem: function() {
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
            return L.rem.apply(L, __spreadArrays([
                tgt
            ], args));
        },
        ani: function() {
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
            return L.ani.apply(L, __spreadArrays([
                tgt
            ], args));
        }
    });
}
///
L.ease = __assign(__assign({
}, EaseStyle), EaseFunc);
///
L.ani = function(tgt) {
    var args = [];
    for(var _i = 1; _i < arguments.length; _i++)args[_i - 1] = arguments[_i];
    var l = L(tgt);
    var animation = _parseAnimationArgs.apply(void 0, args);
    if (animation.durationMs > 0) {
        l.animation = animation;
        var origTransition_1 = L.get.sty(l, "transition");
        L.set.sty(l, "transition", "all " + animation.durationMs + "ms " + _bezier(animation));
        setTimeout(function() {
            L.set.sty(l, "transition", origTransition_1);
            l.animation = null;
        }, animation.durationMs);
    }
    return l;
};
///
L.add = function(tgt, tagName) {
    var _a;
    var args = [];
    for(var _i = 2; _i < arguments.length; _i++)args[_i - 2] = arguments[_i];
    var tag = document.createElement(tagName);
    var l = (_a = L(tag)).ani.apply(_a, args);
    if (l.animation) {
        L.set.sty(l, "opacity", 0);
        requestAnimationFrame(function() {
            return L.set.sty(l, "opacity", 1);
        });
        setTimeout(function() {
            return L.del.sty(l, "opacity");
        }, l.animation.durationMs);
    }
    if (tgt) L(tgt).idx(0).appendChild(tag);
    return l;
};
///
L.rem = function(tgt) {
    var _a;
    var args = [];
    for(var _i = 1; _i < arguments.length; _i++)args[_i - 1] = arguments[_i];
    // reverse so that later args override earlier args:
    var boolArgs = __spreadArrays(args).reverse().filter(function(arg) {
        return typeof arg === "boolean";
    });
    var deleteElement = !boolArgs.length ? false : boolArgs[0];
    var showElement = !boolArgs.length ? false : !boolArgs[0];
    var animation = _parseAnimationArgs.apply(void 0, args);
    var l = (_a = L(tgt)).ani.apply(_a, args);
    if (!l.animation) {
        if (deleteElement) l.all().forEach(function(el) {
            return el.parentNode.removeChild(el);
        });
        else L.set.sty(l, "opacity", showElement ? 1 : 0);
    } else {
        L.set.sty(l, "opacity", L.get.sty(l, "opacity") || (showElement ? 0 : 1));
        requestAnimationFrame(function() {
            return L.set.sty(l, "opacity", showElement ? 1 : 0);
        });
        setTimeout(function() {
            if (deleteElement) l.all().forEach(function(el) {
                return el.parentNode.removeChild(el);
            });
        }, l.animation.durationMs);
    }
    return l;
};
///
L.on = function(tgt, events, fn, off) {
    /// register an event handler on DOM elements (identified by selector string or reference) ///
    var l = L(tgt);
    var eventArr = events.split(",").map(function(ev) {
        return ev.trim();
    });
    l.all().forEach(function(el) {
        return eventArr.forEach(function(ev) {
            return (off ? el.removeEventListener : el.addEventListener).call(el, ev, fn);
        });
    });
    return l;
};
///
L.off = function(tgt, events, fn, on) {
    /// remove an event handler from DOM elements (identified by selector string or reference) ///
    return L.on(tgt, events, fn, !on);
};
///
L.one = function(tgt, events, fn) {
    /// register an event handler on DOM elements to fire ONCE and only once ///
    function handler() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        L.off(tgt, events, handler);
        fn.call.apply(fn, __spreadArrays([
            this
        ], args));
    }
    return L.on(tgt, events, handler);
};
///
function _lget(tgt, key, getter, name) {
    var vals = L(tgt).all().map(function(el) {
        return getter(el, key);
    });
    if (new Set(vals).size > 1) throw new Error(name + " called on multiple elements with differing values for key \"" + key + "\"");
    return vals[0] || null;
}
L.get = function(tgt, key) {
    var getAttribute = function(el, k) {
        return el.getAttribute(k);
    };
    return _lget(tgt, key, getAttribute, "L.get");
};
L.get.cls = function(tgt, key) {
    var hasClass = function(el, k) {
        return (el.className || "").split(" ").includes(k) ? k : null;
    };
    return _lget(tgt, key, hasClass, "L.get.cls");
};
L.get.sty = function(tgt, key) {
    var getStyle = function(el, k) {
        return el.style[k];
    };
    return _lget(tgt, key, getStyle, "L.get.sty");
};
///
function _lset(tgt, key, val, setter) {
    var args = [];
    for(var _i = 4; _i < arguments.length; _i++)args[_i - 4] = arguments[_i];
    // treat as no-op if val is null or undefined:
    if (!(val === undefined || val === null)) {
        val = val.toString();
        L.ani.apply(L, __spreadArrays([
            tgt
        ], args)).all().forEach(function(el) {
            return setter(el, key, val);
        });
    }
    return val;
}
L.set = function(tgt, key, val) {
    var args = [];
    for(var _i = 3; _i < arguments.length; _i++)args[_i - 3] = arguments[_i];
    var setAttribute = function(el, k, v) {
        return el.setAttribute(k, v);
    };
    return _lset.apply(void 0, __spreadArrays([
        tgt,
        key,
        val,
        setAttribute
    ], args));
};
L.set.cls = function(tgt, key) {
    var setClass = function(el, k) {
        return el.classlist.add(k);
    };
    return _lset(tgt, key, true, setClass);
};
L.set.sty = function(tgt, key, val) {
    var args = [];
    for(var _i = 3; _i < arguments.length; _i++)args[_i - 3] = arguments[_i];
    var setStyle = function(el, k, v) {
        return el.style[k] = v;
    };
    return _lset.apply(void 0, __spreadArrays([
        tgt,
        key,
        val,
        setStyle
    ], args));
};
///
function _ldel(tgt, key, checker, deleter) {
    var args = [];
    for(var _i = 4; _i < arguments.length; _i++)args[_i - 4] = arguments[_i];
    return !!L.ani.apply(L, __spreadArrays([
        tgt
    ], args)).all().filter(function(el) {
        return checker(el, key);
    }).map(function(el) {
        return deleter(el, key);
    }).length;
}
L.del = function(tgt, key) {
    var args = [];
    for(var _i = 2; _i < arguments.length; _i++)args[_i - 2] = arguments[_i];
    var hasAttribute = function(el, k) {
        return el.hasAttribute(k);
    };
    var delAttribute = function(el, k) {
        return el.removeAttribute(key);
    };
    return _ldel.apply(void 0, __spreadArrays([
        tgt,
        key,
        hasAttribute,
        delAttribute
    ], args));
};
L.del.cls = function(tgt, key) {
    var args = [];
    for(var _i = 2; _i < arguments.length; _i++)args[_i - 2] = arguments[_i];
    var hasClass = function(el, k) {
        return el.classList.contains(k);
    };
    var delClass = function(el, k) {
        return el.removeAttribute(k);
    };
    return _ldel.apply(void 0, __spreadArrays([
        tgt,
        key,
        hasClass,
        delClass
    ], args));
};
L.del.sty = function(tgt, key) {
    var args = [];
    for(var _i = 2; _i < arguments.length; _i++)args[_i - 2] = arguments[_i];
    var hasStyle = function(el) {
        return !!el.style[key].length;
    };
    var delStyle = function(el) {
        return el.style[key] = "";
    };
    return _ldel.apply(void 0, __spreadArrays([
        tgt,
        key,
        hasStyle,
        delStyle
    ], args));
};
///
function _lcyc(tgt, key, vals, getter, setter) {
    var args = [];
    for(var _i = 5; _i < arguments.length; _i++)args[_i - 5] = arguments[_i];
    var l = L(tgt);
    vals = vals.map(function(v) {
        return v.toString();
    });
    var val = vals[(vals.indexOf(getter(l, key)) + 1) % vals.length];
    setter(l, key, val);
    return val;
}
L.cyc = function(tgt, key, vals) {
    var args = [];
    for(var _i = 3; _i < arguments.length; _i++)args[_i - 3] = arguments[_i];
    return _lcyc.apply(void 0, __spreadArrays([
        tgt,
        key,
        vals,
        L.get,
        L.set
    ], args));
};
L.cyc.cls = function(tgt, key, vals) {
    var args = [];
    for(var _i = 3; _i < arguments.length; _i++)args[_i - 3] = arguments[_i];
    return _lcyc.apply(void 0, __spreadArrays([
        tgt,
        key,
        vals,
        L.get.cls,
        L.set.cls
    ], args));
};
L.cyc.sty = function(tgt, key, vals) {
    var args = [];
    for(var _i = 3; _i < arguments.length; _i++)args[_i - 3] = arguments[_i];
    return _lcyc.apply(void 0, __spreadArrays([
        tgt,
        key,
        vals,
        L.get.sty,
        L.set.sty
    ], args));
};
///
function _lrnd(tgt, key, vals, setter) {
    var args = [];
    for(var _i = 4; _i < arguments.length; _i++)args[_i - 4] = arguments[_i];
    var l = L(tgt);
    vals = vals.map(function(v) {
        return v.toString();
    });
    var val = vals[Math.floor(Math.random() * vals.length)];
    setter(l, key, val);
    return val;
}
L.rnd = function(tgt, key, vals) {
    var args = [];
    for(var _i = 3; _i < arguments.length; _i++)args[_i - 3] = arguments[_i];
    return _lrnd.apply(void 0, __spreadArrays([
        tgt,
        key,
        vals,
        L.set
    ], args));
};
L.rnd.cls = function(tgt, key, vals) {
    var args = [];
    for(var _i = 3; _i < arguments.length; _i++)args[_i - 3] = arguments[_i];
    return _lrnd.apply(void 0, __spreadArrays([
        tgt,
        key,
        vals,
        L.set.cls
    ], args));
};
L.rnd.sty = function(tgt, key, vals) {
    var args = [];
    for(var _i = 3; _i < arguments.length; _i++)args[_i - 3] = arguments[_i];
    return _lrnd.apply(void 0, __spreadArrays([
        tgt,
        key,
        vals,
        L.set.sty
    ], args));
};
///
/// L -- DOM query & manipulation utils /// END ///
/// L.state -- Url-Based State Management /// BEGIN ///
///
L.state = {
    // Internal State:
    params: new URLSearchParams(),
    config: null,
    aliases: null,
    // Configure L.state with:
    // -- set of valid of keys
    // -- optional default values
    // -- optional value lists for data validation
    // -- optional key aliases for creating short urls
    configure: function(config) {
        L.state.config = L.state.config || new Map(); // config -- store value defaults, options
        L.state.aliases = L.state.aliases || new Map(); // aliases -- store key aliases
        Object.entries(config).forEach(function(_a) {
            var _b;
            var key = _a[0], cfg = _a[1];
            L.state.config.set(key, __assign(__assign({
            }, L.state.config.get(key) || {
            }), config[key]));
            (_b = cfg.aliases) === null || _b === void 0 || _b.forEach(function(alias) {
                return L.state.aliases.set(alias, key);
            });
        });
        return L.state;
    },
    // Configure L.state with:
    // -- an optional custom handler function to run whenever state is loaded from URL
    // then register event listeners to load URL state on pageload and browser back.
    load: function(onLoad) {
        L(window).on("load,popstate", function() {
            // Use L.state.set instead of constructing params directly from
            // window.location.search so that aliasing and data validation take place:
            L.state.params = new URLSearchParams();
            new URLSearchParams(window.location.search).forEach(function(val, key) {
                return L.state.set(key, val);
            });
            // For each key, if default provided, set val to default IFF no value was taken from url:
            var changed = false;
            L.state.config.forEach(function(cfg, key) {
                if (cfg["default"] && !L.state.get(key)) {
                    L.state.set(key, cfg["default"]);
                    changed = true;
                }
            });
            L.state.write({
                push: false
            }); // update url in case aliased keys or defaults were set
            onLoad && onLoad();
        });
        return L.state;
    },
    // From an aliased or normal/longform key, return the corresponding longform key:
    // reverse=true : From a longform key, get shortest alias
    aliased: function(key, _a) {
        var _b, _c, _d;
        var _e = _a === void 0 ? {
        } : _a, _f = _e.reverse, reverse = _f === void 0 ? false : _f;
        if (reverse) return ((_d = (_c = (_b = L.state.config) === null || _b === void 0 ? void 0 : _b.get(key)) === null || _c === void 0 ? void 0 : _c.aliases) === null || _d === void 0 ? void 0 : _d.sort(function(a, b) {
            return a.length - b.length;
        })[0]) || key;
        else return L.state.aliases.get(key) || key;
    },
    // From and index or normal/longform val, return the corresponding longform val:
    // reverse=true : From a longform val, get index
    indexed: function(key, val, _a) {
        var _b, _c;
        var _d = _a === void 0 ? {
        } : _a, _e = _d.reverse, reverse = _e === void 0 ? false : _e;
        var options = (_c = (_b = L.state.config) === null || _b === void 0 ? void 0 : _b.get(L.state.aliased(key))) === null || _c === void 0 ? void 0 : _c.options;
        if (reverse) return options && options.indexOf(val).toString() || val;
        else return options && options[parseInt(val)] || val;
    },
    // Throw an error if key/value does not match provided L.state configuration:
    validate: function(key, val) {
        var _a;
        if (L.state.config) {
            // If key list was configured, validate provided key:
            if (!L.state.config.has(key)) throw new Error("L.state.get given invalid key \"" + key + "\"");
            if (typeof val === "string") {
                // If options list was configured for key, validate provided key/value:
                var options = (_a = L.state.config.get(key)) === null || _a === void 0 ? void 0 : _a.options;
                if (options && !options.includes(val)) throw new Error("L.state.set given invalid value \"" + val + "\" for key \"" + key + "\"");
            }
        }
        return L.state;
    },
    // Get a value (or null) from URL state via key:
    get: function(key) {
        key = L.state.aliased(key);
        L.state.validate(key);
        return L.state.params.get(key) || null;
    },
    // Set a value in URL state via key/value:
    set: function(key, val) {
        key = L.state.aliased(key);
        val = L.state.indexed(key, val);
        L.state.validate(key, val);
        if (typeof val === "string") {
            if (L.state.params.get(key) !== val) {
                L.state.params.set(key, val);
                L.state.params.sort();
            }
        }
        return val;
    },
    // Delete a value from URL state via key:
    del: function(key) {
        key = L.state.aliased(key);
        L.state.validate(key);
        if (L.state.params.has(key)) {
            L.state.params["delete"](key);
            return true;
        }
        return false;
    },
    // Send updated URL state to window.history, updating address bar:
    write: function(_a) {
        var _b = _a === void 0 ? {
        } : _a, _c = _b.push, push = _c === void 0 ? false : _c;
        var url = new URL(window.location.href);
        url.search = L.state.params.toString();
        if (push) window.history.pushState({
            path: url.href
        }, "", url.href);
        else window.history.replaceState({
            path: url.href
        }, "", url.href);
        return L.state;
    },
    url: function(_a) {
        var _b = _a === void 0 ? {
        } : _a, _c = _b.short, short = _c === void 0 ? false : _c;
        var url = new URL(window.location.href);
        var params;
        if (short) {
            params = new URLSearchParams();
            L.state.params.forEach(function(val, key) {
                var shortKey = L.state.aliased(key, {
                    reverse: true
                });
                var shortVal = L.state.indexed(key, val, {
                    reverse: true
                });
                params.set(shortKey, shortVal);
            });
            params.sort();
        } else params = L.state.params;
        url.search = params.toString();
        return url.href;
    }
};
///
/// L.state -- Url-Based State Management /// END ///
/// L.copy -- copy-to-clipboard with graceful degradation /// BEGIN ///
//
L.copy = function(text) {
    var fallbackMessage = "Copy url and send to your spotter -> Press Ctrl+C then Enter";
    if (navigator.clipboard) navigator.clipboard.writeText(text)["catch"](function() {
        return window.prompt(fallbackMessage, text);
    });
    else {
        var textArea = document.createElement("textarea");
        textArea.value = text;
        // Avoid scrolling to bottom
        textArea.style.top = 0..toString();
        textArea.style.left = 0..toString();
        textArea.style.position = "fixed";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand("copy");
        } catch (err) {
            window.prompt(fallbackMessage, text);
        }
        document.body.removeChild(textArea);
    }
    return text;
};
//
/// L.copy -- copy-to-clipboard with graceful degradation /// END ///
exports["default"] = L;

},{}],"6Wpln":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "magicHatIsValidSeed", ()=>magicHatIsValidSeed
);
parcelHelpers.export(exports, "magicHatBegin", ()=>magicHatBegin
);
parcelHelpers.export(exports, "magicHatNext", ()=>magicHatNext
);
parcelHelpers.export(exports, "magicHatBack", ()=>magicHatBack
);
parcelHelpers.export(exports, "magicHatGo", ()=>magicHatGo
);
parcelHelpers.export(exports, "magicHatStartRepeat", ()=>magicHatStartRepeat
);
parcelHelpers.export(exports, "magicHatStopRepeat", ()=>magicHatStopRepeat
);
var _seedrandom = require("seedrandom");
var _seedrandomDefault = parcelHelpers.interopDefault(_seedrandom);
var _questions = require("./questions");
var _questionsDefault = parcelHelpers.interopDefault(_questions);
var _words = require("./words");
var _wordsDefault = parcelHelpers.interopDefault(_words);
const seedHistory = new Map();
function newSeed(seed, seconds) {
    const prevSeed = seed;
    const baseSeed = seed && removeSeedSeconds(seed);
    const reversedSeed = baseSeed && Array.from(baseSeed).reverse().join("");
    let nextSeed = `${randWord(baseSeed)}-${randWord(reversedSeed)}`;
    if (seconds) nextSeed = updateSeedSeconds(nextSeed, seconds);
    // Maintain seed history for back/forth question navigation:
    // note: omit seconds from seed history so that mechanisms may operate independently
    seedHistory.set(removeSeedSeconds(nextSeed), prevSeed ? removeSeedSeconds(prevSeed) : null);
    return nextSeed;
}
function randWord(seed) {
    const rng = seed ? _seedrandomDefault.default(seed) : Math.random;
    return _wordsDefault.default[Math.floor(rng() * _wordsDefault.default.length)];
}
function randQuestion(seed) {
    const rng = _seedrandomDefault.default(removeSeedSeconds(seed));
    return _questionsDefault.default[Math.floor(rng() * _questionsDefault.default.length)];
}
function removeSeedSeconds(seed) {
    seed = seed.split("-").join("").slice(0, 8);
    return seed.slice(0, 4) + "-" + seed.slice(4, 8);
}
function updateSeedSeconds(seed, seconds) {
    const secQuotient = Math.floor(seconds / _wordsDefault.default.length);
    const secRemainder = seconds % 100;
    seed = removeSeedSeconds(seed) + `-${_wordsDefault.default[secRemainder]}`;
    if (secQuotient) seed += `-${_wordsDefault.default[secQuotient]}`;
    return seed;
}
function parseSeedSeconds(seed) {
    seed = seed.split("-").join("").toLowerCase();
    let [secRemainder, secQuotient] = [
        _wordsDefault.default.indexOf(seed.slice(8, 12)),
        _wordsDefault.default.indexOf(seed.slice(12, 16)), 
    ];
    // omitting either part of seconds calc from seed is valid:
    if (secRemainder < 0) secRemainder = 0;
    else if (secQuotient < 0) secQuotient = 0;
    return secQuotient * _wordsDefault.default.length + secRemainder;
}
function magicHatIsValidSeed(seed) {
    seed = seed.split("-").join("").toLowerCase();
    return seed.length >= 8 && seed.length <= 16 && [
        seed.slice(0, 4),
        seed.slice(4, 8),
        seed.slice(8, 12),
        seed.slice(12, 16), 
    ].every((word)=>word === "" || _wordsDefault.default.includes(word)
    );
}
function magicHatBegin(seed, handler) {
    seed = seed?.length ? seed : newSeed(seed);
    const seconds = parseSeedSeconds(seed);
    if (seconds > 0) return magicHatStartRepeat(seed, seconds, handler);
    else return [
        seed,
        randQuestion(seed),
        0
    ]; // zero seconds -> no repeat
}
function magicHatNext(seed, seconds) {
    seed = newSeed(seed, seconds);
    return [
        seed,
        randQuestion(seed)
    ];
}
function magicHatBack(seed, seconds) {
    seed = (seed && seedHistory.get(removeSeedSeconds(seed))) ?? seed;
    if (seconds) seed = updateSeedSeconds(seed, seconds);
    return [
        seed,
        randQuestion(seed)
    ];
}
function magicHatGo(seed, prevSeed, seconds) {
    seedHistory.set(removeSeedSeconds(seed), removeSeedSeconds(prevSeed));
    if (seconds) seed = updateSeedSeconds(seed, seconds);
    else seed = removeSeedSeconds(seed);
    return [
        seed,
        randQuestion(seed)
    ];
}
let repeatIntervalID = null;
function magicHatStartRepeat(seed, seconds, handler) {
    seed = updateSeedSeconds(seed, seconds);
    magicHatStopRepeat(seed);
    repeatIntervalID = setInterval(()=>{
        seed = newSeed(seed, seconds);
        handler(seed, randQuestion(seed));
    }, seconds * 1000);
    return [
        seed,
        randQuestion(seed),
        seconds
    ];
}
function magicHatStopRepeat(seed) {
    seed = seed ? removeSeedSeconds(seed) : null;
    if (repeatIntervalID) {
        clearInterval(repeatIntervalID);
        repeatIntervalID = null;
    }
    return [
        seed ?? newSeed(),
        seed ? randQuestion(seed) : ""
    ];
}

},{"seedrandom":"kcfU7","./questions":"d9L8Q","./words":"ihZw1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kcfU7":[function(require,module,exports) {
// A library of seedable RNGs implemented in Javascript.
//
// Usage:
//
// var seedrandom = require('seedrandom');
// var random = seedrandom(1); // or any seed.
// var x = random();       // 0 <= x < 1.  Every bit is random.
// var x = random.quick(); // 0 <= x < 1.  32 bits of randomness.
// alea, a 53-bit multiply-with-carry generator by Johannes Baagøe.
// Period: ~2^116
// Reported to pass all BigCrush tests.
var alea = require('./lib/alea');
// xor128, a pure xor-shift generator by George Marsaglia.
// Period: 2^128-1.
// Reported to fail: MatrixRank and LinearComp.
var xor128 = require('./lib/xor128');
// xorwow, George Marsaglia's 160-bit xor-shift combined plus weyl.
// Period: 2^192-2^32
// Reported to fail: CollisionOver, SimpPoker, and LinearComp.
var xorwow = require('./lib/xorwow');
// xorshift7, by François Panneton and Pierre L'ecuyer, takes
// a different approach: it adds robustness by allowing more shifts
// than Marsaglia's original three.  It is a 7-shift generator
// with 256 bits, that passes BigCrush with no systmatic failures.
// Period 2^256-1.
// No systematic BigCrush failures reported.
var xorshift7 = require('./lib/xorshift7');
// xor4096, by Richard Brent, is a 4096-bit xor-shift with a
// very long period that also adds a Weyl generator. It also passes
// BigCrush with no systematic failures.  Its long period may
// be useful if you have many generators and need to avoid
// collisions.
// Period: 2^4128-2^32.
// No systematic BigCrush failures reported.
var xor4096 = require('./lib/xor4096');
// Tyche-i, by Samuel Neves and Filipe Araujo, is a bit-shifting random
// number generator derived from ChaCha, a modern stream cipher.
// https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf
// Period: ~2^127
// No systematic BigCrush failures reported.
var tychei = require('./lib/tychei');
// The original ARC4-based prng included in this library.
// Period: ~2^1600
var sr = require('./seedrandom');
sr.alea = alea;
sr.xor128 = xor128;
sr.xorwow = xorwow;
sr.xorshift7 = xorshift7;
sr.xor4096 = xor4096;
sr.tychei = tychei;
module.exports = sr;

},{"./lib/alea":"c47hP","./lib/xor128":"hy9Go","./lib/xorwow":"8ktBo","./lib/xorshift7":"i5aBa","./lib/xor4096":"7tXtZ","./lib/tychei":"eVmNr","./seedrandom":"lbeKh"}],"c47hP":[function(require,module,exports) {
// A port of an algorithm by Johannes Baagøe <baagoe@baagoe.com>, 2010
// http://baagoe.com/en/RandomMusings/javascript/
// https://github.com/nquinlan/better-random-numbers-for-javascript-mirror
// Original work is under MIT license -
// Copyright (C) 2010 by Johannes Baagøe <baagoe@baagoe.org>
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
(function(global, module, define) {
    function Alea(seed) {
        var me = this, mash = Mash();
        me.next = function() {
            var t = 2091639 * me.s0 + me.c * 0.00000000023283064365386963; // 2^-32
            me.s0 = me.s1;
            me.s1 = me.s2;
            return me.s2 = t - (me.c = t | 0);
        };
        // Apply the seeding algorithm from Baagoe.
        me.c = 1;
        me.s0 = mash(' ');
        me.s1 = mash(' ');
        me.s2 = mash(' ');
        me.s0 -= mash(seed);
        if (me.s0 < 0) me.s0 += 1;
        me.s1 -= mash(seed);
        if (me.s1 < 0) me.s1 += 1;
        me.s2 -= mash(seed);
        if (me.s2 < 0) me.s2 += 1;
        mash = null;
    }
    function copy(f, t) {
        t.c = f.c;
        t.s0 = f.s0;
        t.s1 = f.s1;
        t.s2 = f.s2;
        return t;
    }
    function impl(seed, opts) {
        var xg = new Alea(seed), state = opts && opts.state, prng = xg.next;
        prng.int32 = function() {
            return xg.next() * 4294967296 | 0;
        };
        prng.double = function() {
            return prng() + (prng() * 2097152 | 0) * 0.00000000000000011102230246251565; // 2^-53
        };
        prng.quick = prng;
        if (state) {
            if (typeof state == 'object') copy(state, xg);
            prng.state = function() {
                return copy(xg, {
                });
            };
        }
        return prng;
    }
    function Mash() {
        var n = 4022871197;
        var mash = function(data) {
            data = String(data);
            for(var i = 0; i < data.length; i++){
                n += data.charCodeAt(i);
                var h = 0.02519603282416938 * n;
                n = h >>> 0;
                h -= n;
                h *= n;
                n = h >>> 0;
                h -= n;
                n += h * 4294967296; // 2^32
            }
            return (n >>> 0) * 0.00000000023283064365386963; // 2^-32
        };
        return mash;
    }
    if (module && module.exports) module.exports = impl;
    else if (define && define.amd) define(function() {
        return impl;
    });
    else this.alea = impl;
})(this, typeof module == 'object' && module, typeof define == 'function' && define // present with an AMD loader
);

},{}],"hy9Go":[function(require,module,exports) {
// A Javascript implementaion of the "xor128" prng algorithm by
// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper
(function(global, module, define) {
    function XorGen(seed) {
        var me = this, strseed = '';
        me.x = 0;
        me.y = 0;
        me.z = 0;
        me.w = 0;
        // Set up generator function.
        me.next = function() {
            var t = me.x ^ me.x << 11;
            me.x = me.y;
            me.y = me.z;
            me.z = me.w;
            return me.w ^= me.w >>> 19 ^ t ^ t >>> 8;
        };
        if (seed === (seed | 0)) // Integer seed.
        me.x = seed;
        else // String seed.
        strseed += seed;
        // Mix in string seed, then discard an initial batch of 64 values.
        for(var k = 0; k < strseed.length + 64; k++){
            me.x ^= strseed.charCodeAt(k) | 0;
            me.next();
        }
    }
    function copy(f, t) {
        t.x = f.x;
        t.y = f.y;
        t.z = f.z;
        t.w = f.w;
        return t;
    }
    function impl(seed, opts) {
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
            return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
            do var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / 2097152;
            while (result === 0)
            return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
            if (typeof state == 'object') copy(state, xg);
            prng.state = function() {
                return copy(xg, {
                });
            };
        }
        return prng;
    }
    if (module && module.exports) module.exports = impl;
    else if (define && define.amd) define(function() {
        return impl;
    });
    else this.xor128 = impl;
})(this, typeof module == 'object' && module, typeof define == 'function' && define // present with an AMD loader
);

},{}],"8ktBo":[function(require,module,exports) {
// A Javascript implementaion of the "xorwow" prng algorithm by
// George Marsaglia.  See http://www.jstatsoft.org/v08/i14/paper
(function(global, module, define) {
    function XorGen(seed) {
        var me = this, strseed = '';
        // Set up generator function.
        me.next = function() {
            var t = me.x ^ me.x >>> 2;
            me.x = me.y;
            me.y = me.z;
            me.z = me.w;
            me.w = me.v;
            return (me.d = me.d + 362437 | 0) + (me.v = me.v ^ me.v << 4 ^ (t ^ t << 1)) | 0;
        };
        me.x = 0;
        me.y = 0;
        me.z = 0;
        me.w = 0;
        me.v = 0;
        if (seed === (seed | 0)) // Integer seed.
        me.x = seed;
        else // String seed.
        strseed += seed;
        // Mix in string seed, then discard an initial batch of 64 values.
        for(var k = 0; k < strseed.length + 64; k++){
            me.x ^= strseed.charCodeAt(k) | 0;
            if (k == strseed.length) me.d = me.x << 10 ^ me.x >>> 4;
            me.next();
        }
    }
    function copy(f, t) {
        t.x = f.x;
        t.y = f.y;
        t.z = f.z;
        t.w = f.w;
        t.v = f.v;
        t.d = f.d;
        return t;
    }
    function impl(seed, opts) {
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
            return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
            do var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / 2097152;
            while (result === 0)
            return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
            if (typeof state == 'object') copy(state, xg);
            prng.state = function() {
                return copy(xg, {
                });
            };
        }
        return prng;
    }
    if (module && module.exports) module.exports = impl;
    else if (define && define.amd) define(function() {
        return impl;
    });
    else this.xorwow = impl;
})(this, typeof module == 'object' && module, typeof define == 'function' && define // present with an AMD loader
);

},{}],"i5aBa":[function(require,module,exports) {
// A Javascript implementaion of the "xorshift7" algorithm by
// François Panneton and Pierre L'ecuyer:
// "On the Xorgshift Random Number Generators"
// http://saluc.engr.uconn.edu/refs/crypto/rng/panneton05onthexorshift.pdf
(function(global, module, define) {
    function XorGen(seed1) {
        var me1 = this;
        // Set up generator function.
        me1.next = function() {
            // Update xor generator.
            var X = me1.x, i = me1.i, t, v, w;
            t = X[i];
            t ^= t >>> 7;
            v = t ^ t << 24;
            t = X[i + 1 & 7];
            v ^= t ^ t >>> 10;
            t = X[i + 3 & 7];
            v ^= t ^ t >>> 3;
            t = X[i + 4 & 7];
            v ^= t ^ t << 7;
            t = X[i + 7 & 7];
            t = t ^ t << 13;
            v ^= t ^ t << 9;
            X[i] = v;
            me1.i = i + 1 & 7;
            return v;
        };
        function init(me, seed) {
            var j, w, X = [];
            if (seed === (seed | 0)) // Seed state array using a 32-bit integer.
            w = X[0] = seed;
            else {
                // Seed state using a string.
                seed = '' + seed;
                for(j = 0; j < seed.length; ++j)X[j & 7] = X[j & 7] << 15 ^ seed.charCodeAt(j) + X[j + 1 & 7] << 13;
            }
            // Enforce an array length of 8, not all zeroes.
            while(X.length < 8)X.push(0);
            for(j = 0; j < 8 && X[j] === 0; ++j);
            if (j == 8) w = X[7] = -1;
            else w = X[j];
            me.x = X;
            me.i = 0;
            // Discard an initial 256 values.
            for(j = 256; j > 0; --j)me.next();
        }
        init(me1, seed1);
    }
    function copy(f, t) {
        t.x = f.x.slice();
        t.i = f.i;
        return t;
    }
    function impl(seed, opts) {
        if (seed == null) seed = +new Date;
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
            return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
            do var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / 2097152;
            while (result === 0)
            return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
            if (state.x) copy(state, xg);
            prng.state = function() {
                return copy(xg, {
                });
            };
        }
        return prng;
    }
    if (module && module.exports) module.exports = impl;
    else if (define && define.amd) define(function() {
        return impl;
    });
    else this.xorshift7 = impl;
})(this, typeof module == 'object' && module, typeof define == 'function' && define // present with an AMD loader
);

},{}],"7tXtZ":[function(require,module,exports) {
// A Javascript implementaion of Richard Brent's Xorgens xor4096 algorithm.
//
// This fast non-cryptographic random number generator is designed for
// use in Monte-Carlo algorithms. It combines a long-period xorshift
// generator with a Weyl generator, and it passes all common batteries
// of stasticial tests for randomness while consuming only a few nanoseconds
// for each prng generated.  For background on the generator, see Brent's
// paper: "Some long-period random number generators using shifts and xors."
// http://arxiv.org/pdf/1004.3115v1.pdf
//
// Usage:
//
// var xor4096 = require('xor4096');
// random = xor4096(1);                        // Seed with int32 or string.
// assert.equal(random(), 0.1520436450538547); // (0, 1) range, 53 bits.
// assert.equal(random.int32(), 1806534897);   // signed int32, 32 bits.
//
// For nonzero numeric keys, this impelementation provides a sequence
// identical to that by Brent's xorgens 3 implementaion in C.  This
// implementation also provides for initalizing the generator with
// string seeds, or for saving and restoring the state of the generator.
//
// On Chrome, this prng benchmarks about 2.1 times slower than
// Javascript's built-in Math.random().
(function(global, module, define) {
    function XorGen(seed1) {
        var me1 = this;
        // Set up generator function.
        me1.next = function() {
            var w = me1.w, X = me1.X, i = me1.i, t, v;
            // Update Weyl generator.
            me1.w = w = w + 1640531527 | 0;
            // Update xor generator.
            v = X[i + 34 & 127];
            t = X[i = i + 1 & 127];
            v ^= v << 13;
            t ^= t << 17;
            v ^= v >>> 15;
            t ^= t >>> 12;
            // Update Xor generator array state.
            v = X[i] = v ^ t;
            me1.i = i;
            // Result is the combination.
            return v + (w ^ w >>> 16) | 0;
        };
        function init(me, seed) {
            var t, v, i, j, w, X = [], limit = 128;
            if (seed === (seed | 0)) {
                // Numeric seeds initialize v, which is used to generates X.
                v = seed;
                seed = null;
            } else {
                // String seeds are mixed into v and X one character at a time.
                seed = seed + '\0';
                v = 0;
                limit = Math.max(limit, seed.length);
            }
            // Initialize circular array and weyl value.
            for(i = 0, j = -32; j < limit; ++j){
                // Put the unicode characters into the array, and shuffle them.
                if (seed) v ^= seed.charCodeAt((j + 32) % seed.length);
                // After 32 shuffles, take v as the starting w value.
                if (j === 0) w = v;
                v ^= v << 10;
                v ^= v >>> 15;
                v ^= v << 4;
                v ^= v >>> 13;
                if (j >= 0) {
                    w = w + 1640531527 | 0; // Weyl.
                    t = X[j & 127] ^= v + w; // Combine xor and weyl to init array.
                    i = 0 == t ? i + 1 : 0; // Count zeroes.
                }
            }
            // We have detected all zeroes; make the key nonzero.
            if (i >= 128) X[(seed && seed.length || 0) & 127] = -1;
            // Run the generator 512 times to further mix the state before using it.
            // Factoring this as a function slows the main generator, so it is just
            // unrolled here.  The weyl generator is not advanced while warming up.
            i = 127;
            for(j = 512; j > 0; --j){
                v = X[i + 34 & 127];
                t = X[i = i + 1 & 127];
                v ^= v << 13;
                t ^= t << 17;
                v ^= v >>> 15;
                t ^= t >>> 12;
                X[i] = v ^ t;
            }
            // Storing state as object members is faster than using closure variables.
            me.w = w;
            me.X = X;
            me.i = i;
        }
        init(me1, seed1);
    }
    function copy(f, t) {
        t.i = f.i;
        t.w = f.w;
        t.X = f.X.slice();
        return t;
    }
    function impl(seed, opts) {
        if (seed == null) seed = +new Date;
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
            return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
            do var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / 2097152;
            while (result === 0)
            return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
            if (state.X) copy(state, xg);
            prng.state = function() {
                return copy(xg, {
                });
            };
        }
        return prng;
    }
    if (module && module.exports) module.exports = impl;
    else if (define && define.amd) define(function() {
        return impl;
    });
    else this.xor4096 = impl;
})(this, typeof module == 'object' && module, typeof define == 'function' && define // present with an AMD loader
);

},{}],"eVmNr":[function(require,module,exports) {
// A Javascript implementaion of the "Tyche-i" prng algorithm by
// Samuel Neves and Filipe Araujo.
// See https://eden.dei.uc.pt/~sneves/pubs/2011-snfa2.pdf
(function(global, module, define) {
    function XorGen(seed) {
        var me = this, strseed = '';
        // Set up generator function.
        me.next = function() {
            var b = me.b, c = me.c, d = me.d, a = me.a;
            b = b << 25 ^ b >>> 7 ^ c;
            c = c - d | 0;
            d = d << 24 ^ d >>> 8 ^ a;
            a = a - b | 0;
            me.b = b = b << 20 ^ b >>> 12 ^ c;
            me.c = c = c - d | 0;
            me.d = d << 16 ^ c >>> 16 ^ a;
            return me.a = a - b | 0;
        };
        /* The following is non-inverted tyche, which has better internal
   * bit diffusion, but which is about 25% slower than tyche-i in JS.
  me.next = function() {
    var a = me.a, b = me.b, c = me.c, d = me.d;
    a = (me.a + me.b | 0) >>> 0;
    d = me.d ^ a; d = d << 16 ^ d >>> 16;
    c = me.c + d | 0;
    b = me.b ^ c; b = b << 12 ^ d >>> 20;
    me.a = a = a + b | 0;
    d = d ^ a; me.d = d = d << 8 ^ d >>> 24;
    me.c = c = c + d | 0;
    b = b ^ c;
    return me.b = (b << 7 ^ b >>> 25);
  }
  */ me.a = 0;
        me.b = 0;
        me.c = -1640531527;
        me.d = 1367130551;
        if (seed === Math.floor(seed)) {
            // Integer seed.
            me.a = seed / 4294967296 | 0;
            me.b = seed | 0;
        } else // String seed.
        strseed += seed;
        // Mix in string seed, then discard an initial batch of 64 values.
        for(var k = 0; k < strseed.length + 20; k++){
            me.b ^= strseed.charCodeAt(k) | 0;
            me.next();
        }
    }
    function copy(f, t) {
        t.a = f.a;
        t.b = f.b;
        t.c = f.c;
        t.d = f.d;
        return t;
    }
    function impl(seed, opts) {
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
            return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
            do var top = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top + bot) / 2097152;
            while (result === 0)
            return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
            if (typeof state == 'object') copy(state, xg);
            prng.state = function() {
                return copy(xg, {
                });
            };
        }
        return prng;
    }
    if (module && module.exports) module.exports = impl;
    else if (define && define.amd) define(function() {
        return impl;
    });
    else this.tychei = impl;
})(this, typeof module == 'object' && module, typeof define == 'function' && define // present with an AMD loader
);

},{}],"lbeKh":[function(require,module,exports) {
/*
Copyright 2019 David Bau.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/ (function(global, pool, math) {
    //
    // The following constants are related to IEEE 754 limits.
    //
    var width = 256, chunks = 6, digits = 52, rngname = 'random', startdenom = math.pow(width, chunks), significance = math.pow(2, digits), overflow = significance * 2, mask = width - 1, nodecrypto; // node.js crypto module, initialized at the bottom.
    //
    // seedrandom()
    // This is the seedrandom function described above.
    //
    function seedrandom(seed1, options, callback) {
        var key = [];
        options = options == true ? {
            entropy: true
        } : options || {
        };
        // Flatten the seed string or build one from local entropy if needed.
        var shortseed = mixkey(flatten(options.entropy ? [
            seed1,
            tostring(pool)
        ] : seed1 == null ? autoseed() : seed1, 3), key);
        // Use the seed to initialize an ARC4 generator.
        var arc4 = new ARC4(key);
        // This function returns a random double in [0, 1) that contains
        // randomness in every bit of the mantissa of the IEEE 754 value.
        var prng1 = function() {
            var n = arc4.g(chunks), d = startdenom, x = 0; //   and no 'extra last byte'.
            while(n < significance){
                n = (n + x) * width; //   shifting numerator and
                d *= width; //   denominator and generating a
                x = arc4.g(1); //   new least-significant-byte.
            }
            while(n >= overflow){
                n /= 2; //   last byte, shift everything
                d /= 2; //   right using integer math until
                x >>>= 1; //   we have exactly the desired bits.
            }
            return (n + x) / d; // Form the number within [0, 1).
        };
        prng1.int32 = function() {
            return arc4.g(4) | 0;
        };
        prng1.quick = function() {
            return arc4.g(4) / 4294967296;
        };
        prng1.double = prng1;
        // Mix the randomness into accumulated entropy.
        mixkey(tostring(arc4.S), pool);
        // Calling convention: what to return as a function of prng, seed, is_math.
        return (options.pass || callback || function(prng, seed, is_math_call, state) {
            if (state) {
                // Load the arc4 state from the given state if it has an S array.
                if (state.S) copy(state, arc4);
                // Only provide the .state method if requested via options.state.
                prng.state = function() {
                    return copy(arc4, {
                    });
                };
            }
            // If called as a method of Math (Math.seedrandom()), mutate
            // Math.random because that is how seedrandom.js has worked since v1.0.
            if (is_math_call) {
                math[rngname] = prng;
                return seed;
            } else return prng;
        })(prng1, shortseed, 'global' in options ? options.global : this == math, options.state);
    }
    //
    // ARC4
    //
    // An ARC4 implementation.  The constructor takes a key in the form of
    // an array of at most (width) integers that should be 0 <= x < (width).
    //
    // The g(count) method returns a pseudorandom integer that concatenates
    // the next (count) outputs from ARC4.  Its return value is a number x
    // that is in the range 0 <= x < (width ^ count).
    //
    function ARC4(key) {
        var t1, keylen = key.length, me = this, i1 = 0, j1 = me.i = me.j = 0, s1 = me.S = [];
        // The empty key [] is treated as [0].
        if (!keylen) key = [
            keylen++
        ];
        // Set up S using the standard key scheduling algorithm.
        while(i1 < width)s1[i1] = i1++;
        for(i1 = 0; i1 < width; i1++){
            s1[i1] = s1[j1 = mask & j1 + key[i1 % keylen] + (t1 = s1[i1])];
            s1[j1] = t1;
        }
        // The "g" method returns the next (count) outputs as one number.
        (me.g = function(count) {
            // Using instance members instead of closure state nearly doubles speed.
            var t, r = 0, i = me.i, j = me.j, s = me.S;
            while(count--){
                t = s[i = mask & i + 1];
                r = r * width + s[mask & (s[i] = s[j = mask & j + t]) + (s[j] = t)];
            }
            me.i = i;
            me.j = j;
            return r;
        // For robust unpredictability, the function call below automatically
        // discards an initial batch of values.  This is called RC4-drop[256].
        // See http://google.com/search?q=rsa+fluhrer+response&btnI
        })(width);
    }
    //
    // copy()
    // Copies internal state of ARC4 to or from a plain object.
    //
    function copy(f, t) {
        t.i = f.i;
        t.j = f.j;
        t.S = f.S.slice();
        return t;
    }
    //
    // flatten()
    // Converts an object tree to nested arrays of strings.
    //
    function flatten(obj, depth) {
        var result = [], typ = typeof obj, prop;
        if (depth && typ == 'object') {
            for(prop in obj)try {
                result.push(flatten(obj[prop], depth - 1));
            } catch (e) {
            }
        }
        return result.length ? result : typ == 'string' ? obj : obj + '\0';
    }
    //
    // mixkey()
    // Mixes a string seed into a key that is an array of integers, and
    // returns a shortened string seed that is equivalent to the result key.
    //
    function mixkey(seed, key) {
        var stringseed = seed + '', smear, j = 0;
        while(j < stringseed.length)key[mask & j] = mask & (smear ^= key[mask & j] * 19) + stringseed.charCodeAt(j++);
        return tostring(key);
    }
    //
    // autoseed()
    // Returns an object for autoseeding, using window.crypto and Node crypto
    // module if available.
    //
    function autoseed() {
        try {
            var out;
            if (nodecrypto && (out = nodecrypto.randomBytes)) // The use of 'out' to remember randomBytes makes tight minified code.
            out = out(width);
            else {
                out = new Uint8Array(width);
                (global.crypto || global.msCrypto).getRandomValues(out);
            }
            return tostring(out);
        } catch (e) {
            var browser = global.navigator, plugins = browser && browser.plugins;
            return [
                +new Date,
                global,
                plugins,
                global.screen,
                tostring(pool)
            ];
        }
    }
    //
    // tostring()
    // Converts an array of charcodes to a string
    //
    function tostring(a) {
        return String.fromCharCode.apply(0, a);
    }
    //
    // When seedrandom.js is loaded, we immediately mix a few bits
    // from the built-in RNG into the entropy pool.  Because we do
    // not want to interfere with deterministic PRNG state later,
    // seedrandom will not call math.random on its own again after
    // initialization.
    //
    mixkey(math.random(), pool);
    //
    // Nodejs and AMD support: export the implementation as a module using
    // either convention.
    //
    if (typeof module == 'object' && module.exports) {
        module.exports = seedrandom;
        // When in node.js, try using crypto package for autoseeding.
        try {
            nodecrypto = require('crypto');
        } catch (ex) {
        }
    } else if (typeof define == 'function' && define.amd) define(function() {
        return seedrandom;
    });
    else // When included as a plain script, set up Math.seedrandom global.
    math['seed' + rngname] = seedrandom;
// End anonymous scope, and pass initial values.
})(// global: `self` in browsers (including strict mode and web workers),
// otherwise `this` in Node and other environments
typeof self !== 'undefined' ? self : this, [], Math // math: package containing random, pow, and seedrandom
);

},{"crypto":"jhUEF"}],"jhUEF":[function(require,module,exports) {
"use strict";

},{}],"d9L8Q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = [
    "What’s the best thing you’ve got going on in your life at the moment?",
    "What incredibly common thing have you never done?",
    "What has taken you the longest to get good or decent at?",
    "What food do you love that a lot of people might find a little odd?",
    "If you could start a charity, what would it be for?",
    "What was the funniest thing you’ve seen recently online?",
    "What are some of your favorite games to play?",
    "What takes a lot of time but is totally worth it?",
    "What is the most amazing fact you know?",
    "What website or app doesn’t exist, but you really wish it did?",
    "What’s your favorite type of day? (weather, temp, etc.)",
    "What is the most clever or funniest use of advertising you’ve seen?",
    "How into self-improvement are you?",
    "When someone finds out what you do, or where you are from, what question do they always ask you?",
    "Are you more productive at night or in the morning? Do you think it’s possible to change and get used to another schedule?",
    "What scene in a movie always gives you goosebumps every time you watch it?",
    "What topic could you give a 20-minute presentation on without any preparation?",
    "What’s something that a lot of people are missing out on because they don’t know about it?",
    "What are some of your guilty pleasures?",
    "Who is the most interesting person you’ve met and talked with?",
    "What has really taken a toll on you?",
    "How did you spend the money from your very first job?",
    "What do you wish someone taught you a long time ago?",
    "Do you think you rely too heavily on your phone? Why or why not?",
    "How could carousels be spiced up so they are more exciting?",
    "What’s your favorite car that you’ve owned?",
    "What subjects should be taught in school but aren’t?",
    "What’s the biggest vehicle you’ve driven?",
    "What songs would be played on a loop in hell?",
    "What rule do you wish they would introduce into your favorite sport?",
    "What kind of challenges are you facing these days?",
    "What do you highly recommend to most people you meet?",
    "Do you think you have a pretty good work-life balance? Why or why not?",
    "What was the last thing you were really excited about?",
    "What’s your best “my coworkers are crazy” story?",
    "What does your perfect breakfast look like?",
    "What are some of your favorite holiday traditions that you did while growing up?",
    "If you could choose your dreams, what would you prefer to dream about?",
    "Would you ride in a zeppelin if given a chance?",
    "What’s something that was once important but is now becoming less and less relevant?",
    "What tells you the most about a person?",
    "When is the most interesting period in history?",
    "What is the best pair of shoes you have owned?",
    "What book had the most significant impact on you?",
    "Where’s your favorite place to nap?",
    "What is the best event you’ve attended?",
    "What do you buy way more of than most people?",
    "What do you rebel against?",
    "What well-known person does the most good for the world?",
    "What’s your favorite food combination?",
    "What’s the weirdest way you have met someone?",
    "What’s the most amazing natural occurrence you’ve witnessed?",
    "How did you get that scar of yours?",
    "What do you wish was illegal?",
    "If someone came up to you and said “Hey, do that thing you do!”, what thing would pop into your head first?",
    "Who is the most intelligent or creative person you know?",
    "What wastes the most time in your day to day life?",
    "What’s a problem you have, that might be entirely unique to you?",
    "What company or brand did you love until they betrayed your trust?",
    "Would you ever try space tourism, if you had the money for it?",
    "What’s the most annoying machine you must deal with regularly?",
    "What are you grateful for?",
    "What hobby would you be a lot of fun to get into?",
    "What do you resent paying for most?",
    "What pets did you have growing up?",
    "What’s the best or worst prank you’ve played on someone?",
    "What was the scariest movie you’ve seen?",
    "What motivates you?",
    "Where are five places you really want to visit before you die?",
    "What’s the best location to fully enjoy a good cup of coffee?",
    "How handy are you when it comes to fixing things?",
    "What skill or talent would you most like to learn?",
    "What weird thing do you have nostalgia for?",
    "What works of art have really made an impression on you?",
    "What culture would you like to learn more about?",
    "If you were featured on the local news, what would you most likely be on there for?",
    "What do you wish your phone could do?",
    "What’s your favorite international food?",
    "What workers have the worst jobs?",
    "What kind of physical activities do you like doing?",
    "Would you rather watch a movie on your TV at home or on the big screen in the theater, and why?",
    "What assumption you made went hilariously wrong?",
    "What big problem do you think technology will solve next?",
    "What fashion trend needs to be brought back?",
    "How do you think you will be/act when you are old?",
    "What’s your favorite way to waste time online?",
    "What’s the longest trip you’ve been on?",
    "What was something you thought would be easy until you tried it?",
    "What, in your opinion, is the most amazing animal?",
    "How into tech are you? Why?",
    "What is the biggest mistake you’ve made at work?",
    "Who is the oldest person you know personally? What interesting stories have they told you?",
    "Who is the funniest person in your family?",
    "What useless facts do you know?",
    "What’s your favorite Olympic sport to watch?",
    "How do you usually get your news?",
    "What smell do you hate that doesn’t seem to bother other people?",
    "What’s the most delightful hotel or house you’ve stayed in on vacation?",
    "What weird quirks did you pick up from your parents?",
    "What were your favorite television shows when you were growing up?",
    "What’s the silliest thing you are pretty good at?",
    "What’s your idea of a great day?",
    "What are some of the dumbest misadventures you’ve been on?",
    "What do you want to do when you retire?",
    "What do you do to unwind after a hard day?",
    "Who is the most competitive person you know?",
    "Would you rather spend time with other people or at home alone?",
    "What are some films that would make it on to your top 50 list of movies?",
    "What slang are you really happy went out of fashion?",
    "What music do you put on when you want to get pumped?",
    "What makes you feel old when you think about it?",
    "How well do you know your neighbors?",
    "What’s the best backhanded compliment you’ve heard / can think of on the spot?",
    "Who is the most interesting stranger you’ve met?",
    "What was your funniest or worst experience with a dentist?",
    "What’s the noblest endeavor a person can dedicate their life to?",
    "What’s your idea of a great party?",
    "What are some of your favorite scenes from movies?",
    "What are two of your favorite snacks?",
    "What’s the biggest adventure you’ve been on?",
    "Besides war and diplomacy, what would be the best way for countries to settle disputes?",
    "What household chore do you actually enjoy?",
    "What is something you do better than most people and something you do worse than most people?",
    "What TV show are you hooked on or were recently hooked on?",
    "If you had to lose one of your senses, which would you choose to lose?",
    "If a new volcano formed and the government had an online contest to see what it would be named, what name would you submit?",
    "What is the last goal you achieved?",
    "What was your worst haircut experience?",
    "Do you prefer pens or pencils? Why?",
    "What’s the best way to stay young?",
    "What is the most stressful TV show or movie you watched?",
    "How good are you at drawing?",
    "What did your teachers and parents say would be really important when you grew up, but it hasn’t been? ",
    "How do you feel about clowns?",
    "What is your favorite genre of movie? Why?",
    "What brands do you love/hate the most?",
    "What is the weirdest food combination you’ve made and tried?",
    "What would you change if you were in charge of the company you work for?",
    "Who has been your most interesting/confusing/annoying neighbor?",
    "Has there ever been a time when something so amazing or unexpected happened that it literally left you speechless for a time?",
    "Where’s the most surreal area you been to?",
    "What are common misconceptions about your job?",
    "What public spaces do you feel most comfortable in? (Library, bar, park, mall, stadium, etc.)",
    "What’s the most outdated piece of tech you still use regularly?",
    "What’s the weirdest food you’ve eaten?",
    "Who was your favorite teacher?",
    "What recent trend are you totally on board with?",
    "What about becoming an adult caught you completely off guard?",
    "How often do you dance?",
    "What’s the best cake you’ve ever eaten?",
    "What kind of art do you appreciate the most?",
    "What crossed way too far into the uncanny valley for you?",
    "What’s your favorite thing about the area/city/state you live in?",
    "What’s the best day you’ve had recently?",
    "What’s your favorite way to spend time outdoors?",
    "What does your perfect burger or sandwich have in it?",
    "What’s the worst advice you’ve been given?",
    "What’s the strangest name someone you have met had?",
    "What was something courageous you’ve (in person) seen someone do?",
    "What card or board games do you like to play?",
    "What are you best at fixing?",
    "What movie never gets old no matter how many times you’ve seen it?",
    "If the universe is just a simulation, what update or patch does it need?",
    "Where have you traveled to?",
    "What’s the scariest horror movie or horror book monster?",
    "What’s the most unique shop or restaurant you’ve been in?",
    "What hard time in your life left you a better person after it was finished?",
    "What’s the best sports game you’ve been to?",
    "What period would be the best to be born in?",
    "What sport do you wish you knew more about?",
    "What’s something you’re looking forward to?",
    "What’s the most creative thing you’ve done?",
    "What are you hilariously bad at?",
    "Tell me about a time you were totally out of your element/comfort zone.",
    "Are you a cat or dog person or neither? Why?",
    "Who is the most gifted person you know?",
    "What was your best vacation?",
    "What do you usually do on your commute to work?",
    "What was the craziest theme park or fair ride you’ve been on?",
    "What kind of people do you most enjoy hanging out with?",
    "What do you think the ideal age to be is?",
    "What are you kind of snobby about?",
    "What toy did you hate most as a child?",
    "What’s your drink of choice? (Either alcoholic or non.)",
    "If you left your current life behind and ran away to follow your dreams, what would you be doing?",
    "What food is underrated or underappreciated?",
    "What’s your favorite line from a book or a movie?",
    "What is the best thing you have ever bought?",
    "What catchy jingle or bit of advertising has stuck with you all these years?",
    "What luxury is totally worth the price?",
    "What is the most unique or silliest problem you have going on in your life at the moment?",
    "What could movie theaters do to improve the experience of going there?",
    "If you were so wealthy you didn’t need to work, what would you do with your time?",
    "What apps do you use most?",
    "What is the most tedious and/or the most exciting sport to watch?",
    "What’s your favorite island that you’ve visited?",
    "What do you geek out about?",
    "Besides insects and spiders, what animals annoy you the most?",
    "What’s your favorite month?",
    "What’s the best concert you’ve been to and why was it so good?", 
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"ihZw1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
exports.default = [
    "area",
    "army",
    "baby",
    "back",
    "ball",
    "band",
    "bank",
    "base",
    "bill",
    "body",
    "book",
    "call",
    "card",
    "care",
    "case",
    "cash",
    "city",
    "club",
    "cost",
    "date",
    "deal",
    "door",
    "duty",
    "east",
    "edge",
    "face",
    "fact",
    "farm",
    "fear",
    "four",
    "file",
    "film",
    "fire",
    "firm",
    "fish",
    "food",
    "foot",
    "form",
    "fund",
    "game",
    "girl",
    "goal",
    "gold",
    "hair",
    "half",
    "hall",
    "hand",
    "head",
    "help",
    "hill",
    "home",
    "hope",
    "hour",
    "idea",
    "jack",
    "john",
    "kind",
    "king",
    "lack",
    "lady",
    "land",
    "life",
    "line",
    "list",
    "look",
    "lord",
    "loss",
    "love",
    "mark",
    "mary",
    "mind",
    "miss",
    "move",
    "name",
    "need",
    "news",
    "note",
    "page",
    "pain",
    "pair",
    "park",
    "part",
    "past",
    "path",
    "paul",
    "plan",
    "play",
    "post",
    "race",
    "rain",
    "rate",
    "rest",
    "rise",
    "risk",
    "road",
    "rock",
    "role",
    "room",
    "rule",
    "sale",
    "seat",
    "shop",
    "show",
    "side",
    "sign",
    "site",
    "size",
    "skin",
    "sort",
    "star",
    "step",
    "task",
    "team",
    "term",
    "test",
    "text",
    "time",
    "tour",
    "town",
    "tree",
    "turn",
    "type",
    "unit",
    "user",
    "view",
    "wall",
    "week",
    "west",
    "wife",
    "will",
    "wind",
    "wine",
    "wood",
    "word",
    "work",
    "year",
    "dese",
    "enuf",
    "feel",
    "hern",
    "hers",
    "many",
    "mine",
    "mine",
    "much",
    "nada",
    "nish",
    "none",
    "nowt",
    "ours",
    "same",
    "self",
    "some",
    "such",
    "that",
    "thee",
    "them",
    "they",
    "this",
    "thon",
    "thor",
    "thou",
    "thou",
    "tone",
    "what",
    "when",
    "whom",
    "yere",
    "your",
    "bear",
    "beat",
    "blow",
    "burn",
    "call",
    "care",
    "cast",
    "come",
    "cook",
    "cope",
    "cost",
    "dare",
    "deal",
    "deny",
    "draw",
    "drop",
    "earn",
    "face",
    "fail",
    "fall",
    "fear",
    "feel",
    "fill",
    "find",
    "form",
    "gain",
    "give",
    "grow",
    "hang",
    "hate",
    "have",
    "head",
    "hear",
    "help",
    "hide",
    "hold",
    "hope",
    "hurt",
    "join",
    "jump",
    "keep",
    "kill",
    "know",
    "land",
    "last",
    "lead",
    "lend",
    "lift",
    "like",
    "link",
    "live",
    "look",
    "lose",
    "love",
    "make",
    "mark",
    "meet",
    "mind",
    "miss",
    "move",
    "must",
    "name",
    "need",
    "note",
    "open",
    "pass",
    "pick",
    "plan",
    "play",
    "pray",
    "pull",
    "push",
    "read",
    "rely",
    "rest",
    "ride",
    "ring",
    "rise",
    "risk",
    "roll",
    "rule",
    "save",
    "seek",
    "seem",
    "sell",
    "send",
    "shed",
    "show",
    "shut",
    "sign",
    "sing",
    "slip",
    "sort",
    "stay",
    "step",
    "stop",
    "suit",
    "take",
    "talk",
    "tell",
    "tend",
    "test",
    "turn",
    "vary",
    "view",
    "vote",
    "wait",
    "wake",
    "walk",
    "want",
    "warn",
    "wash",
    "wear",
    "will",
    "wish",
    "work",
    "able",
    "back",
    "bare",
    "bass",
    "blue",
    "bold",
    "busy",
    "calm",
    "cold",
    "cool",
    "damp",
    "dark",
    "dead",
    "deaf",
    "dear",
    "deep",
    "dual",
    "dull",
    "dumb",
    "easy",
    "evil",
    "fair",
    "fast",
    "fine",
    "firm",
    "flat",
    "fond",
    "foul",
    "free",
    "full",
    "glad",
    "good",
    "grey",
    "grim",
    "half",
    "hard",
    "head",
    "high",
    "holy",
    "huge",
    "just",
    "keen",
    "kind",
    "last",
    "late",
    "lazy",
    "like",
    "live",
    "lone",
    "long",
    "loud",
    "main",
    "male",
    "mass",
    "mean",
    "mere",
    "mild",
    "nazi",
    "near",
    "neat",
    "next",
    "nice",
    "okay",
    "only",
    "open",
    "oral",
    "pale",
    "past",
    "pink",
    "poor",
    "pure",
    "rare",
    "real",
    "rear",
    "rich",
    "rude",
    "safe",
    "same",
    "sick",
    "slim",
    "slow",
    "soft",
    "sole",
    "sore",
    "sure",
    "tall",
    "then",
    "thin",
    "tidy",
    "tiny",
    "tory",
    "true",
    "ugly",
    "vain",
    "vast",
    "very",
    "vice",
    "warm",
    "wary",
    "weak",
    "wide",
    "wild",
    "wise",
    "zero",
    "both",
    "else",
    "ergo",
    "lest",
    "like",
    "once",
    "only",
    "plus",
    "save",
    "sith",
    "than",
    "that",
    "then",
    "thou",
    "till",
    "unto",
    "when",
    "some",
    "ably",
    "afar",
    "anew",
    "away",
    "back",
    "damn",
    "dead",
    "deep",
    "down",
    "duly",
    "easy",
    "else",
    "even",
    "ever",
    "fair",
    "fast",
    "flat",
    "full",
    "good",
    "half",
    "hard",
    "here",
    "high",
    "home",
    "idly",
    "just",
    "late",
    "like",
    "live",
    "long",
    "loud",
    "much",
    "near",
    "nice",
    "okay",
    "once",
    "only",
    "over",
    "part",
    "past",
    "real",
    "slow",
    "solo",
    "soon",
    "sure",
    "that",
    "then",
    "this",
    "thus",
    "very",
    "when",
    "wide",
    "ajax",
    "amid",
    "anti",
    "apud",
    "atop",
    "bout",
    "chez",
    "come",
    "dahn",
    "doon",
    "down",
    "from",
    "gain",
    "half",
    "into",
    "like",
    "mang",
    "mong",
    "near",
    "nigh",
    "offa",
    "onto",
    "outa",
    "over",
    "past",
    "post",
    "save",
    "than",
    "thro",
    "thru",
    "till",
    "unto",
    "upon",
    "vice",
    "whiz",
    "with",
    "ahem",
    "ahoy",
    "alas",
    "amen",
    "bang",
    "blah",
    "ciao",
    "crud",
    "damn",
    "darn",
    "egad",
    "eina",
    "fact",
    "flip",
    "fore",
    "gosh",
    "heck",
    "hell",
    "here",
    "hist",
    "hiya",
    "hmmm",
    "hmph",
    "honk",
    "hunh",
    "jeez",
    "jinx",
    "like",
    "lord",
    "meow",
    "mwah",
    "nome",
    "nyet",
    "okay",
    "oops",
    "ouch",
    "phew",
    "phut",
    "poof",
    "pooh",
    "pugh",
    "shoo",
    "snap",
    "stop",
    "sure",
    "tara",
    "this",
    "urgh",
    "wall",
    "waly",
    "wham",
    "whoa",
    "word",
    "yuck", 
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["8Wj8M","dQ0rW"], "dQ0rW", "parcelRequire4471")

//# sourceMappingURL=index.d23765d0.js.map
