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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar check = function() {\n    var url = \"https://vtvpba.minfra.gba.gob.ar/turnos_por_fechas.json?planta_id=ID&dominio=nkn450\";\n    var branches = [\n        {\n            name: \"Bernal\",\n            id: \"36\"\n        },\n        {\n            name: \"Solano\",\n            id: \"59\"\n        },\n        {\n            name: \"Estevan Echeverria\",\n            id: \"33\"\n        },\n        {\n            name: \"Berisso\",\n            id: \"42\"\n        },\n        {\n            name: \"Berazategui\",\n            id: \"32\"\n        }, \n    ];\n    var requests = branches.map(function(branch) {\n        return fetch(url.replace(\"ID\", branch.id), {\n            headers: {\n            }\n        });\n    });\n    Promise.allSettled(requests).then(function(results) {\n        console.log(results);\n    });\n};\nfunction HomePage() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Welcome to Next.js!\"\n    }, void 0, false, {\n        fileName: \"/Users/pgalvan/Workspace/turnos-vtv/pages/index.js\",\n        lineNumber: 41,\n        columnNumber: 12\n    }, this);\n}\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFDQTtBQUFBLElBQU1BLEtBQUssR0FBRyxXQUFNO0lBQ2hCLElBQU1DLEdBQUcsR0FBRyxxRkFBcUY7SUFDakcsSUFBTUMsUUFBUSxHQUFHO1FBQ2Y7WUFDSUMsSUFBSSxFQUFFLFFBQVE7WUFDZEMsRUFBRSxFQUFFLElBQUk7U0FDWDtRQUNEO1lBQ0lELElBQUksRUFBRSxRQUFRO1lBQ2RDLEVBQUUsRUFBRSxJQUFJO1NBQ1g7UUFDRDtZQUNJRCxJQUFJLEVBQUUsb0JBQW9CO1lBQzFCQyxFQUFFLEVBQUUsSUFBSTtTQUNYO1FBQ0Q7WUFDSUQsSUFBSSxFQUFFLFNBQVM7WUFDZkMsRUFBRSxFQUFFLElBQUk7U0FDWDtRQUNEO1lBQ0lELElBQUksRUFBRSxhQUFhO1lBQ25CQyxFQUFFLEVBQUUsSUFBSTtTQUNYO0tBQ0Y7SUFFRCxJQUFNQyxRQUFRLEdBQUdILFFBQVEsQ0FBQ0ksR0FBRyxDQUFDLFNBQUNDLE1BQU0sRUFBSztRQUN4QyxPQUFPQyxLQUFLLENBQUNQLEdBQUcsQ0FBQ1EsT0FBTyxDQUFDLElBQUksRUFBRUYsTUFBTSxDQUFDSCxFQUFFLENBQUMsRUFBRTtZQUN6Q00sT0FBTyxFQUFFO2FBRVI7U0FDRixDQUFDLENBQUM7S0FDSixDQUFDO0lBRUZDLE9BQU8sQ0FBQ0MsVUFBVSxDQUFDUCxRQUFRLENBQUMsQ0FBQ1EsSUFBSSxDQUFDLFNBQUNDLE9BQU8sRUFBSztRQUM3Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUNGLE9BQU8sQ0FBQztLQUNyQixDQUFDO0NBQ0w7QUFFRCxTQUFTRyxRQUFRLEdBQUc7SUFDaEIscUJBQU8sOERBQUNDLEtBQUc7a0JBQUMscUJBQW1COzs7OztZQUFNO0NBQ3hDO0FBRlFELEtBQUFBLFFBQVE7QUFJakIsK0RBQWVBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IGNoZWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IHVybCA9ICdodHRwczovL3Z0dnBiYS5taW5mcmEuZ2JhLmdvYi5hci90dXJub3NfcG9yX2ZlY2hhcy5qc29uP3BsYW50YV9pZD1JRCZkb21pbmlvPW5rbjQ1MCc7XG4gICAgY29uc3QgYnJhbmNoZXMgPSBbXG4gICAgICB7XG4gICAgICAgICAgbmFtZTogJ0Jlcm5hbCcsXG4gICAgICAgICAgaWQ6ICczNidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICAgbmFtZTogJ1NvbGFubycsXG4gICAgICAgICAgaWQ6ICc1OSdcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICAgbmFtZTogJ0VzdGV2YW4gRWNoZXZlcnJpYScsXG4gICAgICAgICAgaWQ6ICczMydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICAgbmFtZTogJ0Jlcmlzc28nLFxuICAgICAgICAgIGlkOiAnNDInXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAgIG5hbWU6ICdCZXJhemF0ZWd1aScsXG4gICAgICAgICAgaWQ6ICczMidcbiAgICAgIH0sXG4gICAgXTtcblxuICAgIGNvbnN0IHJlcXVlc3RzID0gYnJhbmNoZXMubWFwKChicmFuY2gpID0+IHtcbiAgICAgIHJldHVybiBmZXRjaCh1cmwucmVwbGFjZSgnSUQnLCBicmFuY2guaWQpLCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAvL3JlZmVyZXI6ICdodHRwczovL3Z0dnBiYS5taW5mcmEuZ2JhLmdvYi5hci9Tb2xpY2l0dWRUdXJubydcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgUHJvbWlzZS5hbGxTZXR0bGVkKHJlcXVlc3RzKS50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHRzKVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuICAgIHJldHVybiA8ZGl2PldlbGNvbWUgdG8gTmV4dC5qcyE8L2Rpdj5cbn1cbiAgXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZSJdLCJuYW1lcyI6WyJjaGVjayIsInVybCIsImJyYW5jaGVzIiwibmFtZSIsImlkIiwicmVxdWVzdHMiLCJtYXAiLCJicmFuY2giLCJmZXRjaCIsInJlcGxhY2UiLCJoZWFkZXJzIiwiUHJvbWlzZSIsImFsbFNldHRsZWQiLCJ0aGVuIiwicmVzdWx0cyIsImNvbnNvbGUiLCJsb2ciLCJIb21lUGFnZSIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});