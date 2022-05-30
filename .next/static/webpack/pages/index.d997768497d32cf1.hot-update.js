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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_pgalvan_Workspace_turnos_vtv_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_pgalvan_Workspace_turnos_vtv_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_pgalvan_Workspace_turnos_vtv_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\nvar axios = (__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\")[\"default\"]);\nvar branches = (__webpack_require__(/*! ../config */ \"./config/index.js\").branches);\nvar findDates = function(results) {\n    return results.map(function(request) {\n        if (request.value && request.value.data.results.length != 0) {\n            var dates = request.value.data.results;\n            var idBranch = request.value.config.params.planta_id;\n            var branch1 = branches.find(function(branch) {\n                return branch.id === idBranch;\n            });\n            return {\n                name: branch1.name,\n                dates: dates\n            };\n        }\n        return {\n            name: \"none\",\n            dates: []\n        };\n    });\n};\nvar check = function() {\n    var _ref = _asyncToGenerator(_Users_pgalvan_Workspace_turnos_vtv_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var cookieVtv, url, requests, results;\n        return _Users_pgalvan_Workspace_turnos_vtv_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    cookieVtv = \"_vtv_session=GHDomM5Cj%2BYC1kqm5IiOlo98dRu0iB3zgVXx2s%2B25tYe7x6Iy7zTpVwGnd734q5rB53VZwKI4koUpaFMC0hBgfiNcRyhVe%2BlLpIwTEWaN1%2BtgOJlQH7gi9rnzSObcbN3lBkmSyTNYP9YG%2FcjQ1lpzf2sVaPzi5N7vIF4mDruJDYPJrWm2BANpdX%2FvDjnARiS2b5CgDmV3omMSjxF69CSKPatWfXme49If8tqTEf%2BsgLsXiTW%2Bqb6McxjlE%2FnMVhGHUMCdm%2FtPEzQXDHMSlT4GbL0ia05gjfncb%2BMGw1agHixrLOxkgmysBrM9mc%3D--52VNPKoXrYNDeMHa--OKdoY0%2FNhPIBbc%2BEGv4CtQ%3D%3D\";\n                    url = \"https://vtvpba.minfra.gba.gob.ar/turnos_por_fechas.json\";\n                    requests = branches.map(function(branch) {\n                        return axios.get(url, {\n                            params: {\n                                planta_id: branch.id,\n                                dominio: \"nkn450\"\n                            },\n                            headers: {\n                                Cookie: cookieVtv\n                            }\n                        });\n                    });\n                    _ctx.next = 5;\n                    return Promise.allSettled(requests);\n                case 5:\n                    results = _ctx.sent;\n                    return _ctx.abrupt(\"return\", results);\n                case 7:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function check() {\n        return _ref.apply(this, arguments);\n    };\n}();\nfunction HomePage(param) {\n    var dates = param.dates;\n    var _this = this;\n    console.log(dates, \"-----\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n            children: dates.map(function(name, availableDates) {\n                console.log(availableDates, \"=====\");\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                    children: [\n                        \" \",\n                        name,\n                        \": \",\n                        availableDates.map(function(date) {\n                            return \"\".concat(date.fecha, \" | \");\n                        }),\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/pgalvan/Workspace/turnos-vtv/pages/index.js\",\n                    lineNumber: 43,\n                    columnNumber: 14\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/pgalvan/Workspace/turnos-vtv/pages/index.js\",\n            lineNumber: 41,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/pgalvan/Workspace/turnos-vtv/pages/index.js\",\n        lineNumber: 40,\n        columnNumber: 10\n    }, this);\n}\n_c = HomePage;\nHomePage.getInitialProps = _asyncToGenerator(_Users_pgalvan_Workspace_turnos_vtv_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n    var results, dates;\n    return _Users_pgalvan_Workspace_turnos_vtv_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.next = 2;\n                return check();\n            case 2:\n                results = _ctx.sent;\n                dates = findDates(results);\n                return _ctx.abrupt(\"return\", {\n                    dates: dates\n                });\n            case 5:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFDL0JsQyxPQUFPLEVBQ1BNLEtBQUs7Ozs7O3VCQURXUyxLQUFLLEVBQUU7O2dCQUF2QmYsT0FBTyxZQUFnQjtnQkFDdkJNLEtBQUssR0FBR1AsU0FBUyxDQUFDQyxPQUFPLENBQUMsQ0FBQzs2Q0FFMUI7b0JBQUVNLEtBQUssRUFBTEEsS0FBSztpQkFBRTs7Ozs7O0NBQ2pCO0FBRUQsK0RBQWVtQixRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpLmRlZmF1bHQ7XG5jb25zdCB7IGJyYW5jaGVzIH0gPSByZXF1aXJlKCcuLi9jb25maWcnKTtcblxuY29uc3QgZmluZERhdGVzID0gKHJlc3VsdHMpID0+IHtcbiAgcmV0dXJuIHJlc3VsdHMubWFwKHJlcXVlc3QgPT4ge1xuICAgIGlmIChyZXF1ZXN0LnZhbHVlICYmIHJlcXVlc3QudmFsdWUuZGF0YS5yZXN1bHRzLmxlbmd0aCAhPSAwKSB7XG4gICAgICBjb25zdCBkYXRlcyA9IHJlcXVlc3QudmFsdWUuZGF0YS5yZXN1bHRzO1xuICAgICAgY29uc3QgaWRCcmFuY2ggPSByZXF1ZXN0LnZhbHVlLmNvbmZpZy5wYXJhbXMucGxhbnRhX2lkO1xuICAgICAgY29uc3QgYnJhbmNoID0gYnJhbmNoZXMuZmluZChicmFuY2ggPT4gYnJhbmNoLmlkID09PSBpZEJyYW5jaCk7XG5cbiAgICAgIHJldHVybiB7IG5hbWU6IGJyYW5jaC5uYW1lLCBkYXRlcyB9O1xuICAgIH1cbiAgICByZXR1cm4geyBuYW1lOiAnbm9uZScsIGRhdGVzOiBbXX07XG4gIH0pXG59O1xuXG5jb25zdCBjaGVjayA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgY29va2llVnR2ID0gXCJfdnR2X3Nlc3Npb249R0hEb21NNUNqJTJCWUMxa3FtNUlpT2xvOThkUnUwaUIzemdWWHgycyUyQjI1dFllN3g2SXk3elRwVndHbmQ3MzRxNXJCNTNWWndLSTRrb1VwYUZNQzBoQmdmaU5jUnloVmUlMkJsTHBJd1RFV2FOMSUyQnRnT0psUUg3Z2k5cm56U09iY2JOM2xCa21TeVROWVA5WUclMkZjalExbHB6ZjJzVmFQemk1Tjd2SUY0bURydUpEWVBKcldtMkJBTnBkWCUyRnZEam5BUmlTMmI1Q2dEbVYzb21NU2p4RjY5Q1NLUGF0V2ZYbWU0OUlmOHRxVEVmJTJCc2dMc1hpVFclMkJxYjZNY3hqbEUlMkZuTVZoR0hVTUNkbSUyRnRQRXpRWERITVNsVDRHYkwwaWEwNWdqZm5jYiUyQk1HdzFhZ0hpeHJMT3hrZ215c0JyTTltYyUzRC0tNTJWTlBLb1hyWU5EZU1IYS0tT0tkb1kwJTJGTmhQSUJiYyUyQkVHdjRDdFElM0QlM0RcIjsgXG4gIGNvbnN0IHVybCA9ICdodHRwczovL3Z0dnBiYS5taW5mcmEuZ2JhLmdvYi5hci90dXJub3NfcG9yX2ZlY2hhcy5qc29uJztcblxuICBjb25zdCByZXF1ZXN0cyA9IGJyYW5jaGVzLm1hcCgoYnJhbmNoKSA9PiB7XG4gICAgcmV0dXJuIGF4aW9zLmdldCh1cmwsIHtcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBwbGFudGFfaWQ6IGJyYW5jaC5pZCxcbiAgICAgICAgZG9taW5pbzogJ25rbjQ1MCdcbiAgICAgIH0sXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIENvb2tpZTogY29va2llVnR2XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG4gIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbFNldHRsZWQocmVxdWVzdHMpO1xuXG4gIHJldHVybiByZXN1bHRzO1xufVxuXG5mdW5jdGlvbiBIb21lUGFnZSh7IGRhdGVzIH0pIHtcbiAgY29uc29sZS5sb2coZGF0ZXMsICctLS0tLScpXG4gIHJldHVybiA8ZGl2PlxuICAgIDx1bD57ZGF0ZXMubWFwKChuYW1lLCBhdmFpbGFibGVEYXRlcykgPT4ge1xuICAgICAgY29uc29sZS5sb2coYXZhaWxhYmxlRGF0ZXMsICc9PT09PScpXG4gICAgICByZXR1cm4gPGxpPiB7bmFtZX06IHthdmFpbGFibGVEYXRlcy5tYXAoZGF0ZSA9PiB7IHJldHVybiBgJHtkYXRlLmZlY2hhfSB8IGA7IH0pfSA8L2xpPlxuICAgIH0pfVxuICAgIDwvdWw+XG4gIDwvZGl2PlxufVxuXG5Ib21lUGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBjaGVjaygpO1xuICBjb25zdCBkYXRlcyA9IGZpbmREYXRlcyhyZXN1bHRzKTtcblxuICByZXR1cm4geyBkYXRlcyB9O1xufVxuICBcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlIl0sIm5hbWVzIjpbImF4aW9zIiwicmVxdWlyZSIsImRlZmF1bHQiLCJicmFuY2hlcyIsImZpbmREYXRlcyIsInJlc3VsdHMiLCJtYXAiLCJyZXF1ZXN0IiwidmFsdWUiLCJkYXRhIiwibGVuZ3RoIiwiZGF0ZXMiLCJpZEJyYW5jaCIsImNvbmZpZyIsInBhcmFtcyIsInBsYW50YV9pZCIsImJyYW5jaCIsImZpbmQiLCJpZCIsIm5hbWUiLCJjaGVjayIsImNvb2tpZVZ0diIsInVybCIsInJlcXVlc3RzIiwiZ2V0IiwiZG9taW5pbyIsImhlYWRlcnMiLCJDb29raWUiLCJQcm9taXNlIiwiYWxsU2V0dGxlZCIsIkhvbWVQYWdlIiwiY29uc29sZSIsImxvZyIsImRpdiIsInVsIiwiYXZhaWxhYmxlRGF0ZXMiLCJsaSIsImRhdGUiLCJmZWNoYSIsImdldEluaXRpYWxQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});