# ギャラクシータイムライン付きグラフィックレコーディング (グラレコ) HTML 作成プロンプト V3

## 目的
以下の内容を、宇宙をテーマとした幻想的でポップな雰囲気のタイムライン形式グラフィックレコーディングHTMLに変換してください。情報設計とビジュアルデザインの両面で最高水準を目指します。手書き風の要素と宇宙の背景を活用して、神秘的かつ視覚的に魅力的なタイムラインを作成します。

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

### 2. 宇宙テーマの視覚効果
- 暗い宇宙背景（#080808）に小さな星を散りばめる
- 左上に大きな「太陽」のような光源を配置（パレットの主要色を使用）
- アニメーションで光源に呼吸するような動きを与える
- 円形マーカーはカラフルな「惑星」のようなデザイン
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
- イベントタイトル：パレットの明るい色で表示
- 詳細テキスト：半透明の背景に明るいテキスト
- フォント指定：
  ```html
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Kaisei+Decol&family=Yomogi&family=Zen+Kurenaido&display=swap');
  </style>
  ```

### 5. 視覚的要素と強調
- Font Awesome アイコンで各イベントの内容を視覚化
- キーワードのハイライト（グラデーション下線効果）
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

/* 太陽のような光源 */
body:before {
    content: "";
    position: fixed;
    height: 100vh;
    width: 100vh;
    background: radial-gradient(circle, rgba(91,166,123,1) 0%, rgba(91,166,123,0.7) 50%, rgba(91,166,123,0) 100%);
    left: -70vh;
    top: -20vh;
    border-radius: 100%;
    box-shadow: 0 0 10em 5em rgba(91,166,123,0.4), 0 0 100px 50px rgba(91,166,123,0.6) inset,
        0 0 10px 5px rgba(242,187,19,0.9), 0 0 10px 5px rgba(242,187,19,0.8) inset;
    filter: blur(5px);
    z-index: 2;
    animation: glow 15s ease-in-out infinite alternate;
}

/* 星空の背景 */
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
        linear-gradient(-90deg, rgba(91,166,123,0.3) 0%, #000 50%, rgba(191,25,10,0.3) 100%);
    background-repeat: repeat;
}

/* タイムラインの中央線 */
.timeline::after {
    content: "";
    position: absolute;
    width: 0.5vmin;
    background: linear-gradient(
        180deg,
        #5BA67B 0 20vh,
        #F2BB13 0 35vh,
        #BF8665 0 55vh,
        #BF190A 0 75vh,
        #5BA67B 0 100%
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

/* 円形マーカー（惑星風） */
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
    background: radial-gradient(circle, rgba(91,166,123,1) 0%, rgba(91,166,123,0.7) 70%, rgba(91,166,123,0) 100%);
    box-shadow: 0 0 5px 2px rgba(91,166,123,0.7);
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
    <!-- 他のセクションリンク -->
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
    <!-- 他のタイムライン項目 -->
</ul>
```

## レスポンシブデザイン対応
- デスクトップ：左右に分かれたタイムライン、底部にセレクター
- モバイル縦向き：右側にセレクター、タイムラインは中央寄り
- モバイル一般：タイムラインを縦一列に変更、マーカー位置を調整

## 特殊効果とアニメーション
- 太陽の呼吸効果：`@keyframes glow { 0% { opacity: 0.7; } 100% { opacity: 1; } }`
- 惑星マーカーの輝き：`box-shadow: 0 0 5px 2px rgba(91,166,123,0.7);`
- テキストカードのホバー効果：`transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0,0,0,0.15);`
- ナビゲーション項目のホバー効果：説明を上に浮かび上がらせる
- ハイライト：`background: linear-gradient(transparent 60%, rgba(242,187,19,0.4) 60%);`

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
- 各時代や段階ごとにマーカーの色を変えて区別
- アイコンを変更して各イベントの性質を直感的に伝える

このプロンプトに沿って入力されたコンテンツを変換することで、宇宙空間を漂うようなユニークで魅力的なタイムラインインフォグラフィックが作成できます。
