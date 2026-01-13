# タイムライン付きグラフィックレコーディング (グラレコ) HTML 作成プロンプト V1

## 目的
以下の内容を、超一流デザイナーが作成したような、日本語で完璧なグラフィックレコーディング風のHTMLインフォグラフィックに変換してください。情報設計とビジュアルデザインの両面で最高水準を目指します。
手書き風の図形やアイコンを活用して内容を視覚的に表現します。

## デザイン仕様
### 1. カラースキーム
```
<palette>
<color name='イラスト-1' rgb='027333' r='2' g='114' b='51' />
<color name='イラスト-2' rgb='4E7329' r='78' g='114' b='41' />
<color name='イラスト-3' rgb='F2B705' r='242' g='182' b='4' />
<color name='イラスト-4' rgb='F29F05' r='242' g='159' b='4' />
<color name='イラスト-5' rgb='D97904' r='216' g='121' b='4' />
</palette>
```

### 2. グラフィックレコーディング要素
- 左上から右へ、上から下へと情報を順次配置
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

### 4. レイアウト
- ヘッダー：左揃えタイトル＋右揃え日付/出典
- タイムライン構成を使用して手順や段階を表示
- カード型コンポーネント：白背景、角丸12px、微細シャドウ
- セクション間の適切な余白と階層構造
- 適切にグラスモーフィズムを活用
- コンテンツの横幅は100%にして
- **必須**: タイムラインアイテムには必ず「丸とフラップ装飾」を含める

### 5. コードブロック表示
- 背景色を #252140（イラスト-3カラー）に設定
- 左側に #A62648（イラスト-1カラー）のアクセントボーダーを追加
- シンタックスハイライトにパレットカラーを使用
- 言語に応じた色分け（JSON、YAML、ENV、BASH等）
- コードブロック右上に言語ラベルを表示
- 日本語手書き風フォントを適用

## グラフィックレコーディング表現技法
- テキストと視覚要素のバランスを重視
- キーワードを囲み線や色で強調
- 簡易的なアイコンや図形で概念を視覚化
- 大きな背景アイコンで視覚的なインパクトを追加
- 接続線や矢印で情報間の関係性を明示
- 余白を効果的に活用して視認性を確保
- アニメーションやホバーエフェクトで動きを表現

## タイムライン表現 (必須要素を含む)
- タイムラインを中央に縦に配置し、左右交互にカードを表示
- 各ステップに数字とアイコンを付与
- ステップごとに異なるアクセントカラーを使用
- 大きな背景アイコンでコンテンツを視覚的に補強
- コンテンツの階層と関連性を視覚的に明確化
- **必須**: 各ステップには日付装飾（フラップ）とサークルアイコンを必ず付ける
- **必須**: サークルは丸型で、内部にFont Awesomeアイコンを配置する

### タイムラインCSSコード例
```css
/* タイムライン要素 */
ul.timeline {
  --col-gap: 2rem;
  --row-gap: 2rem;
  --line-w: 0.25rem;
  display: grid;
  grid-template-columns: var(--line-w) 1fr;
  grid-auto-columns: max-content;
  column-gap: var(--col-gap);
  list-style: none;
  width: min(60rem, 100%);
  margin-inline: auto;
  margin-bottom: 2rem;
}

/* タイムラインの線 */
ul.timeline::before {
  content: "";
  grid-column: 1;
  grid-row: 1 / span 20;
  background: #8C1F5B;
  border-radius: calc(var(--line-w) / 2);
}

/* カード間の余白 */
ul.timeline li:not(:last-child) {
  margin-bottom: var(--row-gap);
}

/* タイムラインカード */
ul.timeline li {
  grid-column: 2;
  --inlineP: 1.5rem;
  margin-inline: var(--inlineP);
  grid-row: span 2;
  display: grid;
  grid-template-rows: min-content min-content min-content;
}

/* ステップ番号 */
ul.timeline li .date {
  --dateH: 3rem;
  height: var(--dateH);
  margin-inline: calc(var(--inlineP) * -1);
  text-align: center;
  background-color: var(--accent-color);
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  display: grid;
  place-content: center;
  position: relative;
  border-radius: calc(var(--dateH) / 2) 0 0 calc(var(--dateH) / 2);
  font-family: 'Kaisei Decol', serif;
}

/* 日付のフラップ装飾 - 必須要素 */
ul.timeline li .date::before {
  content: "";
  width: var(--inlineP);
  aspect-ratio: 1;
  background: var(--accent-color);
  background-image: linear-gradient(rgba(0, 0, 0, 0.2) 100%, transparent);
  position: absolute;
  top: 100%;
  clip-path: polygon(0 0, 100% 0, 0 100%);
  right: 0;
}

/* サークル - 必須要素 */
ul.timeline li .date::after {
  content: "";
  position: absolute;
  width: 2.8rem;
  aspect-ratio: 1;
  background: var(--bgColor);
  border: 0.4rem solid var(--accent-color);
  border-radius: 50%;
  top: 50%;
  transform: translate(50%, -50%);
  right: calc(100% + var(--col-gap) + var(--line-w) / 2);
  font-family: "Font Awesome 6 Free";
  font-weight: 900;
  color: var(--accent-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  z-index: 2;
}

/* タイトルと説明 */
ul.timeline li .title,
ul.timeline li .descr {
  background: white;
  position: relative;
  padding-inline: 1.5rem;
}

ul.timeline li .title {
  overflow: hidden;
  padding-block-start: 1.5rem;
  padding-block-end: 1rem;
  font-weight: 500;
  font-family: 'Kaisei Decol', serif;
  font-size: 1.2rem;
  color: #A62648;
}

ul.timeline li .descr {
  padding-block-end: 1.5rem;
  font-weight: 300;
  font-family: 'Zen Kurenaido', sans-serif;
}

/* 左右配置のためのメディアクエリ */
@media (min-width: 40rem) {
  ul.timeline {
    grid-template-columns: 1fr var(--line-w) 1fr;
  }
  
  ul.timeline::before {
    grid-column: 2;
  }
  
  ul.timeline li:nth-child(odd) {
    grid-column: 1;
  }
  
  ul.timeline li:nth-child(even) {
    grid-column: 3;
  }
  
  /* ステップ2のスタート位置 */
  ul.timeline li:nth-child(2) {
    grid-row: 2/4;
  }
  
  ul.timeline li:nth-child(odd) .date::before {
    clip-path: polygon(0 0, 100% 0, 100% 100%);
    left: 0;
  }
  
  ul.timeline li:nth-child(odd) .date::after {
    transform: translate(-50%, -50%);
    left: calc(100% + var(--col-gap) + var(--line-w) / 2);
  }
  
  ul.timeline li:nth-child(odd) .date {
    border-radius: 0 calc(var(--dateH) / 2) calc(var(--dateH) / 2) 0;
  }
}

/* タイムライン上の大きなアイコン */
.timeline-icon-large {
  position: absolute;
  font-size: 80px;
  color: rgba(165, 38, 72, 0.1);
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 0;
  animation: float 3s ease-in-out infinite;
}

/* アイコンアニメーションエフェクト */
@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}

/* ステップアイコン */
.timeline-item:nth-child(1) .date::after {
  content: "\f395"; /* docker */
}

.timeline-item:nth-child(2) .date::after {
  content: "\f15c"; /* file */
}

.timeline-item:nth-child(3) .date::after {
  content: "\f234"; /* user-plus */
}

.timeline-item:nth-child(4) .date::after {
  content: "\f2f6"; /* sign-in */
}
```

### タイムライン HTML 例
```html
<!-- Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<h2 class="section-title">
  <span><i class="fa-solid fa-timeline" style="color: #A62648;"></i> 🛠️ 解決手順のタイムライン</span>
</h2>

<ul class="timeline">
  <li style="--accent-color:#A62648" class="timeline-item">
    <div class="date">STEP 1</div>
    <div class="title"><i class="fa-solid fa-docker hand-drawn-icon"></i> docker-compose.ymlでイメージを更新</div>
    <div class="descr">
      <div class="code-block">
        <div class="code-label">yaml</div>
        <pre><code class="code-yaml"><span class="key">image:</span> <span class="value">ghcr.io/example/image:v1.0.0</span></code></pre>
      </div>
      <div class="thought-bubble">
        <i class="fa-solid fa-lightbulb" style="color: #F28B30;"></i> 最新のイメージバージョンを指定しましょう！
      </div>
      <i class="fa-solid fa-docker timeline-icon-large"></i>
    </div>
  </li>
  
  <li style="--accent-color:#8C1F5B" class="timeline-item">
    <div class="date">STEP 2</div>
    <div class="title"><i class="fa-solid fa-file-lines hand-drawn-icon"></i> 設定ファイルを更新</div>
    <div class="descr">
      <!-- コンテンツ -->
      <i class="fa-solid fa-file-lines timeline-icon-large"></i>
    </div>
  </li>
  
  <!-- 以下同様に、必要なステップの数だけ続ける -->
</ul>
```

## 全体的な指針
- 読み手が自然に視線を移動できる配置
- 情報の階層と関連性を視覚的に明確化
- 手書き風の要素で親しみやすさを演出
- 視覚的な記憶に残るデザイン
- フッターに出典情報を明記
- **必須**: タイムラインには必ず「丸とフラップ装飾」を適用すること（上記CSS仕様を必ず含める）

## 変換する文章/記事

