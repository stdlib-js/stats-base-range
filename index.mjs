// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.1.1-esm/index.mjs";function e(r,e,t){var i,s,a,f,d;if(r<=0)return NaN;if(1===r||0===t)return n(e[0])?NaN:0;for(i=s=e[a=t<0?(1-r)*t:0],d=1;d<r;d++){if(f=e[a+=t],n(f))return f;f<s?s=f:f>i&&(i=f)}return i-s}r(e,"ndarray",(function(r,e,t,i){var s,a,f,d,o;if(r<=0)return NaN;if(1===r||0===t)return n(e[i])?NaN:0;for(s=a=e[f=i],o=1;o<r;o++){if(d=e[f+=t],n(d))return d;d<a?a=d:d>s&&(s=d)}return s-a}));const{ndarray:t}=e;export{e as default,t as ndarray};
//# sourceMappingURL=index.mjs.map
