---
title: Eraser 記法ガイド③ シーケンス図編
description: Eraserプラットフォームでシーケンス図を作成するための記法ガイド
category: docs
intent: eraser-syntax-guide-sequence
audience:
  - Eraserユーザー
  - システム設計者
  - ソフトウェアエンジニア
input_requirements:
  - 作成したいシーケンス図のシナリオ
  - オブジェクトとメッセージの定義
tags:
  - eraser
  - シーケンス図
  - システム設計
  - 記法
  - yaml
status: stable
owner: prompt-catalog-team
last_reviewed: 2026-02-23
---

# Eraser 記法ガイド③ シーケンス図編

## 想定用途

- Eraserプラットフォームでシーケンス図を作成したい
- システムやソフトウェアの動作を時間軸に沿って視覚化したい
- オブジェクト間のメッセージのやり取りを表現したい

## プロンプト本文

```text
# Eraser 記法ガイド③

## シーケンス図

シーケンス図は、システムやソフトウェアの動作を、時間軸に沿って視覚的に表現するための図です。Eraserは、シーケンス図を作成するための記法も提供しています。

### シーケンス図の記法

シーケンス図の記法は、通常のダイアグラム記法と似ていますが、オブジェクトとメッセージを表すためにいくつかの特別な属性と関係の種類を使用します。

* **オブジェクト**:
    * `[icon: layout]`: オブジェクトのアイコンを指定します。
* **メッセージ**:
    * `>`: オブジェクトから別のオブジェクトへのメッセージ
    * `activate`: オブジェクトのアクティブ化
    * `deactivate`: オブジェクトの非アクティブ化
    * `alt [label]:`: 条件分岐
    * `else [label]:`: 条件分岐のelse部分
    * `loop [label]:`: ループ

### シーケンス図の例

```yaml
Web App [icon: layout] > DB [icon: database]: Start transaction
Web App > Cloud Fx [icon: function]: Call function
Cloud Fx > API [icon: cloud-cog]: Create session
API > Cloud Fx: Session info
Cloud Fx > DB: Create tx record
Cloud Fx > API: Request access token
API > Cloud Fx: Access token
Cloud Fx > Web App: Token and transaction info
Web App > API: Complete transaction
alt [label: If successful]{
  API > Web App: Transaction confirmation
}
else [label: If failed]{
  API > Web App: Transaction cancellation
}
Web App > DB: Create tx record
Web App > API: Subscribe to transaction changes
activate API
API > API: Ongoing events
API > Web App: Push events
deactivate API
```

## まとめ

Eraserの記法は、シンプルな構文と豊富な属性、関係の種類を組み合わせることで、様々な種類のダイアグラムを作成することを可能にします。シーケンス図の記法も活用して、より効果的なドキュメントを作成してみてください。
```

## 使い方

1. Eraserプラットフォームを開く
2. シーケンス図記法に従ってYAML形式でオブジェクトとメッセージを定義する
3. Eraserに貼り付けて図を生成する

## 入力例

```text
ユーザーが商品を購入するフローのシーケンス図を作成してください。
以下のオブジェクトが関与します：
- User（ユーザー）
- Frontend（フロントエンド）
- Backend（バックエンド）
- Payment API（決済API）
- Database（データベース）
```

## 出力例

```yaml
User [icon: user] > Frontend [icon: layout]: 商品購入リクエスト
Frontend > Backend [icon: server]: 注文作成
Backend > Database [icon: database]: 在庫確認
Database > Backend: 在庫状況
Backend > Payment API [icon: credit-card]: 決済リクエスト
Payment API > Backend: 決済結果
alt [label: 決済成功]{
  Backend > Database: 注文記録保存
  Backend > Frontend: 注文完了通知
}
else [label: 決済失敗]{
  Backend > Frontend: エラー通知
}
Frontend > User: 結果表示
```

## 注意点

- `activate`/`deactivate`でオブジェクトのアクティブ状態を明確にする
- `alt`/`else`で条件分岐を表現する
- `loop`で繰り返し処理を表現する
- アイコンを適切に設定して視認性を高める
- メッセージは簡潔な説明を記述する
