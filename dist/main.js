(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"body{\n    margin: 0;\n}\n\n/* HEADER */\n.header-container{\n\n    height: 100px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: black;\n    font-family: sans-serif;\n    font-weight: 800;\n}\n\n/* CAROUSAL */\n\n.carousal{\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 600px;\n}\n\n.image{\n    width: 600px;\n    height: 400px;\n    display: none;\n    border: 2px solid black;\n    border-radius: 20px;\n    box-shadow: -10px 10px 0px rgba(33, 33, 33, 1), -20px 20px 0px rgba(33, 33, 33, 0.7), -30px 30px 0px rgba(33, 33, 33, 0.4), -40px 40px 0px rgba(33, 33, 33, 0.1);\n}   \n\n.first-image{\n\n    display: block;\n}\n\nimg{\n    width: 600px;\n    height: 400px;\n    border-radius: 18px;\n\n}\n\n.dots{\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 40px;\n    gap: 5px;\n}\n.dot{\n\n    width: 20px;\n    height: 20px;\n    border: 2px solid black;\n    border-radius: 50%;\n    \n}\n\n.dot-active{\n    background-color: black;\n}\n\n.buttons{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 7px;\n    gap: 5px;\n}\n\n.next,\n.back{\n\n    width: 100px;\n    font-family: sans-serif;\n    font-weight: 800;\n    border: 2px solid black;\n    border-radius: 10px;\n}\n\n\n",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var v=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:v,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{const n=Array.from(document.querySelectorAll(".image")),e=Array.from(document.querySelectorAll(".dot")),r=document.querySelector(".next"),o=document.querySelector(".back");let a=0;function i(){return a+=1%n.length,a===n.length&&(a=0),a}function c(){n[a].style.display="none",e[a].classList.remove("dot-active")}function s(){n[a].style.display="block",e[a].classList.add("dot-active")}var l=t(379),d=t.n(l),u=t(795),p=t.n(u),f=t(569),v=t.n(f),h=t(565),m=t.n(h),x=t(216),y=t.n(x),g=t(589),b=t.n(g),k=t(426),w={};w.styleTagTransform=b(),w.setAttributes=m(),w.insert=v().bind(null,"head"),w.domAPI=p(),w.insertStyleElement=y(),d()(k.Z,w),k.Z&&k.Z.locals&&k.Z.locals,setInterval((function(){c(),a=i(),s()}),5e3),e.forEach((n=>n.addEventListener("click",(n=>{n.target.classList.contains("dot")&&(c(),a=function(n){for(let t=0;t<e.length;t++)if(e[t]===n)return t}(n.target),s())})))),r.addEventListener("click",(()=>{c(),a=i(),s()})),o.addEventListener("click",(()=>{c(),a=0===a?(a=n.length-1,a):(a-=1,a),s()}))})()})();