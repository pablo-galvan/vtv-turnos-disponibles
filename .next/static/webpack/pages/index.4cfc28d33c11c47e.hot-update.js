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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_pgalvan_Workspace_turnos_vtv_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_pgalvan_Workspace_turnos_vtv_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_pgalvan_Workspace_turnos_vtv_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\nvar axios = (__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\")[\"default\"]);\nvar branches = (__webpack_require__(/*! ../config */ \"./config/index.js\").branches);\nvar findDates = function() {\n    var _ref = _asyncToGenerator(_Users_pgalvan_Workspace_turnos_vtv_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(results) {\n        return _Users_pgalvan_Workspace_turnos_vtv_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    return _ctx.abrupt(\"return\", results.map(function(request) {\n                        if (request.value && request.value.data.results.length != 0) {\n                            var dates = request.value.data.results;\n                            var idBranch = request.value.config.params.planta_id;\n                            return branches.map(function(name, id) {\n                                if (idBranch === id) {\n                                    return {\n                                        name: name,\n                                        dates: dates\n                                    };\n                                }\n                            });\n                        }\n                    }));\n                case 1:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function findDates(results) {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar check = function() {\n    var _ref = _asyncToGenerator(_Users_pgalvan_Workspace_turnos_vtv_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var cookieVtv, url, requests;\n        return _Users_pgalvan_Workspace_turnos_vtv_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    cookieVtv = \"_vtv_session=GHDomM5Cj%2BYC1kqm5IiOlo98dRu0iB3zgVXx2s%2B25tYe7x6Iy7zTpVwGnd734q5rB53VZwKI4koUpaFMC0hBgfiNcRyhVe%2BlLpIwTEWaN1%2BtgOJlQH7gi9rnzSObcbN3lBkmSyTNYP9YG%2FcjQ1lpzf2sVaPzi5N7vIF4mDruJDYPJrWm2BANpdX%2FvDjnARiS2b5CgDmV3omMSjxF69CSKPatWfXme49If8tqTEf%2BsgLsXiTW%2Bqb6McxjlE%2FnMVhGHUMCdm%2FtPEzQXDHMSlT4GbL0ia05gjfncb%2BMGw1agHixrLOxkgmysBrM9mc%3D--52VNPKoXrYNDeMHa--OKdoY0%2FNhPIBbc%2BEGv4CtQ%3D%3D\";\n                    url = \"https://vtvpba.minfra.gba.gob.ar/turnos_por_fechas.json\";\n                    requests = branches.map(function(branch) {\n                        return axios.get(url.replace(\"ID\", branch.id), {\n                            params: {\n                                planta_id: branch.id,\n                                dominio: \"nkn450\"\n                            },\n                            headers: {\n                                Cookie: cookieVtv\n                            }\n                        });\n                    });\n                    Promise.allSettled(requests).then(function(results) {\n                        return findDates(results);\n                    });\n                case 4:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function check() {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar _this = undefined;\nvar HomePage = function() {\n    var _ref = _asyncToGenerator(_Users_pgalvan_Workspace_turnos_vtv_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        return _Users_pgalvan_Workspace_turnos_vtv_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    return _ctx.abrupt(\"return\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        children: \"Welcome to Next.js!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/pgalvan/Workspace/turnos-vtv/pages/index.js\",\n                        lineNumber: 41,\n                        columnNumber: 10\n                    }, _this));\n                case 1:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function HomePage() {\n        return _ref.apply(this, arguments);\n    };\n}();\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsS0FBSyxHQUFHQyw4RUFBd0I7QUFDdEMsSUFBTSxRQUFVLEdBQUtBLG9FQUFMO0FBRWhCLElBQU1HLFNBQVM7ZUFBRyxrTEFBT0MsT0FBTyxFQUFLOzs7O2lEQUM1QkEsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFNBQUFBLE9BQU8sRUFBSTt3QkFDNUIsSUFBSUEsT0FBTyxDQUFDQyxLQUFLLElBQUlELE9BQU8sQ0FBQ0MsS0FBSyxDQUFDQyxJQUFJLENBQUNKLE9BQU8sQ0FBQ0ssTUFBTSxJQUFJLENBQUMsRUFBRTs0QkFDM0QsSUFBTUMsS0FBSyxHQUFHSixPQUFPLENBQUNDLEtBQUssQ0FBQ0MsSUFBSSxDQUFDSixPQUFPOzRCQUN4QyxJQUFNTyxRQUFRLEdBQUdMLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDSyxNQUFNLENBQUNDLE1BQU0sQ0FBQ0MsU0FBUzs0QkFFdEQsT0FBT1osUUFBUSxDQUFDRyxHQUFHLENBQUMsU0FBQ1UsSUFBSSxFQUFFQyxFQUFFLEVBQUs7Z0NBQ2hDLElBQUlMLFFBQVEsS0FBS0ssRUFBRSxFQUFFO29DQUNuQixPQUFPO3dDQUFFRCxJQUFJLEVBQUpBLElBQUk7d0NBQUVMLEtBQUssRUFBTEEsS0FBSztxQ0FBRSxDQUFDO2lDQUN4Qjs2QkFDRixDQUFDO3lCQUNIO3FCQUNGLENBQUM7Ozs7OztLQUNIO29CQWJLUCxTQUFTLENBQVVDLE9BQU87OztHQWEvQjtBQUVELElBQU1hLEtBQUs7ZUFBRyxvTEFBWTtZQUNsQkMsU0FBUyxFQUNUQyxHQUFHLEVBRUhDLFFBQVE7Ozs7b0JBSFJGLFNBQVMsR0FBRyx1WkFBdVosQ0FBQztvQkFDcGFDLEdBQUcsR0FBRyx5REFBeUQsQ0FBQztvQkFFaEVDLFFBQVEsR0FBR2xCLFFBQVEsQ0FBQ0csR0FBRyxDQUFDLFNBQUNnQixNQUFNLEVBQUs7d0JBQ3hDLE9BQU90QixLQUFLLENBQUN1QixHQUFHLENBQUNILEdBQUcsQ0FBQ0ksT0FBTyxDQUFDLElBQUksRUFBRUYsTUFBTSxDQUFDTCxFQUFFLENBQUMsRUFBRTs0QkFDN0NILE1BQU0sRUFBRTtnQ0FDTkMsU0FBUyxFQUFFTyxNQUFNLENBQUNMLEVBQUU7Z0NBQ3BCUSxPQUFPLEVBQUUsUUFBUTs2QkFDbEI7NEJBQ0RDLE9BQU8sRUFBRTtnQ0FDUEMsTUFBTSxFQUFFUixTQUFTOzZCQUNsQjt5QkFDRixDQUFDLENBQUM7cUJBQ0osQ0FBQyxDQUFDO29CQUVIUyxPQUFPLENBQUNDLFVBQVUsQ0FBQ1IsUUFBUSxDQUFDLENBQUNTLElBQUksQ0FBQyxTQUFDekIsT0FBTyxFQUFLO3dCQUM3QyxPQUFPRCxTQUFTLENBQUNDLE9BQU8sQ0FBQyxDQUFDO3FCQUMzQixDQUFDOzs7Ozs7S0FDSDtvQkFuQkthLEtBQUs7OztHQW1CVjs7QUFFRCxJQUFNYSxRQUFRO2VBQUcsb0xBQVk7Ozs7K0RBQ3BCLDhEQUFDQyxLQUFHO2tDQUFDLHFCQUFtQjs7Ozs7NkJBQU07Ozs7OztLQUN0QztvQkFGS0QsUUFBUTs7O0dBRWI7QUFGS0EsS0FBQUEsUUFBUTtBQUlkLCtEQUFlQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpLmRlZmF1bHQ7XG5jb25zdCB7IGJyYW5jaGVzIH0gPSByZXF1aXJlKCcuLi9jb25maWcnKTtcblxuY29uc3QgZmluZERhdGVzID0gYXN5bmMgKHJlc3VsdHMpID0+IHtcbiAgcmV0dXJuIHJlc3VsdHMubWFwKHJlcXVlc3QgPT4ge1xuICAgIGlmIChyZXF1ZXN0LnZhbHVlICYmIHJlcXVlc3QudmFsdWUuZGF0YS5yZXN1bHRzLmxlbmd0aCAhPSAwKSB7XG4gICAgICBjb25zdCBkYXRlcyA9IHJlcXVlc3QudmFsdWUuZGF0YS5yZXN1bHRzO1xuICAgICAgY29uc3QgaWRCcmFuY2ggPSByZXF1ZXN0LnZhbHVlLmNvbmZpZy5wYXJhbXMucGxhbnRhX2lkO1xuXG4gICAgICByZXR1cm4gYnJhbmNoZXMubWFwKChuYW1lLCBpZCkgPT4ge1xuICAgICAgICBpZiAoaWRCcmFuY2ggPT09IGlkKSB7XG4gICAgICAgICAgcmV0dXJuIHsgbmFtZSwgZGF0ZXMgfTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH0pXG59O1xuXG5jb25zdCBjaGVjayA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgY29va2llVnR2ID0gXCJfdnR2X3Nlc3Npb249R0hEb21NNUNqJTJCWUMxa3FtNUlpT2xvOThkUnUwaUIzemdWWHgycyUyQjI1dFllN3g2SXk3elRwVndHbmQ3MzRxNXJCNTNWWndLSTRrb1VwYUZNQzBoQmdmaU5jUnloVmUlMkJsTHBJd1RFV2FOMSUyQnRnT0psUUg3Z2k5cm56U09iY2JOM2xCa21TeVROWVA5WUclMkZjalExbHB6ZjJzVmFQemk1Tjd2SUY0bURydUpEWVBKcldtMkJBTnBkWCUyRnZEam5BUmlTMmI1Q2dEbVYzb21NU2p4RjY5Q1NLUGF0V2ZYbWU0OUlmOHRxVEVmJTJCc2dMc1hpVFclMkJxYjZNY3hqbEUlMkZuTVZoR0hVTUNkbSUyRnRQRXpRWERITVNsVDRHYkwwaWEwNWdqZm5jYiUyQk1HdzFhZ0hpeHJMT3hrZ215c0JyTTltYyUzRC0tNTJWTlBLb1hyWU5EZU1IYS0tT0tkb1kwJTJGTmhQSUJiYyUyQkVHdjRDdFElM0QlM0RcIjsgXG4gIGNvbnN0IHVybCA9ICdodHRwczovL3Z0dnBiYS5taW5mcmEuZ2JhLmdvYi5hci90dXJub3NfcG9yX2ZlY2hhcy5qc29uJztcblxuICBjb25zdCByZXF1ZXN0cyA9IGJyYW5jaGVzLm1hcCgoYnJhbmNoKSA9PiB7XG4gICAgcmV0dXJuIGF4aW9zLmdldCh1cmwucmVwbGFjZSgnSUQnLCBicmFuY2guaWQpLCB7XG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgcGxhbnRhX2lkOiBicmFuY2guaWQsXG4gICAgICAgIGRvbWluaW86ICdua240NTAnXG4gICAgICB9LFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBDb29raWU6IGNvb2tpZVZ0dlxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICBQcm9taXNlLmFsbFNldHRsZWQocmVxdWVzdHMpLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAgICByZXR1cm4gZmluZERhdGVzKHJlc3VsdHMpO1xuICB9KVxufVxuXG5jb25zdCBIb21lUGFnZSA9IGFzeW5jICgpID0+IHsgIFxuICByZXR1cm4gPGRpdj5XZWxjb21lIHRvIE5leHQuanMhPC9kaXY+XG59XG4gIFxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2UiXSwibmFtZXMiOlsiYXhpb3MiLCJyZXF1aXJlIiwiZGVmYXVsdCIsImJyYW5jaGVzIiwiZmluZERhdGVzIiwicmVzdWx0cyIsIm1hcCIsInJlcXVlc3QiLCJ2YWx1ZSIsImRhdGEiLCJsZW5ndGgiLCJkYXRlcyIsImlkQnJhbmNoIiwiY29uZmlnIiwicGFyYW1zIiwicGxhbnRhX2lkIiwibmFtZSIsImlkIiwiY2hlY2siLCJjb29raWVWdHYiLCJ1cmwiLCJyZXF1ZXN0cyIsImJyYW5jaCIsImdldCIsInJlcGxhY2UiLCJkb21pbmlvIiwiaGVhZGVycyIsIkNvb2tpZSIsIlByb21pc2UiLCJhbGxTZXR0bGVkIiwidGhlbiIsIkhvbWVQYWdlIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});