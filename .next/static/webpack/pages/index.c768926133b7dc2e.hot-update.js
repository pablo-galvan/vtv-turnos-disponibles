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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_pgalvan_Workspace_turnos_vtv_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_pgalvan_Workspace_turnos_vtv_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_pgalvan_Workspace_turnos_vtv_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\nvar axios = (__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\")[\"default\"]);\nvar branches = (__webpack_require__(/*! ../config */ \"./config/index.js\").branches);\nvar findDates = function(results) {\n    return results.map(function(request) {\n        var idBranch = request.value.config.params.planta_id;\n        var branch1 = branches.find(function(branch) {\n            return branch.id === idBranch;\n        });\n        if (request.value.data.results.length != 0) {\n            var dates = request.value.data.results;\n            return {\n                name: branch1.name,\n                dates: dates\n            };\n        }\n        return {\n            name: branch1.name,\n            dates: []\n        };\n    });\n};\nvar check = function() {\n    var _ref = _asyncToGenerator(_Users_pgalvan_Workspace_turnos_vtv_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var cookieVtv, url, requests, results;\n        return _Users_pgalvan_Workspace_turnos_vtv_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    cookieVtv = \"_vtv_session=GHDomM5Cj%2BYC1kqm5IiOlo98dRu0iB3zgVXx2s%2B25tYe7x6Iy7zTpVwGnd734q5rB53VZwKI4koUpaFMC0hBgfiNcRyhVe%2BlLpIwTEWaN1%2BtgOJlQH7gi9rnzSObcbN3lBkmSyTNYP9YG%2FcjQ1lpzf2sVaPzi5N7vIF4mDruJDYPJrWm2BANpdX%2FvDjnARiS2b5CgDmV3omMSjxF69CSKPatWfXme49If8tqTEf%2BsgLsXiTW%2Bqb6McxjlE%2FnMVhGHUMCdm%2FtPEzQXDHMSlT4GbL0ia05gjfncb%2BMGw1agHixrLOxkgmysBrM9mc%3D--52VNPKoXrYNDeMHa--OKdoY0%2FNhPIBbc%2BEGv4CtQ%3D%3D\";\n                    url = \"https://vtvpba.minfra.gba.gob.ar/turnos_por_fechas.json\";\n                    requests = branches.map(function(branch) {\n                        return axios.get(url, {\n                            params: {\n                                planta_id: branch.id,\n                                dominio: \"nkn450\"\n                            },\n                            headers: {\n                                Cookie: cookieVtv\n                            }\n                        });\n                    });\n                    _ctx.next = 5;\n                    return Promise.allSettled(requests);\n                case 5:\n                    results = _ctx.sent;\n                    return _ctx.abrupt(\"return\", results);\n                case 7:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function check() {\n        return _ref.apply(this, arguments);\n    };\n}();\nfunction HomePage(param) {\n    var dates = param.dates;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n            children: dates.map(function(date1) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                    children: [\n                        \" \",\n                        date1.name,\n                        \": \",\n                        date1.dates.map(function(date) {\n                            return \"\".concat(date.fecha, \" | \");\n                        }),\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/pgalvan/Workspace/turnos-vtv/pages/index.js\",\n                    lineNumber: 42,\n                    columnNumber: 14\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/pgalvan/Workspace/turnos-vtv/pages/index.js\",\n            lineNumber: 41,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/pgalvan/Workspace/turnos-vtv/pages/index.js\",\n        lineNumber: 40,\n        columnNumber: 10\n    }, this);\n}\n_c = HomePage;\nHomePage.getInitialProps = _asyncToGenerator(_Users_pgalvan_Workspace_turnos_vtv_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n    var results, dates;\n    return _Users_pgalvan_Workspace_turnos_vtv_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.next = 2;\n                return check();\n            case 2:\n                results = _ctx.sent;\n                dates = findDates(results);\n                return _ctx.abrupt(\"return\", {\n                    dates: dates\n                });\n            case 5:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7NkNBRTFCO29CQUFFYSxLQUFLLEVBQUxBLEtBQUs7aUJBQUU7Ozs7OztDQUNqQjtBQUVELCtEQUFlWSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpLmRlZmF1bHQ7XG5jb25zdCB7IGJyYW5jaGVzIH0gPSByZXF1aXJlKCcuLi9jb25maWcnKTtcblxuY29uc3QgZmluZERhdGVzID0gKHJlc3VsdHMpID0+IHtcbiAgcmV0dXJuIHJlc3VsdHMubWFwKHJlcXVlc3QgPT4ge1xuICAgIGNvbnN0IGlkQnJhbmNoID0gcmVxdWVzdC52YWx1ZS5jb25maWcucGFyYW1zLnBsYW50YV9pZDtcbiAgICBjb25zdCBicmFuY2ggPSBicmFuY2hlcy5maW5kKGJyYW5jaCA9PiBicmFuY2guaWQgPT09IGlkQnJhbmNoKTtcblxuICAgIGlmIChyZXF1ZXN0LnZhbHVlLmRhdGEucmVzdWx0cy5sZW5ndGggIT0gMCkge1xuICAgICAgY29uc3QgZGF0ZXMgPSByZXF1ZXN0LnZhbHVlLmRhdGEucmVzdWx0cztcblxuICAgICAgcmV0dXJuIHsgbmFtZTogYnJhbmNoLm5hbWUsIGRhdGVzIH07XG4gICAgfVxuICAgIHJldHVybiB7IG5hbWU6IGJyYW5jaC5uYW1lLCBkYXRlczogW119O1xuICB9KVxufTtcblxuY29uc3QgY2hlY2sgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGNvb2tpZVZ0diA9IFwiX3Z0dl9zZXNzaW9uPUdIRG9tTTVDaiUyQllDMWtxbTVJaU9sbzk4ZFJ1MGlCM3pnVlh4MnMlMkIyNXRZZTd4Nkl5N3pUcFZ3R25kNzM0cTVyQjUzVlp3S0k0a29VcGFGTUMwaEJnZmlOY1J5aFZlJTJCbExwSXdURVdhTjElMkJ0Z09KbFFIN2dpOXJuelNPYmNiTjNsQmttU3lUTllQOVlHJTJGY2pRMWxwemYyc1ZhUHppNU43dklGNG1EcnVKRFlQSnJXbTJCQU5wZFglMkZ2RGpuQVJpUzJiNUNnRG1WM29tTVNqeEY2OUNTS1BhdFdmWG1lNDlJZjh0cVRFZiUyQnNnTHNYaVRXJTJCcWI2TWN4amxFJTJGbk1WaEdIVU1DZG0lMkZ0UEV6UVhESE1TbFQ0R2JMMGlhMDVnamZuY2IlMkJNR3cxYWdIaXhyTE94a2dteXNCck05bWMlM0QtLTUyVk5QS29YcllORGVNSGEtLU9LZG9ZMCUyRk5oUElCYmMlMkJFR3Y0Q3RRJTNEJTNEXCI7IFxuICBjb25zdCB1cmwgPSAnaHR0cHM6Ly92dHZwYmEubWluZnJhLmdiYS5nb2IuYXIvdHVybm9zX3Bvcl9mZWNoYXMuanNvbic7XG5cbiAgY29uc3QgcmVxdWVzdHMgPSBicmFuY2hlcy5tYXAoKGJyYW5jaCkgPT4ge1xuICAgIHJldHVybiBheGlvcy5nZXQodXJsLCB7XG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgcGxhbnRhX2lkOiBicmFuY2guaWQsXG4gICAgICAgIGRvbWluaW86ICdua240NTAnXG4gICAgICB9LFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBDb29raWU6IGNvb2tpZVZ0dlxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICBjb25zdCByZXN1bHRzID0gYXdhaXQgUHJvbWlzZS5hbGxTZXR0bGVkKHJlcXVlc3RzKTtcblxuICByZXR1cm4gcmVzdWx0cztcbn1cblxuZnVuY3Rpb24gSG9tZVBhZ2UoeyBkYXRlcyB9KSB7XG4gIHJldHVybiA8ZGl2PlxuICAgIDx1bD57ZGF0ZXMubWFwKChkYXRlKSA9PiB7XG4gICAgICByZXR1cm4gPGxpPiB7ZGF0ZS5uYW1lfToge2RhdGUuZGF0ZXMubWFwKGRhdGUgPT4geyByZXR1cm4gYCR7ZGF0ZS5mZWNoYX0gfCBgOyB9KX0gPC9saT5cbiAgICB9KX1cbiAgICA8L3VsPlxuICA8L2Rpdj5cbn1cblxuSG9tZVBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXN1bHRzID0gYXdhaXQgY2hlY2soKTtcbiAgY29uc3QgZGF0ZXMgPSBmaW5kRGF0ZXMocmVzdWx0cyk7XG5cbiAgcmV0dXJuIHsgZGF0ZXMgfTtcbn1cbiAgXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZSJdLCJuYW1lcyI6WyJheGlvcyIsInJlcXVpcmUiLCJkZWZhdWx0IiwiYnJhbmNoZXMiLCJmaW5kRGF0ZXMiLCJyZXN1bHRzIiwibWFwIiwicmVxdWVzdCIsImlkQnJhbmNoIiwidmFsdWUiLCJjb25maWciLCJwYXJhbXMiLCJwbGFudGFfaWQiLCJicmFuY2giLCJmaW5kIiwiaWQiLCJkYXRhIiwibGVuZ3RoIiwiZGF0ZXMiLCJuYW1lIiwiY2hlY2siLCJjb29raWVWdHYiLCJ1cmwiLCJyZXF1ZXN0cyIsImdldCIsImRvbWluaW8iLCJoZWFkZXJzIiwiQ29va2llIiwiUHJvbWlzZSIsImFsbFNldHRsZWQiLCJIb21lUGFnZSIsImRpdiIsInVsIiwiZGF0ZSIsImxpIiwiZmVjaGEiLCJnZXRJbml0aWFsUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});