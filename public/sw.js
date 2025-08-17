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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "289.1d43c609c894bd6b91dc.js",
    "revision": "0ea11b46301c591a29d7c58576b41a09"
  },
  {
    "url": "577.1d43c609c894bd6b91dc.js",
    "revision": "4f84a27c44f73fcba43f9e69bda84098"
  },
  {
    "url": "76.1d43c609c894bd6b91dc.js",
    "revision": "3e614050b1177cbf94b12287d18ff703"
  },
  {
    "url": "788.1d43c609c894bd6b91dc.js",
    "revision": "6c23cce13cee9316e8fe4970c24d76ac"
  },
  {
    "url": "app.1d43c609c894bd6b91dc.js",
    "revision": "656097b08d79622bddafa968646339f5"
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
    "revision": "bd05c8fe46ccfe09c8c29b118968bbb9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/https\:\/\/gateway\.marvel\.com\/v1\/public\/.+/g, workbox.strategies.cacheFirst({ "cacheName":"api-cache", plugins: [new workbox.expiration.Plugin({"maxEntries":20,"maxAgeSeconds":36000,"purgeOnQuotaError":false}), new workbox.cacheableResponse.Plugin({"statuses":[0,200]})] }), 'GET');
workbox.routing.registerRoute(/https\:\/\/gateway\.marvel\.com\/v1\/public\/.+/g, workbox.strategies.staleWhileRevalidate({ plugins: [new workbox.cacheableResponse.Plugin({"statuses":[0,200]})] }), 'GET');
