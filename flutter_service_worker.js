'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "8be9ddc2b6dd38232605c73b8e6ff644",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "d311717fe8111018a9c13b19358b9def",
"/": "d311717fe8111018a9c13b19358b9def",
"main.dart.js": "51d44fdf9863ab846205d84cdcb64307",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"assets/AssetManifest.json": "3952c077e818bf4b00a505ef84d67a15",
"assets/NOTICES": "427e7f855120b8e33e5fb1679ad7e3a1",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "7649a1522c3c80dfbe0ae0da3e4c463c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "7386c46290cd758145fe52d56e118b19",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "b70ccf6f1e4435bd08808199af3f7fa2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a5498649f1a0c49f2f26b6a0f4e377b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "f1cdc1536d420fa6322e90f303e4c26e",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/images/projects/classcube/img_1.png": "f8049286417e812273964ffc17effc4e",
"assets/assets/images/projects/classcube/img_2.png": "96ec2c02089e58b5c18a5629389d1a47",
"assets/assets/images/projects/schoolcube/img_1.png": "5212dad83142be6c5d708e4a00ed827e",
"assets/assets/images/projects/schoolcube/img_2.png": "40deb04ce57492a5cee1e3e2626d480b",
"assets/assets/images/projects/schoolcube/img_3.jpg": "b92fd7ad9b163656ed00ffe408342368",
"assets/assets/images/projects/joo247/img_1.png": "9cf1dc697cf1d8c46f20cd35e7c840d1",
"assets/assets/images/projects/joo247/img_2.png": "961afe44c0b09e4b4bb69e87c938690d",
"assets/assets/images/projects/joo247/img_3.jpg": "c3ec24154a62421504139a9c639deb42",
"assets/assets/images/projects/sendforce/img_1.jpg": "d58712accfbcaffd19f5b0471f45a6b9",
"assets/assets/images/projects/schoolteller/img_1.png": "094fa1ae141aae0d2e7b709d3fc4fbb9",
"assets/assets/images/projects/examcentre/img_1.png": "d6212eb7506b6a6c37617706f1ae59ba",
"assets/assets/images/projects/examcentre/img_2.png": "9e841c53265a03891295dfc93e87c4d6",
"assets/assets/images/projects/examcentre/img_3.png": "3e6ca099b330c622d9fa1cff0e6c0464",
"assets/assets/images/projects/examcentre/img_4.png": "69f3dc226eca134a6b82e53a9ec835ff",
"assets/assets/images/projects/examcentre/img_5.png": "82969fbcf98226560169368379197562",
"assets/assets/images/projects/portfolio/img_1.png": "736067c93fac521aebf0e332b67d0d3b",
"assets/assets/images/projects/handyjack/img_1.png": "d3ccd45a2b5a334c5fd2d59adde800c2",
"assets/assets/images/projects/handyjack/img_2.png": "c937cca3b234758a6bd254aa7af4e0a7",
"assets/assets/images/projects/handyjack/img_3.png": "319ce9edf46813377bb73ff8c46168b2",
"assets/assets/images/projects/audio_x/img_1.png": "d88adbe39f42453d2a0ed1a7e1180c36",
"assets/assets/images/projects/unit_converter/img_1.png": "65eb7ba220b1fa4bc894621b2d98db91",
"assets/assets/images/projects/unit_converter/img_2.png": "75abc4ee95852f71dba4632386ff1cae",
"assets/assets/images/projects/unit_converter/img_3.png": "16e01c7f58e691fb3f2475e470813d5d",
"assets/assets/images/projects/pau/img_1.jpg": "97398a7e9be6fef7f03b615a0c6c30fd",
"assets/assets/images/photo.jpeg": "9848660c9a40b664805ccc2b7078406c",
"assets/assets/images/photo4.jpg": "e177bca2c2476bc4e7e87e495272ef90",
"assets/assets/images/photo2.jpg": "da8b42638cbf4760bf61d873c1f87a57",
"assets/assets/images/photo3.jpg": "a494ed004581ed8d605b9a69b94e94e1",
"assets/assets/icons/git.png": "728ff5a8e44d74cd0f2359ef0a9ec88a",
"assets/assets/icons/docker.png": "3f7967d5a59d54766bd834febd1933c8",
"assets/assets/icons/flutter.png": "3c19844633ad2f6a5de4c1dc280481fd",
"assets/assets/icons/dart.webp.png": "60fbd31aec7b4a720354e75682f53901",
"assets/assets/icons/terminal.png": "b64a94b86afbdce72ce1a0681c921fbc",
"assets/assets/icons/rust_2.png": "d5fecb8dec83c7d87df23656f61a51e5",
"assets/assets/icons/github.png": "bb04d77a846e6beca811c4be1d8e3442",
"assets/assets/icons/firebase.png": "6dd1317e00d3a9e4268daafdd5e905f9",
"assets/assets/icons/bitbucket.png": "56a98d8e963d3e6b6624d17b9b1f0300",
"assets/assets/icons/rust.png": "515a43c6967ad907bf257ebabd71d107",
"assets/assets/icons/js.png": "63cf9c6f8153aef1e884b7ae2815e06d",
"assets/assets/icons/node.png": "55e83371dbf50a5f027b1fe31a054ad3",
"assets/assets/icons/solana.png": "0d8e9a185773da474955639b5fc82808",
"assets/assets/icons/mysql.png": "754e01e49836a295574661a188161775",
"assets/assets/icons/postman.png": "6223e02f9e368f8e2a517d5d1bd841dd",
"assets/assets/icons/mongodb.webp.png": "d52033eb2ea7135344ecfae9f871cb3f",
"assets/assets/icons/php.png": "725d1eb392503fd5c39abba6fb17bd29",
"assets/assets/icons/docker.webp.png": "3032383b854124e981bae60d04456a71",
"assets/assets/animations/api.zip": "e30faafbac30a4781aea12f94867a956",
"assets/assets/animations/blockchain.json": "4c4367c0ac7fec75d1a78b66acb64f6d",
"assets/assets/animations/app_dev.json": "b8592806799a867df529988bd6be4834",
"assets/assets/animations/code.zip": "e3f0989fbe2f8d08e23966159977dfdd",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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