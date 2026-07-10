import * as THREE from 'three'
import { Constants } from '../utils/constants.js'

export class RendererManager {
  constructor(canvas) {
    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: Constants.RENDERER.ANTIALIAS,
    })
    this.initialize()
  }

  initialize() {
    // レンダラーのサイズを設定
    const rect = this.renderer.domElement.getBoundingClientRect()
    this.setSize(rect.width || window.innerWidth, rect.height || window.innerHeight)

    // ピクセル比を設定
    if (Constants.RENDERER.PIXEL_RATIO) {
      this.renderer.setPixelRatio(window.devicePixelRatio)
    }
  }

  getRenderer() {
    return this.renderer
  }

  setSize(width, height) {
    // updateStyle: false で Three.js が canvas の inline style を変更しないようにする
    this.renderer.setSize(width, height, false)
  }

  render(scene, camera) {
    this.renderer.render(scene, camera)
  }

  getSize() {
    return this.renderer.getSize(new THREE.Vector2())
  }
}
