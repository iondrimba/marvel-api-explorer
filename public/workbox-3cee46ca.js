define("./workbox-3cee46ca.js",["exports"],(function(t){"use strict";try{self["workbox:core:5.1.3"]&&_()}catch(t){}const e=(t,...e)=>{let s=t;return e.length>0&&(s+=` :: ${JSON.stringify(e)}`),s};class s extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}try{self["workbox:routing:5.1.3"]&&_()}catch(t){}const n=t=>t&&"object"==typeof t?t:{handle:t};class i{constructor(t,e,s="GET"){this.handler=n(e),this.match=t,this.method=s}}class r extends i{constructor(t,e,s){super(({url:e})=>{const s=t.exec(e.href);if(s&&(e.origin===location.origin||0===s.index))return s.slice(1)},e,s)}}const c=t=>new URL(String(t),location.href).href.replace(new RegExp(`^${location.origin}`),"");class a{constructor(){this.t=new Map}get routes(){return this.t}addFetchListener(){self.addEventListener("fetch",t=>{const{request:e}=t,s=this.handleRequest({request:e,event:t});s&&t.respondWith(s)})}addCacheListener(){self.addEventListener("message",t=>{if(t.data&&"CACHE_URLS"===t.data.type){const{payload:e}=t.data,s=Promise.all(e.urlsToCache.map(t=>{"string"==typeof t&&(t=[t]);const e=new Request(...t);return this.handleRequest({request:e})}));t.waitUntil(s),t.ports&&t.ports[0]&&s.then(()=>t.ports[0].postMessage(!0))}})}handleRequest({request:t,event:e}){const s=new URL(t.url,location.href);if(!s.protocol.startsWith("http"))return;const{params:n,route:i}=this.findMatchingRoute({url:s,request:t,event:e});let r,c=i&&i.handler;if(!c&&this.s&&(c=this.s),c){try{r=c.handle({url:s,request:t,event:e,params:n})}catch(t){r=Promise.reject(t)}return r instanceof Promise&&this.i&&(r=r.catch(n=>this.i.handle({url:s,request:t,event:e}))),r}}findMatchingRoute({url:t,request:e,event:s}){const n=this.t.get(e.method)||[];for(const i of n){let n;const r=i.match({url:t,request:e,event:s});if(r)return n=r,Array.isArray(r)&&0===r.length?n=void 0:r.constructor===Object&&0===Object.keys(r).length?n=void 0:"boolean"==typeof r&&(n=void 0),{route:i,params:n}}return{}}setDefaultHandler(t){this.s=n(t)}setCatchHandler(t){this.i=n(t)}registerRoute(t){this.t.has(t.method)||this.t.set(t.method,[]),this.t.get(t.method).push(t)}unregisterRoute(t){if(!this.t.has(t.method))throw new s("unregister-route-but-not-found-with-method",{method:t.method});const e=this.t.get(t.method).indexOf(t);if(!(e>-1))throw new s("unregister-route-route-not-registered");this.t.get(t.method).splice(e,1)}}let o;const h=()=>(o||(o=new a,o.addFetchListener(),o.addCacheListener()),o);const u={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},l=t=>[u.prefix,t,u.suffix].filter(t=>t&&t.length>0).join("-"),f=t=>t||l(u.precache),w=t=>t||l(u.runtime);function d(t){t.then(()=>{})}const p=new Set;class y{constructor(t,e,{onupgradeneeded:s,onversionchange:n}={}){this.o=null,this.h=t,this.u=e,this.l=s,this.p=n||(()=>this.close())}get db(){return this.o}async open(){if(!this.o)return this.o=await new Promise((t,e)=>{let s=!1;setTimeout(()=>{s=!0,e(new Error("The open request was blocked and timed out"))},this.OPEN_TIMEOUT);const n=indexedDB.open(this.h,this.u);n.onerror=()=>e(n.error),n.onupgradeneeded=t=>{s?(n.transaction.abort(),n.result.close()):"function"==typeof this.l&&this.l(t)},n.onsuccess=()=>{const e=n.result;s?e.close():(e.onversionchange=this.p.bind(this),t(e))}}),this}async getKey(t,e){return(await this.getAllKeys(t,e,1))[0]}async getAll(t,e,s){return await this.getAllMatching(t,{query:e,count:s})}async getAllKeys(t,e,s){return(await this.getAllMatching(t,{query:e,count:s,includeKeys:!0})).map(t=>t.key)}async getAllMatching(t,{index:e,query:s=null,direction:n="next",count:i,includeKeys:r=!1}={}){return await this.transaction([t],"readonly",(c,a)=>{const o=c.objectStore(t),h=e?o.index(e):o,u=[],l=h.openCursor(s,n);l.onsuccess=()=>{const t=l.result;t?(u.push(r?t:t.value),i&&u.length>=i?a(u):t.continue()):a(u)}})}async transaction(t,e,s){return await this.open(),await new Promise((n,i)=>{const r=this.o.transaction(t,e);r.onabort=()=>i(r.error),r.oncomplete=()=>n(),s(r,t=>n(t))})}async g(t,e,s,...n){return await this.transaction([e],s,(s,i)=>{const r=s.objectStore(e),c=r[t].apply(r,n);c.onsuccess=()=>i(c.result)})}close(){this.o&&(this.o.close(),this.o=null)}}y.prototype.OPEN_TIMEOUT=2e3;const g={readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]};for(const[t,e]of Object.entries(g))for(const s of e)s in IDBObjectStore.prototype&&(y.prototype[s]=async function(e,...n){return await this.g(s,e,t,...n)});try{self["workbox:expiration:5.1.3"]&&_()}catch(t){}const m=t=>{const e=new URL(t,location.href);return e.hash="",e.href};class q{constructor(t){this.m=t,this.o=new y("workbox-expiration",1,{onupgradeneeded:t=>this.q(t)})}q(t){const e=t.target.result.createObjectStore("cache-entries",{keyPath:"id"});e.createIndex("cacheName","cacheName",{unique:!1}),e.createIndex("timestamp","timestamp",{unique:!1}),(async t=>{await new Promise((e,s)=>{const n=indexedDB.deleteDatabase(t);n.onerror=()=>{s(n.error)},n.onblocked=()=>{s(new Error("Delete blocked"))},n.onsuccess=()=>{e()}})})(this.m)}async setTimestamp(t,e){const s={url:t=m(t),timestamp:e,cacheName:this.m,id:this.R(t)};await this.o.put("cache-entries",s)}async getTimestamp(t){return(await this.o.get("cache-entries",this.R(t))).timestamp}async expireEntries(t,e){const s=await this.o.transaction("cache-entries","readwrite",(s,n)=>{const i=s.objectStore("cache-entries").index("timestamp").openCursor(null,"prev"),r=[];let c=0;i.onsuccess=()=>{const s=i.result;if(s){const n=s.value;n.cacheName===this.m&&(t&&n.timestamp<t||e&&c>=e?r.push(s.value):c++),s.continue()}else n(r)}}),n=[];for(const t of s)await this.o.delete("cache-entries",t.id),n.push(t.url);return n}R(t){return this.m+"|"+m(t)}}class R{constructor(t,e={}){this.v=!1,this.U=!1,this.L=e.maxEntries,this.N=e.maxAgeSeconds,this.m=t,this._=new q(t)}async expireEntries(){if(this.v)return void(this.U=!0);this.v=!0;const t=this.N?Date.now()-1e3*this.N:0,e=await this._.expireEntries(t,this.L),s=await self.caches.open(this.m);for(const t of e)await s.delete(t);this.v=!1,this.U&&(this.U=!1,d(this.expireEntries()))}async updateTimestamp(t){await this._.setTimestamp(t,Date.now())}async isURLExpired(t){if(this.N){return await this._.getTimestamp(t)<Date.now()-1e3*this.N}return!1}async delete(){this.U=!1,await this._.expireEntries(1/0)}}try{self["workbox:cacheable-response:5.1.3"]&&_()}catch(t){}class v{constructor(t={}){this.O=t.statuses,this.K=t.headers}isResponseCacheable(t){let e=!0;return this.O&&(e=this.O.includes(t.status)),this.K&&e&&(e=Object.keys(this.K).some(e=>t.headers.get(e)===this.K[e])),e}}const U=(t,e)=>t.filter(t=>e in t),L=async({request:t,mode:e,plugins:s=[]})=>{const n=U(s,"cacheKeyWillBeUsed");let i=t;for(const t of n)i=await t.cacheKeyWillBeUsed.call(t,{mode:e,request:i}),"string"==typeof i&&(i=new Request(i));return i},x=async({cacheName:t,request:e,event:s,matchOptions:n,plugins:i=[]})=>{const r=await self.caches.open(t),c=await L({plugins:i,request:e,mode:"read"});let a=await r.match(c,n);for(const e of i)if("cachedResponseWillBeUsed"in e){const i=e.cachedResponseWillBeUsed;a=await i.call(e,{cacheName:t,event:s,matchOptions:n,cachedResponse:a,request:c})}return a},N=async({cacheName:t,request:e,response:n,event:i,plugins:r=[],matchOptions:a})=>{const o=await L({plugins:r,request:e,mode:"write"});if(!n)throw new s("cache-put-with-no-response",{url:c(o.url)});const h=await(async({request:t,response:e,event:s,plugins:n=[]})=>{let i=e,r=!1;for(const e of n)if("cacheWillUpdate"in e){r=!0;const n=e.cacheWillUpdate;if(i=await n.call(e,{request:t,response:i,event:s}),!i)break}return r||(i=i&&200===i.status?i:void 0),i||null})({event:i,plugins:r,response:n,request:o});if(!h)return;const u=await self.caches.open(t),l=U(r,"cacheDidUpdate"),f=l.length>0?await x({cacheName:t,matchOptions:a,request:o}):null;try{await u.put(o,h)}catch(t){throw"QuotaExceededError"===t.name&&await async function(){for(const t of p)await t()}(),t}for(const e of l)await e.cacheDidUpdate.call(e,{cacheName:t,event:i,oldResponse:f,newResponse:h,request:o})},b=x,E=async({request:t,fetchOptions:e,event:n,plugins:i=[]})=>{if("string"==typeof t&&(t=new Request(t)),n instanceof FetchEvent&&n.preloadResponse){const t=await n.preloadResponse;if(t)return t}const r=U(i,"fetchDidFail"),c=r.length>0?t.clone():null;try{for(const e of i)if("requestWillFetch"in e){const s=e.requestWillFetch,i=t.clone();t=await s.call(e,{request:i,event:n})}}catch(t){throw new s("plugin-error-request-will-fetch",{thrownError:t})}const a=t.clone();try{let s;s="navigate"===t.mode?await fetch(t):await fetch(t,e);for(const t of i)"fetchDidSucceed"in t&&(s=await t.fetchDidSucceed.call(t,{event:n,request:a,response:s}));return s}catch(t){for(const e of r)await e.fetchDidFail.call(e,{error:t,event:n,originalRequest:c.clone(),request:a.clone()});throw t}};try{self["workbox:strategies:5.1.3"]&&_()}catch(t){}const O={cacheWillUpdate:async({response:t})=>200===t.status||0===t.status?t:null};let K;async function M(t,e){const s=t.clone(),n={headers:new Headers(s.headers),status:s.status,statusText:s.statusText},i=e?e(n):n,r=function(){if(void 0===K){const t=new Response("");if("body"in t)try{new Response(t.body),K=!0}catch(t){K=!1}K=!1}return K}()?s.body:await s.blob();return new Response(r,i)}try{self["workbox:precaching:5.1.3"]&&_()}catch(t){}function D(t){if(!t)throw new s("add-to-cache-list-unexpected-type",{entry:t});if("string"==typeof t){const e=new URL(t,location.href);return{cacheKey:e.href,url:e.href}}const{revision:e,url:n}=t;if(!n)throw new s("add-to-cache-list-unexpected-type",{entry:t});if(!e){const t=new URL(n,location.href);return{cacheKey:t.href,url:t.href}}const i=new URL(n,location.href),r=new URL(n,location.href);return i.searchParams.set("__WB_REVISION__",e),{cacheKey:i.href,url:r.href}}class T{constructor(t){this.m=f(t),this.M=new Map,this.D=new Map,this.T=new Map}addToCacheList(t){const e=[];for(const n of t){"string"==typeof n?e.push(n):n&&void 0===n.revision&&e.push(n.url);const{cacheKey:t,url:i}=D(n),r="string"!=typeof n&&n.revision?"reload":"default";if(this.M.has(i)&&this.M.get(i)!==t)throw new s("add-to-cache-list-conflicting-entries",{firstEntry:this.M.get(i),secondEntry:t});if("string"!=typeof n&&n.integrity){if(this.T.has(t)&&this.T.get(t)!==n.integrity)throw new s("add-to-cache-list-conflicting-integrities",{url:i});this.T.set(t,n.integrity)}if(this.M.set(i,t),this.D.set(i,r),e.length>0){const t="Workbox is precaching URLs without revision "+`info: ${e.join(", ")}\nThis is generally NOT safe. `+"Learn more at https://bit.ly/wb-precache";console.warn(t)}}}async install({event:t,plugins:e}={}){const s=[],n=[],i=await self.caches.open(this.m),r=await i.keys(),c=new Set(r.map(t=>t.url));for(const[t,e]of this.M)c.has(e)?n.push(t):s.push({cacheKey:e,url:t});const a=s.map(({cacheKey:s,url:n})=>{const i=this.T.get(s),r=this.D.get(n);return this.P({cacheKey:s,cacheMode:r,event:t,integrity:i,plugins:e,url:n})});return await Promise.all(a),{updatedURLs:s.map(t=>t.url),notUpdatedURLs:n}}async activate(){const t=await self.caches.open(this.m),e=await t.keys(),s=new Set(this.M.values()),n=[];for(const i of e)s.has(i.url)||(await t.delete(i),n.push(i.url));return{deletedURLs:n}}async P({cacheKey:t,url:e,cacheMode:n,event:i,plugins:r,integrity:c}){const a=new Request(e,{integrity:c,cache:n,credentials:"same-origin"});let o,h=await E({event:i,plugins:r,request:a});for(const t of r||[])"cacheWillUpdate"in t&&(o=t);if(!(o?await o.cacheWillUpdate({event:i,request:a,response:h}):h.status<400))throw new s("bad-precaching-response",{url:e,status:h.status});h.redirected&&(h=await M(h)),await N({event:i,plugins:r,response:h,request:t===e?a:new Request(t),cacheName:this.m,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this.M}getCachedURLs(){return[...this.M.keys()]}getCacheKeyForURL(t){const e=new URL(t,location.href);return this.M.get(e.href)}async matchPrecache(t){const e=t instanceof Request?t.url:t,s=this.getCacheKeyForURL(e);if(s){return(await self.caches.open(this.m)).match(s)}}createHandler(t=!0){return async({request:e})=>{try{const t=await this.matchPrecache(e);if(t)return t;throw new s("missing-precache-entry",{cacheName:this.m,url:e instanceof Request?e.url:e})}catch(s){if(t)return fetch(e);throw s}}}createHandlerBoundToURL(t,e=!0){if(!this.getCacheKeyForURL(t))throw new s("non-precached-url",{url:t});const n=this.createHandler(e),i=new Request(t);return()=>n({request:i})}}let P;const C=()=>(P||(P=new T),P);const k=(t,e)=>{const s=C().getURLsToCacheKeys();for(const n of function*(t,{ignoreURLParametersMatching:e,directoryIndex:s,cleanURLs:n,urlManipulation:i}={}){const r=new URL(t,location.href);r.hash="",yield r.href;const c=function(t,e=[]){for(const s of[...t.searchParams.keys()])e.some(t=>t.test(s))&&t.searchParams.delete(s);return t}(r,e);if(yield c.href,s&&c.pathname.endsWith("/")){const t=new URL(c.href);t.pathname+=s,yield t.href}if(n){const t=new URL(c.href);t.pathname+=".html",yield t.href}if(i){const t=i({url:r});for(const e of t)yield e.href}}(t,e)){const t=s.get(n);if(t)return t}};let A=!1;function S(t){A||((({ignoreURLParametersMatching:t=[/^utm_/],directoryIndex:e="index.html",cleanURLs:s=!0,urlManipulation:n}={})=>{const i=f();self.addEventListener("fetch",r=>{const c=k(r.request.url,{cleanURLs:s,directoryIndex:e,ignoreURLParametersMatching:t,urlManipulation:n});if(!c)return;let a=self.caches.open(i).then(t=>t.match(c)).then(t=>t||fetch(c));r.respondWith(a)})})(t),A=!0)}const F=[],W={get:()=>F,add(t){F.push(...t)}},j=t=>{const e=C(),s=W.get();t.waitUntil(e.install({event:t,plugins:s}).catch(t=>{throw t}))},B=t=>{const e=C();t.waitUntil(e.activate())};t.CacheFirst=class{constructor(t={}){this.m=w(t.cacheName),this.C=t.plugins||[],this.k=t.fetchOptions,this.A=t.matchOptions}async handle({event:t,request:e}){"string"==typeof e&&(e=new Request(e));let n,i=await b({cacheName:this.m,request:e,event:t,matchOptions:this.A,plugins:this.C});if(!i)try{i=await this.S(e,t)}catch(t){n=t}if(!i)throw new s("no-response",{url:e.url,error:n});return i}async S(t,e){const s=await E({request:t,event:e,fetchOptions:this.k,plugins:this.C}),n=s.clone(),i=N({cacheName:this.m,request:t,response:n,event:e,plugins:this.C});if(e)try{e.waitUntil(i)}catch(t){}return s}},t.CacheableResponsePlugin=class{constructor(t){this.cacheWillUpdate=async({response:t})=>this.F.isResponseCacheable(t)?t:null,this.F=new v(t)}},t.ExpirationPlugin=class{constructor(t={}){var e;this.cachedResponseWillBeUsed=async({event:t,request:e,cacheName:s,cachedResponse:n})=>{if(!n)return null;const i=this.W(n),r=this.j(s);d(r.expireEntries());const c=r.updateTimestamp(e.url);if(t)try{t.waitUntil(c)}catch(t){}return i?n:null},this.cacheDidUpdate=async({cacheName:t,request:e})=>{const s=this.j(t);await s.updateTimestamp(e.url),await s.expireEntries()},this.B=t,this.N=t.maxAgeSeconds,this.H=new Map,t.purgeOnQuotaError&&(e=()=>this.deleteCacheAndMetadata(),p.add(e))}j(t){if(t===w())throw new s("expire-custom-caches-only");let e=this.H.get(t);return e||(e=new R(t,this.B),this.H.set(t,e)),e}W(t){if(!this.N)return!0;const e=this.I(t);return null===e||e>=Date.now()-1e3*this.N}I(t){if(!t.headers.has("date"))return null;const e=t.headers.get("date"),s=new Date(e).getTime();return isNaN(s)?null:s}async deleteCacheAndMetadata(){for(const[t,e]of this.H)await self.caches.delete(t),await e.delete();this.H=new Map}},t.StaleWhileRevalidate=class{constructor(t={}){if(this.m=w(t.cacheName),this.C=t.plugins||[],t.plugins){const e=t.plugins.some(t=>!!t.cacheWillUpdate);this.C=e?t.plugins:[O,...t.plugins]}else this.C=[O];this.k=t.fetchOptions,this.A=t.matchOptions}async handle({event:t,request:e}){"string"==typeof e&&(e=new Request(e));const n=this.S({request:e,event:t});let i,r=await b({cacheName:this.m,request:e,event:t,matchOptions:this.A,plugins:this.C});if(r){if(t)try{t.waitUntil(n)}catch(i){}}else try{r=await n}catch(t){i=t}if(!r)throw new s("no-response",{url:e.url,error:i});return r}async S({request:t,event:e}){const s=await E({request:t,event:e,fetchOptions:this.k,plugins:this.C}),n=N({cacheName:this.m,request:t,response:s.clone(),event:e,plugins:this.C});if(e)try{e.waitUntil(n)}catch(t){}return s}},t.cleanupOutdatedCaches=function(){self.addEventListener("activate",t=>{const e=f();t.waitUntil((async(t,e="-precache-")=>{const s=(await self.caches.keys()).filter(s=>s.includes(e)&&s.includes(self.registration.scope)&&s!==t);return await Promise.all(s.map(t=>self.caches.delete(t))),s})(e).then(t=>{}))})},t.clientsClaim=function(){self.addEventListener("activate",()=>self.clients.claim())},t.precacheAndRoute=function(t,e){!function(t){C().addToCacheList(t),t.length>0&&(self.addEventListener("install",j),self.addEventListener("activate",B))}(t),S(e)},t.registerRoute=function(t,e,n){let c;if("string"==typeof t){const s=new URL(t,location.href);c=new i(({url:t})=>t.href===s.href,e,n)}else if(t instanceof RegExp)c=new r(t,e,n);else if("function"==typeof t)c=new i(t,e,n);else{if(!(t instanceof i))throw new s("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});c=t}return h().registerRoute(c),c},t.skipWaiting=function(){self.addEventListener("install",()=>self.skipWaiting())}}));
//# sourceMappingURL=workbox-3cee46ca.js.map
