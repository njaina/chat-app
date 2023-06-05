"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction Home() {\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const userAuth = localStorage.getItem(\"email\");\n        const userForm = localStorage.getItem(\"formData\");\n        if (userAuth || userForm) {\n            next_router__WEBPACK_IMPORTED_MODULE_1___default().push(\"/chat\");\n        } else {\n            next_router__WEBPACK_IMPORTED_MODULE_1___default().push(\"/login\");\n        }\n    }, []);\n    return null;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFJTUE7QUFKNEI7QUFDRDtBQUtsQixTQUFTRyxPQUFPO0lBQzdCRixnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTUcsV0FBV0MsYUFBYUMsT0FBTyxDQUFDO1FBQ3RDLE1BQU1DLFdBQVdGLGFBQWFDLE9BQU8sQ0FBQztRQUV0QyxJQUFJRixZQUFZRyxVQUFVO1lBQ3hCTCx1REFBVyxDQUFDO1FBQ2QsT0FBTztZQUNMQSx1REFBVyxDQUFDO1FBQ2QsQ0FBQztJQUNILEdBQUcsRUFBRTtJQUNMLE9BQ0UsSUFBSTtBQUVSLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IEludGVyIH0gZnJvbSAnbmV4dC9mb250L2dvb2dsZSdcblxuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFsnbGF0aW4nXSB9KVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHVzZXJBdXRoID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2VtYWlsJyk7XG4gICAgY29uc3QgdXNlckZvcm0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZm9ybURhdGEnKTtcblxuICAgIGlmICh1c2VyQXV0aCB8fCB1c2VyRm9ybSkge1xuICAgICAgUm91dGVyLnB1c2goJy9jaGF0Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKTtcbiAgICB9XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICBudWxsXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJpbnRlciIsInVzZUVmZmVjdCIsIlJvdXRlciIsIkhvbWUiLCJ1c2VyQXV0aCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1c2VyRm9ybSIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();