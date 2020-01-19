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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1.db7bb0d7b2ae2ebb38cc.js",
    "revision": "4718c6937b46e860204e89192cf92b2c"
  },
  {
    "url": "2.db7bb0d7b2ae2ebb38cc.js",
    "revision": "5f682630ba935747c8ea751a9e1c262e"
  },
  {
    "url": "3.db7bb0d7b2ae2ebb38cc.js",
    "revision": "c28cc9f2a9bbca2590e3350f2e08767d"
  },
  {
    "url": "app.db7bb0d7b2ae2ebb38cc.js",
    "revision": "6f74a033719802e8998035242d2dcdf3"
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
    "revision": "9524eabbca5125c6c23de2cebe1853d0"
  },
  {
    "url": "images/github.svg",
    "revision": "bd666487a62742a3d09429cbcb14a0cd"
  },
  {
    "url": "images/icons/safari-pinned-tab.svg",
    "revision": "9485bad24d046e48791ee8fe251ca808"
  },
  {
    "url": "images/marvel.svg",
    "revision": "3cb51f0cad379a7e38170621aa653d75"
  },
  {
    "url": "images/search.svg",
    "revision": "de5d7f019aae630499fa25b5a9b37d20"
  },
  {
    "url": "index.html",
    "revision": "a1cd2da1c6688e3ab27aa10302478b62"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.precaching.cleanupOutdatedCaches();

workbox.routing.registerRoute(/^https:\/\/gateway.marvel.com\/v1\/public\/.+/, new workbox.strategies.CacheFirst({ "cacheName":"api-cache", plugins: [new workbox.expiration.Plugin({ maxEntries: 20, maxAgeSeconds: 36000, purgeOnQuotaError: false }), new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/gateway.marvel.com\/v1\/public\/.+/, new workbox.strategies.StaleWhileRevalidate({ plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] })] }), 'GET');
