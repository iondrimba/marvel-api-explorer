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
    "url": "app.9a44af7e178d226d1afe.js",
    "revision": "dcc8c069a847c2ea31aca58e1c0cc112"
  },
  {
    "url": "css/app.9a44af7e178d226d1afe.css",
    "revision": "b565d8842c3bacf4ebe82408ca95c123"
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
    "revision": "2b297579567258ddbefa85fec99ad18d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https:\/\/gateway.marvel.com\/v1\/public\/.+/, workbox.strategies.cacheFirst({ "cacheName":"api-cache", plugins: [new workbox.expiration.Plugin({"maxEntries":20,"maxAgeSeconds":36000,"purgeOnQuotaError":false}), new workbox.cacheableResponse.Plugin({"statuses":[0,200]})] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/gateway.marvel.com\/v1\/public\/.+/, workbox.strategies.staleWhileRevalidate({ plugins: [new workbox.cacheableResponse.Plugin({"statuses":[0,200]})] }), 'GET');
