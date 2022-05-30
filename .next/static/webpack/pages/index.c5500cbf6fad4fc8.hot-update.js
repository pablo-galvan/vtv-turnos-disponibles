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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_pgalvan_Workspace_turnos_vtv_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_pgalvan_Workspace_turnos_vtv_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_pgalvan_Workspace_turnos_vtv_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\nvar axios = (__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\")[\"default\"]);\nvar branches = (__webpack_require__(/*! ../config */ \"./config/index.js\").branches);\nvar findDates = function(results) {\n    return results.map(function(request) {\n        if (request.value && request.value.data.results.length != 0) {\n            var dates = request.value.data.results;\n            var idBranch = request.value.config.params.planta_id;\n            return branches.map(function(name, id) {\n                if (idBranch === id) {\n                    return {\n                        name: name,\n                        dates: dates\n                    };\n                }\n            });\n        }\n    });\n};\nvar check = function() {\n    var _ref = _asyncToGenerator(_Users_pgalvan_Workspace_turnos_vtv_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var cookieVtv, url, requests, results;\n        return _Users_pgalvan_Workspace_turnos_vtv_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    cookieVtv = \"_vtv_session=GHDomM5Cj%2BYC1kqm5IiOlo98dRu0iB3zgVXx2s%2B25tYe7x6Iy7zTpVwGnd734q5rB53VZwKI4koUpaFMC0hBgfiNcRyhVe%2BlLpIwTEWaN1%2BtgOJlQH7gi9rnzSObcbN3lBkmSyTNYP9YG%2FcjQ1lpzf2sVaPzi5N7vIF4mDruJDYPJrWm2BANpdX%2FvDjnARiS2b5CgDmV3omMSjxF69CSKPatWfXme49If8tqTEf%2BsgLsXiTW%2Bqb6McxjlE%2FnMVhGHUMCdm%2FtPEzQXDHMSlT4GbL0ia05gjfncb%2BMGw1agHixrLOxkgmysBrM9mc%3D--52VNPKoXrYNDeMHa--OKdoY0%2FNhPIBbc%2BEGv4CtQ%3D%3D\";\n                    url = \"https://vtvpba.minfra.gba.gob.ar/turnos_por_fechas.json\";\n                    requests = branches.map(function(branch) {\n                        return axios.get(url, {\n                            params: {\n                                planta_id: branch.id,\n                                dominio: \"nkn450\"\n                            },\n                            headers: {\n                                Cookie: cookieVtv\n                            }\n                        });\n                    });\n                    _ctx.next = 5;\n                    return Promise.allSettled(requests);\n                case 5:\n                    results = _ctx.sent;\n                    return _ctx.abrupt(\"return\", results);\n                case 7:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function check() {\n        return _ref.apply(this, arguments);\n    };\n}();\nfunction HomePage(param) {\n    var dates1 = param.dates;\n    var _this = this;\n    console.log(dates1, \"-----\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n            children: dates1.map(function(name, dates) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                    children: [\n                        \" \",\n                        name,\n                        \": \",\n                        dates.map(function(date) {\n                            return \"\".concat(date, \" | \");\n                        }),\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/pgalvan/Workspace/turnos-vtv/pages/index.js\",\n                    lineNumber: 44,\n                    columnNumber: 14\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/pgalvan/Workspace/turnos-vtv/pages/index.js\",\n            lineNumber: 43,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/pgalvan/Workspace/turnos-vtv/pages/index.js\",\n        lineNumber: 42,\n        columnNumber: 10\n    }, this);\n}\n_c = HomePage;\nHomePage.getInitialProps = _asyncToGenerator(_Users_pgalvan_Workspace_turnos_vtv_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n    var dates;\n    return _Users_pgalvan_Workspace_turnos_vtv_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.next = 2;\n                return check();\n            case 2:\n                dates = _ctx.sent;\n                return _ctx.abrupt(\"return\", {\n                    dates: dates\n                });\n            case 4:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJykuZGVmYXVsdDtcbmNvbnN0IHsgYnJhbmNoZXMgfSA9IHJlcXVpcmUoJy4uL2NvbmZpZycpO1xuXG5jb25zdCBmaW5kRGF0ZXMgPSAocmVzdWx0cykgPT4ge1xuICByZXR1cm4gcmVzdWx0cy5tYXAocmVxdWVzdCA9PiB7XG4gICAgaWYgKHJlcXVlc3QudmFsdWUgJiYgcmVxdWVzdC52YWx1ZS5kYXRhLnJlc3VsdHMubGVuZ3RoICE9IDApIHtcbiAgICAgIGNvbnN0IGRhdGVzID0gcmVxdWVzdC52YWx1ZS5kYXRhLnJlc3VsdHM7XG4gICAgICBjb25zdCBpZEJyYW5jaCA9IHJlcXVlc3QudmFsdWUuY29uZmlnLnBhcmFtcy5wbGFudGFfaWQ7XG5cbiAgICAgIHJldHVybiBicmFuY2hlcy5tYXAoKG5hbWUsIGlkKSA9PiB7XG4gICAgICAgIGlmIChpZEJyYW5jaCA9PT0gaWQpIHtcbiAgICAgICAgICByZXR1cm4geyBuYW1lLCBkYXRlcyB9O1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfSlcbn07XG5cbmNvbnN0IGNoZWNrID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBjb29raWVWdHYgPSBcIl92dHZfc2Vzc2lvbj1HSERvbU01Q2olMkJZQzFrcW01SWlPbG85OGRSdTBpQjN6Z1ZYeDJzJTJCMjV0WWU3eDZJeTd6VHBWd0duZDczNHE1ckI1M1Zad0tJNGtvVXBhRk1DMGhCZ2ZpTmNSeWhWZSUyQmxMcEl3VEVXYU4xJTJCdGdPSmxRSDdnaTlybnpTT2JjYk4zbEJrbVN5VE5ZUDlZRyUyRmNqUTFscHpmMnNWYVB6aTVON3ZJRjRtRHJ1SkRZUEpyV20yQkFOcGRYJTJGdkRqbkFSaVMyYjVDZ0RtVjNvbU1TanhGNjlDU0tQYXRXZlhtZTQ5SWY4dHFURWYlMkJzZ0xzWGlUVyUyQnFiNk1jeGpsRSUyRm5NVmhHSFVNQ2RtJTJGdFBFelFYREhNU2xUNEdiTDBpYTA1Z2pmbmNiJTJCTUd3MWFnSGl4ckxPeGtnbXlzQnJNOW1jJTNELS01MlZOUEtvWHJZTkRlTUhhLS1PS2RvWTAlMkZOaFBJQmJjJTJCRUd2NEN0USUzRCUzRFwiOyBcbiAgY29uc3QgdXJsID0gJ2h0dHBzOi8vdnR2cGJhLm1pbmZyYS5nYmEuZ29iLmFyL3R1cm5vc19wb3JfZmVjaGFzLmpzb24nO1xuXG4gIGNvbnN0IHJlcXVlc3RzID0gYnJhbmNoZXMubWFwKChicmFuY2gpID0+IHtcbiAgICByZXR1cm4gYXhpb3MuZ2V0KHVybCwge1xuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIHBsYW50YV9pZDogYnJhbmNoLmlkLFxuICAgICAgICBkb21pbmlvOiAnbmtuNDUwJ1xuICAgICAgfSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgQ29va2llOiBjb29raWVWdHZcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsU2V0dGxlZChyZXF1ZXN0cyk7XG5cbiAgcmV0dXJuIHJlc3VsdHM7XG59XG5cbmZ1bmN0aW9uIEhvbWVQYWdlKHsgZGF0ZXMgfSkge1xuICBjb25zb2xlLmxvZyhkYXRlcywgJy0tLS0tJylcbiAgcmV0dXJuIDxkaXY+XG4gICAgPHVsPntkYXRlcy5tYXAoKG5hbWUsIGRhdGVzKSA9PiB7XG4gICAgICByZXR1cm4gPGxpPiB7bmFtZX06IHtkYXRlcy5tYXAoZGF0ZSA9PiB7IHJldHVybiBgJHtkYXRlfSB8IGA7IH0pfSA8L2xpPlxuICAgIH0pfVxuICAgIDwvdWw+XG4gIDwvZGl2PlxufVxuXG5Ib21lUGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGRhdGVzID0gYXdhaXQgY2hlY2soKTtcblxuICByZXR1cm4geyBkYXRlcyB9O1xufVxuICBcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlIl0sIm5hbWVzIjpbImF4aW9zIiwicmVxdWlyZSIsImRlZmF1bHQiLCJicmFuY2hlcyIsImZpbmREYXRlcyIsInJlc3VsdHMiLCJtYXAiLCJyZXF1ZXN0IiwidmFsdWUiLCJkYXRhIiwibGVuZ3RoIiwiZGF0ZXMiLCJpZEJyYW5jaCIsImNvbmZpZyIsInBhcmFtcyIsInBsYW50YV9pZCIsIm5hbWUiLCJpZCIsImNoZWNrIiwiY29va2llVnR2IiwidXJsIiwicmVxdWVzdHMiLCJicmFuY2giLCJnZXQiLCJkb21pbmlvIiwiaGVhZGVycyIsIkNvb2tpZSIsIlByb21pc2UiLCJhbGxTZXR0bGVkIiwiSG9tZVBhZ2UiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwidWwiLCJsaSIsImRhdGUiLCJnZXRJbml0aWFsUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});