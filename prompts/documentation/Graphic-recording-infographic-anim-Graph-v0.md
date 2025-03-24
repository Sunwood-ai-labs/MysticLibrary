# グラフ付きグラフィックレコーディング (グラレコ) HTML 作成プロンプト V0
以下の要件に従って、グラフィックレコーディングを HTML で再現してください。

## グラフィックレコーディングとは

グラフィックレコーディング（グラレコ）とは、会議やプレゼンテーションなどの内容を図やイラスト、文字を使ってリアルタイムにまとめる手法です。議論の全体像を把握しやすくなり、アイディアが出やすくなるメリットがあります。文字だけの議事録と比べて直感的に伝わりやすく、視覚的な記録は情報の記憶に残りやすいという特徴があります。

## 基本要件

- 手書き風フォントを使用（Kaisei Decol, Yomogi, Zen Kurenaido）
- 絵の代わりに Font Awesome アイコンや絵文字を大きく使用（サイズは70px程度）
- カードは背景を透明にし、枠は使用せず、背景になじむようにする
- 手書き風の吹き出しを CSS で表現（背景は薄い透明度に）
- レスポンシブデザイン
- 5カラム構成（コンテナ幅は2000px）
- カード間の間隔を広くとる（40px程度）
- グリッドのギャップは30px

## タイポグラフィ
  - タイトル：32px、グラデーション効果、太字、Font Awesomeアイコンを左右に配置
  - サブタイトル：16px、#475569、関連するFont Awesomeアイコンを添える
  - セクション見出し：18px、#1e40af、左側にFont Awesomeアイコンを必ず配置し、アイコンにはアニメーション効果
  - 本文：14px、#334155、行間1.4、重要キーワードには関連するFont Awesomeアイコンや絵文字を小さく添える
  - フォント指定：
    ```html
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Kaisei+Decol&family=Yomogi&family=Zen+Kurenaido&display=swap');
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css');
    </style>
    ```

## カラーパレット

```
<palette>
<color name='SHOOTING-[23’]-1' rgb='A61B40' r='165' g='26' b='63' />
<color name='SHOOTING-[23’]-2' rgb='DCE0F2' r='220' g='223' b='242' />
<color name='SHOOTING-[23’]-3' rgb='012840' r='1' g='39' b='63' />
<color name='SHOOTING-[23’]-4' rgb='A66A5D' r='165' g='106' b='92' />
<color name='SHOOTING-[23’]-5' rgb='0D0D0D' r='12' g='12' b='12' />
</palette>
```

## CSS 主要設定
```css
.container {
    max-width: 2000px;
    margin: 0 auto;
}

body {
    /* 手書き風グリッドライン背景 */
    background-image: url('data:image/svg+xml;utf8,<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h100v100H0z" fill="none"/><path d="M0 10h100M10 0v100" stroke="%23e0e0e0" stroke-width="0.5" stroke-dasharray="2,3"/></svg>');
    background-size: 30px 30px;
    background-color: #f9f7f1;
    overflow-x: hidden;
}

.grid-container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 30px;
}

.card {
    background-color: transparent;
    padding: 15px;
    border-radius: 15px;
    position: relative;
    margin-bottom: 40px;
    transition: transform 0.3s ease;
}

.icon-large {
    font-size: 70px;
    display: block;
    margin: 15px auto;
    text-align: center;
}

.speech-bubble {
    position: relative;
    background-color: rgba(242, 187, 87, 0.1);
    border-radius: 15px;
    padding: 12px;
}

.comparison-item {
    background-color: transparent;
    padding: 10px;
    border-radius: 10px;
}

.highlight-box {
    border-left: 3px solid #F2BC57;
    padding-left: 10px;
    background-color: transparent;
}

/* メディアクエリ */
@media (max-width: 1600px) {
    .grid-container {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (max-width: 768px) {
    .grid-container {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 480px) {
    .grid-container {
        grid-template-columns: 1fr;
    }
}
```

## グラフ可視化参考プログラム

グラフで可視化した方が見やすい場合は下記を参考にして、カラーパレットは指定したものを採用して

```html
<div class="template-wrap">
  
  <div class="ep-flowchart" id="ep-flowchart">
    <div class="ep-svg-wrap">
      
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
        <g id="Page-1" fill="none" fill-rule="evenodd">
          <g id="Course-Template">
            <g id="arrows" transform="translate(163 98)">
              <g id="arrows/arrow-1.2" transform="rotate(90 69.5 70)">
                <g id="arrow-1.2">
                  <path id="Line" stroke="#89969F" stroke-linecap="square" d="M.336 2.5h38.46"/>
                  <polygon id="Triangle" fill="#89969F" points="37 5 37 0 40 2.5"/>
                </g>
              </g>
              <g id="arrows/arrow-1.2-copy" transform="rotate(90 27.5 112)">
                <g id="arrow-1.2">
                  <path id="Line" stroke="#89969F" stroke-linecap="square" d="M.336 2.5h38.46"/>
                  <polygon id="Triangle" fill="#89969F" points="37 5 37 0 40 2.5"/>
                </g>
              </g>
              <g id="arrows/arrow-4" transform="rotate(90 53 220.5)">
                <g id="arrow-4">
                  <path id="Path-4" stroke="#89969F" d="M87 3H38.009C32.48 3 28 7.48 28 13v247c0 5.523 4.483 10 10.009 10H87"/>
                  <path id="Path-5" stroke="#89969F" d="M28.5 137H.996"/>
                  <polygon id="Triangle-2-Copy-2" fill="#89969F" points="87 6 87 0 90 3"/>
                  <polygon id="Triangle-2-Copy-4" fill="#89969F" points="87 273 87 267 90 270"/>
                </g>
              </g>
              <g id="arrow-2" transform="translate(3 335)">
                <path id="Path-2" stroke="#89969F" d="M0 0v73.009C0 78.527 4.485 83 9.992 83H70"/>
                <polygon id="Triangle-2" fill="#89969F" points="70 86 70 80 73 83"/>
              </g>
              <g id="arrow-2-copy" transform="matrix(-1 0 0 1 271 335)">
                <path id="Path-2" stroke="#89969F" d="M0 0v73.009C0 78.527 4.485 83 9.992 83H70"/>
                <polygon id="Triangle-2" fill="#89969F" points="70 86 70 80 73 83"/>
              </g>
            </g>
            <g id="ep-content" class="ep-svg-block"
               @click="{{ display = true; selected = 'ep-content' }}"
               transform="translate(229 56)">
              <rect id="Rectangle" width="141" height="40" fill="#8BE5AD" rx="20"/>
              <text id="Content" fill="#586075" font-family="Roboto-Regular, Roboto" font-size="18" letter-spacing="1">
                <tspan x="27.022" y="25">CONTENT</tspan>
              </text>
            </g>
            <g id="ep-form" class="ep-svg-block"
               @click="{{ display = true; selected = 'ep-form' }}"
               transform="translate(244 140)">
              <rect id="Rectangle" width="112" height="40" fill="#8BE5AD" rx="20"/>
              <text id="Content" fill="#586075" font-family="Roboto-Regular, Roboto" font-size="18" letter-spacing="1">
                <tspan x="29.964" y="25">FORM</tspan>
              </text>
            </g>
            <g id="ep-media" class="ep-svg-block"
               @click="{{ display = true; selected = 'ep-media' }}"
               transform="translate(239 224)">
              <rect id="Rectangle" width="122" height="40" fill="#8BE5AD" rx="20"/>
              <text id="Content" fill="#586075" font-family="Roboto-Regular, Roboto" font-size="18" letter-spacing="1">
                <tspan x="31.49" y="25">MEDIA</tspan>
              </text>
            </g>
            <g id="ep-unity" class="ep-svg-block"
               @click="{{ display = true; selected = 'ep-unity' }}"
               transform="translate(241 496)">
              <rect id="Rectangle" width="118" height="40" fill="#8BE5AD" rx="20"/>
              <text id="Content" fill="#586075" font-family="Roboto-Regular, Roboto" font-size="18" letter-spacing="1">
                <tspan x="31.589" y="25">UNITY</tspan>
              </text>
            </g>
            <g id="ep-elements" class="ep-svg-block"
               @click="{{ display = true; selected = 'ep-elements' }}"
               transform="translate(66 357)">
              <rect id="Rectangle" width="200" height="74" fill="#8BE5AD" rx="37"/>
              <text id="Elements-of-Design" fill="#586075" font-family="Roboto-Regular, Roboto" font-size="18" letter-spacing="1">
                <tspan x="36.046" y="33">ELEMENTS OF </tspan> <tspan x="65.559" y="54">DESIGN</tspan>
              </text>
            </g>
            <g id="ep-principles" class="ep-svg-block"
               @click="{{ display = true; selected = 'ep-principles' }}"
               transform="translate(335 357)">
              <rect id="Rectangle" width="200" height="74" fill="#8BE5AD" rx="37"/>
              <text id="Principles-of-Organi" fill="#586075" font-family="Roboto-Regular, Roboto" font-size="18" letter-spacing="1">
                <tspan x="30.707" y="33">PRINCIPLES OF </tspan> <tspan x="30.196" y="54">ORGANIZATION</tspan>
              </text>
            </g>
          </g>
        </g>
      </svg>
      
    </div>
    <transition name="pop-details">
    <div class="ep-detail-wrap" v-show="selected != ''"
         @click="{{selected = ''}}">
      
      <div class="ep-detail" v-show="selected == 'ep-content'">
        <h3>Content</h3>
        <p>The Message. What we are trying to say.</p>
      </div>
      <div class="ep-detail" v-show="selected == 'ep-form'">
        <h3>Form</h3>
        <p>How you will express the message.</p>
      </div>
      <div class="ep-detail" v-show="selected == 'ep-media'">
        <h3>Media</h3>
        <p>The tools and materials you use to convey the message</p>
      </div>
      <div class="ep-detail" v-show="selected == 'ep-elements'">
        <h3>Elements of Design</h3>
        <p>Line, Shape, Value, Texture, Color, Illusion of Depth, Illusion of Movement</p>
      </div>
      <div class="ep-detail" v-show="selected == 'ep-principles'">
        <h3>Principles of Organization</h3>
        <p>Balance, Movement, Emphasis/Dpminance/Focal Point, Rhythm (through repetition), Economy, Variety</p>
      </div>
      <div class="ep-detail" v-show="selected == 'ep-unity'">
        <h3>Unity</h3>
        <p>Both a guiding principle and the end-result of a well-considered design.</p>
      </div>
      
      
    </div>
    </transition>

  </div>
  
</div>
```

---

```css
$c-primary: #586075
$c-secondary: #8BE5AD
$c-accent: #F5F5F0

html, body
  font-family: 'Roboto', 'Helvetica', sans-serif
  padding: 0
  margin: 0
div
  box-sizing: border-box

.template-wrap
  width: 600px
  height: 100%
  border: 1px solid #767676
  margin: 0 auto
  padding: .5em
  figure
    margin: 1em auto
    
// default

.ep-flowchart
  width: 100%
  position: relative
.ep-svg-wrap
  .ep-svg-block
    cursor: pointer
    rect, text
      transition: all .3s ease
    &:hover rect, &:hover text
      transform: translateY(-5px)
      text-shadow: 0 1px 0 #fff, 0 -1px 0 #000
.ep-detail-wrap
  position: absolute
  background-color: rgba(0,0,0,.5)
  top: 0
  bottom: 0
  left: 0
  right: 0
  .ep-detail
    position: relative
    font-size: 1.2me
    background-color: $c-accent
    color: $c-primary
    transform: translateY(-50%)
    margin: 50% auto
    width: 60%
    height: auto
    padding: 1em 2em
    border-radius: 15px
    border: 5px solid $c-secondary
    box-shadow: 0 15px 20px rgba(0,0,0,.2)
    &::after
      content: "\2716"
      color: $c-secondary
      position: absolute
      top: -20px
      right: -20px
      display: inline-block
      font-size: 15px
      line-height: 20px
      height: 20px
      width: 20px
      padding: 5px
      text-align: center
      background-color: $c-accent
      border-radius: 50%
      border: 5px solid
      cursor: pointer
      box-shadow: 0 3px 15px rgba(0,0,0,.2)
      
      
      
.pop-details-enter-active, .pop-details-leave-active
  transition: all .3s ease-in-out
.pop-details-enter
  opacity: 0
.pop-details-leave-to
  opacity: 0
```

---

```js
var ep = new Vue({
  el: '#ep-flowchart',
  data: {
    selected: ''
  },
  methods: {
    

  }
})
```


## レイアウト指示

- 手書き風の雰囲気を強調
- 重要なキーワードは大きく、補足説明は小さいフォントで
- Font Awesome アイコンを大きく使用して視覚的興味を引く
- カードは全て背景を透明にし、境界や枠線を使わない
- カード内のコンテンツ（比較項目、吹き出し、ハイライトボックスなど）も透明か薄い透明度に設定

## 作成手順

1. まず、全体構造を構築（コンテナ、タイトル、5カラムグリッド）
2. 各セクションをカードとして配置
3. カードには見出し、大きなアイコン、テキスト内容を含める
4. 比較項目や統計データは横並びで表示
5. 重要なポイントは吹き出しやハイライトボックスで強調
6. フッターにはグラフィックレコーディングの作成日と情報源を記載

## 変換するコンテンツ

コンテンツをグラフィックレコーディング形式に変換してください。
