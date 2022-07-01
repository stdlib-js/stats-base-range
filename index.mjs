// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";function n(r,n,t){var i,s,a,f,u;if(r<=0)return NaN;if(1===r||0===t)return e(n[0])?NaN:0;for(i=s=n[a=t<0?(1-r)*t:0],u=1;u<r;u++){if(f=n[a+=t],e(f))return f;f<s?s=f:f>i&&(i=f)}return i-s}r(n,"ndarray",(function(r,n,t,i){var s,a,f,u,d;if(r<=0)return NaN;if(1===r||0===t)return e(n[i])?NaN:0;for(s=a=n[f=i],d=1;d<r;d++){if(u=n[f+=t],e(u))return u;u<a?a=u:u>s&&(s=u)}return s-a}));export{n as default};
//# sourceMappingURL=index.mjs.map
