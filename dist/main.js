!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("react")):"function"==typeof define&&define.amd?define(["react"],n):"object"==typeof exports?exports["circular-mind-map-react"]=n(require("react")):e["circular-mind-map-react"]=n(e.react)}(window,(function(e){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=1)}([function(n,t){n.exports=e},function(e,n,t){"use strict";t.r(n),t.d(n,"MindMap",(function(){return d})),t.d(n,"Node",(function(){return a})),t.d(n,"Edge",(function(){return u}));var r=t(0),o=t.n(r);function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=function(){},a=function(e){var n=e.x,t=e.y,r=e.label,c=i(e,["x","y","label"]);return o.a.createElement("g",c,o.a.createElement("image",{href:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIxODAgMjc1IDEwMCA0MCIgZmlsbD0iIzAwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjE0MCIgaGVpZ2h0PSI0MCIgeD0iMTQwIiB5PSIyNzUiIGZpbGw9IiNmZmYiIC8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTY4IDI3Ni41SDE2Ny43OTNMMTY3LjY0NiAyNzYuNjQ2TDE2My42NDYgMjgwLjY0NkwxNjMuNSAyODAuNzkzVjI4MVYyOTZIMTY0LjVWMjgxLjIwN0wxNjguMjA3IDI3Ny41SDI2OVYyNzYuNUgxNjhaTTI3NiAzMDcuNUMyNzYuMTMzIDMwNy41IDI3Ni4yNiAzMDcuNDQ3IDI3Ni4zNTQgMzA3LjM1NEwyODAuMzU0IDMwMy4zNTRDMjgwLjQ0NyAzMDMuMjYgMjgwLjUgMzAzLjEzMyAyODAuNSAzMDNWMjg4SDI3OS41VjMwMi43OTNMMjc1Ljc5MyAzMDYuNUgxNzVWMzA3LjVIMjc2WiIgZmlsbD0iIzNDNzhDOCIvPgo8L3N2Zz4K",x:n-10,y:t-20}),o.a.createElement("text",{y:t,x:n},r))},l=function(e){return e<0?0:250*e},d=function(e){var n=e.nodes,t=e.edges,r=i(e,["nodes","edges"]),u=0,a=[],d=[],p=[],f=[];a.push(o.a.cloneElement(n[0],{x:0,y:0})),p.push({id:n[0].props.id,x:0,y:0,"φ":0}),function e(r){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;c=0;var i=t.filter((function(e){return e.props.from===r.props.id})).map((function(e){return n.find((function(n){return e.props.to===n.props.id}))}));if(i.length){console.debug('Rendering level for "'.concat(r.props.label,'". Level nodes: [').concat(i.map((function(e){return e.props.label})).join(","),"]"));var s=.785/++u,y=l(u);f[u]=new Array(Math.floor(6.28/s)),console.log("slots: ",f);var M=i.map((function(e,r){var i=n.find((function(n){var r;return n.props.id===(null===(r=t.find((function(n){return n.props.to===e.props.id})))||void 0===r?void 0:r.props.from)})),l=p.find((function(e){return e.id==i.props.id})),f=(r+c)*s+((null==l?void 0:l.φ)||0);null==l||l.φ,console.debug('Rendering node: "'.concat(e.props.label,'"')),console.debug('- parent: "'.concat(i.props.label,'"')),console.debug('- parentPosition: "{'.concat(null==l?void 0:l.x,", ").concat(null==l?void 0:l.y,'}"'));var M=0+y*Math.sin(f),g=0+y*Math.cos(f);p.push({id:e.props.id,x:g,y:M,"φ":f}),a.push(o.a.createElement("circle",{r:y,cx:0,cy:0,fill:"none",stroke:"#ddd",strokeWidth:"1",strokeDasharray:"4"}));var b=o.a.createElement("path",{d:"\n            M ".concat((null==l?void 0:l.x)||0," ").concat((null==l?void 0:l.y)||0,"\n            L ").concat(g," ").concat(M,"\n          "),stroke:"rgb(".concat(50*u%255,", ").concat(100*u*3.14%255,", ").concat(150*u%255,")"),strokeWidth:"2",fill:"none"});return console.debug('- nodePositiong: "{'.concat(null==l?void 0:l.x,", ").concat(null==l?void 0:l.y,'}"')),d.push(b),0==r&&{x:g,y:M},o.a.cloneElement(e,{x:g,y:M})}));a.push(M),i.forEach((function(n){e(n,c+i.length)}))}else console.debug('Node "'.concat(r.props.label,'" has no children'))}(n[0]);var s=2*l(u+1)+0;return o.a.createElement("svg",c({viewBox:"".concat(-s/2," ").concat(-s/2," ").concat(s," ").concat(s),width:s,height:s},r),d,a)}}])}));