import * as THREE from 'three'
import { Constants } from '../utils/constants.js'

export class CameraManager {
  constructor(aspect) {
    this.camera = new THREE.PerspectiveCamera(
      Constants.CAMERA.FOV,
      aspect,
      Constants.CAMERA.NEAR,
      Constants.CAMERA.FAR
    )
    this.initialize()
  }

  initialize() {
    // カメラの初期位置を設定
    const pos = Constants.CAMERA.INITIAL_POSITION
    this.camera.position.set(pos.x, pos.y, pos.z)
    this.camera.lookAt(0, 0, 0)
  }

  getCamera() {
    return this.camera
  }

  updateAspect(aspect) {
    this.camera.aspect = aspect
    this.camera.updateProjectionMatrix()
  }

  getPosition() {
    return this.camera.position
  }

  setPosition(x, y, z) {
    this.camera.position.set(x, y, z)
  }
}
