'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "980547175e325fe622a3362b84d55b6a",
"index.html": "bb304c8c2c5ee45c9e3d2bdbd3ae7f9b",
"/": "bb304c8c2c5ee45c9e3d2bdbd3ae7f9b",
"main.dart.js": "669d858f758ae4215a5f7bcfe7254334",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "90c454c29b48f08bc06627d125f70466",
"assets/AssetManifest.json": "76d5699bd0ffe67854cc02c20a04b86b",
"assets/NOTICES": "bef7e76de2dd34a31b8f7cfa88fba4ba",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/landing_page.jpeg": "faa3c7ac40bc693b2058ec2ee6282a26",
"assets/assets/images/property_page/outside/garden/1.jpeg": "527bf27b88e24d613d2f882eaa872d86",
"assets/assets/images/property_page/outside/garden/2.jpeg": "875babf1991f074afe8310ea7cd3f710",
"assets/assets/images/property_page/outside/garden/3.jpeg": "186b4dce809ac4312555297432cc7307",
"assets/assets/images/property_page/outside/living_room/1.jpeg": "52702c6b7598f674b97a75cf0b94210b",
"assets/assets/images/property_page/outside/swimming_pool/1.jpeg": "235656eb65499a9e69d22ddeb046ffb6",
"assets/assets/images/property_page/outside/swimming_pool/4.jpeg": "6dc1474eb18bbd58d2504ea1748a58ff",
"assets/assets/images/property_page/outside/swimming_pool/2.jpeg": "266c62d252fc37bd4f78cf1efef8c4d5",
"assets/assets/images/property_page/outside/swimming_pool/3.jpeg": "ef7243ab74602b10ea330982344051ab",
"assets/assets/images/property_page/outside/terrasse/1.jpeg": "2222d64af7a359660f762483867e0fd5",
"assets/assets/images/property_page/outside/terrasse/2.jpeg": "5a1c90fc00b616356ea2db79bedb7ba6",
"assets/assets/images/property_page/first_floor/master_bedroom/1.jpeg": "24a595d7d22b597354ed2e78eadb1df5",
"assets/assets/images/property_page/first_floor/master_bedroom/2.jpeg": "2787f4463ebb25a10614a51d5ce00212",
"assets/assets/images/property_page/first_floor/master_bedroom/3.jpeg": "d7f06fa877563732c6c7c3b7fc7cc230",
"assets/assets/images/property_page/first_floor/patio/1.jpeg": "3c65a25e715e5f59652586ff3a5ec55b",
"assets/assets/images/property_page/first_floor/patio/2.jpeg": "aec54adaf97d335b13b4a54762f774b5",
"assets/assets/images/property_page/ground_floor/living_room/1.jpeg": "c949d747b82701da961dd0042ada8b23",
"assets/assets/images/property_page/ground_floor/living_room/2.jpeg": "1391684ad70c55cf048caf50998c096a",
"assets/assets/images/property_page/ground_floor/wet_room/1.jpeg": "647d0f83521d56273152322aa1f1d592",
"assets/assets/images/property_page/ground_floor/wet_room/2.jpeg": "4f25cee381fcb45cd3fa89b7b3e348a8",
"assets/assets/images/property_page/ground_floor/kitchen/1.jpeg": "ce0e0df6a1ea741160a4e1456bdf823c",
"assets/assets/images/property_page/ground_floor/kitchen/2.jpeg": "2c6cff3f104145f07a6c8ef68948b0a1",
"assets/assets/images/property_page/ground_floor/second_bedroom/1.jpeg": "f290ff88a19db6d72f80378984241b72",
"assets/assets/images/property_page/ground_floor/second_bedroom/2.jpeg": "45756bb0fe6c2e542d40cfae9019429b",
"assets/assets/images/property_page/ground_floor/second_bedroom/3.jpeg": "b1847ce4269a328b8b8dd962cb6f48d5",
"assets/assets/images/property_page/ground_floor/first_bedroom/1.jpeg": "5d9b71d9143780ec5d8b31a83f51b8cd",
"assets/assets/images/property_page/ground_floor/first_bedroom/2.jpeg": "7e0c77056c7a17f0db3db59935b23596",
"assets/assets/images/location/vue_ciel.jpeg": "3a62df4fd49aa2481f09b417b95cde83",
"assets/assets/images/location/house_overview.jpeg": "c7acc4679bb2a037ffb5faeb1f0502cd",
"assets/assets/images/location/island.jpeg": "b54c9736c693e6209954dd1157e4c37c",
"assets/assets/images/map.jpeg": "6d73370c07e7d3ce7346ec82e25f543d",
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
