!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n(require("react")):"function"==typeof define&&define.amd?define(["react"],n):"object"==typeof exports?exports["circular-mind-map-react"]=n(require("react")):e["circular-mind-map-react"]=n(e.react)}(window,(function(e){return function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(o,r,function(n){return e[n]}.bind(null,r));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=1)}([function(n,t){n.exports=e},function(e,n,t){"use strict";t.r(n),t.d(n,"MindMap",(function(){return s})),t.d(n,"Node",(function(){return u})),t.d(n,"Edge",(function(){return l}));var o=t(0),r=t.n(o);function c(){return(c=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=function(){},u=function(e){var n=e.x,t=e.y,o=e.label,c=i(e,["x","y","label"]);return r.a.createElement("g",c,r.a.createElement("image",{href:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQwIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIxODAgMjc1IDEwMCA0MCIgZmlsbD0iIzAwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjE0MCIgaGVpZ2h0PSI0MCIgeD0iMTQwIiB5PSIyNzUiIGZpbGw9IiNmZmYiIC8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTY4IDI3Ni41SDE2Ny43OTNMMTY3LjY0NiAyNzYuNjQ2TDE2My42NDYgMjgwLjY0NkwxNjMuNSAyODAuNzkzVjI4MVYyOTZIMTY0LjVWMjgxLjIwN0wxNjguMjA3IDI3Ny41SDI2OVYyNzYuNUgxNjhaTTI3NiAzMDcuNUMyNzYuMTMzIDMwNy41IDI3Ni4yNiAzMDcuNDQ3IDI3Ni4zNTQgMzA3LjM1NEwyODAuMzU0IDMwMy4zNTRDMjgwLjQ0NyAzMDMuMjYgMjgwLjUgMzAzLjEzMyAyODAuNSAzMDNWMjg4SDI3OS41VjMwMi43OTNMMjc1Ljc5MyAzMDYuNUgxNzVWMzA3LjVIMjc2WiIgZmlsbD0iIzNDNzhDOCIvPgo8L3N2Zz4K",x:n-10,y:t-20}),r.a.createElement("text",{y:t,x:n},o))},a=function(e){return e<0?0:250*e},s=function(e){var n=e.nodes,t=e.edges,o=i(e,["nodes","edges"]),l=1,u=[],s=[],d=[],f=[],p=.785/l;f[l]=new Array(Math.floor(6.28/p)).fill(!1);var g=0,y=a(l);u.push(r.a.cloneElement(n[0],{x:0,y:0})),d.push({id:n[0].props.id,x:0,y:0,"φ":0}),function e(o){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;c=0;var i=t.filter((function(e){return e.props.from===o.props.id})).map((function(e){return n.find((function(n){return e.props.to===n.props.id}))}));if(i.length){console.debug('Rendering level for "'.concat(o.props.label,'". Level nodes: [').concat(i.map((function(e){return e.props.label})).join(","),"]"));var M=i.map((function(e,o){console.log("slots:","[".concat(f.map((function(e){return e.join(",")})).join("\n  "),"\n]")),0===f[l].filter((function(e){return!e})).length?(console.log("increasing circleNum, because there are no free slots left"),l++,f[l]=new Array(Math.floor(6.28/p)).fill(!1),g=0,y=a(l),p=.785/l,console.log("1- slots: ",f)):(f[l][g]=!0,g++),console.log("circleNum: ",l);var i=n.find((function(n){var o;return n.props.id===(null===(o=t.find((function(n){return n.props.to===e.props.id})))||void 0===o?void 0:o.props.from)})),M=d.find((function(e){return e.id==i.props.id})),b=(o+c)*p+((null==M?void 0:M.φ)||0);null==M||M.φ,console.debug('Rendering node: "'.concat(e.props.label,'"')),console.debug('- parent: "'.concat(i.props.label,'"')),console.debug('- parentPosition: "{'.concat(null==M?void 0:M.x,", ").concat(null==M?void 0:M.y,'}"'));var j=0+y*Math.sin(b),N=0+y*Math.cos(b);d.push({id:e.props.id,x:N,y:j,"φ":b}),u.push(r.a.createElement("circle",{r:y,cx:0,cy:0,fill:"none",stroke:"#ddd",strokeWidth:"1",strokeDasharray:"4"}));var v=r.a.createElement("path",{d:"\n            M ".concat((null==M?void 0:M.x)||0," ").concat((null==M?void 0:M.y)||0,"\n            L ").concat(N," ").concat(j,"\n          "),stroke:"rgb(".concat(50*l%255,", ").concat(100*l*3.14%255,", ").concat(150*l%255,")"),strokeWidth:"2",fill:"none"});return console.debug('- nodePositiong: "{'.concat(null==M?void 0:M.x,", ").concat(null==M?void 0:M.y,'}"')),s.push(v),0==o&&{x:N,y:j},r.a.cloneElement(e,{x:N,y:j})}));u.push(M),i.forEach((function(n){e(n,c+i.length)}))}else console.debug('Node "'.concat(o.props.label,'" has no children'))}(n[0]);var M=2*a(l+1)+0;return r.a.createElement("svg",c({viewBox:"".concat(-M/2," ").concat(-M/2," ").concat(M," ").concat(M),width:M,height:M},o),s,u)}}])}));