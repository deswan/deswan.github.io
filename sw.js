importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/5c3873253e61cf89dafc.js",
    "revision": "404d70e73f8494dad369b8b88eeac471"
  },
  {
    "url": "/_nuxt/7e5bc1f92898fa1790e7.js",
    "revision": "2d9ef77563d3112c225dd78debbbc7cc"
  },
  {
    "url": "/_nuxt/944a63902cd72f03102d.js",
    "revision": "86be1c4118b403bcd0a9500c9731edd5"
  },
  {
    "url": "/_nuxt/b9fbefe8b023fdf63743.js",
    "revision": "e93e36a767dd68d5fb7ec6473d5d304d"
  },
  {
    "url": "/_nuxt/f2a175f0c9b27ce0ea03.js",
    "revision": "15c60eac4254e1af1d54563d0c4f265e"
  }
], {
  "cacheId": "nuxt-app",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
