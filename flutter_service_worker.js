'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1413b2f5d2ea3e7d5cb72810db0c95a5",
".git/config": "2bbd38366b2db0a991279ab612ae172a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "e1d16ed26739d269f416982eb59d376f",
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
".git/index": "3b7b417921a6ba8fd94cbb1a58a723d1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a5b4519fc2e5f1b945240ad9141795db",
".git/logs/refs/heads/master": "a5b4519fc2e5f1b945240ad9141795db",
".git/logs/refs/remotes/origin/HEAD": "704a0b0f711b2b4626d3504eda57eaab",
".git/logs/refs/remotes/origin/master": "021d9e5052555c490f1c9ac95a30a167",
".git/objects/07/c5a6818b73fee1e145c424ca05207933750aee": "90beba4395b0d148f611afd225bc2a27",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/0b/d86647e5c4069cad450d55103ab21f10e7eaa0": "66bd17457c257a7ee5c475c9ef2028d5",
".git/objects/0f/cdc725b72146b4e47ea81bc42a808952179adb": "77e71dd6e8b6c4eec7c0ca6bd1add1ef",
".git/objects/10/09993f5a4721cd1154fe20c4f1d495c9a2414b": "74130db45e28f7c177e80c1559b300b7",
".git/objects/13/c4a6403c8b537e3afa30f6fcb93e53bfd33049": "1549939a3ed61164a9958b50d4545cfc",
".git/objects/15/8017cd524a977c519531ce312685fdfcfe4f51": "c634a54b73de4c7ace750ad2e83a08df",
".git/objects/18/2564987b86003af2300d80e882311c6d9d3ec2": "e8f06c87768b254f42c6db96aa27e507",
".git/objects/1a/0e9bd6f1e0f299d6df96144b171a1f37c8a075": "cb1b621e820443995374c599d8b6d794",
".git/objects/24/7a9a45fc6a956f77966861f1d53e47270b8e10": "fbb22c45859e55b68f6278211145455c",
".git/objects/26/7e77abfa54b9816cbc6793702e8c53b6634b13": "2e3ee66166c9ba1065143c9564ea8a25",
".git/objects/2c/cadb6ce0cdf4eb89db18f85c2c8f4e48f8abed": "fc296acf93810e8ca3915971aae7e9dd",
".git/objects/32/dc60a2ac27ac0bca113b177c1afb0d142fe365": "9960ca573133668d7d15afb58937d699",
".git/objects/38/bc6cc4f03a334912b4a0f50eb0fdc9400bee13": "fea5ca48874a3cef8460b4fe9ca89a0e",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3e/7bf395b8355a7b2852206158c1e97f33aca485": "e83c379be2b52acff839f14732ed7556",
".git/objects/3f/3818cffc944b60fdec9f50d343eb8763e564e8": "e5a8ad1cd978f66f191beaf520b37790",
".git/objects/42/0a239d697d55cd877a16b00a81ff81e35b4024": "29f41572d7bdb9d40df5258a194a1f3a",
".git/objects/42/d2798af01893f8df25473a9da28fda402ccffd": "fe2d7a52999488928cec3cef932d1179",
".git/objects/43/b2a0349fd9572b2491595db53a20707379e449": "d0d4cd477cfadf49284175a8edda102d",
".git/objects/43/e139f5a39882fc991e89007e5e9dad6802e87a": "bc5137b9fcf01c03638b88ae2763e8ee",
".git/objects/45/ff7c87bab72ccd7d71cbe5f3e52271e3e7ec41": "0b9d261ac0cf7bd7b2e1f68825b33010",
".git/objects/46/4a5a76204b761497fb6179268e1fd8ffaf9f38": "42c99c935a0a70a15a32b0af4f2eec1d",
".git/objects/48/cb9cb1d465ccdcdd3e460d02ff6e2f9311c062": "b7784ef08626c81f0586a6afc0ece346",
".git/objects/4e/1760af7c2e26d229efe96700d47b03767a0ea8": "414eb90cc11fc0644160df246e2c2635",
".git/objects/4e/7640eb1f0c03540d29d6e6cfeba2b8e088f497": "ac2c4d3c45d32c0fe1f4b92f0400f70e",
".git/objects/4e/cbb0cd985f7c4ca5367d3c396002d466520aa4": "2f5b1cc51529a77c39f8dfa5e63d57d9",
".git/objects/4f/039a492434b61b21fae9f807dd6beb840289d6": "d7e411e44d220a6d516df72b03ebb4b9",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/53/0cffc0f5871e445a3059aee25b6417fda0c4af": "def67773c6944a7ac31259ec7f223b93",
".git/objects/5b/1678bd5ab6af5219a2cec15b89e08ea1b4a374": "c87e5646c5bd2f623063a52263b58ddc",
".git/objects/5b/c279b0e1c262cf5f48130cbd7c7b61fd6278b4": "8ba81e1df2189044415adaafc680f721",
".git/objects/5c/2779302275df211f26cb3576f621dc49dfefff": "263116e816f8b966ff323ead1237a65d",
".git/objects/5f/8f95c892c0d63e387a8f3b098f55e4ab7f8b62": "cf03f16fc05bd06803efc7a69f8e729c",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/69/7a72a86870bce868eb3aec6ae8d8e0b84c879a": "bd0a7344b10448f0fe8092a7a28d4331",
".git/objects/6e/b0d9b7b059f92ece7f0ce8b04ff69c0e710563": "8bfb4ef74215c84b699b8b597932c3fd",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/72/f620ee103c626148de53a1a97f9302c15313de": "03517512d1476f4b50eb6aac3c89cfe3",
".git/objects/76/a72b3ff6749620c0ae9bb741cab65ddab7145e": "8bdcfacc107fcd9833af25f4a25509c7",
".git/objects/78/724518f8df3d6571a77645bde248e23d04f5f7": "1a46a1de0dc0be1062d595131ddc21b4",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7c/3a9971f946f0a97163563d2828e7ab50b82bfe": "dbcd701c74449898cb5af39a6847d4d7",
".git/objects/84/b27052a0936d6e29eb13d82dff44d4efd5aaf8": "75f6211a0397fff2b8c7e2d258fd32b7",
".git/objects/85/3278531bdf0200f60910f1e283df972acbea76": "dcf4b6075b92dad9ef370e7dff4dfa4d",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/86/d111f09a93cccfa0011858c519a823e7dafef7": "9a15839a59b5f501fbf7b9824c4b6f84",
".git/objects/87/eedd213ed4b3cc9bcad8c1f09be8ae1763ae55": "f61c8a5a3acb95e64fee6e05ae04672f",
".git/objects/88/bd535e2ae0953c075de6bd5979b0812a5cbbba": "40b520e9c760e4442596cc0e5f116bab",
".git/objects/8a/8741d8328deeeb68e54a956b899f837b9990ff": "4508f4293acecaac84f3cedf0e49740e",
".git/objects/8c/30c68b758eade0f2eff5cb85378ed2d2abf0ac": "591bbd4fddd73dff8855a28e1dc8e547",
".git/objects/8c/4e3c77201c360957489b766f2aa2d19c696dab": "71b7ba183a3bf94bddf573bd5c29bcbc",
".git/objects/8c/c9bff1635a42721d12d170e393f2efc897048c": "85bed89e3c8ac3d1f02578d28b5488b4",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/8f/368292a70675725b4d450fb31a7af7e7a2465c": "f772b016eabfd2336c517d3cfb18602d",
".git/objects/93/8291da97fe449ea7e3d1c485001558f1576e1d": "9ac2d582fe3f7e42aca7684536863a59",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/95/c1904150935d69528934ed21bcfb32151cb7ff": "95bc4742a7db287947a205eba6adc445",
".git/objects/9b/b5eeef163bc5b5ae1238fd65540f4bdc0f4a9e": "a9670b2e60cbbadedbf01221feccf66b",
".git/objects/9e/b66817e8c97ef66e08502f479d2ee1d8684751": "42fb800a5a7665f34b7291fe9d5ee51f",
".git/objects/9e/f7923c8f1d5b8dc1a9e30a555f28c967fcf3d5": "7595dd989235fb41aa0c2a4c01d1e8bc",
".git/objects/a5/d5521fa0e6fe4c214e6e5b0a630a7c5ce537b8": "77e97febc379cc6822fffa3ad683d925",
".git/objects/a6/59e33e63ddbb874076c68747c3d4b570b4c88b": "5e32667408c6464287875f7e416bf12c",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/a9/143e6d936a50e27f4ed89d3e930a7b0c251c9f": "863c93c54e61448839529013e0457cf7",
".git/objects/a9/a9df4fb75229db65b914a8b2b09e64a882a0d2": "cca189ecdc8d8f66e4cc01ed60063810",
".git/objects/aa/d84866d99af1495370c96b6ad50aa3352ddb82": "d73a5fad8da50a30f003c5e051dcf33a",
".git/objects/ac/290256afa6661ed904ea26aead1fb22b9fb19e": "38f95b34d5df741e83e7655526c50e65",
".git/objects/ad/47e4194e238b7342e094b57ada911b25a51b5d": "741512d703df5cfb77e87f3be60dd33c",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/b1/fbd031146de703a4a06feae788fb4dc836c0d0": "30f4e65732887973b31330d2ec9ab88c",
".git/objects/b2/dfe22b307e897886e2bc17333361d59b85e8a7": "ce30b02b67351634fd9b48e0d834cd2c",
".git/objects/b4/4eaeaf3258377d6d7ce84f92314fea8c7c8801": "305e8d3194794d1db7fefc0a79d72ba4",
".git/objects/b6/223fdefe325c78f5df1ff878b10bbc86702035": "4cf693ce7c7900f54548c03b25bd115e",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/bf/13326797da8bc47915fa80d304f3351d10c48d": "e767c305738e576ac62c16f82b9ba676",
".git/objects/bf/1728c3e0bbf1a0370806c32ead6bd6d5a1f6dc": "fd84c2c492a9a36478c4e0f7c70f27cc",
".git/objects/c0/60463ef7e0f9724b334fa17741bc92d1087c36": "50958807ee52d9104a22b9327df078cb",
".git/objects/c2/b24a893e872082b342fd78830e5d77adbb3df5": "dd3dc2ddd1345218d395c4b7d0994ff6",
".git/objects/c5/220d6ec45d8a788271da6480cde2f9b7c57f3d": "8300ef5f0f741da15e276cd8a2a7d838",
".git/objects/c6/7c50db21b77da9c3e78a30c2c8685936df0bd7": "8aaf23d9dc664b3670a52ad4de73fe86",
".git/objects/c7/d91aaa3c984824b4baa6936186c3cc9abc8475": "982e22dcbe2707df7e9ca8e8f880068e",
".git/objects/c8/3275dc37b85828930de31df0315f404307af92": "e5d006fd036fbec30591edd51318feb4",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/c9/516663e7d7911ac537d91b8f05b04078404a46": "1844d916da4c7e06c830b540507cffd0",
".git/objects/cc/c0066934f0ca5360dca31eeecdcee1cde1af73": "494079669ba9996da80add83ba430fca",
".git/objects/cf/ec2af174c3a814f2b18b96bf8e69c56f599cb6": "34e619f44e984edd0abaefff97228de2",
".git/objects/d1/d677af73b59bcf1ed37180afebe3df51f677e1": "070159732fc55180113609e76838765a",
".git/objects/d1/d7976c6ac1949be3d56bd3208a5678f7c3d9ee": "d2ac35ecde1535654f908c97d0a83d81",
".git/objects/d3/1e5e29aabf19f948084fc60a6e3db54cdf8e26": "3d2f303a6c9dfd54f4a0e44409e7eca3",
".git/objects/d3/4755651259f6c75af39ee246fb75b196fd41fa": "f26d6e2c8b7213178508118c71cc6507",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/f074341478fabf3a5fedf996fa1ab5c2cde406": "7bba1c1fb6f5e42f2b73064ef53ea03d",
".git/objects/d8/1fab4daae114832041301f5dd2b275c0a2cece": "b3e88b968c623a3e4772059a395678fc",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/df/c374a23862954e357285c61f102281696f00b0": "adcfe87747950d4d31bb3400b4076214",
".git/objects/e3/92d9bd79f00c1d2c94ad783417b65e61a4383f": "2bb75e890a1729ef31254ab21c4f7995",
".git/objects/e5/05d34781ea56120fc5473d6b3d657585800bf6": "a19d550cc8353bafe6967afddc486947",
".git/objects/e9/1fc11453f7a1f414b3daaf84beb12cc620d12e": "00bab0eea1ccb3ab74136c8a55f76c97",
".git/objects/ed/fde9e44c7b27e5bcd9b2551b4b6383562da048": "6148125ae4d31bcf35a1eda414634a86",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f8/51307b1cd8d719995d790eb047f8bf8346f37c": "b2c436ec4b405eca715b359c32ddb342",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/refs/heads/master": "349a811e13654c3b5a9c5ebb83be72e0",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "349a811e13654c3b5a9c5ebb83be72e0",
"assets/AssetManifest.bin": "0b0a3415aad49b6e9bf965ff578614f9",
"assets/AssetManifest.bin.json": "a1fee2517bf598633e2f67fcf3e26c94",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "9809acc7193ce4ad9c7b22785ec8c13b",
"assets/NOTICES": "a01f204fdeb8425fe14074bc63018f56",
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
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "777892d608fd9d7279c2a07bbcc8b447",
"icons/Icon-192.png": "9648e1234f19855aa7aeb5ac58223024",
"icons/Icon-512.png": "03fcb76d84554e9493c46c18d940261a",
"icons/Icon-maskable-192.png": "5c5a64bba17cff779e32efec57e76432",
"icons/Icon-maskable-512.png": "eaba247ccb0beed07ff46d7364d7eaaf",
"index.html": "edf090eba1a71097f1e6c1e469c4fa44",
"/": "edf090eba1a71097f1e6c1e469c4fa44",
"main.dart.js": "d65d3da35a3234a7d18fa761830273fa",
"manifest.json": "23866296c7746d81f2bd817893297ecd",
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
