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
})({"kn9T2":[function(require,module,exports) {
var Refresh = require('react-refresh/runtime');
Refresh.injectIntoGlobalHook(window);
window.$RefreshReg$ = function() {
};
window.$RefreshSig$ = function() {
    return function(type) {
        return type;
    };
};

},{"react-refresh/runtime":"786KC"}],"786KC":[function(require,module,exports) {
'use strict';
module.exports = require('./cjs/react-refresh-runtime.development.js');

},{"./cjs/react-refresh-runtime.development.js":"hdge7"}],"hdge7":[function(require,module,exports) {
/** @license React v0.9.0
 * react-refresh-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
(function() {
    // ATTENTION
    // When adding new symbols to this file,
    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var REACT_ELEMENT_TYPE = 60103;
    var REACT_PORTAL_TYPE = 60106;
    var REACT_FRAGMENT_TYPE = 60107;
    var REACT_STRICT_MODE_TYPE = 60108;
    var REACT_PROFILER_TYPE = 60114;
    var REACT_PROVIDER_TYPE = 60109;
    var REACT_CONTEXT_TYPE = 60110;
    var REACT_FORWARD_REF_TYPE = 60112;
    var REACT_SUSPENSE_TYPE = 60113;
    var REACT_SUSPENSE_LIST_TYPE = 60120;
    var REACT_MEMO_TYPE = 60115;
    var REACT_LAZY_TYPE = 60116;
    var REACT_BLOCK_TYPE = 60121;
    var REACT_SERVER_BLOCK_TYPE = 60122;
    var REACT_FUNDAMENTAL_TYPE = 60117;
    var REACT_SCOPE_TYPE = 60119;
    var REACT_OPAQUE_ID_TYPE = 60128;
    var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
    var REACT_OFFSCREEN_TYPE = 60130;
    var REACT_LEGACY_HIDDEN_TYPE = 60131;
    if (typeof Symbol === 'function' && Symbol.for) {
        var symbolFor = Symbol.for;
        REACT_ELEMENT_TYPE = symbolFor('react.element');
        REACT_PORTAL_TYPE = symbolFor('react.portal');
        REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
        REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
        REACT_PROFILER_TYPE = symbolFor('react.profiler');
        REACT_PROVIDER_TYPE = symbolFor('react.provider');
        REACT_CONTEXT_TYPE = symbolFor('react.context');
        REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
        REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
        REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
        REACT_MEMO_TYPE = symbolFor('react.memo');
        REACT_LAZY_TYPE = symbolFor('react.lazy');
        REACT_BLOCK_TYPE = symbolFor('react.block');
        REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
        REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
        REACT_SCOPE_TYPE = symbolFor('react.scope');
        REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
        REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
        REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
        REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
    }
    var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map; // We never remove these associations.
    // It's OK to reference families, but use WeakMap/Set for types.
    var allFamiliesByID = new Map();
    var allFamiliesByType = new PossiblyWeakMap();
    var allSignaturesByType = new PossiblyWeakMap(); // This WeakMap is read by React, so we only put families
    // that have actually been edited here. This keeps checks fast.
    // $FlowIssue
    var updatedFamiliesByType = new PossiblyWeakMap(); // This is cleared on every performReactRefresh() call.
    // It is an array of [Family, NextType] tuples.
    var pendingUpdates = []; // This is injected by the renderer via DevTools global hook.
    var helpersByRendererID = new Map();
    var helpersByRoot = new Map(); // We keep track of mounted roots so we can schedule updates.
    var mountedRoots = new Set(); // If a root captures an error, we remember it so we can retry on edit.
    var failedRoots = new Set(); // In environments that support WeakMap, we also remember the last element for every root.
    // It needs to be weak because we do this even for roots that failed to mount.
    // If there is no WeakMap, we won't attempt to do retrying.
    // $FlowIssue
    var rootElements = typeof WeakMap === 'function' ? new WeakMap() : null;
    var isPerformingRefresh = false;
    function computeFullKey(signature) {
        if (signature.fullKey !== null) return signature.fullKey;
        var fullKey = signature.ownKey;
        var hooks;
        try {
            hooks = signature.getCustomHooks();
        } catch (err) {
            // This can happen in an edge case, e.g. if expression like Foo.useSomething
            // depends on Foo which is lazily initialized during rendering.
            // In that case just assume we'll have to remount.
            signature.forceReset = true;
            signature.fullKey = fullKey;
            return fullKey;
        }
        for(var i = 0; i < hooks.length; i++){
            var hook = hooks[i];
            if (typeof hook !== 'function') {
                // Something's wrong. Assume we need to remount.
                signature.forceReset = true;
                signature.fullKey = fullKey;
                return fullKey;
            }
            var nestedHookSignature = allSignaturesByType.get(hook);
            if (nestedHookSignature === undefined) continue;
            var nestedHookKey = computeFullKey(nestedHookSignature);
            if (nestedHookSignature.forceReset) signature.forceReset = true;
            fullKey += '\n---\n' + nestedHookKey;
        }
        signature.fullKey = fullKey;
        return fullKey;
    }
    function haveEqualSignatures(prevType, nextType) {
        var prevSignature = allSignaturesByType.get(prevType);
        var nextSignature = allSignaturesByType.get(nextType);
        if (prevSignature === undefined && nextSignature === undefined) return true;
        if (prevSignature === undefined || nextSignature === undefined) return false;
        if (computeFullKey(prevSignature) !== computeFullKey(nextSignature)) return false;
        if (nextSignature.forceReset) return false;
        return true;
    }
    function isReactClass(type) {
        return type.prototype && type.prototype.isReactComponent;
    }
    function canPreserveStateBetween(prevType, nextType) {
        if (isReactClass(prevType) || isReactClass(nextType)) return false;
        if (haveEqualSignatures(prevType, nextType)) return true;
        return false;
    }
    function resolveFamily(type) {
        // Only check updated types to keep lookups fast.
        return updatedFamiliesByType.get(type);
    } // If we didn't care about IE11, we could use new Map/Set(iterable).
    function cloneMap(map) {
        var clone = new Map();
        map.forEach(function(value, key) {
            clone.set(key, value);
        });
        return clone;
    }
    function cloneSet(set) {
        var clone = new Set();
        set.forEach(function(value) {
            clone.add(value);
        });
        return clone;
    }
    function performReactRefresh() {
        if (pendingUpdates.length === 0) return null;
        if (isPerformingRefresh) return null;
        isPerformingRefresh = true;
        try {
            var staleFamilies = new Set();
            var updatedFamilies = new Set();
            var updates = pendingUpdates;
            pendingUpdates = [];
            updates.forEach(function(_ref) {
                var family = _ref[0], nextType = _ref[1];
                // Now that we got a real edit, we can create associations
                // that will be read by the React reconciler.
                var prevType = family.current;
                updatedFamiliesByType.set(prevType, family);
                updatedFamiliesByType.set(nextType, family);
                family.current = nextType; // Determine whether this should be a re-render or a re-mount.
                if (canPreserveStateBetween(prevType, nextType)) updatedFamilies.add(family);
                else staleFamilies.add(family);
            }); // TODO: rename these fields to something more meaningful.
            var update = {
                updatedFamilies: updatedFamilies,
                // Families that will re-render preserving state
                staleFamilies: staleFamilies // Families that will be remounted
            };
            helpersByRendererID.forEach(function(helpers) {
                // Even if there are no roots, set the handler on first update.
                // This ensures that if *new* roots are mounted, they'll use the resolve handler.
                helpers.setRefreshHandler(resolveFamily);
            });
            var didError = false;
            var firstError = null; // We snapshot maps and sets that are mutated during commits.
            // If we don't do this, there is a risk they will be mutated while
            // we iterate over them. For example, trying to recover a failed root
            // may cause another root to be added to the failed list -- an infinite loop.
            var failedRootsSnapshot = cloneSet(failedRoots);
            var mountedRootsSnapshot = cloneSet(mountedRoots);
            var helpersByRootSnapshot = cloneMap(helpersByRoot);
            failedRootsSnapshot.forEach(function(root) {
                var helpers = helpersByRootSnapshot.get(root);
                if (helpers === undefined) throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
                failedRoots.has(root);
                if (rootElements === null) return;
                if (!rootElements.has(root)) return;
                var element = rootElements.get(root);
                try {
                    helpers.scheduleRoot(root, element);
                } catch (err) {
                    if (!didError) {
                        didError = true;
                        firstError = err;
                    } // Keep trying other roots.
                }
            });
            mountedRootsSnapshot.forEach(function(root) {
                var helpers = helpersByRootSnapshot.get(root);
                if (helpers === undefined) throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
                mountedRoots.has(root);
                try {
                    helpers.scheduleRefresh(root, update);
                } catch (err) {
                    if (!didError) {
                        didError = true;
                        firstError = err;
                    } // Keep trying other roots.
                }
            });
            if (didError) throw firstError;
            return update;
        } finally{
            isPerformingRefresh = false;
        }
    }
    function register(type, id) {
        if (type === null) return;
        if (typeof type !== 'function' && typeof type !== 'object') return;
         // This can happen in an edge case, e.g. if we register
        // return value of a HOC but it returns a cached component.
        // Ignore anything but the first registration for each type.
        if (allFamiliesByType.has(type)) return;
         // Create family or remember to update it.
        // None of this bookkeeping affects reconciliation
        // until the first performReactRefresh() call above.
        var family = allFamiliesByID.get(id);
        if (family === undefined) {
            family = {
                current: type
            };
            allFamiliesByID.set(id, family);
        } else pendingUpdates.push([
            family,
            type
        ]);
        allFamiliesByType.set(type, family); // Visit inner types because we might not have registered them.
        if (typeof type === 'object' && type !== null) switch(type.$$typeof){
            case REACT_FORWARD_REF_TYPE:
                register(type.render, id + '$render');
                break;
            case REACT_MEMO_TYPE:
                register(type.type, id + '$type');
                break;
        }
    }
    function setSignature(type, key) {
        var forceReset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var getCustomHooks = arguments.length > 3 ? arguments[3] : undefined;
        allSignaturesByType.set(type, {
            forceReset: forceReset,
            ownKey: key,
            fullKey: null,
            getCustomHooks: getCustomHooks || function() {
                return [];
            }
        });
    } // This is lazily called during first render for a type.
    // It captures Hook list at that time so inline requires don't break comparisons.
    function collectCustomHooksForSignature(type) {
        var signature = allSignaturesByType.get(type);
        if (signature !== undefined) computeFullKey(signature);
    }
    function getFamilyByID(id) {
        return allFamiliesByID.get(id);
    }
    function getFamilyByType(type) {
        return allFamiliesByType.get(type);
    }
    function findAffectedHostInstances(families) {
        var affectedInstances = new Set();
        mountedRoots.forEach(function(root) {
            var helpers = helpersByRoot.get(root);
            if (helpers === undefined) throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
            var instancesForRoot = helpers.findHostInstancesForRefresh(root, families);
            instancesForRoot.forEach(function(inst) {
                affectedInstances.add(inst);
            });
        });
        return affectedInstances;
    }
    function injectIntoGlobalHook(globalObject) {
        // For React Native, the global hook will be set up by require('react-devtools-core').
        // That code will run before us. So we need to monkeypatch functions on existing hook.
        // For React Web, the global hook will be set up by the extension.
        // This will also run before us.
        var hook = globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (hook === undefined) {
            // However, if there is no DevTools extension, we'll need to set up the global hook ourselves.
            // Note that in this case it's important that renderer code runs *after* this method call.
            // Otherwise, the renderer will think that there is no global hook, and won't do the injection.
            var nextID = 0;
            globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__ = hook = {
                renderers: new Map(),
                supportsFiber: true,
                inject: function(injected) {
                    return nextID++;
                },
                onScheduleFiberRoot: function(id, root, children) {
                },
                onCommitFiberRoot: function(id, root, maybePriorityLevel, didError) {
                },
                onCommitFiberUnmount: function() {
                }
            };
        } // Here, we just want to get a reference to scheduleRefresh.
        var oldInject = hook.inject;
        hook.inject = function(injected) {
            var id = oldInject.apply(this, arguments);
            if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') // This version supports React Refresh.
            helpersByRendererID.set(id, injected);
            return id;
        }; // Do the same for any already injected roots.
        // This is useful if ReactDOM has already been initialized.
        // https://github.com/facebook/react/issues/17626
        hook.renderers.forEach(function(injected, id) {
            if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') // This version supports React Refresh.
            helpersByRendererID.set(id, injected);
        }); // We also want to track currently mounted roots.
        var oldOnCommitFiberRoot = hook.onCommitFiberRoot;
        var oldOnScheduleFiberRoot = hook.onScheduleFiberRoot || function() {
        };
        hook.onScheduleFiberRoot = function(id, root, children) {
            if (!isPerformingRefresh) {
                // If it was intentionally scheduled, don't attempt to restore.
                // This includes intentionally scheduled unmounts.
                failedRoots.delete(root);
                if (rootElements !== null) rootElements.set(root, children);
            }
            return oldOnScheduleFiberRoot.apply(this, arguments);
        };
        hook.onCommitFiberRoot = function(id, root, maybePriorityLevel, didError) {
            var helpers = helpersByRendererID.get(id);
            if (helpers === undefined) return;
            helpersByRoot.set(root, helpers);
            var current = root.current;
            var alternate = current.alternate; // We need to determine whether this root has just (un)mounted.
            // This logic is copy-pasted from similar logic in the DevTools backend.
            // If this breaks with some refactoring, you'll want to update DevTools too.
            if (alternate !== null) {
                var wasMounted = alternate.memoizedState != null && alternate.memoizedState.element != null;
                var isMounted = current.memoizedState != null && current.memoizedState.element != null;
                if (!wasMounted && isMounted) {
                    // Mount a new root.
                    mountedRoots.add(root);
                    failedRoots.delete(root);
                } else if (wasMounted && isMounted) ;
                else if (wasMounted && !isMounted) {
                    // Unmount an existing root.
                    mountedRoots.delete(root);
                    if (didError) // We'll remount it on future edits.
                    failedRoots.add(root);
                    else helpersByRoot.delete(root);
                } else if (!wasMounted && !isMounted) {
                    if (didError) // We'll remount it on future edits.
                    failedRoots.add(root);
                }
            } else // Mount a new root.
            mountedRoots.add(root);
            return oldOnCommitFiberRoot.apply(this, arguments);
        };
    }
    function hasUnrecoverableErrors() {
        // TODO: delete this after removing dependency in RN.
        return false;
    } // Exposed for testing.
    function _getMountedRootCount() {
        return mountedRoots.size;
    } // This is a wrapper over more primitive functions for setting signature.
    // Signatures let us decide whether the Hook order has changed on refresh.
    //
    // This function is intended to be used as a transform target, e.g.:
    // var _s = createSignatureFunctionForTransform()
    //
    // function Hello() {
    //   const [foo, setFoo] = useState(0);
    //   const value = useCustomHook();
    //   _s(); /* Second call triggers collecting the custom Hook list.
    //          * This doesn't happen during the module evaluation because we
    //          * don't want to change the module order with inline requires.
    //          * Next calls are noops. */
    //   return <h1>Hi</h1>;
    // }
    //
    // /* First call specifies the signature: */
    // _s(
    //   Hello,
    //   'useState{[foo, setFoo]}(0)',
    //   () => [useCustomHook], /* Lazy to avoid triggering inline requires */
    // );
    function createSignatureFunctionForTransform() {
        // We'll fill in the signature in two steps.
        // First, we'll know the signature itself. This happens outside the component.
        // Then, we'll know the references to custom Hooks. This happens inside the component.
        // After that, the returned function will be a fast path no-op.
        var status = 'needsSignature';
        var savedType;
        var hasCustomHooks;
        return function(type, key, forceReset, getCustomHooks) {
            switch(status){
                case 'needsSignature':
                    if (type !== undefined) {
                        // If we received an argument, this is the initial registration call.
                        savedType = type;
                        hasCustomHooks = typeof getCustomHooks === 'function';
                        setSignature(type, key, forceReset, getCustomHooks); // The next call we expect is from inside a function, to fill in the custom Hooks.
                        status = 'needsCustomHooks';
                    }
                    break;
                case 'needsCustomHooks':
                    if (hasCustomHooks) collectCustomHooksForSignature(savedType);
                    status = 'resolved';
                    break;
            }
            return type;
        };
    }
    function isLikelyComponentType(type) {
        switch(typeof type){
            case 'function':
                // First, deal with classes.
                if (type.prototype != null) {
                    if (type.prototype.isReactComponent) // React class.
                    return true;
                    var ownNames = Object.getOwnPropertyNames(type.prototype);
                    if (ownNames.length > 1 || ownNames[0] !== 'constructor') // This looks like a class.
                    return false;
                     // eslint-disable-next-line no-proto
                    if (type.prototype.__proto__ !== Object.prototype) // It has a superclass.
                    return false;
                     // Pass through.
                // This looks like a regular function with empty prototype.
                } // For plain functions and arrows, use name as a heuristic.
                var name = type.name || type.displayName;
                return typeof name === 'string' && /^[A-Z]/.test(name);
            case 'object':
                if (type != null) switch(type.$$typeof){
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_MEMO_TYPE:
                        // Definitely React components.
                        return true;
                    default:
                        return false;
                }
                return false;
            default:
                return false;
        }
    }
    exports._getMountedRootCount = _getMountedRootCount;
    exports.collectCustomHooksForSignature = collectCustomHooksForSignature;
    exports.createSignatureFunctionForTransform = createSignatureFunctionForTransform;
    exports.findAffectedHostInstances = findAffectedHostInstances;
    exports.getFamilyByID = getFamilyByID;
    exports.getFamilyByType = getFamilyByType;
    exports.hasUnrecoverableErrors = hasUnrecoverableErrors;
    exports.injectIntoGlobalHook = injectIntoGlobalHook;
    exports.isLikelyComponentType = isLikelyComponentType;
    exports.performReactRefresh = performReactRefresh;
    exports.register = register;
    exports.setSignature = setSignature;
})();

},{}],"5Jve1":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "bc2b69bea73672b0";
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

},{}],"5QLk1":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$94e2 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$94e2.prelude(module);

try {
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
console.log(_react);
console.log(/*#__PURE__*/ _jsxDevRuntime.jsxDEV("div", {
}, void 0, false, {
    fileName: "wordle-js/src/index.js",
    lineNumber: 4,
    columnNumber: 13
}, undefined));
let wordList = [
    'sushi',
    'crabs',
    'patio',
    'darts',
    'horse',
    'piano',
    'couch',
    'candy',
    'which',
    'there',
    'their',
    'about',
    'would',
    'these',
    'other',
    'words',
    'could',
    'write',
    'first',
    'water',
    'after',
    'where',
    'right',
    'think',
    'three',
    'years',
    'place',
    'sound',
    'great',
    'again',
    'still',
    'every',
    'small',
    'found',
    'those',
    'never',
    'under',
    'might',
    'while',
    'house',
    'world',
    'below',
    'asked',
    'going',
    'large',
    'until',
    'along',
    'shall',
    'being',
    'often',
    'earth',
    'began',
    'since',
    'study',
    'night',
    'light',
    'above',
    'paper',
    'parts',
    'young',
    'story',
    'point',
    'times',
    'heard',
    'whole',
    'white',
    'given',
    'means',
    'music',
    'miles',
    'thing',
    'today',
    'later',
    'using',
    'money',
    'lines',
    'order',
    'group',
    'among',
    'learn',
    'known',
    'space',
    'table',
    'early',
    'trees',
    'short',
    'hands',
    'state',
    'black',
    'shown',
    'stood',
    'front',
    'voice',
    'kinds',
    'makes',
    'comes',
    'close',
    'power',
    'lived',
    'vowel',
    'taken',
    'built',
    'heart',
    'ready',
    'quite',
    'class',
    'bring',
    'round',
    'horse',
    'shows',
    'piece',
    'green',
    'stand',
    'birds',
    'start',
    'river',
    'tried',
    'least',
    'field',
    'whose',
    'girls',
    'leave',
    'added',
    'color',
    'third',
    'hours',
    'moved',
    'plant',
    'doing',
    'names',
    'forms',
    'heavy',
    'ideas',
    'cried',
    'check',
    'floor',
    'begin',
    'woman',
    'alone',
    'plane',
    'spell',
    'watch',
    'carry',
    'wrote',
    'clear',
    'named',
    'books',
    'child',
    'glass',
    'human',
    'takes',
    'party',
    'build',
    'seems',
    'blood',
    'sides',
    'seven',
    'mouth',
    'solve',
    'north',
    'value',
    'death',
    'maybe',
    'happy',
    'tells',
    'gives',
    'looks',
    'shape',
    'lives',
    'steps',
    'areas',
    'sense',
    'speak',
    'force',
    'ocean',
    'speed',
    'women',
    'metal',
    'south',
    'grass',
    'scale',
    'cells',
    'lower',
    'sleep',
    'wrong',
    'pages',
    'ships',
    'needs',
    'rocks',
    'eight',
    'major',
    'level',
    'total',
    'ahead',
    'reach',
    'stars',
    'store',
    'sight',
    'terms',
    'catch',
    'works',
    'board',
    'cover',
    'songs',
    'equal',
    'stone',
    'waves',
    'guess',
    'dance',
    'spoke',
    'break',
    'cause',
    'radio',
    'weeks',
    'lands',
    'basic',
    'liked',
    'trade',
    'fresh',
    'final',
    'fight',
    'meant',
    'drive',
    'spent',
    'local',
    'waxes',
    'knows',
    'train',
    'bread',
    'homes',
    'teeth',
    'coast',
    'thick',
    'brown',
    'clean',
    'quiet',
    'sugar',
    'facts',
    'steel',
    'forth',
    'rules',
    'notes',
    'units',
    'peace',
    'month',
    'verbs',
    'seeds',
    'helps',
    'sharp',
    'visit',
    'woods',
    'chief',
    'walls',
    'cross',
    'wings',
    'grown',
    'cases',
    'foods',
    'crops',
    'fruit',
    'stick',
    'wants',
    'stage',
    'sheep',
    'nouns',
    'plain',
    'drink',
    'bones',
    'apart',
    'turns',
    'moves',
    'touch',
    'angle',
    'based',
    'range',
    'marks',
    'tired',
    'older',
    'farms',
    'spend',
    'shoes',
    'goods',
    'chair',
    'twice',
    'cents',
    'empty',
    'alike',
    'style',
    'broke',
    'pairs',
    'count',
    'enjoy',
    'score',
    'shore',
    'roots',
    'paint',
    'heads',
    'shook',
    'serve',
    'angry',
    'crowd',
    'wheel',
    'quick',
    'dress',
    'share',
    'alive',
    'noise',
    'solid',
    'cloth',
    'signs',
    'hills',
    'types',
    'drawn',
    'worth',
    'truck',
    'piano',
    'upper',
    'loved',
    'usual',
    'faces',
    'drove',
    'cabin',
    'boats',
    'towns',
    'proud',
    'court',
    'model',
    'prime',
    'fifty',
    'plans',
    'yards',
    'prove',
    'tools',
    'price',
    'sheet',
    'smell',
    'boxes',
    'raise',
    'match',
    'truth',
    'roads',
    'threw',
    'enemy',
    'lunch',
    'chart',
    'scene',
    'graph',
    'doubt',
    'guide',
    'winds',
    'block',
    'grain',
    'smoke',
    'mixed',
    'games',
    'wagon',
    'sweet',
    'topic',
    'extra',
    'plate',
    'title',
    'knife',
    'fence',
    'falls',
    'cloud',
    'wheat',
    'plays',
    'enter',
    'broad',
    'steam',
    'atoms',
    'press',
    'lying',
    'basis',
    'clock',
    'taste',
    'grows',
    'thank',
    'storm',
    'agree',
    'brain',
    'track',
    'smile',
    'funny',
    'beach',
    'stock',
    'hurry',
    'saved',
    'sorry',
    'giant',
    'trail',
    'offer',
    'ought',
    'rough',
    'daily',
    'avoid',
    'keeps',
    'throw',
    'allow',
    'cream',
    'laugh',
    'edges',
    'teach',
    'frame',
    'bells',
    'dream',
    'magic',
    'occur',
    'ended',
    'chord',
    'false',
    'skill',
    'holes',
    'dozen',
    'brave',
    'apple',
    'climb',
    'outer',
    'pitch',
    'ruler',
    'holds',
    'fixed',
    'costs',
    'calls',
    'blank',
    'staff',
    'labor',
    'eaten',
    'youth',
    'tones',
    'honor',
    'globe',
    'gases',
    'doors',
    'poles',
    'loose',
    'apply',
    'tears',
    'exact',
    'brush',
    'chest',
    'layer',
    'whale',
    'minor',
    'faith',
    'tests',
    'judge',
    'items',
    'worry',
    'waste',
    'hoped',
    'strip',
    'begun',
    'aside',
    'lakes',
    'bound',
    'depth',
    'candy',
    'event',
    'worse',
    'aware',
    'shell',
    'rooms',
    'ranch',
    'image',
    'snake',
    'aloud',
    'dried',
    'likes',
    'motor',
    'pound',
    'knees',
    'refer',
    'fully',
    'chain',
    'shirt',
    'flour',
    'drops',
    'spite',
    'orbit',
    'banks',
    'shoot',
    'curve',
    'tribe',
    'tight',
    'blind',
    'slept',
    'shade',
    'claim',
    'flies',
    'theme',
    'queen',
    'fifth',
    'union',
    'hence',
    'straw',
    'entry',
    'issue',
    'birth',
    'feels',
    'anger',
    'brief',
    'rhyme',
    'glory',
    'guard',
    'flows',
    'flesh',
    'owned',
    'trick',
    'yours',
    'sizes',
    'noted',
    'width',
    'burst',
    'route',
    'lungs',
    'uncle',
    'bears',
    'royal',
    'kings',
    'forty',
    'trial',
    'cards',
    'brass',
    'opera',
    'chose',
    'owner',
    'vapor',
    'beats',
    'mouse',
    'tough',
    'wires',
    'meter',
    'tower',
    'finds',
    'inner',
    'stuck',
    'arrow',
    'poems',
    'label',
    'swing',
    'solar',
    'truly',
    'tense',
    'beans',
    'split',
    'rises',
    'weigh',
    'hotel',
    'stems',
    'pride',
    'swung',
    'grade',
    'digit',
    'badly',
    'boots',
    'pilot',
    'sales',
    'swept',
    'lucky',
    'prize',
    'stove',
    'tubes',
    'acres',
    'wound',
    'steep',
    'slide',
    'trunk',
    'error',
    'porch',
    'slave',
    'exist',
    'faced',
    'mines',
    'marry',
    'juice',
    'raced',
    'waved',
    'goose',
    'trust',
    'fewer',
    'favor',
    'mills',
    'views',
    'joint',
    'eager',
    'spots',
    'blend',
    'rings',
    'adult',
    'index',
    'nails',
    'horns',
    'balls',
    'flame',
    'rates',
    'drill',
    'trace',
    'skins',
    'waxed',
    'seats',
    'stuff',
    'ratio',
    'minds',
    'dirty',
    'silly',
    'coins',
    'hello',
    'trips',
    'leads',
    'rifle',
    'hopes',
    'bases',
    'shine',
    'bench',
    'moral',
    'fires',
    'meals',
    'shake',
    'shops',
    'cycle',
    'movie',
    'slope',
    'canoe',
    'teams',
    'folks',
    'fired',
    'bands',
    'thumb',
    'shout',
    'canal',
    'habit',
    'reply',
    'ruled',
    'fever',
    'crust',
    'shelf',
    'walks',
    'midst',
    'crack',
    'print',
    'tales',
    'coach',
    'stiff',
    'flood',
    'verse',
    'awake',
    'rocky',
    'march',
    'fault',
    'swift',
    'faint',
    'civil',
    'ghost',
    'feast',
    'blade',
    'limit',
    'germs',
    'reads',
    'ducks',
    'dairy',
    'worst',
    'gifts',
    'lists',
    'stops',
    'rapid',
    'brick',
    'claws',
    'beads',
    'beast',
    'skirt',
    'cakes',
    'lions',
    'frogs',
    'tries',
    'nerve',
    'grand',
    'armed',
    'treat',
    'honey',
    'moist',
    'legal',
    'penny',
    'crown',
    'shock',
    'taxes',
    'sixty',
    'altar',
    'pulls',
    'sport',
    'drums',
    'talks',
    'dying',
    'dates',
    'drank',
    'blows',
    'lever',
    'wages',
    'proof',
    'drugs',
    'tanks',
    'sings',
    'tails',
    'pause',
    'herds',
    'arose',
    'hated',
    'clues',
    'novel',
    'shame',
    'burnt',
    'races',
    'flash',
    'weary',
    'heels',
    'token',
    'coats',
    'spare',
    'shiny',
    'alarm',
    'dimes',
    'sixth',
    'clerk',
    'mercy',
    'sunny',
    'guest',
    'float',
    'shone',
    'pipes',
    'worms',
    'bills',
    'sweat',
    'suits',
    'smart',
    'upset',
    'rains',
    'sandy',
    'rainy',
    'parks',
    'sadly',
    'fancy',
    'rider',
    'unity',
    'bunch',
    'rolls',
    'crash',
    'craft',
    'newly',
    'gates',
    'hatch',
    'paths',
    'funds',
    'wider',
    'grace',
    'grave',
    'tides',
    'admit',
    'shift',
    'sails',
    'pupil',
    'tiger',
    'angel',
    'cruel',
    'agent',
    'drama',
    'urged',
    'patch',
    'nests',
    'vital',
    'sword',
    'blame',
    'weeds',
    'screw',
    'vocal',
    'bacon',
    'chalk',
    'cargo',
    'crazy',
    'acted',
    'goats',
    'arise',
    'witch',
    'loves',
    'queer',
    'dwell',
    'backs',
    'ropes',
    'shots',
    'merry',
    'phone',
    'cheek',
    'peaks',
    'ideal',
    'beard',
    'eagle',
    'creek',
    'cries',
    'ashes',
    'stall',
    'yield',
    'mayor',
    'opens',
    'input',
    'fleet',
    'tooth',
    'cubic',
    'wives',
    'burns',
    'poets',
    'apron',
    'spear',
    'organ',
    'cliff',
    'stamp',
    'paste',
    'rural',
    'baked',
    'chase',
    'slice',
    'slant',
    'knock',
    'noisy',
    'sorts',
    'stays',
    'wiped',
    'blown',
    'piled',
    'clubs',
    'cheer',
    'widow',
    'twist',
    'tenth',
    'hides',
    'comma',
    'sweep',
    'spoon',
    'stern',
    'crept',
    'maple',
    'deeds',
    'rides',
    'muddy',
    'crime',
    'jelly',
    'ridge',
    'drift',
    'dusty',
    'devil',
    'tempo',
    'humor',
    'sends',
    'steal',
    'tents',
    'waist',
    'roses',
    'reign',
    'noble',
    'cheap',
    'dense',
    'linen',
    'geese',
    'woven',
    'posts',
    'hired',
    'wrath',
    'salad',
    'bowed',
    'tires',
    'shark',
    'belts',
    'grasp',
    'blast',
    'polar',
    'fungi',
    'tends',
    'pearl',
    'loads',
    'jokes',
    'veins',
    'frost',
    'hears',
    'loses',
    'hosts',
    'diver',
    'phase',
    'toads',
    'alert',
    'tasks',
    'seams',
    'coral',
    'focus',
    'naked',
    'puppy',
    'jumps',
    'spoil',
    'quart',
    'macro',
    'fears',
    'flung',
    'spark',
    'vivid',
    'brook',
    'steer',
    'spray',
    'decay',
    'ports',
    'socks',
    'urban',
    'goals',
    'grant',
    'minus',
    'films',
    'tunes',
    'shaft',
    'firms',
    'skies',
    'bride',
    'wreck',
    'flock',
    'stare',
    'hobby',
    'bonds',
    'dared',
    'faded',
    'thief',
    'crude',
    'pants',
    'flute',
    'votes',
    'tonal',
    'radar',
    'wells',
    'skull',
    'hairs',
    'argue',
    'wears',
    'dolls',
    'voted',
    'caves',
    'cared',
    'broom',
    'scent',
    'panel',
    'fairy',
    'olive',
    'bends',
    'prism',
    'lamps',
    'cable',
    'peach',
    'ruins',
    'rally',
    'schwa',
    'lambs',
    'sells',
    'cools',
    'draft',
    'charm',
    'limbs',
    'brake',
    'gazed',
    'cubes',
    'delay',
    'beams',
    'fetch',
    'ranks',
    'array',
    'harsh',
    'camel',
    'vines',
    'picks',
    'naval',
    'purse',
    'rigid',
    'crawl',
    'toast',
    'soils',
    'sauce',
    'basin',
    'ponds',
    'twins',
    'wrist',
    'fluid',
    'pools',
    'brand',
    'stalk',
    'robot',
    'reeds',
    'hoofs',
    'buses',
    'sheer',
    'grief',
    'bloom',
    'dwelt',
    'melts',
    'risen',
    'flags',
    'knelt',
    'fiber',
    'roofs',
    'freed',
    'armor',
    'piles',
    'aimed',
    'algae',
    'twigs',
    'lemon',
    'ditch',
    'drunk',
    'rests',
    'chill',
    'slain',
    'panic',
    'cords',
    'tuned',
    'crisp',
    'ledge',
    'dived',
    'swamp',
    'clung',
    'stole',
    'molds',
    'yarns',
    'liver',
    'gauge',
    'breed',
    'stool',
    'gulls',
    'awoke',
    'gross',
    'diary',
    'rails',
    'belly',
    'trend',
    'flask',
    'stake',
    'fried',
    'draws',
    'actor',
    'handy',
    'bowls',
    'haste',
    'scope',
    'deals',
    'knots',
    'moons',
    'essay',
    'thump',
    'hangs',
    'bliss',
    'dealt',
    'gains',
    'bombs',
    'clown',
    'palms',
    'cones',
    'roast',
    'tidal',
    'bored',
    'chant',
    'acids',
    'dough',
    'camps',
    'swore',
    'lover',
    'hooks',
    'males',
    'cocoa',
    'punch',
    'award',
    'reins',
    'ninth',
    'noses',
    'links',
    'drain',
    'fills',
    'nylon',
    'lunar',
    'pulse',
    'flown',
    'elbow',
    'fatal',
    'sites',
    'moths',
    'meats',
    'foxes',
    'mined',
    'attic',
    'fiery',
    'mount',
    'usage',
    'swear',
    'snowy',
    'rusty',
    'scare',
    'traps',
    'relax',
    'react',
    'valid',
    'robin',
    'cease',
    'gills',
    'prior',
    'safer',
    'polio',
    'loyal',
    'swell',
    'salty',
    'marsh',
    'vague',
    'weave',
    'mound',
    'seals',
    'mules',
    'virus',
    'scout',
    'acute',
    'windy',
    'stout',
    'folds',
    'seize',
    'hilly',
    'joins',
    'pluck',
    'stack',
    'lords',
    'dunes',
    'burro',
    'hawks',
    'trout',
    'feeds',
    'scarf',
    'halls',
    'coals',
    'towel',
    'souls',
    'elect',
    'buggy',
    'pumps',
    'loans',
    'spins',
    'files',
    'oxide',
    'pains',
    'photo',
    'rival',
    'flats',
    'syrup',
    'rodeo',
    'sands',
    'moose',
    'pints',
    'curly',
    'comic',
    'cloak',
    'onion',
    'clams',
    'scrap',
    'didst',
    'couch',
    'codes',
    'fails',
    'ounce',
    'lodge',
    'greet',
    'gypsy',
    'utter',
    'paved',
    'zones',
    'fours',
    'alley',
    'tiles',
    'bless',
    'crest',
    'elder',
    'kills',
    'yeast',
    'erect',
    'bugle',
    'medal',
    'roles',
    'hound',
    'snail',
    'alter',
    'ankle',
    'relay',
    'loops',
    'zeros',
    'bites',
    'modes',
    'debts',
    'realm',
    'glove',
    'rayon',
    'swims',
    'poked',
    'stray',
    'lifts',
    'maker',
    'lumps',
    'graze',
    'dread',
    'barns',
    'docks',
    'masts',
    'pours',
    'wharf',
    'curse',
    'plump',
    'robes',
    'seeks',
    'cedar',
    'curls',
    'jolly',
    'myths',
    'cages',
    'gloom',
    'locks',
    'pedal',
    'beets',
    'crows',
    'anode',
    'slash',
    'creep',
    'rowed',
    'chips',
    'fists',
    'wines',
    'cares',
    'valve',
    'newer',
    'motel',
    'ivory',
    'necks',
    'clamp',
    'barge',
    'blues',
    'alien',
    'frown',
    'strap',
    'crews',
    'shack',
    'gonna',
    'saves',
    'stump',
    'ferry',
    'idols',
    'cooks',
    'juicy',
    'glare',
    'carts',
    'alloy',
    'bulbs',
    'lawns',
    'lasts',
    'fuels',
    'oddly',
    'crane',
    'filed',
    'weird',
    'shawl',
    'slips',
    'troop',
    'bolts',
    'suite',
    'sleek',
    'quilt',
    'tramp',
    'blaze',
    'atlas',
    'odors',
    'scrub',
    'crabs',
    'probe',
    'logic',
    'adobe',
    'exile',
    'rebel',
    'grind',
    'sting',
    'spine',
    'cling',
    'desks',
    'grove',
    'leaps',
    'prose',
    'lofty',
    'agony',
    'snare',
    'tusks',
    'bulls',
    'moods',
    'humid',
    'finer',
    'dimly',
    'plank',
    'china',
    'pines',
    'guilt',
    'sacks',
    'brace',
    'quote',
    'lathe',
    'gaily',
    'fonts',
    'scalp',
    'adopt',
    'foggy',
    'ferns',
    'grams',
    'clump',
    'perch',
    'tumor',
    'teens',
    'crank',
    'fable',
    'hedge',
    'genes',
    'sober',
    'boast',
    'tract',
    'cigar',
    'unite',
    'owing',
    'thigh',
    'haiku',
    'swish',
    'dikes',
    'wedge',
    'booth',
    'eased',
    'frail',
    'cough',
    'tombs',
    'darts',
    'forts',
    'choir',
    'pouch',
    'pinch',
    'hairy',
    'buyer',
    'torch',
    'vigor',
    'waltz',
    'heats',
    'herbs',
    'users',
    'flint',
    'click',
    'madam',
    'bleak',
    'blunt',
    'aided',
    'lacks',
    'masks',
    'waded',
    'risks',
    'nurse',
    'chaos',
    'sewed',
    'cured',
    'ample',
    'lease',
    'steak',
    'sinks',
    'merit',
    'bluff',
    'bathe',
    'gleam',
    'bonus',
    'colts',
    'shear',
    'gland',
    'silky',
    'skate',
    'birch',
    'anvil',
    'sleds',
    'groan',
    'maids',
    'meets',
    'speck',
    'hymns',
    'hints',
    'drown',
    'bosom',
    'slick',
    'quest',
    'coils',
    'spied',
    'snows',
    'stead',
    'snack',
    'plows',
    'blond',
    'tamed',
    'thorn',
    'waits',
    'glued',
    'banjo',
    'tease',
    'arena',
    'bulky',
    'carve',
    'stunt',
    'warms',
    'shady',
    'razor',
    'folly',
    'leafy',
    'notch',
    'fools',
    'otter',
    'pears',
    'flush',
    'genus',
    'ached',
    'fives',
    'flaps',
    'spout',
    'smote',
    'fumes',
    'adapt',
    'cuffs',
    'tasty',
    'stoop',
    'clips',
    'disks',
    'sniff',
    'lanes',
    'brisk',
    'imply',
    'demon',
    'super',
    'furry',
    'raged',
    'growl',
    'texts',
    'hardy',
    'stung',
    'typed',
    'hates',
    'wiser',
    'timid',
    'serum',
    'beaks',
    'rotor',
    'casts',
    'baths',
    'glide',
    'plots',
    'trait',
    'resin',
    'slums',
    'lyric',
    'puffs',
    'decks',
    'brood',
    'mourn',
    'aloft',
    'abuse',
    'whirl',
    'edged',
    'ovary',
    'quack',
    'heaps',
    'slang',
    'await',
    'civic',
    'saint',
    'bevel',
    'sonar',
    'aunts',
    'packs',
    'froze',
    'tonic',
    'corps',
    'swarm',
    'frank',
    'repay',
    'gaunt',
    'wired',
    'niece',
    'cello',
    'needy',
    'chuck',
    'stony',
    'media',
    'surge',
    'hurts',
    'repel',
    'husky',
    'dated',
    'hunts',
    'mists',
    'exert',
    'dries',
    'mates',
    'sworn',
    'baker',
    'spice',
    'oasis',
    'boils',
    'spurs',
    'doves',
    'sneak',
    'paces',
    'colon',
    'siege',
    'strum',
    'drier',
    'cacao',
    'humus',
    'bales',
    'piped',
    'nasty',
    'rinse',
    'boxer',
    'shrub',
    'amuse',
    'tacks',
    'cited',
    'slung',
    'delta',
    'laden',
    'larva',
    'rents',
    'yells',
    'spool',
    'spill',
    'crush',
    'jewel',
    'snaps',
    'stain',
    'kicks',
    'tying',
    'slits',
    'rated',
    'eerie',
    'smash',
    'plums',
    'zebra',
    'earns',
    'bushy',
    'scary',
    'squad',
    'tutor',
    'silks',
    'slabs',
    'bumps',
    'evils',
    'fangs',
    'snout',
    'peril',
    'pivot',
    'yacht',
    'lobby',
    'jeans',
    'grins',
    'viola',
    'liner',
    'comet',
    'scars',
    'chops',
    'raids',
    'eater',
    'slate',
    'skips',
    'soles',
    'misty',
    'urine',
    'knobs',
    'sleet',
    'holly',
    'pests',
    'forks',
    'grill',
    'trays',
    'pails',
    'borne',
    'tenor',
    'wares',
    'carol',
    'woody',
    'canon',
    'wakes',
    'kitty',
    'miner',
    'polls',
    'shaky',
    'nasal',
    'scorn',
    'chess',
    'taxis',
    'crate',
    'shyly',
    'tulip',
    'forge',
    'nymph',
    'budge',
    'lowly',
    'abide',
    'depot',
    'oases',
    'asses',
    'sheds',
    'fudge',
    'pills',
    'rivet',
    'thine',
    'groom',
    'lanky',
    'boost',
    'broth',
    'heave',
    'gravy',
    'beech',
    'timed',
    'quail',
    'inert',
    'gears',
    'chick',
    'hinge',
    'trash',
    'clash',
    'sighs',
    'renew',
    'bough',
    'dwarf',
    'slows',
    'quill',
    'shave',
    'spore',
    'sixes',
    'chunk',
    'madly',
    'paced',
    'braid',
    'fuzzy',
    'motto',
    'spies',
    'slack',
    'mucus',
    'magma',
    'awful',
    'discs',
    'erase',
    'posed',
    'asset',
    'cider',
    'taper',
    'theft',
    'churn',
    'satin',
    'slots',
    'taxed',
    'bully',
    'sloth',
    'shale',
    'tread',
    'raked',
    'curds',
    'manor',
    'aisle',
    'bulge',
    'loins',
    'stair',
    'tapes',
    'leans',
    'bunks',
    'squat',
    'towed',
    'lance',
    'panes',
    'sakes',
    'heirs',
    'caste',
    'dummy',
    'pores',
    'fauna',
    'crook',
    'poise',
    'epoch',
    'risky',
    'warns',
    'fling',
    'berry',
    'grape',
    'flank',
    'drags',
    'squid',
    'pelts',
    'icing',
    'irony',
    'irons',
    'barks',
    'whoop',
    'choke',
    'diets',
    'whips',
    'tally',
    'dozed',
    'twine',
    'kites',
    'bikes',
    'ticks',
    'riots',
    'roars',
    'vault',
    'looms',
    'scold',
    'blink',
    'dandy',
    'pupae',
    'sieve',
    'spike',
    'ducts',
    'lends',
    'pizza',
    'brink',
    'widen',
    'plumb',
    'pagan',
    'feats',
    'bison',
    'soggy',
    'scoop',
    'argon',
    'nudge',
    'skiff',
    'amber',
    'sexes',
    'rouse',
    'salts',
    'hitch',
    'exalt',
    'leash',
    'dined',
    'chute',
    'snort',
    'gusts',
    'melon',
    'cheat',
    'reefs',
    'llama',
    'lasso',
    'debut',
    'quota',
    'oaths',
    'prone',
    'mixes',
    'rafts',
    'dives',
    'stale',
    'inlet',
    'flick',
    'pinto',
    'brows',
    'untie',
    'batch',
    'greed',
    'chore',
    'stirs',
    'blush',
    'onset',
    'barbs',
    'volts',
    'beige',
    'swoop',
    'paddy',
    'laced',
    'shove',
    'jerky',
    'poppy',
    'leaks',
    'fares',
    'dodge',
    'godly',
    'squaw',
    'affix',
    'brute',
    'nicer',
    'undue',
    'snarl',
    'merge',
    'doses',
    'showy',
    'daddy',
    'roost',
    'vases',
    'swirl',
    'petty',
    'colds',
    'curry',
    'cobra',
    'genie',
    'flare',
    'messy',
    'cores',
    'soaks',
    'ripen',
    'whine',
    'amino',
    'plaid',
    'spiny',
    'mowed',
    'baton',
    'peers',
    'vowed',
    'pious',
    'swans',
    'exits',
    'afoot',
    'plugs',
    'idiom',
    'chili',
    'rites',
    'serfs',
    'cleft',
    'berth',
    'grubs',
    'annex',
    'dizzy',
    'hasty',
    'latch',
    'wasps',
    'mirth',
    'baron',
    'plead',
    'aloof',
    'aging',
    'pixel',
    'bared',
    'mummy',
    'hotly',
    'auger',
    'buddy',
    'chaps',
    'badge',
    'stark',
    'fairs',
    'gully',
    'mumps',
    'emery',
    'filly',
    'ovens',
    'drone',
    'gauze',
    'idiot',
    'fussy',
    'annoy',
    'shank',
    'gouge',
    'bleed',
    'elves',
    'roped',
    'unfit',
    'baggy',
    'mower',
    'scant',
    'grabs',
    'fleas',
    'lousy',
    'album',
    'sawed',
    'cooky',
    'murky',
    'infer',
    'burly',
    'waged',
    'dingy',
    'brine',
    'kneel',
    'creak',
    'vanes',
    'smoky',
    'spurt',
    'combs',
    'easel',
    'laces',
    'humps',
    'rumor',
    'aroma',
    'horde',
    'swiss',
    'leapt',
    'opium',
    'slime',
    'afire',
    'pansy',
    'mares',
    'soaps',
    'husks',
    'snips',
    'hazel',
    'lined',
    'cafes',
    'naive',
    'wraps',
    'sized',
    'piers',
    'beset',
    'agile',
    'tongs',
    'steed',
    'fraud',
    'booty',
    'valor',
    'downy',
    'witty',
    'mossy',
    'psalm',
    'scuba',
    'tours',
    'polka',
    'milky',
    'gaudy',
    'shrug',
    'tufts',
    'wilds',
    'laser',
    'truss',
    'hares',
    'creed',
    'lilac',
    'siren',
    'tarry',
    'bribe',
    'swine',
    'muted',
    'flips',
    'cures',
    'sinew',
    'boxed',
    'hoops',
    'gasps',
    'hoods',
    'niche',
    'yucca',
    'glows',
    'sewer',
    'whack',
    'fuses',
    'gowns',
    'droop',
    'bucks',
    'pangs',
    'mails',
    'whisk',
    'haven',
    'clasp',
    'sling',
    'stint',
    'urges',
    'champ',
    'piety',
    'chirp',
    'pleat',
    'posse',
    'sunup',
    'menus',
    'howls',
    'quake',
    'knack',
    'plaza',
    'fiend',
    'caked',
    'bangs',
    'erupt',
    'poker',
    'olden',
    'cramp',
    'voter',
    'poses',
    'manly',
    'slump',
    'fined',
    'grips',
    'gaped',
    'purge',
    'hiked',
    'maize',
    'fluff',
    'strut',
    'sloop',
    'prowl',
    'roach',
    'cocks',
    'bland',
    'dials',
    'plume',
    'slaps',
    'soups',
    'dully',
    'wills',
    'foams',
    'solos',
    'skier',
    'eaves',
    'totem',
    'fused',
    'latex',
    'veils',
    'mused',
    'mains',
    'myrrh',
    'racks',
    'galls',
    'gnats',
    'bouts',
    'sisal',
    'shuts',
    'hoses',
    'dryly',
    'hover',
    'gloss',
    'seeps',
    'denim',
    'putty',
    'guppy',
    'leaky',
    'dusky',
    'filth',
    'oboes',
    'spans',
    'fowls',
    'adorn',
    'glaze',
    'haunt',
    'dares',
    'obeys',
    'bakes',
    'abyss',
    'smelt',
    'gangs',
    'aches',
    'trawl',
    'claps',
    'undid',
    'spicy',
    'hoist',
    'fades',
    'vicar',
    'acorn',
    'pussy',
    'gruff',
    'musty',
    'tarts',
    'snuff',
    'hunch',
    'truce',
    'tweed',
    'dryer',
    'loser',
    'sheaf',
    'moles',
    'lapse',
    'tawny',
    'vexed',
    'autos',
    'wager',
    'domes',
    'sheen',
    'clang',
    'spade',
    'sowed',
    'broil',
    'slyly',
    'studs',
    'grunt',
    'donor',
    'slugs',
    'aspen',
    'homer',
    'croak',
    'tithe',
    'halts',
    'avert',
    'havoc',
    'hogan',
    'glint',
    'ruddy',
    'jeeps',
    'flaky',
    'ladle',
    'taunt',
    'snore',
    'fines',
    'props',
    'prune',
    'pesos',
    'radii',
    'pokes',
    'tiled',
    'daisy',
    'heron',
    'villa',
    'farce',
    'binds',
    'cites',
    'fixes',
    'jerks',
    'livid',
    'waked',
    'inked',
    'booms',
    'chews',
    'licks',
    'hyena',
    'scoff',
    'lusty',
    'sonic',
    'smith',
    'usher',
    'tucks',
    'vigil',
    'molts',
    'sects',
    'spars',
    'dumps',
    'scaly',
    'wisps',
    'sores',
    'mince',
    'panda',
    'flier',
    'axles',
    'plied',
    'booby',
    'patio',
    'rabbi',
    'petal',
    'polyp',
    'tints',
    'grate',
    'troll',
    'tolls',
    'relic',
    'phony',
    'bleat',
    'flaws',
    'flake',
    'snags',
    'aptly',
    'drawl',
    'ulcer',
    'soapy',
    'bossy',
    'monks',
    'crags',
    'caged',
    'twang',
    'diner',
    'taped',
    'cadet',
    'grids',
    'spawn',
    'guile',
    'noose',
    'mores',
    'girth',
    'slimy',
    'aides',
    'spasm',
    'burrs',
    'alibi',
    'lymph',
    'saucy',
    'muggy',
    'liter',
    'joked',
    'goofy',
    'exams',
    'enact',
    'stork',
    'lured',
    'toxic',
    'omens',
    'nears',
    'covet',
    'wrung',
    'forum',
    'venom',
    'moody',
    'alder',
    'sassy',
    'flair',
    'guild',
    'prays',
    'wrens',
    'hauls',
    'stave',
    'tilts',
    'pecks',
    'stomp',
    'gales',
    'tempt',
    'capes',
    'mesas',
    'omits',
    'tepee',
    'harry',
    'wring',
    'evoke',
    'limes',
    'cluck',
    'lunge',
    'highs',
    'canes',
    'giddy',
    'lithe',
    'verge',
    'khaki',
    'queue',
    'loath',
    'foyer',
    'outdo',
    'fared',
    'deter',
    'crumb',
    'astir',
    'spire',
    'jumpy',
    'extol',
    'buoys',
    'stubs',
    'lucid',
    'thong',
    'afore',
    'whiff',
    'maxim',
    'hulls',
    'clogs',
    'slats',
    'jiffy',
    'arbor',
    'cinch',
    'igloo',
    'goody',
    'gazes',
    'dowel',
    'calms',
    'bitch',
    'scowl',
    'gulps',
    'coded',
    'waver',
    'mason',
    'lobes',
    'ebony',
    'flail',
    'isles',
    'clods',
    'dazed',
    'adept',
    'oozed',
    'sedan',
    'clays',
    'warts',
    'ketch',
    'skunk',
    'manes',
    'adore',
    'sneer',
    'mango',
    'fiord',
    'flora',
    'roomy',
    'minks',
    'thaws',
    'watts',
    'freer',
    'exult',
    'plush',
    'paled',
    'twain',
    'clink',
    'scamp',
    'pawed',
    'grope',
    'bravo',
    'gable',
    'stink',
    'sever',
    'waned',
    'rarer',
    'regal',
    'wards',
    'fawns',
    'babes',
    'unify',
    'amend',
    'oaken',
    'glade',
    'visor',
    'hefty',
    'nines',
    'throb',
    'pecan',
    'butts',
    'pence',
    'sills',
    'jails',
    'flyer',
    'saber',
    'nomad',
    'miter',
    'beeps',
    'domed',
    'gulfs',
    'curbs',
    'heath',
    'moors',
    'aorta',
    'larks',
    'tangy',
    'wryly',
    'cheep',
    'rages',
    'evade',
    'lures',
    'freak',
    'vogue',
    'tunic',
    'slams',
    'knits',
    'dumpy',
    'mania',
    'spits',
    'firth',
    'hikes',
    'trots',
    'nosed',
    'clank',
    'dogma',
    'bloat',
    'balsa',
    'graft',
    'middy',
    'stile',
    'keyed',
    'finch',
    'sperm',
    'chaff',
    'wiles',
    'amigo',
    'copra',
    'amiss',
    'eying',
    'twirl',
    'lurch',
    'popes',
    'chins',
    'smock',
    'tines',
    'guise',
    'grits',
    'junks',
    'shoal',
    'cache',
    'tapir',
    'atoll',
    'deity',
    'toils',
    'spree',
    'mocks',
    'scans',
    'shorn',
    'revel',
    'raven',
    'hoary',
    'reels',
    'scuff',
    'mimic',
    'weedy',
    'corny',
    'truer',
    'rouge',
    'ember',
    'floes',
    'torso',
    'wipes',
    'edict',
    'sulky',
    'recur',
    'groin',
    'baste',
    'kinks',
    'surer',
    'piggy',
    'moldy',
    'franc',
    'liars',
    'inept',
    'gusty',
    'facet',
    'jetty',
    'equip',
    'leper',
    'slink',
    'soars',
    'cater',
    'dowry',
    'sided',
    'yearn',
    'decoy',
    'taboo',
    'ovals',
    'heals',
    'pleas',
    'beret',
    'spilt',
    'gayly',
    'rover',
    'endow',
    'pygmy',
    'carat',
    'abbey',
    'vents',
    'waken',
    'chimp',
    'fumed',
    'sodas',
    'vinyl',
    'clout',
    'wades',
    'mites',
    'smirk',
    'bores',
    'bunny',
    'surly',
    'frock',
    'foray',
    'purer',
    'milks',
    'query',
    'mired',
    'blare',
    'froth',
    'gruel',
    'navel',
    'paler',
    'puffy',
    'casks',
    'grime',
    'derby',
    'mamma',
    'gavel',
    'teddy',
    'vomit',
    'moans',
    'allot',
    'defer',
    'wield',
    'viper',
    'louse',
    'erred',
    'hewed',
    'abhor',
    'wrest',
    'waxen',
    'adage',
    'ardor',
    'stabs',
    'pored',
    'rondo',
    'loped',
    'fishy',
    'bible',
    'hires',
    'foals',
    'feuds',
    'jambs',
    'thuds',
    'jeers',
    'knead',
    'quirk',
    'rugby',
    'expel',
    'greys',
    'rigor',
    'ester',
    'lyres',
    'aback',
    'glues',
    'lotus',
    'lurid',
    'rungs',
    'hutch',
    'thyme',
    'valet',
    'tommy',
    'yokes',
    'epics',
    'trill',
    'pikes',
    'ozone',
    'caper',
    'chime',
    'frees',
    'famed',
    'leech',
    'smite',
    'neigh',
    'erode',
    'robed',
    'hoard',
    'salve',
    'conic',
    'gawky',
    'craze',
    'jacks',
    'gloat',
    'mushy',
    'rumps',
    'fetus',
    'wince',
    'pinks',
    'shalt',
    'toots',
    'glens',
    'cooed',
    'rusts',
    'stews',
    'shred',
    'parka',
    'chugs',
    'winks',
    'clots',
    'shrew',
    'booed',
    'filmy',
    'juror',
    'dents',
    'gummy',
    'grays',
    'hooky',
    'butte',
    'dogie',
    'poled',
    'reams',
    'fifes',
    'spank',
    'gayer',
    'tepid',
    'spook',
    'taint',
    'flirt',
    'rogue',
    'spiky',
    'opals',
    'miser',
    'cocky',
    'coyly',
    'balmy',
    'slosh',
    'brawl',
    'aphid',
    'faked',
    'hydra',
    'brags',
    'chide',
    'yanks',
    'allay',
    'video',
    'altos',
    'eases',
    'meted',
    'chasm',
    'longs',
    'excel',
    'taffy',
    'impel',
    'savor',
    'koala',
    'quays',
    'dawns',
    'proxy',
    'clove',
    'duets',
    'dregs',
    'tardy',
    'briar',
    'grimy',
    'ultra',
    'meaty',
    'halve',
    'wails',
    'suede',
    'mauve',
    'envoy',
    'arson',
    'coves',
    'gooey',
    'brews',
    'sofas',
    'chums',
    'amaze',
    'zooms',
    'abbot',
    'halos',
    'scour',
    'suing',
    'cribs',
    'sagas',
    'enema',
    'wordy',
    'harps',
    'coupe',
    'molar',
    'flops',
    'weeps',
    'mints',
    'ashen',
    'felts',
    'askew',
    'munch',
    'mewed',
    'divan',
    'vices',
    'jumbo',
    'blobs',
    'blots',
    'spunk',
    'acrid',
    'topaz',
    'cubed',
    'clans',
    'flees',
    'slurs',
    'gnaws',
    'welds',
    'fords',
    'emits',
    'agate',
    'pumas',
    'mends',
    'darks',
    'dukes',
    'plies',
    'canny',
    'hoots',
    'oozes',
    'lamed',
    'fouls',
    'clefs',
    'nicks',
    'mated',
    'skims',
    'brunt',
    'tuber',
    'tinge',
    'fates',
    'ditty',
    'thins',
    'frets',
    'eider',
    'bayou',
    'mulch',
    'fasts',
    'amass',
    'damps',
    'morns',
    'friar',
    'palsy',
    'vista',
    'croon',
    'conch',
    'udder',
    'tacos',
    'skits',
    'mikes',
    'quits',
    'preen',
    'aster',
    'adder',
    'elegy',
    'pulpy',
    'scows',
    'baled',
    'hovel',
    'lavas',
    'crave',
    'optic',
    'welts',
    'busts',
    'knave',
    'razed',
    'shins',
    'totes',
    'scoot',
    'dears',
    'crock',
    'mutes',
    'trims',
    'skein',
    'doted',
    'shuns',
    'veers',
    'fakes',
    'yoked',
    'wooed',
    'hacks',
    'sprig',
    'wands',
    'lulls',
    'seers',
    'snobs',
    'nooks',
    'pined',
    'perky',
    'mooed',
    'frill',
    'dines',
    'booze',
    'tripe',
    'prong',
    'drips',
    'odder',
    'levee',
    'antic',
    'sidle',
    'pithy',
    'corks',
    'yelps',
    'joker',
    'fleck',
    'buffs',
    'scram',
    'tiers',
    'bogey',
    'doled',
    'irate',
    'vales',
    'coped',
    'hails',
    'elude',
    'bulks',
    'aired',
    'vying',
    'stags',
    'strew',
    'cocci',
    'pacts',
    'scabs',
    'silos',
    'dusts',
    'yodel',
    'terse',
    'jaded',
    'baser',
    'jibes',
    'foils',
    'sways',
    'forgo',
    'slays',
    'preys',
    'treks',
    'quell',
    'peeks',
    'assay',
    'lurks',
    'eject',
    'boars',
    'trite',
    'belch',
    'gnash',
    'wanes',
    'lutes',
    'whims',
    'dosed',
    'chewy',
    'snipe',
    'umbra',
    'teems',
    'dozes',
    'kelps',
    'upped',
    'brawn',
    'doped',
    'shush',
    'rinds',
    'slush',
    'moron',
    'voile',
    'woken',
    'fjord',
    'sheik',
    'jests',
    'kayak',
    'slews',
    'toted',
    'saner',
    'drape',
    'patty',
    'raves',
    'sulfa',
    'grist',
    'skied',
    'vixen',
    'civet',
    'vouch',
    'tiara',
    'homey',
    'moped',
    'runts',
    'serge',
    'kinky',
    'rills',
    'corns',
    'brats',
    'pries',
    'amble',
    'fries',
    'loons',
    'tsars',
    'datum',
    'musky',
    'pigmy',
    'gnome',
    'ravel',
    'ovule',
    'icily',
    'liken',
    'lemur',
    'frays',
    'silts',
    'sifts',
    'plods',
    'ramps',
    'tress',
    'earls',
    'dudes',
    'waive',
    'karat',
    'jolts',
    'peons',
    'beers',
    'horny',
    'pales',
    'wreak',
    'lairs',
    'lynch',
    'stank',
    'swoon',
    'idler',
    'abort',
    'blitz',
    'ensue',
    'atone',
    'bingo',
    'roves',
    'kilts',
    'scald',
    'adios',
    'cynic',
    'dulls',
    'memos',
    'elfin',
    'dales',
    'peels',
    'peals',
    'bares',
    'sinus',
    'crone',
    'sable',
    'hinds',
    'shirk',
    'enrol',
    'wilts',
    'roams',
    'duped',
    'cysts',
    'mitts',
    'safes',
    'spats',
    'coops',
    'filet',
    'knell',
    'refit',
    'covey',
    'punks',
    'kilns',
    'fitly',
    'abate',
    'talcs',
    'heeds',
    'duels',
    'wanly',
    'ruffs',
    'gauss',
    'lapel',
    'jaunt',
    'whelp',
    'cleat',
    'gauzy',
    'dirge',
    'edits',
    'wormy',
    'moats',
    'smear',
    'prods',
    'bowel',
    'frisk',
    'vests',
    'bayed',
    'rasps',
    'tames',
    'delve',
    'embed',
    'befit',
    'wafer',
    'ceded',
    'novas',
    'feign',
    'spews',
    'larch',
    'huffs',
    'doles',
    'mamas',
    'hulks',
    'pried',
    'brims',
    'irked',
    'aspic',
    'swipe',
    'mealy',
    'skimp',
    'bluer',
    'slake',
    'dowdy',
    'penis',
    'brays',
    'pupas',
    'egret',
    'flunk',
    'phlox',
    'gripe',
    'peony',
    'douse',
    'blurs',
    'darns',
    'slunk',
    'lefts',
    'chats',
    'inane',
    'vials',
    'stilt',
    'rinks',
    'woofs',
    'wowed',
    'bongs',
    'frond',
    'ingot',
    'evict',
    'singe',
    'shyer',
    'flied',
    'slops',
    'dolts',
    'drool',
    'dells',
    'whelk',
    'hippy',
    'feted',
    'ether',
    'cocos',
    'hives',
    'jibed',
    'mazes',
    'trios',
    'sirup',
    'squab',
    'laths',
    'leers',
    'pasta',
    'rifts',
    'lopes',
    'alias',
    'whirs',
    'diced',
    'slags',
    'lodes',
    'foxed',
    'idled',
    'prows',
    'plait',
    'malts',
    'chafe',
    'cower',
    'toyed',
    'chefs',
    'keels',
    'sties',
    'racer',
    'etude',
    'sucks',
    'sulks',
    'micas',
    'czars',
    'copse',
    'ailed',
    'abler',
    'rabid',
    'golds',
    'croup',
    'snaky',
    'visas',
    'palls',
    'mopes',
    'boned',
    'wispy',
    'raved',
    'swaps',
    'junky',
    'doily',
    'pawns',
    'tamer',
    'poach',
    'baits',
    'damns',
    'gumbo',
    'daunt',
    'prank',
    'hunks',
    'buxom',
    'heres',
    'honks',
    'stows',
    'unbar',
    'idles',
    'routs',
    'sages',
    'goads',
    'remit',
    'copes',
    'deign',
    'culls',
    'girds',
    'haves',
    'lucks',
    'stunk',
    'dodos',
    'shams',
    'snubs',
    'icons',
    'usurp',
    'dooms',
    'hells',
    'soled',
    'comas',
    'paves',
    'maths',
    'perks',
    'limps',
    'wombs',
    'blurb',
    'daubs',
    'cokes',
    'sours',
    'stuns',
    'cased',
    'musts',
    'coeds',
    'cowed',
    'aping',
    'zoned',
    'rummy',
    'fetes',
    'skulk',
    'quaff',
    'rajah',
    'deans',
    'reaps',
    'galas',
    'tills',
    'roved',
    'kudos',
    'toned',
    'pared',
    'scull',
    'vexes',
    'punts',
    'snoop',
    'bails',
    'dames',
    'hazes',
    'lores',
    'marts',
    'voids',
    'ameba',
    'rakes',
    'adzes',
    'harms',
    'rears',
    'satyr',
    'swill',
    'hexes',
    'colic',
    'leeks',
    'hurls',
    'yowls',
    'ivies',
    'plops',
    'musks',
    'papaw',
    'jells',
    'bused',
    'cruet',
    'bided',
    'filch',
    'zests',
    'rooks',
    'laxly',
    'rends',
    'loams',
    'basks',
    'sires',
    'carps',
    'pokey',
    'flits',
    'muses',
    'bawls',
    'shuck',
    'viler',
    'lisps',
    'peeps',
    'sorer',
    'lolls',
    'prude',
    'diked',
    'floss',
    'flogs',
    'scums',
    'dopes',
    'bogie',
    'pinky',
    'leafs',
    'tubas',
    'scads',
    'lowed',
    'yeses',
    'biked',
    'qualm',
    'evens',
    'caned',
    'gawks',
    'whits',
    'wooly',
    'gluts',
    'romps',
    'bests',
    'dunce',
    'crony',
    'joist',
    'tunas',
    'boner',
    'malls',
    'parch',
    'avers',
    'crams',
    'pares',
    'dally',
    'bigot',
    'kales',
    'flays',
    'leach',
    'gushy',
    'pooch',
    'huger',
    'slyer',
    'golfs',
    'mires',
    'flues',
    'loafs',
    'arced',
    'acnes',
    'neons',
    'fiefs',
    'dints',
    'dazes',
    'pouts',
    'cored',
    'yules',
    'lilts',
    'beefs',
    'mutts',
    'fells',
    'cowls',
    'spuds',
    'lames',
    'jawed',
    'dupes',
    'deads',
    'bylaw',
    'noons',
    'nifty',
    'clued',
    'vireo',
    'gapes',
    'metes',
    'cuter',
    'maims',
    'droll',
    'cupid',
    'mauls',
    'sedge',
    'papas',
    'wheys',
    'eking',
    'loots',
    'hilts',
    'meows',
    'beaus',
    'dices',
    'peppy',
    'riper',
    'fogey',
    'gists',
    'yogas',
    'gilts',
    'skews',
    'cedes',
    'zeals',
    'alums',
    'okays',
    'elope',
    'grump',
    'wafts',
    'soots',
    'blimp',
    'hefts',
    'mulls',
    'hosed',
    'cress',
    'doffs',
    'ruder',
    'pixie',
    'waifs',
    'ousts',
    'pucks',
    'biers',
    'gulch',
    'suets',
    'hobos',
    'lints',
    'brans',
    'teals',
    'garbs',
    'pewee',
    'helms',
    'turfs',
    'quips',
    'wends',
    'banes',
    'napes',
    'icier',
    'swats',
    'bagel',
    'hexed',
    'ogres',
    'goner',
    'gilds',
    'pyres',
    'lards',
    'bides',
    'paged',
    'talon',
    'flout',
    'medic',
    'veals',
    'putts',
    'dirks',
    'dotes',
    'tippy',
    'blurt',
    'piths',
    'acing',
    'barer',
    'whets',
    'gaits',
    'wools',
    'dunks',
    'heros',
    'swabs',
    'dirts',
    'jutes',
    'hemps',
    'surfs',
    'okapi',
    'chows',
    'shoos',
    'dusks',
    'parry',
    'decal',
    'furls',
    'cilia',
    'sears',
    'novae',
    'murks',
    'warps',
    'slues',
    'lamer',
    'saris',
    'weans',
    'purrs',
    'dills',
    'togas',
    'newts',
    'meany',
    'bunts',
    'razes',
    'goons',
    'wicks',
    'ruses',
    'vends',
    'geode',
    'drake',
    'judos',
    'lofts',
    'pulps',
    'lauds',
    'mucks',
    'vises',
    'mocha',
    'oiled',
    'roman',
    'ethyl',
    'gotta',
    'fugue',
    'smack',
    'gourd',
    'bumpy',
    'radix',
    'fatty',
    'borax',
    'cubit',
    'cacti',
    'gamma',
    'focal',
    'avail',
    'papal',
    'golly',
    'elite',
    'versa',
    'billy',
    'adieu',
    'annum',
    'howdy',
    'rhino',
    'norms',
    'bobby',
    'axiom',
    'setup',
    'yolks',
    'terns',
    'mixer',
    'genre',
    'knoll',
    'abode',
    'junta',
    'gorge',
    'combo',
    'alpha',
    'overt',
    'kinda',
    'spelt',
    'prick',
    'nobly',
    'ephod',
    'audio',
    'modal',
    'veldt',
    'warty',
    'fluke',
    'bonny',
    'bream',
    'rosin',
    'bolls',
    'doers',
    'downs',
    'beady',
    'motif',
    'humph',
    'fella',
    'mould',
    'crepe',
    'kerns',
    'aloha',
    'glyph',
    'azure',
    'riser',
    'blest',
    'locus',
    'lumpy',
    'beryl',
    'wanna',
    'brier',
    'tuner',
    'rowdy',
    'mural',
    'timer',
    'canst',
    'krill',
    'quoth',
    'lemme',
    'triad',
    'tenon',
    'amply',
    'deeps',
    'padre',
    'leant',
    'pacer',
    'octal',
    'dolly',
    'trans',
    'sumac',
    'foamy',
    'lolly',
    'giver',
    'quipu',
    'codex',
    'manna',
    'unwed',
    'vodka',
    'ferny',
    'salon',
    'duple',
    'boron',
    'revue',
    'crier',
    'alack',
    'inter',
    'dilly',
    'whist',
    'cults',
    'spake',
    'reset',
    'loess',
    'decor',
    'mover',
    'verve',
    'ethic',
    'gamut',
    'lingo',
    'dunno',
    'align',
    'sissy',
    'incur',
    'reedy',
    'avant',
    'piper',
    'waxer',
    'calyx',
    'basil',
    'coons',
    'seine',
    'piney',
    'lemma',
    'trams',
    'winch',
    'whirr',
    'saith',
    'ionic',
    'heady',
    'harem',
    'tummy',
    'sally',
    'shied',
    'dross',
    'farad',
    'saver',
    'tilde',
    'jingo',
    'bower',
    'serif',
    'facto',
    'belle',
    'inset',
    'bogus',
    'caved',
    'forte',
    'sooty',
    'bongo',
    'toves',
    'credo',
    'basal',
    'yella',
    'aglow',
    'glean',
    'gusto',
    'hymen',
    'ethos',
    'terra',
    'brash',
    'scrip',
    'swash',
    'aleph',
    'tinny',
    'itchy',
    'wanta',
    'trice',
    'jowls',
    'gongs',
    'garde',
    'boric',
    'twill',
    'sower',
    'henry',
    'awash',
    'libel',
    'spurn',
    'sabre',
    'rebut',
    'penal',
    'obese',
    'sonny',
    'quirt',
    'mebbe',
    'tacit',
    'greek',
    'xenon',
    'hullo',
    'pique',
    'roger',
    'negro',
    'hadst',
    'gecko',
    'beget',
    'uncut',
    'aloes',
    'louis',
    'quint',
    'clunk',
    'raped',
    'salvo',
    'diode',
    'matey',
    'hertz',
    'xylem',
    'kiosk',
    'apace',
    'cawed',
    'peter',
    'wench',
    'cohos',
    'sorta',
    'gamba',
    'bytes',
    'tango',
    'nutty',
    'axial',
    'aleck',
    'natal',
    'clomp',
    'gored',
    'siree',
    'bandy',
    'gunny',
    'runic',
    'whizz',
    'rupee',
    'fated',
    'wiper',
    'bards',
    'briny',
    'staid',
    'hocks',
    'ochre',
    'yummy',
    'gents',
    'soupy',
    'roper',
    'swath',
    'cameo',
    'edger',
    'spate',
    'gimme',
    'ebbed',
    'breve',
    'theta',
    'deems',
    'dykes',
    'servo',
    'telly',
    'tabby',
    'tares',
    'blocs',
    'welch',
    'ghoul',
    'vitae',
    'cumin',
    'dinky',
    'bronc',
    'tabor',
    'teeny',
    'comer',
    'borer',
    'sired',
    'privy',
    'mammy',
    'deary',
    'gyros',
    'sprit',
    'conga',
    'quire',
    'thugs',
    'furor',
    'bloke',
    'runes',
    'bawdy',
    'cadre',
    'toxin',
    'annul',
    'egged',
    'anion',
    'nodes',
    'picky',
    'stein',
    'jello',
    'audit',
    'echos',
    'fagot',
    'letup',
    'eyrie',
    'fount',
    'caped',
    'axons',
    'amuck',
    'banal',
    'riled',
    'petit',
    'umber',
    'miler',
    'fibre',
    'agave',
    'bated',
    'bilge',
    'vitro',
    'feint',
    'pudgy',
    'mater',
    'manic',
    'umped',
    'pesky',
    'strep',
    'slurp',
    'pylon',
    'puree',
    'caret',
    'temps',
    'newel',
    'yawns',
    'seedy',
    'treed',
    'coups',
    'rangy',
    'brads',
    'mangy',
    'loner',
    'circa',
    'tibia',
    'afoul',
    'mommy',
    'titer',
    'carne',
    'kooky',
    'motes',
    'amity',
    'suave',
    'hippo',
    'curvy',
    'samba',
    'newsy',
    'anise',
    'imams',
    'tulle',
    'aways',
    'liven',
    'hallo',
    'wales',
    'opted',
    'canto',
    'idyll',
    'bodes',
    'curio',
    'wrack',
    'hiker',
    'chive',
    'yokel',
    'dotty',
    'demur',
    'cusps',
    'specs',
    'quads',
    'laity',
    'toner',
    'decry',
    'writs',
    'saute',
    'clack',
    'aught',
    'logos',
    'tipsy',
    'natty',
    'ducal',
    'bidet',
    'bulgy',
    'metre',
    'lusts',
    'unary',
    'goeth',
    'baler',
    'sited',
    'shies',
    'hasps',
    'brung',
    'holed',
    'swank',
    'looky',
    'melee',
    'huffy',
    'loamy',
    'pimps',
    'titan',
    'binge',
    'shunt',
    'femur',
    'libra',
    'seder',
    'honed',
    'annas',
    'coypu',
    'shims',
    'zowie',
    'jihad',
    'savvy',
    'nadir',
    'basso',
    'monic',
    'maned',
    'mousy',
    'omega',
    'laver',
    'prima',
    'picas',
    'folio',
    'mecca',
    'reals',
    'troth',
    'testy',
    'balky',
    'crimp',
    'chink',
    'abets',
    'splat',
    'abaci',
    'vaunt',
    'cutie',
    'pasty',
    'moray',
    'levis',
    'ratty',
    'islet',
    'joust',
    'motet',
    'viral',
    'nukes',
    'grads',
    'comfy',
    'voila',
    'woozy',
    'blued',
    'whomp',
    'sward',
    'metro',
    'skeet',
    'chine',
    'aerie',
    'bowie',
    'tubby',
    'emirs',
    'coati',
    'unzip',
    'slobs',
    'trike',
    'funky',
    'ducat',
    'dewey',
    'skoal',
    'wadis',
    'oomph',
    'taker',
    'minim',
    'getup',
    'stoic',
    'synod',
    'runty',
    'flyby',
    'braze',
    'inlay',
    'venue',
    'louts',
    'peaty',
    'orlon',
    'humpy',
    'radon',
    'beaut',
    'raspy',
    'unfed',
    'crick',
    'nappy',
    'vizor',
    'yipes',
    'rebus',
    'divot',
    'kiwis',
    'vetch',
    'squib',
    'sitar',
    'kiddo',
    'dyers',
    'cotta',
    'matzo',
    'lager',
    'zebus',
    'crass',
    'dacha',
    'kneed',
    'dicta',
    'fakir',
    'knurl',
    'runny',
    'unpin',
    'julep',
    'globs',
    'nudes',
    'sushi',
    'tacky',
    'stoke',
    'kaput',
    'butch',
    'hulas',
    'croft',
    'achoo',
    'genii',
    'nodal',
    'outgo',
    'spiel',
    'viols',
    'fetid',
    'cagey',
    'fudgy',
    'epoxy',
    'leggy',
    'hanky',
    'lapis',
    'felon',
    'beefy',
    'coots',
    'melba',
    'caddy',
    'segue',
    'betel',
    'frizz',
    'drear',
    'kooks',
    'turbo'
];
let secret = wordList[0];
let currentAttempt = '';
let history = [];
function handleKeydown(e) {
    if (e.ctrlKey || e.altKey || e.metaKey) return;
    handleKey(e.key);
}
function handleKey(key) {
    if (history.length === 6) return;
    if (isAnimating) return;
    let letter = key.toLowerCase();
    if (letter === 'enter') {
        if (currentAttempt.length < 5) return;
        if (!wordList.includes(currentAttempt)) {
            alert('Not a valid word');
            return;
        }
        if (history.length === 5 && currentAttempt !== secret) alert(secret);
        history.push(currentAttempt);
        currentAttempt = '';
        updateKeyboard();
        saveGame();
        pauseInput();
    } else if (letter === 'backspace') currentAttempt = currentAttempt.slice(0, currentAttempt.length - 1);
    else if (/^[a-z]$/.test(letter)) {
        if (currentAttempt.length < 5) {
            currentAttempt += letter;
            animatePress(currentAttempt.length - 1);
        }
    }
    updateGrid();
}
let isAnimating = false;
function pauseInput() {
    if (isAnimating) throw Error('this should Never happen');
    isAnimating = true;
    setTimeout(()=>{
        isAnimating = false;
    }, 2000);
}
function buildGrid() {
    for(let i = 0; i < 6; i++){
        let row = document.createElement('div');
        for(let j = 0; j < 5; j++){
            let cell = document.createElement('div');
            cell.className = 'cell';
            let front = document.createElement('div');
            front.className = 'front';
            let back = document.createElement('div');
            back.className = 'back';
            let surface = document.createElement('div');
            surface.className = 'surface';
            surface.style.transitionDelay = j * 300 + 'ms';
            surface.appendChild(front);
            surface.appendChild(back);
            cell.appendChild(surface);
            row.appendChild(cell);
        }
        grid.appendChild(row);
    }
}
function updateGrid() {
    for(let i = 0; i < 6; i++){
        let row = grid.children[i];
        if (i < history.length) drawAttempt(row, history[i], true);
        else if (i === history.length) drawAttempt(row, currentAttempt, false);
        else drawAttempt(row, '', false);
    }
}
function drawAttempt(row, attempt, solved) {
    for(let i = 0; i < 5; i++){
        let cell = row.children[i];
        let surface = cell.firstChild;
        let front = surface.children[0];
        let back = surface.children[1];
        if (attempt[i] !== undefined) {
            front.textContent = attempt[i];
            back.textContent = attempt[i];
        // cell.textContent = attempt[i]
        } else {
            front.innerHTML = '<div style="opacity: 0">X</div>';
            back.innerHTML = '<div style="opacity: 0">X</div>';
            clearAnimation(cell);
        }
        front.style.backgroundColor = BLACK;
        front.style.borderColor = '';
        if (attempt[i] !== undefined) front.style.borderColor = MIDDLEGREY;
        back.style.backgroundColor = getBgColor(attempt, i);
        back.style.borderColor = getBgColor(attempt, i);
        if (solved) cell.classList.add('solved');
        else cell.classList.remove('solved');
    }
}
let BLACK = '#111';
let GREY = '#212121';
let MIDDLEGREY = '#666';
let LIGHTGREY = '#888';
let GREEN = '#538d4e';
let YELLOW = '#b59f3b';
function getBgColor(attempt, i) {
    let correctLetter = secret[i];
    let attemptLetter = attempt[i];
    if (attemptLetter === undefined || secret.indexOf(attemptLetter) === -1) return GREY;
    if (correctLetter === attemptLetter) return GREEN;
    return YELLOW;
}
// document.addEventListener('click', updateGrid);
function buildKeyboard() {
    buildKeyboardRow('qwertyuiop', false);
    buildKeyboardRow('asdfghjkl', false);
    buildKeyboardRow('zxcvbnm', true);
}
function buildKeyboardRow(letters, isLastRow) {
    let row = document.createElement('div');
    if (isLastRow) {
        let button = document.createElement('button');
        button.className = 'button';
        button.textContent = 'Enter';
        button.style.backgroundColor = LIGHTGREY;
        button.onClick = ()=>{
            handleKey('enter');
        };
        row.appendChild(button);
    }
    for (let letter of letters){
        let button = document.createElement('button');
        button.className = 'button';
        button.textContent = letter;
        button.style.backgroundColor = LIGHTGREY;
        button.onClick = ()=>{
            handleKey(letter);
        };
        keyboardButtons.set(letter, button);
        row.appendChild(button);
    }
    if (isLastRow) {
        let button = document.createElement('button');
        button.className = 'button';
        button.textContent = 'Backspace';
        button.style.backgroundColor = LIGHTGREY;
        button.onClick = ()=>{
            handleKey('backspace');
        };
        row.appendChild(button);
    }
    keyboard.appendChild(row);
}
function getBetterColor(a, b) {
    if (a === GREEN || b === GREEN) return GREEN;
    if (a === YELLOW || b === YELLOW) return YELLOW;
    return GREY;
}
function updateKeyboard() {
    let bestColors = new Map();
    for (let attempt of history)for(let i = 0; i < attempt.length; i++){
        let color = getBgColor(attempt, i);
        let key = attempt[i];
        let bestColor = bestColors.get(key);
        bestColors.set(key, getBetterColor(color, bestColor));
    }
    for (let [key, button] of keyboardButtons){
        button.style.backgroundColor = bestColors.get(key);
        button.style.borderColor = bestColors.get(key);
    }
}
function animatePress(index) {
    let rowIndex = history.length;
    let row = grid.children[rowIndex];
    let cell = row.children[index];
    cell.style.animationName = 'press';
    cell.style.animationDuration = '100ms';
    cell.style.animationTimingFunction = 'ease-out';
}
function clearAnimation(cell) {
    cell.style.animationName = '';
    cell.style.animationDuration = '';
    cell.style.animationTimingFunction = '';
}
function loadGame() {
    let data;
    try {
        data = JSON.parse(localStorage.getItem('data'));
    } catch  {
    }
    if (data != null) {
        if (data.secret === secret) history = data.history;
    }
}
function saveGame() {
    let data = JSON.stringify({
        secret,
        history
    });
    try {
        localStorage.setItem('data', data);
    } catch  {
    }
}
let grid = document.getElementById('grid');
let keyboard = document.getElementById('keyboard');
let keyboardButtons = new Map();
loadGame();
buildGrid();
buildKeyboard();
updateGrid();
updateKeyboard();
window.addEventListener('keydown', handleKeydown);

  $parcel$ReactRefreshHelpers$94e2.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"iTorj","react":"21dqq","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"iTorj":[function(require,module,exports) {
'use strict';
module.exports = require('./cjs/react-jsx-dev-runtime.development.js');

},{"./cjs/react-jsx-dev-runtime.development.js":"48uCM"}],"48uCM":[function(require,module,exports) {
/** @license React v17.0.2
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
(function() {
    var React = require('react');
    var _assign = require('object-assign');
    // ATTENTION
    // When adding new symbols to this file,
    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var REACT_ELEMENT_TYPE = 60103;
    var REACT_PORTAL_TYPE = 60106;
    exports.Fragment = 60107;
    var REACT_STRICT_MODE_TYPE = 60108;
    var REACT_PROFILER_TYPE = 60114;
    var REACT_PROVIDER_TYPE = 60109;
    var REACT_CONTEXT_TYPE = 60110;
    var REACT_FORWARD_REF_TYPE = 60112;
    var REACT_SUSPENSE_TYPE = 60113;
    var REACT_SUSPENSE_LIST_TYPE = 60120;
    var REACT_MEMO_TYPE = 60115;
    var REACT_LAZY_TYPE = 60116;
    var REACT_BLOCK_TYPE = 60121;
    var REACT_SERVER_BLOCK_TYPE = 60122;
    var REACT_FUNDAMENTAL_TYPE = 60117;
    var REACT_SCOPE_TYPE = 60119;
    var REACT_OPAQUE_ID_TYPE = 60128;
    var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
    var REACT_OFFSCREEN_TYPE = 60130;
    var REACT_LEGACY_HIDDEN_TYPE = 60131;
    if (typeof Symbol === 'function' && Symbol.for) {
        var symbolFor = Symbol.for;
        REACT_ELEMENT_TYPE = symbolFor('react.element');
        REACT_PORTAL_TYPE = symbolFor('react.portal');
        exports.Fragment = symbolFor('react.fragment');
        REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
        REACT_PROFILER_TYPE = symbolFor('react.profiler');
        REACT_PROVIDER_TYPE = symbolFor('react.provider');
        REACT_CONTEXT_TYPE = symbolFor('react.context');
        REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
        REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
        REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
        REACT_MEMO_TYPE = symbolFor('react.memo');
        REACT_LAZY_TYPE = symbolFor('react.lazy');
        REACT_BLOCK_TYPE = symbolFor('react.block');
        REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
        REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
        REACT_SCOPE_TYPE = symbolFor('react.scope');
        REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
        REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
        REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
        REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
    }
    var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator';
    function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || typeof maybeIterable !== 'object') return null;
        var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
        if (typeof maybeIterator === 'function') return maybeIterator;
        return null;
    }
    var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function error(format) {
        for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)args[_key2 - 1] = arguments[_key2];
        printWarning('error', format, args);
    }
    function printWarning(level, format, args) {
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        var stack = ReactDebugCurrentFrame.getStackAddendum();
        if (stack !== '') {
            format += '%s';
            args = args.concat([
                stack
            ]);
        }
        var argsWithFormat = args.map(function(item) {
            return '' + item;
        }); // Careful: RN currently depends on this prefix
        argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
        // breaks IE9: https://github.com/facebook/react/issues/13610
        // eslint-disable-next-line react-internal/no-production-logging
        Function.prototype.apply.call(console[level], console, argsWithFormat);
    }
    // Filter certain DOM attributes (e.g. src, href) if their values are empty strings.
    var enableScopeAPI = false; // Experimental Create Event Handle API.
    function isValidElementType(type) {
        if (typeof type === 'string' || typeof type === 'function') return true;
         // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).
        if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) return true;
        if (typeof type === 'object' && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) return true;
        }
        return false;
    }
    function getWrappedName(outerType, innerType, wrapperName) {
        var functionName = innerType.displayName || innerType.name || '';
        return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
    }
    function getContextName(type) {
        return type.displayName || 'Context';
    }
    function getComponentName(type) {
        if (type == null) // Host root, text node or just invalid type.
        return null;
        if (typeof type.tag === 'number') error("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue.");
        if (typeof type === 'function') return type.displayName || type.name || null;
        if (typeof type === 'string') return type;
        switch(type){
            case exports.Fragment:
                return 'Fragment';
            case REACT_PORTAL_TYPE:
                return 'Portal';
            case REACT_PROFILER_TYPE:
                return 'Profiler';
            case REACT_STRICT_MODE_TYPE:
                return 'StrictMode';
            case REACT_SUSPENSE_TYPE:
                return 'Suspense';
            case REACT_SUSPENSE_LIST_TYPE:
                return 'SuspenseList';
        }
        if (typeof type === 'object') switch(type.$$typeof){
            case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + '.Consumer';
            case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + '.Provider';
            case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, 'ForwardRef');
            case REACT_MEMO_TYPE:
                return getComponentName(type.type);
            case REACT_BLOCK_TYPE:
                return getComponentName(type._render);
            case REACT_LAZY_TYPE:
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                    return getComponentName(init(payload));
                } catch (x) {
                    return null;
                }
        }
        return null;
    }
    // Helpers to patch console.logs to avoid logging during side-effect free
    // replaying on render function. This currently only patches the object
    // lazily which won't cover if the log function was extracted eagerly.
    // We could also eagerly patch the method.
    var disabledDepth = 0;
    var prevLog;
    var prevInfo;
    var prevWarn;
    var prevError;
    var prevGroup;
    var prevGroupCollapsed;
    var prevGroupEnd;
    function disabledLog() {
    }
    disabledLog.__reactDisabledLog = true;
    function disableLogs() {
        if (disabledDepth === 0) {
            /* eslint-disable react-internal/no-production-logging */ prevLog = console.log;
            prevInfo = console.info;
            prevWarn = console.warn;
            prevError = console.error;
            prevGroup = console.group;
            prevGroupCollapsed = console.groupCollapsed;
            prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099
            var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
            }; // $FlowFixMe Flow thinks console is immutable.
            Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
            });
        /* eslint-enable react-internal/no-production-logging */ }
        disabledDepth++;
    }
    function reenableLogs() {
        disabledDepth--;
        if (disabledDepth === 0) {
            /* eslint-disable react-internal/no-production-logging */ var props = {
                configurable: true,
                enumerable: true,
                writable: true
            }; // $FlowFixMe Flow thinks console is immutable.
            Object.defineProperties(console, {
                log: _assign({
                }, props, {
                    value: prevLog
                }),
                info: _assign({
                }, props, {
                    value: prevInfo
                }),
                warn: _assign({
                }, props, {
                    value: prevWarn
                }),
                error: _assign({
                }, props, {
                    value: prevError
                }),
                group: _assign({
                }, props, {
                    value: prevGroup
                }),
                groupCollapsed: _assign({
                }, props, {
                    value: prevGroupCollapsed
                }),
                groupEnd: _assign({
                }, props, {
                    value: prevGroupEnd
                })
            });
        /* eslint-enable react-internal/no-production-logging */ }
        if (disabledDepth < 0) error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
    var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
    var prefix;
    function describeBuiltInComponentFrame(name, source, ownerFn) {
        if (prefix === undefined) // Extract the VM specific prefix used by each line.
        try {
            throw Error();
        } catch (x) {
            var match = x.stack.trim().match(/\n( *(at )?)/);
            prefix = match && match[1] || '';
        }
         // We use the prefix to ensure our stacks line up with native stack frames.
        return '\n' + prefix + name;
    }
    var reentry = false;
    var componentFrameCache;
    var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
    componentFrameCache = new PossiblyWeakMap();
    function describeNativeComponentFrame(fn, construct) {
        // If something asked for a stack inside a fake render, it should get ignored.
        if (!fn || reentry) return '';
        var frame = componentFrameCache.get(fn);
        if (frame !== undefined) return frame;
        var control;
        reentry = true;
        var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.
        Error.prepareStackTrace = undefined;
        var previousDispatcher;
        previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
        // for warnings.
        ReactCurrentDispatcher.current = null;
        disableLogs();
        try {
            // This should throw.
            if (construct) {
                // Something should be setting the props in the constructor.
                var Fake = function() {
                    throw Error();
                }; // $FlowFixMe
                Object.defineProperty(Fake.prototype, 'props', {
                    set: function() {
                        // We use a throwing setter instead of frozen or non-writable props
                        // because that won't throw in a non-strict mode function.
                        throw Error();
                    }
                });
                if (typeof Reflect === 'object' && Reflect.construct) {
                    // We construct a different control for this case to include any extra
                    // frames added by the construct call.
                    try {
                        Reflect.construct(Fake, []);
                    } catch (x) {
                        control = x;
                    }
                    Reflect.construct(fn, [], Fake);
                } else {
                    try {
                        Fake.call();
                    } catch (x) {
                        control = x;
                    }
                    fn.call(Fake.prototype);
                }
            } else {
                try {
                    throw Error();
                } catch (x) {
                    control = x;
                }
                fn();
            }
        } catch (sample) {
            // This is inlined manually because closure doesn't do it for us.
            if (sample && control && typeof sample.stack === 'string') {
                // This extracts the first frame from the sample that isn't also in the control.
                // Skipping one frame that we assume is the frame that calls the two.
                var sampleLines = sample.stack.split('\n');
                var controlLines = control.stack.split('\n');
                var s = sampleLines.length - 1;
                var c = controlLines.length - 1;
                while(s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c])// We expect at least one stack frame to be shared.
                // Typically this will be the root most one. However, stack frames may be
                // cut off due to maximum stack limits. In this case, one maybe cut off
                // earlier than the other. We assume that the sample is longer or the same
                // and there for cut off earlier. So we should find the root most frame in
                // the sample somewhere in the control.
                c--;
                for(; s >= 1 && c >= 0; s--, c--)// Next we find the first one that isn't the same which should be the
                // frame that called our sample function and the control.
                if (sampleLines[s] !== controlLines[c]) {
                    // In V8, the first line is describing the message but other VMs don't.
                    // If we're about to return the first line, and the control is also on the same
                    // line, that's a pretty good indicator that our sample threw at same line as
                    // the control. I.e. before we entered the sample frame. So we ignore this result.
                    // This can happen if you passed a class to function component, or non-function.
                    if (s !== 1 || c !== 1) do {
                        s--;
                        c--; // We may still have similar intermediate frames from the construct call.
                        // The next one that isn't the same should be our match though.
                        if (c < 0 || sampleLines[s] !== controlLines[c]) {
                            // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                            var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');
                            if (typeof fn === 'function') componentFrameCache.set(fn, _frame);
                            return _frame;
                        }
                    }while (s >= 1 && c >= 0)
                    break;
                }
            }
        } finally{
            reentry = false;
            ReactCurrentDispatcher.current = previousDispatcher;
            reenableLogs();
            Error.prepareStackTrace = previousPrepareStackTrace;
        } // Fallback to just using the name if we couldn't make it throw.
        var name = fn ? fn.displayName || fn.name : '';
        var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
        if (typeof fn === 'function') componentFrameCache.set(fn, syntheticFrame);
        return syntheticFrame;
    }
    function describeFunctionComponentFrame(fn, source, ownerFn) {
        return describeNativeComponentFrame(fn, false);
    }
    function shouldConstruct(Component) {
        var prototype = Component.prototype;
        return !!(prototype && prototype.isReactComponent);
    }
    function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
        if (type == null) return '';
        if (typeof type === 'function') return describeNativeComponentFrame(type, shouldConstruct(type));
        if (typeof type === 'string') return describeBuiltInComponentFrame(type);
        switch(type){
            case REACT_SUSPENSE_TYPE:
                return describeBuiltInComponentFrame('Suspense');
            case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame('SuspenseList');
        }
        if (typeof type === 'object') switch(type.$$typeof){
            case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
            case REACT_MEMO_TYPE:
                // Memo may contain any component type so we recursively resolve it.
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
            case REACT_BLOCK_TYPE:
                return describeFunctionComponentFrame(type._render);
            case REACT_LAZY_TYPE:
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                    // Lazy may contain any component type so we recursively resolve it.
                    return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
        }
        return '';
    }
    var loggedTypeFailures = {
    };
    var ReactDebugCurrentFrame1 = ReactSharedInternals.ReactDebugCurrentFrame;
    function setCurrentlyValidatingElement(element) {
        if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            ReactDebugCurrentFrame1.setExtraStackFrame(stack);
        } else ReactDebugCurrentFrame1.setExtraStackFrame(null);
    }
    function checkPropTypes(typeSpecs, values, location, componentName, element) {
        // $FlowFixMe This is okay but Flow doesn't know it.
        var has = Function.call.bind(Object.prototype.hasOwnProperty);
        for(var typeSpecName in typeSpecs)if (has(typeSpecs, typeSpecName)) {
            var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
            // fail the render phase where it didn't fail before. So we log it.
            // After these have been cleaned up, we'll let them throw.
            try {
                // This is intentionally an invariant that gets caught. It's the same
                // behavior as without this statement except with a better message.
                if (typeof typeSpecs[typeSpecName] !== 'function') {
                    var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                    err.name = 'Invariant Violation';
                    throw err;
                }
                error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
            } catch (ex) {
                error$1 = ex;
            }
            if (error$1 && !(error$1 instanceof Error)) {
                setCurrentlyValidatingElement(element);
                error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || 'React class', location, typeSpecName, typeof error$1);
                setCurrentlyValidatingElement(null);
            }
            if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                // Only monitor this failure once because there tends to be a lot of the
                // same error.
                loggedTypeFailures[error$1.message] = true;
                setCurrentlyValidatingElement(element);
                error('Failed %s type: %s', location, error$1.message);
                setCurrentlyValidatingElement(null);
            }
        }
    }
    var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var RESERVED_PROPS = {
        key: true,
        ref: true,
        __self: true,
        __source: true
    };
    var specialPropKeyWarningShown;
    var specialPropRefWarningShown;
    var didWarnAboutStringRefs;
    didWarnAboutStringRefs = {
    };
    function hasValidRef(config) {
        if (hasOwnProperty.call(config, 'ref')) {
            var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
            if (getter && getter.isReactWarning) return false;
        }
        return config.ref !== undefined;
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, 'key')) {
            var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
            if (getter && getter.isReactWarning) return false;
        }
        return config.key !== undefined;
    }
    function warnIfStringRefCannotBeAutoConverted(config, self) {
        if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
            var componentName = getComponentName(ReactCurrentOwner.current.type);
            if (!didWarnAboutStringRefs[componentName]) {
                error("Component \"%s\" contains the string ref \"%s\". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref", getComponentName(ReactCurrentOwner.current.type), config.ref);
                didWarnAboutStringRefs[componentName] = true;
            }
        }
    }
    function defineKeyPropWarningGetter(props, displayName) {
        var warnAboutAccessingKey = function() {
            if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
            }
        };
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, 'key', {
            get: warnAboutAccessingKey,
            configurable: true
        });
    }
    function defineRefPropWarningGetter(props, displayName) {
        var warnAboutAccessingRef = function() {
            if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
            }
        };
        warnAboutAccessingRef.isReactWarning = true;
        Object.defineProperty(props, 'ref', {
            get: warnAboutAccessingRef,
            configurable: true
        });
    }
    /**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */ var ReactElement = function(type, key, ref, self, source, owner, props) {
        var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type: type,
            key: key,
            ref: ref,
            props: props,
            // Record the component responsible for creating this element.
            _owner: owner
        };
        // The validation flag is currently mutative. We put it on
        // an external backing store so that we can freeze the whole object.
        // This can be replaced with a WeakMap once they are implemented in
        // commonly used development environments.
        element._store = {
        }; // To make comparing ReactElements easier for testing purposes, we make
        // the validation flag non-enumerable (where possible, which should
        // include every environment we run tests in), so the test framework
        // ignores it.
        Object.defineProperty(element._store, 'validated', {
            configurable: false,
            enumerable: false,
            writable: true,
            value: false
        }); // self and source are DEV only properties.
        Object.defineProperty(element, '_self', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: self
        }); // Two elements created in two different places should be considered
        // equal for testing purposes and therefore we hide it from enumeration.
        Object.defineProperty(element, '_source', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: source
        });
        if (Object.freeze) {
            Object.freeze(element.props);
            Object.freeze(element);
        }
        return element;
    };
    /**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */ function jsxDEV(type, config, maybeKey, source, self) {
        var propName; // Reserved names are extracted
        var props = {
        };
        var key = null;
        var ref = null; // Currently, key can be spread in as a prop. This causes a potential
        // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
        // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
        // but as an intermediary step, we will use jsxDEV for everything except
        // <div {...props} key="Hi" />, because we aren't currently able to tell if
        // key is explicitly declared to be undefined or not.
        if (maybeKey !== undefined) key = '' + maybeKey;
        if (hasValidKey(config)) key = '' + config.key;
        if (hasValidRef(config)) {
            ref = config.ref;
            warnIfStringRefCannotBeAutoConverted(config, self);
        } // Remaining properties are added to a new props object
        for(propName in config)if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) props[propName] = config[propName];
         // Resolve default props
        if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for(propName in defaultProps)if (props[propName] === undefined) props[propName] = defaultProps[propName];
        }
        if (key || ref) {
            var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
            if (key) defineKeyPropWarningGetter(props, displayName);
            if (ref) defineRefPropWarningGetter(props, displayName);
        }
        return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
    }
    var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
    var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
    function setCurrentlyValidatingElement$1(element) {
        if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
        } else ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
    var propTypesMisspellWarningShown;
    propTypesMisspellWarningShown = false;
    /**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */ function isValidElement(object) {
        return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function getDeclarationErrorAddendum() {
        if (ReactCurrentOwner$1.current) {
            var name = getComponentName(ReactCurrentOwner$1.current.type);
            if (name) return '\n\nCheck the render method of `' + name + '`.';
        }
        return '';
    }
    function getSourceInfoErrorAddendum(source) {
        if (source !== undefined) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, '');
            var lineNumber = source.lineNumber;
            return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
        }
        return '';
    }
    /**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */ var ownerHasKeyUseWarning = {
    };
    function getCurrentComponentErrorInfo(parentType) {
        var info = getDeclarationErrorAddendum();
        if (!info) {
            var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
            if (parentName) info = "\n\nCheck the top-level render call using <" + parentName + ">.";
        }
        return info;
    }
    /**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */ function validateExplicitKey(element, parentType) {
        if (!element._store || element._store.validated || element.key != null) return;
        element._store.validated = true;
        var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
        if (ownerHasKeyUseWarning[currentComponentErrorInfo]) return;
        ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
        // property, it may be the creator of the child that's responsible for
        // assigning it a key.
        var childOwner = '';
        if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) // Give the component that originally created this child.
        childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
        setCurrentlyValidatingElement$1(element);
        error("Each child in a list should have a unique \"key\" prop.%s%s See https://reactjs.org/link/warning-keys for more information.", currentComponentErrorInfo, childOwner);
        setCurrentlyValidatingElement$1(null);
    }
    /**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */ function validateChildKeys(node, parentType) {
        if (typeof node !== 'object') return;
        if (Array.isArray(node)) for(var i = 0; i < node.length; i++){
            var child = node[i];
            if (isValidElement(child)) validateExplicitKey(child, parentType);
        }
        else if (isValidElement(node)) // This element was passed in a valid location.
        {
            if (node._store) node._store.validated = true;
        } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === 'function') // Entry iterators used to provide implicit keys,
            // but now we print a separate warning for them later.
            {
                if (iteratorFn !== node.entries) {
                    var iterator = iteratorFn.call(node);
                    var step;
                    while(!(step = iterator.next()).done)if (isValidElement(step.value)) validateExplicitKey(step.value, parentType);
                }
            }
        }
    }
    /**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */ function validatePropTypes(element) {
        var type = element.type;
        if (type === null || type === undefined || typeof type === 'string') return;
        var propTypes;
        if (typeof type === 'function') propTypes = type.propTypes;
        else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Inner props are checked in the reconciler.
        type.$$typeof === REACT_MEMO_TYPE)) propTypes = type.propTypes;
        else return;
        if (propTypes) {
            // Intentionally inside to avoid triggering lazy initializers:
            var name = getComponentName(type);
            checkPropTypes(propTypes, element.props, 'prop', name, element);
        } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
            propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:
            var _name = getComponentName(type);
            error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
        }
        if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
    /**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */ function validateFragmentProps(fragment) {
        var keys = Object.keys(fragment.props);
        for(var i = 0; i < keys.length; i++){
            var key = keys[i];
            if (key !== 'children' && key !== 'key') {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
            }
        }
        if (fragment.ref !== null) {
            setCurrentlyValidatingElement$1(fragment);
            error('Invalid attribute `ref` supplied to `React.Fragment`.');
            setCurrentlyValidatingElement$1(null);
        }
    }
    function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
        var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
        // succeed and there will likely be errors in render.
        if (!validType) {
            var info = '';
            if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            var sourceInfo = getSourceInfoErrorAddendum(source);
            if (sourceInfo) info += sourceInfo;
            else info += getDeclarationErrorAddendum();
            var typeString;
            if (type === null) typeString = 'null';
            else if (Array.isArray(type)) typeString = 'array';
            else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
                info = ' Did you accidentally export a JSX literal instead of a component?';
            } else typeString = typeof type;
            error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
        }
        var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
        // TODO: Drop this when these are no longer allowed as the type argument.
        if (element == null) return element;
         // Skip key warning if the type isn't valid since our key validation logic
        // doesn't expect a non-string/function type and can throw confusing errors.
        // We don't want exception behavior to differ between dev and prod.
        // (Rendering will throw with a helpful message and as soon as the type is
        // fixed, the key warnings will appear.)
        if (validType) {
            var children = props.children;
            if (children !== undefined) {
                if (isStaticChildren) {
                    if (Array.isArray(children)) {
                        for(var i = 0; i < children.length; i++)validateChildKeys(children[i], type);
                        if (Object.freeze) Object.freeze(children);
                    } else error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                } else validateChildKeys(children, type);
            }
        }
        if (type === exports.Fragment) validateFragmentProps(element);
        else validatePropTypes(element);
        return element;
    } // These two functions exist to still get child warnings in dev
    var jsxDEV$1 = jsxWithValidation;
    exports.jsxDEV = jsxDEV$1;
})();

},{"react":"21dqq","object-assign":"7OXxh"}],"21dqq":[function(require,module,exports) {
'use strict';
module.exports = require('./cjs/react.development.js');

},{"./cjs/react.development.js":"6YvXz"}],"6YvXz":[function(require,module,exports) {
/** @license React v17.0.2
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
(function() {
    var _assign = require('object-assign');
    // TODO: this is special because it gets imported during build.
    var ReactVersion = '17.0.2';
    // ATTENTION
    // When adding new symbols to this file,
    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var REACT_ELEMENT_TYPE = 60103;
    var REACT_PORTAL_TYPE = 60106;
    exports.Fragment = 60107;
    exports.StrictMode = 60108;
    exports.Profiler = 60114;
    var REACT_PROVIDER_TYPE = 60109;
    var REACT_CONTEXT_TYPE = 60110;
    var REACT_FORWARD_REF_TYPE = 60112;
    exports.Suspense = 60113;
    var REACT_SUSPENSE_LIST_TYPE = 60120;
    var REACT_MEMO_TYPE = 60115;
    var REACT_LAZY_TYPE = 60116;
    var REACT_BLOCK_TYPE = 60121;
    var REACT_SERVER_BLOCK_TYPE = 60122;
    var REACT_FUNDAMENTAL_TYPE = 60117;
    var REACT_SCOPE_TYPE = 60119;
    var REACT_OPAQUE_ID_TYPE = 60128;
    var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
    var REACT_OFFSCREEN_TYPE = 60130;
    var REACT_LEGACY_HIDDEN_TYPE = 60131;
    if (typeof Symbol === 'function' && Symbol.for) {
        var symbolFor = Symbol.for;
        REACT_ELEMENT_TYPE = symbolFor('react.element');
        REACT_PORTAL_TYPE = symbolFor('react.portal');
        exports.Fragment = symbolFor('react.fragment');
        exports.StrictMode = symbolFor('react.strict_mode');
        exports.Profiler = symbolFor('react.profiler');
        REACT_PROVIDER_TYPE = symbolFor('react.provider');
        REACT_CONTEXT_TYPE = symbolFor('react.context');
        REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
        exports.Suspense = symbolFor('react.suspense');
        REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
        REACT_MEMO_TYPE = symbolFor('react.memo');
        REACT_LAZY_TYPE = symbolFor('react.lazy');
        REACT_BLOCK_TYPE = symbolFor('react.block');
        REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
        REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
        REACT_SCOPE_TYPE = symbolFor('react.scope');
        REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
        REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
        REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
        REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
    }
    var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator';
    function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || typeof maybeIterable !== 'object') return null;
        var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
        if (typeof maybeIterator === 'function') return maybeIterator;
        return null;
    }
    /**
 * Keeps track of the current dispatcher.
 */ var ReactCurrentDispatcher = {
        /**
   * @internal
   * @type {ReactComponent}
   */ current: null
    };
    /**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */ var ReactCurrentBatchConfig = {
        transition: 0
    };
    /**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */ var ReactCurrentOwner = {
        /**
   * @internal
   * @type {ReactComponent}
   */ current: null
    };
    var ReactDebugCurrentFrame1 = {
    };
    var currentExtraStackFrame = null;
    function setExtraStackFrame(stack) {
        currentExtraStackFrame = stack;
    }
    ReactDebugCurrentFrame1.setExtraStackFrame = function(stack) {
        currentExtraStackFrame = stack;
    }; // Stack implementation injected by the current renderer.
    ReactDebugCurrentFrame1.getCurrentStack = null;
    ReactDebugCurrentFrame1.getStackAddendum = function() {
        var stack = ''; // Add an extra top frame while an element is being validated
        if (currentExtraStackFrame) stack += currentExtraStackFrame;
         // Delegate to the injected renderer-specific implementation
        var impl = ReactDebugCurrentFrame1.getCurrentStack;
        if (impl) stack += impl() || '';
        return stack;
    };
    /**
 * Used by act() to track whether you're inside an act() scope.
 */ var IsSomeRendererActing = {
        current: false
    };
    var ReactSharedInternals = {
        ReactCurrentDispatcher: ReactCurrentDispatcher,
        ReactCurrentBatchConfig: ReactCurrentBatchConfig,
        ReactCurrentOwner: ReactCurrentOwner,
        IsSomeRendererActing: IsSomeRendererActing,
        // Used by renderers to avoid bundling object-assign twice in UMD bundles:
        assign: _assign
    };
    ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame1;
    // by calls to these methods by a Babel plugin.
    //
    // In PROD (or in packages without access to React internals),
    // they are left as they are instead.
    function warn(format) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
        printWarning('warn', format, args);
    }
    function error1(format) {
        for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)args[_key2 - 1] = arguments[_key2];
        printWarning('error', format, args);
    }
    function printWarning(level, format, args) {
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        var stack = ReactDebugCurrentFrame.getStackAddendum();
        if (stack !== '') {
            format += '%s';
            args = args.concat([
                stack
            ]);
        }
        var argsWithFormat = args.map(function(item) {
            return '' + item;
        }); // Careful: RN currently depends on this prefix
        argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
        // breaks IE9: https://github.com/facebook/react/issues/13610
        // eslint-disable-next-line react-internal/no-production-logging
        Function.prototype.apply.call(console[level], console, argsWithFormat);
    }
    var didWarnStateUpdateForUnmountedComponent = {
    };
    function warnNoop(publicInstance, callerName) {
        var _constructor = publicInstance.constructor;
        var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
        var warningKey = componentName + "." + callerName;
        if (didWarnStateUpdateForUnmountedComponent[warningKey]) return;
        error1("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
        didWarnStateUpdateForUnmountedComponent[warningKey] = true;
    }
    /**
 * This is the abstract API for an update queue.
 */ var ReactNoopUpdateQueue = {
        /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */ isMounted: function(publicInstance) {
            return false;
        },
        /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */ enqueueForceUpdate: function(publicInstance, callback, callerName) {
            warnNoop(publicInstance, 'forceUpdate');
        },
        /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */ enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
            warnNoop(publicInstance, 'replaceState');
        },
        /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */ enqueueSetState: function(publicInstance, partialState, callback, callerName) {
            warnNoop(publicInstance, 'setState');
        }
    };
    var emptyObject = {
    };
    Object.freeze(emptyObject);
    /**
 * Base class helpers for the updating state of a component.
 */ function Component1(props, context, updater) {
        this.props = props;
        this.context = context; // If a component has string refs, we will assign a different object later.
        this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
        // renderer.
        this.updater = updater || ReactNoopUpdateQueue;
    }
    Component1.prototype.isReactComponent = {
    };
    /**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */ Component1.prototype.setState = function(partialState, callback) {
        if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, partialState, callback, 'setState');
    };
    /**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */ Component1.prototype.forceUpdate = function(callback) {
        this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
    };
    var deprecatedAPIs = {
        isMounted: [
            'isMounted',
            "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
            'replaceState',
            "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
    };
    var defineDeprecationWarning = function(methodName, info) {
        Object.defineProperty(Component1.prototype, methodName, {
            get: function() {
                warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
                return undefined;
            }
        });
    };
    for(var fnName in deprecatedAPIs)if (deprecatedAPIs.hasOwnProperty(fnName)) defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    function ComponentDummy() {
    }
    ComponentDummy.prototype = Component1.prototype;
    /**
 * Convenience component with default shallow equality check for sCU.
 */ function PureComponent(props, context, updater) {
        this.props = props;
        this.context = context; // If a component has string refs, we will assign a different object later.
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
    }
    var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
    pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.
    _assign(pureComponentPrototype, Component1.prototype);
    pureComponentPrototype.isPureReactComponent = true;
    // an immutable object with a single mutable value
    function createRef() {
        var refObject = {
            current: null
        };
        Object.seal(refObject);
        return refObject;
    }
    function getWrappedName(outerType, innerType, wrapperName) {
        var functionName = innerType.displayName || innerType.name || '';
        return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
    }
    function getContextName(type) {
        return type.displayName || 'Context';
    }
    function getComponentName(type) {
        if (type == null) // Host root, text node or just invalid type.
        return null;
        if (typeof type.tag === 'number') error1("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue.");
        if (typeof type === 'function') return type.displayName || type.name || null;
        if (typeof type === 'string') return type;
        switch(type){
            case exports.Fragment:
                return 'Fragment';
            case REACT_PORTAL_TYPE:
                return 'Portal';
            case exports.Profiler:
                return 'Profiler';
            case exports.StrictMode:
                return 'StrictMode';
            case exports.Suspense:
                return 'Suspense';
            case REACT_SUSPENSE_LIST_TYPE:
                return 'SuspenseList';
        }
        if (typeof type === 'object') switch(type.$$typeof){
            case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + '.Consumer';
            case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + '.Provider';
            case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, 'ForwardRef');
            case REACT_MEMO_TYPE:
                return getComponentName(type.type);
            case REACT_BLOCK_TYPE:
                return getComponentName(type._render);
            case REACT_LAZY_TYPE:
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                    return getComponentName(init(payload));
                } catch (x) {
                    return null;
                }
        }
        return null;
    }
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var RESERVED_PROPS = {
        key: true,
        ref: true,
        __self: true,
        __source: true
    };
    var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
    didWarnAboutStringRefs = {
    };
    function hasValidRef(config) {
        if (hasOwnProperty.call(config, 'ref')) {
            var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;
            if (getter && getter.isReactWarning) return false;
        }
        return config.ref !== undefined;
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, 'key')) {
            var getter = Object.getOwnPropertyDescriptor(config, 'key').get;
            if (getter && getter.isReactWarning) return false;
        }
        return config.key !== undefined;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        var warnAboutAccessingKey = function() {
            if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error1("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
            }
        };
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, 'key', {
            get: warnAboutAccessingKey,
            configurable: true
        });
    }
    function defineRefPropWarningGetter(props, displayName) {
        var warnAboutAccessingRef = function() {
            if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error1("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
            }
        };
        warnAboutAccessingRef.isReactWarning = true;
        Object.defineProperty(props, 'ref', {
            get: warnAboutAccessingRef,
            configurable: true
        });
    }
    function warnIfStringRefCannotBeAutoConverted(config) {
        if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
            var componentName = getComponentName(ReactCurrentOwner.current.type);
            if (!didWarnAboutStringRefs[componentName]) {
                error1("Component \"%s\" contains the string ref \"%s\". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref", componentName, config.ref);
                didWarnAboutStringRefs[componentName] = true;
            }
        }
    }
    /**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */ var ReactElement = function(type, key, ref, self, source, owner, props) {
        var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type: type,
            key: key,
            ref: ref,
            props: props,
            // Record the component responsible for creating this element.
            _owner: owner
        };
        // The validation flag is currently mutative. We put it on
        // an external backing store so that we can freeze the whole object.
        // This can be replaced with a WeakMap once they are implemented in
        // commonly used development environments.
        element._store = {
        }; // To make comparing ReactElements easier for testing purposes, we make
        // the validation flag non-enumerable (where possible, which should
        // include every environment we run tests in), so the test framework
        // ignores it.
        Object.defineProperty(element._store, 'validated', {
            configurable: false,
            enumerable: false,
            writable: true,
            value: false
        }); // self and source are DEV only properties.
        Object.defineProperty(element, '_self', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: self
        }); // Two elements created in two different places should be considered
        // equal for testing purposes and therefore we hide it from enumeration.
        Object.defineProperty(element, '_source', {
            configurable: false,
            enumerable: false,
            writable: false,
            value: source
        });
        if (Object.freeze) {
            Object.freeze(element.props);
            Object.freeze(element);
        }
        return element;
    };
    /**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */ function createElement(type, config, children) {
        var propName; // Reserved names are extracted
        var props = {
        };
        var key = null;
        var ref = null;
        var self = null;
        var source = null;
        if (config != null) {
            if (hasValidRef(config)) {
                ref = config.ref;
                warnIfStringRefCannotBeAutoConverted(config);
            }
            if (hasValidKey(config)) key = '' + config.key;
            self = config.__self === undefined ? null : config.__self;
            source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object
            for(propName in config)if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) props[propName] = config[propName];
        } // Children can be more than one argument, and those are transferred onto
        // the newly allocated props object.
        var childrenLength = arguments.length - 2;
        if (childrenLength === 1) props.children = children;
        else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for(var i = 0; i < childrenLength; i++)childArray[i] = arguments[i + 2];
            if (Object.freeze) Object.freeze(childArray);
            props.children = childArray;
        } // Resolve default props
        if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for(propName in defaultProps)if (props[propName] === undefined) props[propName] = defaultProps[propName];
        }
        if (key || ref) {
            var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;
            if (key) defineKeyPropWarningGetter(props, displayName);
            if (ref) defineRefPropWarningGetter(props, displayName);
        }
        return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
    }
    function cloneAndReplaceKey(oldElement, newKey) {
        var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
        return newElement;
    }
    /**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */ function cloneElement(element, config, children) {
        if (!!(element === null || element === undefined)) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
        var propName; // Original props are copied
        var props = _assign({
        }, element.props); // Reserved names are extracted
        var key = element.key;
        var ref = element.ref; // Self is preserved since the owner is preserved.
        var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
        // transpiler, and the original source is probably a better indicator of the
        // true owner.
        var source = element._source; // Owner will be preserved, unless ref is overridden
        var owner = element._owner;
        if (config != null) {
            if (hasValidRef(config)) {
                // Silently steal the ref from the parent.
                ref = config.ref;
                owner = ReactCurrentOwner.current;
            }
            if (hasValidKey(config)) key = '' + config.key;
             // Remaining properties override existing props
            var defaultProps;
            if (element.type && element.type.defaultProps) defaultProps = element.type.defaultProps;
            for(propName in config)if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                if (config[propName] === undefined && defaultProps !== undefined) // Resolve default props
                props[propName] = defaultProps[propName];
                else props[propName] = config[propName];
            }
        } // Children can be more than one argument, and those are transferred onto
        // the newly allocated props object.
        var childrenLength = arguments.length - 2;
        if (childrenLength === 1) props.children = children;
        else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for(var i = 0; i < childrenLength; i++)childArray[i] = arguments[i + 2];
            props.children = childArray;
        }
        return ReactElement(element.type, key, ref, self, source, owner, props);
    }
    /**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */ function isValidElement(object) {
        return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var SEPARATOR = '.';
    var SUBSEPARATOR = ':';
    /**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */ function escape(key) {
        var escapeRegex = /[=:]/g;
        var escaperLookup = {
            '=': '=0',
            ':': '=2'
        };
        var escapedString = key.replace(escapeRegex, function(match) {
            return escaperLookup[match];
        });
        return '$' + escapedString;
    }
    /**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */ var didWarnAboutMaps = false;
    var userProvidedKeyEscapeRegex = /\/+/g;
    function escapeUserProvidedKey(text) {
        return text.replace(userProvidedKeyEscapeRegex, '$&/');
    }
    /**
 * Generate a key string that identifies a element within a set.
 *
 * @param {*} element A element that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */ function getElementKey(element, index) {
        // Do some typechecking here since we call this blindly. We want to ensure
        // that we don't block potential future ES APIs.
        if (typeof element === 'object' && element !== null && element.key != null) // Explicit key
        return escape('' + element.key);
         // Implicit key determined by the index in the set
        return index.toString(36);
    }
    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
        var type = typeof children;
        if (type === 'undefined' || type === 'boolean') // All of the above are perceived as null.
        children = null;
        var invokeCallback = false;
        if (children === null) invokeCallback = true;
        else switch(type){
            case 'string':
            case 'number':
                invokeCallback = true;
                break;
            case 'object':
                switch(children.$$typeof){
                    case REACT_ELEMENT_TYPE:
                    case REACT_PORTAL_TYPE:
                        invokeCallback = true;
                }
        }
        if (invokeCallback) {
            var _child = children;
            var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
            // so that it's consistent if the number of children grows:
            var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
            if (Array.isArray(mappedChild)) {
                var escapedChildKey = '';
                if (childKey != null) escapedChildKey = escapeUserProvidedKey(childKey) + '/';
                mapIntoArray(mappedChild, array, escapedChildKey, '', function(c) {
                    return c;
                });
            } else if (mappedChild != null) {
                if (isValidElement(mappedChild)) mappedChild = cloneAndReplaceKey(mappedChild, // traverseAllChildren used to do for objects as children
                escapedPrefix + (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
                array.push(mappedChild);
            }
            return 1;
        }
        var child;
        var nextName;
        var subtreeCount = 0; // Count of children found in the current subtree.
        var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;
        if (Array.isArray(children)) for(var i = 0; i < children.length; i++){
            child = children[i];
            nextName = nextNamePrefix + getElementKey(child, i);
            subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
        }
        else {
            var iteratorFn = getIteratorFn(children);
            if (typeof iteratorFn === 'function') {
                var iterableChildren = children;
                // Warn about using Maps as children
                if (iteratorFn === iterableChildren.entries) {
                    if (!didWarnAboutMaps) warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                    didWarnAboutMaps = true;
                }
                var iterator = iteratorFn.call(iterableChildren);
                var step;
                var ii = 0;
                while(!(step = iterator.next()).done){
                    child = step.value;
                    nextName = nextNamePrefix + getElementKey(child, ii++);
                    subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
                }
            } else if (type === 'object') {
                var childrenString = '' + children;
                throw Error("Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). If you meant to render a collection of children, use an array instead.");
            }
        }
        return subtreeCount;
    }
    /**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */ function mapChildren(children, func, context) {
        if (children == null) return children;
        var result = [];
        var count = 0;
        mapIntoArray(children, result, '', '', function(child) {
            return func.call(context, child, count++);
        });
        return result;
    }
    /**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */ function countChildren(children) {
        var n = 0;
        mapChildren(children, function() {
            n++; // Don't return anything
        });
        return n;
    }
    /**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */ function forEachChildren(children, forEachFunc, forEachContext) {
        mapChildren(children, function() {
            forEachFunc.apply(this, arguments); // Don't return anything.
        }, forEachContext);
    }
    /**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */ function toArray(children) {
        return mapChildren(children, function(child) {
            return child;
        }) || [];
    }
    /**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */ function onlyChild(children) {
        if (!isValidElement(children)) throw Error("React.Children.only expected to receive a single React element child.");
        return children;
    }
    function createContext(defaultValue, calculateChangedBits) {
        if (calculateChangedBits === undefined) calculateChangedBits = null;
        else if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') error1("createContext: Expected the optional second argument to be a function. Instead received: %s", calculateChangedBits);
        var context = {
            $$typeof: REACT_CONTEXT_TYPE,
            _calculateChangedBits: calculateChangedBits,
            // As a workaround to support multiple concurrent renderers, we categorize
            // some renderers as primary and others as secondary. We only expect
            // there to be two concurrent renderers at most: React Native (primary) and
            // Fabric (secondary); React DOM (primary) and React ART (secondary).
            // Secondary renderers store their context values on separate fields.
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            // Used to track how many concurrent renderers this context currently
            // supports within in a single renderer. Such as parallel server rendering.
            _threadCount: 0,
            // These are circular
            Provider: null,
            Consumer: null
        };
        context.Provider = {
            $$typeof: REACT_PROVIDER_TYPE,
            _context: context
        };
        var hasWarnedAboutUsingNestedContextConsumers = false;
        var hasWarnedAboutUsingConsumerProvider = false;
        var hasWarnedAboutDisplayNameOnConsumer = false;
        // A separate object, but proxies back to the original context object for
        // backwards compatibility. It has a different $$typeof, so we can properly
        // warn for the incorrect usage of Context as a Consumer.
        var Consumer = {
            $$typeof: REACT_CONTEXT_TYPE,
            _context: context,
            _calculateChangedBits: context._calculateChangedBits
        }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here
        Object.defineProperties(Consumer, {
            Provider: {
                get: function() {
                    if (!hasWarnedAboutUsingConsumerProvider) {
                        hasWarnedAboutUsingConsumerProvider = true;
                        error1("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                    }
                    return context.Provider;
                },
                set: function(_Provider) {
                    context.Provider = _Provider;
                }
            },
            _currentValue: {
                get: function() {
                    return context._currentValue;
                },
                set: function(_currentValue) {
                    context._currentValue = _currentValue;
                }
            },
            _currentValue2: {
                get: function() {
                    return context._currentValue2;
                },
                set: function(_currentValue2) {
                    context._currentValue2 = _currentValue2;
                }
            },
            _threadCount: {
                get: function() {
                    return context._threadCount;
                },
                set: function(_threadCount) {
                    context._threadCount = _threadCount;
                }
            },
            Consumer: {
                get: function() {
                    if (!hasWarnedAboutUsingNestedContextConsumers) {
                        hasWarnedAboutUsingNestedContextConsumers = true;
                        error1("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                    }
                    return context.Consumer;
                }
            },
            displayName: {
                get: function() {
                    return context.displayName;
                },
                set: function(displayName) {
                    if (!hasWarnedAboutDisplayNameOnConsumer) {
                        warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                        hasWarnedAboutDisplayNameOnConsumer = true;
                    }
                }
            }
        }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty
        context.Consumer = Consumer;
        context._currentRenderer = null;
        context._currentRenderer2 = null;
        return context;
    }
    var Uninitialized = -1;
    var Pending = 0;
    var Resolved = 1;
    var Rejected = 2;
    function lazyInitializer(payload) {
        if (payload._status === Uninitialized) {
            var ctor = payload._result;
            var thenable = ctor(); // Transition to the next state.
            var pending = payload;
            pending._status = Pending;
            pending._result = thenable;
            thenable.then(function(moduleObject) {
                if (payload._status === Pending) {
                    var defaultExport = moduleObject.default;
                    if (defaultExport === undefined) error1("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
                    var resolved = payload;
                    resolved._status = Resolved;
                    resolved._result = defaultExport;
                }
            }, function(error) {
                if (payload._status === Pending) {
                    // Transition to the next state.
                    var rejected = payload;
                    rejected._status = Rejected;
                    rejected._result = error;
                }
            });
        }
        if (payload._status === Resolved) return payload._result;
        else throw payload._result;
    }
    function lazy(ctor) {
        var payload = {
            // We use these fields to store the result.
            _status: -1,
            _result: ctor
        };
        var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: payload,
            _init: lazyInitializer
        };
        // In production, this would just set it on the object.
        var defaultProps;
        var propTypes; // $FlowFixMe
        Object.defineProperties(lazyType, {
            defaultProps: {
                configurable: true,
                get: function() {
                    return defaultProps;
                },
                set: function(newDefaultProps) {
                    error1("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                    defaultProps = newDefaultProps; // Match production behavior more closely:
                    // $FlowFixMe
                    Object.defineProperty(lazyType, 'defaultProps', {
                        enumerable: true
                    });
                }
            },
            propTypes: {
                configurable: true,
                get: function() {
                    return propTypes;
                },
                set: function(newPropTypes) {
                    error1("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                    propTypes = newPropTypes; // Match production behavior more closely:
                    // $FlowFixMe
                    Object.defineProperty(lazyType, 'propTypes', {
                        enumerable: true
                    });
                }
            }
        });
        return lazyType;
    }
    function forwardRef(render) {
        if (render != null && render.$$typeof === REACT_MEMO_TYPE) error1("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
        else if (typeof render !== 'function') error1('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
        else if (render.length !== 0 && render.length !== 2) error1('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
        if (render != null) {
            if (render.defaultProps != null || render.propTypes != null) error1("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        }
        var elementType = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render: render
        };
        var ownName;
        Object.defineProperty(elementType, 'displayName', {
            enumerable: false,
            configurable: true,
            get: function() {
                return ownName;
            },
            set: function(name) {
                ownName = name;
                if (render.displayName == null) render.displayName = name;
            }
        });
        return elementType;
    }
    // Filter certain DOM attributes (e.g. src, href) if their values are empty strings.
    var enableScopeAPI = false; // Experimental Create Event Handle API.
    function isValidElementType(type) {
        if (typeof type === 'string' || typeof type === 'function') return true;
         // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).
        if (type === exports.Fragment || type === exports.Profiler || type === REACT_DEBUG_TRACING_MODE_TYPE || type === exports.StrictMode || type === exports.Suspense || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) return true;
        if (typeof type === 'object' && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) return true;
        }
        return false;
    }
    function memo(type, compare) {
        if (!isValidElementType(type)) error1("memo: The first argument must be a component. Instead received: %s", type === null ? 'null' : typeof type);
        var elementType = {
            $$typeof: REACT_MEMO_TYPE,
            type: type,
            compare: compare === undefined ? null : compare
        };
        var ownName;
        Object.defineProperty(elementType, 'displayName', {
            enumerable: false,
            configurable: true,
            get: function() {
                return ownName;
            },
            set: function(name) {
                ownName = name;
                if (type.displayName == null) type.displayName = name;
            }
        });
        return elementType;
    }
    function resolveDispatcher() {
        var dispatcher = ReactCurrentDispatcher.current;
        if (!(dispatcher !== null)) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
        return dispatcher;
    }
    function useContext(Context, unstable_observedBits) {
        var dispatcher = resolveDispatcher();
        if (unstable_observedBits !== undefined) error1("useContext() second argument is reserved for future use in React. Passing it is not supported. You passed: %s.%s", unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? "\n\nDid you call array.map(useContext)? Calling Hooks inside a loop is not supported. Learn more at https://reactjs.org/link/rules-of-hooks" : '');
         // TODO: add a more generic warning for invalid values.
        if (Context._context !== undefined) {
            var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
            // and nobody should be using this in existing code.
            if (realContext.Consumer === Context) error1("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
            else if (realContext.Provider === Context) error1("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return dispatcher.useContext(Context, unstable_observedBits);
    }
    function useState(initialState) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useState(initialState);
    }
    function useReducer(reducer, initialArg, init) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useReducer(reducer, initialArg, init);
    }
    function useRef(initialValue) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useRef(initialValue);
    }
    function useEffect(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useEffect(create, deps);
    }
    function useLayoutEffect(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useLayoutEffect(create, deps);
    }
    function useCallback(callback, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useCallback(callback, deps);
    }
    function useMemo(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useMemo(create, deps);
    }
    function useImperativeHandle(ref, create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useImperativeHandle(ref, create, deps);
    }
    function useDebugValue(value, formatterFn) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useDebugValue(value, formatterFn);
    }
    // Helpers to patch console.logs to avoid logging during side-effect free
    // replaying on render function. This currently only patches the object
    // lazily which won't cover if the log function was extracted eagerly.
    // We could also eagerly patch the method.
    var disabledDepth = 0;
    var prevLog;
    var prevInfo;
    var prevWarn;
    var prevError;
    var prevGroup;
    var prevGroupCollapsed;
    var prevGroupEnd;
    function disabledLog() {
    }
    disabledLog.__reactDisabledLog = true;
    function disableLogs() {
        if (disabledDepth === 0) {
            /* eslint-disable react-internal/no-production-logging */ prevLog = console.log;
            prevInfo = console.info;
            prevWarn = console.warn;
            prevError = console.error;
            prevGroup = console.group;
            prevGroupCollapsed = console.groupCollapsed;
            prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099
            var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
            }; // $FlowFixMe Flow thinks console is immutable.
            Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
            });
        /* eslint-enable react-internal/no-production-logging */ }
        disabledDepth++;
    }
    function reenableLogs() {
        disabledDepth--;
        if (disabledDepth === 0) {
            /* eslint-disable react-internal/no-production-logging */ var props = {
                configurable: true,
                enumerable: true,
                writable: true
            }; // $FlowFixMe Flow thinks console is immutable.
            Object.defineProperties(console, {
                log: _assign({
                }, props, {
                    value: prevLog
                }),
                info: _assign({
                }, props, {
                    value: prevInfo
                }),
                warn: _assign({
                }, props, {
                    value: prevWarn
                }),
                error: _assign({
                }, props, {
                    value: prevError
                }),
                group: _assign({
                }, props, {
                    value: prevGroup
                }),
                groupCollapsed: _assign({
                }, props, {
                    value: prevGroupCollapsed
                }),
                groupEnd: _assign({
                }, props, {
                    value: prevGroupEnd
                })
            });
        /* eslint-enable react-internal/no-production-logging */ }
        if (disabledDepth < 0) error1("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
    var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
    var prefix;
    function describeBuiltInComponentFrame(name, source, ownerFn) {
        if (prefix === undefined) // Extract the VM specific prefix used by each line.
        try {
            throw Error();
        } catch (x) {
            var match = x.stack.trim().match(/\n( *(at )?)/);
            prefix = match && match[1] || '';
        }
         // We use the prefix to ensure our stacks line up with native stack frames.
        return '\n' + prefix + name;
    }
    var reentry = false;
    var componentFrameCache;
    var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
    componentFrameCache = new PossiblyWeakMap();
    function describeNativeComponentFrame(fn, construct) {
        // If something asked for a stack inside a fake render, it should get ignored.
        if (!fn || reentry) return '';
        var frame = componentFrameCache.get(fn);
        if (frame !== undefined) return frame;
        var control;
        reentry = true;
        var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.
        Error.prepareStackTrace = undefined;
        var previousDispatcher;
        previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
        // for warnings.
        ReactCurrentDispatcher$1.current = null;
        disableLogs();
        try {
            // This should throw.
            if (construct) {
                // Something should be setting the props in the constructor.
                var Fake = function() {
                    throw Error();
                }; // $FlowFixMe
                Object.defineProperty(Fake.prototype, 'props', {
                    set: function() {
                        // We use a throwing setter instead of frozen or non-writable props
                        // because that won't throw in a non-strict mode function.
                        throw Error();
                    }
                });
                if (typeof Reflect === 'object' && Reflect.construct) {
                    // We construct a different control for this case to include any extra
                    // frames added by the construct call.
                    try {
                        Reflect.construct(Fake, []);
                    } catch (x) {
                        control = x;
                    }
                    Reflect.construct(fn, [], Fake);
                } else {
                    try {
                        Fake.call();
                    } catch (x) {
                        control = x;
                    }
                    fn.call(Fake.prototype);
                }
            } else {
                try {
                    throw Error();
                } catch (x) {
                    control = x;
                }
                fn();
            }
        } catch (sample) {
            // This is inlined manually because closure doesn't do it for us.
            if (sample && control && typeof sample.stack === 'string') {
                // This extracts the first frame from the sample that isn't also in the control.
                // Skipping one frame that we assume is the frame that calls the two.
                var sampleLines = sample.stack.split('\n');
                var controlLines = control.stack.split('\n');
                var s = sampleLines.length - 1;
                var c = controlLines.length - 1;
                while(s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c])// We expect at least one stack frame to be shared.
                // Typically this will be the root most one. However, stack frames may be
                // cut off due to maximum stack limits. In this case, one maybe cut off
                // earlier than the other. We assume that the sample is longer or the same
                // and there for cut off earlier. So we should find the root most frame in
                // the sample somewhere in the control.
                c--;
                for(; s >= 1 && c >= 0; s--, c--)// Next we find the first one that isn't the same which should be the
                // frame that called our sample function and the control.
                if (sampleLines[s] !== controlLines[c]) {
                    // In V8, the first line is describing the message but other VMs don't.
                    // If we're about to return the first line, and the control is also on the same
                    // line, that's a pretty good indicator that our sample threw at same line as
                    // the control. I.e. before we entered the sample frame. So we ignore this result.
                    // This can happen if you passed a class to function component, or non-function.
                    if (s !== 1 || c !== 1) do {
                        s--;
                        c--; // We may still have similar intermediate frames from the construct call.
                        // The next one that isn't the same should be our match though.
                        if (c < 0 || sampleLines[s] !== controlLines[c]) {
                            // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                            var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');
                            if (typeof fn === 'function') componentFrameCache.set(fn, _frame);
                            return _frame;
                        }
                    }while (s >= 1 && c >= 0)
                    break;
                }
            }
        } finally{
            reentry = false;
            ReactCurrentDispatcher$1.current = previousDispatcher;
            reenableLogs();
            Error.prepareStackTrace = previousPrepareStackTrace;
        } // Fallback to just using the name if we couldn't make it throw.
        var name = fn ? fn.displayName || fn.name : '';
        var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';
        if (typeof fn === 'function') componentFrameCache.set(fn, syntheticFrame);
        return syntheticFrame;
    }
    function describeFunctionComponentFrame(fn, source, ownerFn) {
        return describeNativeComponentFrame(fn, false);
    }
    function shouldConstruct(Component) {
        var prototype = Component.prototype;
        return !!(prototype && prototype.isReactComponent);
    }
    function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
        if (type == null) return '';
        if (typeof type === 'function') return describeNativeComponentFrame(type, shouldConstruct(type));
        if (typeof type === 'string') return describeBuiltInComponentFrame(type);
        switch(type){
            case exports.Suspense:
                return describeBuiltInComponentFrame('Suspense');
            case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame('SuspenseList');
        }
        if (typeof type === 'object') switch(type.$$typeof){
            case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
            case REACT_MEMO_TYPE:
                // Memo may contain any component type so we recursively resolve it.
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
            case REACT_BLOCK_TYPE:
                return describeFunctionComponentFrame(type._render);
            case REACT_LAZY_TYPE:
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                    // Lazy may contain any component type so we recursively resolve it.
                    return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
        }
        return '';
    }
    var loggedTypeFailures = {
    };
    var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
    function setCurrentlyValidatingElement(element) {
        if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
        } else ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
    function checkPropTypes(typeSpecs, values, location, componentName, element) {
        // $FlowFixMe This is okay but Flow doesn't know it.
        var has = Function.call.bind(Object.prototype.hasOwnProperty);
        for(var typeSpecName in typeSpecs)if (has(typeSpecs, typeSpecName)) {
            var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
            // fail the render phase where it didn't fail before. So we log it.
            // After these have been cleaned up, we'll let them throw.
            try {
                // This is intentionally an invariant that gets caught. It's the same
                // behavior as without this statement except with a better message.
                if (typeof typeSpecs[typeSpecName] !== 'function') {
                    var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
                    err.name = 'Invariant Violation';
                    throw err;
                }
                error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
            } catch (ex) {
                error$1 = ex;
            }
            if (error$1 && !(error$1 instanceof Error)) {
                setCurrentlyValidatingElement(element);
                error1("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || 'React class', location, typeSpecName, typeof error$1);
                setCurrentlyValidatingElement(null);
            }
            if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                // Only monitor this failure once because there tends to be a lot of the
                // same error.
                loggedTypeFailures[error$1.message] = true;
                setCurrentlyValidatingElement(element);
                error1('Failed %s type: %s', location, error$1.message);
                setCurrentlyValidatingElement(null);
            }
        }
    }
    function setCurrentlyValidatingElement$1(element) {
        if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            setExtraStackFrame(stack);
        } else setExtraStackFrame(null);
    }
    var propTypesMisspellWarningShown;
    propTypesMisspellWarningShown = false;
    function getDeclarationErrorAddendum() {
        if (ReactCurrentOwner.current) {
            var name = getComponentName(ReactCurrentOwner.current.type);
            if (name) return '\n\nCheck the render method of `' + name + '`.';
        }
        return '';
    }
    function getSourceInfoErrorAddendum(source) {
        if (source !== undefined) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, '');
            var lineNumber = source.lineNumber;
            return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
        }
        return '';
    }
    function getSourceInfoErrorAddendumForProps(elementProps) {
        if (elementProps !== null && elementProps !== undefined) return getSourceInfoErrorAddendum(elementProps.__source);
        return '';
    }
    /**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */ var ownerHasKeyUseWarning = {
    };
    function getCurrentComponentErrorInfo(parentType) {
        var info = getDeclarationErrorAddendum();
        if (!info) {
            var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;
            if (parentName) info = "\n\nCheck the top-level render call using <" + parentName + ">.";
        }
        return info;
    }
    /**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */ function validateExplicitKey(element, parentType) {
        if (!element._store || element._store.validated || element.key != null) return;
        element._store.validated = true;
        var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
        if (ownerHasKeyUseWarning[currentComponentErrorInfo]) return;
        ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
        // property, it may be the creator of the child that's responsible for
        // assigning it a key.
        var childOwner = '';
        if (element && element._owner && element._owner !== ReactCurrentOwner.current) // Give the component that originally created this child.
        childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
        setCurrentlyValidatingElement$1(element);
        error1("Each child in a list should have a unique \"key\" prop.%s%s See https://reactjs.org/link/warning-keys for more information.", currentComponentErrorInfo, childOwner);
        setCurrentlyValidatingElement$1(null);
    }
    /**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */ function validateChildKeys(node, parentType) {
        if (typeof node !== 'object') return;
        if (Array.isArray(node)) for(var i = 0; i < node.length; i++){
            var child = node[i];
            if (isValidElement(child)) validateExplicitKey(child, parentType);
        }
        else if (isValidElement(node)) // This element was passed in a valid location.
        {
            if (node._store) node._store.validated = true;
        } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === 'function') // Entry iterators used to provide implicit keys,
            // but now we print a separate warning for them later.
            {
                if (iteratorFn !== node.entries) {
                    var iterator = iteratorFn.call(node);
                    var step;
                    while(!(step = iterator.next()).done)if (isValidElement(step.value)) validateExplicitKey(step.value, parentType);
                }
            }
        }
    }
    /**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */ function validatePropTypes(element) {
        var type = element.type;
        if (type === null || type === undefined || typeof type === 'string') return;
        var propTypes;
        if (typeof type === 'function') propTypes = type.propTypes;
        else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Inner props are checked in the reconciler.
        type.$$typeof === REACT_MEMO_TYPE)) propTypes = type.propTypes;
        else return;
        if (propTypes) {
            // Intentionally inside to avoid triggering lazy initializers:
            var name = getComponentName(type);
            checkPropTypes(propTypes, element.props, 'prop', name, element);
        } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
            propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:
            var _name = getComponentName(type);
            error1('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
        }
        if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) error1("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
    /**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */ function validateFragmentProps(fragment) {
        var keys = Object.keys(fragment.props);
        for(var i = 0; i < keys.length; i++){
            var key = keys[i];
            if (key !== 'children' && key !== 'key') {
                setCurrentlyValidatingElement$1(fragment);
                error1("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
            }
        }
        if (fragment.ref !== null) {
            setCurrentlyValidatingElement$1(fragment);
            error1('Invalid attribute `ref` supplied to `React.Fragment`.');
            setCurrentlyValidatingElement$1(null);
        }
    }
    function createElementWithValidation(type, props, children) {
        var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
        // succeed and there will likely be errors in render.
        if (!validType) {
            var info = '';
            if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            var sourceInfo = getSourceInfoErrorAddendumForProps(props);
            if (sourceInfo) info += sourceInfo;
            else info += getDeclarationErrorAddendum();
            var typeString;
            if (type === null) typeString = 'null';
            else if (Array.isArray(type)) typeString = 'array';
            else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
                info = ' Did you accidentally export a JSX literal instead of a component?';
            } else typeString = typeof type;
            error1("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
        }
        var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
        // TODO: Drop this when these are no longer allowed as the type argument.
        if (element == null) return element;
         // Skip key warning if the type isn't valid since our key validation logic
        // doesn't expect a non-string/function type and can throw confusing errors.
        // We don't want exception behavior to differ between dev and prod.
        // (Rendering will throw with a helpful message and as soon as the type is
        // fixed, the key warnings will appear.)
        if (validType) for(var i = 2; i < arguments.length; i++)validateChildKeys(arguments[i], type);
        if (type === exports.Fragment) validateFragmentProps(element);
        else validatePropTypes(element);
        return element;
    }
    var didWarnAboutDeprecatedCreateFactory = false;
    function createFactoryWithValidation(type) {
        var validatedFactory = createElementWithValidation.bind(null, type);
        validatedFactory.type = type;
        if (!didWarnAboutDeprecatedCreateFactory) {
            didWarnAboutDeprecatedCreateFactory = true;
            warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
        } // Legacy hook: remove it
        Object.defineProperty(validatedFactory, 'type', {
            enumerable: false,
            get: function() {
                warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                Object.defineProperty(this, 'type', {
                    value: type
                });
                return type;
            }
        });
        return validatedFactory;
    }
    function cloneElementWithValidation(element, props, children) {
        var newElement = cloneElement.apply(this, arguments);
        for(var i = 2; i < arguments.length; i++)validateChildKeys(arguments[i], newElement.type);
        validatePropTypes(newElement);
        return newElement;
    }
    try {
        var frozenObject = Object.freeze({
        });
        /* eslint-disable no-new */ new Map([
            [
                frozenObject,
                null
            ]
        ]);
        new Set([
            frozenObject
        ]);
    /* eslint-enable no-new */ } catch (e) {
    }
    var createElement$1 = createElementWithValidation;
    var cloneElement$1 = cloneElementWithValidation;
    var createFactory = createFactoryWithValidation;
    var Children = {
        map: mapChildren,
        forEach: forEachChildren,
        count: countChildren,
        toArray: toArray,
        only: onlyChild
    };
    exports.Children = Children;
    exports.Component = Component1;
    exports.PureComponent = PureComponent;
    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
    exports.cloneElement = cloneElement$1;
    exports.createContext = createContext;
    exports.createElement = createElement$1;
    exports.createFactory = createFactory;
    exports.createRef = createRef;
    exports.forwardRef = forwardRef;
    exports.isValidElement = isValidElement;
    exports.lazy = lazy;
    exports.memo = memo;
    exports.useCallback = useCallback;
    exports.useContext = useContext;
    exports.useDebugValue = useDebugValue;
    exports.useEffect = useEffect;
    exports.useImperativeHandle = useImperativeHandle;
    exports.useLayoutEffect = useLayoutEffect;
    exports.useMemo = useMemo;
    exports.useReducer = useReducer;
    exports.useRef = useRef;
    exports.useState = useState;
    exports.version = ReactVersion;
})();

},{"object-assign":"7OXxh"}],"7OXxh":[function(require,module,exports) {
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ 'use strict';
/* eslint-disable no-unused-vars */ var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
    if (val === null || val === undefined) throw new TypeError('Object.assign cannot be called with null or undefined');
    return Object(val);
}
function shouldUseNative() {
    try {
        if (!Object.assign) return false;
        // Detect buggy property enumeration order in older V8 versions.
        // https://bugs.chromium.org/p/v8/issues/detail?id=4118
        var test1 = "abc"; // eslint-disable-line no-new-wrappers
        test1[5] = 'de';
        if (Object.getOwnPropertyNames(test1)[0] === '5') return false;
        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
        var test2 = {
        };
        for(var i = 0; i < 10; i++)test2['_' + String.fromCharCode(i)] = i;
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
            return test2[n];
        });
        if (order2.join('') !== '0123456789') return false;
        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
        var test3 = {
        };
        'abcdefghijklmnopqrst'.split('').forEach(function(letter) {
            test3[letter] = letter;
        });
        if (Object.keys(Object.assign({
        }, test3)).join('') !== 'abcdefghijklmnopqrst') return false;
        return true;
    } catch (err) {
        // We don't expect any of the above to throw, but better to be safe.
        return false;
    }
}
module.exports = shouldUseNative() ? Object.assign : function(target, source) {
    var from;
    var to = toObject(target);
    var symbols;
    for(var s = 1; s < arguments.length; s++){
        from = Object(arguments[s]);
        for(var key in from)if (hasOwnProperty.call(from, key)) to[key] = from[key];
        if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for(var i = 0; i < symbols.length; i++)if (propIsEnumerable.call(from, symbols[i])) to[symbols[i]] = from[symbols[i]];
        }
    }
    return to;
};

},{}],"km3Ru":[function(require,module,exports) {
"use strict";
var Refresh = require('react-refresh/runtime');
function debounce(func, delay) {
    var args1;
    var timeout = undefined;
    return function(args) {
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            timeout = undefined;
            func.call(null, args);
        }, delay);
    };
}
var enqueueUpdate = debounce(function() {
    Refresh.performReactRefresh();
}, 30); // Everthing below is either adapted or copied from
// https://github.com/facebook/metro/blob/61de16bd1edd7e738dd0311c89555a644023ab2d/packages/metro/src/lib/polyfills/require.js
// MIT License - Copyright (c) Facebook, Inc. and its affiliates.
module.exports.prelude = function(module) {
    window.$RefreshReg$ = function(type, id) {
        Refresh.register(type, module.id + ' ' + id);
    };
    window.$RefreshSig$ = Refresh.createSignatureFunctionForTransform;
};
module.exports.postlude = function(module) {
    if (isReactRefreshBoundary(module.exports)) {
        registerExportsForReactRefresh(module);
        if (module.hot) {
            module.hot.dispose(function(data) {
                if (Refresh.hasUnrecoverableErrors()) window.location.reload();
                data.prevExports = module.exports;
            });
            module.hot.accept(function(getParents) {
                var prevExports = module.hot.data.prevExports;
                var nextExports = module.exports; // Since we just executed the code for it, it's possible
                // that the new exports make it ineligible for being a boundary.
                var isNoLongerABoundary = !isReactRefreshBoundary(nextExports); // It can also become ineligible if its exports are incompatible
                // with the previous exports.
                // For example, if you add/remove/change exports, we'll want
                // to re-execute the importing modules, and force those components
                // to re-render. Similarly, if you convert a class component
                // to a function, we want to invalidate the boundary.
                var didInvalidate = shouldInvalidateReactRefreshBoundary(prevExports, nextExports);
                if (isNoLongerABoundary || didInvalidate) {
                    // We'll be conservative. The only case in which we won't do a full
                    // reload is if all parent modules are also refresh boundaries.
                    // In that case we'll add them to the current queue.
                    var parents = getParents();
                    if (parents.length === 0) {
                        // Looks like we bubbled to the root. Can't recover from that.
                        window.location.reload();
                        return;
                    }
                    return parents;
                }
                enqueueUpdate();
            });
        }
    }
};
function isReactRefreshBoundary(exports) {
    if (Refresh.isLikelyComponentType(exports)) return true;
    if (exports == null || typeof exports !== 'object') // Exit if we can't iterate over exports.
    return false;
    var hasExports = false;
    var areAllExportsComponents = true;
    let isESM = '__esModule' in exports;
    for(var key in exports){
        hasExports = true;
        if (key === '__esModule') continue;
        var desc = Object.getOwnPropertyDescriptor(exports, key);
        if (desc && desc.get && !isESM) // Don't invoke getters for CJS as they may have side effects.
        return false;
        var exportValue = exports[key];
        if (!Refresh.isLikelyComponentType(exportValue)) areAllExportsComponents = false;
    }
    return hasExports && areAllExportsComponents;
}
function shouldInvalidateReactRefreshBoundary(prevExports, nextExports) {
    var prevSignature = getRefreshBoundarySignature(prevExports);
    var nextSignature = getRefreshBoundarySignature(nextExports);
    if (prevSignature.length !== nextSignature.length) return true;
    for(var i = 0; i < nextSignature.length; i++){
        if (prevSignature[i] !== nextSignature[i]) return true;
    }
    return false;
} // When this signature changes, it's unsafe to stop at this refresh boundary.
function getRefreshBoundarySignature(exports) {
    var signature = [];
    signature.push(Refresh.getFamilyByType(exports));
    if (exports == null || typeof exports !== 'object') // Exit if we can't iterate over exports.
    // (This is important for legacy environments.)
    return signature;
    let isESM = '__esModule' in exports;
    for(var key in exports){
        if (key === '__esModule') continue;
        var desc = Object.getOwnPropertyDescriptor(exports, key);
        if (desc && desc.get && !isESM) continue;
        var exportValue = exports[key];
        signature.push(key);
        signature.push(Refresh.getFamilyByType(exportValue));
    }
    return signature;
}
function registerExportsForReactRefresh(module) {
    var exports = module.exports, id = module.id;
    Refresh.register(exports, id + ' %exports%');
    if (exports == null || typeof exports !== 'object') // Exit if we can't iterate over exports.
    // (This is important for legacy environments.)
    return;
    let isESM = '__esModule' in exports;
    for(var key in exports){
        var desc = Object.getOwnPropertyDescriptor(exports, key);
        if (desc && desc.get && !isESM) continue;
        var exportValue = exports[key];
        Refresh.register(exportValue, id + ' %exports% ' + key);
    }
}

},{"react-refresh/runtime":"786KC"}]},["kn9T2","5Jve1","5QLk1"], "5QLk1", "parcelRequire94c2")

//# sourceMappingURL=index.a73672b0.js.map
