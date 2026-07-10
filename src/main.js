import * as THREE from 'three'
import { SceneManager } from './core/SceneManager.js'
import { CameraManager } from './core/CameraManager.js'
import { RendererManager } from './core/RendererManager.js'
import { CameraController } from './controls/CameraController.js'
import { Universe } from './universe/Universe.js'

class SpaceDebrisApp {
  constructor() {
    this.canvas = document.getElementById('canvas')
    // 情報パネル要素を取得して初期表示をセット
    this.infoPanel = document.getElementById('infoPanel')
    if (this.infoPanel) this.infoPanel.innerText = '星を選択してください'
    this.setupManagers()
    this.setupUniverse()
    this.setupEventListeners()
    this.animate()
  }

  setupManagers() {
    // 各マネージャーを初期化
    this.sceneManager = new SceneManager()
    // canvas の実際のサイズに基づいてアスペクト比を計算
    const rect = this.canvas.getBoundingClientRect()
    const canvasAspect = rect.width / rect.height
    this.cameraManager = new CameraManager(canvasAspect)
    this.rendererManager = new RendererManager(this.canvas)

    // カメラコントローラーを初期化
    this.cameraController = new CameraController(
      this.cameraManager.getCamera(),
      this.rendererManager.getRenderer(),
      0.7 // 操作後の遅延（秒）
    )
  }

  setupUniverse() {
    // 宇宙を作成
    this.universe = new Universe(this.sceneManager.getScene())
  }

  setupEventListeners() {
    // ウィンドウリサイズイベント
    window.addEventListener('resize', () => this.onWindowResize())
    
    // クリック（タップ）イベント
    try {
      const el = this.rendererManager.getRenderer().domElement
      console.log('Attaching pointerdown to renderer domElement:', el)
      // pointerdown はドラッグ開始に使われるため、ここでは押下位置を記録し
      // リリース時の pointerup でクリック判定を行う（ドラッグは無視する）
      el.addEventListener('pointerdown', (e) => this.onPointerDown(e))
      el.addEventListener('pointerup', (e) => this.onPointerUp(e))
    } catch (err) {
      console.warn('Failed to attach pointerdown to renderer domElement', err)
    }

    // NOTE: 以前は window にも登録していましたが、renderer と window の両方
    // にハンドラが付くと同一クリックで2回実行されるため、フォールバックを削除しました。
  }

  onWindowResize() {
    // canvas の実際のサイズに基づいてアスペクト比を更新
    const rect = this.canvas.getBoundingClientRect()
    const width = rect.width
    const height = rect.height

    // カメラのアスペクト比を更新
    this.cameraManager.updateAspect(width / height)

    // レンダラーのサイズを更新
    this.rendererManager.setSize(width, height)
  }

  animate() {
    requestAnimationFrame(() => this.animate())

    // 各フレームで更新
    if (!this.clock) this.clock = new THREE.Clock()
    const deltaTime = this.clock.getDelta()

    // 宇宙を更新
    this.universe.update(deltaTime)

    // カメラコントローラーを更新
    this.cameraController.update(deltaTime)

    // レンダリング
    this.rendererManager.render(
      this.sceneManager.getScene(),
      this.cameraManager.getCamera()
    )
  }

  // 外部から設定を変更するためのメソッド例
  setCameraAutoRotate(enabled) {
    this.cameraController.setAutoRotate(enabled)
  }

  onPointerDown(event) {
    // 押下位置を記録しておく（pointerup でクリック判定）
    this._lastPointerDown = { clientX: event.clientX, clientY: event.clientY, time: performance.now() }
  }

  onPointerUp(event) {
    // pointerdown 位置がない場合は処理しない
    if (!this._lastPointerDown) return

    const dx = event.clientX - this._lastPointerDown.clientX
    const dy = event.clientY - this._lastPointerDown.clientY
    const distSq = dx * dx + dy * dy

    // ドラッグ判定: しきい値（ピクセル^2）。小さな移動はクリックとみなす。
    const CLICK_THRESHOLD_PX = 5
    if (distSq > CLICK_THRESHOLD_PX * CLICK_THRESHOLD_PX) {
      // ドラッグが発生しているのでクリック扱いしない
      this._lastPointerDown = null
      return
    }

    // レイキャスターを用いてクリックされたオブジェクトを判定（pointerup 時に実行）
    if (!this.raycaster) this.raycaster = new THREE.Raycaster()
    if (!this.mouse) this.mouse = new THREE.Vector2()

    const rect = this.rendererManager.getRenderer().domElement.getBoundingClientRect()
    this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
    this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1

    this.raycaster.setFromCamera(this.mouse, this.cameraManager.getCamera())

    const starManager = this.universe.getStarManager()
    const sceneObjects = starManager.getAllStars().map(s => s.getMesh()).filter(Boolean)

    console.log('pointer click at', { x: this.mouse.x, y: this.mouse.y, sceneObjectsCount: sceneObjects.length })

    const intersects = this.raycaster.intersectObjects(sceneObjects, true)
    console.log('intersects with star list:', intersects.length)

    if (intersects.length > 0) {
      const mesh = intersects[0].object
      const star = starManager.getStarByMesh(mesh)
      if (star) {
        const name = star.name || star.data.name
        const calories = star.data.calories || 0
        const genre = star.data.genre || '-'
        const evolutionStage = star.getEvolutionStage()
        console.log('Clicked star name:', name, 'Calories:', calories, 'Genre:', genre, 'Evolution:', evolutionStage)
        // パネルに情報を表示【進化段階追加】
        if (this.infoPanel) {
          const pos = star.getPosition ? star.getPosition() : (star.mesh ? star.mesh.position : null)
          const posText = pos ? `座標: ${pos.x.toFixed(2)}, ${pos.y.toFixed(2)}, ${pos.z.toFixed(2)}` : ''
          const calorieText = `総カロリー: ${calories} kcal`
          const genreText = `ジャンル: ${genre}`
          const evolutionText = `進化段階: ${evolutionStage}`
          this.infoPanel.innerHTML = `<h2>${name}</h2><div class="meta">${posText}<br>${calorieText}<br>${genreText}<br>${evolutionText}</div>`
        }
      }
    } else {
      const sceneIntersects = this.raycaster.intersectObjects(this.sceneManager.getScene().children, true)
      console.log('intersects with whole scene:', sceneIntersects.length)
      if (sceneIntersects.length > 0) {
        console.log('first hit object:', sceneIntersects[0].object)
      }
      // 何も選択していない状態を表示
      if (this.infoPanel) this.infoPanel.innerText = '星を選択してください'
    }

    this._lastPointerDown = null
  }

  getUniverse() {
    return this.universe
  }
}

// アプリケーション起動
const app = new SpaceDebrisApp()

// グローバルスコープに公開（ブラウザコンソールからアクセス可能）
window.app = app
