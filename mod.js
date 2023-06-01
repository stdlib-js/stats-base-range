// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,t=Object.defineProperty,n=Object.prototype,o=n.toString,a=n.__defineGetter__,u=n.__defineSetter__,i=n.__lookupGetter__,l=n.__lookupSetter__;function c(e){return e!=e}function f(e,r,t){var n,o,a,u,i;if(e<=0)return NaN;if(1===e||0===t)return c(r[0])?NaN:0;for(n=o=r[a=t<0?(1-e)*t:0],i=1;i<e;i++){if(c(u=r[a+=t]))return u;u<o?o=u:u>n&&(n=u)}return n-o}r=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var c,f,_,p;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((f="value"in t)&&(i.call(e,r)||l.call(e,r)?(c=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=c):e[r]=t.value),_="get"in t,p="set"in t,f&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&a&&a.call(e,r,t.get),p&&u&&u.call(e,r,t.set),e},r(f,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(e,r,t,n){var o,a,u,i,l;if(e<=0)return NaN;if(1===e||0===t)return c(r[n])?NaN:0;for(o=a=r[u=n],l=1;l<e;l++){if(c(i=r[u+=t]))return i;i<a?a=i:i>o&&(o=i)}return o-a}});const{ndarray:_}=f;export{f as default,_ as ndarray};
//# sourceMappingURL=mod.js.map
