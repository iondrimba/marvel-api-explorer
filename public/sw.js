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

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "api-service-worker.js",
    "revision": "c19af7b2910f8bbf1cd5543701c7ea75"
  },
  {
    "url": "app.6aceedc153ece7eed9f1.js",
    "revision": "0fef369222dc1d712ad39c65f14570f1"
  },
  {
    "url": "app.c600a0e14c02d4894886.js",
    "revision": "ccf8a19e8a0711976dae4f7918bf7bc6"
  },
  {
    "url": "css/app.6aceedc153ece7eed9f1.css",
    "revision": "defff4b92aee3a472c148bd57f4053ee"
  },
  {
    "url": "css/app.c600a0e14c02d4894886.css",
    "revision": "e26181a6450cc629a96b8b8782f16e3e"
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
    "url": "images/lazy.png",
    "revision": "f60e4551e4add244492a1eda0f71c2e6"
  },
  {
    "url": "images/marvel.svg",
    "revision": "a857de2a371a6b92bccc91e724b1a00d"
  },
  {
    "url": "images/search.svg",
    "revision": "de5d7f019aae630499fa25b5a9b37d20"
  },
  {
    "url": "index.html",
    "revision": "1c63dcc64df76152811822e5210c77cf"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/iondrimbafilho/, workbox.strategies.cacheFirst({ plugins: [new workbox.expiration.Plugin({"maxEntries":20})] }), 'GET');
