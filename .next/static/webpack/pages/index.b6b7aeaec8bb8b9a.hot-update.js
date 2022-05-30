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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_pgalvan_Workspace_turnos_vtv_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_pgalvan_Workspace_turnos_vtv_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_pgalvan_Workspace_turnos_vtv_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\nvar axios = (__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\")[\"default\"]);\nvar branches = (__webpack_require__(/*! ../config */ \"./config/index.js\").branches);\nvar findDates = function(results) {\n    return results.map(function(request) {\n        if (request.value && request.value.data.results.length != 0) {\n            var dates = request.value.data.results;\n            var idBranch = request.value.config.params.planta_id;\n            return branches.map(function(name, id) {\n                if (idBranch === id) {\n                    return {\n                        name: name,\n                        dates: dates\n                    };\n                }\n            });\n        }\n    });\n};\nvar check = function() {\n    var cookieVtv = \"_vtv_session=GHDomM5Cj%2BYC1kqm5IiOlo98dRu0iB3zgVXx2s%2B25tYe7x6Iy7zTpVwGnd734q5rB53VZwKI4koUpaFMC0hBgfiNcRyhVe%2BlLpIwTEWaN1%2BtgOJlQH7gi9rnzSObcbN3lBkmSyTNYP9YG%2FcjQ1lpzf2sVaPzi5N7vIF4mDruJDYPJrWm2BANpdX%2FvDjnARiS2b5CgDmV3omMSjxF69CSKPatWfXme49If8tqTEf%2BsgLsXiTW%2Bqb6McxjlE%2FnMVhGHUMCdm%2FtPEzQXDHMSlT4GbL0ia05gjfncb%2BMGw1agHixrLOxkgmysBrM9mc%3D--52VNPKoXrYNDeMHa--OKdoY0%2FNhPIBbc%2BEGv4CtQ%3D%3D\";\n    var url = \"https://vtvpba.minfra.gba.gob.ar/turnos_por_fechas.json\";\n    var requests = branches.map(function(branch) {\n        return axios.get(url, {\n            params: {\n                planta_id: branch.id,\n                dominio: \"nkn450\"\n            },\n            headers: {\n                Cookie: cookieVtv\n            }\n        });\n    });\n    return Promise.allSettled(requests).then(function(results) {\n        return findDates(results);\n    });\n};\nfunction HomePage(param) {\n    var dates1 = param.dates;\n    var _this = this;\n    console.log(dates1, \"-----\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n            children: dates1.map(function(name, dates) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                    children: [\n                        \" \",\n                        name,\n                        \": \",\n                        dates.map(function(date) {\n                            return \"\".concat(date, \" | \");\n                        }),\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/pgalvan/Workspace/turnos-vtv/pages/index.js\",\n                    lineNumber: 44,\n                    columnNumber: 14\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/pgalvan/Workspace/turnos-vtv/pages/index.js\",\n            lineNumber: 43,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/pgalvan/Workspace/turnos-vtv/pages/index.js\",\n        lineNumber: 42,\n        columnNumber: 10\n    }, this);\n}\n_c = HomePage;\nHomePage.getInitialProps = _asyncToGenerator(_Users_pgalvan_Workspace_turnos_vtv_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n    var dates;\n    return _Users_pgalvan_Workspace_turnos_vtv_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n        while(1)switch(_ctx.prev = _ctx.next){\n            case 0:\n                _ctx.next = 2;\n                return check();\n            case 2:\n                dates = _ctx.sent;\n                return _ctx.abrupt(\"return\", {\n                    dates: dates\n                });\n            case 4:\n            case \"end\":\n                return _ctx.stop();\n        }\n    }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKS5kZWZhdWx0O1xuY29uc3QgeyBicmFuY2hlcyB9ID0gcmVxdWlyZSgnLi4vY29uZmlnJyk7XG5cbmNvbnN0IGZpbmREYXRlcyA9IChyZXN1bHRzKSA9PiB7XG4gIHJldHVybiByZXN1bHRzLm1hcChyZXF1ZXN0ID0+IHtcbiAgICBpZiAocmVxdWVzdC52YWx1ZSAmJiByZXF1ZXN0LnZhbHVlLmRhdGEucmVzdWx0cy5sZW5ndGggIT0gMCkge1xuICAgICAgY29uc3QgZGF0ZXMgPSByZXF1ZXN0LnZhbHVlLmRhdGEucmVzdWx0cztcbiAgICAgIGNvbnN0IGlkQnJhbmNoID0gcmVxdWVzdC52YWx1ZS5jb25maWcucGFyYW1zLnBsYW50YV9pZDtcblxuICAgICAgcmV0dXJuIGJyYW5jaGVzLm1hcCgobmFtZSwgaWQpID0+IHtcbiAgICAgICAgaWYgKGlkQnJhbmNoID09PSBpZCkge1xuICAgICAgICAgIHJldHVybiB7IG5hbWUsIGRhdGVzIH07XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9KVxufTtcblxuY29uc3QgY2hlY2sgPSAoKSA9PiB7XG4gIGNvbnN0IGNvb2tpZVZ0diA9IFwiX3Z0dl9zZXNzaW9uPUdIRG9tTTVDaiUyQllDMWtxbTVJaU9sbzk4ZFJ1MGlCM3pnVlh4MnMlMkIyNXRZZTd4Nkl5N3pUcFZ3R25kNzM0cTVyQjUzVlp3S0k0a29VcGFGTUMwaEJnZmlOY1J5aFZlJTJCbExwSXdURVdhTjElMkJ0Z09KbFFIN2dpOXJuelNPYmNiTjNsQmttU3lUTllQOVlHJTJGY2pRMWxwemYyc1ZhUHppNU43dklGNG1EcnVKRFlQSnJXbTJCQU5wZFglMkZ2RGpuQVJpUzJiNUNnRG1WM29tTVNqeEY2OUNTS1BhdFdmWG1lNDlJZjh0cVRFZiUyQnNnTHNYaVRXJTJCcWI2TWN4amxFJTJGbk1WaEdIVU1DZG0lMkZ0UEV6UVhESE1TbFQ0R2JMMGlhMDVnamZuY2IlMkJNR3cxYWdIaXhyTE94a2dteXNCck05bWMlM0QtLTUyVk5QS29YcllORGVNSGEtLU9LZG9ZMCUyRk5oUElCYmMlMkJFR3Y0Q3RRJTNEJTNEXCI7IFxuICBjb25zdCB1cmwgPSAnaHR0cHM6Ly92dHZwYmEubWluZnJhLmdiYS5nb2IuYXIvdHVybm9zX3Bvcl9mZWNoYXMuanNvbic7XG5cbiAgY29uc3QgcmVxdWVzdHMgPSBicmFuY2hlcy5tYXAoKGJyYW5jaCkgPT4ge1xuICAgIHJldHVybiBheGlvcy5nZXQodXJsLCB7XG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgcGxhbnRhX2lkOiBicmFuY2guaWQsXG4gICAgICAgIGRvbWluaW86ICdua240NTAnXG4gICAgICB9LFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBDb29raWU6IGNvb2tpZVZ0dlxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gUHJvbWlzZS5hbGxTZXR0bGVkKHJlcXVlc3RzKS50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgcmV0dXJuIGZpbmREYXRlcyhyZXN1bHRzKTtcbiAgfSlcbn1cblxuZnVuY3Rpb24gSG9tZVBhZ2UoeyBkYXRlcyB9KSB7XG4gIGNvbnNvbGUubG9nKGRhdGVzLCAnLS0tLS0nKVxuICByZXR1cm4gPGRpdj5cbiAgICA8dWw+e2RhdGVzLm1hcCgobmFtZSwgZGF0ZXMpID0+IHtcbiAgICAgIHJldHVybiA8bGk+IHtuYW1lfToge2RhdGVzLm1hcChkYXRlID0+IHsgcmV0dXJuIGAke2RhdGV9IHwgYDsgfSl9IDwvbGk+XG4gICAgfSl9XG4gICAgPC91bD5cbiAgPC9kaXY+XG59XG5cbkhvbWVQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZGF0ZXMgPSBhd2FpdCBjaGVjaygpO1xuXG4gIHJldHVybiB7IGRhdGVzIH07XG59XG4gIFxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2UiXSwibmFtZXMiOlsiYXhpb3MiLCJyZXF1aXJlIiwiZGVmYXVsdCIsImJyYW5jaGVzIiwiZmluZERhdGVzIiwicmVzdWx0cyIsIm1hcCIsInJlcXVlc3QiLCJ2YWx1ZSIsImRhdGEiLCJsZW5ndGgiLCJkYXRlcyIsImlkQnJhbmNoIiwiY29uZmlnIiwicGFyYW1zIiwicGxhbnRhX2lkIiwibmFtZSIsImlkIiwiY2hlY2siLCJjb29raWVWdHYiLCJ1cmwiLCJyZXF1ZXN0cyIsImJyYW5jaCIsImdldCIsImRvbWluaW8iLCJoZWFkZXJzIiwiQ29va2llIiwiUHJvbWlzZSIsImFsbFNldHRsZWQiLCJ0aGVuIiwiSG9tZVBhZ2UiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwidWwiLCJsaSIsImRhdGUiLCJnZXRJbml0aWFsUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});