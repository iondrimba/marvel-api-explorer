(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{73:function(t,e,n){"use strict";var r=n(0),o=n.n(r);e.a=function(){return o.a.createElement("div",{className:"slides"},o.a.createElement("svg",{className:"loader",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 654.5 249.8"},o.a.createElement("path",{fill:"none",d:"M0 0h654.5v249.8H0z"}),o.a.createElement("path",{fill:"#fff",d:"M560.7 52.5V11H445l-19 138.8L407.4 11h-41.7l4.7 37c-4.8-9.5-22-37-59.4-37h-42v202.2L238.6 11H184l-31.4 209.5V11h-52.3L81.5 128.7 63.2 11H11v227.8h41V129L71 238.8h22L111 129v109.8h79.5l4.8-35h32l4.7 35h78v-74l9.6-1.4 19.8 75.4h40.3l-26-88.4c13.2-9.7 28-34.4 24-58L402.4 239l48-.2L483 32.3v206.5h77.7v-41h-37v-52.2h37V104h-37V52.5zM200 167.5l11.4-97.3 11.7 97.4h-23zm119.7-45a22.5 22.5 0 0 1-9.7 2.4V51.6h.2c3.3 0 27.3 1 27.3 36.2 0 18.3-8.2 30-17.8 34.6zm324 75.2v41h-76V11h41v186.8h35z"})),o.a.createElement("div",{className:"first"}),o.a.createElement("div",{className:"second"}))}},74:function(t,e,n){"use strict";var r=n(0),o=n.n(r),i=n(1),c=n.n(i);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function l(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=p(t);if(e){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return f(this,n)}}function f(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(c,t);var e,n,r,i=l(c);function c(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,c),i.call(this,t)}return e=c,(n=[{key:"render",value:function(){return o.a.createElement("button",{type:"button",name:"back",className:"back-button",onClick:this.props.onClick},o.a.createElement("span",{className:"back-button__icon"}))}}])&&a(e.prototype,n),r&&a(e,r),c}(r.PureComponent);y.propTypes={onClick:c.a.func},e.a=y},75:function(t,e,n){"use strict";var r=n(0),o=n.n(r),i=n(1),c=n.n(i);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=y(t);if(e){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function p(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(c,t);var e,n,r,i=f(c);function c(){return a(this,c),i.apply(this,arguments)}return e=c,(n=[{key:"render",value:function(){return o.a.createElement("section",{className:"detail__cover"},o.a.createElement("img",{src:this.props.selectedItem.full}),o.a.createElement("div",{className:"detail__cover--reflex",style:{backgroundImage:"url(".concat(this.props.selectedItem.thumb,")")}}))}}])&&s(e.prototype,n),r&&s(e,r),c}(r.PureComponent);h.propTypes={selectedItem:c.a.object},e.a=h},76:function(t,e,n){"use strict";var r=n(0),o=n.n(r);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=f(t);if(e){var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return l(this,n)}}function l(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}(l,t);var e,n,r,i=s(l);function l(){return c(this,l),i.apply(this,arguments)}return e=l,(n=[{key:"render",value:function(){return o.a.createElement("button",{type:"button",name:"scroll-indicator",className:"scroll-indicator"},o.a.createElement("span",{className:"scroll-indicator__icon"}))}}])&&u(e.prototype,n),r&&u(e,r),l}(r.PureComponent);e.a=p},77:function(t,e,n){"use strict";function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.offset=.1,this.animation=300}var e,n,o;return e=t,(n=[{key:"init",value:function(t){this.el=t,this.rect=this.el.getBoundingClientRect(),this.over=!1,this.timer,this._addListeners()}},{key:"_addListeners",value:function(){this.el.addEventListener("mouseover",this._onMouseOver.bind(this)),this.el.addEventListener("mousemove",this._onMouseMove.bind(this)),this.el.addEventListener("mouseout",this._onMouseOut.bind(this))}},{key:"_onMouseOver",value:function(t){this.over&&this._position(t,t.currentTarget)}},{key:"_onMouseMove",value:function(t){this._position(t,t.currentTarget),this._transition(t.currentTarget)}},{key:"_onMouseOut",value:function(t){this._applyStyle(t.currentTarget,{transform:"rotateX(0deg) rotateY(0deg) translate(-50%, -50%)"}),this.over=!1}},{key:"_convertToString",value:function(t){var e="";for(var n in t)e+="".concat(n,":").concat(t[n],";");return e}},{key:"_applyStyle",value:function(t,e){t.style=this._convertToString(e)}},{key:"_position",value:function(t,e){var n=this.rect,r=this.offset,o=-(t.offsetX-.5*n.width)*r,i=.03*(t.offsetY-.5*n.height);this._applyStyle(e,{transform:"rotateX("+i+"deg) rotateY("+o+"deg) translate(-50%, -50%)"})}},{key:"_transition",value:function(){var t=this;void 0!==this.timer&&clearTimeout(this.timer),this.timer=setTimeout((function(){t.over=!0}),this.animation)}}])&&r(e.prototype,n),o&&r(e,o),t}();e.a=o},78:function(t,e,n){"use strict";function r(t,e){return t===e}function o(t,e,n){if(null===e||null===n||e.length!==n.length)return!1;for(var r=e.length,o=0;o<r;o++)if(!t(e[o],n[o]))return!1;return!0}function i(t){var e=Array.isArray(t[0])?t[0]:t;if(!e.every((function(t){return"function"==typeof t}))){var n=e.map((function(t){return typeof t})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+n+"]")}return e}n.d(e,"a",(function(){return c}));var c=function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return function(){for(var e=arguments.length,r=Array(e),o=0;o<e;o++)r[o]=arguments[o];var c=0,u=r.pop(),a=i(r),s=t.apply(void 0,[function(){return c++,u.apply(null,arguments)}].concat(n)),l=t((function(){for(var t=[],e=a.length,n=0;n<e;n++)t.push(a[n].apply(null,arguments));return s.apply(null,t)}));return l.resultFunc=u,l.dependencies=a,l.recomputations=function(){return c},l.resetRecomputations=function(){return c=0},l}}((function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,n=null,i=null;return function(){return o(e,n,arguments)||(i=t.apply(null,arguments)),n=arguments,i}}))},79:function(t,e,n){"use strict";n.d(e,"a",(function(){return b})),n.d(e,"c",(function(){return d})),n.d(e,"b",(function(){return v})),n.d(e,"d",(function(){return _}));var r=n(0),o=n.n(r),i=n(1),c=n.n(i);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e){return(l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=y(t);if(e){var o=y(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function p(t,e){return!e||"object"!==u(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}(c,t);var e,n,r,i=f(c);function c(){return a(this,c),i.apply(this,arguments)}return e=c,(n=[{key:"render",value:function(){return o.a.createElement("section",{className:"info__".concat(this.props.type)},o.a.createElement("h3",{className:"sub-title"},this.props.title),o.a.createElement("ul",null,this.props.data.map((function(t,e){return o.a.createElement("li",{key:Math.random(0,10)},t.name)}))))}}])&&s(e.prototype,n),r&&s(e,r),c}(r.PureComponent);h.propTypes={type:c.a.string,title:c.a.string,data:c.a.array};var m=h,b=function(t){t.map((function(t,e){requestAnimationFrame((function(){requestAnimationFrame((function(){t.classList.add("active")}))}))}));var e=document.querySelector(".slides .loader");setTimeout((function(){e.classList.add("show")}),200)},d=function(){document.querySelector("html").classList.remove("disable-scroll")},v=function(t,e,n,r,o){setTimeout((function(){var i=document.querySelector(".slides .loader");setTimeout((function(){r(),t.classList.add("active"),e.classList.add("show"),n.reverse().map((function(t,e){i.classList.remove("show"),t.classList.remove("active"),t.classList.add("out")})),o.init(e)}),800)}),300),document.querySelector("html").classList.add("disable-scroll")},_=function(t,e,n){return e(t)?o.a.createElement(m,{title:n,type:n.toLowerCase(),data:t.items}):""}},81:function(t,e,n){"use strict";n.r(e);var r=n(10),o=n(5),i=n(0),c=n.n(i),u=n(1),a=n.n(u),s=n(73),l=n(74),f=n(76),p=n(77),y=n(75),h=n(79);function m(t){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function b(t){return function(t){if(Array.isArray(t))return d(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function v(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _(t,e){return(_=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function w(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=O(t);if(e){var o=O(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return g(this,n)}}function g(t,e){return!e||"object"!==m(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function O(t){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_(t,e)}(i,t);var e,n,r,o=w(i);function i(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),o.call(this,t)}return e=i,(n=[{key:"positionInfos",value:function(){var t=0;window.innerWidth<960&&(t=window.innerHeight-50),this.infos.style="transform:translateY(".concat(t,"px)")}},{key:"componentDidMount",value:function(){var t=this;this.tilt=new p.a,this.mobile=!0;var e=b(document.querySelectorAll(".slides .first"));window.onresize=function(){t.positionInfos()};var n=document.querySelector(".detail__content"),r=n.querySelector("img");r.onload=function(){Object(h.b)(n,r,e,t.positionInfos.bind(t),t.tilt)},Object(h.a)(e)}},{key:"componentWillUnmount",value:function(){window.onresize=null,Object(h.c)()}},{key:"createMarkup",value:function(t){return{__html:t}}},{key:"onBackButtonClick",value:function(){this.props.history.goBack()}},{key:"getDescription",value:function(t){return t?c.a.createElement("p",{dangerouslySetInnerHTML:this.createMarkup(t)}):""}},{key:"hasItens",value:function(t){var e=!1;return t.items&&t.items.length&&(e=!0),e}},{key:"render",value:function(){var t=this;return(c.a.createElement("div",{className:"detail"},c.a.createElement(s.a,null),c.a.createElement("div",{ref:function(e){return t.content=e},className:"detail__content"},c.a.createElement(l.a,{onClick:this.onBackButtonClick.bind(this)}),c.a.createElement(y.a,this.props),c.a.createElement("section",{ref:function(e){return t.infos=e},className:"detail__infos"},c.a.createElement(f.a,null),c.a.createElement("div",{className:"info__name info__name--comic"},c.a.createElement("h2",{ref:function(e){return t.title=e}},this.props.selectedItem.title),this.getDescription(this.props.selectedItem.description)),Object(h.d)(this.props.selectedItem.creators,this.hasItens,"Creators"),Object(h.d)(this.props.selectedItem.characters,this.hasItens,"Characters"),Object(h.d)(this.props.selectedItem.stories,this.hasItens,"Stories"),Object(h.d)(this.props.selectedItem.series,this.hasItens,"Series")))))}}])&&v(e.prototype,n),r&&v(e,r),i}(i.PureComponent);S.propTypes={selectedItem:a.a.object,history:a.a.object};var j=S,E=n(78),k=Object(E.a)([function(t,e){return t.find((function(t,n){return t.id===Number(e.match.params.id)}))}],(function(t,e){return t}));e.default=Object(o.e)(Object(r.c)((function(t,e){return{selectedItem:k(t.data,e)}}),null)(j))}}]);