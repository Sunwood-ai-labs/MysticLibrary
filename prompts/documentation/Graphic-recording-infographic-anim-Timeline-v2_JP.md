# タイムライン付きグラフィックレコーディング (グラレコ) HTML 作成プロンプト V2

## 目的
以下の内容を、超一流デザイナーが作成したような、日本語で完璧なグラフィックレコーディング風のHTMLインフォグラフィックに変換してください。情報設計とビジュアルデザインの両面で最高水準を目指します。
手書き風の図形やアイコンを活用して内容を視覚的に表現します。

## デザイン仕様
### 1. カラースキーム
```
<palette>
<color name='イラスト-1' rgb='5BA67B' r='91' g='165' b='123' />
<color name='イラスト-2' rgb='F2BB13' r='242' g='186' b='19' />
<color name='イラスト-3' rgb='F2DB94' r='242' g='218' b='147' />
<color name='イラスト-4' rgb='BF8665' r='191' g='134' b='101' />
<color name='イラスト-5' rgb='BF190A' r='191' g='24' b='9' />
</palette>
```

### 2. グラフィックレコーディング要素

- 日本語の手書き風フォントの使用（Yomogi, Zen Kurenaido, Kaisei Decol）
- 手描き風の囲み線、矢印、バナー、吹き出し
- テキストと視覚要素（アイコン、シンプルな図形）の組み合わせ
- キーワードの強調（色付き下線、マーカー効果）
- 関連する概念を線や矢印で接続
- Font Awesome アイコンを効果的に配置
- タイムライン表示を使用して情報の流れを視覚化

### 3. タイポグラフィ
- タイトル：32px、グラデーション効果、太字
- サブタイトル：16px、#475569
- セクション見出し：18px、アイコン付き
- 本文：14px、#334155、行間1.4
- フォント指定：
  ```html
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Kaisei+Decol&family=Yomogi&family=Zen+Kurenaido&display=swap');
  </style>
  ```

## グラフィックレコーディング表現技法
- テキストと視覚要素のバランスを重視
- キーワードを囲み線や色で強調
- 簡易的なアイコンや図形で概念を視覚化
- 大きな背景アイコンで視覚的なインパクトを追加
- 接続線や矢印で情報間の関係性を明示
- 余白を効果的に活用して視認性を確保
- アニメーションやホバーエフェクトで動きを表現

### タイムラインCSSコード例
```css
@import url("https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@100;300&display=swap");

* {
	box-sizing: border-box;
}

html {
	scroll-behavior: smooth;
}

body {
	margin: 0;
	font-family: "Londrina Solid", Arial, Helvetica, serif;
	overflow-x: hidden;
	background: #080808;
}

body:before {
	content: "";
	position: fixed;
	height: 100vh;
	width: 100vh;
	background: url(https://cdn.josetxu.com/img/ss-sun.jpg);
	left: -90vh;
	top: 0;
	border-radius: 100%;
	box-shadow: 0 0 10em 5em #ff66006b, 0 0 100px 50px #ff6600 inset,
		0 0 10px 5px #ffcc00f2, 0 0 10px 5px #ffcc00f2 inset;
	filter: blur(2px);
	z-index: 2;
	animation: spin 300s ease 0s infinite;
}

@keyframes spin {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}

body:after {
	content: "";
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	z-index: -2;
	background: #080808;
	background-image: radial-gradient(2px 2px at 20px 30px, #fff, #fff0),
		radial-gradient(1px 1px at 43px 75px, #fff, #fff0),
		radial-gradient(2px 1px at 54px 184px, #fff, #fff0),
		radial-gradient(2px 2px at 93px 47px, #e6e6e6, #fff0),
		radial-gradient(1px 1px at 148px 87px, #e8e8e8, #fff0),
		radial-gradient(1px 2px at 193px 137px, #fff, #fff0),
		radial-gradient(1px 1px at 210px 154px, #f5f5f5, #fff0),
		radial-gradient(2px 1px at 243px 102px, #e2e2e2, #fff0),
		radial-gradient(2px 1px at 264px 184px, #fff, #fff0),
		radial-gradient(2px 2px at 293px 44px, #efefef, #fff0),
		radial-gradient(1px 1px at 223px 62px, #ececec, #fff0),
		radial-gradient(1px 2px at 249px 162px, #fff, #fff0),
		radial-gradient(1px 1px at 73px 99px, #eaeaea, #fff0),
		radial-gradient(1px 2px at 163px 42px, #efefef, #fff0),
		linear-gradient(-90deg, #20005850 0%, #000 50%, #20005850 100%);
	background-repeat: repeat;
	background-size: 333px 263px, 333px 293px, 333px 363px, 333px 463px,
		433px 193px, 333px 203px, 633px 223px, 333px 263px, 333px 285px, 333px 179px,
		333px 163px, 333px 363px, 533px 163px, 333px 213px, 100% 100%;
}

.content {
	width: 100vw;
	height: 100vh;
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
}

h1 {
	text-align: center;
	color: #fff;
	width: 100%;
	background: linear-gradient(180deg, #000 65%, #000b, #0008, #0004, #0000);
	margin: 0;
	padding: 3vmin 0 8vmin 0;
	position: fixed;
	z-index: 1;
	font-size: 5vmin;
	letter-spacing: 0.25vmin;
}

.timeline {
	position: relative;
	max-width: 1200px;
	margin: 0 auto;
	padding: 30vh 2vmin 2vmin 2vmin;
}

.timeline::before {
	content: "";
	position: fixed;
	width: 100vw;
	bottom: 0;
	left: 0;
	z-index: 1;
	background: linear-gradient(180deg, #fff0, #000 22vh 100vh);
	height: 33vh;
}

.timeline::after {
	content: "";
	position: absolute;
	width: 0.5vmin;
	background: linear-gradient(
		180deg,
		red 0 47vh,
		orange 0 296vh,
		#0f760f 0 663vh,
		#196099 0 751vh,
		#fff 0 100%
	);
	background: #fff;
	top: 0;
	bottom: 0;
	left: 50%;
	margin-left: -0.25vmin;
	z-index: -1;
}

.timeline li {
	text-align: right;
	background: red;
	list-style-type: none;
	padding: 0 4vmin 0 0;
	position: relative;
	background-color: inherit;
	width: 50%;
	perspective: 30vmin;
	perspective-origin: bottom;
}

.timeline li:nth-child(even) {
	text-align: left;
	left: 50%;
	padding: 0 0 0 4vmin;
}

.timeline li:before {
	content: " ";
	height: 0;
	position: absolute;
	top: 1vmin;
	width: 0;
	z-index: 1;
	right: 3vmin;
	border: medium solid #fff;
	border-width: 1vmin 0 1vmin 1vmin;
	border-color: #fff0 #fff0 #fff0 #fff;
}

.timeline li:nth-child(even):before {
	border-color: #fff0 #fff #fff0 #fff0;
	border-width: 1vmin 1vmin 1vmin 0;
	right: inherit;
	left: 3vmin;
}

.timeline li:after {
	content: "";
	position: absolute;
	width: 4.5vmin;
	height: 4.5vmin;
	right: -2.25vmin;
	background-color: white;
	border: 0.5vmin solid #000;
	top: -0.25vmin;
	border-radius: 50%;
	z-index: 1;
	background: url(https://cdn.josetxu.com/img/planet-earth.png);
	background-size: contain;
	box-sizing: border-box;
}

.timeline li:nth-child(even):after {
	left: -2.25vmin;
}

.timeline li > * {
	width: 100%;
	display: inline-block;
	padding: 0.5vmin;
}

.timeline li h2 {
	position: absolute;
	top: -40vh;
	margin: 0;
	left: 0;
}

.timeline li time {
	background: #fff;
	float: right;
	width: auto;
	font-size: 3vmin;
	border-radius: 0.25vmin;
}

.timeline li:nth-child(even) time {
	float: left;
}

.timeline li time span {
	font-size: 1.5vmin;
	line-height: 0.25vmin;
	top: -1vmin;
	position: relative;
	margin-left: 0.5vmin;
	color: #666;
}

.timeline li time span em {
	font-size: 1.1vmin;
	text-transform: uppercase;
	font-style: normal;
	color: #999;
	float: right;
}

.timeline li time strong {
	font-weight: normal;
	color: red;
}

.timeline li > strong {
	color: #cddc39;
	font-weight: 300;
	padding: 0.25vmin 0;
}

.timeline li > strong span {
	float: right;
	background: #000000;
	padding: 0.5vmin 1vmin;
	border-radius: 0.25vmin;
	width: 26vmin;
	font-size: 1.85vmin;
	letter-spacing: 0.025vmin;
}

.timeline li:nth-child(even) > strong span {
	float: left;
}

.timeline li > span a {
	position: absolute;
	top: 8.9vmin;
	right: 4.5vmin;
	width: 25vmin;
	height: 10vmin;
	background: #ffffff80;
	text-decoration: none;
	text-align: center;
	font-weight: 100;
	font-size: 5vmin;
	line-height: 10vmin;
	color: #000000ad;
	opacity: 0;
}

.timeline li:nth-child(even) > span a {
	right: inherit;
}

.timeline li > span a:before {
	content: "+";
}

.timeline li > span a:hover {
	opacity: 1;
}

.timeline li > span {
	overflow: hidden;
	transition: all 0.5s ease 0s;
	background: #043f5c;
	right: 2vmin;
	margin-top: -0.5vmin;
	width: auto;
	color: #fff;
	border-radius: 0.25vmin;
	display: inline-grid;
	font-weight: 100;
	letter-spacing: 0.1vmin;
}

.timeline li:nth-child(even) > span {
	right: initial;
	left: 2vmin;
	transform-origin: left top;
}

.timeline li:last-of-type {
	margin-bottom: 45vmin;
}

.timeline li > span:before {
	content: "";
	float: right;
	width: 25vmin;
	height: 10vmin;
	background: #fff;
	background-size: cover;
	background-position: center;
}

.timeline li:nth-child(1) > span:before {
	background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Artist%27s_concept_of_collision_at_HD_172555.jpg/270px-Artist%27s_concept_of_collision_at_HD_172555.jpg);
}

.timeline li:nth-child(2) > span:before {
	background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Halobacteria.jpg/180px-Halobacteria.jpg);
}

.timeline li:nth-child(3) > span:before {
	background-image: url(https://upload.wikimedia.org/wikipedia/commons/4/49/Plagiomnium_affine_laminazellen.jpeg);
}

.timeline li:nth-child(4) > span:before {
	background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Gabonionta_I.jpg/220px-Gabonionta_I.jpg);
	background-position: center 70%;
}

.timeline li:nth-child(5) > span:before {
	background-image: url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvXGyyIgTZMJ8RH9m96Pbwbbt55zA2YjZhxnEPgofAFO6FlAfot_PbFQ9djWq3jLurS9E);
	background-position: center 85%;
}

.timeline li:nth-child(6) > span:before {
	background-image: url(https://cosmosmagazine.com/wp-content/uploads/2020/03/191129-Caveasphaera-e1604633117908.jpg);
}

.timeline li:nth-child(7) > span:before {
	background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/DickinsoniaCostata.jpg/200px-DickinsoniaCostata.jpg);
}

.timeline li:nth-child(8) > span:before {
	background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Marrella_%28fossil%29.png/220px-Marrella_%28fossil%29.png);
}

.timeline li:nth-child(9) > span:before {
	background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Tiktaalik_Chicago.JPG/220px-Tiktaalik_Chicago.JPG);
}

.timeline li:nth-child(10) > span:before {
	background-image: url(https://upload.wikimedia.org/wikipedia/commons/1/1c/Marasuchus.JPG);
	background-position: center top;
}

.timeline li:nth-child(11) > span:before {
	background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Iziko_Thrinaxodon_fossil.JPG/220px-Iziko_Thrinaxodon_fossil.JPG);
	background-position: center 50%;
	background-size: 110%;
}

.timeline li:nth-child(12) > span:before {
	background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Notharctus_tenebrosus_AMNH.jpg/220px-Notharctus_tenebrosus_AMNH.jpg);
	background-position: center top;
}

.timeline li:nth-child(13) > span:before {
	background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Proconsul_skeleton_reconstitution_%28University_of_Zurich%29.JPG/220px-Proconsul_skeleton_reconstitution_%28University_of_Zurich%29.JPG);
}

.timeline li:nth-child(14) > span:before {
	background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/NHM_-_Australopithecus_afarensis_Modell_1.jpg/185px-NHM_-_Australopithecus_afarensis_Modell_1.jpg);
	background-position: center 75%;
}

.timeline li:nth-child(15) > span:before {
	background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Australopithecus_afarensis_%28%E2%80%9ELucy%29_Rekonstruktion.jpg/250px-Australopithecus_afarensis_%28%E2%80%9ELucy%29_Rekonstruktion.jpg);
	background-position: center top;
}

.timeline li:nth-child(16) > span:before {
	background-image: url(https://upload.wikimedia.org/wikipedia/commons/7/73/Homo_habilis_-_forensic_facial_reconstruction.png);
}

.timeline li:nth-child(17) > span:before {
	background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Em_-_Homo_sapiens_man_model_-_3.jpg/800px-Em_-_Homo_sapiens_man_model_-_3.jpg);
	background-position: center 10%;
}

.timeline li:nth-child(18) > span:before {
	background-image: url(https://assets.codepen.io/256997/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1553807095&width=512);
	background-position: center 37%;
}

.timeline li > span:after {
	content: "";
	width: 25vmin;
	text-shadow: 0 0 1px #000, 0 0 1px #000;
	font-size: 1.85vmin;
}

.timeline li:nth-child(1) > span:after {
	content: "A Mars-sized planet collides with Earth, and the debris forms the Moon.";
}

.timeline li:nth-child(2) > span:after {
	content: "Putative fossilized microorganisms found in hydrothermal vent precipitates.";
}

.timeline li:nth-child(3) > span:after {
	content: "Use light energy to assemble sugars from carbon dioxide and a hydrogen and electron source such as water.";
}

.timeline li:nth-child(4) > span:after {
	content: "Macroscopic organisms founded in Gabon can be earliest form of multicellular life.";
}

.timeline li:nth-child(5) > span:after {
	content: "Were small, unicellular or filamentous, with simple branching.";
}

.timeline li:nth-child(6) > span:after {
	content: "Caveasphaera is a multicellular organism not easily defined as an animal or non-animal.";
}

.timeline li:nth-child(7) > span:after {
	content: "Enigmatic tubular and frond-shaped, mostly sessile, organisms.";
}

.timeline li:nth-child(8) > span:after {
	content: "The variety of life became much more complex, earliest arthropods and molluscs born.";
}

.timeline li:nth-child(9) > span:after {
	content: "The specific aquatic ancestors of the tetrapods and the process by which they colonized Earth's land remains unclear.";
}

.timeline li:nth-child(10) > span:after {
	content: "They were the dominant terrestrial vertebrates for 135 million years, until 66 million years ago, when most dinosaur groups became extinct during the Cretaceous-Tertiary mass extinction.";
}

.timeline li:nth-child(11) > span:after {
	content: "First presence of mammary glands, a neocortex region on the brain, fur or hair, and three middle ear bones.";
}

.timeline li:nth-child(12) > span:after {
	content: "Fingers elongated for clamping onto branches, including the development of a thumb and flexible spine.";
}

.timeline li:nth-child(13) > span:after {
	content: "Tailless primates with a wider degree of freedom of motion at the shoulder joint as evolved by the influence of brachiation.";
}

.timeline li:nth-child(14) > span:after {
	content: "Primates adapted to walk upright in a bipedal posture, hands with a developed thumb are more apt to manipulate objects.";
}

.timeline li:nth-child(15) > span:after {
	content: "One of the species of this genus gave rise to the genus Homo in Africa";
}

.timeline li:nth-child(16) > span:after {
	content: "Earliest manufactured stone-tools, mainly used in butchering.";
}

.timeline li:nth-child(17) > span:after {
	content: "Characterized by complex brains that has enabled the development of advanced tools, culture, and language.";
}

.timeline li:nth-child(18) > span:after {
	content: "You who are reading this right now...";
}

.selector {
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 10vmin;
	background: linear-gradient(180deg, #fff0 0 32%, #fff8 0 34%, #fff0 0 100%);
	z-index: 3;
	padding-top: 6vmin;
}

.selector a {
	opacity: 1;
	position: absolute;
	margin: 1px;
	left: 0;
	text-decoration: none;
	background: white;
	padding: 0.15vmin 0.25vmin 0.1vmin;
	min-width: 2vw;
	display: inline-block;
	color: red;
	border-left: 1px solid #000;
	font-size: 1.65vmin;
}

.selector a:before {
	content: "";
	width: 2.5vmin;
	height: 2.5vmin;
	position: absolute;
	top: -4vmin;
	background: url(https://cdn.josetxu.com/img/planet-earth.png);
	background-size: contain;
	background-repeat: no-repeat;
	box-shadow: 0 0 1vmin 0 #000;
	border-radius: 100%;
}

.selector a:after {
	content: "";
	margin-left: 0.25vmin;
	font-size: 1.5vmin;
	position: absolute;
	border: 0.75vmin solid transparent;
	border-bottom-color: #fff;
	top: -1.5vmin;
	left: 0.5vmin;
}

.selector a span {
	font-size: 1.25vmin;
	color: #333;
	margin-left: 0.25vmin;
}

a[href="#birth"]:before {
	box-shadow: 0 0 0.15vmin 0.35vmin #2a1100;
}

a[href="#birth"] {
	left: 1vw;
}
a[href="#know"] {
	left: 7vw;
}
a[href="#photosynthesis"] {
	left: 11vw;
}
a[href="#multicellular"] {
	left: 21vw;
}

a[href="#plants"] {
	left: 32vw;
}
a[href="#animals"] {
	left: 36vw;
}
a[href="#ediacaran"] {
	left: 42vw;
}
a[href="#cambrian"] {
	left: 45.5vw;
}

a[href="#tetrapods"] {
	left: 52vw;
}
a[href="#dinosaurus"] {
	left: 57vw;
}
a[href="#mammals"] {
	left: 60.5vw;
}
a[href="#primates"] {
	left: 67vw;
}

a[href="#apes"] {
	left: 73vw;
}
a[href="#hominini"] {
	left: 78vw;
}
a[href="#australopithecus"] {
	left: 81vw;
}
a[href="#habilis"] {
	left: 84vw;
}
a[href="#sapiens"] {
	left: 90vw;
}
a[href="#developer"] {
	left: 95vw;
}

a strong {
	background: #1c1c1c;
	color: #cddc39;
	position: absolute;
	top: 9vmin;
	font-weight: 300;
	padding: 0.5vmin 0.75vmin;
	width: max-content;
	border-radius: 0.25vmin;
	left: 0;
	transition: top 0.1s ease 0s;
	z-index: -1;
}

a:hover strong {
	top: -9vmin;
	transition: top 0.5s ease 0s;
}

a strong:before {
	content: "";
	border: 0.85vmin solid #fff0;
	border-top-color: #1c1c1c;
	position: absolute;
	bottom: -1.7vmin;
}

.timeline li:nth-child(2) {
	margin-top: 40vh;
}
.timeline li:nth-child(3) {
	margin-top: 13vh;
}
.timeline li:nth-child(4) {
	margin-top: 62vh;
}
.timeline li:nth-child(5) {
	margin-top: 30vh;
}
.timeline li:nth-child(6) {
	margin-top: 9vh;
}
.timeline li:nth-child(7) {
	margin-top: 19vh;
}
.timeline li:nth-child(8) {
	margin-top: 8vh;
}
.timeline li:nth-child(9) {
	margin-top: 25vh;
}
.timeline li:nth-child(10) {
	margin-top: 9vh;
}
.timeline li:nth-child(11) {
	margin-top: 2vh;
}
.timeline li:nth-child(12) {
	margin-top: 22vh;
}
.timeline li:nth-child(13) {
	margin-top: 3vh;
}
.timeline li:nth-child(14) {
	margin-top: 8vh;
}
.timeline li:nth-child(15) {
	margin-top: 4vh;
}
.timeline li:nth-child(16) {
	margin-top: 5vh;
}
.timeline li:nth-child(17) {
	margin-top: 55vh;
}
.timeline li:nth-child(18) {
	margin-top: 10vh;
}

/*** PORTRAIT ***/

@media only screen and (orientation: portrait) {
	body:before {
		left: -95vh;
	}

	.timeline li time {
		font-size: 5vmin;
	}

	.timeline li > strong span,
	.timeline li > span:after {
		font-size: 2.5vmin;
	}

	.selector {
		width: 12vw;
		background: linear-gradient(90deg, #fff0 0 15%, #fff8 0 17%, #fff0 0 100%);
		top: 0;
		right: 0;
		height: 100vh;
	}
	.selector a {
		display: block;
		left: 4vmin;
		font-size: 2.25vmin;
	}

	.selector a:before {
		top: 0vmin;
		left: -3.5vmin;
	}

	.selector a:after {
		border-bottom-color: #fff0;
		border-right-color: #fff;
		top: 0.5vmin;
		left: -1.65vmin;
	}

	.selector a strong,
	.selector a:hover strong {
		display: none;
	}

	a[href="#birth"] {
		top: 2vh;
	}
	a[href="#know"] {
		top: 7vh;
	}
	a[href="#photosynthesis"] {
		top: 11vh;
	}
	a[href="#multicellular"] {
		top: 21vh;
	}
	a[href="#plants"] {
		top: 32vh;
	}
	a[href="#animals"] {
		top: 36vh;
	}
	a[href="#ediacaran"] {
		top: 42vh;
	}
	a[href="#cambrian"] {
		top: 45.5vh;
	}
	a[href="#tetrapods"] {
		top: 52vh;
	}
	a[href="#dinosaurus"] {
		top: 57vh;
	}
	a[href="#mammals"] {
		top: 60.5vh;
	}
	a[href="#primates"] {
		top: 67vh;
	}
	a[href="#apes"] {
		top: 73vh;
	}
	a[href="#hominini"] {
		top: 78vh;
	}
	a[href="#australopithecus"] {
		top: 81vh;
	}
	a[href="#habilis"] {
		top: 84vh;
	}
	a[href="#sapiens"] {
		top: 90vh;
	}
	a[href="#developer"] {
		top: 95vh;
	}
}

```

### タイムライン HTML 例
```html
<h1>Life on Earth Timeline</h1>

<div class="selector">
	<a href="#birth">4500<span>MYA</span><strong>Birth of the Earth</strong></a>
	<a href="#know">3800<span>MYA</span><strong>Earliest Known Life</strong></a>
	<a href="#photosynthesis">3400<span>MYA</span><strong>Earliest Photosynthetic Bacteria</strong></a>
	<a href="#multicellular">1600<span>MYA</span><strong>Earliest Multicellular Life</strong></a>
	<a href="#plants">850<span>MYA</span><strong>Earliest Plants</strong></a>
	<a href="#animals">750<span>MYA</span><strong>Earliest Animals</strong></a>
	<a href="#ediacaran">575<span>MYA</span><strong>Ediacaran Biota</strong></a>
	<a href="#cambrian">540<span>MYA</span><strong>Cambrian Explosion</strong></a>
	<a href="#tetrapods">340<span>MYA</span><strong>Earliest Tetrapods</strong></a>
	<a href="#dinosaurus">240<span>MYA</span><strong>Dinosaurus</strong></a>
	<a href="#mammals">225<span>MYA</span><strong>Mammals</strong></a>
	<a href="#primates">85/55<span>MYA</span><strong>Primates</strong></a>
	<a href="#apes">20<span>MYA</span><strong>Earliest Apes</strong></a>
	<a href="#hominini">6<span>MYA</span><strong>Hominini</strong></a>
	<a href="#australopithecus">4<span>MYA</span><strong>Australopithecus</strong></a>
	<a href="#habilis">2.5<span>MYA</span><strong>Homo Habilis</strong></a>
	<a href="#sapiens">0.2<span>MYA</span><strong>Homo Sapiens</strong></a>
	<a href="#developer">0<span>Years</span><strong>Homo Developer</strong></a>
</div>

<ul class="timeline">
	<li>
		<h2 id="birth"></h2>
		<time><strong>4500</strong><span>MILLION<br><em>years ago</em></span></time>
		<strong><span>Birth of the Earth</span></strong>
		<span><a target="_blank" href="https://en.wikipedia.org/wiki/Giant-impact_hypothesis"></a></span>
	</li>
	<li>
		<h2 id="know"></h2>
		<time><strong>3800</strong><span>MILLION<br><em>years ago</em></span></time>
		<strong><span>Earliest Known Life</span></strong>
		<span><a target="_blank" href="https://en.wikipedia.org/wiki/Earliest_known_life_forms"></a></span>
	</li>
	<li>
		<h2 id="photosynthesis"></h2>
		<time><strong>3400</strong><span>MILLION<br><em>years ago</em></span></time>
		<strong><span>Earliest Photosynthetic Bacteria</span></strong>
		<span><a target="_blank" href="https://en.wikipedia.org/wiki/Evolution_of_photosynthesis"></a></span>
	</li>
	<li>
		<h2 id="multicellular"></h2>
		<time><strong>1600</strong><span>MILLION<br><em>years ago</em></span></time>
		<strong><span>Earliest Multicellular Life</span></strong>
		<span><a target="_blank" href="https://en.wikipedia.org/wiki/Francevillian_biota"></a></span>
	</li>
	<li>
		<h2 id="plants"></h2>
		<time><strong>850</strong><span>MILLION<br><em>years ago</em></span></time>
		<strong><span>Earliest Plants</span></strong>
		<span><a target="_blank" href="https://en.wikipedia.org/wiki/Evolutionary_history_of_plants"></a></span>
	</li>
	<li>
		<h2 id="animals"></h2>
		<time><strong>750</strong><span>MILLION<br><em>years ago</em></span></time>
		<strong><span>Earliest Animals</span></strong>
		<span><a target="_blank" href="https://en.wikipedia.org/wiki/Caveasphaera"></a></span>
	</li>
	<li>
		<h2 id="ediacaran"></h2>
		<time><strong>575</strong><span>MILLION<br><em>years ago</em></span></time>
		<strong><span>Ediacaran Biota</span></strong>
		<span><a target="_blank" href="https://en.wikipedia.org/wiki/Ediacaran_biota"></a></span>
	</li>
	<li>
		<h2 id="cambrian"></h2>
		<time><strong>540</strong><span>MILLION<br><em>years ago</em></span></time>
		<strong><span>Cambrian Explosion</span></strong>
		<span><a target="_blank" href="https://en.wikipedia.org/wiki/Cambrian_explosion"></a></span>
	</li>
	<li>
		<h2 id="tetrapods"></h2>
		<time><strong>340</strong><span>MILLION<br><em>years ago</em></span></time>
		<strong><span>Earliest Tetrapods</span></strong>
		<span><a target="_blank" href="https://en.wikipedia.org/wiki/Evolution_of_tetrapods"></a></span>
	</li>
	<li>
		<h2 id="dinosaurus"></h2>
		<time><strong>240</strong><span>MILLION<br><em>years ago</em></span></time>
		<strong><span>Dinosaurus</span></strong>
		<span><a target="_blank" href="https://en.wikipedia.org/wiki/Dinosaur#Evolutionary_history"></a></span>
	</li>
	<li>
		<h2 id="mammals"></h2>
		<time><strong>225</strong><span>MILLION<br><em>years ago</em></span></time>
		<strong><span>Mammals</span></strong>
		<span><a target="_blank" href="https://en.wikipedia.org/wiki/Evolution_of_mammals"></a></span>
	</li>
	<li>
		<h2 id="primates"></h2>
		<time><strong>85/55</strong><span>MILLION<br><em>years ago</em></span></time>
		<strong><span>Primates</span></strong>
		<span><a target="_blank" href="https://en.wikipedia.org/wiki/Primate#Evolution"></a></span>
	</li>
	<li>
		<h2 id="apes"></h2>
		<time><strong>20</strong><span>MILLION<br><em>years ago</em></span></time>
		<strong><span>Earliest Apes</span></strong>
		<span><a target="_blank" href="https://en.wikipedia.org/wiki/Ape#Evolution"></a></span>
	</li>
	<li>
		<h2 id="hominini"></h2><time><strong>6</strong><span>MILLION<br><em>years ago</em></span></time>
		<strong><span>Hominini</span></strong>
		<span><a target="_blank" href="https://en.wikipedia.org/wiki/Hominini"></a></span>
	</li>
	<li>
		<h2 id="australopithecus"></h2>
		<time><strong>4</strong><span>MILLION<br><em>years ago</em></span></time>
		<strong><span>Australopithecus</span></strong>
		<span><a target="_blank" href="https://en.wikipedia.org/wiki/Australopithecus"></a></span>
	</li>
	<li>
		<h2 id="habilis"></h2>
		<time><strong>2.5</strong><span>MILLION<br><em>years ago</em></span></time>
		<strong><span>Homo Habilis</span></strong>
		<span><a target="_blank" href="https://en.wikipedia.org/wiki/Homo_habilis"></a></span>
	</li>
	<li>
		<h2 id="sapiens"></h2>
		<time><strong>200K</strong><span>YEARS<br><em>ago &nbsp; &nbsp; &nbsp; &nbsp;</em></span></time>
		<strong><span>Homo Sapiens</span></strong>
		<span><a target="_blank" href="https://en.wikipedia.org/wiki/Early_modern_human"></a></span>
	</li>
	<li>
		<h2 id="developer"></h2>
		<time><strong>0</strong><span>YEARS<br><em>ago &nbsp; &nbsp; &nbsp; &nbsp;</em></span></time>
		<strong><span>Homo Developer</span></strong>
		<span><a target="_blank" href="https://codepen.io/josetxu"></a></span>
	</li>
	<ul>
```

## 全体的な指針
- 読み手が自然に視線を移動できる配置
- 情報の階層と関連性を視覚的に明確化
- 手書き風の要素で親しみやすさを演出
- 視覚的な記憶に残るデザイン
- フッターに出典情報を明記
- **必須**: タイムラインには必ず「丸とフラップ装飾」を適用すること（上記CSS仕様を必ず含める）

## 変換する文章/記事

```
