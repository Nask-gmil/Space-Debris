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
  // 配列の各要素は { threshold（閾値）, stage（段階名）, size（サイズ）, color（16進カラーコード）} です
  // size は SphereGeometry の半径、color は THREE.js の 16 進数カラーです
  // 例：0xFF0000 は赤、0x0088FF は青
  EVOLUTION_STAGES: [
    { threshold: 500, stage: '岩', size: 2, color: 0x888888 },        // 灰色
    { threshold: 2000, stage: '衛星', size: 4, color: 0xFFFFFF },     // 白
    { threshold: 5000, stage: '惑星', size: 6, color: 0x0088FF },     // 青
    { threshold: 10000, stage: '恒星', size: 10, color: 0xFFFF00 },   // 黄色
    { threshold: Infinity, stage: '巨大恒星', size: 16, color: 0xFF0000 }, // 赤
  ],
}
