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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar axios = (__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\")[\"default\"]);\nvar findDates = function(results) {\n    results.map(function(request) {\n        if (request.value.data.results.length != 0) {\n            console.log(request.value.data.results, request.value.config.params.planta_id);\n        }\n    });\n};\nvar check = function() {\n    var cookieVtv = \"_vtv_session=GHDomM5Cj%2BYC1kqm5IiOlo98dRu0iB3zgVXx2s%2B25tYe7x6Iy7zTpVwGnd734q5rB53VZwKI4koUpaFMC0hBgfiNcRyhVe%2BlLpIwTEWaN1%2BtgOJlQH7gi9rnzSObcbN3lBkmSyTNYP9YG%2FcjQ1lpzf2sVaPzi5N7vIF4mDruJDYPJrWm2BANpdX%2FvDjnARiS2b5CgDmV3omMSjxF69CSKPatWfXme49If8tqTEf%2BsgLsXiTW%2Bqb6McxjlE%2FnMVhGHUMCdm%2FtPEzQXDHMSlT4GbL0ia05gjfncb%2BMGw1agHixrLOxkgmysBrM9mc%3D--52VNPKoXrYNDeMHa--OKdoY0%2FNhPIBbc%2BEGv4CtQ%3D%3D\";\n    var url = \"https://vtvpba.minfra.gba.gob.ar/turnos_por_fechas.json\";\n    var branches = [\n        {\n            name: \"Bernal\",\n            id: \"36\"\n        },\n        {\n            name: \"Solano\",\n            id: \"59\"\n        },\n        {\n            name: \"Estevan Echeverria\",\n            id: \"33\"\n        },\n        {\n            name: \"Berisso\",\n            id: \"42\"\n        },\n        {\n            name: \"Berazategui\",\n            id: \"32\"\n        }, \n    ];\n    var requests = branches.map(function(branch) {\n        return axios.get(url.replace(\"ID\", branch.id), {\n            params: {\n                planta_id: branch.id,\n                dominio: \"nkn450\"\n            },\n            headers: {\n                Cookie: cookieVtv\n            }\n        });\n    });\n    Promise.allSettled(requests).then(function(results) {\n        console.log(results[0]);\n        findDates(results);\n    });\n};\nfunction HomePage() {\n    check();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Welcome to Next.js!\"\n    }, void 0, false, {\n        fileName: \"/Users/pgalvan/Workspace/turnos-vtv/pages/index.js\",\n        lineNumber: 57,\n        columnNumber: 10\n    }, this);\n}\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUFBLElBQU1BLEtBQUssR0FBR0MsOEVBQXdCO0FBRXRDLElBQU1FLFNBQVMsR0FBRyxTQUFDQyxPQUFPLEVBQUs7SUFDN0JBLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxTQUFBQSxPQUFPLEVBQUk7UUFDckIsSUFBSUEsT0FBTyxDQUFDQyxLQUFLLENBQUNDLElBQUksQ0FBQ0osT0FBTyxDQUFDSyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQzFDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsT0FBTyxDQUFDQyxLQUFLLENBQUNDLElBQUksQ0FBQ0osT0FBTyxFQUFFRSxPQUFPLENBQUNDLEtBQUssQ0FBQ0ssTUFBTSxDQUFDQyxNQUFNLENBQUNDLFNBQVMsQ0FBQztTQUMvRTtLQUNGLENBQUM7Q0FDSDtBQUVELElBQU1DLEtBQUssR0FBRyxXQUFNO0lBQ2xCLElBQU1DLFNBQVMsR0FBRyx1WkFBdVo7SUFDdmEsSUFBTUMsR0FBRyxHQUFHLHlEQUF5RDtJQUNyRSxJQUFNQyxRQUFRLEdBQUc7UUFDZjtZQUNFQyxJQUFJLEVBQUUsUUFBUTtZQUNkQyxFQUFFLEVBQUUsSUFBSTtTQUNUO1FBQ0Q7WUFDRUQsSUFBSSxFQUFFLFFBQVE7WUFDZEMsRUFBRSxFQUFFLElBQUk7U0FDVDtRQUNEO1lBQ0VELElBQUksRUFBRSxvQkFBb0I7WUFDMUJDLEVBQUUsRUFBRSxJQUFJO1NBQ1Q7UUFDRDtZQUNFRCxJQUFJLEVBQUUsU0FBUztZQUNmQyxFQUFFLEVBQUUsSUFBSTtTQUNUO1FBQ0Q7WUFDRUQsSUFBSSxFQUFFLGFBQWE7WUFDbkJDLEVBQUUsRUFBRSxJQUFJO1NBQ1Q7S0FDRjtJQUVELElBQU1DLFFBQVEsR0FBR0gsUUFBUSxDQUFDYixHQUFHLENBQUMsU0FBQ2lCLE1BQU0sRUFBSztRQUN4QyxPQUFPdEIsS0FBSyxDQUFDdUIsR0FBRyxDQUFDTixHQUFHLENBQUNPLE9BQU8sQ0FBQyxJQUFJLEVBQUVGLE1BQU0sQ0FBQ0YsRUFBRSxDQUFDLEVBQUU7WUFDN0NQLE1BQU0sRUFBRTtnQkFDTkMsU0FBUyxFQUFFUSxNQUFNLENBQUNGLEVBQUU7Z0JBQ3BCSyxPQUFPLEVBQUUsUUFBUTthQUNsQjtZQUNEQyxPQUFPLEVBQUU7Z0JBQ1BDLE1BQU0sRUFBRVgsU0FBUzthQUNsQjtTQUNGLENBQUMsQ0FBQztLQUNKLENBQUM7SUFFRlksT0FBTyxDQUFDQyxVQUFVLENBQUNSLFFBQVEsQ0FBQyxDQUFDUyxJQUFJLENBQUMsU0FBQzFCLE9BQU8sRUFBSztRQUM3Q00sT0FBTyxDQUFDQyxHQUFHLENBQUNQLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QkQsU0FBUyxDQUFDQyxPQUFPLENBQUMsQ0FBQztLQUNwQixDQUFDO0NBQ0w7QUFFRCxTQUFTMkIsUUFBUSxHQUFHO0lBQ2xCaEIsS0FBSyxFQUFFLENBQUM7SUFDUixxQkFBTyw4REFBQ2lCLEtBQUc7a0JBQUMscUJBQW1COzs7OztZQUFNO0NBQ3RDO0FBSFFELEtBQUFBLFFBQVE7QUFLakIsK0RBQWVBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBheGlvcyA9IHJlcXVpcmUoJ2F4aW9zJykuZGVmYXVsdDtcblxuY29uc3QgZmluZERhdGVzID0gKHJlc3VsdHMpID0+IHtcbiAgcmVzdWx0cy5tYXAocmVxdWVzdCA9PiB7XG4gICAgaWYgKHJlcXVlc3QudmFsdWUuZGF0YS5yZXN1bHRzLmxlbmd0aCAhPSAwKSB7XG4gICAgICBjb25zb2xlLmxvZyhyZXF1ZXN0LnZhbHVlLmRhdGEucmVzdWx0cywgcmVxdWVzdC52YWx1ZS5jb25maWcucGFyYW1zLnBsYW50YV9pZClcbiAgICB9XG4gIH0pXG59O1xuXG5jb25zdCBjaGVjayA9ICgpID0+IHtcbiAgY29uc3QgY29va2llVnR2ID0gXCJfdnR2X3Nlc3Npb249R0hEb21NNUNqJTJCWUMxa3FtNUlpT2xvOThkUnUwaUIzemdWWHgycyUyQjI1dFllN3g2SXk3elRwVndHbmQ3MzRxNXJCNTNWWndLSTRrb1VwYUZNQzBoQmdmaU5jUnloVmUlMkJsTHBJd1RFV2FOMSUyQnRnT0psUUg3Z2k5cm56U09iY2JOM2xCa21TeVROWVA5WUclMkZjalExbHB6ZjJzVmFQemk1Tjd2SUY0bURydUpEWVBKcldtMkJBTnBkWCUyRnZEam5BUmlTMmI1Q2dEbVYzb21NU2p4RjY5Q1NLUGF0V2ZYbWU0OUlmOHRxVEVmJTJCc2dMc1hpVFclMkJxYjZNY3hqbEUlMkZuTVZoR0hVTUNkbSUyRnRQRXpRWERITVNsVDRHYkwwaWEwNWdqZm5jYiUyQk1HdzFhZ0hpeHJMT3hrZ215c0JyTTltYyUzRC0tNTJWTlBLb1hyWU5EZU1IYS0tT0tkb1kwJTJGTmhQSUJiYyUyQkVHdjRDdFElM0QlM0RcIjsgXG4gICAgY29uc3QgdXJsID0gJ2h0dHBzOi8vdnR2cGJhLm1pbmZyYS5nYmEuZ29iLmFyL3R1cm5vc19wb3JfZmVjaGFzLmpzb24nO1xuICAgIGNvbnN0IGJyYW5jaGVzID0gW1xuICAgICAge1xuICAgICAgICBuYW1lOiAnQmVybmFsJyxcbiAgICAgICAgaWQ6ICczNidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdTb2xhbm8nLFxuICAgICAgICBpZDogJzU5J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ0VzdGV2YW4gRWNoZXZlcnJpYScsXG4gICAgICAgIGlkOiAnMzMnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnQmVyaXNzbycsXG4gICAgICAgIGlkOiAnNDInXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnQmVyYXphdGVndWknLFxuICAgICAgICBpZDogJzMyJ1xuICAgICAgfSxcbiAgICBdO1xuXG4gICAgY29uc3QgcmVxdWVzdHMgPSBicmFuY2hlcy5tYXAoKGJyYW5jaCkgPT4ge1xuICAgICAgcmV0dXJuIGF4aW9zLmdldCh1cmwucmVwbGFjZSgnSUQnLCBicmFuY2guaWQpLCB7XG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHBsYW50YV9pZDogYnJhbmNoLmlkLFxuICAgICAgICAgIGRvbWluaW86ICdua240NTAnXG4gICAgICAgIH0sXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBDb29raWU6IGNvb2tpZVZ0dlxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIFByb21pc2UuYWxsU2V0dGxlZChyZXF1ZXN0cykudGhlbigocmVzdWx0cykgPT4ge1xuICAgICAgY29uc29sZS5sb2cocmVzdWx0c1swXSlcbiAgICAgIGZpbmREYXRlcyhyZXN1bHRzKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcbiAgY2hlY2soKTtcbiAgcmV0dXJuIDxkaXY+V2VsY29tZSB0byBOZXh0LmpzITwvZGl2PlxufVxuICBcbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlIl0sIm5hbWVzIjpbImF4aW9zIiwicmVxdWlyZSIsImRlZmF1bHQiLCJmaW5kRGF0ZXMiLCJyZXN1bHRzIiwibWFwIiwicmVxdWVzdCIsInZhbHVlIiwiZGF0YSIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJjb25maWciLCJwYXJhbXMiLCJwbGFudGFfaWQiLCJjaGVjayIsImNvb2tpZVZ0diIsInVybCIsImJyYW5jaGVzIiwibmFtZSIsImlkIiwicmVxdWVzdHMiLCJicmFuY2giLCJnZXQiLCJyZXBsYWNlIiwiZG9taW5pbyIsImhlYWRlcnMiLCJDb29raWUiLCJQcm9taXNlIiwiYWxsU2V0dGxlZCIsInRoZW4iLCJIb21lUGFnZSIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});