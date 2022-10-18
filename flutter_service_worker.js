'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "980547175e325fe622a3362b84d55b6a",
"index.html": "7ed526a5e96ab9c77a5ce2678109ded4",
"/": "7ed526a5e96ab9c77a5ce2678109ded4",
"main.dart.js": "b716bba010b96876f5e1c72dd7cbd186",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "90c454c29b48f08bc06627d125f70466",
"assets/AssetManifest.json": "9434f444f14fa545719a98edc3cf26a3",
"assets/NOTICES": "bef7e76de2dd34a31b8f7cfa88fba4ba",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/landing_page.jpg": "e0cd7f3c08b47718f3f68d039e6fb2fc",
"assets/assets/images/property_page/outside/garden/1.jpeg": "ce24e8d165a5ca3fd3066bf3a40533a9",
"assets/assets/images/property_page/outside/garden/2.jpeg": "a7f4b3db2bb55bb96a9250f6c61fc25b",
"assets/assets/images/property_page/outside/garden/3.jpeg": "b893cdd6b9dfdc6c68a06f1896103e34",
"assets/assets/images/property_page/outside/living_room/1.jpeg": "510e401ab4b6ff1c95ec4fb3d70dc287",
"assets/assets/images/property_page/outside/swimming_pool/1.jpeg": "b1d78d63fcd6de34cf1229473c640979",
"assets/assets/images/property_page/outside/swimming_pool/4.jpeg": "5bfb20c3d3f114edb0161a13896c5b14",
"assets/assets/images/property_page/outside/swimming_pool/2.jpeg": "a6bf0f808a09ef37db86798040bd2c97",
"assets/assets/images/property_page/outside/swimming_pool/3.jpeg": "064e788b059fc19b728ef32e4e5be1fe",
"assets/assets/images/property_page/outside/terrasse/1.jpeg": "638f5d5c636d713172f500ddfe3b50c5",
"assets/assets/images/property_page/outside/terrasse/2.jpeg": "36254855cb5f3f742c48c8cf3d212587",
"assets/assets/images/property_page/first_floor/master_bedroom/1.jpeg": "c206e9d9390f4a8317e8fb57b05b1bf8",
"assets/assets/images/property_page/first_floor/master_bedroom/2.jpeg": "8e3f49eb7deafb790a0c82543396393a",
"assets/assets/images/property_page/first_floor/master_bedroom/3.jpeg": "0d2904f574d9e92443bf1e22552aaba6",
"assets/assets/images/property_page/first_floor/patio/1.jpeg": "617c943553975ef46151f87336273701",
"assets/assets/images/property_page/first_floor/patio/2.jpeg": "b3669215a960239e9513194d96f43661",
"assets/assets/images/property_page/ground_floor/living_room/1.jpeg": "82e3399926de966b7acdcc03fea117b6",
"assets/assets/images/property_page/ground_floor/living_room/2.jpeg": "0ab8d1fb28f9a959051c7c6d6e9c9ef6",
"assets/assets/images/property_page/ground_floor/wet_room/1.jpeg": "2c91b9f55d9b4ac5437a2cd55408888d",
"assets/assets/images/property_page/ground_floor/wet_room/2.jpeg": "5a1b7ae1def07e9dbd2c53f17b41e9a3",
"assets/assets/images/property_page/ground_floor/kitchen/1.jpeg": "e58a23f051edac154dd80ff3d3bfb2e8",
"assets/assets/images/property_page/ground_floor/kitchen/2.jpeg": "386c48d2806cb4ffeb84eae2702e6dea",
"assets/assets/images/property_page/ground_floor/second_bedroom/1.jpeg": "3e3421cb641e5e2fd3c25bfae6206a82",
"assets/assets/images/property_page/ground_floor/second_bedroom/2.jpeg": "4c61033566c178b98b634d5105060428",
"assets/assets/images/property_page/ground_floor/second_bedroom/3.jpeg": "af5947344b08e3001ecbb01dfdecc1fb",
"assets/assets/images/property_page/ground_floor/first_bedroom/1.jpeg": "f41095221f834732aecd18f73379ab45",
"assets/assets/images/property_page/ground_floor/first_bedroom/2.jpeg": "e38469813cd055aa35a25d557971674d",
"assets/assets/images/location/island.jpg": "50c27368a36b5236fb0c08b6f8ca9ef2",
"assets/assets/images/location/vue_ciel.jpg": "7ef8214db1157219b2c278c1968089fb",
"assets/assets/images/location/house_overview.jpg": "3d45617b5dea9dc2b9bff965dab90f3a",
"assets/assets/images/location/vue_ciel_2.JPG": "237692caf692ef61a85a085718dbd0f6",
"assets/assets/images/map.png": "c2d43b6991abd013c3b0ca19bcc8adb2",
"assets/assets/images/logo_vague.png": "5dc558564e555572f54800db8786d2d1",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
