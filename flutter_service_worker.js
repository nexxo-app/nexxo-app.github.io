'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "40989f62d0724f09415ab89e3ade967c",
".git/config": "2bbd38366b2db0a991279ab612ae172a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "8dc7a0f4b16a89ab36d99fe18dba25f4",
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
".git/index": "93fb271756dff649bfba4ef73b6b7823",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e50dd09ef7985eaadb7de23b51bbff1b",
".git/logs/refs/heads/master": "e50dd09ef7985eaadb7de23b51bbff1b",
".git/logs/refs/remotes/origin/HEAD": "c875d0778914a28177baafd2d5afbcfc",
".git/logs/refs/remotes/origin/master": "ef868fd910fff440b00f2a026b75d2b4",
".git/objects/03/0176018d4a136c74765c8205343452d4f74834": "9f0a554ce71df0c601ded8851d4927b9",
".git/objects/04/d5a3121d4a809414247c991317ccbc55c44d94": "96f2dc3e68143f082696e732037b4b48",
".git/objects/07/8bfc3f35d95958ace3f94d20ee60bb5b0a7189": "e80dabce111347afa12a24963c6812fb",
".git/objects/07/c5a6818b73fee1e145c424ca05207933750aee": "90beba4395b0d148f611afd225bc2a27",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/0b/d86647e5c4069cad450d55103ab21f10e7eaa0": "66bd17457c257a7ee5c475c9ef2028d5",
".git/objects/0c/f08c49b92205d4505b3f6f79762aadf65ffcf0": "a275faa007d9ff6308aed7806d5c0e6a",
".git/objects/0e/2850d6a160041d5d8478225e4997853e9d61ed": "f1d7b120735b4c0ab580d520f35e4ae9",
".git/objects/0f/cdc725b72146b4e47ea81bc42a808952179adb": "77e71dd6e8b6c4eec7c0ca6bd1add1ef",
".git/objects/10/09993f5a4721cd1154fe20c4f1d495c9a2414b": "74130db45e28f7c177e80c1559b300b7",
".git/objects/11/7c054765ee1d1d1a841858ff9352a527d99e02": "60be9feb0cf0e8eb5f48d5c92d61c298",
".git/objects/12/35dc2239db0a731e4049c9f493246ba5ccb874": "21ae752445fd42befb705ba7956fea0a",
".git/objects/13/c4a6403c8b537e3afa30f6fcb93e53bfd33049": "1549939a3ed61164a9958b50d4545cfc",
".git/objects/15/8017cd524a977c519531ce312685fdfcfe4f51": "c634a54b73de4c7ace750ad2e83a08df",
".git/objects/18/2564987b86003af2300d80e882311c6d9d3ec2": "e8f06c87768b254f42c6db96aa27e507",
".git/objects/1a/0e9bd6f1e0f299d6df96144b171a1f37c8a075": "cb1b621e820443995374c599d8b6d794",
".git/objects/1a/83bd8a961af8681769b9d80409802bea4fd9f5": "14a4fe9bb4f3594c9dbfc132720c9fc1",
".git/objects/1c/b1645b70acb1a3c99e472b3b79bfa9424796df": "bbdc7f2a2784dc8c3cb21242b27b41bc",
".git/objects/1c/b2cc999ec5ae599d1cce7d00ee1f582bfd6e79": "d00c015d487cfe63ee82fadc4ee2cb06",
".git/objects/1e/84bda807dfcd09c7b8cc22cbe18d494a9883f7": "9d001f5fb27a2a3a7cc48268222bf5f6",
".git/objects/20/1e140b9be009852ceb8f96f25944136bd4f87b": "f90ea72e0f5bb93682e9e122924abae7",
".git/objects/20/5191289ff544e7ec3b92445d5909641df0de22": "d2466c81c3325fba2b56ac0598b4df5e",
".git/objects/21/579da305ccc83da781f92f8889f4d6b52127bb": "ccc3a63263b5ec41ff5e53cd825d1405",
".git/objects/21/e2f5de0c7ae9683e9f024e738493fe170857fb": "609a4c1cd03dbfcb7979fe2e14a11846",
".git/objects/22/d27df8c5ed17bb16cfe92219f1c3df558b735c": "849ff65f04ddfa68cac253a6fd675567",
".git/objects/24/0315eb06d0e8180632d16f06922ecc208029e4": "0e68bbcdf741112097ee4292a68afdfe",
".git/objects/24/7a9a45fc6a956f77966861f1d53e47270b8e10": "fbb22c45859e55b68f6278211145455c",
".git/objects/26/0e7281ab34e7683c3b583ed6b7b54efba544b1": "70401fffe4c5a00ad659ac1aee72d35b",
".git/objects/26/7e77abfa54b9816cbc6793702e8c53b6634b13": "2e3ee66166c9ba1065143c9564ea8a25",
".git/objects/28/9ded16036a65c61918ab10f3d8e83f6f9c4257": "8dda84b2dd26db7ae4835ff3d5a08fc3",
".git/objects/29/6c941d28123a582c2dbb37de5f3324499c6131": "1f849fc8c531823ccd9adf821e928113",
".git/objects/2c/cadb6ce0cdf4eb89db18f85c2c8f4e48f8abed": "fc296acf93810e8ca3915971aae7e9dd",
".git/objects/2d/b58792e119d1ca6943f8abd49b26798e69de83": "2d6fe447d7009e0de5b54811d03733a7",
".git/objects/30/2ad7fe9a29b6faf60d90410d96fcc9b87abb42": "9a93a6260ffc3ad4fc488c65c3712075",
".git/objects/32/a3f80bc3271f16ffdb0eabfbaa2be365f1bc0f": "7d4b05a6c442fe13dee35081a5ac8538",
".git/objects/32/dc60a2ac27ac0bca113b177c1afb0d142fe365": "9960ca573133668d7d15afb58937d699",
".git/objects/34/b67638b48718dcb28627e609e2debe1b7b7e1f": "6d127c9fee89272067dee1c39a14982a",
".git/objects/35/e3e3ba1931cf0401fcc2cb5c496a24f518e730": "4f0a1cdf6bf2751253c3d9bfc63da2c6",
".git/objects/36/c87e194e1537254f96cd8a5217c9445c02b5f1": "8705702c9e08f312d01df3a330ce3a1c",
".git/objects/38/bc6cc4f03a334912b4a0f50eb0fdc9400bee13": "fea5ca48874a3cef8460b4fe9ca89a0e",
".git/objects/3a/6747c89f9f5691ef355f24a8901d7bc891c322": "cc4b44a635e0ec5da7bd7be75559d2ed",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3b/4d8236ceee709b0963b8ef31460cd59e81e794": "bd0eab0d071e343d9900494bbff2e680",
".git/objects/3c/d164d228d9ac2ffcdd725d93e013613ee7919c": "731558a6a288c176cffb43a8947758f0",
".git/objects/3e/7bf395b8355a7b2852206158c1e97f33aca485": "e83c379be2b52acff839f14732ed7556",
".git/objects/3f/3818cffc944b60fdec9f50d343eb8763e564e8": "e5a8ad1cd978f66f191beaf520b37790",
".git/objects/3f/e7ffbd29eda233bd0c7804d81daf448c579d19": "8efa464c9a64880233f18cbdf5914770",
".git/objects/40/7e1c86a326a23f338948e8f17dcd4fa8fdbc57": "918d6d6424e78064249096f4153a0d8a",
".git/objects/41/083dd7c0394651a9d4f3c5d4666c1d703a2602": "94074236d3e9e77473621aa6bed1bc1a",
".git/objects/42/0a239d697d55cd877a16b00a81ff81e35b4024": "29f41572d7bdb9d40df5258a194a1f3a",
".git/objects/42/d2798af01893f8df25473a9da28fda402ccffd": "fe2d7a52999488928cec3cef932d1179",
".git/objects/43/22b8643164ddee1c0c63f92a7005f3edbfacb6": "4a2866bf6dcf2f64d04d161052b819fc",
".git/objects/43/b2a0349fd9572b2491595db53a20707379e449": "d0d4cd477cfadf49284175a8edda102d",
".git/objects/43/e139f5a39882fc991e89007e5e9dad6802e87a": "bc5137b9fcf01c03638b88ae2763e8ee",
".git/objects/45/ff7c87bab72ccd7d71cbe5f3e52271e3e7ec41": "0b9d261ac0cf7bd7b2e1f68825b33010",
".git/objects/46/4a5a76204b761497fb6179268e1fd8ffaf9f38": "42c99c935a0a70a15a32b0af4f2eec1d",
".git/objects/48/cb9cb1d465ccdcdd3e460d02ff6e2f9311c062": "b7784ef08626c81f0586a6afc0ece346",
".git/objects/4d/5ed9ab712ea7c7442bd68544f307e9cb5f6d2e": "5053da20af27f0e51777b3de8f34878a",
".git/objects/4e/1760af7c2e26d229efe96700d47b03767a0ea8": "414eb90cc11fc0644160df246e2c2635",
".git/objects/4e/32cd89a5ac9487fcdc7451f3842fd866ba3bde": "0e9e312de26c0f973a3294ec882c657d",
".git/objects/4e/7640eb1f0c03540d29d6e6cfeba2b8e088f497": "ac2c4d3c45d32c0fe1f4b92f0400f70e",
".git/objects/4e/cbb0cd985f7c4ca5367d3c396002d466520aa4": "2f5b1cc51529a77c39f8dfa5e63d57d9",
".git/objects/4f/039a492434b61b21fae9f807dd6beb840289d6": "d7e411e44d220a6d516df72b03ebb4b9",
".git/objects/4f/a8ca095f5ca9ffd1b7622e7b502a3a65654edf": "71508d457dae07fb5bae56c69bebb027",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/53/0cffc0f5871e445a3059aee25b6417fda0c4af": "def67773c6944a7ac31259ec7f223b93",
".git/objects/54/b1881f1e2e908957c60cbef74e5ec59d019ad7": "7d687c1245c9fa29c4b71dbdc163572e",
".git/objects/54/d1f6be161de95c81473f073e925bfb929ed37f": "553b3ff26525aa1f5a763929fbd42384",
".git/objects/55/177ceb807b7ec3b7eece89d77a3434a229a99e": "1c69f89b7c199425a021cc8c8febe8e5",
".git/objects/59/e0671d0841fc23af4111d63eeba84aed5619d0": "86e60ba1eb43771b087d7d6b494f531e",
".git/objects/5a/0652e3554793f9078046105a1fdbe653f74d2c": "1e74a97de3002ee00074f47cffd1e0d9",
".git/objects/5b/1678bd5ab6af5219a2cec15b89e08ea1b4a374": "c87e5646c5bd2f623063a52263b58ddc",
".git/objects/5b/c279b0e1c262cf5f48130cbd7c7b61fd6278b4": "8ba81e1df2189044415adaafc680f721",
".git/objects/5c/160f7aa9755f5a6047ae821d25aff56b1fc877": "e5c2a014a130afd0e524d6b9f65b174e",
".git/objects/5c/2779302275df211f26cb3576f621dc49dfefff": "263116e816f8b966ff323ead1237a65d",
".git/objects/5e/a5e22de94552e09607bd75482f1131e360e9c3": "7120978eacb83e0f9fb439346e45e061",
".git/objects/5f/31bf6f2ff2cfb49763e2a60569a7c57d658a19": "28ca9ca964aa7570076a9e5378f3a576",
".git/objects/5f/8a0e913c41d3dc135f3e4a8b156d6e567ea935": "da75b5cd760adb9002a65ba9d0f985fe",
".git/objects/5f/8f95c892c0d63e387a8f3b098f55e4ab7f8b62": "cf03f16fc05bd06803efc7a69f8e729c",
".git/objects/5f/bfad602a33708758a2ff5742f618f604139af2": "58e54f31c35fdfb24ed804e71e45edf0",
".git/objects/5f/cf0bde4c3a7451d505e95f869c423d5f8a7529": "e0b707183b7f084446c80df7b7a8ef42",
".git/objects/62/08bb3c0f1e54b394a0770499749ea1891a6d6f": "6afce14a0dcb365999cc94318d1307fd",
".git/objects/63/a47bf56855301c15156301052c035d0f289b9e": "c1c9190366e8ff58f0036dfcf11c01ed",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/69/78705dd64857f52f35ad46baccffc190ef0991": "bce7fcf6be22772ec62633f7a97613d6",
".git/objects/69/7a72a86870bce868eb3aec6ae8d8e0b84c879a": "bd0a7344b10448f0fe8092a7a28d4331",
".git/objects/6a/400aeddf33f1e4d4af9c7ebce113109cd5aac4": "b19cb1d0ccb3c7ac596dd5816584fd10",
".git/objects/6a/6e5d212e0fb1037278d4bdf04bdf2242aff388": "fe7cb22e44320d5d455f5fe3de2a8a08",
".git/objects/6e/b0d9b7b059f92ece7f0ce8b04ff69c0e710563": "8bfb4ef74215c84b699b8b597932c3fd",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/70/76b80649b7667be129510d0773fce0d7a9e666": "278fd76370f6825cc2ecb741e89f9e7a",
".git/objects/71/8f2af1fdbf90e1964e382a7971d44b087b9391": "691f05c3cc9ae00c43f9679de2c0a214",
".git/objects/72/f620ee103c626148de53a1a97f9302c15313de": "03517512d1476f4b50eb6aac3c89cfe3",
".git/objects/76/a72b3ff6749620c0ae9bb741cab65ddab7145e": "8bdcfacc107fcd9833af25f4a25509c7",
".git/objects/77/48636698b7d34be8826a02773697409db412ca": "3e79ffc978e2bef3a946273667516870",
".git/objects/78/724518f8df3d6571a77645bde248e23d04f5f7": "1a46a1de0dc0be1062d595131ddc21b4",
".git/objects/79/b512b1801ad7a817ff9690bc856b31c95cb5bb": "1ccde02b6bb24ee215448d3fe18ca3e7",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7c/3a9971f946f0a97163563d2828e7ab50b82bfe": "dbcd701c74449898cb5af39a6847d4d7",
".git/objects/7c/3f3870726d50a5f791b9419d9e54bad2b7f6c6": "0c92332859dcc7cf2bb4575312ce0f7f",
".git/objects/7c/826592076515bffbdc2d29e0f5281f9e002aef": "ba9c65b978f79ade9e6f9dbe9db2bcb5",
".git/objects/7e/2e3959e00781b54f7d9b21b0b87b8b9945fef8": "1b7d6b995c4adc95dd44a0fbaf952f91",
".git/objects/80/a0dee6eb6b272eb6893a5f1ed5d66de352718f": "59ee31db7f959085c4a6bb6c5317ff12",
".git/objects/82/820a9bcb6cf7282f0ca41ed9f740e292c46072": "60fb842cb472c3e9f90fe7ea68938b8e",
".git/objects/84/b27052a0936d6e29eb13d82dff44d4efd5aaf8": "75f6211a0397fff2b8c7e2d258fd32b7",
".git/objects/85/3278531bdf0200f60910f1e283df972acbea76": "dcf4b6075b92dad9ef370e7dff4dfa4d",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/85/c9bc4c82e10770e0d90b31cdec608afdd180c8": "bfc733d84f8ec1b7effc7f0c0f27a296",
".git/objects/86/146442867abe77ac436886023740320204fb16": "86694fa312c01918aa234b68e48eaa16",
".git/objects/86/2346f0198317b7c5cb44b2ade503a76ba96813": "f29b3e62bf4e876f3292376e9ae73a91",
".git/objects/86/d111f09a93cccfa0011858c519a823e7dafef7": "9a15839a59b5f501fbf7b9824c4b6f84",
".git/objects/86/ef582fd78e78d3e37e08b0876a911f7b15a644": "58db37dc78a93c3a5c1fe20bdc69251c",
".git/objects/87/55ab5090195d0fb50b6b2c095702b556295649": "c73ac5656d58b269b06ed0e654ade264",
".git/objects/87/b7aa8c93270604d033091401b4a0b48a3217f5": "ece5fdd541f4205cfc44375965b9bb75",
".git/objects/87/eedd213ed4b3cc9bcad8c1f09be8ae1763ae55": "f61c8a5a3acb95e64fee6e05ae04672f",
".git/objects/88/bd535e2ae0953c075de6bd5979b0812a5cbbba": "40b520e9c760e4442596cc0e5f116bab",
".git/objects/89/81ae86552ca9a36e66dcf450f0481884732fe0": "c1d230745b1a4c3bb8e6371634910b2c",
".git/objects/8a/8741d8328deeeb68e54a956b899f837b9990ff": "4508f4293acecaac84f3cedf0e49740e",
".git/objects/8c/30c68b758eade0f2eff5cb85378ed2d2abf0ac": "591bbd4fddd73dff8855a28e1dc8e547",
".git/objects/8c/4e3c77201c360957489b766f2aa2d19c696dab": "71b7ba183a3bf94bddf573bd5c29bcbc",
".git/objects/8c/c9bff1635a42721d12d170e393f2efc897048c": "85bed89e3c8ac3d1f02578d28b5488b4",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/8e/9641cbfb1b2bc259bdbd65b4e942c474706808": "e87bca14b91639b73ee3bb03d051bfb7",
".git/objects/8e/cd190591894cd76835704c84d78411ecedc9af": "f6bea8ca27b6065d1c3bf9a24f659b6d",
".git/objects/8f/368292a70675725b4d450fb31a7af7e7a2465c": "f772b016eabfd2336c517d3cfb18602d",
".git/objects/8f/a7e9d74d87dd7ecba6c8a6cafc93361a837d28": "ee724371122f5cf96ef2ea8988b59ec2",
".git/objects/93/8291da97fe449ea7e3d1c485001558f1576e1d": "9ac2d582fe3f7e42aca7684536863a59",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/94/4a14b6a87a9a201c482380e2f6099733d79fe6": "846819cc084b01c428d29cdf470a2033",
".git/objects/95/0ee8160bb5499f0263d448e6f3657de582fb77": "24e243b6c1401ef534308a4ddb82ac0b",
".git/objects/95/360afbbf2600d07535d8ceffc11d1a0247e3c7": "cbc46249abb039d915e65123fad24bac",
".git/objects/95/92611e504b84845d756717e9df8ed831c9f9fd": "a758919f3bd1e5767cdc2bbe21b63e0b",
".git/objects/95/c1904150935d69528934ed21bcfb32151cb7ff": "95bc4742a7db287947a205eba6adc445",
".git/objects/9b/b5eeef163bc5b5ae1238fd65540f4bdc0f4a9e": "a9670b2e60cbbadedbf01221feccf66b",
".git/objects/9c/799bd523574493c72f54724db3b819f109b35f": "10da7cf27809887add40efc873a04dc1",
".git/objects/9e/b66817e8c97ef66e08502f479d2ee1d8684751": "42fb800a5a7665f34b7291fe9d5ee51f",
".git/objects/9e/f7923c8f1d5b8dc1a9e30a555f28c967fcf3d5": "7595dd989235fb41aa0c2a4c01d1e8bc",
".git/objects/a3/91d46ce9922ef650e4c4da8601031afb943144": "082661094e35b31d8e12db53b978d21f",
".git/objects/a4/bbabed614f4747536d3bb2e9348a2b69b1a77e": "649f17daeb1497442e2f3d5a2a8eb8c9",
".git/objects/a5/d5521fa0e6fe4c214e6e5b0a630a7c5ce537b8": "77e97febc379cc6822fffa3ad683d925",
".git/objects/a6/59e33e63ddbb874076c68747c3d4b570b4c88b": "5e32667408c6464287875f7e416bf12c",
".git/objects/a6/8a5e9d5e42efe4418949921f4653ea0331ec86": "2ff2fdce1917227a97c883b1cb15d1f3",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/a8/3f8105505fe36fe31a0c26b27b21569a82da54": "9bfbe924c0c958faaff5c64d6be77559",
".git/objects/a8/70b60192608aa038b48f79fd4a7b3187fd0a16": "00fc43dd7b78873e713b95d9eb8cee37",
".git/objects/a8/b5684c69c730b3023633dc848238aa7635c410": "7d663e18c1918036034e033278869c82",
".git/objects/a9/143e6d936a50e27f4ed89d3e930a7b0c251c9f": "863c93c54e61448839529013e0457cf7",
".git/objects/a9/a9df4fb75229db65b914a8b2b09e64a882a0d2": "cca189ecdc8d8f66e4cc01ed60063810",
".git/objects/aa/d84866d99af1495370c96b6ad50aa3352ddb82": "d73a5fad8da50a30f003c5e051dcf33a",
".git/objects/ac/290256afa6661ed904ea26aead1fb22b9fb19e": "38f95b34d5df741e83e7655526c50e65",
".git/objects/ad/47e4194e238b7342e094b57ada911b25a51b5d": "741512d703df5cfb77e87f3be60dd33c",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/af/2e06649a86b147ca1c3b36309ac605b60a16f6": "75dbfea56534c66f874cd7a6de4a0021",
".git/objects/af/8f17aea88136691e58f388b84e4658a4ae4750": "6962d2c85f736810936d8e44f51ff625",
".git/objects/b1/fbd031146de703a4a06feae788fb4dc836c0d0": "30f4e65732887973b31330d2ec9ab88c",
".git/objects/b2/dfe22b307e897886e2bc17333361d59b85e8a7": "ce30b02b67351634fd9b48e0d834cd2c",
".git/objects/b4/4eaeaf3258377d6d7ce84f92314fea8c7c8801": "305e8d3194794d1db7fefc0a79d72ba4",
".git/objects/b5/c5b0d33c1a27b7bb1bda5dde4ebf03f91d353b": "fc4df231db7dedfb75a41a0dbc09392c",
".git/objects/b6/223fdefe325c78f5df1ff878b10bbc86702035": "4cf693ce7c7900f54548c03b25bd115e",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/ba/a217877dac994730194e7270eafa1e3cd325f1": "ce0bec8218ac547e121a01874923f0e0",
".git/objects/bf/13326797da8bc47915fa80d304f3351d10c48d": "e767c305738e576ac62c16f82b9ba676",
".git/objects/bf/1728c3e0bbf1a0370806c32ead6bd6d5a1f6dc": "fd84c2c492a9a36478c4e0f7c70f27cc",
".git/objects/c0/60463ef7e0f9724b334fa17741bc92d1087c36": "50958807ee52d9104a22b9327df078cb",
".git/objects/c1/01fd40b435933718689ff0d73de0e41a29f0af": "846f8aac6dcf5d34779755cafccebbdf",
".git/objects/c2/b24a893e872082b342fd78830e5d77adbb3df5": "dd3dc2ddd1345218d395c4b7d0994ff6",
".git/objects/c5/220d6ec45d8a788271da6480cde2f9b7c57f3d": "8300ef5f0f741da15e276cd8a2a7d838",
".git/objects/c5/4ec9878670db138e17857f1d1d537137399736": "778834cab794f4fecc12acecc80e70ed",
".git/objects/c6/7c50db21b77da9c3e78a30c2c8685936df0bd7": "8aaf23d9dc664b3670a52ad4de73fe86",
".git/objects/c7/d91aaa3c984824b4baa6936186c3cc9abc8475": "982e22dcbe2707df7e9ca8e8f880068e",
".git/objects/c7/fa2f0d46ed661eeba68b74c61896390e266148": "ab01c3d7b46e7d7f81829ad0b0811c34",
".git/objects/c8/3275dc37b85828930de31df0315f404307af92": "e5d006fd036fbec30591edd51318feb4",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/c9/516663e7d7911ac537d91b8f05b04078404a46": "1844d916da4c7e06c830b540507cffd0",
".git/objects/c9/8841e8abd5984fa75c3a56f9ce7ec05236366c": "6ce6776eed926962ae07230cf5fa90b1",
".git/objects/c9/b613329879fec821a7a05df9875901959208e2": "0cb15c716198c1a012a9472cb741a0af",
".git/objects/c9/c9bcac99e68c056f65f9055da1c0e918eb861c": "4b42ecff99e9eef1ecefcc5f543f23c0",
".git/objects/cc/c0066934f0ca5360dca31eeecdcee1cde1af73": "494079669ba9996da80add83ba430fca",
".git/objects/cd/a7e03c969cf45c5837e82598b7efea9d2419df": "c3edf2161d61a3dd99af002a8fcceb79",
".git/objects/cf/ec2af174c3a814f2b18b96bf8e69c56f599cb6": "34e619f44e984edd0abaefff97228de2",
".git/objects/d1/d677af73b59bcf1ed37180afebe3df51f677e1": "070159732fc55180113609e76838765a",
".git/objects/d1/d7976c6ac1949be3d56bd3208a5678f7c3d9ee": "d2ac35ecde1535654f908c97d0a83d81",
".git/objects/d2/c3622b293f80b784c57f00416b4086e11a9d64": "30d42280868af8f2b1a37110921f584e",
".git/objects/d3/1e5e29aabf19f948084fc60a6e3db54cdf8e26": "3d2f303a6c9dfd54f4a0e44409e7eca3",
".git/objects/d3/4755651259f6c75af39ee246fb75b196fd41fa": "f26d6e2c8b7213178508118c71cc6507",
".git/objects/d3/7163d1f1a23d0fdb4b1433b9447b0fcf84c976": "831a34df1572b2538eda225e9f959076",
".git/objects/d3/d65acd3015688bccd837339d17675e3d9c0032": "e166c048deb28cd446d44ab92486ed3d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/f074341478fabf3a5fedf996fa1ab5c2cde406": "7bba1c1fb6f5e42f2b73064ef53ea03d",
".git/objects/d8/1fab4daae114832041301f5dd2b275c0a2cece": "b3e88b968c623a3e4772059a395678fc",
".git/objects/d9/212b83a376bb982729cfe83963e715abe0d46b": "6800a7e2f73708a8a98f039bb80f9635",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/d9/db5d20d62b6fd14335649d313ca5d21995fc74": "b96900b1c88f2cecb5e5cc0ecace13ea",
".git/objects/db/522919f30dd4e86474ec493aa7db78d3662109": "4bdfd3229a45b5c690e21ee10264ada8",
".git/objects/dd/33ee5467004c7ff400684d958ab01310ad85fd": "6dcbc3866eba3616f4b1b608c6c3a9e4",
".git/objects/dd/db968e8167fc668874ddf41c4754b0af461597": "7ec77639c9b06295860942c824ad77e4",
".git/objects/df/c374a23862954e357285c61f102281696f00b0": "adcfe87747950d4d31bb3400b4076214",
".git/objects/e3/92d9bd79f00c1d2c94ad783417b65e61a4383f": "2bb75e890a1729ef31254ab21c4f7995",
".git/objects/e5/05d34781ea56120fc5473d6b3d657585800bf6": "a19d550cc8353bafe6967afddc486947",
".git/objects/e9/1fc11453f7a1f414b3daaf84beb12cc620d12e": "00bab0eea1ccb3ab74136c8a55f76c97",
".git/objects/ec/93db79fbb9e2973863f2b2d1581432f03dff88": "320a79c2c65486c283c8cdc0bfa7161c",
".git/objects/ed/fde9e44c7b27e5bcd9b2551b4b6383562da048": "6148125ae4d31bcf35a1eda414634a86",
".git/objects/ef/b9d4a8669830937604f0c106907a214ac39716": "812a8667f5dc55573d89995d9b376a88",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f3/8ed80f95955e8312b9c3205852e01ba9f18cf7": "d3097f27a42d2868abd18738b51963fd",
".git/objects/f5/15486292efb101c5b23626f8932280453b5ec6": "083319ab661cada0acba185c555ae802",
".git/objects/f6/08cc56fbbdaf87f6a898345108f90b358f6a83": "2e110f448628d005e8da90a53f59b6b0",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f8/51307b1cd8d719995d790eb047f8bf8346f37c": "b2c436ec4b405eca715b359c32ddb342",
".git/objects/f9/f63c77b7cc7a7228dbc975942d84d8502ff8f0": "a961ff321c5b22e16cef559710f702c1",
".git/objects/fc/a43f623788040bea7d87d710ce28235cf20580": "77b503d2dc86daa459cefff3ee6b5f35",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/ff/f3d1c69c16b12bfd986f9cc3c5c3ab33e06682": "25adeeafb4089067b5e0a20b47ef055a",
".git/ORIG_HEAD": "3361712231214a36fbcb51aa5d2c6580",
".git/refs/heads/master": "d6396359ccd602a10ebb782364663c9c",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "d6396359ccd602a10ebb782364663c9c",
"assets/AssetManifest.bin": "78055b2410721c78581a68add7724cb3",
"assets/AssetManifest.bin.json": "41039abc31d47e697eb51f68c9949e7a",
"assets/assets/images/logo.png": "03fcb76d84554e9493c46c18d940261a",
"assets/assets/sounds/delete.mp3": "996318efd5c90fd7c3fb1929ae276f91",
"assets/assets/sounds/expense.mp3": "996318efd5c90fd7c3fb1929ae276f91",
"assets/assets/sounds/income.mp3": "5e3d7f4c0db431f7d7f0f3d3cf72d4dd",
"assets/assets/sounds/success.mp3": "7a15084c22d931c2a4696d49797d091d",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "31806ebd4a7f36a1e2adf707c6010a1c",
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
"firebase-messaging-sw.js": "fd46d8ba7e7781089da695ad306cf34e",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "245237574fa460900d5aa20bc0a298fd",
"icons/Icon-192.png": "9648e1234f19855aa7aeb5ac58223024",
"icons/Icon-512.png": "03fcb76d84554e9493c46c18d940261a",
"icons/Icon-maskable-192.png": "5c5a64bba17cff779e32efec57e76432",
"icons/Icon-maskable-512.png": "eaba247ccb0beed07ff46d7364d7eaaf",
"index.html": "466f886a76287add3a9c492e462c3294",
"/": "466f886a76287add3a9c492e462c3294",
"main.dart.js": "b1d6638f34819b22ab0fb3199b0071eb",
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
