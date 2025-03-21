'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "d67737a3cf5b1791fc0f5cf717e6327c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/index": "bc8356df41a705094360c64db6f6b3c8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "05bd4cb3da49e84e0767080ed24fa750",
".git/logs/refs/heads/main": "372187528c408e4467a7025e25d96a6a",
".git/logs/refs/remotes/origin/main": "0b0f9ce192e31c7afa7f247f654c042a",
".git/objects/00/18f535545d5c93c727910d29fbaf4984b82599": "20d404aac5e2407dd1a288061657d43a",
".git/objects/00/483cf087227226c00462cba138b14450b8a6bc": "f48067f92cadaa9a00b3efe0518cf665",
".git/objects/02/366b6091fee5c5dad3d09b54b0c0f522d7e3ab": "4b59b435b3ed4795d26f4c874b9ed0a6",
".git/objects/04/e91f2a2abee9c4c3e98536809b5b71ccb89b24": "ae02f74c46e364c897a2637a3daa2cf5",
".git/objects/05/3dcdfcb6dc30de98045283a025c70b996ae65b": "ba69ac8e3ca65193fb2ffa6bafa8498d",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/08/dcbcdcf7ad80851b9eb22eded057c970550e63": "47ff18a6b462d5d156c34544d2d4ac33",
".git/objects/08/e2d0cc6e1ab943e322ce57de00c0067a709144": "44e10d9a6ea4bcb3328e37eddf0202b7",
".git/objects/0b/4342663fba9d86294b675074f7a4f7bd85a756": "d4d914900c8c1bc6c0acfc98d3f1b12a",
".git/objects/0b/688bfbd70ebb3a8f750f5f5e87dea09b29ec04": "9c4bb190f6e8458211d17f3808458b29",
".git/objects/0b/c9ad87d239b5e1a113a40484faa2e2bb1efc98": "f52b15dbf6e1ff0f5558705743e9864a",
".git/objects/0b/e974606d733be2bce5bee39846dedb4e89e2a7": "6541f4cd31d2a19c1d685da30101101b",
".git/objects/0c/b7e81008c5c4ae56d62e580de6e8063a285cdb": "6dc22a7caa4a3d7168b58854aaf280df",
".git/objects/0d/8c29421bd68969385620ef9d560ca80af4ca88": "b20f6cdc8a0b7b5e8df29c0f69da0529",
".git/objects/0e/eedc5cba8c6ddc84adfabb915ba62dcfd16d9f": "1e2f45bd9503fbcf3f54bfe56c38dc63",
".git/objects/10/229a6af18248a4c4e4e36589bc1c0a7cd71b5f": "226b72947591f06621997f50943ea412",
".git/objects/11/0545bfa7c0a05bed840784dae16758b1ffaf87": "f12e07ff01cb51a3e1c086fac638a9c2",
".git/objects/11/a9ecc9e5552b8cfaced1ed809d260c45a6f124": "e5e38af7270a7f7d85b58ca72b8d2104",
".git/objects/16/b2833fd81848f59302d605b94dfbcc4d5d4dff": "46a49fa1545aa9a650f0bc84bfbc09b2",
".git/objects/16/e40830f44d02ab9f70994dae6041f4ebc4a2af": "4540422d9b6c63fe36103fa28c39b446",
".git/objects/17/2bd54792de182cbe5f1e5505af7543a54db22a": "8d7dc3a0cd2b853486c99217f26dc420",
".git/objects/17/baf8631dd858d0b94edf51f1cefa90cda25f5f": "dc0a6f59f2eb33bb4d7def68fd7cd6a6",
".git/objects/1a/0ad7d4e9f1fea4b436d9f19391a234c8c36b9c": "9ca6cb3c482db14366f3e1021aa67211",
".git/objects/1d/129c486bc0b3e8461e2d589ab92d3a4e237c06": "f099164afe77ad103fe8283ce26abeee",
".git/objects/1d/eaada0167009d6cdbf5ad829866afc103cfd2e": "307360ed4ed4b31c3af502ce76e6fcd5",
".git/objects/1e/9fcda9de2b08f718af3971ee074f23c651c0b4": "3529160b6a9747765f1d3d33493998fc",
".git/objects/21/7929e2edebb6fb1ad072d54085f41162f65405": "2753ae31f10373c44412c461fc38aea5",
".git/objects/24/08e5379ca7344c28b54356143e362252f1a0da": "2d32fca2e730d2f27ba1d035d81376f4",
".git/objects/25/5e1513f12a50be7ffe45e2fc73a54e68bac9b5": "dc2a9ad37cf1fd7c082edd1f116f3d50",
".git/objects/25/5f45c42b1a64ae210605e51f16d02b7fe3331c": "379d80ec792f62d4c0d966b1aef80a45",
".git/objects/27/584f758d9640764029446a02e3bf9c1db5970b": "d0bdb27264280e4d8c30500885811f41",
".git/objects/27/80e4776838f119f0ba6e53fa913eb6857aa20d": "4448607e09b53797fb1a37557b28c900",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/29/29b2e39b00569438f62b154f0948cc8de0ba33": "97bacf571a65e9313a388ec92cbe95d2",
".git/objects/29/37eb19822a3aa5ecf5791925312338a0852a48": "9d6cbcf8fde5adf660fd1dec873314ea",
".git/objects/2a/794b2701f4a3d07b70fa77ab94ca5e4b2b503e": "6792b99701298341a350b566a1d57137",
".git/objects/2c/6307eda089d744161628549b9ac1898f4ae050": "598c0cee4d9463801fefbe75866cd44f",
".git/objects/2c/ccc531f508bd5f27eec18f45e6ae3b809e4e38": "886bfbfaec9cd15934ead5b563be7753",
".git/objects/2f/78d29ac8a6508d8e4ea5490dad05c8751860b6": "70e7e26fba0a36a10e13fe95850df7b1",
".git/objects/32/af71d6a7146b27170ebd9e5bf91497e3f32496": "4a5faa9b7e1a743877ae7c36c26bdeb9",
".git/objects/33/0e84f9548499cd9ad7c32ba563cc9bc637d8b3": "692e28633bd09d8cb706ea885f5f9b01",
".git/objects/34/b16bd0f93e550e8cbffc6f2b4c7b88986e2c91": "e57694810c586699d774232a6f1cf265",
".git/objects/34/b9330ec002f63e835a6ab35da7df2c0847c441": "46656dcd11bdfd480916d06b97e451cf",
".git/objects/36/29f40ce5ccef8ad10e9f1ed37ca32cd2744c8d": "4bd5123df29514bf181ca37c1b3ba508",
".git/objects/3b/7e619af6dba1f2797dd7fc48c2fd7bb0f4f0bb": "f0450ed61508f094cf0dcda132cd4e44",
".git/objects/3c/aa78733c4c0e649acdc7c442b445eb313da48b": "cb543cd4b6134748f3ea16de78d65ea6",
".git/objects/3e/54b6832adbe8a0e111c4169b437532264cc93f": "87df441e254a8b86ebbd00b30df0845c",
".git/objects/3e/ae9913cbdf1504c124231a5345b5c69137f925": "e3caa187e86058f8f1b4a8bc84c1f220",
".git/objects/3f/a83421a69decfe62c4df7d41a89835fa00ca3a": "00a47fb238c7ef8a1a1a79bbc848aff1",
".git/objects/40/f1694ba4c97cdfaaa99a6459feab9a24614586": "aca2ed34561ba1ba8fc7d7674cd50113",
".git/objects/40/fb63c38b71a8c8d439e04a2ecbce0aa418c3aa": "a28a79c369e85eaf8097ab819f9f2127",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/44/a9c897acf8d6cff5b3ba9c04689608f58cf16b": "bcbdf6bed7cd3b8e6095f6c694842bc0",
".git/objects/45/2eecc8b57f40f2a76b70dadffa441cf5826bbd": "8dc7dbcdf235cdef5a965bf1df9fd147",
".git/objects/47/def5d6fa8d238b918a2717a3221bf08d2be823": "6089440094372059493ae08bba3c37e5",
".git/objects/4d/225054bbc6cacefabe9736409ebb9d2a62e713": "eef164c0fab353172519f3cd4842364d",
".git/objects/4f/7c2cae0a85340b84be4d132837ec6302d7852e": "ccd0df9a64ecb2c91ad79fe6f5c5228a",
".git/objects/55/b887ac90c567b913f599d2302d969de4891778": "d3c2e92869d788c418e95e10e03b00c6",
".git/objects/58/0e2ea1c3ad5f1b2a3fdd01684f3df597f88577": "86066809f7f440f9ac3821b64c85c982",
".git/objects/58/66964fc419f8b01ffa7caaa97990e9497261c5": "58651a93f1db8beb97b7da0d31d9d1d9",
".git/objects/58/e24c7887fb9b7c3e6fc8715940d271119b1ef3": "ccbc31a80c3a34e57b0adfe34ec2a934",
".git/objects/59/03400040c5a25fb4fc3061e3568e5c3f19ef2b": "06af0040656690fc824dc7f3ea091ec5",
".git/objects/59/1e1011357e2b9b6311600118bd162e420be427": "a4251893477dbb5d585c3cf174d8da9d",
".git/objects/5c/84778cbba9b2cf0505962fd714084856527fc1": "a7b706be9fe20ef59431184dc038ee02",
".git/objects/5e/425e1d1a954f5c02c772be7d7fd51308c54ab0": "935b765ba4a0f0b9acebcb80f64bba5b",
".git/objects/61/caa000982e101a0302c021666ec6908ac4d0d8": "d6eee33fc2050f94f74735151b24545d",
".git/objects/62/905d92dcbc4d42abca75673293912c2470f640": "8dfef71789df824d961b011f68801d1b",
".git/objects/63/4f66e8a4417b49f719e83f04bd4fdc1270d107": "1fea4929575f82aa1b58f99d07b15d19",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/64/7d21e45ea35d51e04f35e8128f1fe495940afe": "76327f857e6281f1bc027efea31189bd",
".git/objects/64/b57986b5390614a28eea0bac1207e24cecf132": "ffc2b8f049c035791a1afa820bdaff7b",
".git/objects/65/18f616fc69936fcfc3c8db283bb05ae56ddb03": "eafd297da33526773a09d01bdf5f5636",
".git/objects/65/6af8572235b299cc99346cbed8f40d2d2ae9e9": "be1bb1d41b34c9895b0f169369128891",
".git/objects/66/ca3259c377b167529c3c511ea2a091d6ea0721": "de1a7b16c2507ddc91d0e1018a5a5f34",
".git/objects/67/106d73adc36499cef5f1bd66f4587cb75627c7": "2a4da6acc0b5542b1293927dcb910c06",
".git/objects/67/6274bea78e35972e644a91beedf51bc4a4304d": "a8156c8db391729527159cd0a4bdb730",
".git/objects/69/8f91b0359f1e559c4f8b0a53f42bcfa515a00a": "9d39d1d318796e534d52c6d0cf64cbb1",
".git/objects/6a/615341c713edb5a0d3a8b68931bfbcea38e32a": "6f88dc86326829ceaa025ead7570976a",
".git/objects/6c/7979464ab172366267f5da7fd02e8b80775964": "8d4c27bbf4d3f05cd23fb8240d227ae5",
".git/objects/6c/b05f75fc3bd05e8edf7d6dc84bedc7aa7d8052": "8500a96c5aefc42094a43c67ed4cc0bc",
".git/objects/6d/393d1cd23bb3d06676bc0194cfb69d77a2af78": "3eaca5225f6a71877c09f978de503bd9",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/72/424a04cfebc033e0e14ecfaf43c5dc2b321d5f": "9b7ef9207a999e33708c76c207f4091c",
".git/objects/73/2b4579a79c24ef90d20f3997ef848b760adf45": "7422616dbfa1960ce4bca5624e800339",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/74/27d84ffd12d1feb0f99b1ecdf16fc60dce2466": "4b23e0e5a2d8dcc3e1757b7c2e82fa52",
".git/objects/74/fce7ebedfd2c5672db4da95384e96405f8ab30": "a254dbd92c883ac02f36a9e37a114f9e",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/78/fefed0743a59dda2f5b02602bba99365e18f78": "e1392d20bcaae52d642fef7b04a30750",
".git/objects/79/688a6c8fb3118493e5de440e89618e7c5575ed": "76a8785f55a152d238198341a543f26c",
".git/objects/7a/c98fb48b8e1880f4d8befbd475b70a493996a4": "bf5aeeab3df8154abcb5ab5f7498d262",
".git/objects/7b/4697dc272fe77e3aa1c7a61a58a489077ec44b": "2f2cc42071a7e71fed17315a3cfe32f3",
".git/objects/7d/cd2d3c6d0853072892689987cedf3a2498987b": "6b465763947d4e46748f4795c348b7e6",
".git/objects/83/bb2c30adc4d68288f3d59a3c4e43383a971ebb": "84888685764dd4af29f90f6d8d45969b",
".git/objects/85/6c2236bd457bd733f8cef838a9f512f25fd618": "ad8d6ee09084fb2aecca50122889a95d",
".git/objects/88/378c5b2c111e39906ecab5491a40b1fcce5b82": "c4960983f082fab84768b1a13cc2e724",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/df52badbbf2a81143a3504e33c542420c9f25c": "bd1e786ab11986369be400f1825c9d5d",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8c/9c5b670ade09c1b2f6768bf683cdf05f3359f3": "9f41556dd0447f313b2116fdc8e776c0",
".git/objects/8c/b40c65ce19892e55863aa9a8904d7b448fb630": "72367175de12a21123d03e4c81742815",
".git/objects/8d/cb8dfda1add71c8fedb4f980e33539fc8f6fde": "0a941e2e1389c3cb5c65d3708aa51461",
".git/objects/8d/e969d017ca8504861b2aed0c74bad5cfb1f103": "161e37268b5fd2d6fa21ff09bbadc66f",
".git/objects/8f/0a56e7f87d43ce6ce2186ff7448bfbca326302": "7ed2870c5f73378d12035be3dd1a1652",
".git/objects/8f/21c82797562d338aa68ea1ca623008ffa70860": "4465d3a8fb2705cb5c2e2ab566aafd14",
".git/objects/8f/9624b87446f4c651ecbfacd52ea98ff75a2242": "5896f5b859f61cc1114b9f114a706a1d",
".git/objects/90/62a03e3747ac6863edfbfe0d68e70550750665": "9f407da68f58c10e4358fea24f73c565",
".git/objects/93/46fae092f268b7e39657ca06bc71c072c868cd": "edb31bb09e08ec4cea4449a313063062",
".git/objects/94/b40ef582bb8d2ac617452d909890996017ca70": "1b960a271d5dc86a4fd5ecb38a59706f",
".git/objects/96/dbcea94076f8aff17eae7172d86ba13b3c6416": "150e3c7fdf5ee94721473be986349063",
".git/objects/96/e7b15428ad7ba409b8bdce18b4cc72b41d770a": "a2c04a777d6670c2a704f4ec25631c2c",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/98/5227c3efd95c89123f4e75ddbc58c51a772ec1": "5e54b25401f06aacd52b0cac2b316c8e",
".git/objects/98/ac278f5a6aaf6e2650fcc13cb0745abc0cb3c2": "4316d30490c6c9354c259d48a8e4ee45",
".git/objects/98/c0faa53811b93f29e5bc932aac0357202e887b": "d6875f9c2fd6f04e4d3fa2f56d8a295b",
".git/objects/98/f9370a082c6214dcb9c4b7011865b02c4d19a6": "e6dd6325b306cddedeff990da0e36d61",
".git/objects/99/1c8979d168007b04f944492bb3d263764319ef": "c02590c7b7e8b8eada25f6c107e7ead2",
".git/objects/9b/cdfb1b028d76de1e66b37875a4d712d595da35": "f0937e27db6a78d3c1465fec00c1c396",
".git/objects/9d/cd45bf46f1b319807408b7a17c72d7b1fdfd31": "5f766488f08c8b6927772ae3b01bdb00",
".git/objects/a0/6eeb619f640ae85e1180542ab80e5a12a60245": "56306411bd310d2d66e99be8faa4505f",
".git/objects/a3/252e0beabe724dfb0fbce6956293719056a398": "6fd29a272ea1ca1ff77324741685202a",
".git/objects/a3/b1aef72456e33deb4ee6e7071ed65660c081ba": "ae3610cf7f1fbabb55349a3f161377bd",
".git/objects/a5/7b2754187b1026b768e8014a95e1b3313818bd": "8ef8d1d421c2bf34979439536b8515b6",
".git/objects/a8/04e9e211ae84900ba27c843b9bd8e023131bd4": "30d3dd36fe862d324ff9a8dba4ca9a5f",
".git/objects/aa/c9e56f57d157fe673a07aa3dd9ed506ea3a6e7": "f31dece0e3933fa679fd75958afcc0f3",
".git/objects/ab/22b4c9faff68d5865d2df624acf6007cbcbdd9": "a067133cabfd7295d1d64ab6bf11c3e1",
".git/objects/ac/c8245bcf5df5b3c402ff22a3a379da0cf97d01": "8833f4544b9cf2cee762e14cffeadddc",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/ad/a73c08d4ed3624b1ee08969f39615ea8d9fae1": "2c6e444602ddabee1130a50a2b20368e",
".git/objects/ae/6d009822dde468f4c1f922971590acce8b7e2e": "d8d6b74920a143815eb041496331fc2a",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b3/61f1248441219d82b8c007ad89c936cfd4f0fc": "ce261a5de4673856a1817d977c5a2be2",
".git/objects/b4/6942388396f141be80a54e0826b3aa10ed3a62": "c5aedb7700c73e892848437c8afb3812",
".git/objects/b5/24b0933c56babd2130fc3325618f02fe61d4b5": "85f8a48e7779acc2ce518d00eb434ded",
".git/objects/b7/31109e022fc1cd0ee8453f25e9d71a04de3e51": "b4fce9b78c63f76c4b4ef125bb9e250c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/40a661b1713d107fc7875f3b2b3b30e1e77a97": "fadd3abc9a1261085332438ec4534748",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/43f6cb641698204c6418ac6946e3b3b664492f": "66b9e33fbd4b8cfc9a6cecf0d72e735b",
".git/objects/b9/98f05087c4e884f2a3254d9aa41f647945ab24": "1cd48b98cffe5a7932cb0c24b6c2b2e1",
".git/objects/b9/a38aab45b999c6c828d2af8b927dc514c9b96c": "266c353e881f17c643c421d09c7fd169",
".git/objects/b9/d74c09df5d0b620e2e880791e90597ca6b436f": "a9b24bf44071dbb794a08d9886c41d03",
".git/objects/ba/7c53710163044faeea54afcff7924dba45caa8": "321fd7273cf3d40d31bb3aa416bccc72",
".git/objects/bc/c36eaa964d7d26b99cb546c4140512e37e3b77": "498d7e82dff585079d178b76c969f23b",
".git/objects/be/e74e0fcb1b41d7292ec86b17a368a4d79ccc67": "5fc613e221cc71c20f6b2d200cc256e5",
".git/objects/c0/df433c941450b1aff7a6ecd2104143c9ea65d5": "2e1cdce8db746e78ac59a3e27583c4bf",
".git/objects/c1/86b3392db596a5fdafe399dc6faa0e50b1523f": "35587489dad583b88d1da66b54ccff1b",
".git/objects/c1/ae16d7dfaf9dca1b08bdfc1ec97d0df3169674": "f4361cc3c75359e601357b1fef7ffc0a",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c4/dfb7e4807e11fceb1a7b16b0f305db502512d9": "fae7ce68c9ff76ad047b2709a73cc0b5",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c6/854a093ed545562f5982be3552c56c064112b4": "3835087c18d60b48dd1dbd7d04f36f37",
".git/objects/c7/b2c77069620bf31693c5068f6023f871855e90": "063dc922ade57599765ea12a9118c8e4",
".git/objects/ca/ac53a4d9ee7549a9444e4ea09abedbd80f7a95": "6fd3e92c2e64d4fcfa73ad72d5caad7f",
".git/objects/cb/9799d25dcd067b44dd7852e66b17c883499811": "02f638d3d85d058080336a5df494dccc",
".git/objects/cb/b03110111a10ca3061f3eb48b3cb07cb578dd3": "fbf7de4363ea0e39d865a92aebe53f30",
".git/objects/cc/732f12d51e009bb7a9689cce7c7cd2d8bb2d40": "ce51544bedf92fff13d2d9f61b1dc3c4",
".git/objects/cc/cabdf931bfa0ca5d97ac05e8471753a3e0f23f": "3e7b8d3d542b5181ffd58a3b607422ad",
".git/objects/cc/cfa53a5a5bf641bcddce484ff03e6948bcd10c": "0a2778aa599e0b3c73a1785d9aaf12be",
".git/objects/d0/75184eefbc23ffc4620479fb4574618ddc5875": "c29e0f04bb351ecad48300be4b7c76ca",
".git/objects/d2/109074ed8af1f53d12d9c9e4073e241c0950ba": "204a7ee7fb7474df1fa829999146215a",
".git/objects/d2/815001cddcee4db84c09609e49ba5385714d83": "a2fd45f2017acbb5b842125013eb32a2",
".git/objects/d3/71ada91f2085fc47d42c5a30a0e48f0d391c3c": "38a70ef6ec52366c5961d1fbd2fc695e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/120a7e0c59c13b7bf7712689b1a9f9f69a62e5": "4626ade962567d26740ef5938738949d",
".git/objects/d8/b307f3838be25e12371f1e0da9c22e53711392": "3cdf35a6133ccf42acfdbd40e08eba98",
".git/objects/d8/e8955955057f01d7aa437374968295e707ddb0": "6a7025fe7e72a32776da3e1cdffee84a",
".git/objects/db/0aa6e5dc16594d24f47c6834fb35a3520a2e02": "4c64e33df11bb6d71240aaaa0bd15c99",
".git/objects/de/793c6fe71578d9f8f30a9bad7b96ac1d61d6ab": "b5ce66796e3fbc2079d7afd51a2c0bb5",
".git/objects/e2/6b1e76dcf67ec8bb393e5193c09bb2c226fe9a": "9910a5059e671bb01a151f50d1cd194a",
".git/objects/e7/22c6162a04924db347584fc80c69c7e5092e0a": "0e68cb86039251f373f0a79780533af1",
".git/objects/e9/7493c138e9878bef2a82e81f5739b536341e10": "50560b0090c55d5fa86974103bbf3da9",
".git/objects/e9/a6dbb06b82939449307e9aab304628b3c46525": "da237aede30a8aadd229c82977a4dbbf",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/d7a71d587a7c3a00df0866ca4fa25fb7f7c83b": "b7b326449b1c429636cc7a6610425a5c",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ef/d4dd4a660d4e9e85bac43763ff9a1575a5d9de": "57866117236312e1f4745972e316a33c",
".git/objects/f0/4b56c4f80eb3cf71d82d0f571a001ed2e15ffc": "032c4f43f6d25b295e37cdf26cc91ef8",
".git/objects/f0/9b3c7d2564d5a3f951c757a18a52186c8e935c": "99e9cbc0bd2e21e4feb6fa65609672e5",
".git/objects/f0/eba39bbb6f41a6f71fcc3c078fd10f27f0f704": "e38281495b0a96ea6537da76fe50f77a",
".git/objects/f1/89cf8e0457d30f9a38218c94910e758aa2346c": "24ac47b1cb7732a115c67e37f4d29186",
".git/objects/f1/b0c2196080682ce05331beccde63140b24f2ef": "b2113a0ea73ed1b10d3fc1bb0ca5ee0a",
".git/objects/f1/dd6b858d490ad65d49686fcaea1380e01d0ac3": "5b13557641338b514ce6c4f9173a8138",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f7/ac812c9ec8a0854e833a6f59196845277968b9": "2b2ff92baeafbbd8c8a996e9e90637bc",
".git/objects/f9/ebd077538d4b8545f1382eac1a09c717b15400": "59d75e9f5c1ba584f4efb71182a18ea4",
".git/objects/fa/4ebbcbb43a6db4f9a600ed2e9a8f8db9ea85fc": "dd1db90bc0186483b2be406d363af47e",
".git/objects/fc/f59c177acd91508e68ba70e878841b6976d944": "2a31c0bd6f820a98973809d121d2ddfb",
".git/refs/heads/main": "5ec5c3d7c113613292468e28c7a58599",
".git/refs/remotes/origin/main": "5ec5c3d7c113613292468e28c7a58599",
"assets/AssetManifest.bin": "c3b0a0c3e1c7107476fb6438cb81df74",
"assets/AssetManifest.bin.json": "da6c65f59f55ec09d54e6167b18e9acd",
"assets/AssetManifest.json": "b406ffb77a75ff862e73273d0beb06ec",
"assets/assets/fonts/urbanist/Urbanist-Bold.ttf": "1ffe51e22e7841c65481a727515e2198",
"assets/assets/fonts/urbanist/Urbanist-Italic.ttf": "213b2ebe4092125001fa5d9f686ac1a0",
"assets/assets/fonts/urbanist/Urbanist-Light.ttf": "46ffc15bcd0fb7da54fc241cb43ece28",
"assets/assets/fonts/urbanist/Urbanist-Medium.ttf": "9ffbd4b23b829ddd499aaf5eb925a86c",
"assets/assets/fonts/urbanist/Urbanist-MediumItalic.ttf": "1497d007b844b9b86a871ff242929d51",
"assets/assets/fonts/urbanist/Urbanist-Regular.ttf": "4c1ae1074c39cca3b3fd7a788b5afd96",
"assets/assets/fonts/urbanist/Urbanist-SemiBold.ttf": "ae731014b8aa4267df78b8e854d006ef",
"assets/assets/icons/dashboard_images/3d_client_trend.png": "8481d71e25f16f7e3ff921a930ab6b86",
"assets/assets/icons/dashboard_images/3d_expanses.png": "96edf8aa5bc7934f935696c9d97b2892",
"assets/assets/icons/dashboard_images/3d_receiving.png": "1c1baee94505d741541710ba386cfdca",
"assets/assets/icons/dashboard_images/monthly_graph_chart.png": "bd6c0091ec74d17ac9318d3c61634e07",
"assets/assets/images/animations/104368-thank-you.json": "cb41def8492745f6da17aa174f24bc18",
"assets/assets/images/animations/110052-paper-plane.json": "f37753fd6490213aafe42c28ce082860",
"assets/assets/images/animations/120978-payment-successful.json": "23257c5bfbb6517be2883084bac86fe7",
"assets/assets/images/animations/136491-animation-lottie-car-rides.json": "c7be1f7cd21460d83e7af61b45c23294",
"assets/assets/images/animations/140429-pencil-drawing.json": "ad496d8fba433f392cac58a28f592c5a",
"assets/assets/images/animations/141397-loading-juggle.json": "18cd80a46915ce96176088f6de32cc17",
"assets/assets/images/animations/141594-animation-of-docer.json": "0447d6592aa7c62f7464b5a867a18bf7",
"assets/assets/images/animations/53207-empty-file.json": "798eedcbdacc86b43851c8f678c4eb83",
"assets/assets/images/animations/67263-security-icon-transparent.json": "c6aa8a75f3bdf204d2c7fe86a68076e0",
"assets/assets/images/animations/72462-check-register.json": "f025dd10b211685777be1fc8b9d43f37",
"assets/assets/images/animations/72785-searching.json": "42d6b09696a19c24719a8102a4f093c9",
"assets/assets/images/animations/98783-packaging-in-progress.json": "ad95f6974da0dbcbb295e6ca62997668",
"assets/assets/images/animations/cloud-uploading-animation.json": "1cd38deb1399a0368a650d21dc2fdcab",
"assets/assets/images/animations/congratulation.json": "ebfc8e95a2514d3f339c8d0b3912f773",
"assets/assets/images/animations/creating-product.gif": "5a3613a3e6f14f0abfb8e80d7a9cb929",
"assets/assets/images/animations/default-loader-animation.json": "0a0b121ec84940f613d27b4d72c75048",
"assets/assets/images/animations/lady-adding-product-in-cart-animation.json": "fa6f9ae5b579cf56ade9fec2d74010af",
"assets/assets/images/animations/loader-animation.json": "2f4d8873f57c144c9c1cc001c19fd2fd",
"assets/assets/images/animations/order-complete-car-delivery-animation.json": "f4ac9e34a730c64dad0940752f2438bd",
"assets/assets/images/animations/sammy-line-come-back-later.png": "bb489d0ad837808917ed0b3bd2c17d97",
"assets/assets/images/animations/sammy-line-man-receives-a-mail.png": "05ecfa9b154cb7fe1d4f4339119a3b45",
"assets/assets/images/animations/sammy-line-sale.png": "c8cf76d47496487772f231d41e3673ed",
"assets/assets/images/animations/sammy-line-success.png": "4aaf57cacb9b7514f345bd45cea880e1",
"assets/assets/images/animations/sammy-line-travel-backpack-with-passport-and-air-ticket.gif": "a691c26c3c08c432f68ce4b117dcb6a0",
"assets/assets/images/animations/sammy-line-workout.gif": "32c3916fc369a730a7aa7a6c24b9583e",
"assets/assets/images/animations/tick-confetti.json": "ebfc8e95a2514d3f339c8d0b3912f773",
"assets/assets/images/animations/uploading-document.json": "a7c973378012ac7a2857955b8c7e6e32",
"assets/assets/images/animations/uploading-done.json": "684c443c716f99421747aae5a9c6ebbe",
"assets/assets/images/animations/uploading-files-from-computer-to-cloud-storage.gif": "ee0de1d1b3bbaeaf6413fe55e8e1dbdc",
"assets/assets/images/content/CashPurchasing.png": "ae8ba8d109f143fbc048bf1ccea1fe81",
"assets/assets/images/content/ClientLedger.png": "bbaf7b9e35a5a2101b995b2d8f69dace",
"assets/assets/images/content/ClientPaymentRecieving.png": "95f140dc49ee740e937d89184ca0aa7a",
"assets/assets/images/content/Client_Logo.png": "9eaef210d86a2a3d3bc8c80f58946091",
"assets/assets/images/content/Contractor_Expanses.png": "ae4495cc05fddc4855d173495ecd09b3",
"assets/assets/images/content/Contractor_Logo.png": "7ea994df545478e45a705be37bdf6d9e",
"assets/assets/images/content/CreditClear.png": "749f7e550b5df429fc0db5eee8b93304",
"assets/assets/images/content/CreditPurchase.png": "245e67c085efe1b47bdd1a2f3fbb6009",
"assets/assets/images/content/default-image-icon.png": "adc3e03ee76f67785309b761c731a0c7",
"assets/assets/images/content/default-images-icon.png": "d891e5ee15e14498bdb690461e14d974",
"assets/assets/images/content/default_image.png": "79794da0bf39e1aa1ed0d76ca08ddfde",
"assets/assets/images/content/Financial_PIeChart.png": "93bc7f2c730377ed6eb27d55501c4f6b",
"assets/assets/images/content/ManagementLedger.png": "a207d3ec3e825de379e8e4f620495300",
"assets/assets/images/content/management_charges.png": "b9d8e8bf3ea13ab101c2ff476746492e",
"assets/assets/images/content/Office_Expanses.png": "fc14701cbb46fdde8f82ab1cea016f62",
"assets/assets/images/content/Other_Logo.png": "ef0c73f2395af2e530669503178b703b",
"assets/assets/images/content/SingleFinancialGraph.jpg": "7a7d8f2816182480d2a6cecc0bd2ee97",
"assets/assets/images/content/tiny-color-palette.png": "b7e756302d4e0b3ce3d7ba87fa5b555c",
"assets/assets/images/content/tiny-man-maintaining-a-work-life-balance.png": "4276412c3f27426077b7e8e6dcec184e",
"assets/assets/images/content/user.jpg": "7af9f2268e64db0f9efdcfa42da7de5c",
"assets/assets/images/content/user.png": "f9e447f2bebc53ca0294824e2db43c82",
"assets/assets/images/content/VendorLedger.png": "9dda5bca299fc5816420746a68b694fb",
"assets/assets/images/content/Vendor_Logo.png": "b58c35ae12f31111224cc62685a029c2",
"assets/assets/logos/facebook-icon.png": "be0423f843fc36586991cbf92c059422",
"assets/assets/logos/google-icon.png": "b95e5615716a3ae4b62f14a430bb1253",
"assets/assets/logos/reidius_infra_logo.jpg": "ac33e469f13575fb52110c2884b21a53",
"assets/FontManifest.json": "38cb77e090d68c1abf721235a36a5a3e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "23b54daf914de380003e2f27611eb9f9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "dddc5c70148f56609c3fb6b29929388e",
"assets/packages/iconsax/lib/assets/fonts/iconsax.ttf": "071d77779414a409552e0584dcbfd03d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "5598b70ba5bcbb0ea2353c4d758cbb2e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8168a4bccec83c045d1079d3d82973f2",
"/": "8168a4bccec83c045d1079d3d82973f2",
"main.dart.js": "b7740e97ccde3435e9c97b96aa7dfb1a",
"manifest.json": "ef14fbf4c108ca54013627a424f03a76",
"README.md": "42d6e29d464f9b88a93a06a3534a20dc",
"version.json": "316676d49b42cec43a682d34ae4f0e3e"};
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
