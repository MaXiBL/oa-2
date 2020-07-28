window["Annotation"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./src/assets/styles/index.less":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src!./node_modules/less-loader/dist/cjs.js!./src/assets/styles/index.less ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var getUrl = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ../images/icon_close.png */ "./src/assets/images/icon_close.png"));
// Module
exports.push([module.i, "svg polyline,\nsvg polygon,\nsvg line,\nsvg ellipse,\nsvg rect,\nsvg path {\n  stroke-linejoin: round;\n  stroke-linecap: round;\n  vector-effect: non-scaling-stroke;\n  cursor: pointer;\n}\nsvg polyline.active,\nsvg polygon.active,\nsvg line.active,\nsvg ellipse.active,\nsvg rect.active,\nsvg path.active {\n  stroke: #ffff00;\n}\n.icon-close {\n  position: absolute;\n  height: 16px;\n  width: 16px;\n  background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n  background-repeat: no-repeat;\n  background-size: contain;\n  cursor: pointer;\n}\n.start-point,\n.end-point {\n  position: absolute;\n  transform: translate(-50%, -50%);\n  height: 6px;\n  width: 6px;\n  border-radius: 50%;\n}\n.measure-tip {\n  position: absolute;\n  display: inline-block;\n  padding: 0 5px;\n  height: 20px;\n  color: #fff;\n  background-color: #2E2E35;\n  border-radius: 10px;\n  font-size: 9px;\n  font-weight: normal;\n  line-height: 20px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/fbjs/lib/invariant.js":
/*!********************************************!*\
  !*** ./node_modules/fbjs/lib/invariant.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (true) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),

/***/ "./node_modules/flux/index.js":
/*!************************************!*\
  !*** ./node_modules/flux/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

module.exports.Dispatcher = __webpack_require__(/*! ./lib/Dispatcher */ "./node_modules/flux/lib/Dispatcher.js");


/***/ }),

/***/ "./node_modules/flux/lib/Dispatcher.js":
/*!*********************************************!*\
  !*** ./node_modules/flux/lib/Dispatcher.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Dispatcher
 * 
 * @preventMunge
 */



exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var invariant = __webpack_require__(/*! fbjs/lib/invariant */ "./node_modules/fbjs/lib/invariant.js");

var _prefix = 'ID_';

/**
 * Dispatcher is used to broadcast payloads to registered callbacks. This is
 * different from generic pub-sub systems in two ways:
 *
 *   1) Callbacks are not subscribed to particular events. Every payload is
 *      dispatched to every registered callback.
 *   2) Callbacks can be deferred in whole or part until other callbacks have
 *      been executed.
 *
 * For example, consider this hypothetical flight destination form, which
 * selects a default city when a country is selected:
 *
 *   var flightDispatcher = new Dispatcher();
 *
 *   // Keeps track of which country is selected
 *   var CountryStore = {country: null};
 *
 *   // Keeps track of which city is selected
 *   var CityStore = {city: null};
 *
 *   // Keeps track of the base flight price of the selected city
 *   var FlightPriceStore = {price: null}
 *
 * When a user changes the selected city, we dispatch the payload:
 *
 *   flightDispatcher.dispatch({
 *     actionType: 'city-update',
 *     selectedCity: 'paris'
 *   });
 *
 * This payload is digested by `CityStore`:
 *
 *   flightDispatcher.register(function(payload) {
 *     if (payload.actionType === 'city-update') {
 *       CityStore.city = payload.selectedCity;
 *     }
 *   });
 *
 * When the user selects a country, we dispatch the payload:
 *
 *   flightDispatcher.dispatch({
 *     actionType: 'country-update',
 *     selectedCountry: 'australia'
 *   });
 *
 * This payload is digested by both stores:
 *
 *   CountryStore.dispatchToken = flightDispatcher.register(function(payload) {
 *     if (payload.actionType === 'country-update') {
 *       CountryStore.country = payload.selectedCountry;
 *     }
 *   });
 *
 * When the callback to update `CountryStore` is registered, we save a reference
 * to the returned token. Using this token with `waitFor()`, we can guarantee
 * that `CountryStore` is updated before the callback that updates `CityStore`
 * needs to query its data.
 *
 *   CityStore.dispatchToken = flightDispatcher.register(function(payload) {
 *     if (payload.actionType === 'country-update') {
 *       // `CountryStore.country` may not be updated.
 *       flightDispatcher.waitFor([CountryStore.dispatchToken]);
 *       // `CountryStore.country` is now guaranteed to be updated.
 *
 *       // Select the default city for the new country
 *       CityStore.city = getDefaultCityForCountry(CountryStore.country);
 *     }
 *   });
 *
 * The usage of `waitFor()` can be chained, for example:
 *
 *   FlightPriceStore.dispatchToken =
 *     flightDispatcher.register(function(payload) {
 *       switch (payload.actionType) {
 *         case 'country-update':
 *         case 'city-update':
 *           flightDispatcher.waitFor([CityStore.dispatchToken]);
 *           FlightPriceStore.price =
 *             getFlightPriceStore(CountryStore.country, CityStore.city);
 *           break;
 *     }
 *   });
 *
 * The `country-update` payload will be guaranteed to invoke the stores'
 * registered callbacks in order: `CountryStore`, `CityStore`, then
 * `FlightPriceStore`.
 */

var Dispatcher = (function () {
  function Dispatcher() {
    _classCallCheck(this, Dispatcher);

    this._callbacks = {};
    this._isDispatching = false;
    this._isHandled = {};
    this._isPending = {};
    this._lastID = 1;
  }

  /**
   * Registers a callback to be invoked with every dispatched payload. Returns
   * a token that can be used with `waitFor()`.
   */

  Dispatcher.prototype.register = function register(callback) {
    var id = _prefix + this._lastID++;
    this._callbacks[id] = callback;
    return id;
  };

  /**
   * Removes a callback based on its token.
   */

  Dispatcher.prototype.unregister = function unregister(id) {
    !this._callbacks[id] ?  true ? invariant(false, 'Dispatcher.unregister(...): `%s` does not map to a registered callback.', id) : undefined : undefined;
    delete this._callbacks[id];
  };

  /**
   * Waits for the callbacks specified to be invoked before continuing execution
   * of the current callback. This method should only be used by a callback in
   * response to a dispatched payload.
   */

  Dispatcher.prototype.waitFor = function waitFor(ids) {
    !this._isDispatching ?  true ? invariant(false, 'Dispatcher.waitFor(...): Must be invoked while dispatching.') : undefined : undefined;
    for (var ii = 0; ii < ids.length; ii++) {
      var id = ids[ii];
      if (this._isPending[id]) {
        !this._isHandled[id] ?  true ? invariant(false, 'Dispatcher.waitFor(...): Circular dependency detected while ' + 'waiting for `%s`.', id) : undefined : undefined;
        continue;
      }
      !this._callbacks[id] ?  true ? invariant(false, 'Dispatcher.waitFor(...): `%s` does not map to a registered callback.', id) : undefined : undefined;
      this._invokeCallback(id);
    }
  };

  /**
   * Dispatches a payload to all registered callbacks.
   */

  Dispatcher.prototype.dispatch = function dispatch(payload) {
    !!this._isDispatching ?  true ? invariant(false, 'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.') : undefined : undefined;
    this._startDispatching(payload);
    try {
      for (var id in this._callbacks) {
        if (this._isPending[id]) {
          continue;
        }
        this._invokeCallback(id);
      }
    } finally {
      this._stopDispatching();
    }
  };

  /**
   * Is this Dispatcher currently dispatching.
   */

  Dispatcher.prototype.isDispatching = function isDispatching() {
    return this._isDispatching;
  };

  /**
   * Call the callback stored with the given id. Also do some internal
   * bookkeeping.
   *
   * @internal
   */

  Dispatcher.prototype._invokeCallback = function _invokeCallback(id) {
    this._isPending[id] = true;
    this._callbacks[id](this._pendingPayload);
    this._isHandled[id] = true;
  };

  /**
   * Set up bookkeeping needed when dispatching.
   *
   * @internal
   */

  Dispatcher.prototype._startDispatching = function _startDispatching(payload) {
    for (var id in this._callbacks) {
      this._isPending[id] = false;
      this._isHandled[id] = false;
    }
    this._pendingPayload = payload;
    this._isDispatching = true;
  };

  /**
   * Clear bookkeeping used for dispatching.
   *
   * @internal
   */

  Dispatcher.prototype._stopDispatching = function _stopDispatching() {
    delete this._pendingPayload;
    this._isDispatching = false;
  };

  return Dispatcher;
})();

module.exports = Dispatcher;

/***/ }),

/***/ "./node_modules/preact/dist/preact.mjs":
/*!*********************************************!*\
  !*** ./node_modules/preact/dist/preact.mjs ***!
  \*********************************************/
/*! exports provided: default, h, createElement, cloneElement, createRef, Component, render, rerender, options */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return cloneElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRef", function() { return createRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rerender", function() { return rerender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
var VNode = function VNode() {};

var options = {};

var stack = [];

var EMPTY_CHILDREN = [];

function h(nodeName, attributes) {
	var children = EMPTY_CHILDREN,
	    lastSimple,
	    child,
	    simple,
	    i;
	for (i = arguments.length; i-- > 2;) {
		stack.push(arguments[i]);
	}
	if (attributes && attributes.children != null) {
		if (!stack.length) stack.push(attributes.children);
		delete attributes.children;
	}
	while (stack.length) {
		if ((child = stack.pop()) && child.pop !== undefined) {
			for (i = child.length; i--;) {
				stack.push(child[i]);
			}
		} else {
			if (typeof child === 'boolean') child = null;

			if (simple = typeof nodeName !== 'function') {
				if (child == null) child = '';else if (typeof child === 'number') child = String(child);else if (typeof child !== 'string') simple = false;
			}

			if (simple && lastSimple) {
				children[children.length - 1] += child;
			} else if (children === EMPTY_CHILDREN) {
				children = [child];
			} else {
				children.push(child);
			}

			lastSimple = simple;
		}
	}

	var p = new VNode();
	p.nodeName = nodeName;
	p.children = children;
	p.attributes = attributes == null ? undefined : attributes;
	p.key = attributes == null ? undefined : attributes.key;

	if (options.vnode !== undefined) options.vnode(p);

	return p;
}

function extend(obj, props) {
  for (var i in props) {
    obj[i] = props[i];
  }return obj;
}

function applyRef(ref, value) {
  if (ref != null) {
    if (typeof ref == 'function') ref(value);else ref.current = value;
  }
}

var defer = typeof Promise == 'function' ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;

function cloneElement(vnode, props) {
  return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
}

var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

var items = [];

function enqueueRender(component) {
	if (!component._dirty && (component._dirty = true) && items.push(component) == 1) {
		(options.debounceRendering || defer)(rerender);
	}
}

function rerender() {
	var p;
	while (p = items.pop()) {
		if (p._dirty) renderComponent(p);
	}
}

function isSameNodeType(node, vnode, hydrating) {
	if (typeof vnode === 'string' || typeof vnode === 'number') {
		return node.splitText !== undefined;
	}
	if (typeof vnode.nodeName === 'string') {
		return !node._componentConstructor && isNamedNode(node, vnode.nodeName);
	}
	return hydrating || node._componentConstructor === vnode.nodeName;
}

function isNamedNode(node, nodeName) {
	return node.normalizedNodeName === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
}

function getNodeProps(vnode) {
	var props = extend({}, vnode.attributes);
	props.children = vnode.children;

	var defaultProps = vnode.nodeName.defaultProps;
	if (defaultProps !== undefined) {
		for (var i in defaultProps) {
			if (props[i] === undefined) {
				props[i] = defaultProps[i];
			}
		}
	}

	return props;
}

function createNode(nodeName, isSvg) {
	var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);
	node.normalizedNodeName = nodeName;
	return node;
}

function removeNode(node) {
	var parentNode = node.parentNode;
	if (parentNode) parentNode.removeChild(node);
}

function setAccessor(node, name, old, value, isSvg) {
	if (name === 'className') name = 'class';

	if (name === 'key') {} else if (name === 'ref') {
		applyRef(old, null);
		applyRef(value, node);
	} else if (name === 'class' && !isSvg) {
		node.className = value || '';
	} else if (name === 'style') {
		if (!value || typeof value === 'string' || typeof old === 'string') {
			node.style.cssText = value || '';
		}
		if (value && typeof value === 'object') {
			if (typeof old !== 'string') {
				for (var i in old) {
					if (!(i in value)) node.style[i] = '';
				}
			}
			for (var i in value) {
				node.style[i] = typeof value[i] === 'number' && IS_NON_DIMENSIONAL.test(i) === false ? value[i] + 'px' : value[i];
			}
		}
	} else if (name === 'dangerouslySetInnerHTML') {
		if (value) node.innerHTML = value.__html || '';
	} else if (name[0] == 'o' && name[1] == 'n') {
		var useCapture = name !== (name = name.replace(/Capture$/, ''));
		name = name.toLowerCase().substring(2);
		if (value) {
			if (!old) node.addEventListener(name, eventProxy, useCapture);
		} else {
			node.removeEventListener(name, eventProxy, useCapture);
		}
		(node._listeners || (node._listeners = {}))[name] = value;
	} else if (name !== 'list' && name !== 'type' && !isSvg && name in node) {
		try {
			node[name] = value == null ? '' : value;
		} catch (e) {}
		if ((value == null || value === false) && name != 'spellcheck') node.removeAttribute(name);
	} else {
		var ns = isSvg && name !== (name = name.replace(/^xlink:?/, ''));

		if (value == null || value === false) {
			if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase());else node.removeAttribute(name);
		} else if (typeof value !== 'function') {
			if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value);else node.setAttribute(name, value);
		}
	}
}

function eventProxy(e) {
	return this._listeners[e.type](options.event && options.event(e) || e);
}

var mounts = [];

var diffLevel = 0;

var isSvgMode = false;

var hydrating = false;

function flushMounts() {
	var c;
	while (c = mounts.shift()) {
		if (options.afterMount) options.afterMount(c);
		if (c.componentDidMount) c.componentDidMount();
	}
}

function diff(dom, vnode, context, mountAll, parent, componentRoot) {
	if (!diffLevel++) {
		isSvgMode = parent != null && parent.ownerSVGElement !== undefined;

		hydrating = dom != null && !('__preactattr_' in dom);
	}

	var ret = idiff(dom, vnode, context, mountAll, componentRoot);

	if (parent && ret.parentNode !== parent) parent.appendChild(ret);

	if (! --diffLevel) {
		hydrating = false;

		if (!componentRoot) flushMounts();
	}

	return ret;
}

function idiff(dom, vnode, context, mountAll, componentRoot) {
	var out = dom,
	    prevSvgMode = isSvgMode;

	if (vnode == null || typeof vnode === 'boolean') vnode = '';

	if (typeof vnode === 'string' || typeof vnode === 'number') {
		if (dom && dom.splitText !== undefined && dom.parentNode && (!dom._component || componentRoot)) {
			if (dom.nodeValue != vnode) {
				dom.nodeValue = vnode;
			}
		} else {
			out = document.createTextNode(vnode);
			if (dom) {
				if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
				recollectNodeTree(dom, true);
			}
		}

		out['__preactattr_'] = true;

		return out;
	}

	var vnodeName = vnode.nodeName;
	if (typeof vnodeName === 'function') {
		return buildComponentFromVNode(dom, vnode, context, mountAll);
	}

	isSvgMode = vnodeName === 'svg' ? true : vnodeName === 'foreignObject' ? false : isSvgMode;

	vnodeName = String(vnodeName);
	if (!dom || !isNamedNode(dom, vnodeName)) {
		out = createNode(vnodeName, isSvgMode);

		if (dom) {
			while (dom.firstChild) {
				out.appendChild(dom.firstChild);
			}
			if (dom.parentNode) dom.parentNode.replaceChild(out, dom);

			recollectNodeTree(dom, true);
		}
	}

	var fc = out.firstChild,
	    props = out['__preactattr_'],
	    vchildren = vnode.children;

	if (props == null) {
		props = out['__preactattr_'] = {};
		for (var a = out.attributes, i = a.length; i--;) {
			props[a[i].name] = a[i].value;
		}
	}

	if (!hydrating && vchildren && vchildren.length === 1 && typeof vchildren[0] === 'string' && fc != null && fc.splitText !== undefined && fc.nextSibling == null) {
		if (fc.nodeValue != vchildren[0]) {
			fc.nodeValue = vchildren[0];
		}
	} else if (vchildren && vchildren.length || fc != null) {
			innerDiffNode(out, vchildren, context, mountAll, hydrating || props.dangerouslySetInnerHTML != null);
		}

	diffAttributes(out, vnode.attributes, props);

	isSvgMode = prevSvgMode;

	return out;
}

function innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {
	var originalChildren = dom.childNodes,
	    children = [],
	    keyed = {},
	    keyedLen = 0,
	    min = 0,
	    len = originalChildren.length,
	    childrenLen = 0,
	    vlen = vchildren ? vchildren.length : 0,
	    j,
	    c,
	    f,
	    vchild,
	    child;

	if (len !== 0) {
		for (var i = 0; i < len; i++) {
			var _child = originalChildren[i],
			    props = _child['__preactattr_'],
			    key = vlen && props ? _child._component ? _child._component.__key : props.key : null;
			if (key != null) {
				keyedLen++;
				keyed[key] = _child;
			} else if (props || (_child.splitText !== undefined ? isHydrating ? _child.nodeValue.trim() : true : isHydrating)) {
				children[childrenLen++] = _child;
			}
		}
	}

	if (vlen !== 0) {
		for (var i = 0; i < vlen; i++) {
			vchild = vchildren[i];
			child = null;

			var key = vchild.key;
			if (key != null) {
				if (keyedLen && keyed[key] !== undefined) {
					child = keyed[key];
					keyed[key] = undefined;
					keyedLen--;
				}
			} else if (min < childrenLen) {
					for (j = min; j < childrenLen; j++) {
						if (children[j] !== undefined && isSameNodeType(c = children[j], vchild, isHydrating)) {
							child = c;
							children[j] = undefined;
							if (j === childrenLen - 1) childrenLen--;
							if (j === min) min++;
							break;
						}
					}
				}

			child = idiff(child, vchild, context, mountAll);

			f = originalChildren[i];
			if (child && child !== dom && child !== f) {
				if (f == null) {
					dom.appendChild(child);
				} else if (child === f.nextSibling) {
					removeNode(f);
				} else {
					dom.insertBefore(child, f);
				}
			}
		}
	}

	if (keyedLen) {
		for (var i in keyed) {
			if (keyed[i] !== undefined) recollectNodeTree(keyed[i], false);
		}
	}

	while (min <= childrenLen) {
		if ((child = children[childrenLen--]) !== undefined) recollectNodeTree(child, false);
	}
}

function recollectNodeTree(node, unmountOnly) {
	var component = node._component;
	if (component) {
		unmountComponent(component);
	} else {
		if (node['__preactattr_'] != null) applyRef(node['__preactattr_'].ref, null);

		if (unmountOnly === false || node['__preactattr_'] == null) {
			removeNode(node);
		}

		removeChildren(node);
	}
}

function removeChildren(node) {
	node = node.lastChild;
	while (node) {
		var next = node.previousSibling;
		recollectNodeTree(node, true);
		node = next;
	}
}

function diffAttributes(dom, attrs, old) {
	var name;

	for (name in old) {
		if (!(attrs && attrs[name] != null) && old[name] != null) {
			setAccessor(dom, name, old[name], old[name] = undefined, isSvgMode);
		}
	}

	for (name in attrs) {
		if (name !== 'children' && name !== 'innerHTML' && (!(name in old) || attrs[name] !== (name === 'value' || name === 'checked' ? dom[name] : old[name]))) {
			setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
		}
	}
}

var recyclerComponents = [];

function createComponent(Ctor, props, context) {
	var inst,
	    i = recyclerComponents.length;

	if (Ctor.prototype && Ctor.prototype.render) {
		inst = new Ctor(props, context);
		Component.call(inst, props, context);
	} else {
		inst = new Component(props, context);
		inst.constructor = Ctor;
		inst.render = doRender;
	}

	while (i--) {
		if (recyclerComponents[i].constructor === Ctor) {
			inst.nextBase = recyclerComponents[i].nextBase;
			recyclerComponents.splice(i, 1);
			return inst;
		}
	}

	return inst;
}

function doRender(props, state, context) {
	return this.constructor(props, context);
}

function setComponentProps(component, props, renderMode, context, mountAll) {
	if (component._disable) return;
	component._disable = true;

	component.__ref = props.ref;
	component.__key = props.key;
	delete props.ref;
	delete props.key;

	if (typeof component.constructor.getDerivedStateFromProps === 'undefined') {
		if (!component.base || mountAll) {
			if (component.componentWillMount) component.componentWillMount();
		} else if (component.componentWillReceiveProps) {
			component.componentWillReceiveProps(props, context);
		}
	}

	if (context && context !== component.context) {
		if (!component.prevContext) component.prevContext = component.context;
		component.context = context;
	}

	if (!component.prevProps) component.prevProps = component.props;
	component.props = props;

	component._disable = false;

	if (renderMode !== 0) {
		if (renderMode === 1 || options.syncComponentUpdates !== false || !component.base) {
			renderComponent(component, 1, mountAll);
		} else {
			enqueueRender(component);
		}
	}

	applyRef(component.__ref, component);
}

function renderComponent(component, renderMode, mountAll, isChild) {
	if (component._disable) return;

	var props = component.props,
	    state = component.state,
	    context = component.context,
	    previousProps = component.prevProps || props,
	    previousState = component.prevState || state,
	    previousContext = component.prevContext || context,
	    isUpdate = component.base,
	    nextBase = component.nextBase,
	    initialBase = isUpdate || nextBase,
	    initialChildComponent = component._component,
	    skip = false,
	    snapshot = previousContext,
	    rendered,
	    inst,
	    cbase;

	if (component.constructor.getDerivedStateFromProps) {
		state = extend(extend({}, state), component.constructor.getDerivedStateFromProps(props, state));
		component.state = state;
	}

	if (isUpdate) {
		component.props = previousProps;
		component.state = previousState;
		component.context = previousContext;
		if (renderMode !== 2 && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === false) {
			skip = true;
		} else if (component.componentWillUpdate) {
			component.componentWillUpdate(props, state, context);
		}
		component.props = props;
		component.state = state;
		component.context = context;
	}

	component.prevProps = component.prevState = component.prevContext = component.nextBase = null;
	component._dirty = false;

	if (!skip) {
		rendered = component.render(props, state, context);

		if (component.getChildContext) {
			context = extend(extend({}, context), component.getChildContext());
		}

		if (isUpdate && component.getSnapshotBeforeUpdate) {
			snapshot = component.getSnapshotBeforeUpdate(previousProps, previousState);
		}

		var childComponent = rendered && rendered.nodeName,
		    toUnmount,
		    base;

		if (typeof childComponent === 'function') {

			var childProps = getNodeProps(rendered);
			inst = initialChildComponent;

			if (inst && inst.constructor === childComponent && childProps.key == inst.__key) {
				setComponentProps(inst, childProps, 1, context, false);
			} else {
				toUnmount = inst;

				component._component = inst = createComponent(childComponent, childProps, context);
				inst.nextBase = inst.nextBase || nextBase;
				inst._parentComponent = component;
				setComponentProps(inst, childProps, 0, context, false);
				renderComponent(inst, 1, mountAll, true);
			}

			base = inst.base;
		} else {
			cbase = initialBase;

			toUnmount = initialChildComponent;
			if (toUnmount) {
				cbase = component._component = null;
			}

			if (initialBase || renderMode === 1) {
				if (cbase) cbase._component = null;
				base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, true);
			}
		}

		if (initialBase && base !== initialBase && inst !== initialChildComponent) {
			var baseParent = initialBase.parentNode;
			if (baseParent && base !== baseParent) {
				baseParent.replaceChild(base, initialBase);

				if (!toUnmount) {
					initialBase._component = null;
					recollectNodeTree(initialBase, false);
				}
			}
		}

		if (toUnmount) {
			unmountComponent(toUnmount);
		}

		component.base = base;
		if (base && !isChild) {
			var componentRef = component,
			    t = component;
			while (t = t._parentComponent) {
				(componentRef = t).base = base;
			}
			base._component = componentRef;
			base._componentConstructor = componentRef.constructor;
		}
	}

	if (!isUpdate || mountAll) {
		mounts.push(component);
	} else if (!skip) {

		if (component.componentDidUpdate) {
			component.componentDidUpdate(previousProps, previousState, snapshot);
		}
		if (options.afterUpdate) options.afterUpdate(component);
	}

	while (component._renderCallbacks.length) {
		component._renderCallbacks.pop().call(component);
	}if (!diffLevel && !isChild) flushMounts();
}

function buildComponentFromVNode(dom, vnode, context, mountAll) {
	var c = dom && dom._component,
	    originalComponent = c,
	    oldDom = dom,
	    isDirectOwner = c && dom._componentConstructor === vnode.nodeName,
	    isOwner = isDirectOwner,
	    props = getNodeProps(vnode);
	while (c && !isOwner && (c = c._parentComponent)) {
		isOwner = c.constructor === vnode.nodeName;
	}

	if (c && isOwner && (!mountAll || c._component)) {
		setComponentProps(c, props, 3, context, mountAll);
		dom = c.base;
	} else {
		if (originalComponent && !isDirectOwner) {
			unmountComponent(originalComponent);
			dom = oldDom = null;
		}

		c = createComponent(vnode.nodeName, props, context);
		if (dom && !c.nextBase) {
			c.nextBase = dom;

			oldDom = null;
		}
		setComponentProps(c, props, 1, context, mountAll);
		dom = c.base;

		if (oldDom && dom !== oldDom) {
			oldDom._component = null;
			recollectNodeTree(oldDom, false);
		}
	}

	return dom;
}

function unmountComponent(component) {
	if (options.beforeUnmount) options.beforeUnmount(component);

	var base = component.base;

	component._disable = true;

	if (component.componentWillUnmount) component.componentWillUnmount();

	component.base = null;

	var inner = component._component;
	if (inner) {
		unmountComponent(inner);
	} else if (base) {
		if (base['__preactattr_'] != null) applyRef(base['__preactattr_'].ref, null);

		component.nextBase = base;

		removeNode(base);
		recyclerComponents.push(component);

		removeChildren(base);
	}

	applyRef(component.__ref, null);
}

function Component(props, context) {
	this._dirty = true;

	this.context = context;

	this.props = props;

	this.state = this.state || {};

	this._renderCallbacks = [];
}

extend(Component.prototype, {
	setState: function setState(state, callback) {
		if (!this.prevState) this.prevState = this.state;
		this.state = extend(extend({}, this.state), typeof state === 'function' ? state(this.state, this.props) : state);
		if (callback) this._renderCallbacks.push(callback);
		enqueueRender(this);
	},
	forceUpdate: function forceUpdate(callback) {
		if (callback) this._renderCallbacks.push(callback);
		renderComponent(this, 2);
	},
	render: function render() {}
});

function render(vnode, parent, merge) {
  return diff(merge, vnode, {}, false, parent, false);
}

function createRef() {
	return {};
}

var preact = {
	h: h,
	createElement: h,
	cloneElement: cloneElement,
	createRef: createRef,
	Component: Component,
	render: render,
	rerender: rerender,
	options: options
};

/* harmony default export */ __webpack_exports__["default"] = (preact);

//# sourceMappingURL=preact.mjs.map


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/assets/images/icon_close.png":
/*!******************************************!*\
  !*** ./src/assets/images/icon_close.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAATlBMVEVHcEz/SET/SET/SEP/SET/SET/RkD/SkP/R0P/R0T/SET/////Skb/wL//xMP/YFz/ZWH/09L/7e3/7u3/wL7/X1z/gH3/ZGH/ZWL/gH5SGK5CAAAACnRSTlMA8fSu7q0oJvOt9NGMTwAAAKVJREFUKM/F09kOwiAQBdCptgUuaxda/f8fNYWoVQZNX3QeCMkJZBYgEkqCDal6ItGiGq0ghWXUbIwLFElUVOsJkgBdDeA3PATv8s75MBQcAGO3jTXApWCP7JsiFuxM8qTGlanNCdIyc5mng3t9Kyx7TvAwPy63HNtnalYfLeylLb7gdd/UlRlJvI8kMiP5x2v5+JCb7RtMFb2i+/aJSHQnHptzTzf2sCZppluhwwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/styles/index.less":
/*!**************************************!*\
  !*** ./src/assets/styles/index.less ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/src!../../../node_modules/less-loader/dist/cjs.js!./index.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js!./node_modules/less-loader/dist/cjs.js!./src/assets/styles/index.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var OpenSeadragon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! OpenSeadragon */ "OpenSeadragon");
/* harmony import */ var OpenSeadragon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(OpenSeadragon__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _views_Overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/Overlay */ "./src/views/Overlay.ts");
/* harmony import */ var _model_createDispatcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model/createDispatcher */ "./src/model/createDispatcher.ts");
/* harmony import */ var _model_generalActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/generalActions */ "./src/model/generalActions.ts");
/* harmony import */ var _model_createModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./model/createModel */ "./src/model/createModel.ts");
/* harmony import */ var _assets_styles_index_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/styles/index.less */ "./src/assets/styles/index.less");
/* harmony import */ var _assets_styles_index_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_index_less__WEBPACK_IMPORTED_MODULE_6__);







const annotationsPrototype = {
    onOpen() {
        this.overlay = Object(preact__WEBPACK_IMPORTED_MODULE_1__["render"])(Object(preact__WEBPACK_IMPORTED_MODULE_1__["h"])(_views_Overlay__WEBPACK_IMPORTED_MODULE_2__["default"], { dispatch: this.dispatch, model: this.model }), document.body);
        const homeBounds = this.viewer.world.getHomeBounds();
        const zoom = this.viewer.viewport.getZoom();
        this.viewer.addOverlay(this.overlay, new OpenSeadragon__WEBPACK_IMPORTED_MODULE_0__["Rect"](0, 0, homeBounds.width, homeBounds.height, 0));
        const { width, height } = this.overlay.getBoundingClientRect();
        this.dispatch({
            type: 'INITIALIZE',
            zoom,
            width,
            height
        });
    },
    getAnnotations() {
        return this.model.annotations;
    },
    setAnnotations(annotations) {
        this.dispatch({ type: 'ANNOTATIONS_RESET', annotations });
    },
    cleanAnnotations() {
        this.dispatch({ type: 'ANNOTATIONS_RESET' });
    },
    getMarkers() {
        return this.model.markers;
    },
    setMarkers(markers) {
        this.dispatch({ type: 'MARKERS_REST', markers });
    },
    getMarkerLines() {
        return this.model.markerLines;
    },
    setMarkerLines(markerLines) {
        this.dispatch({ type: 'MARKERLINES_REST', markerLines });
    },
    getMode() {
        return this.model.mode;
    },
    setMode(mode) {
        this.dispatch({ type: 'MODE_UPDATE', mode });
    },
    getStatus() {
        return { active: !!this.overlay };
    },
    setStyle(style) {
        if (!style) {
            style = {};
        }
        if (style.type) {
            this.model.style.type = style.type;
        }
        if (style.color) {
            this.model.style.color = style.color;
        }
        if (style.width) {
            this.model.style.width = style.width;
        }
        if (style.fill) {
            this.model.style.fill = style.fill;
        }
    },
    onStartDraw(style) {
        this.setStyle(style);
        this.dispatch({ type: 'MODE_UPDATE', mode: 'DRAW' });
    },
    onStopDraw() {
        this.dispatch({ type: 'MODE_UPDATE', mode: 'MOVE' });
    },
    setClickAnnotationCallback(cb) {
        this.model.clickAnnotationCallback = cb;
    },
    setAddAnnotationCallback(cb) {
        this.model.addAnnotationCallback = cb;
    },
    setAddMarkersCallback(cb) {
        this.model.addMarkersCallback = cb;
    },
    setDelMarkersCallback(cb) {
        this.model.delMarkersCallback = cb;
    },
    cleanMarkers() {
        this.model.markers = {};
        this.model.markerLines = {};
    },
    setImageConfig(imageWidth, imageHeight, pixelRatio) {
        this.model.imageWidth = imageWidth;
        this.model.imageHeight = imageHeight,
            this.model.pixelRatio = pixelRatio;
    },
};
/* harmony default export */ __webpack_exports__["default"] = ({
    init: ({ viewer, imageHeight, imageWidth, pixelRatio }) => {
        const model = Object(_model_createModel__WEBPACK_IMPORTED_MODULE_5__["default"])();
        // 把图片实际尺寸赋值给Model
        model.imageHeight = imageHeight;
        model.imageWidth = imageWidth;
        model.pixelRatio = pixelRatio;
        const dispatch = Object(_model_createDispatcher__WEBPACK_IMPORTED_MODULE_3__["default"])(model, _model_generalActions__WEBPACK_IMPORTED_MODULE_4__["default"]);
        const annotations = Object.create(annotationsPrototype);
        Object.assign(annotations, { viewer, model, dispatch });
        viewer.addHandler('open', () => annotations.onOpen());
        viewer.addHandler('zoom', ({ zoom }) => annotations.dispatch({ type: 'ZOOM_UPDATE', zoom }));
        if (viewer.isOpen()) {
            annotations.onOpen();
        }
        return annotations;
    }
});


/***/ }),

/***/ "./src/model/createDispatcher.ts":
/*!***************************************!*\
  !*** ./src/model/createDispatcher.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flux */ "./node_modules/flux/index.js");
/* harmony import */ var flux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flux__WEBPACK_IMPORTED_MODULE_0__);

const createDispatcher = (model, ...reactions) => {
    const dispatcher = new flux__WEBPACK_IMPORTED_MODULE_0__["Dispatcher"]();
    reactions.forEach((reaction) => {
        dispatcher.register(reaction(model));
    });
    return (action) => dispatcher.dispatch(action);
};
/* harmony default export */ __webpack_exports__["default"] = (createDispatcher);


/***/ }),

/***/ "./src/model/createModel.ts":
/*!**********************************!*\
  !*** ./src/model/createModel.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var OpenSeadragon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! OpenSeadragon */ "OpenSeadragon");
/* harmony import */ var OpenSeadragon__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(OpenSeadragon__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (() => Object.assign(Object.create(OpenSeadragon__WEBPACK_IMPORTED_MODULE_0__["EventSource"].prototype), {
    events: {},
    mode: 'MOVE',
    zoom: 1,
    width: 0,
    height: 0,
    imageWidth: 0,
    imageHeight: 0,
    pixelRatio: 1,
    drawingId: '',
    addAnnotationCallback: null,
    clickAnnotationCallback: null,
    addMarkersCallback: null,
    delMarkersCallback: null,
    annotations: {},
    markers: {},
    markerLines: {},
    style: {
        type: 'polyline',
        color: 'red',
        fill: 'none',
        width: 3,
    }
}));


/***/ }),

/***/ "./src/model/generalActions.ts":
/*!*************************************!*\
  !*** ./src/model/generalActions.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const createGuid = () => {
    let guid = '';
    for (let i = 1; i <= 32; i++) {
        guid += Math.floor(Math.random() * 16.0).toString(16);
        if ((i === 8) || (i === 12) || (i === 16) || (i === 20)) {
            guid += '-';
        }
    }
    return guid;
};
const reactToGeneralAction = (model) => {
    const clearMeasure = (e) => {
        e.stopPropagation();
        const annotationId = e.target.attributes.annotationId.value;
        // 删除前执行回调
        if (model.delMarkersCallback) {
            model.delMarkersCallback(model.markerLines[annotationId]);
        }
        delete model.markers[annotationId];
        delete model.markerLines[annotationId];
        // 需要重绘
        model.raiseEvent('CHANGE_EVENT');
    };
    const clickAnnotation = (e) => {
        e.stopPropagation();
        const annotationId = e.target.attributes.annotationId.value;
        if (model.clickAnnotationCallback) {
            model.clickAnnotationCallback(annotationId);
        }
    };
    return (action) => {
        switch (action.type) {
            case 'INITIALIZE':
                model.zoom = action.zoom;
                model.width = action.width;
                model.height = action.height;
                break;
            case 'ZOOM_UPDATE':
                model.zoom = action.zoom;
                break;
            case 'MODE_UPDATE':
                model.drawingId = '';
                if (model.mode !== action.mode) {
                    model.mode = action.mode;
                }
                break;
            case 'ANNOTATIONS_RESET':
                model.drawingId = '';
                model.annotations = action.annotations || {};
                break;
            case 'MARKERS_REST':
                model.drawingId = '';
                if (action.markers) {
                    for (const annotationId in action.markers) {
                        if (action.markers.hasOwnProperty(annotationId)) {
                            model.markers[annotationId] = action.markers[annotationId];
                        }
                    }
                }
                break;
            case 'MARKERLINES_REST':
                model.drawingId = '';
                // 测距和测面积,自动加上删除按钮
                if (action.markerLines) {
                    model.markerLines = action.markerLines;
                    for (const annotationId in action.markerLines) {
                        if (action.markerLines.hasOwnProperty(annotationId)) {
                            // 测距
                            if (action.markerLines[annotationId][0] === 'line') {
                                // x1, y1, x2, y2 必须是数字
                                const flag = typeof (Number(action.markerLines[annotationId][1].x1)
                                    + Number(action.markerLines[annotationId][1].y1)
                                    + Number(action.markerLines[annotationId][1].x2)
                                    + Number(action.markerLines[annotationId][1].y2)) === 'number';
                                if (!flag) {
                                    return;
                                }
                                if (!model.markers[annotationId]) {
                                    model.markers[annotationId] = [];
                                }
                                let translate;
                                if (action.markerLines[annotationId][1].x2 >= action.markerLines[annotationId][1].x1) {
                                    translate = 'translate(8px, -8px)';
                                }
                                else {
                                    translate = 'translate(-24px, -8px)';
                                }
                                // 起始圆点
                                model.markers[annotationId].push([
                                    'div',
                                    {
                                        id: `startPoint_${annotationId}`,
                                        annotationId,
                                        class: 'start-point',
                                        style: {
                                            top: `${action.markerLines[annotationId][1].y1}%`,
                                            left: `${action.markerLines[annotationId][1].x1}%`,
                                            'background-color': action.markerLines[annotationId][1].stroke || 'red'
                                        }
                                    }
                                ]);
                                // 结束圆点
                                model.markers[annotationId].push([
                                    'div',
                                    {
                                        id: `endPoint_${annotationId}`,
                                        annotationId,
                                        class: 'end-point',
                                        style: {
                                            top: `${action.markerLines[annotationId][1].y2}%`,
                                            left: `${action.markerLines[annotationId][1].x2}%`,
                                            'background-color': action.markerLines[annotationId][1].stroke || 'red'
                                        }
                                    }
                                ]);
                                model.markers[annotationId].push([
                                    'div',
                                    {
                                        id: `close_${annotationId}`,
                                        annotationId,
                                        class: 'icon-close',
                                        style: {
                                            top: `${action.markerLines[annotationId][1].y2}%`,
                                            left: `${action.markerLines[annotationId][1].x2}%`,
                                            transform: translate,
                                        },
                                        onClick: clearMeasure,
                                        onMouseDown: clearMeasure
                                    }
                                ]);
                            }
                            else {
                                // 测面积
                                const points = action.markerLines[annotationId][1].points.split(' ');
                                if (points.length < 3) {
                                    return;
                                }
                                if (!model.markers[annotationId]) {
                                    model.markers[annotationId] = [];
                                }
                                const position = {
                                    x: points[0].split(',')[0],
                                    y: points[0].split(',')[1]
                                };
                                if (action.y <= 0) {
                                    position.y = 2;
                                }
                                if (action.y >= 100) {
                                    position.y = 98;
                                }
                                if (action.x <= 0) {
                                    position.x = 2;
                                }
                                if (action.x >= 100) {
                                    position.x = 98;
                                }
                                model.markers[annotationId].push([
                                    'div',
                                    {
                                        id: `close_${annotationId}`,
                                        annotationId,
                                        class: 'icon-close',
                                        style: {
                                            top: `${position.y}%`,
                                            left: `${position.x}%`
                                        },
                                        onClick: clearMeasure,
                                        onMouseDown: clearMeasure
                                    }
                                ]);
                            }
                        }
                    }
                }
                else {
                    model.markerLines = {};
                }
                break;
            case 'PRESS':
                if (model.mode === 'DRAW') {
                    model.drawingId = createGuid();
                    const annotationId = model.drawingId;
                    switch (model.style.type) {
                        case 'measureDistance':
                            model.markers[annotationId] = [];
                            // 显示距离
                            model.markers[annotationId].push([
                                'span',
                                {
                                    id: `tip_${annotationId}`,
                                    annotationId,
                                    class: 'measure-tip',
                                    start: {
                                        x: action.x,
                                        y: action.y,
                                    },
                                    'background-color': model.style.color || 'red'
                                },
                                ''
                            ]);
                            // 起始圆点
                            model.markers[annotationId].push([
                                'div',
                                {
                                    id: `startPoint_${annotationId}`,
                                    annotationId,
                                    class: 'start-point',
                                    style: {
                                        top: `${action.y}%`,
                                        left: `${action.x}%`,
                                        'background-color': model.style.color || 'red'
                                    }
                                }
                            ]);
                            // 结束圆点
                            model.markers[annotationId].push([
                                'div',
                                {
                                    id: `endPoint_${annotationId}`,
                                    annotationId,
                                    class: 'end-point',
                                    style: {
                                        top: `${action.y}%`,
                                        left: `${action.x}%`,
                                    },
                                    'background-color': model.style.color || 'red'
                                }
                            ]);
                            // 测量尺子
                            model.markerLines[annotationId] = [
                                'line',
                                {
                                    id: `meameasureDistance_${annotationId}`,
                                    annotationId,
                                    type: 'measureDistance',
                                    x1: action.x,
                                    y1: action.y,
                                    x2: action.x,
                                    y2: action.y,
                                    stroke: model.style.color || 'red',
                                    'stroke-width': model.style.width || 3,
                                }
                            ];
                            break;
                        case 'measureArea':
                            model.markerLines[annotationId] = [
                                'polyline',
                                {
                                    id: `measureArea_${annotationId}`,
                                    annotationId,
                                    type: 'measureArea',
                                    points: `${action.x},${action.y}`,
                                    stroke: model.style.color || 'red',
                                    fill: model.style.fill || 'none',
                                    'stroke-width': model.style.width || 3,
                                    onMouseDown: clickAnnotation
                                }
                            ];
                            break;
                        case 'polyline':
                            model.annotations[annotationId] = [
                                'polyline',
                                {
                                    id: `polyline_${annotationId}`,
                                    annotationId,
                                    points: `${action.x},${action.y}`,
                                    stroke: model.style.color || 'red',
                                    fill: model.style.fill || 'none',
                                    'stroke-width': model.style.width || 3,
                                    onMouseDown: clickAnnotation
                                }
                            ];
                            break;
                        case 'polygon':
                            model.annotations[annotationId] = [
                                'polygon',
                                {
                                    id: `polygon_${annotationId}`,
                                    annotationId,
                                    points: `${action.x},${action.y}`,
                                    stroke: model.style.color || 'red',
                                    fill: model.style.fill || 'none',
                                    'stroke-width': model.style.width || 3,
                                    onMouseDown: clickAnnotation
                                }
                            ];
                            break;
                        case 'line':
                            model.annotations[annotationId] = [
                                'line',
                                {
                                    id: `line_${annotationId}`,
                                    annotationId,
                                    x1: action.x,
                                    y1: action.y,
                                    x2: action.x,
                                    y2: action.y,
                                    stroke: model.style.color || 'red',
                                    fill: model.style.fill || 'none',
                                    'stroke-width': model.style.width || 3,
                                    onMouseDown: clickAnnotation
                                }
                            ];
                            break;
                        case 'ellipse':
                            model.annotations[annotationId] = [
                                'ellipse',
                                {
                                    id: `ellipse_${annotationId}`,
                                    annotationId,
                                    cx: action.x,
                                    cy: action.y,
                                    rx: 0,
                                    ry: 0,
                                    stroke: model.style.color || 'red',
                                    fill: model.style.fill || 'none',
                                    'stroke-width': model.style.width || 3,
                                    onMouseDown: clickAnnotation
                                }
                            ];
                            break;
                        case 'rect':
                            model.annotations[annotationId] = [
                                'rect',
                                {
                                    id: `rect_${annotationId}`,
                                    annotationId,
                                    sx: action.x,
                                    sy: action.y,
                                    x: action.x,
                                    y: action.y,
                                    width: 0,
                                    height: 0,
                                    stroke: model.style.color || 'red',
                                    fill: model.style.fill || 'none',
                                    'stroke-width': model.style.width || 3,
                                    onMouseDown: clickAnnotation
                                }
                            ];
                            break;
                        default:
                            model.annotations[annotationId] = [
                                'path',
                                {
                                    id: `path_${annotationId}`,
                                    annotationId,
                                    d: `M${action.x} ${action.y}`,
                                    stroke: model.style.color || 'red',
                                    fill: model.style.fill || 'none',
                                    'stroke-width': model.style.width || 3,
                                    onMouseDown: clickAnnotation
                                }
                            ];
                    }
                }
                break;
            case 'MOVE':
                // 超过边界时不画
                if (action.x > 0 && action.x < 100 && action.y > 0 || action.y < 100) {
                    if (model.mode === 'DRAW' && model.drawingId) {
                        const lastAnnotation = model.annotations[model.drawingId];
                        if (lastAnnotation) {
                            switch (lastAnnotation[0]) {
                                case 'polyline':
                                case 'polygon':
                                    lastAnnotation[1].points += ` ${action.x},${action.y}`;
                                    break;
                                case 'line':
                                    lastAnnotation[1].x2 = action.x;
                                    lastAnnotation[1].y2 = action.y;
                                    break;
                                case 'ellipse':
                                    lastAnnotation[1].rx = Math.abs(action.x - lastAnnotation[1].cx);
                                    lastAnnotation[1].ry = Math.abs(action.y - lastAnnotation[1].cy);
                                    break;
                                case 'rect':
                                    lastAnnotation[1].x = lastAnnotation[1].sx < action.x ? lastAnnotation[1].sx : action.x;
                                    lastAnnotation[1].y = lastAnnotation[1].sy < action.y ? lastAnnotation[1].sy : action.y;
                                    lastAnnotation[1].width = Math.abs(lastAnnotation[1].sx - action.x);
                                    lastAnnotation[1].height = Math.abs(lastAnnotation[1].sy - action.y);
                                    break;
                                default:
                                    lastAnnotation[1].d += ` L${action.x} ${action.y}`;
                            }
                        }
                        else {
                            const lastMarker = model.markers[model.drawingId];
                            const lastMarkerLine = model.markerLines[model.drawingId];
                            // 判断是否有标记,有就是测距,没有就是测面积
                            if (lastMarker) {
                                const lastMarkerTip = lastMarker[0];
                                const lastMarkerEndPoint = lastMarker[2];
                                lastMarkerLine[1].x2 = action.x;
                                lastMarkerLine[1].y2 = action.y;
                                lastMarkerTip[1].style = `top: ${(lastMarkerLine[1].y1 + lastMarkerLine[1].y2) / 2}%;
                                      left: ${(lastMarkerLine[1].x1 + lastMarkerLine[1].x2) / 2}%;
                                      background-color: ${lastMarkerTip[1]['background-color']}`;
                                const x = Math.pow(Math.round((action.x - lastMarkerTip[1].start.x) * model.imageWidth * 0.01), 2);
                                const y = Math.pow(Math.round((action.y - lastMarkerTip[1].start.y) * model.imageHeight * 0.01), 2);
                                const z = Math.round(Math.sqrt(x + y) * model.pixelRatio);
                                lastMarkerTip[2] = `${z}μm`;
                                lastMarkerEndPoint[1].style = `top: ${action.y}%;
                                            left: ${action.x}%;
                                            background-color: ${lastMarkerEndPoint[1]['background-color']}`;
                            }
                            else {
                                lastMarkerLine[1].points += ` ${action.x},${action.y}`;
                            }
                        }
                    }
                }
                break;
            case 'RELEASE':
            case 'LEAVE_CANVAS':
                if (model.mode === 'DRAW' && model.drawingId) {
                    const annotationId = model.drawingId;
                    const lastAnnotation = model.annotations[annotationId];
                    model.drawingId = false;
                    if (lastAnnotation) {
                        switch (lastAnnotation[0]) {
                            case 'polyline':
                            case 'polygon':
                            case 'line':
                            case 'ellipse':
                            case 'rect':
                            default:
                                if (model.addAnnotationCallback) {
                                    model.addAnnotationCallback(lastAnnotation);
                                }
                                break;
                        }
                    }
                    else {
                        const lastMarker = model.markers[annotationId];
                        const lastMarkerLine = model.markerLines[annotationId];
                        // 判断是否有标记,有就是测距,没有就是测面积
                        if (lastMarker) {
                            // 判断是否有距离
                            if (lastMarker[0][2]) {
                                let translate;
                                if (lastMarkerLine[1].x2 >= lastMarkerLine[1].x1) {
                                    translate = 'translate(8px, -8px)';
                                }
                                else {
                                    translate = 'translate(-24px, -8px)';
                                }
                                model.markers[annotationId].push([
                                    'div',
                                    {
                                        id: `close_${annotationId}`,
                                        annotationId,
                                        class: 'icon-close',
                                        style: {
                                            top: `${lastMarkerLine[1].y2}%`,
                                            left: `${lastMarkerLine[1].x2}%`,
                                            transform: translate,
                                        },
                                        onClick: clearMeasure,
                                        onMouseDown: clearMeasure
                                    }
                                ]);
                                if (model.addMarkersCallback) {
                                    model.addMarkersCallback(lastMarkerLine);
                                }
                            }
                            else {
                                // 不保存
                                delete model.markers[annotationId];
                                delete model.markerLines[annotationId];
                            }
                        }
                        else {
                            // 判断测面积画的点数是否大于3
                            if (lastMarkerLine[1].points.split(' ').length >= 3) {
                                lastMarkerLine[0] = 'polygon';
                                model.markers[annotationId] = [];
                                const position = {
                                    x: action.x,
                                    y: action.y
                                };
                                if (action.y <= 0) {
                                    position.y = 2;
                                }
                                if (action.y >= 100) {
                                    position.y = 98;
                                }
                                if (action.x <= 0) {
                                    position.x = 2;
                                }
                                if (action.x >= 100) {
                                    position.x = 98;
                                }
                                model.markers[annotationId].push([
                                    'div',
                                    {
                                        id: `close_${annotationId}`,
                                        annotationId,
                                        class: 'icon-close',
                                        style: {
                                            top: `${position.y}%`,
                                            left: `${position.x}%`
                                        },
                                        onClick: clearMeasure,
                                        onMouseDown: clearMeasure
                                    }
                                ]);
                                if (model.addMarkersCallback) {
                                    model.addMarkersCallback(lastMarkerLine);
                                }
                            }
                            else {
                                // 不保存
                                delete model.annotations[annotationId];
                            }
                        }
                    }
                }
                break;
            default:
                break;
        }
        model.raiseEvent('CHANGE_EVENT');
    };
};
/* harmony default export */ __webpack_exports__["default"] = (reactToGeneralAction);


/***/ }),

/***/ "./src/views/Overlay.ts":
/*!******************************!*\
  !*** ./src/views/Overlay.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");

function ObjectToArray(type, ...objArr) {
    let arr = [];
    if (type === 'annotation') {
        objArr.forEach((obj) => {
            if (obj) {
                for (const key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        arr.push(obj[key]);
                    }
                }
            }
        });
    }
    else {
        objArr.forEach((obj) => {
            if (obj) {
                for (const key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        arr = arr.concat(obj[key]);
                    }
                }
            }
        });
    }
    arr = arr.sort((a, b) => {
        return Number(a[1].annotationId > b[1].annotationId);
    });
    return arr;
}
class Overlay extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
    constructor(...args) {
        super(...args);
        this.renderElement = (el) => Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(...el);
        this.onMouseDown = (e) => {
            if (this.state.mode !== 'MOVE') {
                if (e.button === 0) {
                    e.stopPropagation();
                    const point = this.calculateCoords(e);
                    this.props.dispatch({ type: 'PRESS', x: point.x, y: point.y });
                    this.base.style.cursor = 'pointer';
                }
            }
        };
        this.onMouseUp = (e) => {
            if (this.state.mode !== 'MOVE') {
                e.stopPropagation();
                const point = this.calculateCoords(e);
                this.props.dispatch({ type: 'RELEASE', x: point.x, y: point.y });
            }
            this.base.style.cursor = 'default';
        };
        this.onMouseMove = (e) => {
            if (this.state.mode !== 'MOVE') {
                e.stopPropagation();
                const point = this.calculateCoords(e);
                this.props.dispatch({ type: 'MOVE', x: point.x, y: point.y });
            }
        };
        this.onMouseLeave = (e) => {
            if (this.state.mode !== 'MOVE') {
                e.stopPropagation();
                const point = this.calculateCoords(e);
                this.props.dispatch({ type: 'LEAVE_CANVAS', x: point.x, y: point.y });
            }
            this.base.style.cursor = 'default';
        };
    }
    calculateCoords(e) {
        const rect = this.base.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;
        return {
            x: Math.round(offsetX / rect.width * 10000) / 100,
            y: Math.round(offsetY / rect.height * 10000) / 100
        };
    }
    getInitialState() {
        return this.props.model;
    }
    componentDidMount() {
        this.props.model.addHandler('CHANGE_EVENT', () => {
            this.setState(this.props.model);
        });
    }
    render() {
        let divAttr;
        if (window.onpointerdown === null) {
            divAttr = {
                id: 'svg_wrapper',
                width: '100%',
                height: '100%',
                style: '',
                onPointerDown: this.onMouseDown,
                onPointerUp: this.onMouseUp,
                onMouseLeave: this.onMouseLeave,
                onMouseMove: this.onMouseMove
            };
        }
        else {
            divAttr = {
                id: 'svg_wrapper',
                width: '100%',
                height: '100%',
                style: '',
                onMouseLeave: this.onMouseLeave,
                onMouseMove: this.onMouseMove,
                onMouseDown: this.onMouseDown,
                onMouseUp: this.onMouseUp
            };
        }
        return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])('div', divAttr, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])('svg', {
            id: 'svg',
            xmlns: 'http://www.w3.org/2000/svg',
            version: '1.1',
            preserveAspectRatio: 'none',
            viewBox: '0 0 100 100',
            width: '100%',
            height: '100%'
        }, ObjectToArray('annotation', this.state.annotations, this.state.markerLines).map((el) => this.renderElement(el))), ObjectToArray('marker', this.state.markers).map((el) => this.renderElement(el)));
    }
}
/* harmony default export */ __webpack_exports__["default"] = (Overlay);


/***/ }),

/***/ "OpenSeadragon":
/*!********************************!*\
  !*** external "OpenSeadragon" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["OpenSeadragon"]; }());

/***/ })

/******/ });
//# sourceMappingURL=annotation.js.map