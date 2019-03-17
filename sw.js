importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/5c7f97449b96e013f573.js",
    "revision": "9a3766b2e2ffeb1fdc11f5e2dae5ff95"
  },
  {
    "url": "/_nuxt/7548ea7a82d21d6faea9.js",
    "revision": "c960212201cc5f249b30e6ee7dd250ef"
  },
  {
    "url": "/_nuxt/9f022acc6c3c9c9b017b.js",
    "revision": "75b2acd901842f277867ad88e51da492"
  },
  {
    "url": "/_nuxt/f22170aca97fcfd26471.js",
    "revision": "ae495d9c7b086998109ba65d1156e533"
  },
  {
    "url": "/_nuxt/f37211869a9ce70f791e.js",
    "revision": "b7350bc75c86e75cc1bb66a7c8f4a60e"
  }
], {
  "cacheId": "star_blog",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
