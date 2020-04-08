!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("react")):"function"==typeof define&&define.amd?define(["react"],n):"object"==typeof exports?exports["circular-mind-map-react"]=n(require("react")):e["circular-mind-map-react"]=n(e.react)}(window,(function(e){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=1)}([function(n,t){n.exports=e},function(e,n,t){"use strict";t.r(n),t.d(n,"MindMap",(function(){return d})),t.d(n,"Node",(function(){return a})),t.d(n,"Edge",(function(){return u}));var r=t(0),o=t.n(r);function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=function(){},a=function(e){var n=e.x,t=e.y,r=e.label,i=c(e,["x","y","label"]);return o.a.createElement("g",i,o.a.createElement("image",{href:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIxODAgMjc1IDEwMCA0MCIgZmlsbD0iIzAwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjE0MCIgaGVpZ2h0PSI0MCIgeD0iMTQwIiB5PSIyNzUiIGZpbGw9IiNmZmYiIC8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTY4IDI3Ni41SDE2Ny43OTNMMTY3LjY0NiAyNzYuNjQ2TDE2My42NDYgMjgwLjY0NkwxNjMuNSAyODAuNzkzVjI4MVYyOTZIMTY0LjVWMjgxLjIwN0wxNjguMjA3IDI3Ny41SDI2OVYyNzYuNUgxNjhaTTI3NiAzMDcuNUMyNzYuMTMzIDMwNy41IDI3Ni4yNiAzMDcuNDQ3IDI3Ni4zNTQgMzA3LjM1NEwyODAuMzU0IDMwMy4zNTRDMjgwLjQ0NyAzMDMuMjYgMjgwLjUgMzAzLjEzMyAyODAuNSAzMDNWMjg4SDI3OS41VjMwMi43OTNMMjc1Ljc5MyAzMDYuNUgxNzVWMzA3LjVIMjc2WiIgZmlsbD0iIzNDNzhDOCIvPgo8L3N2Zz4K",x:n-10,y:t-20}),o.a.createElement("text",{y:t,x:n},r))},l=function(e){return 150*e},d=function(e){var n=e.nodes,t=e.edges,r=c(e,["nodes","edges"]),u=0,a=[],d=[],f=[];a.push(o.a.cloneElement(n[0],{x:500,y:500})),function e(r){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;i=0;var c=t.filter((function(e){return e.props.from===r.props.id})).map((function(e){return n.find((function(n){return e.props.to===n.props.id}))}));c.length&&u++;var p,y=r,M=f.find((function(e){return e.id==y.props.id})),s=c.map((function(e,n){var t,r,c,y,s=l(u),g=3.14*(n+i)/4+((null==M?void 0:M.φ)||0);(null==M?void 0:M.φ)&&(g+=3.14/Math.pow(u+1,2));var j=500+s*Math.sin(g),I=500+s*Math.cos(g);f.push({id:e.props.id,x:I,y:j,"φ":g}),a.push(o.a.createElement("circle",{r:s,cx:500,cy:500,fill:"none",stroke:"#ddd",strokeWidth:"1",strokeDasharray:"4"}));var v=o.a.createElement("path",{d:"\n          M ".concat((null==M?void 0:M.x)||500," ").concat((null==M?void 0:M.y)||500,"\n          L ").concat((null===(t=p)||void 0===t?void 0:t.x)||I," ").concat((null===(r=p)||void 0===r?void 0:r.y)||j,"\n          Q ").concat((null===(c=p)||void 0===c?void 0:c.x)+10||I," ").concat((null===(y=p)||void 0===y?void 0:y.y)+30||j," ").concat(I," ").concat(j),stroke:"rgb(".concat(50*u%255,", ").concat(100*u*3.14%255,", ").concat(150*u%255,")"),strokeWidth:"2",fill:"none"});return d.push(v),0==n&&(p={x:I,y:j}),o.a.cloneElement(e,{x:I,y:j})}));a.push(s),c.forEach((function(n){e(n,i+c.length)}))}(n[0]);var p=2*l(u+1);return o.a.createElement("svg",i({viewBox:"0 0 ".concat(p," ").concat(p),width:p,height:p},r),d,a)}}])}));