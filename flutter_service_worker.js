'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "27a903529c8a91db6e9e0a0a1ac7675f",
".git/config": "7ef0b30d32f1fe863316dab9798d615b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "0a79f6be046c4187a8c43142ad4d3a5d",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9aaa6a83787ba480c9e7dbaaa0a9ad52",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d21a8b005647561edec0ede33e373269",
".git/logs/refs/heads/master": "d21a8b005647561edec0ede33e373269",
".git/logs/refs/remotes/origin/HEAD": "7db67a3cf600f81e43a748d8496ab844",
".git/logs/refs/remotes/origin/master": "38eb3c405a2da25bf181178fd9b62b48",
".git/objects/0b/519902ba9f36c62a1adafc37f0916bf1a37e7d": "e7116af9c4ee89131166c50a088f4f92",
".git/objects/14/9eecbd8913539b4ff5b5f5ebb9a75da94aa3a2": "425e01cf49403364b454f361e8ca5d6e",
".git/objects/17/331c39976a9af1406fc6d00125b04a44a23b21": "6347fad57ff8de47862c95575f12a4a9",
".git/objects/18/c87bfc5f6c1a1e3fdd76d53cc78787da05e3d0": "df0d090547c40cc7fbf7ee6e2623589f",
".git/objects/1b/67f3c0ea4ef3ab87ccb19277b4508ba2b9be5d": "212948f2b5bd3c83e2288f102219f604",
".git/objects/20/ccfe353a7cc1b1cdd47540c2b86f5b0b27c071": "573da9c0f01679d7aebae9fc3a99e5b3",
".git/objects/33/e314096dc4f4026c1fc875d09bc04de9121567": "0f2cd0b8ef716b5bcba15404dea3912d",
".git/objects/38/77ed0145a8be1ed2da4ae87a7d6bdd8a726e88": "f2e757683014f838f4899b168961120b",
".git/objects/39/541caa7b415dd8a9edc5b0f4007b111e0106b9": "6d0fe5330388d08ce403c216f196ce48",
".git/objects/3c/963a74b40ecc1540d0c4eeffdb6dede33199d2": "d7db04c209b675c824a764abe109599a",
".git/objects/40/c0770739d65921cb6a8fa92c731ebfc28ea791": "770da9f80e709d36bc8c540b64749615",
".git/objects/4f/88767cc0932ca2fb4916cbde40b8132f6ba1ec": "bdc744bc5a3f1b7db3c141ea21d38830",
".git/objects/5f/5215684312b2ae689199b3371c5458b567417c": "76578c1c34329ea294d45ce25918696f",
".git/objects/60/1734e0bddd082d5955ace139837a499cab7ced": "0133a004a08f480568cb8121ee22e071",
".git/objects/61/a9046a2077bc0e1aa6c114e0cbcb382b0084f1": "f1ee9172554b9fbae14df674c9a1ee60",
".git/objects/62/5ea2ccc6f4901e81c58de314ae1ff46cb1ce52": "3faea640e76288cf195e8cf472191a65",
".git/objects/74/8e8a82b2dc0194dc519bf25fa79a32ace27498": "1d7fa2914aaf2c56166bdc0288c1c42f",
".git/objects/84/7d435ade4911608d10375fbe8b893da9405092": "25ca6ef0238c47a790d29b6dddaea343",
".git/objects/8f/f76c1f8ea417db223a3bb455f15cd503ecca4d": "11e8e0106634c8d278505cee61cbb2a8",
".git/objects/90/3be568c395692cc7728dd58770aa4920084b79": "0ee468a1f234488b8209d5e722e7a181",
".git/objects/a8/699311550e0a4df0349db5cea1c1dd8a5d01bf": "284a30a6c6516d2540cea490458cb2b6",
".git/objects/a9/816f5c2c7e9dd66471c400f63304194fe9ff38": "335951452d7da9688ad16270d8cf14b5",
".git/objects/ae/612a3004e0a193d5734c3d307b8ec6895ff132": "4a3ef82137b082f4cc867c6995225ff7",
".git/objects/af/b2642d3361c6a00a1331756d13373e671fec09": "ee5df400ddac7af3f574425b4dcc60b8",
".git/objects/b3/643eba6136c3a6d67b7130c6eb32f9837f6503": "5e5ccc53d6bc433820fc59b096c83a46",
".git/objects/b8/2de15d58f57cb6bcd8056bfafa9e45e00de893": "abac821d06fdd2ca27a888d8d4feb51b",
".git/objects/c1/66635d3e4962f34118c195d070009220146151": "25bfa2235a9e93f7ad11f1c11bdd47e1",
".git/objects/c7/deb0757bc1aaab55adc6550c78a4db18bb6f7a": "028f7911513cb290edd8a478c3b230ea",
".git/objects/ca/5e85541eb8133913f74c4872efd270db91ed71": "41220ae5a7cf9ab13297c9894b9a17d0",
".git/objects/cd/da133b546dd6caeb9d6bcd3be0c34091237c9a": "5a44c4ae0b0af4f55e540d2c0ee48eae",
".git/objects/cf/4af81bccfd898f7e5a5410c4acfc43787031bf": "8e650e6c27c4a0a191ec3b42ce7062a7",
".git/objects/d0/a731be268c1bf0f6e9d7831ddf0267ac839e9d": "a12418114f70552669dcd08d1752c42c",
".git/objects/d1/a3e56bfc434d3711b4d67b76a1e3ea7b11f94a": "77dd59fbee82f6a53ebf60a50416a59b",
".git/objects/d8/2af1b9385d141e0c9daa18af9a3063da595731": "9d162b782e4206d3afeea6bb75f50b0d",
".git/objects/d8/8f45d4009fe2e26d56bd192898e905c510ad56": "b50668f303ed7cfc509c935ecec518cb",
".git/objects/de/d77a7aa5318bf496429e5829ffbd5ec2eb6020": "7e92677ab068901aad759e188fed5ba3",
".git/objects/f4/c9fc6a9152abdc6aeb000cb6d7a77d9ea1668b": "5c7839e3db1e5e867860d78478dc1d8e",
".git/objects/fa/17316eb43bd434e3fc9b80f255f7eda4889b4f": "e00ef9c01682475ee410669e02085f51",
".git/objects/pack/pack-114a88783f32e38ffc4441c7b6221b2cf43cc82c.idx": "f923072e59c8b4f6b0d2c61cfa8d4832",
".git/objects/pack/pack-114a88783f32e38ffc4441c7b6221b2cf43cc82c.pack": "9068ce65738c79918ba7de80d5ded7ca",
".git/objects/pack/pack-114a88783f32e38ffc4441c7b6221b2cf43cc82c.rev": "b87a9b871a948ee9e29c311c2aac8578",
".git/ORIG_HEAD": "79b5659f7204b7de93ae2a9a70ca0803",
".git/refs/heads/master": "cb930929bd57bf4411d2cce8f2b41d02",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "cb930929bd57bf4411d2cce8f2b41d02",
"assets/AssetManifest.bin": "78055b2410721c78581a68add7724cb3",
"assets/AssetManifest.bin.json": "41039abc31d47e697eb51f68c9949e7a",
"assets/assets/images/logo.png": "03fcb76d84554e9493c46c18d940261a",
"assets/assets/sounds/delete.mp3": "996318efd5c90fd7c3fb1929ae276f91",
"assets/assets/sounds/expense.mp3": "996318efd5c90fd7c3fb1929ae276f91",
"assets/assets/sounds/income.mp3": "5e3d7f4c0db431f7d7f0f3d3cf72d4dd",
"assets/assets/sounds/success.mp3": "7a15084c22d931c2a4696d49797d091d",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "0c500c9030ed03845e1abe35e8b03e05",
"assets/NOTICES": "8b6e215e4a793040719f282194fa01ff",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "dd955082a6d9f08e3e7e906ea64865af",
"firebase-messaging-sw.js": "8ff9cfc54444663afc2f12287a6ea7b3",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "4ca5edf56429dea59ec3eb1597b72e6a",
"icons/Icon-192.png": "9648e1234f19855aa7aeb5ac58223024",
"icons/Icon-512.png": "03fcb76d84554e9493c46c18d940261a",
"icons/Icon-maskable-192.png": "5c5a64bba17cff779e32efec57e76432",
"icons/Icon-maskable-512.png": "eaba247ccb0beed07ff46d7364d7eaaf",
"index.html": "eeb212752a7513115246db3df143929c",
"/": "eeb212752a7513115246db3df143929c",
"main.dart.js": "d12a1d2adfddced8b2bcaf7c347b8396",
"manifest.json": "23618643fcab58e41de5b8b1c7c964df",
"version.json": "27f551671e2295bf5943077e11238187"};
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
