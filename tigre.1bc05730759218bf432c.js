(()=>{var t={757:(t,e,n)=>{t.exports=n(666)},666:t=>{var e=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function c(t,e,n,r){var a=e&&e.prototype instanceof d?e:d,o=Object.create(a.prototype),i=new C(r||[]);return o._invoke=function(t,e,n){var r=h;return function(a,o){if(r===p)throw new Error("Generator is already running");if(r===v){if("throw"===a)throw o;return O()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var s=j(i,n);if(s){if(s===g)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var l=u(t,e,n);if("normal"===l.type){if(r=n.done?v:f,l.arg===g)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r=v,n.method="throw",n.arg=l.arg)}}}(t,n,i),o}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var h="suspendedStart",f="suspendedYield",p="executing",v="completed",g={};function d(){}function _(){}function y(){}var m={};m[o]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(M([])));x&&x!==n&&r.call(x,o)&&(m=x);var b=y.prototype=d.prototype=Object.create(m);function L(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function n(a,o,i,s){var l=u(t[a],t,o);if("throw"!==l.type){var c=l.arg,h=c.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,i,s)}),(function(t){n("throw",t,i,s)})):e.resolve(h).then((function(t){c.value=t,i(c)}),(function(t){return n("throw",t,i,s)}))}s(l.arg)}var a;this._invoke=function(t,r){function o(){return new e((function(e,a){n(t,r,e,a)}))}return a=a?a.then(o,o):o()}}function j(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=e,j(t,n),"throw"===n.method))return g;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return g}var a=u(r,t.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var o=a.arg;return o?o.done?(n[t.resultName]=o.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,g):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,g)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function N(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function M(t){if(t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,i=function n(){for(;++a<t.length;)if(r.call(t,a))return n.value=t[a],n.done=!1,n;return n.value=e,n.done=!0,n};return i.next=i}}return{next:O}}function O(){return{value:e,done:!0}}return _.prototype=b.constructor=y,y.constructor=_,_.displayName=l(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===_||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,s,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},L(E.prototype),E.prototype[i]=function(){return this},t.AsyncIterator=E,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var i=new E(c(e,n,r,a),o);return t.isGeneratorFunction(n)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(b),l(b,s,"Generator"),b[o]=function(){return this},b.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=M,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(N),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function a(r,a){return s.type="throw",s.arg=t,n.next=r,a&&(n.method="next",n.arg=e),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],s=i.completion;if("root"===i.tryLoc)return a("end");if(i.tryLoc<=this.prev){var l=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return a(i.catchLoc,!0);if(this.prev<i.finallyLoc)return a(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return a(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return a(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),N(n),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;N(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:M(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),g}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e,n,r,a,o,i){try{var s=t[o](i),l=s.value}catch(t){return void n(t)}s.done?e(l):Promise.resolve(l).then(r,a)}function e(e){return function(){var n=this,r=arguments;return new Promise((function(a,o){var i=e.apply(n,r);function s(e){t(i,a,o,s,l,"next",e)}function l(e){t(i,a,o,s,l,"throw",e)}s(void 0)}))}}var r=n(757),a=n.n(r);const o=function(){var t=e(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return'\n    <section class="logo__container">\n        <a class="logo__link" href="https://frijolmagico.cl">\n            <svg class="logo__svg" viewBox="280 120 300 300">\n                <path class="st0" d="M506.7 202.6c25.8 2 72 17 72 29.5 -20.9 8-53-13.5-66.2-23.9C508.7 205.3 506.7 202.6 506.7 202.6"/>\n                <path class="st0" d="M402.4 201.3c0 0-148.9 44.5-90.2 57.2 27.2 5.9 76.4 1.7 75.8 1.7 -0.6 0-12.6 21.9-39.9 27.8 -39.8 8.6-81.2 36.4-50.9 89.9 27.4 48.4 175.7-38 175.7-38l45.1-97.1 -63.4-54.2L402.4 201.3z"/>\n                <path class="st1" d="M514.1 209.2c0 0 13.6 36.8 13.5 47 -0.2 10.2 14.8 101.4-88.7 146.5 -103.5 45.1-137.4-16.8-137.4-16.8s-18.8-27.2-8.7-53.4c9.5-24.4 27.7-33.1 55.5-38.7 29.2-5.8 46.2-30.3 48.4-33.8l-0.2-0.4c-43.7 3-124 5.9-81-20.2 32.1-19.4 86.6-28.6 111.6-32 1-0.1 1-1.7-0.1-1.7 -14.2-0.7-27.5-2.8-28.9-3.1l-0.2-0.1c-15.2-28-46.1-34-46.1-34s-8.8-3.5-15.8-4.9c-12-2.3-32.2-4.1-20.8-13.7C386.7 89.9 492.5 152.2 514.1 209.2L514.1 209.2l-2.1 0c0 0 39.8-0.7 63.5 17.9 24.6 19.3-104 48-116.3 23.7 -12.3-24.3 52.8-41.5 52.8-41.5"/>\n                <path class="st0" d="M445.3 268.7c-1 11.7-6.9 20.7-13.4 20.2 -6.4-0.5-10.8-10.4-9.9-22.1 1-11.7 6.9-20.7 13.4-20.2C441.9 247.1 446.3 257 445.3 268.7"/>\n                <path class="st0" d="M488 270.9c-1 11.7-6.9 20.7-13.4 20.2 -6.4-0.5-10.8-10.4-9.9-22.1 1-11.7 6.9-20.7 13.4-20.2C484.6 249.3 489 259.2 488 270.9"/>      \n            </svg>\n            <h1 class="logo__text">Frijol <br> Mágico</h1>\n        </a>\n    </section>\n    \n    <input class="nav__toggle" id="nav__toggle" type="checkbox">\n    <label for="nav__toggle" class="nav__toggle-label"><span></span></label>\n    \n    <nav class="nav__container">\n        <ul class="nav__general">\n              <li class="nav__li"><a class="nav__a" target="_self" href="https://frijolmagico.cl">Inicio</a></li>\n              <li class="nav__li"><a class="nav__a" target="_self" href="../ilustradorxs">Ilustradorxs</a></li>\n              <li class="nav__li"><a class="nav__a" target="_self" href="../talleres">Talleres</a></li>\n              <li class="nav__li"><a class="nav__a" target="_self" href="https://blog.frijolmagico.cl">Blog</a></li>\n              <li class="nav__li"><a class="nav__a" target="_self" href="../nosotrxs">Nosotrxs</a></li>\n        </ul>\n    </nav>\n    ',t.abrupt("return",'\n    <section class="logo__container">\n        <a class="logo__link" href="https://frijolmagico.cl">\n            <svg class="logo__svg" viewBox="280 120 300 300">\n                <path class="st0" d="M506.7 202.6c25.8 2 72 17 72 29.5 -20.9 8-53-13.5-66.2-23.9C508.7 205.3 506.7 202.6 506.7 202.6"/>\n                <path class="st0" d="M402.4 201.3c0 0-148.9 44.5-90.2 57.2 27.2 5.9 76.4 1.7 75.8 1.7 -0.6 0-12.6 21.9-39.9 27.8 -39.8 8.6-81.2 36.4-50.9 89.9 27.4 48.4 175.7-38 175.7-38l45.1-97.1 -63.4-54.2L402.4 201.3z"/>\n                <path class="st1" d="M514.1 209.2c0 0 13.6 36.8 13.5 47 -0.2 10.2 14.8 101.4-88.7 146.5 -103.5 45.1-137.4-16.8-137.4-16.8s-18.8-27.2-8.7-53.4c9.5-24.4 27.7-33.1 55.5-38.7 29.2-5.8 46.2-30.3 48.4-33.8l-0.2-0.4c-43.7 3-124 5.9-81-20.2 32.1-19.4 86.6-28.6 111.6-32 1-0.1 1-1.7-0.1-1.7 -14.2-0.7-27.5-2.8-28.9-3.1l-0.2-0.1c-15.2-28-46.1-34-46.1-34s-8.8-3.5-15.8-4.9c-12-2.3-32.2-4.1-20.8-13.7C386.7 89.9 492.5 152.2 514.1 209.2L514.1 209.2l-2.1 0c0 0 39.8-0.7 63.5 17.9 24.6 19.3-104 48-116.3 23.7 -12.3-24.3 52.8-41.5 52.8-41.5"/>\n                <path class="st0" d="M445.3 268.7c-1 11.7-6.9 20.7-13.4 20.2 -6.4-0.5-10.8-10.4-9.9-22.1 1-11.7 6.9-20.7 13.4-20.2C441.9 247.1 446.3 257 445.3 268.7"/>\n                <path class="st0" d="M488 270.9c-1 11.7-6.9 20.7-13.4 20.2 -6.4-0.5-10.8-10.4-9.9-22.1 1-11.7 6.9-20.7 13.4-20.2C484.6 249.3 489 259.2 488 270.9"/>      \n            </svg>\n            <h1 class="logo__text">Frijol <br> Mágico</h1>\n        </a>\n    </section>\n    \n    <input class="nav__toggle" id="nav__toggle" type="checkbox">\n    <label for="nav__toggle" class="nav__toggle-label"><span></span></label>\n    \n    <nav class="nav__container">\n        <ul class="nav__general">\n              <li class="nav__li"><a class="nav__a" target="_self" href="https://frijolmagico.cl">Inicio</a></li>\n              <li class="nav__li"><a class="nav__a" target="_self" href="../ilustradorxs">Ilustradorxs</a></li>\n              <li class="nav__li"><a class="nav__a" target="_self" href="../talleres">Talleres</a></li>\n              <li class="nav__li"><a class="nav__a" target="_self" href="https://blog.frijolmagico.cl">Blog</a></li>\n              <li class="nav__li"><a class="nav__a" target="_self" href="../nosotrxs">Nosotrxs</a></li>\n        </ul>\n    </nav>\n    ');case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();const i=function(){var t=e(a().mark((function t(){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return'\n    <p class="footer__text"> Frijol Mágico 2021 |\n    Desarrollado por <a href="https://www.instagram.com/_strocs/">_Strocs.</a></p>\n    ',t.abrupt("return",'\n    <p class="footer__text"> Frijol Mágico 2021 |\n    Desarrollado por <a href="https://www.instagram.com/_strocs/">_Strocs.</a></p>\n    ');case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();const s=function(){var t=e(a().mark((function t(){var e,n,r,o,i,s,l;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=document.getElementsByClassName("ilus-page__images")[0],n=document.getElementsByClassName("ilus-page__images")[1],r=document.getElementsByClassName("ilus-page__images")[2],o=document.getElementsByClassName("images__img")[0],i=document.getElementsByClassName("images__img")[1],s=document.getElementsByClassName("images__img")[2],l=document.getElementsByClassName("images__container")[0],document.getElementsByClassName("images__detail")[0],!((window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth)>=768)){t.next=13;break}return t.abrupt("return",(l.addEventListener("click",(function(){l.style.display="none",o.style.visibility="hidden",i.style.visibility="hidden",s.style.visibility="hidden"})),e.addEventListener("click",(function(){l.style.display="inherit",o.style.visibility="visible"})),n.addEventListener("click",(function(){l.style.display="inherit",i.style.visibility="visible"})),r.addEventListener("click",(function(){l.style.display="inherit",s.style.visibility="visible"}))));case 13:return t.abrupt("return",(l.style.display="none",o.style.visibility="hidden",i.style.visibility="hidden",s.style.visibility="hidden"));case 14:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();var l;(l=e(a().mark((function t(){var e,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=document.getElementsByClassName("header__container")[0],n=document.getElementsByClassName("footer__container")[0],t.next=4,o();case 4:return e.innerHTML=t.sent,t.next=7,i();case 7:n.innerHTML=t.sent;case 8:case"end":return t.stop()}}),t)}))),function(){return l.apply(this,arguments)})(),s()})()})();