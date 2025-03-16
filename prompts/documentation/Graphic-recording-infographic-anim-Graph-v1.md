# グラフ付きグラフィックレコーディング (グラレコ) HTML 作成プロンプト V0

## 目的
以下の内容を、**大きなFont Awesomeアイコン**と**手書き風の吹き出し**、そして**Mermaidグラフ**を活用した日本語のグラフィックレコーディング風HTMLインフォグラフィックに変換してください。各カードに1つの大きなアイコンを配置し、小さなインラインアイコンを積極的に活用して情報を視覚的にわかりやすく表現します。図表化すると理解しやすい構造や関係性はMermaid図として表示します。

## デザイン仕様
### 1. カラースキーム
```
<palette>
<color name='イラスト-1' rgb='F2798F' r='242' g='121' b='143' />
<color name='イラスト-2' rgb='3F77BF' r='63' g='118' b='191' />
<color name='イラスト-3' rgb='34BFBF' r='51' g='191' b='191' />
<color name='イラスト-4' rgb='F2C641' r='242' g='198' b='65' />
<color name='イラスト-5' rgb='F2D1CE' r='242' g='208' b='205' />
</palette>
```

### 2. グラフィックレコーディング要素
- 全体を白背景（#FFF8F5）のキャンバス上に配置
- **各カードに1つの特大サイズのテーマアイコン**を配置（fa-5x程度）
- **カード内のコンテンツは小さなアイコン付きリスト形式**で構造化
- **手書き風の吹き出し**でポイントや補足情報を追加
- **Mermaidグラフ**で構造やフロー、関係性を視覚化
- 内容を複数のセクションに分け、カード形式で整理
- キーワードをタグ形式で視覚的に強調
- コードサンプルはプレビュー形式で表示
- 関連する概念をつなぐ視覚的な要素（矢印や線）
- 各カードをアニメーションで強調（任意の部分に適用）
- カード内部の情報量を増やし、小さなアイコンで視覚的に整理
- コードブロックを使う場合はカラーマップを使用しておしゃれにして

### 3. タイポグラフィ
  - タイトル：36px、#333333（テキスト色）、太字、特大関連アイコン付き（fa-6x以上）
  - カードタイトル：24px、#555555、大きめアイコン付き（fa-5x）
  - リスト見出し：18px、#333333
  - リスト項目：16px、#333333、小さなアイコン付き
  - タグ：16px、#333333、背景色付き
  - 本文：16px、#333333、行間1.5
  - コードプレビュー：14px、等幅フォント、背景色付き
  - 吹き出し内テキスト：手書き風フォント、15px、#333333
  - 日付や補足：14px、#777777
  - フォント指定：
    ```html
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Kaisei+Decol&family=Yomogi&family=Zen+Kurenaido&display=swap');
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
    </style>
    ```

### 4. レイアウト
  - 全体：**4カラム構成**（レスポンシブ対応）
  - ヘッダー：超大型アイコン付きタイトル（fa-7x）＋日付
  - 各カード：1つの大きなアイコン＋リスト形式のコンテンツ＋吹き出し
  - Mermaidグラフカード：全幅サイズ（2〜4カラム幅）のカードとして配置
  - カード内部：構造化されたリスト形式で情報を整理
  - コードプレビュー：等幅フォント、背景色付きのプレビュー形式
  - 余白：視認性を高めるための十分な余白を確保
  - 横幅：100%（最大2000px程度でセンタリング）

### 5. 吹き出しとタグ表現
- **手書き風の吹き出し**：3種類のバリエーション（標準・バリエーション1・バリエーション2）
- **位置バリエーション**：上部/左右/下部からの吹き出しでレイアウトに変化
- **タグ表現**：キーワードやコード例をタグ風のデザインでハイライト
- **手書きフォント**：「Yomogi」などの日本語手書きフォントを使用
- **アイコン装飾**：吹き出し内にも小さなアイコンを配置

### 6. アニメーション効果
- **各カードの大型アイコンにアニメーション**（fa-beat-fade, fa-bounce, fa-flip等）
- カードの出現時のフェードインスケールアニメーション
- 重要キーワード出現時のハイライト効果
- 背景色の変化アニメーション（ホバー時）
- スクロールに連動したカードの出現効果

## アイコン活用ガイドライン
- カードごとの大型アイコン（1つのみ）：
  - メインコンセプト：**fa-5x〜fa-7x**（カードの中心に配置）
  
- リスト項目の小型アイコン：
  - インラインアイコン：**fa-lg**（テキストに合わせたサイズ）
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
    - プログラミング：fa-code, fa-terminal, fa-file-code, fa-laptop-code
    - グラフ・図表：fa-diagram-project, fa-chart-line, fa-sitemap, fa-share-nodes
    - 設定：fa-gear, fa-sliders, fa-screwdriver-wrench, fa-tools
    - 情報：fa-info-circle, fa-circle-info, fa-book, fa-clipboard
    - 使用例：fa-code, fa-terminal, fa-laptop, fa-mobile

## Mermaid図の活用ガイドライン（新規追加）
### 1. Mermaid図の実装方法
```html
<!-- Mermaidグラフカード -->
<div class="section-card mermaid-card fade-in-scale" style="grid-column: span 2;">
  <div class="mega-icon-container">
    <i class="fa-solid fa-diagram-project fa-5x" style="color: var(--ui-color-2); animation: fa-flip 3s;" aria-hidden="true"></i>
    <h2>ダイアグラムタイトル</h2>
  </div>
  
  <div class="card-content">
    <div class="mermaid-container">
      <div class="mermaid">
        %%{
          init: {
            'theme': 'base',
            'themeVariables': {
              'primaryColor': '#3F77BF',
              'primaryTextColor': '#fff',
              'primaryBorderColor': '#F2798F',
              'lineColor': '#34BFBF',
              'secondaryColor': '#F2C641',
              'tertiaryColor': '#F2D1CE'
            },
            'flowchart': {
              'cornerRadius': 15,
              'curve': 'cardinal'
            }
          }
        }%%
        graph TD
          A[プロセス開始] -->|入力| B(処理1)
          B --> C{条件分岐}
          C -->|Yes| D[結果1]
          C -->|No| E[結果2]
      </div>
    </div>
  </div>
  
  <div class="speech-bubble variant-1">
    <span class="handwritten">
      <i class="fa-solid fa-lightbulb fa-lg" style="color: var(--ui-color-2);"></i>
      関係性をMermaid図で視覚化するとわかりやすい！
    </span>
  </div>
</div>
```

### 2. Mermaid図のタイプ別活用例
1. **フローチャート**：プロセスやワークフローの表現に最適
```
graph TD
  A[開始] --> B{条件?}
  B -->|はい| C[処理1]
  B -->|いいえ| D[処理2]
  C --> E[終了]
  D --> E
```

2. **シーケンス図**：時系列でのやり取りを表現
```
sequenceDiagram
  participant ユーザー
  participant システム
  ユーザー->>システム: 登録リクエスト
  システム->>システム: 情報検証
  システム-->>ユーザー: 登録完了
```

3. **クラス図**：構造や関連性を表現
```
classDiagram
  class 親クラス {
    +属性1
    +メソッド1()
  }
  class 子クラス {
    +属性2
    +メソッド2()
  }
  親クラス <|-- 子クラス
```

4. **ガントチャート**：スケジュールやタイムラインを表現
```
gantt
  title プロジェクトスケジュール
  dateFormat YYYY-MM-DD
  section フェーズ1
    タスク1 :a1, 2023-01-01, 30d
    タスク2 :after a1, 20d
  section フェーズ2
    タスク3 :2023-02-15, 15d
```

5. **状態図**：状態遷移を表現
```
stateDiagram-v2
  [*] --> 待機中
  待機中 --> 処理中: 開始
  処理中 --> 完了: 成功
  処理中 --> エラー: 失敗
  完了 --> [*]
  エラー --> 待機中: 再試行
```

6. **円グラフ**：分布を表現
```
pie title 割合の内訳
  "カテゴリA" : 25
  "カテゴリB" : 20
  "カテゴリC" : 30
  "その他" : 25
```

7. **実体関連図**：データモデルを表現
```
erDiagram
  顧客 ||--o{ 注文 : 作成
  注文 ||--|{ 商品 : 含む
```

### 3. Mermaid図のスタイリング
- カスタムテーマ変数で色を統一
- 角丸スタイルでグラフィックレコーディング風に
- カーブしたコネクタラインで有機的な印象に
- カラーパレットに合わせた配色

### 4. 活用シーン
- 複雑な概念や関係性を説明する際
- 順序やプロセスフローを示す必要がある場合
- 構造やカテゴリを視覚的に整理したい場合
- データの分布や比率を示したい場合
- 時間軸やスケジュールを表現したい場合

## HTML/CSS実装のポイント
```css
/* カードスタイル */
.section-card {
  flex: 1;
  min-width: 220px;
  max-width: 450px;
  background-color: white;
  border-radius: 20px;
  padding: 15px;
  box-shadow: 5px 5px 15px rgba(0,0,0,0.1);
  position: relative;
  overflow: hidden;
}

/* Mermaidグラフカード - 幅広表示 */
.mermaid-card {
  grid-column: span 2;
  max-width: 100%;
}

/* カード内アイコンコンテナ */
.mega-icon-container {
  text-align: center;
  margin: 15px 0;
}

/* Mermaidコンテナ */
.mermaid-container {
  margin: 20px 0;
  padding: 15px;
  background-color: white;
  border-radius: 12px;
  box-shadow: inset 0 0 8px rgba(0,0,0,0.05);
}

/* カードコンテンツ */
.card-content {
  padding: 0 10px 15px;
}

/* キーワードリスト */
.keyword-list {
  margin: 15px 0;
  padding: 0;
  list-style-type: none;
}

.keyword-list li {
  margin-bottom: 8px;
  display: flex;
  align-items: flex-start;
}

.keyword-list li i {
  margin-right: 8px;
  color: var(--ui-color-2);
  min-width: 16px;
}

/* キーワードタグ */
.keyword-tag {
  background-color: var(--ui-color-3);
  color: var(--ui-color-4);
  padding: 3px 8px;
  border-radius: 5px;
  margin-right: 5px;
  display: inline-block;
  font-weight: bold;
}

/* 手書き風吹き出し */
.speech-bubble {
  position: relative;
  background: #fff;
  border: 3px solid var(--ui-color-1);
  border-radius: 20px;
  padding: 10px 15px;
  margin: 15px 5px;
  font-family: 'Yomogi', cursive;
  box-shadow: 3px 3px 10px rgba(0,0,0,0.1);
  transform: rotate(-1deg);
}

.speech-bubble::after {
  content: '';
  position: absolute;
  bottom: -13px;
  left: 20px;
  border-width: 12px 8px 0;
  border-style: solid;
  border-color: var(--ui-color-1) transparent;
  display: block;
  width: 0;
}

/* 吹き出しバリエーション */
.speech-bubble.right::after {
  left: auto;
  right: 20px;
  transform: rotate(15deg);
}

.speech-bubble.top::after {
  bottom: auto;
  top: -13px;
  border-width: 0 8px 12px;
  transform: rotate(-5deg);
}

.speech-bubble.variant-1 {
  background: #FFF9E3;
  border-color: var(--ui-color-2);
  transform: rotate(1deg);
}

.speech-bubble.variant-1::after {
  border-color: var(--ui-color-2) transparent;
}

.speech-bubble.variant-2 {
  background: #FFE9E9;
  border-color: var(--ui-color-5);
  transform: rotate(-2deg);
}

.speech-bubble.variant-2::after {
  border-color: var(--ui-color-5) transparent;
}

/* 手書き文字 */
.handwritten {
  font-family: 'Yomogi', cursive;
  font-size: 15px;
  line-height: 1.5;
  color: #333;
}

/* コードプレビュー */
pre {
  background: #f5f5f5;
  padding: 8px;
  border-radius: 5px;
  font-size: 12px;
  margin-top: 10px;
  overflow-x: auto;
}

/* レスポンシブ対応 */
@media (max-width: 1600px) {
  .section-card {
    min-width: 280px;
  }
}

@media (max-width: 1200px) {
  .section-card {
    min-width: 320px;
  }
  
  .mermaid-card {
    grid-column: span 2;
  }
}

@media (max-width: 900px) {
  .section-card {
    min-width: 380px;
  }
  
  .mermaid-card {
    grid-column: 1 / -1;
  }
}

@media (max-width: 768px) {
  .section-layout {
    flex-direction: column;
  }
  
  .section-card {
    width: 100%;
    min-width: auto;
  }
}
```

## 全体的な指針
- **各カードに1つの大きなアイコン**を配置し、小さなインラインアイコンを積極的に活用
- **リスト形式で情報を構造化**し、視認性と理解しやすさを向上
- **手書き風の吹き出し**でポイントや補足情報を追加
- **Mermaid図**で構造やフロー、関係性を視覚的に表現
- **キーワードはタグ形式**でハイライトし、視覚的に強調
- **コードサンプルはプレビュー形式**で表示し、実用性を高める
- 情報の関連性を視覚的な要素（矢印や線）で表現
- アニメーションで重要な要素を強調
- 全体の統一感を保ちながら、変化をつけて単調さを避ける
- 日本語表記を基本とし、必要に応じて英語キーワードも活用

## サンプルHTMLコード
### 1. 通常カード
```html
<!-- 通常カード例 -->
<div class="section-card fade-in-scale">
  <div class="mega-icon-container">
    <i class="fa-solid fa-code fa-5x" style="color: var(--ui-color-1); animation: fa-bounce 2s;" aria-hidden="true"></i>
    <h2>セクションタイトル</h2>
  </div>
  
  <div class="card-content">
    <ul class="keyword-list">
      <li>
        <i class="fa-solid fa-circle-info" aria-hidden="true"></i>
        <span>リスト項目1: <span class="keyword-tag">キーワード</span></span>
      </li>
      <li>
        <i class="fa-solid fa-lightbulb" aria-hidden="true"></i>
        <span>リスト項目2</span>
      </li>
      <li>
        <i class="fa-solid fa-code" aria-hidden="true"></i>
        <span>コード例:</span>
      </li>
    </ul>
    
    <pre>
const sample = {
  title: 'サンプルコード',
  description: 'プレビュー形式で表示'
};</pre>
  </div>
  
  <div class="speech-bubble">
    <span class="handwritten">
      <i class="fa-solid fa-lightbulb fa-lg" style="color: var(--ui-color-2);"></i>
      補足情報や解説を
      <br>
      手書き風の吹き出しで表現！
      <br>
      <span class="keyword-tag">重要ポイント</span>
    </span>
  </div>
</div>
```

### 2. Mermaidグラフカード
```html
<!-- Mermaidグラフカード -->
<div class="section-card mermaid-card fade-in-scale">
  <div class="mega-icon-container">
    <i class="fa-solid fa-diagram-project fa-5x" style="color: var(--ui-color-2); animation: fa-flip 3s;" aria-hidden="true"></i>
    <h2>プロセスフロー図</h2>
  </div>
  
  <div class="card-content">
    <div class="mermaid-container">
      <div class="mermaid">
        %%{
          init: {
            'theme': 'base',
            'themeVariables': {
              'primaryColor': '#3F77BF',
              'primaryTextColor': '#fff',
              'primaryBorderColor': '#F2798F',
              'lineColor': '#34BFBF',
              'secondaryColor': '#F2C641',
              'tertiaryColor': '#F2D1CE'
            },
            'flowchart': {
              'cornerRadius': 15,
              'curve': 'cardinal'
            }
          }
        }%%
        flowchart TD
          A["📄 データ入力"] --> B["🔍 検証処理"]
          B --> C{"✅ 検証OK?"}
          C -->|Yes| D["🔄 処理開始"]
          C -->|No| E["⚠️ エラー処理"]
          E --> A
          D --> F["💾 保存処理"]
          F --> G["🏁 完了"]
      </div>
    </div>
    
    <ul class="keyword-list">
      <li>
        <i class="fa-solid fa-circle-info" aria-hidden="true"></i>
        <span>フロー説明: <span class="keyword-tag">プロセス</span> <span class="keyword-tag">検証</span></span>
      </li>
      <li>
        <i class="fa-solid fa-code" aria-hidden="true"></i>
        <span>Mermaidコード:</span>
      </li>
    </ul>
    
    <pre>
flowchart TD
  A["📄 データ入力"] --> B["🔍 検証処理"]
  B --> C{"✅ 検証OK?"}
  C -->|Yes| D["🔄 処理開始"]
  C -->|No| E["⚠️ エラー処理"]</pre>
  </div>
  
  <div class="speech-bubble variant-1">
    <span class="handwritten">
      <i class="fa-solid fa-lightbulb fa-lg" style="color: var(--ui-color-2);"></i>
      フローチャートで処理の流れが一目瞭然！
      <br>
      <span class="keyword-tag">視覚化</span>
    </span>
  </div>
</div>
```

### 3. 状態遷移図カード
```html
<!-- 状態遷移図カード -->
<div class="section-card mermaid-card fade-in-scale">
  <div class="mega-icon-container">
    <i class="fa-solid fa-shuffle fa-5x" style="color: var(--ui-color-3); animation: fa-beat 3s;" aria-hidden="true"></i>
    <h2>ステータス遷移図</h2>
  </div>
  
  <div class="card-content">
    <div class="mermaid-container">
      <div class="mermaid">
        %%{
          init: {
            'theme': 'base',
            'themeVariables': {
              'primaryColor': '#34BFBF',
              'primaryTextColor': '#fff',
              'primaryBorderColor': '#F2798F',
              'lineColor': '#3F77BF',
              'secondaryColor': '#F2C641',
              'tertiaryColor': '#F2D1CE'
            }
          }
        }%%
        stateDiagram-v2
          [*] --> 未対応
          未対応 --> 対応中: 担当者割当
          対応中 --> 対応中: 進捗更新
          対応中 --> 確認待ち: 対応完了
          確認待ち --> 対応中: 再開
          確認待ち --> 完了: 承認
          完了 --> [*]
      </div>
    </div>
    
    <ul class="keyword-list">
      <li>
        <i class="fa-solid fa-circle-info" aria-hidden="true"></i>
        <span>遷移説明: <span class="keyword-tag">状態</span> <span class="keyword-tag">ワークフロー</span></span>
      </li>
    </ul>
  </div>
  
  <div class="speech-bubble variant-2 right">
    <span class="handwritten">
      <i class="fa-solid fa-lightbulb fa-lg" style="color: var(--ui-color-4);"></i>
      状態の変化を矢印で表現するとわかりやすいね！
    </span>
  </div>
</div>
```

## Mermaid導入に必要なスクリプト
```html
<head>
  <!-- 他のヘッダー要素 -->
  
  <!-- Mermaid.js の読み込み -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/mermaid/10.6.1/mermaid.min.js"></script>
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      mermaid.initialize({
        startOnLoad: true,
        theme: 'base',
        securityLevel: 'loose', // emoji対応
        fontFamily: '"Kaisei Decol", sans-serif',
        themeVariables: {
          primaryColor: '#3F77BF',
          primaryTextColor: '#fff',
          primaryBorderColor: '#F2798F',
          lineColor: '#34BFBF',
          secondaryColor: '#F2C641',
          tertiaryColor: '#F2D1CE'
        },
        flowchart: {
          cornerRadius: 15,
          curve: 'cardinal',
          htmlLabels: true
        }
      });
    });
  </script>
</head>
```

## インフォグラフィック変換のための判断基準
1. **Mermaidグラフを使用するケース**：
   - プロセスやワークフローの説明
   - 複数要素間の関係性の表現
   - 時系列でのイベントや状態変化
   - 構造や階層の説明
   - データの比率や分布の表現
   - システムアーキテクチャの説明

2. **通常カードを使用するケース**：
   - 単一概念の説明
   - リスト形式の情報
   - コード例やツール紹介
   - ヒントやアドバイス
   - 単純な概念や定義

## 変換する文章/記事
ーーー
