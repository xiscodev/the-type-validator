!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/home/xoxefdp/WORKSPACE/PROJECTS/LOCATION/the-type-validator/dist",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);const n=e=>null===e,o=e=>"function"==typeof e,i=e=>"number"==typeof e&&!isNaN(e)&&e===Number(e)&&(e=>Number.isSafeInteger(e)&&e<Number.MAX_VALUE&&e>Number.MIN_VALUE)(e),u=e=>Array.isArray(e),s=e=>u(e)&&0===e.length,f=e=>"object"==typeof e&&!n(e)&&!o(e)&&!u(e),p=e=>{let t=null;if(f(e)){for(const r in e)e.hasOwnProperty(r)&&(t=!1);t=!0}return t};exports.isNull=n,exports.isUndefined=e=>void 0===e,exports.isFunction=o,exports.isString=e=>"string"==typeof e,exports.isNumber=i,exports.isInteger=e=>i(e)&&Number.isInteger(e),exports.isFloat=e=>i(e)&&e%1!=0,exports.isArray=u,exports.isEmptyArray=s,exports.isObject=f,exports.isEmptyObject=p,exports.isPromise=e=>!(!e||"function"!=typeof e.then||"function"!=typeof e.catch||"function"!=typeof e.finally),exports.isEmpty=e=>s(e)||p(e)}]);