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
    "url": "1.32a2086137f4aafaa315.js",
    "revision": "5b3bba633b53dccf813d5c5635f18851"
  },
  {
    "url": "2.32a2086137f4aafaa315.js",
    "revision": "e37e0cd975a53a19afcaee38c7bda46b"
  },
  {
    "url": "3.32a2086137f4aafaa315.js",
    "revision": "23ee7b1f529097b4ceeea73081aacf54"
  },
  {
    "url": "app.32a2086137f4aafaa315.js",
    "revision": "ef77dad4bd2497b243df35bbfbb401a2"
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
    "revision": "707e5e2f57865d2ae0142d564391cc59"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https:\/\/gateway.marvel.com\/v1\/public\/.+/, workbox.strategies.cacheFirst({ "cacheName":"api-cache", plugins: [new workbox.expiration.Plugin({"maxEntries":20,"maxAgeSeconds":36000,"purgeOnQuotaError":false}), new workbox.cacheableResponse.Plugin({"statuses":[0,200]})] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/gateway.marvel.com\/v1\/public\/.+/, workbox.strategies.staleWhileRevalidate({ plugins: [new workbox.cacheableResponse.Plugin({"statuses":[0,200]})] }), 'GET');
