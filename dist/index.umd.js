!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e||self).dtto={})}(this,function(e){function n(e){return e.replace(/\W+/g," ").split(/ |\B(?=[A-Z])/).map(function(e){return e.toLowerCase()}).join("_")}function t(e,t){function r(e,n,t){return null==e?t:n()}return{nullOr:function(e,n){return r(e,n,null)},withDefault:r,fromSnakeCaseKeys:function(r){var o={};return r?r.forEach(function(e){o[e]=t[n(e)]}):Object.getOwnPropertyNames(e).forEach(function(e){o[e]=t[n(e)]}),o}}}function r(){return r=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},r.apply(this,arguments)}function o(e,n){var t=Object.create(Object.getPrototypeOf(e),Object.getOwnPropertyDescriptors(e)),o=r({},t,n);return Object.keys(o).forEach(function(e){Object.defineProperty(t,e,{value:o[e]})}),t}var f=new Map;e.copyWith=o,e.createTransformAPI=t,e.defineTransform=function(e,n){f.set(e,n)},e.fromJson=function(e,n){var r=new e,o=Object.getOwnPropertyNames(r),u=f.get(e),c=u?u(n,t(r,n)):{};return o.forEach(function(e){Object.defineProperty(r,e,{value:e in c?c[e]:null==n?null:n[e],writable:!0})}),r},e.make=function(e,n){return o(new e,n)},e.mutable=function(e,n){var t=new e;return Object.getOwnPropertyNames(t).forEach(function(e){Object.defineProperty(t,e,{value:n&&e in n?n[e]:null})}),t}});
//# sourceMappingURL=index.umd.js.map
