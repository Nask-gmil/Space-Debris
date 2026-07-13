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

// 食事編集フォームに表示する入力項目。
// 今後「写真」「メモ」などを追加したくなったら、この配列に1件足すだけでよい構造にしている。
// ジャンルはここには含めない(別ジャンルにしたい場合は新しく登録する、という運用のため)。
const FOOD_EDIT_FIELDS = [
  { id: 'editStoreName', label: '店名', type: 'text', getValue: (entry) => entry.storeName || '' },
  { id: 'editFoodName', label: '食べ物名', type: 'text', getValue: (entry) => entry.name || '' },
  { id: 'editCalories', label: 'カロリー(kcal)', type: 'number', getValue: (entry) => entry.calories ?? '' },
]

class SpaceDebrisApp {
  constructor() {
    this.canvas = document.getElementById('canvas')
    // 星の詳細は #infoPanel 直下の .panel-body(#infoPanelBody) に描画する。
    // #infoPanel 自体は「開閉ハンドル + panel-body」をまとめる外枠。
    this.infoPanel = document.getElementById('infoPanelBody')
    this.infoPanelOuter = document.getElementById('infoPanel')
    this.infoPanelHandle = document.getElementById('infoPanelHandle')
    this.infoSummaryEl = document.getElementById('infoSummary')

    this.inputPanelOuter = document.getElementById('inputPanel')
    this.inputPanelHandle = document.getElementById('inputPanelHandle')

    this.errorMessage = document.getElementById('errorMessage')
    this._lastPointerDown = null
    this.raycaster = new THREE.Raycaster()
    this.mouse = new THREE.Vector2()
    this.clock = new THREE.Clock()

    this.selectedStar = null
    // 詳細パネルの「表示モード」。'normal'(通常表示) / 'edit'(食事編集)。
    // 将来「stats(統計)」「achievements(実績)」なども、この仕組みに追加していく想定。
    this.infoPanelMode = 'normal'
    // 現在編集中の食事データのID。編集モードでなければ null。
    this.editingFoodId = null
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

    const supernovaButton = document.getElementById('supernovaButton')
    if (supernovaButton) {
      supernovaButton.addEventListener('click', () => this.onSupernovaButtonClick())
    }

    if (this.infoPanel) {
      this.infoPanel.addEventListener('click', (event) => this.onInfoPanelClick(event))
    }

    // メニュー(⋮の中身)以外の場所がクリックされたら、開いているメニューを全部閉じる。
    // ⋮ボタン自体とメニューの中は、ここでは何もしない
    // (開閉自体は onInfoPanelClick / toggleFoodMenu 側の処理に任せる)。
    document.addEventListener('click', (event) => {
      const isInsideMenu = event.target.closest('.food-menu')
      const isMenuButton = event.target.closest('.food-menu-button')
      if (isInsideMenu || isMenuButton) return

      this.closeAllFoodMenus()
    })

    // スマホ表示の開閉ハンドル(▽/△)。
    // デスクトップ表示では常に開いた状態で表示されるため、
    // ハンドル自体が非表示(CSS側)になり、クリックされることはない。
    if (this.inputPanelHandle) {
      this.inputPanelHandle.addEventListener('click', () => this.toggleInputPanel())
    }
    if (this.infoPanelHandle) {
      this.infoPanelHandle.addEventListener('click', () => this.toggleInfoPanel())
    }

    const drawerBackdrop = document.getElementById('drawerBackdrop')
    if (drawerBackdrop) {
      drawerBackdrop.addEventListener('click', () => {
        this.collapseInputPanel()
        this.collapseInfoPanel()
      })
    }

    // 初期状態で新ジャンル選択時の入力欄を表示する
    this.onGenreSelectionChanged()
  }

  onRegisterButtonClick() {
    const foodNameInput = document.getElementById('foodName')
    const genreSelect = document.getElementById('genreSelect')
    const genreInput = document.getElementById('genreInput')
    const storeNameInput = document.getElementById('storeName')
    const caloriesInput = document.getElementById('calories')

    const foodName = foodNameInput ? foodNameInput.value.trim() : ''
    const selectedGenre = genreSelect ? genreSelect.value : 'new'
    const genre = selectedGenre === 'new' ? (genreInput ? genreInput.value.trim() : '') : selectedGenre
    const storeName = storeNameInput ? storeNameInput.value.trim() : ''
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

    targetStar.addFoodEntry(foodName, calories, storeName)
    const evolvedStage = targetStar.getEvolutionStage()
    console.log('対象の星:', targetStar.name || targetStar.data.name)
    console.log('進化段階:', evolvedStage)

    this.saveData()
    this.refreshStarDisplay(targetStar)
    this.resetFoodForm()
    this.clearError()

    // スマホ表示では、登録が完了したら入力ドロワーを閉じて
    // 宇宙の様子(星が増えた/育った結果)がすぐ見えるようにする。
    // デスクトップ表示ではこのクラス切り替えは見た目に影響しない。
    this.collapseInputPanel()

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
    const storeNameInput = document.getElementById('storeName')
    const caloriesInput = document.getElementById('calories')

    if (foodNameInput) foodNameInput.value = ''
    if (genreSelect) genreSelect.value = 'new'
    if (genreInput) {
      genreInput.value = ''
      genreInput.disabled = false
    }
    if (storeNameInput) storeNameInput.value = ''
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
    // 別の星を選び直したときは、編集中だった状態を必ず解除しておく
    // (別の星なのに前の編集フォームが残ってしまう、という不具合を防ぐため)
    this.infoPanelMode = 'normal'
    this.editingFoodId = null
    this.renderSelectedStarInfo()
  }

  // 詳細パネル(#infoPanelBody)は1つのまま、"今どのモードか" によって
  // 描画する内容だけを切り替える。ここに新しいモードを追加していけば、
  // 将来「統計」「実績」なども同じパネルの中に増やしていける。
  renderSelectedStarInfo() {
    if (!this.infoPanel || !this.selectedStar) return

    switch (this.infoPanelMode) {
      case 'edit':
        this.renderFoodEditForm()
        break
      case 'normal':
      default:
        this.renderNormalStarInfo()
        break
    }
  }

  // 通常モード:星の詳細情報 + 食事履歴を表示する(これまで通りの内容)
  renderNormalStarInfo() {
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
                  <li class="food-item">
                    <button class="food-menu-button" data-food-id="${entry.id}" type="button" aria-label="メニューを開く">⋮</button>
                    <div class="food-menu" data-food-menu-id="${entry.id}">
                      <button class="food-menu-item" data-action="edit" data-food-id="${entry.id}" type="button">✏️ 食事を編集</button>
                      <button class="food-menu-item" data-action="delete" data-food-id="${entry.id}" type="button">🗑️ 削除</button>
                    </div>
                    <strong>${entry.name}</strong> — ${entry.calories} kcal<br>
                    ${entry.storeName ? `店名: ${entry.storeName}<br>` : '店名: なし<br>'}
                    登録日時: ${new Date(entry.registeredAt).toLocaleString()}
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

    // パネルを閉じている(折りたたんでいる)間も見えるサマリー帯を更新する。
    this.updateInfoSummary(name, calories, evolutionStage)
  }

  // 食事編集フォームを描画する。
  // FOOD_EDIT_FIELDS の配列から入力欄を自動生成しているので、
  // 将来「写真」「メモ」などの項目を増やしたくなったら、
  // 配列に1件追加するだけでこの関数を直さずに対応できる。
  renderFoodEditForm() {
    const star = this.selectedStar
    // 既存の「IDで探す」というやり方(削除処理と同じ考え方)で、
    // 編集対象の食事データそのものを取得する。
    const foods = Array.isArray(star.data.foods) ? star.data.foods : []
    const entry = foods.find((food) => food.id === this.editingFoodId)

    if (!entry) {
      // 編集中に削除されるなどしてデータが見つからない場合は、通常モードへ戻す
      this.infoPanelMode = 'normal'
      this.editingFoodId = null
      this.renderNormalStarInfo()
      return
    }

    // entry(食事データ)自体はここでは一切書き換えていない。
    // 各入力欄の value には、getValue() で取り出した「今のデータの値」を
    // そのまま表示しているだけで、保存ボタンを押すまでデータには触れない。
    const fieldsHtml = FOOD_EDIT_FIELDS.map((field) => {
      const currentValue = field.getValue(entry, star)
      return `
        <label for="${field.id}">${field.label}</label>
        <input id="${field.id}" name="${field.id}" type="${field.type}" value="${currentValue}">
      `
    }).join('')

    this.infoPanel.innerHTML = `
      <h2>食事を編集</h2>
      <div class="food-form food-edit-form" data-food-id="${this.editingFoodId}">
        ${fieldsHtml}
        <div class="food-edit-actions">
          <button class="food-edit-save" type="button">保存</button>
          <button class="food-edit-cancel" type="button">キャンセル</button>
        </div>
      </div>
    `
  }

  // 折りたたみ状態でも見える、星のサマリー(名前・カロリー・進化段階)を更新する
  updateInfoSummary(name, calories, evolutionStage) {
    if (!this.infoSummaryEl) return
    this.infoSummaryEl.innerHTML = `
      <strong>${name}</strong>
      <span class="info-summary-sep">・</span>
      <span>${calories} kcal</span>
      <span class="info-summary-sep">・</span>
      <span>${evolutionStage}</span>
    `
  }

  // ------- スマホ表示: ドロワーの開閉 -------
  // 入力パネルと情報パネルは同時に画面いっぱい広がると紛らわしいため、
  // 片方を開くときはもう片方を自動的に閉じるようにしている。

  toggleInputPanel() {
    if (!this.inputPanelOuter) return
    const willExpand = !this.inputPanelOuter.classList.contains('is-expanded')
    if (willExpand) {
      this.collapseInfoPanel()
    }
    this.setPanelExpanded(this.inputPanelOuter, this.inputPanelHandle, willExpand)
    this.updateDrawerBackdrop()
  }

  toggleInfoPanel() {
    if (!this.infoPanelOuter) return
    const willExpand = !this.infoPanelOuter.classList.contains('is-expanded')
    if (willExpand) {
      this.collapseInputPanel()
    }
    this.setPanelExpanded(this.infoPanelOuter, this.infoPanelHandle, willExpand)
    this.updateDrawerBackdrop()
  }

  collapseInputPanel() {
    this.setPanelExpanded(this.inputPanelOuter, this.inputPanelHandle, false)
    this.updateDrawerBackdrop()
  }

  collapseInfoPanel() {
    this.setPanelExpanded(this.infoPanelOuter, this.infoPanelHandle, false)
    this.updateDrawerBackdrop()
  }

  setPanelExpanded(panelEl, handleEl, expanded) {
    if (!panelEl) return
    panelEl.classList.toggle('is-expanded', expanded)
    if (handleEl) handleEl.setAttribute('aria-expanded', String(expanded))
  }

  updateDrawerBackdrop() {
    const backdrop = document.getElementById('drawerBackdrop')
    if (!backdrop) return
    const anyExpanded =
      (this.inputPanelOuter && this.inputPanelOuter.classList.contains('is-expanded')) ||
      (this.infoPanelOuter && this.infoPanelOuter.classList.contains('is-expanded'))
    backdrop.classList.toggle('is-visible', Boolean(anyExpanded))
  }

  // ------- ここまでドロワー開閉 -------

  /**
   * 「本当に実行してよいか」を確認するための共通関数。
   *
   * 【なぜこの1関数にまとめているか】
   * 今は window.confirm()(ブラウザ標準のOK/キャンセルダイアログ)をそのまま使っているが、
   * 将来「宇宙の世界観に合わせたオリジナルの確認ダイアログ」に差し替えたくなったとき、
   * 削除・編集保存・超新星爆発...と呼び出し箇所を1つずつ書き換えるのは大変。
   * 確認処理の「入り口」をここ1箇所にまとめておけば、
   * 差し替えるときはこの関数の中身だけを直せばよい。
   *
   * @param {string} message - 確認ダイアログに表示するメッセージ
   * @returns {boolean} 「OK」が押されたら true、「キャンセル」なら false
   */
  confirmAction(message) {
    return window.confirm(message)
  }

  onInfoPanelClick(event) {
    // 編集モードの「キャンセル」ボタンが押された場合は、通常の詳細表示へ戻す
    const cancelButton = event.target.closest('.food-edit-cancel')
    if (cancelButton) {
      this.cancelEditingFoodEntry()
      return
    }

    // 編集モードの「保存」ボタンが押された場合、入力内容を食事データへ書き込む
    const saveButton = event.target.closest('.food-edit-save')
    if (saveButton) {
      // 保存前に必ず確認する。キャンセルなら何もせず、編集モードのまま・入力内容もそのまま残す
      // (既存の saveEditedFoodEntry() には一切触れず、呼び出す前で止めるだけ)。
      if (!this.confirmAction('本当に変更しますか？')) return

      this.saveEditedFoodEntry()
      return
    }

    // ⋮ボタンが押された場合は、対応するメニューだけを開閉する
    const menuButton = event.target.closest('.food-menu-button')
    if (menuButton) {
      this.toggleFoodMenu(menuButton.dataset.foodId)
      return
    }

    // メニュー内の「✏️ 食事を編集」が押された場合、詳細パネルを編集モードへ切り替える
    const menuEditItem = event.target.closest('.food-menu-item[data-action="edit"]')
    if (menuEditItem) {
      const foodId = menuEditItem.dataset.foodId
      if (!foodId) return
      this.startEditingFoodEntry(foodId)
      return
    }

    // メニュー内の「🗑️ 削除」が押された場合、既存の削除処理(deleteSelectedFoodEntry)を呼び出す
    // ※以前あった常時表示の削除ボタンは廃止し、削除操作はこのメニュー経由に統一した
    const menuDeleteItem = event.target.closest('.food-menu-item[data-action="delete"]')
    if (menuDeleteItem) {
      const foodId = menuDeleteItem.dataset.foodId
      if (!foodId) return

      // 削除前に必ず確認する。キャンセルなら何もしない
      // (deleteSelectedFoodEntry() は呼ばれないので、一覧・localStorage・星データは一切変わらない)。
      if (!this.confirmAction('本当に削除しますか？')) return

      this.deleteSelectedFoodEntry(foodId)
      return
    }
  }

  toggleFoodMenu(foodId) {
    if (!this.infoPanel) return

    // 今表示されている「すべての」メニュー(食事履歴の数だけある)を一旦取得する
    const menus = this.infoPanel.querySelectorAll('.food-menu')

    menus.forEach((menu) => {
      const isTarget = menu.dataset.foodMenuId === foodId

      if (!isTarget) {
        // 自分以外のメニューは、開いていたら必ず閉じる
        // (「複数同時に開かない」というルールをここで保証している)
        menu.classList.remove('is-open')
        return
      }

      // 自分自身は「開いていれば閉じる、閉じていれば開く」を切り替える
      menu.classList.toggle('is-open')
    })
  }

  closeAllFoodMenus() {
    if (!this.infoPanel) return

    const menus = this.infoPanel.querySelectorAll('.food-menu.is-open')
    menus.forEach((menu) => menu.classList.remove('is-open'))
  }

  startEditingFoodEntry(foodId) {
    console.log('編集開始')
    console.log('id:', foodId)

    // 「編集モード」に切り替えて、詳細パネルを編集フォームとして再描画する。
    this.infoPanelMode = 'edit'
    this.editingFoodId = foodId
    this.renderSelectedStarInfo()
  }

  cancelEditingFoodEntry() {
    // 「通常モード」に戻して、詳細パネルを元の表示に戻す。
    this.infoPanelMode = 'normal'
    this.editingFoodId = null
    this.renderSelectedStarInfo()
  }

  saveEditedFoodEntry() {
    const star = this.selectedStar
    if (!star) return

    // 削除・編集フォーム表示のときと同じ「IDで探す」やり方で、
    // 書き換え対象の食事データそのもの(参照)を取得する。
    const foods = Array.isArray(star.data.foods) ? star.data.foods : []
    const entry = foods.find((food) => food.id === this.editingFoodId)
    if (!entry) return

    const storeNameInput = document.getElementById('editStoreName')
    const foodNameInput = document.getElementById('editFoodName')
    const caloriesInput = document.getElementById('editCalories')

    const storeName = storeNameInput ? storeNameInput.value.trim() : ''
    const foodName = foodNameInput ? foodNameInput.value.trim() : ''
    const calories = caloriesInput ? Number(caloriesInput.value) : entry.calories

    // 新しいオブジェクトや配列を作らず、既存の entry を直接書き換える。
    // ジャンルはここでは変更しない(別ジャンルにしたい場合は新規登録で対応する運用のため)。
    entry.name = foodName
    entry.storeName = storeName
    entry.calories = calories

    // 食事データが変わったので、星の総カロリー・進化段階・見た目を計算し直す。
    // これは削除処理(deleteSelectedFoodEntry)で使っているのと全く同じ、既存の再計算処理。
    star.recalculateCaloriesFromFoods()
    star.updateAppearance(star.getMesh())

    // 書き換えた内容を localStorage へ保存する。
    // 新しい保存処理は作らず、既存の saveData()(削除・登録のときと同じもの)を再利用する。
    this.saveData()

    // 星の大きさが変わった可能性があるので、星同士の間隔も既存の処理で調整し直す。
    this.updateOrbitSpacing()

    // 更新後は通常モードに戻す。
    this.infoPanelMode = 'normal'
    this.editingFoodId = null

    // 詳細パネルも既存の refreshStarDisplay() で最新状態に描画し直す
    // (削除処理の最後で使っているのと同じ関数)。
    this.refreshStarDisplay(star)
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

  /**
   * 「☄️ 超新星爆発」ボタンが押されたときの入り口。
   * ここでは「本当に消していいか」の確認だけを行い、
   * 実際の削除処理は triggerSupernova() に任せます
   * (削除の実行と、確認ダイアログの表示を分けておくことで、
   *  あとから確認方法だけ変えたくなったときに直しやすくするため)。
   */
  async onSupernovaButtonClick() {
    const starManager = this.universe.getStarManager()
    const starCount = starManager.getCount()

    if (starCount === 0) {
      window.alert('宇宙にはまだ星がありません。')
      return
    }

    // window.confirm() は、OK が押されると true、キャンセルが押されると false を返す。
    // Java でいう「はい/いいえ」の確認ダイアログ (JOptionPane.showConfirmDialog) と同じ役割。
    // 取り返しのつかない操作なので、実行前に必ずここで確認を挟む。
    // (削除・編集保存と同じ confirmAction() を使うことで、確認処理の書き方を統一している)
    const confirmed = this.confirmAction(
      `本当に超新星爆発を起こしますか?\n\n` +
        `現在登録されている星(${starCount}個)と、そこに記録した食事のデータは\n` +
        `すべて消え、元に戻すことはできません。`
    )

    if (!confirmed) return

    // 【第7.1回で追加】
    // 演出(赤くなる→膨らむ→爆発...)を今後実装するため、まずは
    // 「どの星を演出対象にするか(＝最大カロリーの星)」をここで特定しておく。
    // 今回はまだ演出はせず、取得した内容を確認できるようにするだけ。
    const supernovaTarget = this.getMaxCalorieStar()
    this.logSupernovaTarget(supernovaTarget)

    // 演出対象は、次回以降の演出処理でも使えるようにインスタンス変数へ保存しておく。
    this.supernovaTarget = supernovaTarget

    // 【第7.2回で追加】
    // 演出の第一段階として、対象の星の色を赤へ変え、約1秒間そのまま表示する。
    // await を使っているので、この処理が終わる(＝1秒待ち終わる)まで、
    // 下のリセット処理は実行されない。
    await this.playSupernovaColorChange(supernovaTarget)

    // 【第7.3回で追加】
    // 演出の第二段階として、対象の星を膨張させながら色を変化させる。
    // ここも await しているので、アニメーションが終わるまで次には進まない。
    await this.playSupernovaExpansion(supernovaTarget)

    // 取得処理のあとは、これまで通り既存の宇宙リセット処理を実行する(今回はここを変更しない)。
    this.triggerSupernova()
  }

  /**
   * 超新星爆発の第二段階の演出:対象の星を膨張させながら、
   * あらかじめ決めておいた色のパターンの順に色を変化させる。
   *
   * 【なぜ色を配列(パターン)で管理するか】
   * 完全ランダムな色にせず、あらかじめ決めた並び順にすることで、
   * 何度発動しても同じ雰囲気の演出になる。
   * また、今後「色を増やしたい」「並び順を変えたい」となったときに、
   * この配列(SUPERNOVA_COLOR_PATTERN)だけを直せばよいようにしている。
   *
   * 【なぜ requestAnimationFrame を使うか】
   * setTimeout を使って何回かに分けて色・大きさを変える方法もあるが、
   * それだとカクカクした動きになりやすい。
   * requestAnimationFrame は「次に画面が描画されるタイミング」で毎回呼ばれるので、
   * より滑らかなアニメーションになる。
   *
   * @param {{ mesh: THREE.Object3D|null } | null} target - getMaxCalorieStar() の戻り値
   * @returns {Promise<void>}
   */
  playSupernovaExpansion(target) {
    if (!target || !target.mesh || !target.mesh.material) return Promise.resolve()

    const mesh = target.mesh
    const duration = 1000 // 膨張にかける時間(ミリ秒)。約1秒。

    // 現在のスケールを基準にする(すでにカロリーに応じて大きくなっている場合があるため、
    // "1" 固定ではなく、今の mesh.scale.x を開始値として使う)
    const startScale = mesh.scale.x || 1
    const endScale = startScale * 2 // 現在の約2倍まで膨張させる

    // 膨張中に切り替える色のパターン(今回は1パターン)。
    // 配列の最後を必ず赤(0xff2200)にしておくことで、「最後は必ず赤色で終わる」を保証する。
    const SUPERNOVA_COLOR_PATTERN = [0xff2200, 0xff6600, 0xffdd00, 0xff2200]

    return new Promise((resolve) => {
      const startTime = performance.now()

      // 1フレームごとに呼ばれる関数。経過時間から progress(0〜1)を計算し、
      // その割合に応じて scale と color をその都度書き換えていく。
      const animateFrame = (now) => {
        const elapsed = now - startTime
        // progress は 0(開始直後) 〜 1(1秒経過) の間の値
        const progress = Math.min(elapsed / duration, 1)

        // 現在のスケールを、開始値〜終了値の間で少しずつ大きくしていく(線形補間)。
        // 急に大きくなるのではなく、progress が少しずつ増えるごとに滑らかに拡大する。
        const currentScale = startScale + (endScale - startScale) * progress
        mesh.scale.set(currentScale, currentScale, currentScale)

        // progress の進み具合に応じて、色パターンの中から「今表示する色」を選ぶ。
        // 例えば4色パターンなら、0〜0.25で1色目、0.25〜0.5で2色目...という具合に区切られる。
        const patternIndex = Math.min(
          Math.floor(progress * SUPERNOVA_COLOR_PATTERN.length),
          SUPERNOVA_COLOR_PATTERN.length - 1
        )
        mesh.material.color.set(SUPERNOVA_COLOR_PATTERN[patternIndex])

        if (progress < 1) {
          // まだ1秒経っていなければ、次のフレームでもう一度この関数を呼んでもらう
          requestAnimationFrame(animateFrame)
        } else {
          // 念のため、最後は必ず配列の最後の色(赤)で終わるようにしておく
          mesh.material.color.set(SUPERNOVA_COLOR_PATTERN[SUPERNOVA_COLOR_PATTERN.length - 1])
          resolve()
        }
      }

      requestAnimationFrame(animateFrame)
    })
  }

  /**
   * 指定したミリ秒だけ処理を待つためのヘルパー関数。
   *
   * 【なぜ必要か】
   * JavaScriptの setTimeout() はそのままでは「〇秒後に実行する」ことしかできず、
   * 「〇秒待ってから次の処理に進む」という書き方がしづらい。
   * setTimeout を Promise で包んで await できるようにしておくと、
   * 今回の「1秒待ってからリセットする」のような処理を、
   * 上から下へ読める順番のまま書けるようになる。
   * (Javaの Thread.sleep() に近いイメージだが、画面が固まらない点が異なる)
   *
   * @param {number} milliseconds - 待つ時間(ミリ秒)
   * @returns {Promise<void>}
   */
  wait(milliseconds) {
    return new Promise((resolve) => setTimeout(resolve, milliseconds))
  }

  /**
   * 超新星爆発の第一段階の演出:対象の星の色だけを赤に変え、
   * 「これから爆発する」ことが伝わるよう、そのまま約1秒間表示する。
   *
   * 【なぜ新しい星を作らず、既存のmeshの色だけ変えるか】
   * 新しく星(Mesh)を作り直すと、位置や大きさなどの情報を持たせ直す必要が出てしまう。
   * すでにシーンに表示されている mesh(target.mesh)の material.color を
   * 書き換えるだけであれば、見た目の色以外は何も変わらないので安全。
   * 星の種類・進化状態(this.data.type など)にも触れていない。
   *
   * @param {{ mesh: THREE.Object3D|null } | null} target - getMaxCalorieStar() の戻り値
   * @returns {Promise<void>}
   */
  async playSupernovaColorChange(target) {
    // 対象の星が無い、または mesh・material が取得できない場合は演出をスキップする
    if (!target || !target.mesh || !target.mesh.material) return

    // 「危険」「限界」をイメージした、強めの赤色に変更する。
    // material.color.set() は、既存のマテリアルの色だけを書き換える
    // (マテリアルやメッシュを新しく作り直しているわけではない)。
    target.mesh.material.color.set(0xff2200)

    // 赤くなった状態のまま約1秒間待ち、ユーザーが
    // 「この星が爆発する」と認識できる時間を作る。
    await this.wait(1000)
  }

  /**
   * 現在ある星の中から「総カロリーが一番大きい星」を1つ取得する。
   *
   * 【なぜ必要か】
   * 超新星爆発(メタボリックシンドローム)の演出は、今後
   * 「一番育った(＝一番カロリーが高い)星」を対象に、
   * 赤くなる→膨らむ→白く光る→爆発、という流れで進める予定。
   * まずは「どの星が対象になるか」を正しく特定できる処理を、
   * 再利用しやすいよう単独の関数として用意しておく。
   *
   * @returns {{ star: Star, mesh: THREE.Object3D|null, genre: string, totalCalories: number } | null}
   *          星が1つも無い場合は null を返す
   */
  getMaxCalorieStar() {
    const stars = this.universe.getStarManager().getAllStars()
    if (stars.length === 0) return null

    // reduce()で配列を1つずつ比較しながら「これまでで一番カロリーが高い星」に絞り込んでいく。
    // Javaで言うと、for文の中で
    //   if (current.calories > max.calories) { max = current; }
    // をずっと繰り返しているのと同じことをしている。
    const targetStar = stars.reduce((maxStar, currentStar) => {
      const currentCalories = currentStar.data.calories || 0
      const maxCalories = maxStar.data.calories || 0
      return currentCalories > maxCalories ? currentStar : maxStar
    })

    // 今後の演出処理で扱いやすいように、必要な情報をひとまとめにして返す。
    return {
      star: targetStar,
      mesh: typeof targetStar.getMesh === 'function' ? targetStar.getMesh() : null,
      genre: targetStar.data.genre || '(ジャンル不明)',
      totalCalories: targetStar.data.calories || 0,
    }
  }

  /**
   * 超新星爆発の対象になった星の情報を、確認用に console.log へ表示する。
   * (演出そのものはまだ実装しない。あくまで「正しく取得できているか」の確認用)
   *
   * @param {{ star: Star, mesh: THREE.Object3D|null, genre: string, totalCalories: number } | null} target
   */
  logSupernovaTarget(target) {
    if (!target) {
      console.log('超新星爆発対象: 星が1つもありませんでした')
      return
    }

    console.log('====================')
    console.log('超新星爆発対象')
    console.log('ジャンル：' + target.genre)
    console.log('総カロリー：' + target.totalCalories + ' kcal')
    console.log('====================')
    // Three.js のオブジェクトそのものも確認できるように、そのままログへ渡す。
    console.log('対象の星オブジェクト(Three.js mesh):', target.mesh)
    console.log('対象の Star インスタンス:', target.star)
  }

  /**
   * 全ての星・食事データを削除し、宇宙をまっさらな状態に戻します。
   *
   * 【なぜ配列をコピー([...stars])してから forEach で回すのか】
   * removeStarFromScene() の中で呼んでいる starManager.removeStarByInstance() は、
   * StarManager が内部で持っている配列そのものを splice() で縮めます。
   * その「元の配列」を直接 forEach で回すと、1つ消すたびに残りの要素の位置が
   * 前へズレてしまい、一部の星が処理をスキップされてしまいます
   * (Java で言うと、拡張for文でリストを直接 remove() すると
   *  ConcurrentModificationException になるのと似た問題です)。
   * そこで getAllStars() が返す配列を [...stars] でいったん複製し、
   * 「今の中身のスナップショット」を作ってから回すことで、
   * 元の配列が減っていっても全ての星を安全に処理できるようにしています。
   */
  triggerSupernova() {
    const starManager = this.universe.getStarManager()
    const stars = [...starManager.getAllStars()]

    stars.forEach((star) => {
      this.removeStarFromScene(star)
    })

    // 選択中の星・編集中の状態もリセットし、詳細パネルを初期表示に戻す
    this.selectedStar = null
    this.infoPanelMode = 'normal'
    this.editingFoodId = null
    this.setInfoPanelDefault()

    // ジャンル選択肢も「＋ 新ジャンルを登録」だけの初期状態に戻す
    this.resetGenreOptions()

    // 星が0個になった状態を、既存の saveData()(登録・削除のときと同じ関数)で
    // そのまま保存する。新しい保存処理はここでは作らない。
    this.saveData()
  }

  /**
   * ジャンル選択(select)を初期状態(「＋ 新ジャンルを登録」のみ)に戻します。
   * 星を全部消したのに、ジャンルの選択肢だけ古いまま残ってしまうのを防ぐための処理。
   */
  resetGenreOptions() {
    const genreSelect = document.getElementById('genreSelect')
    const genreInput = document.getElementById('genreInput')
    if (!genreSelect) return

    // 「＋ 新ジャンルを登録」(value="new") 以外の option を全部取り除く
    Array.from(genreSelect.options).forEach((option) => {
      if (option.value !== 'new') {
        genreSelect.removeChild(option)
      }
    })
    genreSelect.value = 'new'

    if (genreInput) {
      genreInput.value = ''
      genreInput.disabled = false
    }
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
    if (this.infoSummaryEl) {
      this.infoSummaryEl.innerHTML = `<span class="info-summary-placeholder">${DEFAULT_INFO_TEXT}</span>`
    }
  }

  getUniverse() {
    return this.universe
  }
}

const app = new SpaceDebrisApp()

window.app = app
