---
title: "ギャラクシータイムライン付きグラフィックレコーディング (グラレコ) HTML 作成プロンプト V3"
sourcePath: "prompts/documentation/Graphic-recording-infographic-anim-Timeline-v3a_JP.md"
locale: "ja"
contentKind: "markdown"
---
> このページは prompts ソースツリーから自動生成されています。
> ソース: `prompts/documentation/Graphic-recording-infographic-anim-Timeline-v3a_JP.md`
> 英語版: [EN](/en/documentation/Graphic-recording-infographic-anim-Timeline-v3a)

# ギャラクシータイムライン付きグラフィックレコーディング (グラレコ) HTML 作成プロンプト V3

## 目的
以下の内容を、宇宙をテーマとした幻想的でポップな雰囲気のタイムライン形式グラフィックレコーディングHTMLに変換してください。情報設計とビジュアルデザインの両面で最高水準を目指します。手書き風の要素と宇宙の背景を活用して、神秘的かつ視覚的に魅力的なタイムラインを作成します。

## デザイン仕様
### 1. カラースキーム
```
<palette>
<color name='Tropical-Fruit-Punch-1' rgb='146152' r='19' g='96' b='82' />
<color name='Tropical-Fruit-Punch-2' rgb='44803F' r='67' g='127' b='62' />
<color name='Tropical-Fruit-Punch-3' rgb='B4CF66' r='179' g='206' b='101' />
<color name='Tropical-Fruit-Punch-4' rgb='FFEC5C' r='255' g='235' b='92' />
<color name='Tropical-Fruit-Punch-5' rgb='FF5A33' r='255' g='90' b='50' />
</palette>
```
**注記:** 上記のカラーパレットに合わせて、以下のCSS内の具体的なカラーコードも適宜変更してください。（例: `body:before` の光源色、`.timeline::after` のグラデーション色、マーカー色、ハイライト色など）

### 2. 宇宙テーマの視覚効果
- 暗い宇宙背景（#080808）に小さな星を散りばめる
- 左上に大きな「太陽」のような光源を配置（**パレットの主要色（例: Tropical-Fruit-Punch-4, 5）を使用**）
- アニメーションで光源に呼吸するような動きを与える
- 円形マーカーはカラフルな「惑星」のようなデザイン（**パレットの色を使用**）
- 全体に星屑のような微細な背景テクスチャを適用

### 3. タイムライン構造
- 中央に垂直のタイムラインを設置
- 項目を左右交互に配置
- 各項目に惑星風の丸いマーカーを追加
- 年代表示を浮き上がるカードのようにデザイン
- 底部または右側にクイックナビゲーションセレクターを配置
- マーカーとセレクターに輝く効果を追加

### 4. タイポグラフィとテキスト処理
- タイトル：夜空に輝く星のような発光効果を追加
- 日付：白背景に浮かぶ形で強調
- イベントタイトル：**パレットの明るい色（例: Tropical-Fruit-Punch-3, 4）で表示**
- 詳細テキスト：半透明の背景に明るいテキスト
- フォント指定：
  ```html
  &lt;style&gt;
  @import url('[https://fonts.googleapis.com/css2?family=Kaisei+Decol&family=Yomogi&family=Zen+Kurenaido&display=swap](https://fonts.googleapis.com/css2?family=Kaisei+Decol&family=Yomogi&family=Zen+Kurenaido&display=swap)');
  &lt;/style&gt;
  ```

### 5. 視覚的要素と強調
- Font Awesome アイコンで各イベントの内容を視覚化
- キーワードのハイライト（グラデーション下線効果 - **パレットの色（例: Tropical-Fruit-Punch-4）を使用**）
- 項目間に適切な余白を設け視認性を確保
- 半透明エフェクトとブラーで深度感を演出
- ホバー時のアニメーションで項目を浮き上がらせる

## CSS基本構造
```css
/* 宇宙背景の設定 */
body {
    background: #080808;
    color: #fff;
    overflow-x: hidden;
}

/* 太陽のような光源 (例: Tropical-Fruit-Punch-4 を中心に) */
body:before {
    content: "";
    position: fixed;
    height: 100vh;
    width: 100vh;
    /* 新パレットに合わせて色を調整 */
    background: radial-gradient(circle, rgba(255,235,92,1) 0%, rgba(255,235,92,0.7) 50%, rgba(255,235,92,0) 100%);
    left: -70vh;
    top: -20vh;
    border-radius: 100%;
    /* 新パレットに合わせて影色を調整 */
    box-shadow: 0 0 10em 5em rgba(255,235,92,0.4), 0 0 100px 50px rgba(255,235,92,0.6) inset,
        0 0 10px 5px rgba(255,90,50,0.9), 0 0 10px 5px rgba(255,90,50,0.8) inset;
    filter: blur(5px);
    z-index: 2;
    animation: glow 15s ease-in-out infinite alternate;
}

/* 星空の背景 (例: Tropical-Fruit-Punch-1, 5 の薄い色を使用) */
body:after {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -2;
    background: #080808;
    background-image:
        radial-gradient(2px 2px at 20px 30px, #fff, rgba(255,255,255,0)),
        radial-gradient(1px 1px at 43px 75px, #fff, rgba(255,255,255,0)),
        /* 多数の星を追加 */
        /* 新パレットに合わせてグラデーション色を調整 */
        linear-gradient(-90deg, rgba(19,96,82,0.3) 0%, #000 50%, rgba(255,90,50,0.3) 100%);
    background-repeat: repeat;
}

/* タイムラインの中央線 (新パレットの5色を使用) */
.timeline::after {
    content: "";
    position: absolute;
    width: 0.5vmin;
    background: linear-gradient(
        180deg,
        #146152 0 20vh, /* Tropical-Fruit-Punch-1 */
        #44803F 0 35vh, /* Tropical-Fruit-Punch-2 */
        #B4CF66 0 55vh, /* Tropical-Fruit-Punch-3 */
        #FFEC5C 0 75vh, /* Tropical-Fruit-Punch-4 */
        #FF5A33 0 100%  /* Tropical-Fruit-Punch-5 */
    );
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -0.25vmin;
    z-index: -1;
}

/* タイムライン項目 */
.timeline li {
    text-align: right;
    list-style-type: none;
    padding: 0 4vmin 0 0;
    position: relative;
    width: 50%;
    perspective: 30vmin;
}

/* 右側項目 */
.timeline li:nth-child(even) {
    text-align: left;
    left: 50%;
    padding: 0 0 0 4vmin;
}

/* 円形マーカー（惑星風 - 例: Tropical-Fruit-Punch-3 を使用） */
.timeline li:after {
    content: "";
    position: absolute;
    width: 4.5vmin;
    height: 4.5vmin;
    right: -2.25vmin;
    border: 0.5vmin solid #fff;
    top: -0.25vmin;
    border-radius: 50%;
    z-index: 1;
    /* 新パレットに合わせて色を調整 */
    background: radial-gradient(circle, rgba(179,206,101,1) 0%, rgba(179,206,101,0.7) 70%, rgba(179,206,101,0) 100%);
    box-shadow: 0 0 5px 2px rgba(179,206,101,0.7);
    /* liごとに色を変える場合は、nth-child などで指定 */
}

/* ナビゲーションセレクター */
.selector {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 10vmin;
    background: linear-gradient(180deg, rgba(255,255,255,0) 0 32%, rgba(255,255,255,0.5) 0 34%, rgba(255,255,255,0) 0 100%);
    z-index: 3;
    padding-top: 6vmin;
}
```

## HTML基本構造
```html
<h1>タイトル</h1>

<div class="selector">
    <a href="#section1">時期1<span>年代</span><strong>詳細説明</strong></a>
    <a href="#section2">時期2<span>年代</span><strong>詳細説明</strong></a>
    </div>

<ul class="timeline">
    <li>
        <h2 id="section1"></h2>
        <time><strong>年</strong><span>月日<br><em>カテゴリ</em></span></time>
        <strong><span>イベントタイトル</span></strong>
        <span>
            <i class="fa-solid fa-icon event-icon"></i>
            イベントの詳細説明。<span class="highlight">重要なキーワード</span>はハイライト。
        </span>
    </li>
    </ul>
```

## レスポンシブデザイン対応
- デスクトップ：左右に分かれたタイムライン、底部にセレクター
- モバイル縦向き：右側にセレクター、タイムラインは中央寄り
- モバイル一般：タイムラインを縦一列に変更、マーカー位置を調整

## 特殊効果とアニメーション
- 太陽の呼吸効果：`@keyframes glow { 0% { opacity: 0.7; } 100% { opacity: 1; } }`
- 惑星マーカーの輝き：`box-shadow: 0 0 5px 2px rgba(179,206,101,0.7);` (色はマーカー色に合わせる)
- テキストカードのホバー効果：`transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.15);`
- ナビゲーション項目のホバー効果：説明を上に浮かび上がらせる
- ハイライト：`background: linear-gradient(transparent 60%, rgba(255,235,92,0.4) 60%);` (**パレットの色（例: Tropical-Fruit-Punch-4）を使用**)

## 実装時の注意点
1. カラーパレットを一貫して使用し、宇宙テーマにふさわしい色調を維持
2. 光源と星の配置を調整して、タイムラインの可読性を損なわないよう注意
3. タイムライン項目間の空間を調整して、スムーズなスクロール体験を提供
4. Font Awesome アイコンを各イベントの性質に合わせて適切に選択
5. レスポンシブ表示時も視覚的なインパクトが維持されるよう調整

## 全体的な指針
- 宇宙の無限の広がりと時間の流れを視覚的に結びつける
- 読み手が自然に視線を移動できる配置と適切な余白
- 情報の階層と関連性を視覚的に明確化
- 手書き風と宇宙テーマを融合させた独自の美的感覚
- 各セクションを色で区別し、時代の変化を視覚的に表現
- フォント、色、アイコンの使用を一貫させて統一感を出す

## 具体的な例：年表や歴史的出来事、企業の発展史、プロジェクトの進捗などに最適
- テーマに合わせて太陽の色や背景の雰囲気を調整可能
- 各時代や段階ごとにマーカーの色を変えて区別（**Tropical-Fruit-Punch パレットの色を使用**）
- アイコンを変更して各イベントの性質を直感的に伝える

このプロンプトに沿って入力されたコンテンツを変換することで、宇宙空間を漂うようなユニークで魅力的なタイムラインインフォグラフィックが作成できます。
```

**主な変更点:**

* **`デザイン仕様` > `1. カラースキーム`** の `<palette>` 定義を、ご指定の `Tropical-Fruit-Punch` のものに置き換えました。
* CSS内の具体的なカラーコードを使用している箇所（光源、タイムライン中央線、マーカー、ハイライトなど）について、新しいパレットの色を使用するようにコメントで推奨し、一部の例を更新しました。実際にHTML/CSSを生成する際には、これらの箇所を新しいパレットに基づいて調整する必要があります。
* デザイン仕様や指針の中の「パレットの色を使用」という記述が、新しい `Tropical-Fruit-Punch` パレットを参照するようにしました。

これで、指定された `Tropical-Fruit-Punch` カラーマップに基づいたグラフィックレコーディングHTMLを作成するためのプロンプトとして利用できます。
