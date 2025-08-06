/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/javascript/islands/components/HelloWorld.jsx":
/*!**********************************************************!*\
  !*** ./app/javascript/islands/components/HelloWorld.jsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_turbo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/turbo.js */ "./app/javascript/islands/utils/turbo.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }


var HelloWorld = function HelloWorld(_ref) {
  var containerId = _ref.containerId;
  // Get initial state from the div's data-initial-state attribute
  var initialProps = (0,_utils_turbo_js__WEBPACK_IMPORTED_MODULE_1__.useTurboProps)(containerId);

  // Component state with defaults, restored from turbo cache if available
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialProps.count || 0),
    _useState2 = _slicedToArray(_useState, 2),
    count = _useState2[0],
    setCount = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialProps.message || "Hello from IslandJS Rails!"),
    _useState4 = _slicedToArray(_useState3, 2),
    message = _useState4[0],
    setMessage = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialProps.customMessage || ''),
    _useState6 = _slicedToArray(_useState5, 2),
    customMessage = _useState6[0],
    setCustomMessage = _useState6[1];

  // Current state object for turbo caching
  var currentState = {
    count: count,
    message: message,
    customMessage: customMessage
  };

  // Setup turbo cache persistence - this should run on mount and whenever state changes
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var cleanup = (0,_utils_turbo_js__WEBPACK_IMPORTED_MODULE_1__.useTurboCache)(containerId, currentState, true);
    return cleanup;
  }, [containerId, count, message, customMessage]);
  var handleMessageChange = function handleMessageChange(e) {
    setCustomMessage(e.target.value);
  };
  var applyCustomMessage = function applyCustomMessage() {
    if (customMessage.trim()) {
      setMessage(customMessage.trim());
      setCustomMessage('');
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      padding: '20px',
      border: '2px solid #4F46E5',
      borderRadius: '8px',
      backgroundColor: '#F8FAFC',
      textAlign: 'center',
      fontFamily: 'system-ui, sans-serif'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", {
    style: {
      color: '#4F46E5',
      margin: '0 0 16px 0'
    }
  }, "\uD83C\uDFDD\uFE0F React + IslandjsRails (Turbo-Cache Compatible)"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", {
    style: {
      margin: '0 0 16px 0',
      fontSize: '18px'
    }
  }, message), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      margin: '16px 0'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", {
    type: "text",
    placeholder: "Enter custom message",
    value: customMessage,
    onChange: handleMessageChange,
    style: {
      padding: '8px',
      marginRight: '8px',
      border: '1px solid #D1D5DB',
      borderRadius: '4px',
      fontSize: '14px'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: applyCustomMessage,
    style: {
      padding: '8px 16px',
      backgroundColor: '#059669',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '14px',
      marginRight: '8px'
    }
  }, "Apply Message")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return setCount(count + 1);
    },
    style: {
      padding: '8px 16px',
      backgroundColor: '#4F46E5',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px'
    }
  }, "Clicked ", count, " times"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    style: {
      marginTop: '16px',
      fontSize: '12px',
      color: '#6B7280',
      textAlign: 'left',
      backgroundColor: '#F9FAFB',
      padding: '12px',
      borderRadius: '4px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("strong", null, "Turbo-Cache Demo:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "\u2022 Navigate away and back - your count and message persist!", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "\u2022 Container ID: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, containerId), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null), "\u2022 State: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("code", null, JSON.stringify(currentState))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HelloWorld);

/***/ }),

/***/ "./app/javascript/islands/components/Reactions.jsx":
/*!*********************************************************!*\
  !*** ./app/javascript/islands/components/Reactions.jsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_turbo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/turbo.js */ "./app/javascript/islands/utils/turbo.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }


function Reactions(_ref) {
  var containerId = _ref.containerId;
  // Get props from the container using useTurboProps
  var initialProps = (0,_utils_turbo_js__WEBPACK_IMPORTED_MODULE_1__.useTurboProps)(containerId);
  var postId = initialProps.postId;
  var currentSessionId = initialProps.currentSessionId;
  var initialReactions = initialProps.initialReactions || [];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialReactions),
    _useState2 = _slicedToArray(_useState, 2),
    reactions = _useState2[0],
    setReactions = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    showPicker = _useState4[0],
    setShowPicker = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    loading = _useState6[0],
    setLoading = _useState6[1];
  var pickerRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  // Log for debugging
  console.log('Reactions component mounted with:', {
    postId: postId,
    currentSessionId: currentSessionId,
    containerId: containerId
  });

  // Available emojis (similar to Discord)
  var availableEmojis = ['👍', '❤️', '😂', '😮', '😢', '😡', '🚀', '🎉', '🔥', '✨', '🙏', '💯'];

  // If postId is missing, show error state
  if (!postId) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      className: "text-sm text-gray-500"
    }, "Unable to load reactions");
  }

  // Close picker when clicking outside
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    function handleClickOutside(event) {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setShowPicker(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return function () {
      return document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Group reactions by emoji
  var groupedReactions = reactions.reduce(function (acc, reaction) {
    if (!acc[reaction.emoji]) {
      acc[reaction.emoji] = {
        emoji: reaction.emoji,
        count: 0,
        sessionIds: []
      };
    }
    acc[reaction.emoji].count++;
    acc[reaction.emoji].sessionIds.push(reaction.session_id);
    return acc;
  }, {});
  var toggleReaction = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(emoji) {
      var _document$querySelect, csrfToken, existingReaction, response, _response, data, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            if (!(loading || !postId)) {
              _context.n = 1;
              break;
            }
            console.error('Cannot toggle reaction: postId is missing');
            return _context.a(2);
          case 1:
            setLoading(true);
            _context.p = 2;
            csrfToken = (_document$querySelect = document.querySelector('meta[name="csrf-token"]')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.getAttribute('content'); // Check if we already have a reaction with this emoji
            existingReaction = reactions.find(function (r) {
              return r.emoji === emoji;
            });
            if (!existingReaction) {
              _context.n = 4;
              break;
            }
            _context.n = 3;
            return fetch("/api/v1/posts/".concat(postId, "/reactions/").concat(encodeURIComponent(emoji)), {
              method: 'DELETE',
              headers: {
                'X-CSRF-Token': csrfToken,
                'Accept': 'application/json'
              }
            });
          case 3:
            response = _context.v;
            if (response.ok) {
              setReactions(function (prev) {
                return prev.filter(function (r) {
                  return r.emoji !== emoji;
                });
              });
            } else {
              console.error('Failed to remove reaction:', response.status, response.statusText);
            }
            _context.n = 8;
            break;
          case 4:
            _context.n = 5;
            return fetch("/api/v1/posts/".concat(postId, "/reactions"), {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'X-CSRF-Token': csrfToken,
                'Accept': 'application/json'
              },
              body: JSON.stringify({
                reaction: {
                  emoji: emoji
                }
              })
            });
          case 5:
            _response = _context.v;
            if (!_response.ok) {
              _context.n = 7;
              break;
            }
            _context.n = 6;
            return _response.json();
          case 6:
            data = _context.v;
            setReactions(function (prev) {
              return [].concat(_toConsumableArray(prev), [data.reaction]);
            });
            _context.n = 8;
            break;
          case 7:
            console.error('Failed to add reaction:', _response.status, _response.statusText);
          case 8:
            _context.n = 10;
            break;
          case 9:
            _context.p = 9;
            _t = _context.v;
            console.error('Error toggling reaction:', _t);
          case 10:
            _context.p = 10;
            setLoading(false);
            setShowPicker(false);
            return _context.f(10);
          case 11:
            return _context.a(2);
        }
      }, _callee, null, [[2, 9, 10, 11]]);
    }));
    return function toggleReaction(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  var addNewReaction = function addNewReaction(emoji) {
    toggleReaction(emoji);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex flex-col gap-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "relative order-2",
    ref: pickerRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    onClick: function onClick() {
      return setShowPicker(!showPicker);
    },
    disabled: loading,
    className: "\n            inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full\n            bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200\n            text-indigo-600 hover:from-indigo-100 hover:to-purple-100 hover:border-indigo-300\n            transition-all duration-200 hover:scale-110 hover:shadow-md active:scale-100\n            ".concat(loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer', "\n          "),
    title: "Add reaction"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", {
    className: "w-3.5 h-3.5 sm:w-4 sm:h-4",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2.5,
    d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
  }))), showPicker && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "absolute bottom-full left-0 mb-2 p-3 sm:p-4 bg-white rounded-lg sm:rounded-xl shadow-2xl border border-slate-200 z-50 w-[280px] sm:w-[320px]"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "grid grid-cols-6 gap-1.5 sm:gap-2"
  }, availableEmojis.map(function (emoji) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      key: emoji,
      onClick: function onClick() {
        return addNewReaction(emoji);
      },
      disabled: loading,
      className: "\n                    w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-lg sm:rounded-xl\n                    bg-gradient-to-br from-white to-slate-50 border border-slate-200\n                    transition-all duration-200 text-xl sm:text-2xl\n                    hover:scale-110 sm:hover:scale-125 hover:shadow-lg hover:from-indigo-50 hover:to-purple-50\n                    hover:border-indigo-200 cursor-pointer hover:z-10\n                  ",
      title: "React with ".concat(emoji)
    }, emoji);
  })))), Object.keys(groupedReactions).length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "flex items-center flex-wrap gap-1.5 sm:gap-2 order-1"
  }, Object.entries(groupedReactions).map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
      emoji = _ref4[0],
      data = _ref4[1];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
      key: emoji,
      onClick: function onClick() {
        return toggleReaction(emoji);
      },
      disabled: loading,
      className: "\n                inline-flex items-center px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm rounded-full transition-all duration-200\n                bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200\n                hover:from-slate-100 hover:to-slate-200 hover:border-slate-300\n                ".concat(loading ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110 hover:shadow-md active:scale-100 cursor-pointer', "\n              ")
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "text-base sm:text-lg mr-1 sm:mr-1.5"
    }, emoji), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", {
      className: "font-semibold text-slate-700"
    }, data.count));
  })));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Reactions);

/***/ }),

/***/ "./app/javascript/islands/utils/turbo.js":
/*!***********************************************!*\
  !*** ./app/javascript/islands/utils/turbo.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   persistState: () => (/* binding */ persistState),
/* harmony export */   useTurboCache: () => (/* binding */ useTurboCache),
/* harmony export */   useTurboCacheEffect: () => (/* binding */ useTurboCacheEffect),
/* harmony export */   useTurboProps: () => (/* binding */ useTurboProps)
/* harmony export */ });
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
// Turbo-compatible state management utilities for React components

/**
 * Get initial state from a container's data-initial-state attribute
 * @param {string} containerId - The ID of the container element
 * @returns {Object} - Parsed initial state object
 */
function useTurboProps(containerId) {
  var container = document.getElementById(containerId);
  if (!container) {
    console.warn("IslandJS Turbo: Container ".concat(containerId, " not found"));
    return {};
  }
  var initialStateJson = container.dataset.initialState;
  if (!initialStateJson) {
    return {};
  }
  try {
    return JSON.parse(initialStateJson);
  } catch (e) {
    console.warn('IslandJS Turbo: Failed to parse initial state', e);
    return {};
  }
}

/**
 * Set up Turbo cache persistence for React component state
 * @param {string} containerId - The ID of the container element
 * @param {Object} currentState - Current component state to persist
 * @param {boolean} autoRestore - Whether to automatically restore state on turbo:load
 * @returns {Function} - Cleanup function to remove event listeners
 */
function useTurboCache(containerId, currentState) {
  var autoRestore = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var container = document.getElementById(containerId);
  if (!container) {
    console.warn("IslandJS Turbo: Container ".concat(containerId, " not found for caching"));
    return function () {};
  }

  // Immediately persist the current state to the div (don't wait for turbo:before-cache)
  try {
    var stateJson = JSON.stringify(currentState);
    container.dataset.initialState = stateJson;
  } catch (e) {
    console.warn('IslandJS Turbo: Failed to immediately serialize state', e);
  }
}

/**
 * Hook for React components to automatically manage Turbo cache persistence
 * This is a React hook that should be called from within a React component
 * @param {string} containerId - The ID of the container element
 * @param {Object} state - Current component state to persist
 * @param {Array} dependencies - Dependencies array for useEffect
 */
function useTurboCacheEffect(containerId, state) {
  var dependencies = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  // This assumes React is available globally
  if (typeof React !== 'undefined' && React.useEffect) {
    React.useEffect(function () {
      return useTurboCache(containerId, state, false);
    }, [containerId].concat(_toConsumableArray(dependencies)));
  } else {
    console.warn('IslandJS Turbo: React.useEffect not available for useTurboCacheEffect');
  }
}

/**
 * Manually persist state to container for components that don't use the hook
 * @param {string} containerId - The ID of the container element  
 * @param {Object} state - State object to persist
 */
function persistState(containerId, state) {
  var container = document.getElementById(containerId);
  if (!container) {
    console.warn("IslandJS Turbo: Container ".concat(containerId, " not found for state persistence"));
    return;
  }
  try {
    var stateJson = JSON.stringify(state);
    container.dataset.initialState = stateJson;
  } catch (e) {
    console.warn('IslandJS Turbo: Failed to serialize state', e);
  }
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = React;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*****************************************!*\
  !*** ./app/javascript/islands/index.js ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_HelloWorld_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/HelloWorld.jsx */ "./app/javascript/islands/components/HelloWorld.jsx");
/* harmony import */ var _components_Reactions_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Reactions.jsx */ "./app/javascript/islands/components/Reactions.jsx");
// IslandJS Rails - Main entry point
// This file is the webpack entry point for your JavaScript islands

// React component imports



// Mount components to the global islandjsRails namespace
window.islandjsRails = {
  HelloWorld: _components_HelloWorld_jsx__WEBPACK_IMPORTED_MODULE_0__["default"],
  Reactions: _components_Reactions_jsx__WEBPACK_IMPORTED_MODULE_1__["default"]
};
})();

/******/ })()
;
//# sourceMappingURL=islands_bundle.1618452fb2329373cf36.js.map