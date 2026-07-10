import * as THREE from 'three'
import { StarManager } from './StarManager.js'
import { StarField } from './StarField.js'
import { CentralSphere } from './CentralSphere.js'
import { Star } from './Star.js'

export class Universe {
  constructor(scene) {
    this.scene = scene
    this.starManager = new StarManager()
    this.starField = null
    this.initialize()
  }

  initialize() {
    // 高速な Points ベースの星屑を生成してシーンに追加
    this.starField = new StarField()
    this.scene.add(this.starField.getObject())

    // 初期状態では星を生成せず、登録時にジャンルごとの星を作成する

    // 中央の球体を照らすライト
    const ambient = new THREE.AmbientLight(0xffffff, 0.3)
    const dir = new THREE.DirectionalLight(0xffffff, 0.8)
    dir.position.set(50, 50, 50)
    this.scene.add(ambient)
    this.scene.add(dir)

    // 既存の StarManager は将来機能（個別星管理）用に残す
  }

  // シーンを取得
  getScene() {
    return this.scene
  }

  // StarManager を取得（今後の機能拡張用）
  getStarManager() {
    return this.starManager
  }

  // 宇宙の状態を更新
  update(deltaTime) {
    // StarManager による更新（個別星の進化）
    this.starManager.updateAll(deltaTime)

    // StarField の更新（必要なら）
    if (this.starField) this.starField.update(deltaTime)
  }

  // 特定の位置に新しい星を追加（将来の UI 用）
  addStarAtPosition(x, y, z, size = 0.5, color = 0xffffff) {
    const star = new Star(x, y, z, size, color)
    this.scene.add(star.getMesh())
    this.starManager.addStar(star)
    return star
  }

  // 統計情報を取得（将来のUI表示用）
  getStats() {
    return {
      starCount: this.starManager.getCount(),
      pointsCount: this.starField ? this.starField.count : 0,
    }
  }
}
