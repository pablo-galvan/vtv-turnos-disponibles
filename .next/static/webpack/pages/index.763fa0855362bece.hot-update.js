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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar axios = (__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\")[\"default\"]);\nvar findDates = function(results) {\n    results.map(function(request) {\n        if (request.value && request.value.data.results.length != 0) {\n            var dates = request.value.data.results;\n            var idBranch = request.value.config.params.planta_id;\n            console.log(request.value.data.results, request.value.config.params.planta_id);\n        }\n    });\n};\nvar check = function() {\n    var cookieVtv = \"_vtv_session=GHDomM5Cj%2BYC1kqm5IiOlo98dRu0iB3zgVXx2s%2B25tYe7x6Iy7zTpVwGnd734q5rB53VZwKI4koUpaFMC0hBgfiNcRyhVe%2BlLpIwTEWaN1%2BtgOJlQH7gi9rnzSObcbN3lBkmSyTNYP9YG%2FcjQ1lpzf2sVaPzi5N7vIF4mDruJDYPJrWm2BANpdX%2FvDjnARiS2b5CgDmV3omMSjxF69CSKPatWfXme49If8tqTEf%2BsgLsXiTW%2Bqb6McxjlE%2FnMVhGHUMCdm%2FtPEzQXDHMSlT4GbL0ia05gjfncb%2BMGw1agHixrLOxkgmysBrM9mc%3D--52VNPKoXrYNDeMHa--OKdoY0%2FNhPIBbc%2BEGv4CtQ%3D%3D\";\n    var url = \"https://vtvpba.minfra.gba.gob.ar/turnos_por_fechas.json\";\n    var branches = [\n        {\n            name: \"Bernal\",\n            id: \"36\"\n        },\n        {\n            name: \"Solano\",\n            id: \"59\"\n        },\n        {\n            name: \"Estevan Echeverria\",\n            id: \"33\"\n        },\n        {\n            name: \"Berisso\",\n            id: \"42\"\n        },\n        {\n            name: \"Berazategui\",\n            id: \"32\"\n        }, \n    ];\n    var requests = branches.map(function(branch) {\n        return axios.get(url.replace(\"ID\", branch.id), {\n            params: {\n                planta_id: branch.id,\n                dominio: \"nkn450\"\n            },\n            headers: {\n                Cookie: cookieVtv\n            }\n        });\n    });\n    Promise.allSettled(requests).then(function(results) {\n        findDates(results);\n    });\n};\nfunction HomePage() {\n    check();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Welcome to Next.js!\"\n    }, void 0, false, {\n        fileName: \"/Users/pgalvan/Workspace/turnos-vtv/pages/index.js\",\n        lineNumber: 58,\n        columnNumber: 10\n    }, this);\n}\n_c = HomePage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUFBLElBQU1BLEtBQUssR0FBR0MsOEVBQXdCO0FBRXRDLElBQU1FLFNBQVMsR0FBRyxTQUFDQyxPQUFPLEVBQUs7SUFDN0JBLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxTQUFBQSxPQUFPLEVBQUk7UUFDckIsSUFBSUEsT0FBTyxDQUFDQyxLQUFLLElBQUlELE9BQU8sQ0FBQ0MsS0FBSyxDQUFDQyxJQUFJLENBQUNKLE9BQU8sQ0FBQ0ssTUFBTSxJQUFJLENBQUMsRUFBRTtZQUMzRCxJQUFNQyxLQUFLLEdBQUdKLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDQyxJQUFJLENBQUNKLE9BQU87WUFDeEMsSUFBTU8sUUFBUSxHQUFHTCxPQUFPLENBQUNDLEtBQUssQ0FBQ0ssTUFBTSxDQUFDQyxNQUFNLENBQUNDLFNBQVM7WUFDdERDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVixPQUFPLENBQUNDLEtBQUssQ0FBQ0MsSUFBSSxDQUFDSixPQUFPLEVBQUVFLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDSyxNQUFNLENBQUNDLE1BQU0sQ0FBQ0MsU0FBUyxDQUFDO1NBQy9FO0tBQ0YsQ0FBQztDQUNIO0FBRUQsSUFBTUcsS0FBSyxHQUFHLFdBQU07SUFDbEIsSUFBTUMsU0FBUyxHQUFHLHVaQUF1WjtJQUN2YSxJQUFNQyxHQUFHLEdBQUcseURBQXlEO0lBQ3JFLElBQU1DLFFBQVEsR0FBRztRQUNmO1lBQ0VDLElBQUksRUFBRSxRQUFRO1lBQ2RDLEVBQUUsRUFBRSxJQUFJO1NBQ1Q7UUFDRDtZQUNFRCxJQUFJLEVBQUUsUUFBUTtZQUNkQyxFQUFFLEVBQUUsSUFBSTtTQUNUO1FBQ0Q7WUFDRUQsSUFBSSxFQUFFLG9CQUFvQjtZQUMxQkMsRUFBRSxFQUFFLElBQUk7U0FDVDtRQUNEO1lBQ0VELElBQUksRUFBRSxTQUFTO1lBQ2ZDLEVBQUUsRUFBRSxJQUFJO1NBQ1Q7UUFDRDtZQUNFRCxJQUFJLEVBQUUsYUFBYTtZQUNuQkMsRUFBRSxFQUFFLElBQUk7U0FDVDtLQUNGO0lBRUQsSUFBTUMsUUFBUSxHQUFHSCxRQUFRLENBQUNmLEdBQUcsQ0FBQyxTQUFDbUIsTUFBTSxFQUFLO1FBQ3hDLE9BQU94QixLQUFLLENBQUN5QixHQUFHLENBQUNOLEdBQUcsQ0FBQ08sT0FBTyxDQUFDLElBQUksRUFBRUYsTUFBTSxDQUFDRixFQUFFLENBQUMsRUFBRTtZQUM3Q1QsTUFBTSxFQUFFO2dCQUNOQyxTQUFTLEVBQUVVLE1BQU0sQ0FBQ0YsRUFBRTtnQkFDcEJLLE9BQU8sRUFBRSxRQUFRO2FBQ2xCO1lBQ0RDLE9BQU8sRUFBRTtnQkFDUEMsTUFBTSxFQUFFWCxTQUFTO2FBQ2xCO1NBQ0YsQ0FBQyxDQUFDO0tBQ0osQ0FBQztJQUVGWSxPQUFPLENBQUNDLFVBQVUsQ0FBQ1IsUUFBUSxDQUFDLENBQUNTLElBQUksQ0FBQyxTQUFDNUIsT0FBTyxFQUFLO1FBQzdDRCxTQUFTLENBQUNDLE9BQU8sQ0FBQyxDQUFDO0tBQ3BCLENBQUM7Q0FDTDtBQUVELFNBQVM2QixRQUFRLEdBQUc7SUFDbEJoQixLQUFLLEVBQUUsQ0FBQztJQUNSLHFCQUFPLDhEQUFDaUIsS0FBRztrQkFBQyxxQkFBbUI7Ozs7O1lBQU07Q0FDdEM7QUFIUUQsS0FBQUEsUUFBUTtBQUtqQiwrREFBZUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGF4aW9zID0gcmVxdWlyZSgnYXhpb3MnKS5kZWZhdWx0O1xuXG5jb25zdCBmaW5kRGF0ZXMgPSAocmVzdWx0cykgPT4ge1xuICByZXN1bHRzLm1hcChyZXF1ZXN0ID0+IHtcbiAgICBpZiAocmVxdWVzdC52YWx1ZSAmJiByZXF1ZXN0LnZhbHVlLmRhdGEucmVzdWx0cy5sZW5ndGggIT0gMCkge1xuICAgICAgY29uc3QgZGF0ZXMgPSByZXF1ZXN0LnZhbHVlLmRhdGEucmVzdWx0cztcbiAgICAgIGNvbnN0IGlkQnJhbmNoID0gcmVxdWVzdC52YWx1ZS5jb25maWcucGFyYW1zLnBsYW50YV9pZDtcbiAgICAgIGNvbnNvbGUubG9nKHJlcXVlc3QudmFsdWUuZGF0YS5yZXN1bHRzLCByZXF1ZXN0LnZhbHVlLmNvbmZpZy5wYXJhbXMucGxhbnRhX2lkKVxuICAgIH1cbiAgfSlcbn07XG5cbmNvbnN0IGNoZWNrID0gKCkgPT4ge1xuICBjb25zdCBjb29raWVWdHYgPSBcIl92dHZfc2Vzc2lvbj1HSERvbU01Q2olMkJZQzFrcW01SWlPbG85OGRSdTBpQjN6Z1ZYeDJzJTJCMjV0WWU3eDZJeTd6VHBWd0duZDczNHE1ckI1M1Zad0tJNGtvVXBhRk1DMGhCZ2ZpTmNSeWhWZSUyQmxMcEl3VEVXYU4xJTJCdGdPSmxRSDdnaTlybnpTT2JjYk4zbEJrbVN5VE5ZUDlZRyUyRmNqUTFscHpmMnNWYVB6aTVON3ZJRjRtRHJ1SkRZUEpyV20yQkFOcGRYJTJGdkRqbkFSaVMyYjVDZ0RtVjNvbU1TanhGNjlDU0tQYXRXZlhtZTQ5SWY4dHFURWYlMkJzZ0xzWGlUVyUyQnFiNk1jeGpsRSUyRm5NVmhHSFVNQ2RtJTJGdFBFelFYREhNU2xUNEdiTDBpYTA1Z2pmbmNiJTJCTUd3MWFnSGl4ckxPeGtnbXlzQnJNOW1jJTNELS01MlZOUEtvWHJZTkRlTUhhLS1PS2RvWTAlMkZOaFBJQmJjJTJCRUd2NEN0USUzRCUzRFwiOyBcbiAgICBjb25zdCB1cmwgPSAnaHR0cHM6Ly92dHZwYmEubWluZnJhLmdiYS5nb2IuYXIvdHVybm9zX3Bvcl9mZWNoYXMuanNvbic7XG4gICAgY29uc3QgYnJhbmNoZXMgPSBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdCZXJuYWwnLFxuICAgICAgICBpZDogJzM2J1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgbmFtZTogJ1NvbGFubycsXG4gICAgICAgIGlkOiAnNTknXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBuYW1lOiAnRXN0ZXZhbiBFY2hldmVycmlhJyxcbiAgICAgICAgaWQ6ICczMydcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdCZXJpc3NvJyxcbiAgICAgICAgaWQ6ICc0MidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIG5hbWU6ICdCZXJhemF0ZWd1aScsXG4gICAgICAgIGlkOiAnMzInXG4gICAgICB9LFxuICAgIF07XG5cbiAgICBjb25zdCByZXF1ZXN0cyA9IGJyYW5jaGVzLm1hcCgoYnJhbmNoKSA9PiB7XG4gICAgICByZXR1cm4gYXhpb3MuZ2V0KHVybC5yZXBsYWNlKCdJRCcsIGJyYW5jaC5pZCksIHtcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgcGxhbnRhX2lkOiBicmFuY2guaWQsXG4gICAgICAgICAgZG9taW5pbzogJ25rbjQ1MCdcbiAgICAgICAgfSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIENvb2tpZTogY29va2llVnR2XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgUHJvbWlzZS5hbGxTZXR0bGVkKHJlcXVlc3RzKS50aGVuKChyZXN1bHRzKSA9PiB7XG4gICAgICBmaW5kRGF0ZXMocmVzdWx0cyk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIGNoZWNrKCk7XG4gIHJldHVybiA8ZGl2PldlbGNvbWUgdG8gTmV4dC5qcyE8L2Rpdj5cbn1cbiAgXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZSJdLCJuYW1lcyI6WyJheGlvcyIsInJlcXVpcmUiLCJkZWZhdWx0IiwiZmluZERhdGVzIiwicmVzdWx0cyIsIm1hcCIsInJlcXVlc3QiLCJ2YWx1ZSIsImRhdGEiLCJsZW5ndGgiLCJkYXRlcyIsImlkQnJhbmNoIiwiY29uZmlnIiwicGFyYW1zIiwicGxhbnRhX2lkIiwiY29uc29sZSIsImxvZyIsImNoZWNrIiwiY29va2llVnR2IiwidXJsIiwiYnJhbmNoZXMiLCJuYW1lIiwiaWQiLCJyZXF1ZXN0cyIsImJyYW5jaCIsImdldCIsInJlcGxhY2UiLCJkb21pbmlvIiwiaGVhZGVycyIsIkNvb2tpZSIsIlByb21pc2UiLCJhbGxTZXR0bGVkIiwidGhlbiIsIkhvbWVQYWdlIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});