---
title: "グラフィックレコーディング風インフォグラフィック変換プロンプト（V4：アイコン強調版）"
sourcePath: "prompts/documentation/Graphic-recording-style-infographic-anim-v4_JP.md"
locale: "ja"
contentKind: "markdown"
---
> このページは prompts ソースツリーから自動生成されています。
> ソース: `prompts/documentation/Graphic-recording-style-infographic-anim-v4_JP.md`
> 英語版: [EN](/en/documentation/Graphic-recording-style-infographic-anim-v4)

# グラフィックレコーディング風インフォグラフィック変換プロンプト（V4：アイコン強調版）

## 目的
  以下の内容を、**大きなFont Awesomeアイコン**を最大限に活用した日本語のグラフィックレコーディング風HTMLインフォグラフィックに変換してください。手書きイラストの代わりに大型Font Awesomeアイコンで概念を視覚的にインパクトのある形で表現します。

## デザイン仕様
### 1. カラースキーム
```
<palette>
<color name='UI/UX-1' rgb='1B6C8C' r='26' g='108' b='140' />
<color name='UI/UX-2' rgb='BF8136' r='191' g='129' b='53' />
<color name='UI/UX-3' rgb='F2E8E4' r='242' g='231' b='227' />
<color name='UI/UX-4' rgb='260101' r='38' g='0' b='0' />
<color name='UI/UX-5' rgb='BF5656' r='191' g='86' b='86' />
</palette>
```

### 2. グラフィックレコーディング要素（アイコン重視）
- 全体を白背景（#FFF8F5）のキャンバス上に配置
- **中央に特大サイズのテーマ/タイトルアイコン**を配置（fa-5x〜fa-7x）
- 内容を複数のセクションに分け、手書き風の吹き出しや丸枠で囲む
- **Font Awesomeアイコンをキーワードごとに超大きく配置**（fa-4x〜fa-6x）
- **アイコンを中心にしたレイアウト**で、テキストは補足的に配置
- 関連する概念をつなぐ太い矢印や線（→ は fa-arrow-right-longなど）を大きめに配置
- キーワードを色付きマーカーや下線で強調（背景色で強調）
- 重要ポイントには特大サイズのアイコン（fa-star、fa-lightbulbなど）をfa-5x以上で配置
- 感情表現には大きなemoji風アイコン（fa-face-smile、fa-face-sadなど）をfa-4x以上で使用
- 質問には大きな fa-circle-question を配置（fa-4x以上）
- 人物表現には特大の fa-user、fa-person などのアイコンを活用（fa-5x）
- 各概念をfa-circle-dotなどのアイコンで箇条書き（通常より大きめに）
- 関連性を示すためにfa-arrows-left-right-to-lineなどの接続アイコンも大きめに
- 枠や線などは手書き風に太めに表現

### 3. タイポグラフィ
  - タイトル：36px、#333333（テキスト色）、太字、特大関連アイコン付き（fa-6x以上）
  - サブタイトル：24px、#555555、大きめアイコン付き（fa-4x）
  - キーワード：20px、#333333、太字、背景色付き、大きなアイコン（fa-3x〜fa-5x）を併置
  - 本文：16px、#333333、行間1.5（アイコンに対してテキスト量を減らす）
  - 日付や補足：14px、#777777
  - フォント指定：
    ```html
    &lt;style&gt;
    @import url('https://fonts.googleapis.com/css2?family=Kaisei+Decol&family=Yomogi&family=Zen+Kurenaido&display=swap');
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
    &lt;/style&gt;
    ```

### 4. レイアウト（アイコン中心）
  - 全体：**アイコン中心のレイアウト**、視覚的インパクトを重視
  - ヘッダー：超大型アイコン付きタイトル（fa-7x）＋日付
  - **アイコンを中央に大きく配置し、テキストは周囲に配置**する放射状レイアウト
  - セクション：**各セクションはアイコンを中心に構成**し、丸みを帯びた角のカード（border-radius: 20px）や吹き出し
  - 余白：アイコンの視認性を高めるための十分な余白を確保
  - 横幅：100%（最大2000px程度でセンタリング）
  - **4カラム構成**（アイコンを大きく表示するため）

### 5. アイコンの表現力強化
- **超大型アイコン**：メインコンセプトには fa-7x〜fa-8x サイズを使用
- **アイコン重ね合わせ**：fa-stack を活用して複合的な意味を表現
- **アイコン群**：関連するアイコンをグループ化し、概念の広がりを表現
- **アイコン間の関係性**：大きな矢印や線でつないで視覚的に関連付け
- **アイコンにテキストラベル**：大きなアイコンの下に簡潔なラベルを配置
- **アイコン背景**：円形や六角形の背景でアイコンを強調
- **アイコン色分け**：概念カテゴリごとに色分けして視認性向上

### 6. アニメーション効果（強化版）
- **大型Font Awesomeアイコンに目立つアニメーション**（fa-beat-fade, fa-bounce, fa-flip等）
- アイコンの出現時に大きく拡大してから適正サイズになるアニメーション
- 重要キーワード出現時の強いハイライト効果（フラッシュ効果）
- 接続線や矢印の太く流れるようなアニメーション
- アイコンの大きな回転・拡大縮小アニメーション（特に注目させたい箇所）
- 背景色の明確な変化アニメーション
- スクロールに連動したアイコンの大きな出現効果
- クリック/タップでアイコンが大きく反応する効果（拡大・色変化）

## アイコン活用ガイドライン（サイズ強化版）
- 概念別の推奨アイコン：
  - 恋愛・愛：fa-heart, fa-heart-crack, fa-kiss, fa-hand-holding-heart
  - 人間関係：fa-people-arrows, fa-handshake, fa-users, fa-user-group
  - 感情：fa-face-smile, fa-face-sad-tear, fa-face-angry, fa-face-surprise
  - 質問：fa-circle-question, fa-question, fa-magnifying-glass
  - 時間・プロセス：fa-clock, fa-hourglass, fa-calendar, fa-timeline
  - コミュニケーション：fa-comments, fa-message, fa-comment-dots
  - 思考・アイデア：fa-brain, fa-lightbulb, fa-thought-bubble
  - ポジティブ要素：fa-thumbs-up, fa-check, fa-circle-check
  - ネガティブ要素：fa-thumbs-down, fa-ban, fa-triangle-exclamation
  - 方向性：fa-arrow-right, fa-arrow-left, fa-arrow-up, fa-arrow-down
  - 関係性：fa-link, fa-handshake, fa-code-branch, fa-network-wired
 
- **アイコンサイズの強調使い分け**：
  - メイン概念：**fa-6x〜fa-8x**（ページ内で最も目立つ位置に）
  - 重要概念：**fa-5x**（セクションの中心に配置）
  - サブ概念：**fa-4x**（重要度中程度の概念に）
  - 強調用：**fa-3x**（テキスト中の強調ポイントに）
  - 装飾・接続用：**fa-2x**（通常より大きく）

## HTML/CSS実装のポイント（アイコン強調型）
- **アイコン中心のFlexboxレイアウト**
- アイコンを中心とした放射状または階層的配置
- 大きなアイコン周囲に十分な余白を確保するcssスタイル
- 吹き出しや枠はアイコンサイズに合わせて大きく設計
- **アイコンを効果的に見せるための背景色や枠線の工夫**
- 特大アイコンには独自のアニメーションやエフェクトを付与
- テキスト量を抑え、視覚的な表現を優先
- スマホ表示でもアイコンサイズが維持されるレスポンシブデザイン
```css
/* アイコン強調のためのCSS例 */
.icon-highlight {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(242,231,227,0.7) 100%);
  border-radius: 50%;
  margin: 20px auto;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.icon-highlight:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 25px rgba(0,0,0,0.2);
}

/* 大型アイコンのためのコンテナ */
.mega-icon-container {
  text-align: center;
  margin: 30px 0;
}

/* アイコン接続線 */
.icon-connector {
  height: 5px;
  background: linear-gradient(90deg, transparent, #1B6C8C, transparent);
  margin: 20px 0;
  position: relative;
}
```

## 全体的な指針（アイコン中心版）
- **アイコンを情報の中心に据えた視覚的構成**
- テキスト量を最小限に抑え、アイコンで意味を伝える
- 情報の関連性を太い線や大きな矢印で明示
- アイコンの大きさで概念の重要度を表現
- 色とサイズでアイコンの階層を明確に区別
- 概念や関係性をFont Awesomeアイコンで視覚的にインパクトのある形で表現
- 情報の階層構造をアイコンサイズで表現
- 全体のバランスを考慮（大きなアイコンを中心に構成）
- 日本語表記を基本とし、必要に応じて英語キーワードも活用

## サンプルHTMLコード（アイコン強調型）
```html
<!-- アイコン中心のセクション例 -->
<div class="concept-section">
  <div class="mega-icon-container">
    <i class="fa-solid fa-lightbulb fa-6x" style="color: #BF8136; animation: fa-bounce 2s;"></i>
    <h2>アイデア創出プロセス</h2>
  </div>
  
  <div class="icon-concepts">
    <div class="icon-item">
      <div class="icon-highlight">
        <i class="fa-solid fa-brain fa-4x" style="color: #1B6C8C;"></i>
      </div>
      <p>発想</p>
    </div>
    
    <div class="icon-connector"></div>
    
    <div class="icon-item">
      <div class="icon-highlight">
        <i class="fa-solid fa-clipboard-list fa-4x" style="color: #1B6C8C;"></i>
      </div>
      <p>整理</p>
    </div>
    
    <div class="icon-connector"></div>
    
    <div class="icon-item">
      <div class="icon-highlight">
        <i class="fa-solid fa-rocket fa-4x" style="color: #BF5656;"></i>
      </div>
      <p>実行</p>
    </div>
  </div>
</div>
```

## 変換する文章/記事
ーーー
