import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { Constants } from '../utils/constants.js'

export class CameraController {
  constructor(realCamera, renderer, delay = 0.7) {
    this.realCamera = realCamera
    // 仮想カメラを作り、OrbitControls はこの仮想カメラを操作する
    this.virtualCamera = this.realCamera.clone()
    this.controls = new OrbitControls(this.virtualCamera, renderer.domElement)
    this.delay = delay // 遅延時間（秒）
    this.initialize()
  }

  initialize() {
    // 基本設定
    this.controls.enableDamping = true
    this.controls.dampingFactor = Constants.CONTROLS.DAMPING_FACTOR
    this.controls.autoRotate = Constants.CONTROLS.AUTO_ROTATE
    this.controls.autoRotateSpeed = Constants.CONTROLS.AUTO_ROTATE_SPEED

    // 回転・ズーム・パンを有効にして使いやすくする
    this.controls.enableRotate = true
    this.controls.enableZoom = true
    this.controls.enablePan = true

    // ズーム速度・距離制限
    this.controls.zoomSpeed = Constants.CONTROLS.ZOOM_SPEED
    this.controls.minDistance = Constants.CONTROLS.MIN_DISTANCE
    this.controls.maxDistance = Constants.CONTROLS.MAX_DISTANCE

    // スマホのタッチ操作設定: 1本指=回転、2本指=ピンチ(ズーム)+回転
    this.controls.touches = {
      ONE: THREE.TOUCH.ROTATE,
      TWO: THREE.TOUCH.DOLLY_ROTATE,
    }

    // スクリーンスペースでパンする（true にすると Y 軸パンが画面方向になる）
    this.controls.screenSpacePanning = false
  }

  update(deltaTime = 1 / 60) {
    // OrbitControls は仮想カメラを即時更新
    this.controls.update()

    // 仮想カメラ -> 実カメラへ遅延（指数応答で滑らかに追従）
    const tau = this.delay
    const alpha = 1 - Math.exp(-deltaTime / Math.max(0.0001, tau))

    // 位置と回転を補間
    this.realCamera.position.lerp(this.virtualCamera.position, alpha)
    this.realCamera.quaternion.slerp(this.virtualCamera.quaternion, alpha)
    // 必要なら up も補間
    this.realCamera.up.lerp(this.virtualCamera.up, alpha)
  }

  getControls() {
    return this.controls
  }

  // 自動回転の切り替え
  setAutoRotate(enabled) {
    this.controls.autoRotate = enabled
  }

  // ズーム速度の変更
  setZoomSpeed(speed) {
    this.controls.zoomSpeed = speed
  }

  // ダンピング係数の変更
  setDampingFactor(factor) {
    this.controls.dampingFactor = factor
  }

  // 遅延時間を変更（秒）
  setDelay(seconds) {
    this.delay = seconds
  }
}
