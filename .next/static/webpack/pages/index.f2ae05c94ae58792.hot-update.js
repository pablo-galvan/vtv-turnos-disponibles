"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar axios = (__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\")[\"default\"]);\nvar check = function() {\n    var url = \"https://vtvpba.minfra.gba.gob.ar/turnos_por_fechas.json?planta_id=ID&dominio=nkn450\";\n    var branches = [\n        {\n            name: \"Bernal\",\n            id: \"36\"\n        },\n        {\n            name: \"Solano\",\n            id: \"59\"\n        },\n        {\n            name: \"Estevan Echeverria\",\n            id: \"33\"\n        },\n        {\n            name: \"Berisso\",\n            id: \"42\"\n        },\n        {\n            name: \"Berazategui\",\n            id: \"32\"\n        }, \n    ];\n    var requests = branches.map(function(branch) {\n        return axios.get(url.replace(\"ID\", branch.id));\n    //   return fetch(url.replace('ID', branch.id), {\n    //     headers: {\n    //       referer: 'https://vtvpba.minfra.gba.gob.ar/SolicitudTurno'\n    //     },\n    //   });\n    });\n    Promise.allSettled(requests).then(function(results) {\n        console.log(results[0].value);\n    });\n};\nfunction HomePage() {\n    check();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Welcome to Next.js!\"\n    }, void 0, false, {\n        fileName: \"/Users/pgalvan/Workspace/turnos-vtv/pages/index.js\",\n        lineNumber: 43,\n        columnNumber: 10\n    }, this);\n}\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUFBLElBQU1BLEtBQUssR0FBR0MsOEVBQXdCO0FBQ3RDLElBQU1FLEtBQUssR0FBRyxXQUFNO0lBQ2hCLElBQU1DLEdBQUcsR0FBRyxxRkFBcUY7SUFDakcsSUFBTUMsUUFBUSxHQUFHO1FBQ2Y7WUFDRUMsSUFBSSxFQUFFLFFBQVE7WUFDZEMsRUFBRSxFQUFFLElBQUk7U0FDVDtRQUNEO1lBQ0VELElBQUksRUFBRSxRQUFRO1lBQ2RDLEVBQUUsRUFBRSxJQUFJO1NBQ1Q7UUFDRDtZQUNFRCxJQUFJLEVBQUUsb0JBQW9CO1lBQzFCQyxFQUFFLEVBQUUsSUFBSTtTQUNUO1FBQ0Q7WUFDRUQsSUFBSSxFQUFFLFNBQVM7WUFDZkMsRUFBRSxFQUFFLElBQUk7U0FDVDtRQUNEO1lBQ0VELElBQUksRUFBRSxhQUFhO1lBQ25CQyxFQUFFLEVBQUUsSUFBSTtTQUNUO0tBQ0Y7SUFFRCxJQUFNQyxRQUFRLEdBQUdILFFBQVEsQ0FBQ0ksR0FBRyxDQUFDLFNBQUNDLE1BQU0sRUFBSztRQUN4QyxPQUFPVixLQUFLLENBQUNXLEdBQUcsQ0FBQ1AsR0FBRyxDQUFDUSxPQUFPLENBQUMsSUFBSSxFQUFFRixNQUFNLENBQUNILEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDakQsaURBQWlEO0lBQ2pELGlCQUFpQjtJQUNqQixtRUFBbUU7SUFDbkUsU0FBUztJQUNULFFBQVE7S0FDUCxDQUFDO0lBRUZNLE9BQU8sQ0FBQ0MsVUFBVSxDQUFDTixRQUFRLENBQUMsQ0FBQ08sSUFBSSxDQUFDLFNBQUNDLE9BQU8sRUFBSztRQUM3Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ0csS0FBSyxDQUFDO0tBQzlCLENBQUM7Q0FDTDtBQUVELFNBQVNDLFFBQVEsR0FBRztJQUNsQmpCLEtBQUssRUFBRSxDQUFDO0lBQ1IscUJBQU8sOERBQUNrQixLQUFHO2tCQUFDLHFCQUFtQjs7Ozs7WUFBTTtDQUN0QztBQUhRRCxLQUFBQSxRQUFRO0FBS2pCLCtEQUFlQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpLmRlZmF1bHQ7XG5jb25zdCBjaGVjayA9ICgpID0+IHtcbiAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly92dHZwYmEubWluZnJhLmdiYS5nb2IuYXIvdHVybm9zX3Bvcl9mZWNoYXMuanNvbj9wbGFudGFfaWQ9SUQmZG9taW5pbz1ua240NTAnO1xuICAgIGNvbnN0IGJyYW5jaGVzID0gW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnQmVybmFsJyxcbiAgICAgICAgaWQ6ICczNidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdTb2xhbm8nLFxuICAgICAgICBpZDogJzU5J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0VzdGV2YW4gRWNoZXZlcnJpYScsXG4gICAgICAgIGlkOiAnMzMnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnQmVyaXNzbycsXG4gICAgICAgIGlkOiAnNDInXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnQmVyYXphdGVndWknLFxuICAgICAgICBpZDogJzMyJ1xuICAgICAgfSxcbiAgICBdO1xuXG4gICAgY29uc3QgcmVxdWVzdHMgPSBicmFuY2hlcy5tYXAoKGJyYW5jaCkgPT4ge1xuICAgICAgcmV0dXJuIGF4aW9zLmdldCh1cmwucmVwbGFjZSgnSUQnLCBicmFuY2guaWQpKTtcbiAgICAvLyAgIHJldHVybiBmZXRjaCh1cmwucmVwbGFjZSgnSUQnLCBicmFuY2guaWQpLCB7XG4gICAgLy8gICAgIGhlYWRlcnM6IHtcbiAgICAvLyAgICAgICByZWZlcmVyOiAnaHR0cHM6Ly92dHZwYmEubWluZnJhLmdiYS5nb2IuYXIvU29saWNpdHVkVHVybm8nXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICB9KTtcbiAgICB9KTtcblxuICAgIFByb21pc2UuYWxsU2V0dGxlZChyZXF1ZXN0cykudGhlbigocmVzdWx0cykgPT4ge1xuICAgICAgY29uc29sZS5sb2cocmVzdWx0c1swXS52YWx1ZSlcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcbiAgY2hlY2soKTtcbiAgcmV0dXJuIDxkaXY+V2VsY29tZSB0byBOZXh0LmpzITwvZGl2PlxufVxuICBcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlIl0sIm5hbWVzIjpbImF4aW9zIiwicmVxdWlyZSIsImRlZmF1bHQiLCJjaGVjayIsInVybCIsImJyYW5jaGVzIiwibmFtZSIsImlkIiwicmVxdWVzdHMiLCJtYXAiLCJicmFuY2giLCJnZXQiLCJyZXBsYWNlIiwiUHJvbWlzZSIsImFsbFNldHRsZWQiLCJ0aGVuIiwicmVzdWx0cyIsImNvbnNvbGUiLCJsb2ciLCJ2YWx1ZSIsIkhvbWVQYWdlIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});