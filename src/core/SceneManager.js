import * as THREE from 'three'
import { Constants } from '../utils/constants.js'

export class SceneManager {
  constructor() {
    this.scene = new THREE.Scene()
    this.initialize()
  }

  initialize() {
    // 背景を Canvas テクスチャで作る（深宇宙風グラデーション + 微小な星を散らす）
    const size = 2048
    const canvas = document.createElement('canvas')
    canvas.width = size
    canvas.height = size
    const ctx = canvas.getContext('2d')

    // グラデーション（青〜紺の深宇宙風）
    const grad = ctx.createRadialGradient(
      size / 2,
      size / 2,
      size * 0.05,
      size / 2,
      size / 2,
      size * 0.95
    )
    grad.addColorStop(0, '#021226')
    grad.addColorStop(0.4, '#000814')
    grad.addColorStop(1, '#000006')
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, size, size)

    // 微小なバックグラウンドの星（薄く散らす）
    for (let i = 0; i < 800; i++) {
      const x = Math.random() * size
      const y = Math.random() * size
      const r = Math.random() * 1.2
      ctx.globalAlpha = 0.4 * Math.random()
      ctx.fillStyle = '#ffffff'
      ctx.beginPath()
      ctx.arc(x, y, r, 0, Math.PI * 2)
      ctx.fill()
    }

    const texture = new THREE.CanvasTexture(canvas)
    texture.needsUpdate = true
    this.scene.background = texture

    // 軽いフォグを入れて奥行きを演出（オプション、軽めに設定）
    this.scene.fog = new THREE.FogExp2(0x000006, 0.00025)
  }

  getScene() {
    return this.scene
  }

  add(object) {
    this.scene.add(object)
  }

  remove(object) {
    this.scene.remove(object)
  }
}
