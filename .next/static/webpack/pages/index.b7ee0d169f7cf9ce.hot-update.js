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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar axios = (__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\")[\"default\"]);\nvar findDates = function(results) {\n    results.map(function(request) {\n        if (request.data.results.length != 0) {\n            console.log(request.data.results);\n        }\n    });\n};\nvar check = function() {\n    var cookieVtv = \"_vtv_session=GHDomM5Cj%2BYC1kqm5IiOlo98dRu0iB3zgVXx2s%2B25tYe7x6Iy7zTpVwGnd734q5rB53VZwKI4koUpaFMC0hBgfiNcRyhVe%2BlLpIwTEWaN1%2BtgOJlQH7gi9rnzSObcbN3lBkmSyTNYP9YG%2FcjQ1lpzf2sVaPzi5N7vIF4mDruJDYPJrWm2BANpdX%2FvDjnARiS2b5CgDmV3omMSjxF69CSKPatWfXme49If8tqTEf%2BsgLsXiTW%2Bqb6McxjlE%2FnMVhGHUMCdm%2FtPEzQXDHMSlT4GbL0ia05gjfncb%2BMGw1agHixrLOxkgmysBrM9mc%3D--52VNPKoXrYNDeMHa--OKdoY0%2FNhPIBbc%2BEGv4CtQ%3D%3D\";\n    var url = \"https://vtvpba.minfra.gba.gob.ar/turnos_por_fechas.json?planta_id=ID&dominio=nkn450\";\n    var branches = [\n        {\n            name: \"Bernal\",\n            id: \"36\"\n        },\n        {\n            name: \"Solano\",\n            id: \"59\"\n        },\n        {\n            name: \"Estevan Echeverria\",\n            id: \"33\"\n        },\n        {\n            name: \"Berisso\",\n            id: \"42\"\n        },\n        {\n            name: \"Berazategui\",\n            id: \"32\"\n        }, \n    ];\n    var requests = branches.map(function(branch) {\n        return axios.get(url.replace(\"ID\", branch.id), {\n            headers: {\n                Cookie: cookieVtv\n            }\n        });\n    });\n    Promise.allSettled(requests).then(function(results) {\n        findDates(results);\n    });\n};\nfunction HomePage() {\n    check();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Welcome to Next.js!\"\n    }, void 0, false, {\n        fileName: \"/Users/pgalvan/Workspace/turnos-vtv/pages/index.js\",\n        lineNumber: 52,\n        columnNumber: 10\n    }, this);\n}\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUFBLElBQU1BLEtBQUssR0FBR0MsOEVBQXdCO0FBRXRDLElBQU1FLFNBQVMsR0FBRyxTQUFDQyxPQUFPLEVBQUs7SUFDN0JBLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxTQUFBQSxPQUFPLEVBQUk7UUFDckIsSUFBSUEsT0FBTyxDQUFDQyxJQUFJLENBQUNILE9BQU8sQ0FBQ0ksTUFBTSxJQUFJLENBQUMsRUFBRTtZQUNwQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNKLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDSCxPQUFPLENBQUM7U0FDbEM7S0FDRixDQUFDO0NBQ0g7QUFFRCxJQUFNTyxLQUFLLEdBQUcsV0FBTTtJQUNsQixJQUFNQyxTQUFTLEdBQUcsdVpBQXVaO0lBQ3ZhLElBQU1DLEdBQUcsR0FBRyxxRkFBcUY7SUFDakcsSUFBTUMsUUFBUSxHQUFHO1FBQ2Y7WUFDRUMsSUFBSSxFQUFFLFFBQVE7WUFDZEMsRUFBRSxFQUFFLElBQUk7U0FDVDtRQUNEO1lBQ0VELElBQUksRUFBRSxRQUFRO1lBQ2RDLEVBQUUsRUFBRSxJQUFJO1NBQ1Q7UUFDRDtZQUNFRCxJQUFJLEVBQUUsb0JBQW9CO1lBQzFCQyxFQUFFLEVBQUUsSUFBSTtTQUNUO1FBQ0Q7WUFDRUQsSUFBSSxFQUFFLFNBQVM7WUFDZkMsRUFBRSxFQUFFLElBQUk7U0FDVDtRQUNEO1lBQ0VELElBQUksRUFBRSxhQUFhO1lBQ25CQyxFQUFFLEVBQUUsSUFBSTtTQUNUO0tBQ0Y7SUFFRCxJQUFNQyxRQUFRLEdBQUdILFFBQVEsQ0FBQ1QsR0FBRyxDQUFDLFNBQUNhLE1BQU0sRUFBSztRQUN4QyxPQUFPbEIsS0FBSyxDQUFDbUIsR0FBRyxDQUFDTixHQUFHLENBQUNPLE9BQU8sQ0FBQyxJQUFJLEVBQUVGLE1BQU0sQ0FBQ0YsRUFBRSxDQUFDLEVBQUU7WUFDN0NLLE9BQU8sRUFBRTtnQkFDUEMsTUFBTSxFQUFFVixTQUFTO2FBQ2xCO1NBQ0YsQ0FBQyxDQUFDO0tBQ0osQ0FBQztJQUVGVyxPQUFPLENBQUNDLFVBQVUsQ0FBQ1AsUUFBUSxDQUFDLENBQUNRLElBQUksQ0FBQyxTQUFDckIsT0FBTyxFQUFLO1FBQzdDRCxTQUFTLENBQUNDLE9BQU8sQ0FBQyxDQUFDO0tBQ3BCLENBQUM7Q0FDTDtBQUVELFNBQVNzQixRQUFRLEdBQUc7SUFDbEJmLEtBQUssRUFBRSxDQUFDO0lBQ1IscUJBQU8sOERBQUNnQixLQUFHO2tCQUFDLHFCQUFtQjs7Ozs7WUFBTTtDQUN0QztBQUhRRCxLQUFBQSxRQUFRO0FBS2pCLCtEQUFlQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXhpb3MgPSByZXF1aXJlKCdheGlvcycpLmRlZmF1bHQ7XG5cbmNvbnN0IGZpbmREYXRlcyA9IChyZXN1bHRzKSA9PiB7XG4gIHJlc3VsdHMubWFwKHJlcXVlc3QgPT4ge1xuICAgIGlmIChyZXF1ZXN0LmRhdGEucmVzdWx0cy5sZW5ndGggIT0gMCkge1xuICAgICAgY29uc29sZS5sb2cocmVxdWVzdC5kYXRhLnJlc3VsdHMpXG4gICAgfVxuICB9KVxufTtcblxuY29uc3QgY2hlY2sgPSAoKSA9PiB7XG4gIGNvbnN0IGNvb2tpZVZ0diA9IFwiX3Z0dl9zZXNzaW9uPUdIRG9tTTVDaiUyQllDMWtxbTVJaU9sbzk4ZFJ1MGlCM3pnVlh4MnMlMkIyNXRZZTd4Nkl5N3pUcFZ3R25kNzM0cTVyQjUzVlp3S0k0a29VcGFGTUMwaEJnZmlOY1J5aFZlJTJCbExwSXdURVdhTjElMkJ0Z09KbFFIN2dpOXJuelNPYmNiTjNsQmttU3lUTllQOVlHJTJGY2pRMWxwemYyc1ZhUHppNU43dklGNG1EcnVKRFlQSnJXbTJCQU5wZFglMkZ2RGpuQVJpUzJiNUNnRG1WM29tTVNqeEY2OUNTS1BhdFdmWG1lNDlJZjh0cVRFZiUyQnNnTHNYaVRXJTJCcWI2TWN4amxFJTJGbk1WaEdIVU1DZG0lMkZ0UEV6UVhESE1TbFQ0R2JMMGlhMDVnamZuY2IlMkJNR3cxYWdIaXhyTE94a2dteXNCck05bWMlM0QtLTUyVk5QS29YcllORGVNSGEtLU9LZG9ZMCUyRk5oUElCYmMlMkJFR3Y0Q3RRJTNEJTNEXCI7IFxuICAgIGNvbnN0IHVybCA9ICdodHRwczovL3Z0dnBiYS5taW5mcmEuZ2JhLmdvYi5hci90dXJub3NfcG9yX2ZlY2hhcy5qc29uP3BsYW50YV9pZD1JRCZkb21pbmlvPW5rbjQ1MCc7XG4gICAgY29uc3QgYnJhbmNoZXMgPSBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdCZXJuYWwnLFxuICAgICAgICBpZDogJzM2J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1NvbGFubycsXG4gICAgICAgIGlkOiAnNTknXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnRXN0ZXZhbiBFY2hldmVycmlhJyxcbiAgICAgICAgaWQ6ICczMydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdCZXJpc3NvJyxcbiAgICAgICAgaWQ6ICc0MidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdCZXJhemF0ZWd1aScsXG4gICAgICAgIGlkOiAnMzInXG4gICAgICB9LFxuICAgIF07XG5cbiAgICBjb25zdCByZXF1ZXN0cyA9IGJyYW5jaGVzLm1hcCgoYnJhbmNoKSA9PiB7XG4gICAgICByZXR1cm4gYXhpb3MuZ2V0KHVybC5yZXBsYWNlKCdJRCcsIGJyYW5jaC5pZCksIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIENvb2tpZTogY29va2llVnR2XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgUHJvbWlzZS5hbGxTZXR0bGVkKHJlcXVlc3RzKS50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICBmaW5kRGF0ZXMocmVzdWx0cyk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIGNoZWNrKCk7XG4gIHJldHVybiA8ZGl2PldlbGNvbWUgdG8gTmV4dC5qcyE8L2Rpdj5cbn1cbiAgXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZSJdLCJuYW1lcyI6WyJheGlvcyIsInJlcXVpcmUiLCJkZWZhdWx0IiwiZmluZERhdGVzIiwicmVzdWx0cyIsIm1hcCIsInJlcXVlc3QiLCJkYXRhIiwibGVuZ3RoIiwiY29uc29sZSIsImxvZyIsImNoZWNrIiwiY29va2llVnR2IiwidXJsIiwiYnJhbmNoZXMiLCJuYW1lIiwiaWQiLCJyZXF1ZXN0cyIsImJyYW5jaCIsImdldCIsInJlcGxhY2UiLCJoZWFkZXJzIiwiQ29va2llIiwiUHJvbWlzZSIsImFsbFNldHRsZWQiLCJ0aGVuIiwiSG9tZVBhZ2UiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});