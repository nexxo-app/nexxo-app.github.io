'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"manifest.json": "b85882aa4691c74d7752c8fd32d45552",
"index.html": "87f5d47cfd61b63f5c45cbf6a458035b",
"/": "87f5d47cfd61b63f5c45cbf6a458035b",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"icons/Icon-512.png": "03fcb76d84554e9493c46c18d940261a",
"icons/Icon-maskable-512.png": "eaba247ccb0beed07ff46d7364d7eaaf",
"icons/Icon-maskable-192.png": "5c5a64bba17cff779e32efec57e76432",
"icons/Icon-192.png": "9648e1234f19855aa7aeb5ac58223024",
"main.dart.js": "f70da4edfe8b9f3cd455d1ea08408183",
"flutter_bootstrap.js": "3403af2699ab479fcbf9fca33e5cb62e",
"favicon.png": "dd955082a6d9f08e3e7e906ea64865af",
"version.json": "27f551671e2295bf5943077e11238187",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "9a381502e4b97ac233efb4436485ceaf",
".git/refs/heads/master": "9a381502e4b97ac233efb4436485ceaf",
".git/index": "99bf04f4c7bd4ec6014cf5cc35717b95",
".git/config": "5fd050e7b1fe675cdb0822b3adce7770",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/dd/db968e8167fc668874ddf41c4754b0af461597": "7ec77639c9b06295860942c824ad77e4",
".git/objects/36/c87e194e1537254f96cd8a5217c9445c02b5f1": "8705702c9e08f312d01df3a330ce3a1c",
".git/objects/f6/08cc56fbbdaf87f6a898345108f90b358f6a83": "2e110f448628d005e8da90a53f59b6b0",
".git/objects/7e/2e3959e00781b54f7d9b21b0b87b8b9945fef8": "1b7d6b995c4adc95dd44a0fbaf952f91",
".git/objects/59/e0671d0841fc23af4111d63eeba84aed5619d0": "86e60ba1eb43771b087d7d6b494f531e",
".git/objects/82/820a9bcb6cf7282f0ca41ed9f740e292c46072": "60fb842cb472c3e9f90fe7ea68938b8e",
".git/objects/89/81ae86552ca9a36e66dcf450f0481884732fe0": "c1d230745b1a4c3bb8e6371634910b2c",
".git/objects/7c/826592076515bffbdc2d29e0f5281f9e002aef": "ba9c65b978f79ade9e6f9dbe9db2bcb5",
".git/objects/3f/e7ffbd29eda233bd0c7804d81daf448c579d19": "8efa464c9a64880233f18cbdf5914770",
".git/objects/71/8f2af1fdbf90e1964e382a7971d44b087b9391": "691f05c3cc9ae00c43f9679de2c0a214",
".git/objects/54/d1f6be161de95c81473f073e925bfb929ed37f": "553b3ff26525aa1f5a763929fbd42384",
".git/objects/79/b512b1801ad7a817ff9690bc856b31c95cb5bb": "1ccde02b6bb24ee215448d3fe18ca3e7",
".git/objects/ba/a217877dac994730194e7270eafa1e3cd325f1": "ce0bec8218ac547e121a01874923f0e0",
".git/objects/d3/7163d1f1a23d0fdb4b1433b9447b0fcf84c976": "831a34df1572b2538eda225e9f959076",
".git/objects/94/4a14b6a87a9a201c482380e2f6099733d79fe6": "846819cc084b01c428d29cdf470a2033",
".git/objects/4d/5ed9ab712ea7c7442bd68544f307e9cb5f6d2e": "5053da20af27f0e51777b3de8f34878a",
".git/objects/6a/6e5d212e0fb1037278d4bdf04bdf2242aff388": "fe7cb22e44320d5d455f5fe3de2a8a08",
".git/objects/43/22b8643164ddee1c0c63f92a7005f3edbfacb6": "4a2866bf6dcf2f64d04d161052b819fc",
".git/objects/5e/a5e22de94552e09607bd75482f1131e360e9c3": "7120978eacb83e0f9fb439346e45e061",
".git/objects/1c/b2cc999ec5ae599d1cce7d00ee1f582bfd6e79": "d00c015d487cfe63ee82fadc4ee2cb06",
".git/objects/85/c9bc4c82e10770e0d90b31cdec608afdd180c8": "bfc733d84f8ec1b7effc7f0c0f27a296",
".git/objects/8f/a7e9d74d87dd7ecba6c8a6cafc93361a837d28": "ee724371122f5cf96ef2ea8988b59ec2",
".git/objects/3b/4d8236ceee709b0963b8ef31460cd59e81e794": "bd0eab0d071e343d9900494bbff2e680",
".git/objects/22/d27df8c5ed17bb16cfe92219f1c3df558b735c": "849ff65f04ddfa68cac253a6fd675567",
".git/objects/87/55ab5090195d0fb50b6b2c095702b556295649": "c73ac5656d58b269b06ed0e654ade264",
".git/objects/87/b7aa8c93270604d033091401b4a0b48a3217f5": "ece5fdd541f4205cfc44375965b9bb75",
".git/objects/a3/91d46ce9922ef650e4c4da8601031afb943144": "082661094e35b31d8e12db53b978d21f",
".git/objects/77/48636698b7d34be8826a02773697409db412ca": "3e79ffc978e2bef3a946273667516870",
".git/objects/a8/b5684c69c730b3023633dc848238aa7635c410": "7d663e18c1918036034e033278869c82",
".git/objects/1e/84bda807dfcd09c7b8cc22cbe18d494a9883f7": "9d001f5fb27a2a3a7cc48268222bf5f6",
".git/objects/28/9ded16036a65c61918ab10f3d8e83f6f9c4257": "8dda84b2dd26db7ae4835ff3d5a08fc3",
".git/objects/pack/pack-980746baffb8cadccbbdba89874c23df48aabab7.pack": "2a3df7e389e6d5a3daff7fbf2ea7182b",
".git/objects/pack/pack-980746baffb8cadccbbdba89874c23df48aabab7.rev": "ebc205bd87fb95b138ab8f9f7c8521e4",
".git/objects/pack/pack-980746baffb8cadccbbdba89874c23df48aabab7.idx": "987aabfa04f5699349e20b3a43c4059c",
".git/objects/41/083dd7c0394651a9d4f3c5d4666c1d703a2602": "94074236d3e9e77473621aa6bed1bc1a",
".git/objects/d9/db5d20d62b6fd14335649d313ca5d21995fc74": "b96900b1c88f2cecb5e5cc0ecace13ea",
".git/objects/5f/31bf6f2ff2cfb49763e2a60569a7c57d658a19": "28ca9ca964aa7570076a9e5378f3a576",
".git/objects/5f/cf0bde4c3a7451d505e95f869c423d5f8a7529": "e0b707183b7f084446c80df7b7a8ef42",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/logs/refs/remotes/origin/HEAD": "20bd6e1535032a2918396044e723bacf",
".git/logs/refs/remotes/origin/master": "d16292096eb65fdf814bd6189d08d656",
".git/logs/refs/heads/master": "8b2b0e98a97c2473c40bc6a114982374",
".git/logs/HEAD": "8b2b0e98a97c2473c40bc6a114982374",
".git/COMMIT_EDITMSG": "c7909a119a2b455d625accfc7abe3abb",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/FETCH_HEAD": "ddfb932ff2d5001945b46b9d098f70fb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/packed-refs": "a72ab6883d1a33c4b0b0e90949a8bda4",
"assets/AssetManifest.bin": "78055b2410721c78581a68add7724cb3",
"assets/fonts/MaterialIcons-Regular.otf": "604a141560298d5d0d5185ad2f8207d1",
"assets/assets/images/logo.png": "03fcb76d84554e9493c46c18d940261a",
"assets/assets/sounds/expense.mp3": "996318efd5c90fd7c3fb1929ae276f91",
"assets/assets/sounds/success.mp3": "7a15084c22d931c2a4696d49797d091d",
"assets/assets/sounds/income.mp3": "5e3d7f4c0db431f7d7f0f3d3cf72d4dd",
"assets/assets/sounds/delete.mp3": "996318efd5c90fd7c3fb1929ae276f91",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/NOTICES": "a99e30971ac5f200bcda03d6008b2afe",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "41039abc31d47e697eb51f68c9949e7a"};
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
