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

/***/ "./components/Translation/Translation.tsx":
/*!************************************************!*\
  !*** ./components/Translation/Translation.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LanguageSwitcher: function() { return /* binding */ LanguageSwitcher; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var utils_apiClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/apiClient */ \"./utils/apiClient.ts\");\n\nvar _s = $RefreshSig$();\n\n\nconst languageOptions = [\n    {\n        code: \"ja\",\n        label: \"日本語\"\n    },\n    {\n        code: \"en-us\",\n        label: \"English\"\n    },\n    {\n        code: \"zh\",\n        label: \"中文（简体字）\"\n    },\n    {\n        code: \"zh-TW\",\n        label: \"中文（繁體字）\"\n    },\n    {\n        code: \"ko\",\n        label: \"한국어\"\n    }\n];\nconst LanguageSwitcher = ()=>{\n    _s();\n    const [selectedLanguage, setSelectedLanguage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"ja\");\n    const handleLanguageChange = (event)=>{\n        const newLanguage = event.target.value;\n        setSelectedLanguage(newLanguage);\n        translatePage(newLanguage);\n    };\n    const getTextNodes = ()=>{\n        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);\n        const textNodes = [];\n        let node;\n        while(node = walker.nextNode()){\n            var _node_nodeValue;\n            if ((_node_nodeValue = node.nodeValue) === null || _node_nodeValue === void 0 ? void 0 : _node_nodeValue.trim()) {\n                textNodes.push(node);\n            }\n        }\n        return textNodes;\n    };\n    const translatePage = async (targetLanguage)=>{\n        const textNodes = getTextNodes();\n        for (const node of textNodes){\n            try {\n                const response = await utils_apiClient__WEBPACK_IMPORTED_MODULE_2__.apiClient.deepl.get({\n                    query: {\n                        text: node.nodeValue || \"\",\n                        targetLanguage\n                    }\n                });\n                //eslint-disable-next-line\n                if (response.body) {\n                    node.nodeValue = response.body; // 翻訳されたテキストで置き換え\n                } else {\n                    console.warn(\"No translation received for:\", node.nodeValue);\n                }\n            } catch (error) {\n                console.error(\"Translation error:\", error);\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"languageSwitcher\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n            value: selectedLanguage,\n            onChange: handleLanguageChange,\n            className: \"switchButton\",\n            children: languageOptions.map((lang)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                    value: lang.code,\n                    children: lang.label\n                }, lang.code, false, {\n                    fileName: \"/Users/a/domitory/client/components/Translation/Translation.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 11\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"/Users/a/domitory/client/components/Translation/Translation.tsx\",\n            lineNumber: 71,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/a/domitory/client/components/Translation/Translation.tsx\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LanguageSwitcher, \"+2/Ok14ekvf6Zsh83+FaYnKoz8I=\");\n_c = LanguageSwitcher;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LanguageSwitcher);\nvar _c;\n$RefreshReg$(_c, \"LanguageSwitcher\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RyYW5zbGF0aW9uL1RyYW5zbGF0aW9uLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFpQztBQUNXO0FBUTVDLE1BQU1FLGtCQUFvQztJQUN4QztRQUFFQyxNQUFNO1FBQU1DLE9BQU87SUFBTTtJQUMzQjtRQUFFRCxNQUFNO1FBQVNDLE9BQU87SUFBVTtJQUNsQztRQUFFRCxNQUFNO1FBQU1DLE9BQU87SUFBVTtJQUMvQjtRQUFFRCxNQUFNO1FBQVNDLE9BQU87SUFBVTtJQUNsQztRQUFFRCxNQUFNO1FBQU1DLE9BQU87SUFBTTtDQUM1QjtBQUVNLE1BQU1DLG1CQUFtQjs7SUFDOUIsTUFBTSxDQUFDQyxrQkFBa0JDLG9CQUFvQixHQUMzQ1AsK0NBQVFBLENBQTJCO0lBRXJDLE1BQU1RLHVCQUF1QixDQUMzQkM7UUFFQSxNQUFNQyxjQUFjRCxNQUFNRSxNQUFNLENBQUNDLEtBQUs7UUFDdENMLG9CQUFvQkc7UUFDcEJHLGNBQWNIO0lBQ2hCO0lBRUEsTUFBTUksZUFBZTtRQUNuQixNQUFNQyxTQUFTQyxTQUFTQyxnQkFBZ0IsQ0FDdENELFNBQVNFLElBQUksRUFDYkMsV0FBV0MsU0FBUyxFQUNwQjtRQUVGLE1BQU1DLFlBQW9CLEVBQUU7UUFDNUIsSUFBSUM7UUFDSixNQUFRQSxPQUFPUCxPQUFPUSxRQUFRLEdBQUs7Z0JBQzdCRDtZQUFKLEtBQUlBLGtCQUFBQSxLQUFLRSxTQUFTLGNBQWRGLHNDQUFBQSxnQkFBZ0JHLElBQUksSUFBSTtnQkFDMUJKLFVBQVVLLElBQUksQ0FBQ0o7WUFDakI7UUFDRjtRQUNBLE9BQU9EO0lBQ1Q7SUFFQSxNQUFNUixnQkFBZ0IsT0FBT2M7UUFDM0IsTUFBTU4sWUFBWVA7UUFFbEIsS0FBSyxNQUFNUSxRQUFRRCxVQUFXO1lBQzVCLElBQUk7Z0JBQ0YsTUFBTU8sV0FBVyxNQUFNM0Isc0RBQVNBLENBQUM0QixLQUFLLENBQUNDLEdBQUcsQ0FBQztvQkFDekNDLE9BQU87d0JBQ0xDLE1BQU1WLEtBQUtFLFNBQVMsSUFBSTt3QkFDeEJHO29CQUNGO2dCQUNGO2dCQUNBLDBCQUEwQjtnQkFDMUIsSUFBSUMsU0FBU1YsSUFBSSxFQUFFO29CQUNqQkksS0FBS0UsU0FBUyxHQUFHSSxTQUFTVixJQUFJLEVBQUUsaUJBQWlCO2dCQUNuRCxPQUFPO29CQUNMZSxRQUFRQyxJQUFJLENBQUMsZ0NBQWdDWixLQUFLRSxTQUFTO2dCQUM3RDtZQUNGLEVBQUUsT0FBT1csT0FBTztnQkFDZEYsUUFBUUUsS0FBSyxDQUFDLHNCQUFzQkE7WUFDdEM7UUFDRjtJQUNGO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNDO1lBQ0MxQixPQUFPTjtZQUNQaUMsVUFBVS9CO1lBQ1Y2QixXQUFVO3NCQUVUbkMsZ0JBQWdCc0MsR0FBRyxDQUFDLENBQUNDLHFCQUNwQiw4REFBQ0M7b0JBQXVCOUIsT0FBTzZCLEtBQUt0QyxJQUFJOzhCQUNyQ3NDLEtBQUtyQyxLQUFLO21CQURBcUMsS0FBS3RDLElBQUk7Ozs7Ozs7Ozs7Ozs7OztBQU9oQyxFQUFFO0dBbEVXRTtLQUFBQTtBQW9FYiwrREFBZUEsZ0JBQWdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVHJhbnNsYXRpb24vVHJhbnNsYXRpb24udHN4PzkzOGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGFwaUNsaWVudCB9IGZyb20gXCJ1dGlscy9hcGlDbGllbnRcIjtcbmltcG9ydCB0eXBlICogYXMgZGVlcGwgZnJvbSBcImRlZXBsLW5vZGVcIjtcblxuaW50ZXJmYWNlIExhbmd1YWdlT3B0aW9uIHtcbiAgY29kZTogZGVlcGwuVGFyZ2V0TGFuZ3VhZ2VDb2RlO1xuICBsYWJlbDogc3RyaW5nO1xufVxuXG5jb25zdCBsYW5ndWFnZU9wdGlvbnM6IExhbmd1YWdlT3B0aW9uW10gPSBbXG4gIHsgY29kZTogXCJqYVwiLCBsYWJlbDogXCLml6XmnKzoqp5cIiB9LFxuICB7IGNvZGU6IFwiZW4tdXNcIiwgbGFiZWw6IFwiRW5nbGlzaFwiIH0sXG4gIHsgY29kZTogXCJ6aFwiLCBsYWJlbDogXCLkuK3mlofvvIjnroDkvZPlrZfvvIlcIiB9LFxuICB7IGNvZGU6IFwiemgtVFdcIiwgbGFiZWw6IFwi5Lit5paH77yI57mB6auU5a2X77yJXCIgfSxcbiAgeyBjb2RlOiBcImtvXCIsIGxhYmVsOiBcIu2VnOq1reyWtFwiIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgTGFuZ3VhZ2VTd2l0Y2hlciA9ICgpID0+IHtcbiAgY29uc3QgW3NlbGVjdGVkTGFuZ3VhZ2UsIHNldFNlbGVjdGVkTGFuZ3VhZ2VdID1cbiAgICB1c2VTdGF0ZTxkZWVwbC5UYXJnZXRMYW5ndWFnZUNvZGU+KFwiamFcIik7XG5cbiAgY29uc3QgaGFuZGxlTGFuZ3VhZ2VDaGFuZ2UgPSAoXG4gICAgZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50PixcbiAgKSA9PiB7XG4gICAgY29uc3QgbmV3TGFuZ3VhZ2UgPSBldmVudC50YXJnZXQudmFsdWUgYXMgZGVlcGwuVGFyZ2V0TGFuZ3VhZ2VDb2RlO1xuICAgIHNldFNlbGVjdGVkTGFuZ3VhZ2UobmV3TGFuZ3VhZ2UpO1xuICAgIHRyYW5zbGF0ZVBhZ2UobmV3TGFuZ3VhZ2UpO1xuICB9O1xuXG4gIGNvbnN0IGdldFRleHROb2RlcyA9ICgpOiBOb2RlW10gPT4ge1xuICAgIGNvbnN0IHdhbGtlciA9IGRvY3VtZW50LmNyZWF0ZVRyZWVXYWxrZXIoXG4gICAgICBkb2N1bWVudC5ib2R5LFxuICAgICAgTm9kZUZpbHRlci5TSE9XX1RFWFQsXG4gICAgICBudWxsLFxuICAgICk7XG4gICAgY29uc3QgdGV4dE5vZGVzOiBOb2RlW10gPSBbXTtcbiAgICBsZXQgbm9kZTtcbiAgICB3aGlsZSAoKG5vZGUgPSB3YWxrZXIubmV4dE5vZGUoKSkpIHtcbiAgICAgIGlmIChub2RlLm5vZGVWYWx1ZT8udHJpbSgpKSB7XG4gICAgICAgIHRleHROb2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGV4dE5vZGVzO1xuICB9O1xuXG4gIGNvbnN0IHRyYW5zbGF0ZVBhZ2UgPSBhc3luYyAodGFyZ2V0TGFuZ3VhZ2U6IGRlZXBsLlRhcmdldExhbmd1YWdlQ29kZSkgPT4ge1xuICAgIGNvbnN0IHRleHROb2RlcyA9IGdldFRleHROb2RlcygpO1xuXG4gICAgZm9yIChjb25zdCBub2RlIG9mIHRleHROb2Rlcykge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGlDbGllbnQuZGVlcGwuZ2V0KHtcbiAgICAgICAgICBxdWVyeToge1xuICAgICAgICAgICAgdGV4dDogbm9kZS5ub2RlVmFsdWUgfHwgXCJcIixcbiAgICAgICAgICAgIHRhcmdldExhbmd1YWdlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICAvL2VzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICBpZiAocmVzcG9uc2UuYm9keSkge1xuICAgICAgICAgIG5vZGUubm9kZVZhbHVlID0gcmVzcG9uc2UuYm9keTsgLy8g57+76Kiz44GV44KM44Gf44OG44Kt44K544OI44Gn572u44GN5o+b44GIXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFwiTm8gdHJhbnNsYXRpb24gcmVjZWl2ZWQgZm9yOlwiLCBub2RlLm5vZGVWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJUcmFuc2xhdGlvbiBlcnJvcjpcIiwgZXJyb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGFuZ3VhZ2VTd2l0Y2hlclwiPlxuICAgICAgPHNlbGVjdFxuICAgICAgICB2YWx1ZT17c2VsZWN0ZWRMYW5ndWFnZX1cbiAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUxhbmd1YWdlQ2hhbmdlfVxuICAgICAgICBjbGFzc05hbWU9XCJzd2l0Y2hCdXR0b25cIlxuICAgICAgPlxuICAgICAgICB7bGFuZ3VhZ2VPcHRpb25zLm1hcCgobGFuZykgPT4gKFxuICAgICAgICAgIDxvcHRpb24ga2V5PXtsYW5nLmNvZGV9IHZhbHVlPXtsYW5nLmNvZGV9PlxuICAgICAgICAgICAge2xhbmcubGFiZWx9XG4gICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICkpfVxuICAgICAgPC9zZWxlY3Q+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYW5ndWFnZVN3aXRjaGVyO1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiYXBpQ2xpZW50IiwibGFuZ3VhZ2VPcHRpb25zIiwiY29kZSIsImxhYmVsIiwiTGFuZ3VhZ2VTd2l0Y2hlciIsInNlbGVjdGVkTGFuZ3VhZ2UiLCJzZXRTZWxlY3RlZExhbmd1YWdlIiwiaGFuZGxlTGFuZ3VhZ2VDaGFuZ2UiLCJldmVudCIsIm5ld0xhbmd1YWdlIiwidGFyZ2V0IiwidmFsdWUiLCJ0cmFuc2xhdGVQYWdlIiwiZ2V0VGV4dE5vZGVzIiwid2Fsa2VyIiwiZG9jdW1lbnQiLCJjcmVhdGVUcmVlV2Fsa2VyIiwiYm9keSIsIk5vZGVGaWx0ZXIiLCJTSE9XX1RFWFQiLCJ0ZXh0Tm9kZXMiLCJub2RlIiwibmV4dE5vZGUiLCJub2RlVmFsdWUiLCJ0cmltIiwicHVzaCIsInRhcmdldExhbmd1YWdlIiwicmVzcG9uc2UiLCJkZWVwbCIsImdldCIsInF1ZXJ5IiwidGV4dCIsImNvbnNvbGUiLCJ3YXJuIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJzZWxlY3QiLCJvbkNoYW5nZSIsIm1hcCIsImxhbmciLCJvcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Translation/Translation.tsx\n"));

/***/ })

});