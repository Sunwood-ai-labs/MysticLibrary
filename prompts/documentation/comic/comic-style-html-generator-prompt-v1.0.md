# コミック調HTMLジェネレーター プロンプト V1.0

## 指示
以下の文章を、漫画風・コミック調のスタイルでHTMLページに変換してください。楽しく読みやすいデザインで技術文書や説明文を魅力的に表現してください。

## デザイン要件

### 🎨 全体的なスタイル
- **コミック/漫画風** のデザイン
- **カラフルなグラデーション** 背景
- **パネル式レイアウト** で各セクションを区切り
- **吹き出し風** の重要なボックス
- **手書き風** のフォント使用推奨

### 📦 パネルデザイン
- 各セクションを **コミックパネル** として表現
- **太い境界線** (4px以上) と **ドロップシャドウ**
- **カラフルなボーダー** (グラデーション推奨)
- **角丸** デザインで親しみやすさを演出

### 💬 テキストエリア
- **吹き出し風ボックス** で重要な情報をハイライト
- **キーワード** や **コマンド** は目立つスタイル
- **段階的な説明** には番号や絵文字を活用
- **警告** や **成功** メッセージには専用ボックス

### 🌈 カラーパレット
- **メインカラー**: #ff6b6b (赤系)
- **アクセント**: #4ecdc4 (青緑系)
- **サブカラー**: #45b7d1 (青系), #96ceb4 (緑系)
- **グラデーション**: 2色以上の組み合わせ
- **コードブロック**: 黒背景 + 緑文字

### ⚡ インタラクティブ要素
- **ホバー効果** で要素に動きを追加
- **アニメーション** でタイトルを目立たせる
- **レスポンシブ** デザインでモバイル対応
- **絵文字** を積極的に使用

### 📱 レイアウト構造
1. **ヒーローセクション**: 大きなタイトル + サブタイトル
2. **目次**: 絵文字付きの見やすいナビゲーション
3. **コンテンツパネル**: セクションごとにパネル分け
4. **コードブロック**: ターミナル風のスタイル
5. **まとめ**: 重要なポイントを強調

### 🔧 技術的要件
- **HTML5** + **CSS3** のみ使用
- **Google Fonts** の日本語フォント (Noto Sans JP推奨)
- **Pure CSS** アニメーション
- **Flexbox** や **Grid** でレイアウト
- **max-width: 1000px** でコンテナ幅制限

### 📝 コンテンツ変換ルール
- **見出し** → カラフルなタイトル + 絵文字
- **段落** → 読みやすい行間でスタイリング
- **リスト** → 絵文字付きまたは特別なスタイル
- **コード** → ターミナル風の黒背景ボックス
- **重要な情報** → 吹き出し風ボックス
- **警告/注意** → 専用の警告ボックス
- **成功/完了** → 専用の成功ボックス

## 🎯 出力フォーマット
完全なHTMLファイルとして出力し、以下を含めてください：
- `<!DOCTYPE html>` 宣言
- 適切な `<head>` セクション (meta, title, style)
- レスポンシブデザイン対応
- 絵文字とアイコンの積極的使用
- 楽しく読みやすいレイアウト

## 📖 入力文章
以下の文章をコミック調HTMLに変換してください：

---

[ここに変換したい文章を貼り付けてください]

---

## 💡 追加指示
- 元の文章の **構造と内容** は保持する
- **技術的な正確性** は維持する
- **視覚的な魅力** を最大化する
- **ユーザビリティ** を重視する
- **楽しい学習体験** を提供する

## 🏗️ HTMLテンプレート例

以下のような構造とスタイルでHTMLを生成してください：

```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[タイトル]</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;700;900&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Noto Sans JP', sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: #333;
            line-height: 1.6;
        }
        
        .container {
            max-width: 1000px;
            margin: 0 auto;
            padding: 20px;
        }
        
        .hero {
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            padding: 40px;
            margin-bottom: 30px;
            border: 5px solid #ff6b6b;
            position: relative;
        }
        
        h1 {
            font-size: 3em;
            font-weight: 900;
            color: #ff6b6b;
            text-align: center;
            text-shadow: 3px 3px 0px #333;
            transform: rotate(-2deg);
        }
        
        .comic-panel {
            background: white;
            border: 4px solid #333;
            border-radius: 15px;
            margin: 20px 0;
            padding: 25px;
            box-shadow: 5px 5px 0px #333;
            position: relative;
        }
        
        .comic-panel::before {
            content: '';
            position: absolute;
            top: -10px;
            left: -10px;
            right: -10px;
            bottom: -10px;
            background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
            border-radius: 20px;
            z-index: -1;
        }
        
        .speech-bubble {
            background: #fff;
            border: 3px solid #333;
            border-radius: 20px;
            padding: 20px;
            margin: 20px 0;
            position: relative;
            box-shadow: 3px 3px 0px #333;
        }
        
        .speech-bubble::before {
            content: '';
            position: absolute;
            bottom: -15px;
            left: 30px;
            border-left: 15px solid transparent;
            border-right: 15px solid transparent;
            border-top: 15px solid #333;
        }
        
        .code-block {
            background: #1a1a1a;
            color: #00ff00;
            padding: 20px;
            border-radius: 10px;
            margin: 15px 0;
            font-family: 'Courier New', monospace;
            border: 3px solid #333;
            box-shadow: inset 0 0 20px rgba(0,255,0,0.1);
        }
        
        .warning-box {
            background: #fff3cd;
            border: 3px solid #ffc107;
            border-radius: 10px;
            padding: 20px;
            margin: 20px 0;
        }
        
        .success-box {
            background: #d4edda;
            border: 3px solid #28a745;
            border-radius: 10px;
            padding: 20px;
            margin: 20px 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="hero">
            <h1>🎯 タイトル</h1>
            <p class="subtitle">サブタイトル</p>
        </div>
        
        <div class="comic-panel">
            <h2>📖 セクション1</h2>
            <div class="speech-bubble">
                <p>重要な説明をここに</p>
            </div>
            
            <div class="code-block">
コマンドやコードをここに
            </div>
            
            <div class="warning-box">
                <p>⚠️ 注意事項</p>
            </div>
        </div>
    </div>
</body>
</html>
```

## 🎨 スタイリング要素の使い分け

### クラス名と用途
- `.hero` - メインタイトルエリア
- `.comic-panel` - 各コンテンツセクション
- `.speech-bubble` - 重要な説明・ポイント
- `.code-block` - コマンド・コード例
- `.warning-box` - 注意・警告メッセージ
- `.success-box` - 成功・完了メッセージ
- `.feature-list` - 機能一覧
- `.toc` - 目次

### 絵文字の活用例
- 🎯 - メインポイント
- 📖 - 説明・解説
- 🔧 - 設定・ツール
- ⚡ - 重要機能
- 💡 - ヒント・コツ
- ⚠️ - 警告・注意
- ✅ - 成功・完了
- 🎮 - 操作・コマンド

このプロンプトとテンプレートを使用して、どんな文章でもコミック調の魅力的なHTMLページに変換できます！
