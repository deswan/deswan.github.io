importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1e98b81571fe8405f8a9.js",
    "revision": "327c646a90b6514f3aa974937c086bbe"
  },
  {
    "url": "/_nuxt/2615ea6dae6261ab330f.js",
    "revision": "691fb5e0a3b8f86740201159ec6a2023"
  },
  {
    "url": "/_nuxt/34c503fd44c7e0dcbe69.js",
    "revision": "ad0129224448423e01f949d6550f5779"
  },
  {
    "url": "/_nuxt/7b9120f70c8290895c94.js",
    "revision": "7a8f679277c76bdcaa0ee12388bb6445"
  },
  {
    "url": "/_nuxt/c1455622d84ab8681b62.js",
    "revision": "5a23315e108a5add7313bcadd21d9e90"
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
