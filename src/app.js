import * as THREE from 'three'
import { SceneManager } from './core/SceneManager.js'
import { CameraManager } from './core/CameraManager.js'
import { RendererManager } from './core/RendererManager.js'
import { CameraController } from './controls/CameraController.js'
import { Universe } from './universe/Universe.js'
import { Star } from './universe/Star.js'
import { CentralSphere } from './universe/CentralSphere.js'

const DEFAULT_INFO_TEXT = '星を選択してください'
const ORBIT_MARGIN = 6 // 星と星の間に確保する余白。後で調整しやすいように定数化。

const LOCAL_STORAGE_KEY = 'spaceDebrisAppData'

class SpaceDebrisApp {
  constructor() {
    this.canvas = document.getElementById('canvas')
    this.infoPanel = document.getElementById('infoPanel')
    this.errorMessage = document.getElementById('errorMessage')
    this._lastPointerDown = null
    this.raycaster = new THREE.Raycaster()
    this.mouse = new THREE.Vector2()
    this.clock = new THREE.Clock()

    this.selectedStar = null
    this.setInfoPanelDefault()
    this.setupManagers()
    this.setupUniverse()
    this.loadData()
    this.setupEventListeners()
    this.onWindowResize()
    this.animate()
  }

  setupManagers() {
    this.sceneManager = new SceneManager()

    const rect = this.canvas.getBoundingClientRect()
    const canvasAspect = rect.width / rect.height
    this.cameraManager = new CameraManager(canvasAspect)
    this.rendererManager = new RendererManager(this.canvas)

    this.cameraController = new CameraController(
      this.cameraManager.getCamera(),
      this.rendererManager.getRenderer(),
      0.7
    )
  }

  setupUniverse() {
    this.universe = new Universe(this.sceneManager.getScene())
  }

  setupEventListeners() {
    window.addEventListener('resize', () => this.onWindowResize())

    const el = this.rendererManager.getRenderer().domElement
    el.addEventListener('pointerdown', (event) => this.onPointerDown(event))
    el.addEventListener('pointerup', (event) => this.onPointerUp(event))

    const genreSelect = document.getElementById('genreSelect')
    if (genreSelect) {
      genreSelect.addEventListener('change', () => this.onGenreSelectionChanged())
    }

    const registerButton = document.querySelector('.food-form button')
    if (registerButton) {
      registerButton.addEventListener('click', () => this.onRegisterButtonClick())
    }

    if (this.infoPanel) {
      this.infoPanel.addEventListener('click', (event) => this.onInfoPanelClick(event))
    }

    // 初期状態で新ジャンル選択時の入力欄を表示する
    this.onGenreSelectionChanged()
  }

  onRegisterButtonClick() {
    const foodNameInput = document.getElementById('foodName')
    const genreSelect = document.getElementById('genreSelect')
    const genreInput = document.getElementById('genreInput')
    const caloriesInput = document.getElementById('calories')

    const foodName = foodNameInput ? foodNameInput.value.trim() : ''
    const selectedGenre = genreSelect ? genreSelect.value : 'new'
    const genre = selectedGenre === 'new' ? (genreInput ? genreInput.value.trim() : '') : selectedGenre
    const caloriesValue = caloriesInput ? caloriesInput.value.trim() : ''
    const calories = Number(caloriesValue)
    const validationError = this.validateRegistration(foodName, genre, caloriesValue, calories)

    if (validationError) {
      this.showError(validationError)
      return
    }

    let targetStar = this.findStarByGenre(genre)

    if (!targetStar) {
      targetStar = this.createStarForGenre(genre, calories)
      this.addGenreOption(genre)
      if (genreSelect) {
        genreSelect.value = genre
      }
    } else {
      const currentCalories = Number(targetStar.data.calories)
      const newCalories = currentCalories + calories
      targetStar.setCalories(newCalories)
      targetStar.updateAppearance(targetStar.getMesh())
      console.log('加算後のカロリー:', newCalories)
    }

    // 星のサイズが変わった場合、全体の軌道間隔を再計算して
    // 大きくなった星に合わせて外側の星を押し出す
    this.updateOrbitSpacing()

    targetStar.addFoodEntry(foodName, calories)
    const evolvedStage = targetStar.getEvolutionStage()
    console.log('対象の星:', targetStar.name || targetStar.data.name)
    console.log('進化段階:', evolvedStage)

    this.saveData()
    this.refreshStarDisplay(targetStar)
    this.resetFoodForm()
    this.clearError()

    console.log('食べ物名:', foodName)
    console.log('ジャンル:', genre)
    console.log('カロリー:', calories)
  }

  onGenreSelectionChanged() {
    const genreSelect = document.getElementById('genreSelect')
    const genreInput = document.getElementById('genreInput')
    if (!genreSelect || !genreInput) return

    if (genreSelect.value === 'new') {
      genreInput.value = ''
      genreInput.disabled = false
      genreInput.focus()
    } else {
      genreInput.value = genreSelect.value
      genreInput.disabled = true
    }
  }

  addGenreOption(genre) {
    const genreSelect = document.getElementById('genreSelect')
    if (!genreSelect) return

    const existingOption = Array.from(genreSelect.options).find(
      (option) => option.value.toLowerCase() === genre.toLowerCase()
    )
    if (existingOption) return

    const option = document.createElement('option')
    option.value = genre
    option.textContent = genre
    genreSelect.appendChild(option)
  }

  getFoodGenre(foodName) {
    const normalizedFoodName = foodName.toLowerCase()

    if (normalizedFoodName.includes('ラーメン') || normalizedFoodName.includes('らーめん')) {
      return 'ラーメン'
    }

    if (normalizedFoodName.includes('カレー') || normalizedFoodName.includes('curry')) {
      return 'カレー'
    }

    if (normalizedFoodName.includes('寿司') || normalizedFoodName.includes('すし')) {
      return '寿司'
    }

    return 'その他'
  }

  findStarByGenre(genre) {
    const starManager = this.universe.getStarManager()
    const stars = starManager.getAllStars()

    for (const star of stars) {
      if (star.data.genre === genre) {
        return star
      }
    }

    return null
  }

  validateRegistration(foodName, genre, caloriesValue, calories) {
    if (!foodName) {
      return '食べ物名を入力してください。'
    }

    if (!genre) {
      return 'ジャンルを入力してください。'
    }

    if (!caloriesValue) {
      return 'カロリーを入力してください。'
    }

    if (Number.isNaN(calories)) {
      return 'カロリーは数字で入力してください。'
    }

    if (calories <= 0) {
      return 'カロリーは 1 以上で入力してください。'
    }

    return null
  }

  showError(message) {
    if (this.errorMessage) {
      this.errorMessage.textContent = message
    }
  }

  clearError() {
    if (this.errorMessage) {
      this.errorMessage.textContent = ''
    }
  }

  // 次に作成する星の軌道半径を計算する。
  // 既存の星のうち最も外側にある星を基準に、
  // "前の軌道半径 + 前の星の半径 + 今回の星の半径 + 余白" を使って
  // 常に中心から離れるように配置します。
  // これにより、軌道半径は太陽系のように外側へ順番に大きくなります。
  calculateNextOrbitRadius(newStarSize) {
    const stars = this.universe.getStarManager().getAllStars()

    if (stars.length === 0) {
      // 最初の星は太陽役として中心に置く
      return 0
    }

    const outermostStar = stars.reduce((largest, star) => {
      const currentRadius = star.data.orbitRadius || 0
      const largestRadius = largest.data.orbitRadius || 0
      return currentRadius > largestRadius ? star : largest
    }, stars[0])

    const previousOrbitRadius = outermostStar.data.orbitRadius || 0
    const previousStarSize = outermostStar.getEvolutionStageSize()

    // 前の星より十分外側に軌道を確保する
    return previousOrbitRadius + previousStarSize + newStarSize + ORBIT_MARGIN
  }

  // 太陽を中心とした円形の軌道線を作成する。
  // 生成時の orbitRadius と一致させ、透明度を低くして惑星が目立つようにする。
  createOrbitLine(orbitRadius) {
    const points = []
    const segments = 128
    for (let i = 0; i <= segments; i += 1) {
      const theta = (i / segments) * Math.PI * 2
      points.push(new THREE.Vector3(Math.cos(theta) * orbitRadius, 0, Math.sin(theta) * orbitRadius))
    }

    const geometry = new THREE.BufferGeometry().setFromPoints(points)
    const material = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.18,
      depthWrite: false,
    })

    const orbitLine = new THREE.LineLoop(geometry, material)
    orbitLine.renderOrder = 0 // 惑星の後ろに描画する
    orbitLine.userData.isOrbitLine = true
    return orbitLine
  }

  // すべての星の軌道半径を再計算し、成長後のサイズに合わせて外側の星を調整する
  updateOrbitSpacing() {
    const stars = this.universe.getStarManager().getAllStars()
    if (stars.length === 0) return

    const sortedStars = [...stars].sort((a, b) => (a.orbitRadius || 0) - (b.orbitRadius || 0))

    let previousOrbit = 0
    let previousSize = sortedStars[0].getEvolutionStageSize()
    sortedStars[0].setTargetOrbitRadius(0)

    for (let i = 1; i < sortedStars.length; i += 1) {
      const star = sortedStars[i]
      const currentSize = star.getEvolutionStageSize()
      const orbitRadius = previousOrbit + previousSize + currentSize + ORBIT_MARGIN
      star.setTargetOrbitRadius(orbitRadius)
      previousOrbit = orbitRadius
      previousSize = currentSize
    }
  }

  /**
   * localStorage にデータを保存します。
   * ここでは星データと食事履歴を文字列として保存しています。
   * 将来データベースに移行するときも、
   * この関数を置き換えるだけで良い設計です。
   */
  saveData() {
    const stars = this.universe.getStarManager().getAllStars()
    const serializableStars = stars.map((star) => {
      if (typeof star.getSerializableData === 'function') {
        return star.getSerializableData()
      }
      return star.getData()
    })

    const payload = {
      version: 1,
      savedAt: new Date().toISOString(),
      stars: serializableStars,
    }

    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(payload))
    } catch (error) {
      console.warn('localStorage への保存に失敗しました。', error)
    }
  }

  /**
   * localStorage からデータを読み込みます。
   * ブラウザを再起動しても同じ星データを再現するための土台です。
   */
  loadData() {
    const rawData = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (!rawData) return

    let savedData = null
    try {
      savedData = JSON.parse(rawData)
    } catch (error) {
      console.warn('localStorage のデータが読み込めませんでした。', error)
      return
    }

    if (!savedData || !Array.isArray(savedData.stars)) return

    savedData.stars.forEach((starData) => {
      const star = this.createStarFromSavedData(starData)
      if (star && star.data.genre) {
        this.addGenreOption(star.data.genre)
      }
    })
  }

  /**
   * 読み込んだ食事履歴 (foods) の中に id を持たない古いデータがあれば、
   * ここで新しく id を発行して補完します。
   *
   * 【なぜ必要か】
   * 削除ボタンは `entry.id === foodId` で対象を探しています。
   * id が undefined のままだと絶対に一致しないため、
   * 削除ボタンを押しても food も星も一切消えない、という
   * 分かりにくいバグの原因になっていました。
   *
   * @param {Array} foods - savedData.foods（無い場合もある）
   * @returns {Array} id が必ず設定された foods 配列
   */
  migrateFoodEntries(foods) {
    if (!Array.isArray(foods)) return []

    return foods.map((entry) => {
      if (entry && entry.id) return entry

      return {
        ...entry,
        id:
          typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function'
            ? crypto.randomUUID()
            : `food-${Date.now()}-${Math.floor(Math.random() * 1000000)}`,
      }
    })
  }

  /**
   * 保存された星データから Star オブジェクトを復元します。
   * localStorage の保存形式を統一しておけば、
   * 将来データベース保存へ移行しやすくなります。
   */
  createStarFromSavedData(savedData) {
    const scene = this.sceneManager.getScene()
    const name = savedData.name || `${savedData.genre || 'ジャンル'}星`
    const genre = savedData.genre || '不明'
    const calories = Number(savedData.calories) || 0

    const tempStar = new Star(0, 0, 0, 0, 0xffffff, name, calories, genre)
    const evolutionSize = tempStar.getEvolutionStageSize()
    const evolutionColor = tempStar.getEvolutionStageColor()
    const emissive = tempStar.getEvolutionStageEmissive()

    const orbitRadius = Number(savedData.orbitRadius) || 0
    const orbitAngle = Number(savedData.orbitAngle) || (orbitRadius === 0 ? 0 : Math.random() * Math.PI * 2)
    const x = Math.cos(orbitAngle) * orbitRadius
    const z = Math.sin(orbitAngle) * orbitRadius
    const y = savedData.y || (orbitRadius === 0 ? 0 : (Math.random() - 0.5) * 4)

    const star = new Star(x, y, z, 0, 0xffffff, name, calories, genre)
    star.orbitRadius = orbitRadius
    star.targetOrbitRadius = orbitRadius
    star.orbitAngle = orbitAngle
    star.orbitSpeed = Number(savedData.orbitSpeed) || 0.01
    star.rotationSpeed = Number(savedData.rotationSpeed) || 0.002
    star.setInitialSize(evolutionSize)
    star.data = {
      ...star.data,
      ...savedData,
      name,
      genre,
      calories,
      orbitRadius,
      orbitAngle,
      orbitSpeed: star.orbitSpeed,
      rotationSpeed: star.rotationSpeed,
      // 【保険】古いバージョンで保存された食事履歴に id が無い場合、
      // 削除ボタンを押しても id が一致せず何も起こらないバグにつながるため、
      // 読み込み時に必ず id を補完しておく。
      foods: this.migrateFoodEntries(savedData.foods),
    }

    const sphere = new CentralSphere(evolutionSize, evolutionColor, emissive.color, emissive.intensity)
    sphere.getMesh().position.set(x, y, z)
    sphere.getMesh().renderOrder = 1
    scene.add(sphere.getMesh())

    if (orbitRadius > 0) {
      const orbitLine = this.createOrbitLine(orbitRadius)
      scene.add(orbitLine)
      star.setOrbitLine(orbitLine)
    }

    star.setMesh(sphere.getMesh())
    this.universe.getStarManager().addStar(star)
    return star
  }

  createStarForGenre(genre, initialCalories) {
    const scene = this.sceneManager.getScene()
    const tempStar = new Star(0, 0, 0, 0, 0xffffff, `${genre}星`, initialCalories, genre)
    const evolutionSize = tempStar.getEvolutionStageSize()
    const evolutionColor = tempStar.getEvolutionStageColor()
    const emissive = tempStar.getEvolutionStageEmissive()
    const orbitRadius = this.calculateNextOrbitRadius(evolutionSize)
    const orbitAngle = orbitRadius === 0 ? 0 : Math.random() * Math.PI * 2
    const x = Math.cos(orbitAngle) * orbitRadius
    const z = Math.sin(orbitAngle) * orbitRadius
    const y = orbitRadius === 0 ? 0 : (Math.random() - 0.5) * 4

    const star = new Star(x, y, z, 0, 0xffffff, `${genre}星`, initialCalories, genre)
    star.orbitRadius = orbitRadius
    star.orbitAngle = orbitAngle
    star.orbitSpeed = 0.01
    star.rotationSpeed = 0.002
    star.setInitialSize(evolutionSize)
    star.data.orbitRadius = orbitRadius
    star.data.orbitAngle = orbitAngle
    star.data.orbitSpeed = 0.01
    star.data.rotationSpeed = 0.002

    const sphere = new CentralSphere(evolutionSize, evolutionColor, emissive.color, emissive.intensity)
    sphere.getMesh().position.set(x, y, z)
    sphere.getMesh().renderOrder = 1
    scene.add(sphere.getMesh())

    if (orbitRadius > 0) {
      const orbitLine = this.createOrbitLine(orbitRadius)
      scene.add(orbitLine)
      star.setOrbitLine(orbitLine)
    }

    star.setMesh(sphere.getMesh())
    this.universe.getStarManager().addStar(star)

    return star
  }

  resetFoodForm() {
    const foodNameInput = document.getElementById('foodName')
    const genreSelect = document.getElementById('genreSelect')
    const genreInput = document.getElementById('genreInput')
    const caloriesInput = document.getElementById('calories')

    if (foodNameInput) foodNameInput.value = ''
    if (genreSelect) genreSelect.value = 'new'
    if (genreInput) {
      genreInput.value = ''
      genreInput.disabled = false
    }
    if (caloriesInput) caloriesInput.value = ''
    if (foodNameInput) foodNameInput.focus()
    this.onGenreSelectionChanged()
  }

  onWindowResize() {
    const rect = this.canvas.getBoundingClientRect()
    const width = rect.width || window.innerWidth
    const height = rect.height || window.innerHeight

    this.cameraManager.updateAspect(width / height)
    this.rendererManager.setSize(width, height)
  }

  animate() {
    requestAnimationFrame(() => this.animate())

    const deltaTime = this.clock.getDelta()

    this.universe.update(deltaTime)
    this.cameraController.update(deltaTime)

    this.rendererManager.render(
      this.sceneManager.getScene(),
      this.cameraManager.getCamera()
    )
  }

  setCameraAutoRotate(enabled) {
    this.cameraController.setAutoRotate(enabled)
  }

  onPointerDown(event) {
    this._lastPointerDown = {
      clientX: event.clientX,
      clientY: event.clientY,
    }
  }

  onPointerUp(event) {
    if (!this._lastPointerDown) return

    const dx = event.clientX - this._lastPointerDown.clientX
    const dy = event.clientY - this._lastPointerDown.clientY
    const distSq = dx * dx + dy * dy
    const clickThresholdPx = 5

    this._lastPointerDown = null

    if (distSq > clickThresholdPx * clickThresholdPx) return

    const rect = this.rendererManager.getRenderer().domElement.getBoundingClientRect()
    this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
    this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1

    this.raycaster.setFromCamera(this.mouse, this.cameraManager.getCamera())

    const starManager = this.universe.getStarManager()
    const sceneObjects = starManager.getAllStars().map((star) => star.getMesh()).filter(Boolean)
    const intersects = this.raycaster.intersectObjects(sceneObjects, true)

    if (intersects.length === 0) {
      this.setInfoPanelDefault()
      return
    }

    const star = starManager.getStarByMesh(intersects[0].object)
    if (!star) {
      this.setInfoPanelDefault()
      return
    }

    this.showStarInfo(star)
  }

  showStarInfo(star) {
    if (!this.infoPanel) return

    this.selectedStar = star
    this.renderSelectedStarInfo()
  }

  renderSelectedStarInfo() {
    if (!this.infoPanel || !this.selectedStar) return

    const star = this.selectedStar
    const name = star.name || star.data.name || '名前なし'
    const calories = star.data.calories || 0
    const genre = star.data.genre || '-'
    const evolutionStage = star.getEvolutionStage()
    const pos = star.getPosition ? star.getPosition() : star.getMesh().position
    const posText = `座標: ${pos.x.toFixed(2)}, ${pos.y.toFixed(2)}, ${pos.z.toFixed(2)}`

    const foods = Array.isArray(star.data.foods) ? star.data.foods : []
    const foodListHtml = foods.length
      ? `
          <h3>登録済みの食べ物</h3>
          <ul class="food-list">
            ${foods
              .map(
                (entry) => `
                  <li>
                    <strong>${entry.name}</strong> — ${entry.calories} kcal<br>
                    登録日時: ${new Date(entry.registeredAt).toLocaleString()}<br>
                    <button class="food-delete-button" data-food-id="${entry.id}" type="button">削除</button>
                  </li>`
              )
              .join('')}
          </ul>
        `
      : '<p class="no-foods">登録された食べ物はありません。</p>'

    this.infoPanel.innerHTML = `
      <h2>${name}</h2>
      <div class="meta">
        ${posText}<br>
        総カロリー: ${calories} kcal<br>
        ジャンル: ${genre}<br>
        進化段階: ${evolutionStage}
      </div>
      ${foodListHtml}
    `
  }

  onInfoPanelClick(event) {
    const button = event.target.closest('.food-delete-button')
    if (!button) return

    const foodId = button.dataset.foodId
    if (!foodId) return
    this.deleteSelectedFoodEntry(foodId)
  }

  deleteSelectedFoodEntry(foodId) {
    if (!this.selectedStar || !Array.isArray(this.selectedStar.data.foods)) return

    // foods 配列の中から、ID が一致するエントリを探します。
    const index = this.selectedStar.data.foods.findIndex((entry) => entry.id === foodId)
    if (index === -1) return

    this.selectedStar.data.foods.splice(index, 1)

    if (this.selectedStar.data.foods.length === 0) {
      // 最後の食事を削除した場合は星自体もシーンから削除します。
      this.removeStarFromScene(this.selectedStar)
      this.selectedStar = null
      this.updateOrbitSpacing()
      this.saveData()
      this.setInfoPanelDefault()
      return
    }

    // 削除後は残りの food 履歴からカロリーを再計算します。
    this.selectedStar.recalculateCaloriesFromFoods()

    // 再計算したカロリーに応じて進化データと見た目を更新します。
    // 既存の進化判定ロジックを再利用しています。
    this.selectedStar.updateAppearance(this.selectedStar.getMesh())

    // 削除後は最新の状態を localStorage に保存します。
    // これを追加しないと、画面上では削除されても次回リロードで復活してしまいます。
    this.saveData()

    // 削除後は画面全体を最新状態に更新します。
    this.updateOrbitSpacing()
    this.refreshStarDisplay(this.selectedStar)
  }

  removeStarFromScene(star) {
    const scene = this.sceneManager.getScene()
    if (!scene) return

    const starManager = this.universe.getStarManager()
    if (star.getMesh()) {
      scene.remove(star.getMesh())
    }
    if (star.orbitLine) {
      scene.remove(star.orbitLine)
    }

    if (typeof starManager.removeStarByInstance === 'function') {
      starManager.removeStarByInstance(star)
    }
  }

  refreshStarDisplay(star) {
    if (!star) return

    // 詳細パネルと選択中の星情報を最新の内容に更新します。
    this.showStarInfo(star)
  }

  setInfoPanelDefault() {
    if (this.infoPanel) this.infoPanel.innerText = DEFAULT_INFO_TEXT
  }

  getUniverse() {
    return this.universe
  }
}

const app = new SpaceDebrisApp()

window.app = app
