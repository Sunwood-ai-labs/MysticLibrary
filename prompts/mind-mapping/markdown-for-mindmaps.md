# マインドマップ用Markdown記法ドキュメント

## 概要
このドキュメントでは、マインドマップを表現するためのMarkdown記法について説明します。この記法を使用することで、シンプルなテキストファイルでマインドマップを作成し、LLMのインプットとして使用することができます。

## 見出し
見出しは`#`を使って表現します。`#`の数が多いほど、階層が深くなります。

```
# 見出し1
## 見出し2
### 見出し3
```

## リスト
リストは`*`や`1.`を使って表現します。リストはネストすることで階層を表現できます。

```
# 見出し1
* リスト1-1
  * リスト2
    * リスト3
* リスト1-2

# 見出し2 
1. リスト1
2. リスト2
   1. リスト2-1
```

## チェックボックス
チェックボックスは`- [ ]`や`- [x]`を使って表現します。

```
# タスク
- [ ] 未完了のタスク
- [x] 完了したタスク
```

## 引用
引用は`>`を使って表現します。`>`の数が多いほど、階層が深くなります。

```
# トピック
> 引用1
>> 引用2
```

## 文字の装飾
文字の装飾は`*`や`**`、`~~`を使って表現します。

```
# 見出し
* 斜体: *斜体*
* 太字: **太字**
* 打ち消し線: ~~打ち消し線~~
```

## コードの入力
コードは`` ` ``で囲って表現します。

```
# コード例
* `print("Hello, World!")`
```

## 折り畳み
折り畳みは`<details>`と`<summary>`タグを使って表現します。ただし、多くのマインドマップツールでは展開されません。

```
# <details><summary>詳細</summary>折り畳まれた内容</details>
```

## リンク
リンクは`[表示テキスト](URL)`の形式で表現します。

```
# 参考リンク
* [Wikipedia](https://www.wikipedia.org/)
```

## 画像の埋め込み
画像は`![代替テキスト](画像のURL)`の形式で表現します。代替テキストを長くすると画像が大きく表示されます。

```
# アイコン
* ![アイコン](https://example.com/icon.png) アイコンの説明
```

以上がマインドマップを表現するためのMarkdown記法の基本です。この記法を使ってマインドマップを作成し、LLMのインプットとして活用してください。