
# グラフィックレコーディング風インフォグラフィック変換プロンプト V3

## 目的
  以下の内容を、Font Awesomeアイコンを最大限に活用した日本語のグラフィックレコーディング風HTMLインフォグラフィックに変換してください。手書きイラストの代わりにFont Awesomeアイコンで概念を視覚的に表現します。

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

### 2. グラフィックレコーディング要素
- 全体を白背景（#FFF8F5）のキャンバス上に配置
- 中央に大きなテーマ/タイトルを配置（アイコン付き）
- 内容を複数のセクションに分け、手書き風の吹き出しや丸枠で囲む
- Font Awesomeアイコンをキーワードごとに大きく配置（fa-2x〜fa-3x）
- 関連する概念をつなぐ矢印や線（→ は fa-arrow-rightなど）
- キーワードを色付きマーカーや下線で強調（背景色で強調）
- 重要ポイントには目立つアイコン（fa-star、fa-lightbulbなど）
- 感情表現にはemoji風アイコン（fa-face-smile、fa-face-sadなど）
- 質問には fa-question-circle を配置
- 人物表現には fa-user、fa-person などのアイコンを活用
- 各概念をfa-circle-dotなどの小さなアイコンで箇条書き
- 関連性を示すためにfa-arrows-left-right-to-lineなどの接続アイコン
- 枠や線などは手書き風にして

### 3. タイポグラフィ
  - タイトル：28px、#333333（テキスト色）、太字、関連アイコン付き
  - サブタイトル：18px、#555555
  - キーワード：16px、#333333、太字、背景色付き
  - 本文：14px、#333333、行間1.4
  - 日付や補足：12px、#777777
  - フォント指定：
    ```html
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Kaisei+Decol&family=Yomogi&family=Zen+Kurenaido&display=swap');
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
    </style>
    ```

### 4. レイアウト
  - 全体：フレキシブルレイアウト、スマホでも見やすく
  - ヘッダー：タイトル（大きいFont Awesomeアイコン付き）＋日付
  - コンテンツ：左から右、上から下へと自然な流れで配置
  - セクション：丸みを帯びた角のカード（border-radius: 15px）や吹き出し
  - 余白：適切なパディングとマージンで視認性確保
  - 横幅：100%（最大2000px程度でセンタリング）
  - 4カラム構成

### 5. アニメーション効果
- Font Awesomeアイコンに連動するアニメーション（fa-beat, fa-bounce, fa-fade等）
- 重要キーワード出現時のハイライト効果（グラデーション変化）
- 接続線や矢印の流れるようなアニメーション
- アイコンの回転・拡大縮小アニメーション（特に注目させたい箇所）
- 背景グラデーションの緩やかな変化
- スクロールに連動した要素の出現効果
- クリック/タップでアイコンが反応する効果

## アイコン活用ガイドライン
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
 
- アイコンサイズの使い分け：
  - メイン概念：fa-3x
  - サブ概念：fa-2x
  - 強調用：fa-lg
  - 装飾・接続用：標準サイズ

## HTML/CSS実装のポイント
- Flexboxを活用した柔軟なレイアウト
- 吹き出しはCSS borderとbefore/afterで実装
- 丸枠はborder-radiusを活用
- 色付きマーカーはbackground-colorで実装（線形グラデーションも活用）
- 手書き風の効果はtext-shadowやbox-shadowで演出
- モバイル対応のためのメディアクエリ設定
- テキストと背景のコントラストを確保
- 視線の流れを意識した配置（左上→右下）

## 全体的な指針
- ペンで描いたような雰囲気ではなく、Font Awesomeで代替
- 情報の関連性を線や矢印（Font Awesome）で明示
- 親しみやすく読みやすいデザイン
- 重要なキーワードは目立つように強調
- 概念や関係性をFont Awesomeアイコンで視覚的に表現
- 情報の階層構造を意識した配置
- 全体のバランスを考慮（文字情報とアイコンの比率）
- 日本語表記を基本とし、必要に応じて英語キーワードも活用

## 変換する文章/記事
ーーー
