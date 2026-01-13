# グラレコスライドプロンプトv4：デュアルテーマ涼雅×夜涼版 

このプロンプトは、**夏の涼と和の美学**を現代に昇華させた**横スクロール機能付きグラフィックレコーディング風プレゼンテーション**を生成するためのものです。複数スライドを横にスクロールでき、ページ送りボタンで操作可能な、***Font Awesome を積極的に活用***した美しいプレゼンテーションを、涼雅な夏の美意識で表現します。

---

## 🎨 基本構成

### プレゼンスライド作成時のプロンプト形式
```
[入力ドキュメント/内容]を横スクロール機能付きプレゼンテーションスライドとしてHTML/CSS/JavaScriptで作成して
各スライドは16:9のサイズ（1920x1080px）にして
横スクロールでスライド間を移動でき、ページ送りボタン（前へ・次へ）も設置して
Font Awesome アイコンを積極的に活用して情報を視覚的に整理し、親しみやすく分かりやすいデザインにして
また、下記の涼雅（りょうが）カラーマップとフォントを使用してください
グラレコ風の手書き感と温かみを表現してください
```

---

## 🎨 デザイン仕様

### 1. カラーパレット定義（涼雅グラレコパレット + 夜涼ダークテーマ）

#### ライトテーマ「涼雅（りょうが）」- 夏の昼のグラレコ
| 名称 | HEX | RGB | 主要用途 | Font Awesome アイコン例 |
|------|-----|-----|---------|---------------------|
| Primary | #025E73 | rgb(2,94,115) | メインタイトル・重要情報 | `<i class="fas fa-water"></i>` `<i class="fas fa-heading"></i>` |
| Secondary | #038C8C | rgb(3,140,140) | セクションヘッダー・強調 | `<i class="fas fa-wind"></i>` `<i class="fas fa-bookmark"></i>` |
| Accent | #04BFAD | rgb(4,191,173) | ポイント・装飾線 | `<i class="fas fa-leaf"></i>` `<i class="fas fa-highlighter"></i>` |
| Neon-Gold | #F2C166 | rgb(242,193,102) | 重要数値・ホバー効果 | `<i class="fas fa-sun"></i>` `<i class="fas fa-star"></i>` |
| BG-Dark | #F2F2F2 | rgb(242,242,242) | 基本背景 | `<i class="fas fa-circle"></i>` |
| BG-Light | #FAFAFA | rgb(250,250,250) | カード背景 | `<i class="fas fa-square"></i>` |

#### ダークテーマ「夜涼（やりょう）」- 夏の夜のグラレコ
| 名称 | HEX | RGB | 主要用途 | Font Awesome アイコン例 |
|------|-----|-----|---------|---------------------|
| Primary-Dark | #04BFAD | rgb(4,191,173) | メインタイトル（蛍の光） | `<i class="fas fa-moon"></i>` `<i class="fas fa-heading"></i>` |
| Secondary-Dark | #F2C166 | rgb(242,193,102) | セクション（星の光） | `<i class="fas fa-star"></i>` `<i class="fas fa-bookmark"></i>` |
| Accent-Dark | #038C8C | rgb(3,140,140) | ポイント（夜の海面） | `<i class="fas fa-fish"></i>` `<i class="fas fa-highlighter"></i>` |
| Neon-Dark | #66D9EF | rgb(102,217,239) | 重要数値（月光） | `<i class="fas fa-feather"></i>` `<i class="fas fa-magic"></i>` |
| BG-Dark-Dark | #0A1A1F | rgb(10,26,31) | 基本背景（深夜の海） | `<i class="fas fa-circle"></i>` |
| BG-Light-Dark | #1A2F35 | rgb(26,47,53) | カード背景（夜霧） | `<i class="fas fa-square"></i>` |

### 2. フォント定義（グラレコ親和性フォント）
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Kaisei+Decol:wght@400;700&family=M+PLUS+Rounded+1c:wght@400;700&family=Klee+One:wght@400;600&display=swap" rel="stylesheet">
```

### 3. プレゼンテーション基本構造

#### 必須HTML構造
```html
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[プレゼンタイトル] - 涼雅プレゼンテーション</title>
    
    <!-- Font Awesome CDN -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kaisei+Decol:wght@400;700&family=M+PLUS+Rounded+1c:wght@400;700&family=Klee+One:wght@400;600&display=swap" rel="stylesheet">
</head>
<body>
    <!-- プレゼンテーションコンテナ -->
    <div class="presentation-container">
        <!-- ナビゲーションヘッダー -->
        <div class="nav-header">
            <div class="slide-counter">
                <i class="fas fa-file-powerpoint"></i>
                <span id="current-slide">1</span> / <span id="total-slides">5</span>
            </div>
            <div class="presentation-title">
                <i class="fas fa-presentation"></i>
                <h1>[プレゼンタイトル]</h1>
            </div>
            <div class="theme-toggle">
                <button id="theme-btn">
                    <i class="fas fa-moon"></i>
                </button>
            </div>
        </div>

        <!-- スライドビューポート -->
        <div class="slides-viewport">
            <div class="slides-container" id="slides-container">
                
                <!-- スライド1: タイトルスライド -->
                <div class="slide title-slide">
                    <div class="slide-content">
                        <i class="fas fa-lightbulb icon-mega"></i>
                        <h1 class="kaisei-decol-bold">[メインタイトル]</h1>
                        <h2 class="m-plus-rounded-1c-regular">[サブタイトル]</h2>
                        <div class="title-decoration">
                            <i class="fas fa-wave-square"></i>
                        </div>
                    </div>
                </div>

                <!-- スライド2: 概要スライド -->
                <div class="slide overview-slide">
                    <div class="slide-content">
                        <h2 class="slide-title kaisei-decol-bold">
                            <i class="fas fa-list-ul"></i>
                            概要
                        </h2>
                        <div class="overview-grid">
                            <div class="overview-item">
                                <i class="fas fa-target icon-lg"></i>
                                <h3>目的</h3>
                                <p class="klee-one-regular">[目的の説明]</p>
                            </div>
                            <div class="overview-item">
                                <i class="fas fa-users icon-lg"></i>
                                <h3>対象</h3>
                                <p class="klee-one-regular">[対象の説明]</p>
                            </div>
                            <div class="overview-item">
                                <i class="fas fa-clock icon-lg"></i>
                                <h3>時間</h3>
                                <p class="klee-one-regular">[時間の説明]</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 追加スライドは動的に生成... -->
                
            </div>
        </div>

        <!-- ナビゲーションコントロール -->
        <div class="nav-controls">
            <button class="nav-btn prev-btn" id="prev-btn">
                <i class="fas fa-chevron-left"></i>
                <span>前へ</span>
            </button>
            
            <div class="slide-indicators" id="slide-indicators">
                <!-- インジケーターは動的に生成 -->
            </div>
            
            <button class="nav-btn next-btn" id="next-btn">
                <span>次へ</span>
                <i class="fas fa-chevron-right"></i>
            </button>
        </div>
    </div>
</body>
</html>
```

### 4. CSS スタイル（プレゼンテーション機能）

```css
/* プレゼンテーション基本スタイル */
.presentation-container {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(135deg, var(--bg-light), var(--bg-dark));
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

/* ナビゲーションヘッダー */
.nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 40px;
    background: rgba(255,255,255,0.9);
    backdrop-filter: blur(10px);
    border-bottom: 2px solid var(--accent);
}

.slide-counter {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-weight: 700;
    color: var(--primary);
}

.presentation-title h1 {
    font-family: "Kaisei Decol", serif;
    font-size: 1.5rem;
    color: var(--primary);
    margin: 0;
}

/* スライドビューポート */
.slides-viewport {
    flex: 1;
    overflow: hidden;
    position: relative;
}

.slides-container {
    display: flex;
    height: 100%;
    transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* 個別スライドスタイル */
.slide {
    min-width: 100vw;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 60px;
    box-sizing: border-box;
}

.slide-content {
    max-width: 1400px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

/* タイトルスライド専用 */
.title-slide .slide-content h1 {
    font-size: clamp(4rem, 8vw, 8rem);
    color: var(--primary);
    margin: 30px 0;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}

.title-slide .slide-content h2 {
    font-size: clamp(2rem, 4vw, 3rem);
    color: var(--secondary);
    margin-bottom: 40px;
}

.icon-mega {
    font-size: clamp(8rem, 15vw, 12rem);
    color: var(--accent);
    opacity: 0.8;
    margin-bottom: 20px;
    animation: gentle-float 3s ease-in-out infinite;
}

@keyframes gentle-float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
}

/* 概要スライド */
.overview-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 40px;
    margin-top: 40px;
    width: 100%;
}

.overview-item {
    background: var(--bg-light);
    padding: 40px;
    border-radius: 20px;
    text-align: center;
    box-shadow: 0 8px 32px rgba(0,0,0,0.1);
    border: 2px solid var(--accent);
    transition: transform 0.3s ease;
}

.overview-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(4,191,173,0.2);
}

.overview-item i {
    color: var(--secondary);
    margin-bottom: 20px;
}

.overview-item h3 {
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-weight: 700;
    font-size: 1.8rem;
    color: var(--primary);
    margin-bottom: 15px;
}

/* ナビゲーションコントロール */
.nav-controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 60px;
    background: rgba(255,255,255,0.9);
    backdrop-filter: blur(10px);
    border-top: 2px solid var(--accent);
}

.nav-btn {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 15px 30px;
    background: var(--primary);
    color: white;
    border: none;
    border-radius: 50px;
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-weight: 700;
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.3s ease;
}

.nav-btn:hover {
    background: var(--secondary);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.2);
}

.nav-btn:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
}

/* スライドインジケーター */
.slide-indicators {
    display: flex;
    gap: 15px;
}

.indicator {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #ddd;
    cursor: pointer;
    transition: all 0.3s ease;
}

.indicator.active {
    background: var(--accent);
    transform: scale(1.3);
}

/* ダークテーマ対応 */
.dark-theme {
    --primary: #04BFAD;
    --secondary: #F2C166;
    --accent: #038C8C;
    --neon-gold: #66D9EF;
    --bg-dark: #0A1A1F;
    --bg-light: #1A2F35;
}

.dark-theme .nav-header,
.dark-theme .nav-controls {
    background: rgba(26,47,53,0.9);
    color: var(--primary);
}
```

### 5. JavaScript機能（プレゼンテーション制御）

```javascript
class RyogaPresentation {
    constructor() {
        this.currentSlide = 0;
        this.totalSlides = document.querySelectorAll('.slide').length;
        this.slidesContainer = document.getElementById('slides-container');
        this.currentSlideSpan = document.getElementById('current-slide');
        this.totalSlidesSpan = document.getElementById('total-slides');
        
        this.init();
    }

    init() {
        // 初期化
        this.updateSlideCounter();
        this.createIndicators();
        this.bindEvents();
        
        // キーボードショートカット
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight' || e.key === ' ') {
                this.nextSlide();
            } else if (e.key === 'ArrowLeft') {
                this.prevSlide();
            } else if (e.key === 'Home') {
                this.goToSlide(0);
            } else if (e.key === 'End') {
                this.goToSlide(this.totalSlides - 1);
            }
        });
    }

    bindEvents() {
        document.getElementById('prev-btn').addEventListener('click', () => this.prevSlide());
        document.getElementById('next-btn').addEventListener('click', () => this.nextSlide());
        document.getElementById('theme-btn').addEventListener('click', () => this.toggleTheme());
    }

    nextSlide() {
        if (this.currentSlide < this.totalSlides - 1) {
            this.currentSlide++;
            this.updateSlide();
        }
    }

    prevSlide() {
        if (this.currentSlide > 0) {
            this.currentSlide--;
            this.updateSlide();
        }
    }

    goToSlide(index) {
        if (index >= 0 && index < this.totalSlides) {
            this.currentSlide = index;
            this.updateSlide();
        }
    }

    updateSlide() {
        const translateX = -this.currentSlide * 100;
        this.slidesContainer.style.transform = `translateX(${translateX}vw)`;
        this.updateSlideCounter();
        this.updateIndicators();
        this.updateNavButtons();
    }

    updateSlideCounter() {
        this.currentSlideSpan.textContent = this.currentSlide + 1;
        this.totalSlidesSpan.textContent = this.totalSlides;
    }

    createIndicators() {
        const indicatorsContainer = document.getElementById('slide-indicators');
        indicatorsContainer.innerHTML = '';
        
        for (let i = 0; i < this.totalSlides; i++) {
            const indicator = document.createElement('div');
            indicator.className = 'indicator';
            if (i === 0) indicator.classList.add('active');
            
            indicator.addEventListener('click', () => this.goToSlide(i));
            indicatorsContainer.appendChild(indicator);
        }
    }

    updateIndicators() {
        const indicators = document.querySelectorAll('.indicator');
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentSlide);
        });
    }

    updateNavButtons() {
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        
        prevBtn.disabled = this.currentSlide === 0;
        nextBtn.disabled = this.currentSlide === this.totalSlides - 1;
    }

    toggleTheme() {
        document.body.classList.toggle('dark-theme');
        const themeBtn = document.getElementById('theme-btn');
        const icon = themeBtn.querySelector('i');
        
        if (document.body.classList.contains('dark-theme')) {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    }
}

// プレゼンテーション初期化
document.addEventListener('DOMContentLoaded', () => {
    new RyogaPresentation();
});
```

---

## 🎯 スライドタイプ別テンプレート

### 1. プロセスフロースライド
```html
<div class="slide process-slide">
    <div class="slide-content">
        <h2 class="slide-title kaisei-decol-bold">
            <i class="fas fa-route"></i>
            プロセスフロー
        </h2>
        <div class="process-flow">
            <div class="process-step">
                <i class="fas fa-play icon-lg"></i>
                <h3>ステップ1</h3>
                <p class="klee-one-regular">説明テキスト</p>
            </div>
            <i class="fas fa-arrow-right flow-arrow"></i>
            <!-- 他のステップ... -->
        </div>
    </div>
</div>
```

### 2. データ比較スライド
```html
<div class="slide comparison-slide">
    <div class="slide-content">
        <h2 class="slide-title kaisei-decol-bold">
            <i class="fas fa-balance-scale"></i>
            比較分析
        </h2>
        <div class="comparison-grid">
            <div class="comparison-item">
                <i class="fas fa-thumbs-up icon-xl"></i>
                <h3>メリット</h3>
                <!-- 内容... -->
            </div>
            <div class="comparison-item">
                <i class="fas fa-exclamation-triangle icon-xl"></i>
                <h3>注意点</h3>
                <!-- 内容... -->
            </div>
        </div>
    </div>
</div>
```

### 3. 結論・まとめスライド
```html
<div class="slide conclusion-slide">
    <div class="slide-content">
        <i class="fas fa-flag-checkered icon-mega"></i>
        <h2 class="slide-title kaisei-decol-bold">まとめ</h2>
        <div class="conclusion-points">
            <div class="point">
                <i class="fas fa-star icon-lg"></i>
                <p class="klee-one-regular">重要ポイント1</p>
            </div>
            <!-- 他のポイント... -->
        </div>
    </div>
</div>
```

---

## 🎯 操作方法とショートカット

### 基本操作
- **次のスライド**: 右矢印キー / スペースキー / 「次へ」ボタン
- **前のスライド**: 左矢印キー / 「前へ」ボタン
- **最初のスライド**: Homeキー
- **最後のスライド**: Endキー
- **特定スライド**: インジケータークリック
- **テーマ切替**: 月/太陽ボタン

### レスポンシブ対応
- スマートフォン: タッチスワイプ対応
- タブレット: タッチナビゲーション最適化
- デスクトップ: キーボードショートカット完全対応

このプロンプトで作成されるプレゼンテーションは、美しい涼雅デザインと直感的な操作性を兼ね備えた、プロフェッショナルなスライドショーとなります！

＝＝＝


# 生成例

下記の例を参考に生成して


```

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GraphGen - 涼雅プレゼンテーション</title>
    
    <!-- Font Awesome CDN -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kaisei+Decol:wght@400;700&family=M+PLUS+Rounded+1c:wght@400;700&family=Klee+One:wght@400;600&display=swap" rel="stylesheet">
    
    <style>
        :root {
            --primary: #025E73;
            --secondary: #038C8C;
            --accent: #04BFAD;
            --neon-gold: #F2C166;
            --bg-dark: #F2F2F2;
            --bg-light: #FAFAFA;
        }

        .dark-theme {
            --primary: #04BFAD;
            --secondary: #F2C166;
            --accent: #038C8C;
            --neon-gold: #66D9EF;
            --bg-dark: #0A1A1F;
            --bg-light: #1A2F35;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: "M PLUS Rounded 1c", sans-serif;
            transition: all 0.3s ease;
        }

        .kaisei-decol-bold { font-family: "Kaisei Decol", serif; font-weight: 700; }
        .m-plus-rounded-1c-regular { font-family: "M PLUS Rounded 1c", sans-serif; font-weight: 400; }
        .klee-one-regular { font-family: "Klee One", cursive; font-weight: 400; }

        /* プレゼンテーション基本スタイル */
        .presentation-container {
            width: 100vw;
            height: 100vh;
            background: linear-gradient(135deg, var(--bg-light), var(--bg-dark));
            display: flex;
            flex-direction: column;
            overflow: hidden;
        }

        /* ナビゲーションヘッダー */
        .nav-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 40px;
            background: rgba(255,255,255,0.9);
            backdrop-filter: blur(10px);
            border-bottom: 2px solid var(--accent);
            transition: all 0.3s ease;
        }

        .dark-theme .nav-header {
            background: rgba(26,47,53,0.9);
            color: var(--primary);
        }

        .slide-counter {
            display: flex;
            align-items: center;
            gap: 10px;
            font-family: "M PLUS Rounded 1c", sans-serif;
            font-weight: 700;
            color: var(--primary);
        }

        .presentation-title {
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .presentation-title h1 {
            font-family: "Kaisei Decol", serif;
            font-size: 1.5rem;
            color: var(--primary);
            margin: 0;
        }

        .theme-toggle button {
            background: var(--accent);
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;
            color: white;
            font-size: 1.2rem;
        }

        .theme-toggle button:hover {
            transform: scale(1.1);
            background: var(--secondary);
        }

        /* スライドビューポート */
        .slides-viewport {
            flex: 1;
            overflow: hidden;
            position: relative;
        }

        .slides-container {
            display: flex;
            height: 100%;
            transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        /* 個別スライドスタイル */
        .slide {
            min-width: 100vw;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 60px;
            box-sizing: border-box;
        }

        .slide-content {
            max-width: 1400px;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }

        /* タイトルスライド専用 */
        .title-slide .slide-content h1 {
            font-size: clamp(4rem, 8vw, 8rem);
            color: var(--primary);
            margin: 30px 0;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        }

        .title-slide .slide-content h2 {
            font-size: clamp(2rem, 4vw, 3rem);
            color: var(--secondary);
            margin-bottom: 40px;
        }

        .title-slide .slide-content p {
            font-size: clamp(1.2rem, 2vw, 1.8rem);
            color: var(--primary);
            opacity: 0.8;
        }

        .icon-mega {
            font-size: clamp(8rem, 15vw, 12rem);
            color: var(--accent);
            opacity: 0.8;
            margin-bottom: 20px;
            animation: gentle-float 3s ease-in-out infinite;
        }

        @keyframes gentle-float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }

        .title-decoration {
            margin-top: 40px;
            font-size: 3rem;
            color: var(--neon-gold);
            opacity: 0.6;
        }

        /* スライドタイトル */
        .slide-title {
            font-size: clamp(3rem, 6vw, 4rem);
            color: var(--primary);
            margin-bottom: 40px;
            display: flex;
            align-items: center;
            gap: 20px;
        }

        .slide-title i {
            color: var(--accent);
        }

        /* 概要スライド */
        .overview-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 40px;
            margin-top: 40px;
            width: 100%;
        }

        .overview-item {
            background: var(--bg-light);
            padding: 40px;
            border-radius: 20px;
            text-align: center;
            box-shadow: 0 8px 32px rgba(0,0,0,0.1);
            border: 2px solid var(--accent);
            transition: transform 0.3s ease;
        }

        .overview-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 40px rgba(4,191,173,0.2);
        }

        .overview-item i {
            color: var(--secondary);
            margin-bottom: 20px;
            font-size: 3rem;
        }

        .overview-item h3 {
            font-family: "M PLUS Rounded 1c", sans-serif;
            font-weight: 700;
            font-size: 1.8rem;
            color: var(--primary);
            margin-bottom: 15px;
        }

        .overview-item p {
            font-size: 1.2rem;
            line-height: 1.6;
            color: var(--primary);
            opacity: 0.8;
        }

        /* 特徴スライド */
        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 30px;
            width: 100%;
            margin-top: 40px;
        }

        .feature-card {
            background: var(--bg-light);
            padding: 30px;
            border-radius: 15px;
            border-left: 5px solid var(--accent);
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
            transition: all 0.3s ease;
        }

        .feature-card:hover {
            transform: translateX(10px);
            box-shadow: 0 8px 30px rgba(4,191,173,0.15);
        }

        .feature-card h3 {
            display: flex;
            align-items: center;
            gap: 15px;
            font-size: 1.5rem;
            color: var(--primary);
            margin-bottom: 15px;
        }

        .feature-card h3 i {
            color: var(--secondary);
            font-size: 1.8rem;
        }

        .feature-card p {
            font-size: 1.1rem;
            line-height: 1.6;
            color: var(--primary);
            opacity: 0.8;
        }

        /* ワークフロースライド */
        .workflow-container {
            width: 100%;
            max-width: 1200px;
        }

        .workflow-steps {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 30px;
            margin-top: 40px;
        }

        .workflow-step {
            flex: 1;
            min-width: 200px;
            text-align: center;
            position: relative;
        }

        .step-icon {
            width: 80px;
            height: 80px;
            background: var(--accent);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px;
            font-size: 2rem;
            color: white;
            box-shadow: 0 8px 20px rgba(4,191,173,0.3);
        }

        .step-title {
            font-size: 1.3rem;
            font-weight: 700;
            color: var(--primary);
            margin-bottom: 10px;
        }

        .step-description {
            font-size: 1rem;
            color: var(--primary);
            opacity: 0.8;
            line-height: 1.5;
        }

        .workflow-arrow {
            font-size: 2rem;
            color: var(--neon-gold);
            margin: 0 10px;
        }

        /* ナビゲーションコントロール */
        .nav-controls {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 30px 60px;
            background: rgba(255,255,255,0.9);
            backdrop-filter: blur(10px);
            border-top: 2px solid var(--accent);
            transition: all 0.3s ease;
        }

        .dark-theme .nav-controls {
            background: rgba(26,47,53,0.9);
            color: var(--primary);
        }

        .nav-btn {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 15px 30px;
            background: var(--primary);
            color: white;
            border: none;
            border-radius: 50px;
            font-family: "M PLUS Rounded 1c", sans-serif;
            font-weight: 700;
            font-size: 1.1rem;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .nav-btn:hover {
            background: var(--secondary);
            transform: translateY(-2px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        }

        .nav-btn:disabled {
            background: #ccc;
            cursor: not-allowed;
            transform: none;
        }

        /* スライドインジケーター */
        .slide-indicators {
            display: flex;
            gap: 15px;
        }

        .indicator {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: #ddd;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .indicator.active {
            background: var(--accent);
            transform: scale(1.3);
        }

        /* クイックスタートスライド */
        .quickstart-steps {
            width: 100%;
            max-width: 1000px;
        }

        .step-list {
            text-align: left;
            margin-top: 40px;
        }

        .step-item {
            display: flex;
            align-items: flex-start;
            gap: 20px;
            margin-bottom: 30px;
            padding: 20px;
            background: var(--bg-light);
            border-radius: 15px;
            border-left: 4px solid var(--accent);
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        .step-number {
            background: var(--secondary);
            color: white;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 1.2rem;
            flex-shrink: 0;
        }

        .step-content h4 {
            font-size: 1.3rem;
            color: var(--primary);
            margin-bottom: 8px;
        }

        .step-content p {
            font-size: 1.1rem;
            color: var(--primary);
            opacity: 0.8;
            line-height: 1.5;
        }

        .code-block {
            background: #2d3748;
            color: #e2e8f0;
            padding: 15px;
            border-radius: 8px;
            font-family: 'Courier New', monospace;
            font-size: 0.9rem;
            margin-top: 10px;
            overflow-x: auto;
        }

        /* 結論スライド */
        .conclusion-points {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            gap: 30px;
            margin-top: 40px;
            width: 100%;
        }

        .point {
            display: flex;
            align-items: center;
            gap: 20px;
            padding: 30px;
            background: var(--bg-light);
            border-radius: 15px;
            box-shadow: 0 8px 25px rgba(0,0,0,0.1);
            border: 2px solid var(--accent);
            transition: all 0.3s ease;
        }

        .point:hover {
            transform: scale(1.02);
            box-shadow: 0 12px 35px rgba(4,191,173,0.2);
        }

        .point i {
            font-size: 2.5rem;
            color: var(--neon-gold);
        }

        .point p {
            font-size: 1.3rem;
            color: var(--primary);
            font-weight: 600;
            line-height: 1.4;
        }

        /* レスポンシブ対応 */
        @media (max-width: 768px) {
            .slide {
                padding: 30px 20px;
            }
            
            .nav-header, .nav-controls {
                padding: 15px 20px;
            }
            
            .workflow-steps {
                flex-direction: column;
            }
            
            .workflow-arrow {
                transform: rotate(90deg);
                margin: 10px 0;
            }
            
            .overview-grid, .features-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <!-- プレゼンテーションコンテナ -->
    <div class="presentation-container">
        <!-- ナビゲーションヘッダー -->
        <div class="nav-header">
            <div class="slide-counter">
                <i class="fas fa-file-powerpoint"></i>
                <span id="current-slide">1</span> / <span id="total-slides">6</span>
            </div>
            <div class="presentation-title">
                <i class="fas fa-project-diagram"></i>
                <h1>GraphGen - 知識グラフ合成データ生成</h1>
            </div>
            <div class="theme-toggle">
                <button id="theme-btn">
                    <i class="fas fa-moon"></i>
                </button>
            </div>
        </div>

        <!-- スライドビューポート -->
        <div class="slides-viewport">
            <div class="slides-container" id="slides-container">
                
                <!-- スライド1: タイトルスライド -->
                <div class="slide title-slide">
                    <div class="slide-content">
                        <i class="fas fa-network-wired icon-mega"></i>
                        <h1 class="kaisei-decol-bold">GraphGen</h1>
                        <h2 class="m-plus-rounded-1c-regular">知識グラフに基づく合成データ生成フレームワーク</h2>
                        <p class="klee-one-regular">Enhancing Supervised Fine-Tuning for LLMs</p>
                        <div class="title-decoration">
                            <i class="fas fa-wave-square"></i>
                        </div>
                    </div>
                </div>

                <!-- スライド2: 概要スライド -->
                <div class="slide overview-slide">
                    <div class="slide-content">
                        <h2 class="slide-title kaisei-decol-bold">
                            <i class="fas fa-info-circle"></i>
                            GraphGenとは？
                        </h2>
                        <div class="overview-grid">
                            <div class="overview-item">
                                <i class="fas fa-sitemap"></i>
                                <h3>知識グラフ構築</h3>
                                <p class="klee-one-regular">ソーステキストから細粒度な知識グラフを自動構築し、複雑な関係性を捉えます</p>
                            </div>
                            <div class="overview-item">
                                <i class="fas fa-brain"></i>
                                <h3>知識ギャップ特定</h3>
                                <p class="klee-one-regular">期待キャリブレーション誤差指標を用いてLLMの知識不足領域を特定します</p>
                            </div>
                            <div class="overview-item">
                                <i class="fas fa-chart-line"></i>
                                <h3>価値的データ生成</h3>
                                <p class="klee-one-regular">ロングテール知識に焦点を当てた高品質なQAペアを優先的に生成します</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- スライド3: 主要機能スライド -->
                <div class="slide features-slide">
                    <div class="slide-content">
                        <h2 class="slide-title kaisei-decol-bold">
                            <i class="fas fa-star"></i>
                            主要機能
                        </h2>
                        <div class="features-grid">
                            <div class="feature-card">
                                <h3>
                                    <i class="fas fa-project-diagram"></i>
                                    マルチホップ近傍サンプリング
                                </h3>
                                <p class="klee-one-regular">複雑な関係性を捉えるための高度なサンプリング手法で、深い知識の関連性を抽出します。</p>
                            </div>
                            <div class="feature-card">
                                <h3>
                                    <i class="fas fa-palette"></i>
                                    スタイル制御生成
                                </h3>
                                <p class="klee-one-regular">多様なスタイルでQAデータを生成し、学習データの多様性を確保します。</p>
                            </div>
                            <div class="feature-card">
                                <h3>
                                    <i class="fas fa-search"></i>
                                    効率的グラフ検索
                                </h3>
                                <p class="klee-one-regular">LightRAGベースのシンプルかつ効率的なグラフ検索システムを採用しています。</p>
                            </div>
                            <div class="feature-card">
                                <h3>
                                    <i class="fas fa-cogs"></i>
                                    API統合
                                </h3>
                                <p class="klee-one-regular">SiliconCloudなどの豊富なLLM APIと統合し、柔軟な運用を実現します。</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- スライド4: ワークフロー -->
                <div class="slide workflow-slide">
                    <div class="slide-content">
                        <h2 class="slide-title kaisei-decol-bold">
                            <i class="fas fa-route"></i>
                            ワークフロー
                        </h2>
                        <div class="workflow-container">
                            <div class="workflow-steps">
                                <div class="workflow-step">
                                    <div class="step-icon">
                                        <i class="fas fa-file-text"></i>
                                    </div>
                                    <div class="step-title">1. テキスト入力</div>
                                    <div class="step-description">ソーステキストから知識を抽出</div>
                                </div>
                                <i class="fas fa-arrow-right workflow-arrow"></i>
                                <div class="workflow-step">
                                    <div class="step-icon">
                                        <i class="fas fa-sitemap"></i>
                                    </div>
                                    <div class="step-title">2. KG構築</div>
                                    <div class="step-description">知識グラフの自動構築</div>
                                </div>
                                <i class="fas fa-arrow-right workflow-arrow"></i>
                                <div class="workflow-step">
                                    <div class="step-icon">
                                        <i class="fas fa-search"></i>
                                    </div>
                                    <div class="step-title">3. ギャップ特定</div>
                                    <div class="step-description">LLMの知識不足を特定</div>
                                </div>
                                <i class="fas fa-arrow-right workflow-arrow"></i>
                                <div class="workflow-step">
                                    <div class="step-icon">
                                        <i class="fas fa-magic"></i>
                                    </div>
                                    <div class="step-title">4. データ生成</div>
                                    <div class="step-description">高品質QAペア生成</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- スライド5: クイックスタート -->
                <div class="slide quickstart-slide">
                    <div class="slide-content">
                        <h2 class="slide-title kaisei-decol-bold">
                            <i class="fas fa-rocket"></i>
                            クイックスタート
                        </h2>
                        <div class="quickstart-steps">
                            <div class="step-list">
                                <div class="step-item">
                                    <div class="step-number">1</div>
                                    <div class="step-content">
                                        <h4><i class="fas fa-download"></i> インストール</h4>
                                        <p>uvまたはpipでパッケージをインストール</p>
                                        <div class="code-block">uv pip install graphg</div>
                                    </div>
                                </div>
                                <div class="step-item">
                                    <div class="step-number">2</div>
                                    <div class="step-content">
                                        <h4><i class="fas fa-cog"></i> 環境設定</h4>
                                        <p>API キーとモデル設定を.envファイルに記述</p>
                                        <div class="code-block">SYNTHESIZER_MODEL=your_model_name</div>
                                    </div>
                                </div>
                                <div class="step-item">
                                    <div class="step-number">3</div>
                                    <div class="step-content">
                                        <h4><i class="fas fa-play"></i> 実行</h4>
                                        <p>生成スクリプトを実行してデータ生成開始</p>
                                        <div class="code-block">bash scripts/generate.sh</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- スライド6: まとめ -->
                <div class="slide conclusion-slide">
                    <div class="slide-content">
                        <i class="fas fa-flag-checkered icon-mega"></i>
                        <h2 class="slide-title kaisei-decol-bold">まとめ</h2>
                        <div class="conclusion-points">
                            <div class="point">
                                <i class="fas fa-lightbulb"></i>
                                <p class="klee-one-regular">知識グラフベースの革新的アプローチでLLMの学習効率を向上</p>
                            </div>
                            <div class="point">
                                <i class="fas fa-chart-line"></i>
                                <p class="klee-one-regular">価値の高いロングテール知識に焦点を当てた効率的データ生成</p>
                            </div>
                            <div class="point">
                                <i class="fas fa-globe"></i>
                                <p class="klee-one-regular">Webデモ、API、Dockerによる多様な利用方法を提供</p>
                            </div>
                            <div class="point">
                                <i class="fas fa-users"></i>
                                <p class="klee-one-regular">オープンソースとして公開、コミュニティ貢献歓迎</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

        <!-- ナビゲーションコントロール -->
        <div class="nav-controls">
            <button class="nav-btn prev-btn" id="prev-btn">
                <i class="fas fa-chevron-left"></i>
                <span>前へ</span>
            </button>
            
            <div class="slide-indicators" id="slide-indicators">
                <!-- インジケーターは動的に生成 -->
            </div>
            
            <button class="nav-btn next-btn" id="next-btn">
                <span>次へ</span>
                <i class="fas fa-chevron-right"></i>
            </button>
        </div>
    </div>

    <script>
        class RyogaPresentation {
            constructor() {
                this.currentSlide = 0;
                this.totalSlides = document.querySelectorAll('.slide').length;
                this.slidesContainer = document.getElementById('slides-container');
                this.currentSlideSpan = document.getElementById('current-slide');
                this.totalSlidesSpan = document.getElementById('total-slides');
                
                this.init();
            }

            init() {
                // 初期化
                this.updateSlideCounter();
                this.createIndicators();
                this.bindEvents();
                
                // キーボードショートカット
                document.addEventListener('keydown', (e) => {
                    if (e.key === 'ArrowRight' || e.key === ' ') {
                        e.preventDefault();
                        this.nextSlide();
                    } else if (e.key === 'ArrowLeft') {
                        e.preventDefault();
                        this.prevSlide();
                    } else if (e.key === 'Home') {
                        e.preventDefault();
                        this.goToSlide(0);
                    } else if (e.key === 'End') {
                        e.preventDefault();
                        this.goToSlide(this.totalSlides - 1);
                    }
                });

                // タッチスワイプ対応
                let startX = 0;
                let endX = 0;

                this.slidesContainer.addEventListener('touchstart', (e) => {
                    startX = e.touches[0].clientX;
                });

                this.slidesContainer.addEventListener('touchend', (e) => {
                    endX = e.changedTouches[0].clientX;
                    this.handleSwipe();
                });
            }

            handleSwipe() {
                const threshold = 100;
                const diff = startX - endX;

                if (Math.abs(diff) > threshold) {
                    if (diff > 0) {
                        this.nextSlide();
                    } else {
                        this.prevSlide();
                    }
                }
            }

            bindEvents() {
                document.getElementById('prev-btn').addEventListener('click', () => this.prevSlide());
                document.getElementById('next-btn').addEventListener('click', () => this.nextSlide());
                document.getElementById('theme-btn').addEventListener('click', () => this.toggleTheme());
            }

            nextSlide() {
                if (this.currentSlide < this.totalSlides - 1) {
                    this.currentSlide++;
                    this.updateSlide();
                }
            }

            prevSlide() {
                if (this.currentSlide > 0) {
                    this.currentSlide--;
                    this.updateSlide();
                }
            }

            goToSlide(index) {
                if (index >= 0 && index < this.totalSlides) {
                    this.currentSlide = index;
                    this.updateSlide();
                }
            }

            updateSlide() {
                const translateX = -this.currentSlide * 100;
                this.slidesContainer.style.transform = `translateX(${translateX}vw)`;
                this.updateSlideCounter();
                this.updateIndicators();
                this.updateNavButtons();
            }

            updateSlideCounter() {
                this.currentSlideSpan.textContent = this.currentSlide + 1;
                this.totalSlidesSpan.textContent = this.totalSlides;
            }

            createIndicators() {
                const indicatorsContainer = document.getElementById('slide-indicators');
                indicatorsContainer.innerHTML = '';
                
                for (let i = 0; i < this.totalSlides; i++) {
                    const indicator = document.createElement('div');
                    indicator.className = 'indicator';
                    if (i === 0) indicator.classList.add('active');
                    
                    indicator.addEventListener('click', () => this.goToSlide(i));
                    indicatorsContainer.appendChild(indicator);
                }
            }

            updateIndicators() {
                const indicators = document.querySelectorAll('.indicator');
                indicators.forEach((indicator, index) => {
                    indicator.classList.toggle('active', index === this.currentSlide);
                });
            }

            updateNavButtons() {
                const prevBtn = document.getElementById('prev-btn');
                const nextBtn = document.getElementById('next-btn');
                
                prevBtn.disabled = this.currentSlide === 0;
                nextBtn.disabled = this.currentSlide === this.totalSlides - 1;
            }

            toggleTheme() {
                document.body.classList.toggle('dark-theme');
                const themeBtn = document.getElementById('theme-btn');
                const icon = themeBtn.querySelector('i');
                
                if (document.body.classList.contains('dark-theme')) {
                    icon.className = 'fas fa-sun';
                } else {
                    icon.className = 'fas fa-moon';
                }
            }
        }

        // プレゼンテーション初期化
        document.addEventListener('DOMContentLoaded', () => {
            new RyogaPresentation();
        });
    </script>
</body>
</html>
```
