"use strict";var f=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var x=f(function(B,m){
var l=require('@stdlib/math-base-assert-is-nan/dist');function j(a,r,u,c){var t,n,v,s,e,i,o;if(t=r.data,n=r.accessors[0],a===1||u===0)return l(n(t,c))?NaN:0;for(e=c,s=n(t,e),v=s,o=1;o<a;o++){if(e+=u,i=n(t,e),l(i))return i;i<s?s=i:i>v&&(v=i)}return v-s}m.exports=j
});var q=f(function(C,g){
var y=require('@stdlib/math-base-assert-is-nan/dist'),k=require('@stdlib/array-base-arraylike2object/dist'),N=x();function O(a,r,u,c){var t,n,v,s,e,i;if(a<=0)return NaN;if(s=k(r),s.accessorProtocol)return N(a,s,u,c);if(a===1||u===0)return y(r[c])?NaN:0;for(v=c,n=r[v],t=n,i=1;i<a;i++){if(v+=u,e=r[v],y(e))return e;e<n?n=e:e>t&&(t=e)}return t-n}g.exports=O
});var b=f(function(D,p){
var P=require('@stdlib/strided-base-stride2offset/dist'),R=q();function h(a,r,u){return R(a,r,u,P(a,u))}p.exports=h
});var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=b(),z=q();w(d,"ndarray",z);module.exports=d;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
