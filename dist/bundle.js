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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/common */ \"./src/js/common.js\");\n\n\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/js/common.js":
/*!**************************!*\
  !*** ./src/js/common.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderer */ \"./src/js/renderer.js\");\n\r\n// import {moveToTop, moveToRight, moveToBottom, moveToLeft} from \"./arrayUtils\";\r\n\r\nconst keyMap = {\r\n    ru: {\r\n        Backquote: ['ё', 'Ё'],\r\n        Digit1: ['1', '!'],\r\n        Digit2: ['2', '\"'],\r\n        Digit3: ['3', '№'],\r\n        Digit4: ['4', ';'],\r\n        Digit5: ['5', '%'],\r\n        Digit6: ['6', ':'],\r\n        Digit7: ['7', '?'],\r\n        Digit8: ['8', '*'],\r\n        Digit9: ['9', '('],\r\n        Digit0: ['0', ')'],\r\n        Minus: ['-', '_'],\r\n        Equal: ['=', '+'],\r\n        Backspace: ['Backspace'],\r\n        Tab: ['Tab ⇒'],\r\n        KeyQ: ['й', 'Й'],\r\n        KeyW: ['ц', 'Ц'],\r\n        KeyE: ['у', 'У'],\r\n        KeyR: ['к', 'К'],\r\n        KeyT: ['е', 'Е'],\r\n        KeyY: ['н', 'Н'],\r\n        KeyU: ['г', 'Г'],\r\n        KeyI: ['ш', 'Ш'],\r\n        KeyO: ['щ', 'Щ'],\r\n        KeyP: ['з', 'З'],\r\n        BracketLeft: ['х', 'Х'],\r\n        BracketRight: ['ъ', 'Ъ'],\r\n        Enter: ['Enter ↵'],\r\n        CapsLock: ['Caps Lock'],\r\n        KeyA: ['ф', 'Ф'],\r\n        KeyS: ['ы', 'Ы'],\r\n        KeyD: ['в', 'В'],\r\n        KeyF: ['а', 'А'],\r\n        KeyG: ['п', 'П'],\r\n        KeyH: ['р', 'Р'],\r\n        KeyJ: ['о', 'О'],\r\n        KeyK: ['л', 'Л'],\r\n        KeyL: ['д', 'Д'],\r\n        Semicolon: ['ж', 'Ж'],\r\n        Quote: ['э', 'Э'],\r\n        Backslash: ['\\\\', '|'],\r\n        Delete: ['Del'],\r\n        ShiftLeft: ['Shift'],\r\n        KeyZ: ['я', 'Я'],\r\n        KeyX: ['ч', 'Ч'],\r\n        KeyC: ['с', 'С'],\r\n        KeyV: ['м', 'М'],\r\n        KeyB: ['и', 'И'],\r\n        KeyN: ['т', 'Т'],\r\n        KeyM: ['ь', 'Ь'],\r\n        Comma: ['б', 'Б'],\r\n        Period: ['ю', 'Ю'],\r\n        Slash: ['.', ','],\r\n        ArrowUp: ['▲'],\r\n        ShiftRight: ['Shift'],\r\n        ControlLeft: ['Ctrl'],\r\n        MetaLeft: ['Win'],\r\n        AltLeft: ['Alt'],\r\n        Space: [' '],\r\n        AltRight: ['Alt'],\r\n        ControlRight: ['Ctrl'],\r\n        ArrowLeft: ['◄'],\r\n        ArrowDown: ['▼'],\r\n        ArrowRight: ['►'],\r\n    },\r\n    en: {\r\n        Backquote: ['`', '~'],\r\n        Digit1: ['1', '!'],\r\n        Digit2: ['2', '@'],\r\n        Digit3: ['3', '#'],\r\n        Digit4: ['4', '$'],\r\n        Digit5: ['5', '%'],\r\n        Digit6: ['6', '^'],\r\n        Digit7: ['7', '&'],\r\n        Digit8: ['8', '*'],\r\n        Digit9: ['9', '('],\r\n        Digit0: ['0', ')'],\r\n        Minus: ['-', '_'],\r\n        Equal: ['=', '+'],\r\n        Backspace: ['Backspace'],\r\n        Tab: ['Tab ⇒'],\r\n        KeyQ: ['q', 'Q'],\r\n        KeyW: ['w', 'W'],\r\n        KeyE: ['e', 'E'],\r\n        KeyR: ['r', 'R'],\r\n        KeyT: ['t', 'T'],\r\n        KeyY: ['y', 'Y'],\r\n        KeyU: ['u', 'U'],\r\n        KeyI: ['i', 'I'],\r\n        KeyO: ['o', 'O'],\r\n        KeyP: ['p', 'P'],\r\n        BracketLeft: ['[', '{'],\r\n        BracketRight: [']', '}'],\r\n        Enter: ['Enter ↵'],\r\n        CapsLock: ['Caps Lock'],\r\n        KeyA: ['a', 'A'],\r\n        KeyS: ['s', 'S'],\r\n        KeyD: ['d', 'D'],\r\n        KeyF: ['f', 'F'],\r\n        KeyG: ['g', 'G'],\r\n        KeyH: ['h', 'H'],\r\n        KeyJ: ['j', 'J'],\r\n        KeyK: ['k', 'K'],\r\n        KeyL: ['l', 'L'],\r\n        Semicolon: [';', ':'],\r\n        Quote: ['\\'', '\"'],\r\n        Backslash: ['\\\\', '|'],\r\n        Delete: ['Del'],\r\n        ShiftLeft: ['Shift'],\r\n        KeyZ: ['z', 'Z'],\r\n        KeyX: ['x', 'X'],\r\n        KeyC: ['c', 'C'],\r\n        KeyV: ['v', 'V'],\r\n        KeyB: ['b', 'B'],\r\n        KeyN: ['n', 'N'],\r\n        KeyM: ['m', 'M'],\r\n        Comma: [',', '<'],\r\n        Period: ['.', '>'],\r\n        Slash: ['/', '?'],\r\n        ArrowUp: ['▲'],\r\n        ShiftRight: ['Shift'],\r\n        ControlLeft: ['Ctrl'],\r\n        MetaLeft: ['Win'],\r\n        AltLeft: ['Alt'],\r\n        Space: [' '],\r\n        AltRight: ['Alt'],\r\n        ControlRight: ['Ctrl'],\r\n        ArrowLeft: ['◄'],\r\n        ArrowDown: ['▼'],\r\n        ArrowRight: ['►'],\r\n    },\r\n};\r\n\r\nconst classes = {\r\n    mainContainer: 'wrapper',\r\n    textArea: 'text_area',\r\n    KeyBoardContainer: 'keyboard_container',\r\n    key: 'key',\r\n    keyPrimaryText: 'key_text--primary',\r\n    keySecText: 'key_text--secondary',\r\n    englishKey: 'eng_key',\r\n    russianKey: 'ru_key',\r\n    hidden: 'hidden',\r\n    keyClick: 'key_click',\r\n};\r\n\r\nfunction saveLang() {\r\n    window.localStorage.setItem('language', curLangIndex);\r\n  }\r\n\r\nfunction getLang() {\r\n    const langIndex = window.localStorage.getItem('language');\r\n    return (langIndex || 0);\r\n}\r\n\r\nconst body = document.getElementById(\"body\");\r\n\r\nwindow.addEventListener('load', _renderer__WEBPACK_IMPORTED_MODULE_0__[\"renderKeyboardLayout\"].bind(keyMap, classes, body));\r\n\r\n// document.addEventListener(\"keydown\", (oEvent)=>{\r\n//     if(oEvent.keyCode === 38){\r\n//         renderer.moveCell(moveToTop, oBody);\r\n//     }else if(oEvent.keyCode === 39){\r\n//         renderer.moveCell(moveToRight, oBody);\r\n//     }else if(oEvent.keyCode === 40){\r\n//         renderer.moveCell(moveToBottom, oBody);\r\n//     }else if(oEvent.keyCode === 37){\r\n//         renderer.moveCell(moveToLeft, oBody);\r\n//     }\r\n// })\r\n\r\n// window.addEventListener('keydown', handleKeyDown);\r\n// window.addEventListener('keyup', handleKeyUp);\r\n// document.querySelectorAll('.kb_container > div').forEach((element) => {\r\n//   element.addEventListener('mousedown', () => mouseDownHandler(element));\r\n//   element.addEventListener('mouseup', () => mouseUpHandler(element));\r\n//   element.addEventListener('mouseleave', () => mouseUpHandler(element));\r\n// });\n\n//# sourceURL=webpack:///./src/js/common.js?");

/***/ }),

/***/ "./src/js/renderer.js":
/*!****************************!*\
  !*** ./src/js/renderer.js ***!
  \****************************/
/*! exports provided: renderLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderLayout\", function() { return renderLayout; });\n// let currentMapGameArr;\r\n\r\n// function renderMap(mapGameArr, oBody) {\r\n//     let sCells = \"\";\r\n//     mapGameArr.map((rowArr) => {\r\n//         rowArr.map((number) => {\r\n//             sCells += `<div id=\"${number}\" class=\"childBlock\">${number}</div>`\r\n//         })\r\n//     })\r\n\r\n//     oBody.insertAdjacentHTML(\"beforeEnd\", `<div id=\"parentBlock\">${sCells}</div>`);\r\n// }\r\n\r\n// function renderInitialMap(size, oBody) {\r\n//     const dataArr = new Array(size ** 2)\r\n//         .fill()\r\n//         .map((item, index) => { return index })\r\n//         .sort(() => { return Math.random() - 0.5 });\r\n\r\n\r\n//     const mapGameArr = new Array(size).fill(new Array(size).fill()).map((arr, index) => {\r\n//         return arr.map((item, index2) => {\r\n//             const relatedIndex = size * index + index2;\r\n//             return dataArr[relatedIndex];\r\n//         })\r\n//     })\r\n//     currentMapGameArr = mapGameArr;\r\n//     renderMap(mapGameArr, oBody);\r\n// }\r\n\r\n// function moveCell(fnCallback, oBody) {\r\n//     fnCallback.call(currentMapGameArr);\r\n//     oBody.removeChild(document.getElementById(\"parentBlock\"));\r\n//     renderMap(currentMapGameArr, oBody);\r\n// }\r\nconst createElement = (tag, id, value, ...classes) => {\r\n    const el = document.createElement(tag);\r\n    elem.id = id;\r\n    elem.textContent = value;\r\n    elem.classList.add(...classes);\r\n    return elem;\r\n};\r\n\r\nconst createKeyElement = (code, value) => {\r\n  const keyElem = createElement('div', code, '', cssClasses.key);\r\n  const engContainer = createElement('div', '', '', cssClasses.englishKey);\r\n  const primaryVal = createElement('span', '', textValues[0], cssClasses.keyPrimaryText);\r\n  const secVal = createElement('span', '', textValues[1], cssClasses.keySecText, cssClasses.hidden);\r\n  engContainer.append(primaryVal, secVal);\r\n\r\n  keyElem.append(engContainer);\r\n  return keyElem;\r\n};\r\n\r\nfunction renderLayout(keyMap, classes, body) {\r\n  const mainContainer = createElement('div', 'main_container', '', classes.mainContainer);\r\n  const textArea = createElement('textarea', 'text_area', '', classes.textArea);\r\n  const kbContainer = createElement('div', 'kb_container', '', classes.KeyBoardContainer);\r\n\r\n  curLangIndex = getLang();\r\n  saveLang();\r\n  const currentKeys = createKeys(languages[curLangIndex]);\r\n\r\n  kbContainer.append(...currentKeys);\r\n  mainContainer.append(textArea, kbContainer);\r\n  document.body.prepend(mainContainer);\r\n\r\n}\r\n\r\nfunction switchLayout() {\r\n  curLangIndex = (curLangIndex + 1) % languages.length;\r\n  saveLang();\r\n  const lang = languages[curLangIndex];\r\n  const keys = createKeys(lang);\r\n  const kbContainer = document.querySelector('#kb_container');\r\n  kbContainer.innerHTML = '';\r\n  kbContainer.append(...keys);\r\n}\r\n\r\n\r\n  \r\n  \r\n\r\n\n\n//# sourceURL=webpack:///./src/js/renderer.js?");

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/main.scss?");

/***/ }),

/***/ 0:
/*!******************************************!*\
  !*** multi ./src/app.js ./src/main.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/app.js */\"./src/app.js\");\nmodule.exports = __webpack_require__(/*! ./src/main.scss */\"./src/main.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/app.js_./src/main.scss?");

/***/ })

/******/ });