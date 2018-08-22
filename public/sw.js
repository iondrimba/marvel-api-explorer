/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.0.1/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "app.9662ac5a209dff34088c.js",
    "revision": "85df7c1929a768785732f656ff26935a"
  },
  {
    "url": "app.b64e36cfe93da4a5cc99.js",
    "revision": "4df788b80f8044037f689500a6404b5c"
  },
  {
    "url": "css/app.2ca7c9ec4e268d795144.css",
    "revision": "defff4b92aee3a472c148bd57f4053ee"
  },
  {
    "url": "css/app.9662ac5a209dff34088c.css",
    "revision": "defff4b92aee3a472c148bd57f4053ee"
  },
  {
    "url": "css/app.b64e36cfe93da4a5cc99.css",
    "revision": "c0cceb67d98f516150e849b16d07da22"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "7a324696bac2179e5a87582d7797b68d"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "c66e8b48a64e7947c8ed8bbdd8d7e95a"
  },
  {
    "url": "favicon-48x48.png",
    "revision": "2c8880ad2c012f2878948f46b284c34c"
  },
  {
    "url": "fonts/font.woff",
    "revision": "45b47f3e9c7d74b80f5c6e0a3c513b23"
  },
  {
    "url": "images/close.svg",
    "revision": "e7fb89851b79caec1094b297281ca19b"
  },
  {
    "url": "images/dots.svg",
    "revision": "7a65bac3468694a5a94778facf6ea5c6"
  },
  {
    "url": "images/github.svg",
    "revision": "e7d72920af474a25295eb7acdcd2aaed"
  },
  {
    "url": "images/icons/android-chrome-192x192.png",
    "revision": "7ffcc997fef6a6810fe03b24d79d1df1"
  },
  {
    "url": "images/icons/android-chrome-512x512.png",
    "revision": "d093c53c0b7d576869df568db2e32178"
  },
  {
    "url": "images/icons/apple-touch-icon.png",
    "revision": "d46b6a002563db406604c760bea1b85f"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "e7addd9b0c77a62320dfd4d52c555003"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "fd09ca0cbf28da5c1fe9d5fd17f15433"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "f2fd8c0d5cf5587698f8c9db7598ab07"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "48332fbe37cbe353d3abd319410997a7"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "d29b4808698e5ca43cbfc0dbf549da97"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "708b50e8d05b9d864310d3f09c445694"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "b1ecf54eeae2f93bd951a515ebdf6958"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "ac787a6a7d768852bb36e79303d7ea76"
  },
  {
    "url": "images/icons/mstile-150x150.png",
    "revision": "402567686379faab361e62c6f1ae8f80"
  },
  {
    "url": "images/icons/safari-pinned-tab.svg",
    "revision": "9485bad24d046e48791ee8fe251ca808"
  },
  {
    "url": "images/lazy.png",
    "revision": "f60e4551e4add244492a1eda0f71c2e6"
  },
  {
    "url": "images/marvel.svg",
    "revision": "a857de2a371a6b92bccc91e724b1a00d"
  },
  {
    "url": "images/missing-full.jpg",
    "revision": "a277f6f550d9ba17a857452e9a236ab4"
  },
  {
    "url": "images/missing.28e292edf119941c9665e1ddb6a366b9.jpg",
    "revision": "28e292edf119941c9665e1ddb6a366b9"
  },
  {
    "url": "images/missing.9381f1bb6f2919c5b82e94613b238f8e.jpg",
    "revision": "9381f1bb6f2919c5b82e94613b238f8e"
  },
  {
    "url": "images/missing.jpg",
    "revision": "5ae3111e7158f65bb6651ebce598ac77"
  },
  {
    "url": "images/search.svg",
    "revision": "de5d7f019aae630499fa25b5a9b37d20"
  },
  {
    "url": "index.html",
    "revision": "bcb75a2e475b26858614714aaa542927"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https:\/\/gateway.marvel.com\/v1\/public\/.+/, workbox.strategies.cacheFirst({ cacheName: "api-cache", plugins: [new workbox.expiration.Plugin({"maxEntries":20,"maxAgeSeconds":36000}), new workbox.cacheableResponse.Plugin({"statuses":[0,200]})] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/gateway.marvel.com\/v1\/public\/.+/, workbox.strategies.staleWhileRevalidate({ plugins: [new workbox.cacheableResponse.Plugin({"statuses":[0,200]})] }), 'GET');
