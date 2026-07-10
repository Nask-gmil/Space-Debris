# Space Debris - Three.js

Vite と Three.js を使用した3D Web アプリケーション

## ファイル構成

```
すぺーすデブリ/
├── index.html              # エントリーHTMLファイル
├── package.json            # 依存関係の管理
├── vite.config.js          # Viteの設定ファイル
└── src/
    ├── main.js             # アプリケーションのエントリーポイント
    ├── style.css           # スタイルシート
    ├── core/               # コア機能（モジュール化）
    │   ├── SceneManager.js    # Three.js シーンの管理
    │   ├── CameraManager.js   # カメラの管理
    │   └── RendererManager.js # レンダラーの管理
    ├── controls/           # コントローラー
    │   └── CameraController.js # OrbitControls を使用した視点操作
    ├── universe/           # 宇宙空間の管理
    │   ├── Universe.js        # 宇宙全体の管理クラス
    │   ├── Star.js            # 星クラス（個別の星）
    │   └── StarManager.js     # 星の生成・管理
    └── utils/
        └── constants.js    # グローバル定数（設定値）
```

## 設計の特徴

### モジュール化設計
- **関心の分離**: 各機能が独立したモジュールとして実装
- **拡張性**: 新機能を追加する際に既存コードへの影響を最小限に
- **保守性**: 各モジュールが単一の責任を持つ

### Core モジュール
- `SceneManager`: Three.js のシーンを管理
- `CameraManager`: カメラの位置・設定を管理
- `RendererManager`: WebGL レンダラーを管理

### Controls モジュール
- `CameraController`: OrbitControls を使用した直感的な視点操作
  - マウスドラッグで自由に回転
  - マウスホイールでズーム
  - 右ドラッグでパン（移動）

### Universe モジュール
- `Universe`: 宇宙空間全体を管理
- `StarManager`: 星の生成・管理・更新
- `Star`: 個別の星オブジェクト（将来の拡張に対応）

### Utils モジュール
- `constants.js`: すべての設定値を一元管理
  - シーンのカラー設定
  - カメラのパラメータ
  - 星の生成設定
  - OrbitControls の設定

## セットアップ手順

### 1. 依存関係をインストール

```bash
npm install
```

### 2. 開発サーバーを起動

```bash
npm run dev
```

ブラウザが自動的に開き、http://localhost:3000 でアプリが表示されます。

### 3. ビルド（本番化）

```bash
npm run build
```

## 機能

- ✅ ブラウザ全体に3D宇宙空間を表示
- ✅ 黒い背景
- ✅ 1000個のランダムに配置された星
- ✅ OrbitControls による自由な視点移動
  - **マウスドラッグ**: 視点回転
  - **ホイール**: ズーム イン/アウト
  - **右ドラッグ**: パン（移動）
- ✅ ウィンドウリサイズに対応
- ✅ モジュール化で拡張容易

## ブラウザコンソールでの操作

ブラウザの Developer Tools コンソール（F12 キー）から、以下のコマンドで設定を変更できます：

```javascript
// 自動回転を有効化
app.setCameraAutoRotate(true)

// 自動回転を無効化
app.setCameraAutoRotate(false)

// 宇宙の情報を取得
app.getUniverse().getStats()

// カメラの位置を確認
app.cameraManager.getPosition()
```

## 将来の実装予定

### Phase 2: 食事登録機能
- UI から新しい星を追加
- 星のメタデータ（食事情報）を保存

### Phase 3: 星の進化システム
- 時間経過による星の変化
- `Star.evolve()` メソッドの拡張

### Phase 4: 星の詳細表示
- クリックで星の詳細情報表示
- 星の属性パネル

### Phase 5: AI 画像認識
- 食事の写真から AI が栄養情報を抽出
- 自動的に星のプロパティを生成

## カスタマイズ

`src/utils/constants.js` で以下の設定を変更できます：

```javascript
// 星の数を変更
UNIVERSE: {
  STAR_COUNT: 500, // デフォルト: 1000
}

// OrbitControls の感度を調整
CONTROLS: {
  DAMPING_FACTOR: 0.1, // デフォルト: 0.05（値が大きいほど反応が鈍い）
}
```

## 技術スタック

- **Three.js**: 3D グラフィックス
- **Vite**: 高速開発サーバー・ビルドツール
- **JavaScript (ES6+)**: モダン JavaScript
- **OrbitControls**: Three.js の標準カメラコントローラー

---

開発を楽しみましょう！🚀
