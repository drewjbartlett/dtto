function e(e){return e.replace(/\W+/g," ").split(/ |\B(?=[A-Z])/).map(e=>e.toLowerCase()).join("_")}function t(t,n){function r(e,t,n){return null==e?n:t()}return{nullOr:function(e,t){return r(e,t,null)},withDefault:r,fromSnakeCaseKeys:function(r){const o={};return r?r.forEach(t=>{o[t]=n[e(t)]}):Object.getOwnPropertyNames(t).forEach(t=>{o[t]=n[e(t)]}),o}}}function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}function r(e,t){const r=Object.create(Object.getPrototypeOf(e),Object.getOwnPropertyDescriptors(e)),o=n({},r,t);return Object.keys(o).forEach(e=>{Object.defineProperty(r,e,{value:o[e]})}),r}const o=new Map;function c(e,t){o.set(e,t)}function u(e,n){const r=new e,c=Object.getOwnPropertyNames(r),u=o.get(e),a=u?u(n,t(r,n)):{};return c.forEach(e=>{let t;t=e in a?a[e]:null==n?null:n[e],Object.defineProperty(r,e,{value:t,writable:!0})}),r}function a(e,t){const n=new e;return Object.getOwnPropertyNames(n).forEach(e=>{Object.defineProperty(n,e,{value:t&&e in t?t[e]:null})}),n}function i(e,t){return r(new e,t)}export{r as copyWith,t as createTransformAPI,c as defineTransform,u as fromJson,i as make,a as mutable};
//# sourceMappingURL=index.modern.js.map