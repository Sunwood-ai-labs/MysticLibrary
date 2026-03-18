# Peer Verify Batch C

対象: `batch-c-visual-audio-reviewed.jsonl`

## 監査メモ

- `archive_only` 行は全10件を確認。
- 追加で低信頼の `categorize_existing` 行を4件確認し、合計14件をサンプルした。
- このJSONLには `current_doc_path` は含まれていなかったため、`checked_doc_path` を開き、カテゴリ行は `final_category_path` 側の本体も確認した。

## Sampled IDs

| ID | 元判定 | こちらの判定 | 短評 |
|---|---|---|---|
| `2029440091643691282` | `archive_only` | pass | OpenClaw Config / `.env` / APIキー運用の話で、再利用可能な創作プロンプトではない。 |
| `2020149187011305659` | `archive_only` | pass | 「エージェントチームを作ってください。」という依頼で、カタログ分類より保管扱いが自然。 |
| `2000179297970213262` | `archive_only` | pass | Kaggleの開催状況を尋ねているだけであり、プロンプト資産ではない。 |
| `1998281099940876412` | `archive_only` | pass | AIブラウザの実験自動化メモで、再利用テンプレートというより作業記録。 |
| `1989694289224352111` | `archive_only` | pass | tweet only で、実体のあるプロンプト本文が見当たらない。 |
| `1989623614854054146` | `archive_only` | pass | 同上。 |
| `1989362672526299292` | `archive_only` | pass | 同上。 |
| `1988974039097045311` | `archive_only` | pass | ヘッダ画像・動画の作成記録で、本文の再利用性が弱い。 |
| `1986653928080232903` | `archive_only` | pass | 同上。 |
| `1936032997029167410` | `archive_only` | pass | リリース告知であり、カテゴリ資産ではない。 |
| `1921545313048826117` | `creative/visual` | pass | `Castle-Tree Bottle` のYAMLプロンプト本体があり、明確に visual。 |
| `1922323250195152928` | `creative/audio` | fail | 本体は `mirror` / `robot cat` / `white cat` / `scene` で構成された視覚プロンプトで、audio ではない。 |
| `1932395518837317947` | `creative/visual` | pass | バレットタイム風の映像・視覚演出指示で visual が妥当。 |
| `1933843026281177524` | `creative/visual` | pass | シネマティックな視覚描写の連続で visual が妥当。 |

## 集計

- `pass`: 13
- `fail`: 1

## overall second_pass_status

- `fail`

## disagreements

- `1922323250195152928` の `creative/audio` は非推奨。実際の本文は視覚的なシーン定義で、`creative/visual` か別扱いが妥当。
