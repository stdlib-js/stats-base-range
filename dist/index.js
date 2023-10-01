"use strict";var s=function(n,r){return function(){return r||n((r={exports:{}}).exports,r),r.exports}};var q=s(function(k,c){
var o=require('@stdlib/math-base-assert-is-nan/dist');function N(n,r,t){var v,u,a,e,i;if(n<=0)return NaN;if(n===1||t===0)return o(r[0])?NaN:0;for(t<0?a=(1-n)*t:a=0,u=r[a],v=u,i=1;i<n;i++){if(a+=t,e=r[a],o(e))return e;e<u?u=e:e>v&&(v=e)}return v-u}c.exports=N
});var p=s(function(w,l){
var m=require('@stdlib/math-base-assert-is-nan/dist');function O(n,r,t,v){var u,a,e,i,f;if(n<=0)return NaN;if(n===1||t===0)return m(r[v])?NaN:0;for(e=v,a=r[e],u=a,f=1;f<n;f++){if(e+=t,i=r[e],m(i))return i;i<a?a=i:i>u&&(u=i)}return u-a}l.exports=O
});var y=s(function(z,g){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),x=q(),b=p();R(x,"ndarray",b);g.exports=x
});var h=y();module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
