// グローバル定数
export const Constants = {
  // シーン設定
  SCENE: {
    BACKGROUND_COLOR: 0x000011,
  },

  // カメラ設定
  CAMERA: {
    FOV: 75,
    NEAR: 0.1,
    FAR: 10000,
    INITIAL_POSITION: { x: 0, y: 0, z: 50 },
  },

  // レンダラー設定
  RENDERER: {
    ANTIALIAS: true,
    PIXEL_RATIO: true,
  },

  // OrbitControls 設定
  CONTROLS: {
    AUTO_ROTATE: false,
    AUTO_ROTATE_SPEED: 2,
    // 操作感向上のため少し大きめのダンピング
    DAMPING_FACTOR: 0.08,
    // ホイール／ピンチの反応速度
    ZOOM_SPEED: 1.2,
    // カメラの許容範囲（近接/遠方）
    MIN_DISTANCE: 5,
    MAX_DISTANCE: 2000,
  },

  // 宇宙設定
  UNIVERSE: {
    STAR_COUNT: 1000,
    STAR_SIZE_MIN: 0.1,
    STAR_SIZE_MAX: 2.0,
    STAR_DISTANCE_MIN: 50,
    STAR_DISTANCE_MAX: 1000,
  },

  // 進化段階の定義（カロリーに基づいて判定）
  // 【初心者向け解説】
  // 配列の各要素は { threshold（閾値）, stage（段階名）, size（サイズ）, color（16進カラーコード）, emissive（発光するか）} です
  // size は SphereGeometry の半径、color は THREE.js の 16 進数カラーです
  // 例：0xFF0000 は赤、0x0088FF は青
  // emissive は「自ら光を放つ天体かどうか」のフラグ。褐色矮星以降を true にしている。
  //
  // 【宇宙スケールアップ版・10段階】
  // 小さな天体から、より大きく壮大な天体へ育っていくゲーム的な演出であり、
  // 現実の天体進化（誕生から終末までの過程）を再現するものではない。
  // ただし名称はすべて実在する天体で統一している（将来の図鑑機能を見据えて）。
  //
  // ※ threshold（必要カロリー）は今回はまだ調整しておらず暫定値。
  //   今後「①各ジャンルの1か月の平均カロリー調査 → ②新しい進化基準の設計」で見直す予定。
  //
  // ※ 最終段階「超巨星」（threshold: Infinity）だけは特別で、
  //   8000kcal（赤色巨星の閾値）を超えた後も上限なく育ち続ける。
  //   ここに書いてある size（17）はその「出発点のサイズ」であり、
  //   実際のサイズは FINAL_STAGE_GROWTH の設定に従って加算される。
  //   （計算方法は Star.js の getEvolutionStageSize() を参照）
  EVOLUTION_STAGES: [
    { threshold: 300, stage: '微惑星', size: 1.5, color: 0x888888, emissive: false },     // 灰色
    { threshold: 800, stage: '小惑星', size: 2.2, color: 0xAAAAAA, emissive: false },     // 明るい灰色
    { threshold: 1500, stage: '原始惑星', size: 3, color: 0xC2B280, emissive: false },      // 淡い茶色（冥王星のイメージ）
    { threshold: 2500, stage: '地球型惑星', size: 4, color: 0x2288DD, emissive: false },   // 青（地球のイメージ）
    { threshold: 4000, stage: '巨大惑星', size: 5.5, color: 0xE0A868, emissive: false },   // 淡い橙（木星のイメージ）
    { threshold: 5000, stage: '褐色矮星', size: 7, color: 0x8B4513, emissive: true },      // 褐色（発光開始）
    { threshold: 6000, stage: '赤色矮星', size: 8.5, color: 0xFF4500, emissive: true },    // 赤橙
    { threshold: 7000, stage: '黄色矮星', size: 10, color: 0xFFFF00, emissive: true },     // 黄色
    { threshold: 8000, stage: '赤色巨星', size: 13, color: 0xFFA500, emissive: true },     // 橙
    { threshold: Infinity, stage: '超巨星', size: 17, color: 0xFF2200, emissive: true },   // 赤（ここから先は際限なく成長）
  ],

  // 超巨星（EVOLUTION_STAGES の最終段階）だけに適用する、際限のないサイズ成長のルール
  // 【初心者向け解説】
  // 「赤色巨星の閾値（8000kcal）を超えてから、calorieStep（1000kcal）ごとに
  //  sizeStep（5）ずつサイズが大きくなる」という意味。
  // 例: 8001kcal → +0, 9000kcal → +5, 10000kcal → +10 ...
  FINAL_STAGE_GROWTH: {
    calorieStep: 1000,
    sizeStep: 5,
  },
}
