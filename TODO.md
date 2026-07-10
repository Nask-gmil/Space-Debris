# TODO

## 現在の状況

- `src/app.js`
  - 食事登録フォームから星を追加・更新できる
  - `saveData()` で localStorage に保存できる
  - `loadData()` で localStorage から星データを読み込める
  - 食事履歴の一覧表示と削除ボタン実装済み
  - 食事削除後に `calories` を再計算できる
  - 食事削除後に進化状態の見た目も更新できる
  - 食事削除後に localStorage を更新できる
  - 最後の食事を削除すると星本体も削除できる
  - 星削除後に残りの星の軌道を再配置できる

- `src/universe/Star.js`
  - `foods` 履歴に一意IDを付与して管理する設計
  - 保存用のシリアライズ関数 `getSerializableData()` を実装
  - `recalculateCaloriesFromFoods()` で履歴からカロリー再計算

- `src/universe/StarManager.js`
  - 星インスタンスの削除を補助する `getStarId()` / `removeStarByInstance()` を追加

## 追加済み機能

- 食事履歴の追加・削除
- 星データの localStorage への保存
- localStorage からの星データ復元
- 削除後の詳細パネル更新
- 最終食事削除時の星本体削除
- 残り星の軌道再配置

## 保留・未実装のタスク

- `loadData()` の復元整合性確認
- `saveData()` の `foods/photos` 拡張対応の検証
- 削除時の確認ダイアログや UI 表示改善
- 星の削除に伴うジャンル選択の整合性処理
- localStorage データのバージョン管理
- 食事編集機能の実装
- 写真機能の保存形式設計

## 次にやるべきこと

1. `loadData()` / `saveData()` の復元テストを行い整合性を確認する
2. 食事編集機能のための `food` 履歴編集 UI を追加する
3. `localStorage` 保存形式に `version` と各種拡張フィールドを整理する
4. 星削除後にジャンルセレクトの選択肢が残らないように修正する
5. 削除確認モーダルや undo 機能の追加を検討する

## メモ

- 次のチャットで作業を再開する場合は、この `TODO.md` を起点にするとスムーズです。
- README はプロジェクトの全体説明も兼ねているので、作業履歴や詳細TODOはこのファイルにまとめるとよいです。
