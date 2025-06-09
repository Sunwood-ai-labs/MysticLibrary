# グラフィックレコーディング風インフォグラフィック変換プロンプト V6 - 水

## 目的
以下の内容を、**大きなFont Awesomeアイコン**、**多様な手書き風吹き出し**、そして**水をテーマにした洗練されたアニメーション**を活用した日本語のグラフィックレコーディング風HTMLインフォグラフィックに変換します。各カードには1つの特大サイズのテーマアイコンを配置し、小さなインラインアイコンを効果的に活用することで情報を視覚的に構造化します。水の流れのような柔軟性と動きを取り入れ、情報の自然な流れを表現します。

## デザイン仕様
### 1. 拡張カラースキーム
```
<palette>
<color name='Water-1' rgb='007cb7' r='0' g='124' b='183' />
<color name='Water-2' rgb='83b4b6' r='131' g='180' b='182' />
<color name='Water-3' rgb='e6eceb' r='230' g='236' b='235' />
<color name='Water-4' rgb='006793' r='0' g='103' b='147' />
<color name='Water-5' rgb='00abc5' r='0' g='171' b='197' />
<color name='Water-Accent-1' rgb='39d2e3' r='57' g='210' b='227' />
<color name='Water-Accent-2' rgb='004d71' r='0' g='77' b='113' />
<color name='Water-Highlight' rgb='ebf7f9' r='235' g='247' b='249' />
</palette>
```

### 2. 洗練されたグラフィックレコーディング要素
- 全体を複雑なグラデーション背景（`radial-gradient(circle at bottom right, #007cb7, #83b4b6 69%, #e6ecebaf 70%, #00abc5), #00abc5`）に配置
- **各カードに1つの特大サイズのテーマアイコン**を配置（fa-5x〜fa-7x）と複数のウェーブアニメーション効果
- **カード内のコンテンツはアイコン付き階層リスト形式**で視覚的に構造化
- **複数バリエーションの手書き風吹き出し**でポイントや補足情報を追加（リップル効果付き）
- セクションを水面に浮かぶカード形式で整理（水中からの浮上アニメーション）
- キーワードをインタラクティブなタグ形式で強調（ホバー効果と水の流れアニメーション）
- コードサンプルはシンタックスハイライト付きプレビュー形式（水中の揺らぎと発光効果）
- 関連するカードをつなぐ波型の視覚的要素（SVGパス波線）
- 高度な魚影アニメーションをカード周辺に配置（ぼかし効果とドロップシャドウ）
- 半透明の波紋エフェクト（.ripple要素）をインタラクティブに配置
- カード内の重要要素をハイライトする水滴効果

### 3. 洗練されたタイポグラフィ
  - タイトル：36-42px、#FFFFFF（テキスト色）、太字、特大関連アイコン付き（fa-6x以上）、テキストシャドウ効果
  - カードタイトル：24-28px、#FFFFFF、大きめアイコン付き（fa-5x）、微妙なグラデーション効果
  - リスト見出し：18-20px、#E6ECEB、ハイライト背景
  - リスト項目：16-18px、#E6ECEB、小さなカラフルアイコン付き、行間1.6
  - タグ：16px、#006793、グラデーション背景、ホバーエフェクト付き
  - 本文：16-18px、#E6ECEB、行間1.6、段落間の流れるスペース
  - コードプレビュー：15-16px、プログラミング向け等幅フォント（JetBrains Mono/Fira Code）、構文ハイライト、発光効果
  - 吹き出し内テキスト：複数の手書き風フォント、15-17px、カラーアクセント付き
  - 日付や補足：14-16px、#83B4B6、イタリック、微細なテキストシャドウ
  - フォント指定：
    ```html
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Yeseva+One&family=Kaisei+Decol&family=Yomogi&family=Zen+Kurenaido&family=JetBrains+Mono:wght@300;400;500&family=Fira+Code:wght@300;400;500&family=M+PLUS+Rounded+1c:wght@300;400;500&display=swap');
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
    </style>
    ```

### 4. 動的レイアウト（水テーマ高度版）
  - 全体：**レスポンシブグリッドレイアウト**（4カラム構成、画面サイズに応じて自動調整）
  - ヘッダー：波紋を伴う超大型アイコン付きタイトル（fa-7x）と洗練された日付表示
  - 各カード：水面から浮上するアニメーション、マイクロインタラクションを含む影効果
  - カード内部：水の流れをイメージした階層的な情報構造（波紋型のパディングとマージン）
  - コードプレビュー：水中の光のような発光効果と構文ハイライト（アニメーション付き）
  - セクション間の関係性：SVGパスによる波型のコネクタライン
  - 余白：水の流れのように有機的で非対称な配置（黄金比を活用）
  - モバイル対応：スマートフォン表示時にシングルカラム化と簡略化アニメーション
  - ダークモード対応：prefers-color-scheme メディアクエリによる自動切替
  - カード内要素の階層構造：水面の深さをイメージした重要度の表現

### 5. 多様な吹き出しとタグ表現
- **手書き風の吹き出し**：5種類のバリエーション（標準・丸型・雲型・波型・不規則型）
- **波紋エフェクト付き**：hover時に吹き出しの周りに波紋アニメーションを表示
- **インタラクティブなタグ表現**：ホバー時の拡大と波アニメーション効果
- **多様な手書きフォント**：内容に合わせて複数の手書きフォントを使い分け
- **マイクロアニメーション**：吹き出し内の小さなアイコンに微細なアニメーション
- **立体的な影効果**：吹き出しの奥行き感を演出する複合的なシャドウ
- **水のテキスチャ**：半透明の水滴や波紋テクスチャをオーバーレイ

### 6. 高度なアニメーション効果
- **大型アイコンの複合アニメーション**：波効果と発光効果の組み合わせ
- **重ね合わせアニメーションレイヤー**：複数の動きを組み合わせた複雑な表現
- **インタラクティブな波紋**：クリックやホバーで発生する波紋アニメーション
- **パララックス効果**：スクロール時のレイヤー別移動速度の差異
- **フローアニメーション**：情報の流れを表現する連続的なアニメーション
- **魚影の自然な動き**：複数のアニメーションを組み合わせた有機的な動き
- **コードブロックの発光効果**：水中の光のようなアニメーション
- **キーワードタグのホバーエフェクト**：拡大・発光・波紋の組み合わせ
- **カードの出現アニメーション**：水中からの浮上を表現する複合アニメーション
- **SVG波形フィルター**：テキストや画像に水中効果を適用

## アイコン活用詳細ガイドライン
- カード毎の大型アイコン（テーマ表現用）：
  - メインコンセプト：**fa-5x〜fa-7x**（カードの中心に配置、複合アニメーション効果付き）
  - 水関連拡張アイコン：fa-water, fa-droplet, fa-wave-square, fa-water-ladder, fa-swimmer, fa-fish, fa-ship, fa-faucet, fa-glass-water
  
- リスト項目の小型アイコン（視覚的補助）：
  - インラインアイコン：**fa-lg〜fa-2x**（サイズを階層に合わせて調整）
  - 水のテーマに合わせた拡張アイコンセット：
    - 流れと進行：fa-water, fa-wave-square, fa-stream, fa-turn-down, fa-angle-down
    - 柔軟性と適応：fa-droplet, fa-hand-water, fa-person-swimming, fa-tint, fa-water-arrow-up
    - 深さと探求：fa-magnifying-glass, fa-microscope, fa-eye, fa-binoculars, fa-glasses
    - 力と変化：fa-tsunami, fa-bolt, fa-faucet-drip, fa-bridge-water, fa-house-flood-water
    - 開発とツール：fa-code, fa-terminal, fa-gear, fa-screwdriver-wrench, fa-toolbox
    - 協力と連携：fa-people-group, fa-handshake, fa-users, fa-user-group, fa-hands-holding
    - 思考と分析：fa-brain, fa-lightbulb, fa-thought-bubble, fa-chart-line, fa-gauge-high
    - 方向と進路：fa-compass, fa-map, fa-location-dot, fa-route, fa-signs-post

## HTML/CSS実装の高度テクニック
```css
/* グローバル変数の拡張 */
:root {
  --water-1: #007cb7;
  --water-2: #83b4b6;
  --water-3: #e6eceb;
  --water-4: #006793;
  --water-5: #00abc5;
  --water-accent-1: #39d2e3;
  --water-accent-2: #004d71;
  --water-highlight: #ebf7f9;
  --size: 27px;
  --p: 38px;
  --R: 55.9px;
  --card-radius: 20px;
  --transition-speed: 0.4s;
  --shadow-color: rgba(0, 103, 147, 0.3);
}

/* 全体スタイル */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  position: relative;
  min-height: 100vh;
  background: radial-gradient(circle at bottom right, var(--water-1), var(--water-2) 69%, #e6ecebaf 70%, var(--water-5)), var(--water-5);
  color: var(--water-3);
  font-family: "Kaisei Decol", "M PLUS Rounded 1c", sans-serif;
  line-height: 1.6;
  overflow-x: hidden;
  perspective: 1440px;
}

.container {
  width: 100%;
  max-width: 2000px;
  margin: 0 auto;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  position: relative;
  z-index: 1;
}

/* 改良されたカードスタイル */
.section-card {
  position: relative;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: var(--card-radius);
  padding: 25px;
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px var(--shadow-color);
  transition: transform var(--transition-speed) ease, 
              box-shadow var(--transition-speed) ease,
              background-color var(--transition-speed) ease;
  overflow: hidden;
  animation: fadeInUp 1s ease-out forwards;
  opacity: 0;
  transform: translateY(30px) scale(0.95);
}

.section-card:hover {
  transform: translateY(-10px) scale(1.02);
  box-shadow: 0 20px 40px var(--shadow-color);
  background-color: rgba(255, 255, 255, 0.15);
}

/* 高度な波アニメーション */
.wave {
  -webkit-mask: radial-gradient(var(--R) at 50% calc(100% - (var(--size) + var(--p))), blue 99%, #0000 101%), 
                radial-gradient(var(--R) at 50% calc(100% + var(--p)), #0000 99%, red 101%) repeat-x;
  -webkit-mask-size: calc(4 * var(--size)) 100%;
  -webkit-mask-position: calc(50% - 2 * var(--size)) 0, 50% calc(100% - var(--size));
  animation: flow 8s linear infinite;
}

.wave.oppo {
  animation-direction: reverse;
  animation-duration: 12s;
}

/* 洗練された魚影アニメーション */
.fish {
  position: absolute;
  width: 38px;
  aspect-ratio: 0.3/1;
  display: flex;
  flex-direction: column;
  filter: url(#goo) blur(4px);
  animation: voyage 25s linear infinite;
  transform: rotate(38deg);
  z-index: 0;
  opacity: 0.6;
  pointer-events: none;
}

.fish .part {
  width: 100%;
  flex-grow: 2;
  background: rgba(0, 103, 147, 0.6);
}

.fish .part.body {
  background: rgba(0, 124, 183, 0.5);
}

.fish .part.tail {
  background: rgba(0, 103, 147, 0.4);
}

/* 発光効果付きコードブロック */
pre {
  background: linear-gradient(135deg, rgba(0, 60, 90, 0.9), rgba(0, 124, 183, 0.8));
  padding: 20px;
  border-radius: 15px;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 15px;
  color: #e6eceb;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3), 0 0 15px rgba(57, 210, 227, 0.3);
  margin: 20px 0;
  line-height: 1.5;
  animation: codeGlow 4s ease-in-out infinite;
  position: relative;
  overflow: hidden;
}

pre::before {
  content: "$ claude code";
  display: block;
  color: #83b4b6;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px dashed rgba(131, 180, 182, 0.4);
  font-family: 'Fira Code', monospace;
  font-weight: 300;
}

/* シンタックスハイライト */
pre .comment { color: #83b4b6; font-style: italic; }
pre .keyword { color: #FF79C6; font-weight: 500; }
pre .string { color: #F1FA8C; }
pre .number { color: #BD93F9; }
pre .function { color: #50FA7B; }
pre .operator { color: #FF5555; }
pre .property { color: #8BE9FD; }

/* インタラクティブなキーワードタグ */
.keyword-tag {
  background: linear-gradient(to right, var(--water-3), var(--water-highlight));
  color: var(--water-4);
  padding: 4px 10px;
  border-radius: 8px;
  margin-right: 6px;
  display: inline-block;
  font-weight: bold;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.keyword-tag:hover {
  transform: translateY(-2px) scale(1.05);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15), 0 0 10px rgba(57, 210, 227, 0.4);
}

/* 高度な吹き出し */
.speech-bubble {
  position: relative;
  background: linear-gradient(to bottom right, #fff, var(--water-highlight));
  border: 3px solid var(--water-1);
  border-radius: 20px;
  padding: 15px 20px;
  margin: 30px 10px 20px;
  font-family: 'Yomogi', cursive;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
  transform: rotate(-1deg);
  transition: all 0.3s ease;
}

.speech-bubble:hover {
  transform: rotate(1deg) scale(1.02);
  box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.15);
}

.speech-bubble::before {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: 15px solid transparent;
  border-bottom-color: var(--water-1);
  border-top: 0;
  left: 25px;
  top: -18px;
}

.speech-bubble::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: 12px solid transparent;
  border-bottom-color: white;
  border-top: 0;
  left: 28px;
  top: -12px;
}
```

## 実装アプローチ
1. **情報の階層分析**：コンテンツを重要度と関連性に基づいて分類
2. **カード構造の設計**：各カードに最適な水関連アイコンを選択、視覚的階層を構築
3. **アニメーションの統合**：水のテーマに合わせた自然で調和のとれたアニメーションを配置
4. **インタラクティブ要素の追加**：ホバーエフェクトや波紋アニメーションで体験を向上
5. **情報設計の最適化**：テキスト量とビジュアル要素のバランスを調整
6. **スタイルの統一**：「Be water, my friend」哲学を全体のデザインに一貫して反映
7. **アクセシビリティの確保**：コントラスト比の最適化と代替テキストの提供
8. **レスポンシブ対応の強化**：様々な画面サイズでの最適表示を確保

このプロンプトを活用して、Bruceリーの「水のように」という哲学を取り入れた、流動的で適応力のあるインフォグラフィックを作成しましょう。単なる静的な情報提示ではなく、水の特性である「柔軟性」「適応性」「流動性」を視覚的に表現することで、情報の流れと関連性を直感的に伝えます。
