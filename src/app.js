import * as THREE from 'three'
import { SceneManager } from './core/SceneManager.js'
import { CameraManager } from './core/CameraManager.js'
import { RendererManager } from './core/RendererManager.js'
import { CameraController } from './controls/CameraController.js'
import { Universe } from './universe/Universe.js'
import { Star } from './universe/Star.js'
import { CentralSphere } from './universe/CentralSphere.js'
import { Constants } from './utils/constants.js'

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

// 超新星爆発の演出で使う色の名前 → 実際の色コードの対応表。
// パターン配列側は色コードを直書きせずこの名前を使うことで、
// 後から色味だけを調整したくなったときにここ1箇所を直せばよいようにしている。
const SUPERNOVA_COLORS = {
  RED: 0xff2200,
  DARK_RED: 0x660000,
  PURPLE: 0x9900ff,
  BLUE: 0x0044ff,
  GREEN: 0x00ff44,
  // 完全な黒(0x000000)だと宇宙背景に完全に溶け込んで「消えた」ように見えてしまうため、
  // わずかに明るくして「黒っぽい色」として見えるようにしている。
  BLACK: 0x0d0d0d,
  ORANGE: 0xff6600,
  YELLOW: 0xffdd00,
  WHITE: 0xffffff,
}

// 超新星爆発のたびに、この中から1つをランダムに選んで使う色変化パターン。
// 完全ランダムな色にはせず、あらかじめ決めた並び順の中から選ぶことで、
// 毎回「それらしい」配色になるようにしている。
// どのパターンも必ず最後は赤(RED)で終わる(この後リセットへつながるため)。
const SUPERNOVA_COLOR_PATTERNS = [
  // パターンA(暴走型): エネルギー暴走→重力崩壊
  [
    SUPERNOVA_COLORS.RED,
    SUPERNOVA_COLORS.PURPLE,
    SUPERNOVA_COLORS.BLUE,
    SUPERNOVA_COLORS.GREEN,
    SUPERNOVA_COLORS.BLACK,
    SUPERNOVA_COLORS.RED,
  ],
  // パターンB(点滅型): 警報・危険演出
  [
    SUPERNOVA_COLORS.RED,
    SUPERNOVA_COLORS.PURPLE,
    SUPERNOVA_COLORS.RED,
    SUPERNOVA_COLORS.BLUE,
    SUPERNOVA_COLORS.RED,
    SUPERNOVA_COLORS.BLACK,
    SUPERNOVA_COLORS.RED,
  ],
  // パターンC(侵食型): 少しずつ壊れていく演出
  [
    SUPERNOVA_COLORS.RED,
    SUPERNOVA_COLORS.DARK_RED,
    SUPERNOVA_COLORS.PURPLE,
    SUPERNOVA_COLORS.BLACK,
    SUPERNOVA_COLORS.RED,
  ],
  // パターンD(エネルギー暴走型): 恒星らしい発光
  [
    SUPERNOVA_COLORS.RED,
    SUPERNOVA_COLORS.ORANGE,
    SUPERNOVA_COLORS.YELLOW,
    SUPERNOVA_COLORS.WHITE,
    SUPERNOVA_COLORS.RED,
  ],
  // パターンE(カオス型): 異常現象を強調
  [
    SUPERNOVA_COLORS.RED,
    SUPERNOVA_COLORS.GREEN,
    SUPERNOVA_COLORS.PURPLE,
    SUPERNOVA_COLORS.BLUE,
    SUPERNOVA_COLORS.BLACK,
    SUPERNOVA_COLORS.RED,
  ],
  // パターンF(宇宙崩壊型): 宇宙の法則が壊れる演出
  [
    SUPERNOVA_COLORS.RED,
    SUPERNOVA_COLORS.PURPLE,
    SUPERNOVA_COLORS.BLACK,
    SUPERNOVA_COLORS.BLUE,
    SUPERNOVA_COLORS.GREEN,
    SUPERNOVA_COLORS.PURPLE,
    SUPERNOVA_COLORS.BLACK,
    SUPERNOVA_COLORS.RED,
  ],
]

// 超新星爆発の演出で表示するメッセージを、カテゴリ(種類)ごとに管理する定数。
//
// 【なぜ配列・オブジェクトで管理するのか】
// メッセージの文言をコードのあちこちに直接書いてしまうと、
// 「文言を直したい」「メッセージを増やしたい」となったときに
// 修正箇所を探すのが大変になる。ここに1箇所へまとめておくことで、
// 文言の追加・変更がこの定数だけを直せば済むようにしている。
//
// 【なぜカテゴリ(NORMAL / OVER_CALORIE)で分けているのか】
// NORMAL(通常イベント)は「新しい宇宙が始まった」という前向きな内容だが、
// OVER_CALORIE(特殊イベント:カロリーオーバー)は「食べすぎに注意しましょう」という、
// 少し注意喚起を含んだトーンのメッセージになっている。
// 同じ配列に混ぜてランダム選択してしまうと、
// 「食べすぎで爆発したのに、通常の前向きなメッセージだけが出る」
// 「食べすぎていないのに、食べすぎ注意メッセージが出る」といった、
// 状況に合わないメッセージが表示されてしまう可能性がある。
// 最初から「カテゴリ名 → メッセージ配列」という形で管理しておけば、
// 新しいカテゴリ(例: ACHIEVEMENT, RARE)を追加したいときも、
// このオブジェクトに新しいキーを1つ足すだけで対応できる。
const SUPERNOVA_MESSAGES = {
  // 通常イベント用メッセージ(9種類)。超新星爆発のたびにランダムで1つ選ばれる。
  NORMAL: [
    '🌌 超新星爆発(メタボリックシンドローム)が発生!\n宇宙は新たな姿へと生まれ変わりました。\nさあ、新たな星を探しに行きましょう! 🚀',
    '🌠 超新星爆発(メタボリックシンドローム)を観測しました。\n新たな宇宙が誕生しています。\n未知の星々を探査しましょう。',
    '🚀 メタボリックシンドロームにより宇宙が一新されました!\n新たな星々との出会いがあなたを待っています。\n冒険を再開しましょう!',
    '🎮 イベント完了!\n超新星爆発(メタボリックシンドローム)が発生しました。\n新しい宇宙で次の記録を始めましょう!',
    '✨ 宇宙は終わりを迎え、そして再び始まりました。\n超新星爆発(メタボリックシンドローム)が新たな宇宙を生み出しました。\n次の物語を始めましょう。',
    '📡 宇宙観測ログ更新\n・超新星爆発(メタボリックシンドローム)を確認\n・新規宇宙の生成を確認\n・探索を再開してください',
    '⭐ ひとつの星は役目を終えました。\n超新星爆発(メタボリックシンドローム)により、新しい宇宙が誕生しました。\n次はどんな星を育てますか?',
    '🌌 超新星爆発(メタボリックシンドローム)が発生!\n食べたカロリーは宇宙を巡り、新たな星々を生み出しました。\nさあ、新たな星を探しに行きましょう! 🚀',
    '🏆 超新星爆発(メタボリックシンドローム)が発生しました!\n宇宙は新たな姿へと生まれ変わりました。\nまだ見ぬ実績と星々があなたを待っています。',
  ],
  // 特殊イベント用メッセージ(カロリーオーバー、総カロリー80,000kcal以上のとき用)。
  OVER_CALORIE: [
    '🍔 食べすぎ注意!?\n超新星爆発(メタボリックシンドローム)が発生しました!\n新しい宇宙ではバランスよく星を育てましょう!',
    '⚠ カロリーが限界を超えました!\nメタボリックシンドロームが発生!\n少し休憩して、新しい宇宙を育てましょう。',
    '🍕 エネルギーが限界まで蓄積されました!\n超新星爆発(メタボリックシンドローム)が発生!\n食べすぎにはご注意を!',
    '🍩 これ以上は宇宙も耐えられません!\nメタボリックシンドローム発生!\n新しい宇宙では健康的な星づくりを目指しましょう!',
    '🍜 宇宙のカロリーが飽和しました!\n超新星爆発(メタボリックシンドローム)を確認。\n次の宇宙では食べすぎ注意です!',
  ],
  // 【将来の拡張イメージ(今回は未実装)】
  // ACHIEVEMENT: ['...実績解除イベント用のメッセージ...'],
  // のように、新しいカテゴリ名をキーとして配列を追加していくだけで対応できる。
}

// どの条件のときに、どのメッセージカテゴリを使うかを表すルール一覧。
// 上から順にチェックし、条件(condition)に最初に一致したカテゴリを使う。
// どれにも一致しなければ、通常イベント(NORMAL)を使う。
//
// 【なぜ if文を増やす代わりにこの形にしているのか】
// 「もし〇〇なら特殊メッセージ、もし△△ならレアメッセージ、それ以外は通常」
// と条件が増えるたびに if / else if を継ぎ足していく書き方だと、
// カテゴリが増えるほどコードが長く・読みにくくなってしまう。
// 代わりに「条件を判定する関数(condition) → 使うカテゴリ名(category)」を
// 1セットにして配列に並べておけば、カテゴリを決める処理そのものは
// 「配列を上から順に見て、最初に条件に合ったものを使う」という
// 共通の仕組み1つだけで済む。
//
// 【将来カテゴリを増やす方法】
// 例えば「実績を解除した直後は ACHIEVEMENT を使いたい」となったら、
//   { category: 'ACHIEVEMENT', condition: (totalCalories, context) => context.justUnlockedAchievement },
// のような要素をこの配列に1件足すだけでよい(if文を増やす必要はない)。
const SUPERNOVA_MESSAGE_CATEGORY_RULES = [
  {
    category: 'OVER_CALORIE',
    condition: (totalCalories) => totalCalories >= 80000,
  },
]

// どの条件にも当てはまらなかったときに使う、既定のメッセージカテゴリ。
const DEFAULT_SUPERNOVA_MESSAGE_CATEGORY = 'NORMAL'

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

    // 【今回追加】
    // 対象の星の総カロリーを、締めくくりのメッセージ選択(通常/特殊)の判定に使うため、
    // ここで控えておく(宇宙リセットが終わると星のデータ自体が無くなってしまうため、
    // リセットより前のこのタイミングで値を取り出しておく必要がある)。
    const totalCalories = supernovaTarget ? supernovaTarget.totalCalories : 0

    // 【第7.2回で追加】
    // 演出の第一段階として、対象の星の色を赤へ変え、約1秒間そのまま表示する。
    // await を使っているので、この処理が終わる(＝1秒待ち終わる)まで、
    // 下のリセット処理は実行されない。
    await this.playSupernovaColorChange(supernovaTarget)

    // 【第7.3回で追加】
    // 演出の第二段階として、対象の星を膨張させながら色を変化させる。
    // ここも await しているので、アニメーションが終わるまで次には進まない。
    await this.playSupernovaExpansion(supernovaTarget)

    // 【第7.4回で追加】
    // 演出の第三段階として、星を白色へ変化させ、白色のまま約0.4秒静止させる。
    // 「限界状態」を表現するステップ。この関数の戻り値(Promise)が解決した時点が、
    // 次回(第7.5回)実装予定の「爆発」処理の開始地点になる想定。
    await this.playSupernovaWhiteout(supernovaTarget)

    // 【第7.5回で追加】
    // 白色になって静止していた星を、超新星爆発として宇宙から消滅させる。
    this.playSupernovaExplosion(supernovaTarget)

    // 【第7.6回で追加】
    // 画面全体を白くフラッシュさせ、白い間に既存の宇宙リセット処理を実行し、
    // 最後に白をゆっくり透明へ戻す。詳しくは playSupernovaFlashAndReset() 側のコメントを参照。
    await this.playSupernovaFlashAndReset()

    // 【第7.7回で追加】
    // 演出の締めくくりとして、「新しい宇宙が誕生しました」のメッセージを表示する。
    // 【今回追加】総カロリーを渡すことで、内部でメッセージカテゴリ(通常/特殊)を切り替える。
    await this.playSupernovaMessage(totalCalories)
  }

  /**
   * 超新星爆発の第二段階の演出:対象の星を膨張させながら、
   * あらかじめ用意した色パターンの中からランダムに選んだ1つの順で色を変化させる。
   *
   * 【なぜ色を配列(パターン)で管理するか】
   * 完全ランダムな色にせず、あらかじめ決めた並び順のパターンをいくつか用意し、
   * 発動のたびにその中から1つを選ぶことで、「毎回違う雰囲気だけど、それらしい配色」になる。
   * パターン自体はファイル先頭の SUPERNOVA_COLOR_PATTERNS にまとめてあるので、
   * 増やしたり並びを変えたいときはそこだけ直せばよい。
   *
   * 【なぜ requestAnimationFrame を使うか】
   * setTimeout を使って何回かに分けて色・大きさを変える方法もあるが、
   * それだとカクカクした動きになりやすい。
   * requestAnimationFrame は「次に画面が描画されるタイミング」で毎回呼ばれるので、
   * より滑らかなアニメーションになる。
   *
   * @param {{ mesh: THREE.Object3D|null, star: Star } | null} target - getMaxCalorieStar() の戻り値
   * @returns {Promise<void>}
   */
  playSupernovaExpansion(target) {
    if (!target || !target.mesh || !target.mesh.material || !target.star) return Promise.resolve()

    const mesh = target.mesh
    const star = target.star
    const duration = 2000 // 膨張にかける時間(ミリ秒)。約2秒。

    // 現在のスケールを基準にする(すでにカロリーに応じて大きくなっている場合があるため、
    // "1" 固定ではなく、今の mesh.scale.x を開始値として使う)
    const startScale = mesh.scale.x || 1

    // 「超巨星(最終進化段階)」の3倍のサイズまで膨張させる。
    // ※超巨星は8000kcalを超えると際限なく成長し続けるため(1000kcalごとに+5)、
    //   constants.js の固定サイズではなく、対象の星の"今の"実際のサイズを
    //   getEvolutionStageSize() で取得して使う(そうしないと、すでに大きく育った星では
    //   「3倍」のはずが今より小さくなってしまう場合があるため)。
    // mesh.scale は「初期サイズ(initialSize)を1としたときの倍率」で管理されているため、
    // 目標サイズをそのまま initialSize で割って、目標の scale 値に変換している。
    const currentEvolutionSize = star.getEvolutionStageSize()
    const endScale =
      star.initialSize > 0
        ? (currentEvolutionSize * 3) / star.initialSize
        : startScale * 3 // 万が一 initialSize が取得できない場合の保険

    // あらかじめ用意した色パターンの中から、今回はどれを使うかをランダムに選ぶ
    const colorPattern = this.pickSupernovaColorPattern()

    return new Promise((resolve) => {
      const startTime = performance.now()

      // 1フレームごとに呼ばれる関数。経過時間から progress(0〜1)を計算し、
      // その割合に応じて scale と color をその都度書き換えていく。
      const animateFrame = (now) => {
        const elapsed = now - startTime
        // progress は 0(開始直後) 〜 1(2秒経過) の間の値
        const progress = Math.min(elapsed / duration, 1)

        // 現在のスケールを、開始値〜終了値の間で少しずつ大きくしていく(線形補間)。
        // 急に大きくなるのではなく、progress が少しずつ増えるごとに滑らかに拡大する。
        const currentScale = startScale + (endScale - startScale) * progress
        mesh.scale.set(currentScale, currentScale, currentScale)

        // progress の進み具合に応じて、選んだ色パターンの中から「今表示する色」を選ぶ。
        // 例えば5色パターンなら、0〜0.2で1色目、0.2〜0.4で2色目...という具合に区切られる。
        const patternIndex = Math.min(
          Math.floor(progress * colorPattern.length),
          colorPattern.length - 1
        )
        mesh.material.color.set(colorPattern[patternIndex])

        if (progress < 1) {
          // まだ2秒経っていなければ、次のフレームでもう一度この関数を呼んでもらう
          requestAnimationFrame(animateFrame)
        } else {
          // 念のため、最後は必ずパターン配列の最後の色(必ず赤になるよう用意している)で終わらせる
          mesh.material.color.set(colorPattern[colorPattern.length - 1])
          resolve()
        }
      }

      requestAnimationFrame(animateFrame)
    })
  }

  /**
   * 超新星爆発の締めくくりの演出:通常イベント用メッセージの中からランダムに1つを選び、
   * 画面中央へ表示して、約3秒後にゆっくりフェードアウトさせる。
   *
   * 【なぜ最後にメッセージを表示するのか】
   * ここまでの演出(爆発 → フラッシュ → リセット)だけで終わらせてしまうと、
   * ユーザーには「データが消えてしまった」というマイナスな印象だけが
   * 残りかねない。最後に前向きなメッセージを見せることで、
   * これは「終わり」ではなく「新しい宇宙の始まり」であることを伝える。
   *
   * 【なぜフェードアウトするのか】
   * メッセージを急に消すと、ここでも唐突な印象になってしまう。
   * ゆっくり消えていくことで、超新星爆発から続く一連の演出全体を
   * 自然な形で締めくくることができる。
   *
   * 【なぜ通常操作へ戻すのか(妨げないようにしているか)】
   * この演出はあくまで見た目の締めくくりであり、
   * 星の登録・編集・削除などの通常操作を止めてしまってはいけない。
   * メッセージ要素には CSS 側で pointer-events: none を指定しているため、
   * メッセージが表示されている間もクリックはそのまま裏側の要素へ届く。
   * つまり、最初から通常操作を妨げていないので、
   * 「操作を元に戻す」ための特別な処理は不要になっている。
   *
   * 【なぜ表示処理(表示→3秒待機→フェードアウト)を共通化しているのか】
   * NORMAL でも OVER_CALORIE でも、「画面中央に表示して、少し待って、
   * ゆっくり消す」という見た目の演出そのものは同じでよく、変わるのは
   * 「どの文言を表示するか」だけ。共通化しておくことで、
   * 表示アニメーションの調整をしたくなったときも、直す場所が1箇所で済む。
   *
   * @param {number} totalCalories - メッセージカテゴリの判定に使う総カロリー
   * @returns {Promise<void>}
   */
  async playSupernovaMessage(totalCalories = 0) {
    const messageElement = document.getElementById('supernovaMessage')
    if (!messageElement) return

    const holdDuration = 3000 // メッセージを表示しておく時間(ミリ秒)。約3秒。
    const fadeOutDuration = 1000 // ゆっくり消えるまでの時間(ミリ秒)。

    // 【今回追加】総カロリーから「今回使うメッセージカテゴリ」を決め、
    // そのカテゴリの中からランダムに1つメッセージを選ぶ。
    // カテゴリを決める処理・ランダムに選ぶ処理は、それぞれ別の関数に分けてあるので、
    // この関数自体は「カテゴリを決めて、選んで、表示する」という流れだけを見ればよい。
    const category = this.resolveSupernovaMessageCategory(totalCalories)
    const message = this.pickSupernovaMessage(category)

    // メッセージ内の改行(\n)は、そのまま innerHTML に入れても画面上では
    // 改行されないため、HTMLの改行タグ(<br>)に置き換えてから挿入する。
    messageElement.innerHTML = `<p>${message.replace(/\n/g, '<br>')}</p>`

    // まずは transition 無しで、メッセージをすぐ表示する
    messageElement.style.transition = 'none'
    messageElement.style.opacity = '1'

    // ブラウザが実際に「表示された状態」を描画するまで、1フレーム分だけ待つ
    await new Promise((resolve) => requestAnimationFrame(resolve))

    // 約3秒間、そのまま表示し続ける
    await this.wait(holdDuration)

    // ここから transition を有効にして、ゆっくりフェードアウトさせる
    messageElement.style.transition = `opacity ${fadeOutDuration}ms ease`
    messageElement.style.opacity = '0'

    // フェードアウトが終わるまで待ってから、この関数を終える
    await this.wait(fadeOutDuration)
  }

  /**
   * 現在の状況(総カロリー)から、今回使うメッセージカテゴリ名を決めて返す。
   *
   * 【なぜカテゴリを切り替えるだけで済む作りにしているのか】
   * SUPERNOVA_MESSAGE_CATEGORY_RULES(ファイル先頭で定義)を上から順に確認し、
   * 条件(condition)が true になった最初のルールの category を返すだけ、
   * というシンプルな処理にしている。
   * 「条件ごとに違う表示処理を書く」のではなく「条件ごとに使う配列(カテゴリ)を
   * 切り替えるだけ」にしておくことで、表示処理(playSupernovaMessage)側は
   * 一切変更せずに済み、将来カテゴリが増えても影響範囲が小さく保てる。
   *
   * @param {number} totalCalories - 判定に使う総カロリー
   * @returns {string} 使用するメッセージカテゴリ名(例: 'NORMAL', 'OVER_CALORIE')
   */
  resolveSupernovaMessageCategory(totalCalories) {
    const matchedRule = SUPERNOVA_MESSAGE_CATEGORY_RULES.find((rule) => rule.condition(totalCalories))
    return matchedRule ? matchedRule.category : DEFAULT_SUPERNOVA_MESSAGE_CATEGORY
  }

  /**
   * SUPERNOVA_MESSAGES の指定したカテゴリの中から、メッセージを1つランダムに選んで返す。
   *
   * 【ランダム選択の仕組み】
   * Math.random() は「0以上1未満」のランダムな小数を返す関数。
   * それに配列の要素数(messages.length)を掛けて Math.floor()(小数点以下切り捨て)すると、
   * 0 〜 (要素数-1) の範囲のランダムな添字(インデックス)が作れる。
   * 例:メッセージが9個あるなら、0〜8のどれかがランダムに選ばれ、
   * それぞれが選ばれる確率はすべて均等(完全な均等ランダム)になる。
   *
   * @param {string} category - SUPERNOVA_MESSAGES のキー(例: 'NORMAL')
   * @returns {string} 選ばれたメッセージ。該当カテゴリが無い/空の場合は空文字を返す
   */
  pickSupernovaMessage(category) {
    const messages = SUPERNOVA_MESSAGES[category]
    if (!messages || messages.length === 0) return ''

    const randomIndex = Math.floor(Math.random() * messages.length)
    return messages[randomIndex]
  }

  /**
   * 超新星爆発の最終段階の演出:画面全体を一瞬白くフラッシュさせ、
   * その「白くなっている間」に既存の宇宙リセット処理を実行し、
   * その後ゆっくりと白を透明に戻していく。
   *
   * 【なぜ画面が白い間にリセットするのか】
   * 星が消えた直後、そのまま何もない宇宙に切り替わる様子を
   * そのまま見せてしまうと、切り替わりが唐突に見えてしまう。
   * 画面が真っ白になっている間にリセットを済ませておけば、
   * 白いフラッシュの裏で「宇宙の入れ替え」が完了し、
   * フラッシュが消えたときには自然に新しい宇宙が見える、という流れになる。
   *
   * 【なぜフェードアウトするのか】
   * 白色から通常画面へ一気に切り替えると、ここでも唐突な印象になってしまう。
   * 「白 → 少しずつ透明 → 通常画面」と自然に戻すことで、
   * 超新星爆発の一連の演出を違和感のない形で締めくくっている。
   *
   * 【なぜ既存の triggerSupernova() をそのまま使うのか】
   * 「食事履歴削除・星データ初期化・localStorage更新・宇宙再生成」は
   * すでに triggerSupernova() で実装済みのため、同じ処理を複製せず、
   * ここから呼び出すだけにしている。
   *
   * @returns {Promise<void>}
   */
  async playSupernovaFlashAndReset() {
    const flashElement = document.getElementById('supernovaFlash')
    const fadeOutDuration = 600 // 白がゆっくり消えるまでの時間(ミリ秒)。約0.6秒。

    // フラッシュ用の要素が見つからない場合でも、
    // 宇宙リセットだけは必ず実行されるようにしておく(既存機能を止めないため)。
    if (!flashElement) {
      this.triggerSupernova()
      return
    }

    // 【1】まずは transition(徐々に変化させる指定)を一旦外し、一瞬で真っ白にする。
    //     ここで transition を付けたままにすると、白くなる瞬間もゆっくりになってしまい、
    //     「一瞬で真っ白」という指示に合わなくなるため。
    flashElement.style.transition = 'none'
    flashElement.style.opacity = '1'

    // ブラウザが実際に「白色」を画面へ描画するまで、1フレーム分だけ待つ。
    // (待たずに次の処理へ進むと、白い画面が一瞬も表示されないまま
    //  リセットが終わってしまう可能性があるため)
    await new Promise((resolve) => requestAnimationFrame(resolve))

    // 【2】画面が白い間に、既存の宇宙リセット処理を実行する。
    //     食事履歴削除・星データ初期化・localStorage更新・宇宙再生成は、
    //     すべて triggerSupernova() の中でこれまで通り行われる(処理内容は無変更)。
    this.triggerSupernova()

    // 【3】ここから transition を有効にして、白色をゆっくり透明へ戻していく。
    flashElement.style.transition = `opacity ${fadeOutDuration}ms ease`
    flashElement.style.opacity = '0'

    // フェードアウトが終わるまで待ってから、この関数を終える。
    await this.wait(fadeOutDuration)
  }

  /**
   * 超新星爆発の第四段階の演出:白色になって静止していた星を、
   * 超新星爆発として宇宙(Scene)から消滅させる。
   *
   * 【なぜ Scene から削除するのか】
   * 星が「爆発して無くなった」ことを見た目でも正しく表現するため。
   * mesh をそのまま残して色やサイズだけ変えても、シーン上には星が
   * 表示され続けてしまい、「消滅した」ようには見えない。
   * また、ここで確実に取り除いておくことで、次回(第7.6回)実装予定の
   * 宇宙リセット処理と二重に削除しようとして食い違う、といった問題も防げる。
   *
   * 【なぜ既存の removeStarFromScene() をそのまま再利用しているか】
   * 「星をシーンから消す」処理自体は、通常の削除メニューや宇宙リセットで
   * すでに使っている removeStarFromScene()(mesh・軌道線をシーンから外し、
   * starManager からも取り除く処理)とまったく同じ内容でよいため、
   * 同じ処理を2箇所に書かず、既存の関数をそのまま呼び出している。
   *
   * 【今後パーティクルなどを追加しやすくしている理由】
   * この関数を「爆発の入り口」として独立させておくことで、
   * 次回以降「爆発の瞬間にパーティクルを表示する」といった演出を
   * 追加したくなったとき、この関数の中(削除する直前・直後)に
   * 処理を足すだけで対応できるようにしている。
   *
   * @param {{ star: Star, mesh: THREE.Object3D|null } | null} target - getMaxCalorieStar() の戻り値
   */
  playSupernovaExplosion(target) {
    if (!target || !target.star) return

    // ここに、今後(第7.6回以降)パーティクルなどの爆発エフェクトを
    // 追加していく想定(削除の直前 or 直後に処理を足すだけでよい構成)。

    // 対象の星だけをシーンから取り除く(他の星には一切触れない)。
    this.removeStarFromScene(target.star)

    // 削除した星が「現在選択中の星」だった場合、詳細パネルが
    // すでに存在しない星の情報を表示し続けてしまわないよう、初期表示に戻しておく。
    if (this.selectedStar === target.star) {
      this.selectedStar = null
      this.setInfoPanelDefault()
    }
  }

  /**
   * 超新星爆発の第三段階の演出:星の色を少しずつ白色へ変化させ、
   * 完全な白色になったら、その状態のまま約0.4秒間静止させる。
   *
   * 【なぜ白色にするのか】
   * 星がこれ以上ないほどエネルギーを溜め込み、
   * 「あらゆる色を飲み込んで真っ白に輝く=限界状態」であることを
   * 表現するため(恒星は温度が上がるほど白っぽく見える、というイメージ)。
   *
   * 【なぜ一瞬(0.4秒)停止するのか】
   * 白くなった直後にすぐ次の処理(爆発)へ進んでしまうと、
   * 「限界状態になった」ことにユーザーが気づく間もなく終わってしまう。
   * あえて何も起きない時間を作ることで、「これから何かが起きる」という
   * 緊張感・タメを演出している。
   *
   * 【なぜこの処理を独立した関数(別ステップ)にしているのか】
   * 次回(第7.5回)実装予定の「爆発」処理は、この
   * 「星が白色になって静止している状態」をスタート地点として始まる予定。
   * この関数を独立させておくことで、次回は
   * 「playSupernovaWhiteout() の後に、爆発処理を追加する」だけで済むようにしている。
   *
   * @param {{ mesh: THREE.Object3D|null } | null} target - getMaxCalorieStar() の戻り値
   * @returns {Promise<void>} 白色になって静止し終わったときに解決される
   */
  playSupernovaWhiteout(target) {
    if (!target || !target.mesh || !target.mesh.material) return Promise.resolve()

    const mesh = target.mesh
    const fadeDuration = 400 // 白色へ変化させる時間(ミリ秒)。急に切り替えず、少しかけて自然に見せる。
    const holdDuration = 400 // 完全な白色になったあと、静止させる時間(ミリ秒)。約0.4秒。

    // フェード開始時点の色(色変化パターンの最後の色=赤)を基準に、そこから白へ向かって変化させる
    const startColor = mesh.material.color.clone()
    const endColor = new THREE.Color(SUPERNOVA_COLORS.WHITE)

    return new Promise((resolve) => {
      const startTime = performance.now()

      // 白へ変化させるアニメーション部分(1フレームごとに呼ばれる)
      const fadeFrame = (now) => {
        const elapsed = now - startTime
        const progress = Math.min(elapsed / fadeDuration, 1)

        // THREE.Color の lerp() は「2つの色の間を progress の割合で混ぜた色」を作ってくれる。
        // startColor をコピーしてから lerp することで、元の色を直接書き換えないようにしている。
        mesh.material.color.copy(startColor).lerp(endColor, progress)

        // サイズ(scale)や位置(position)にはここでは触れていないので、
        // 膨張後の最大サイズ・現在位置のまま維持される。

        if (progress < 1) {
          requestAnimationFrame(fadeFrame)
          return
        }

        // 誤差が残らないよう、最後は必ず完全な白色にしておく
        mesh.material.color.set(SUPERNOVA_COLORS.WHITE)

        // 白色になった状態のまま、約0.4秒間そのまま静止させる。
        // 既存の wait() ヘルパーを再利用し、待ち終わったら resolve() してこの関数を終える。
        this.wait(holdDuration).then(resolve)
      }

      requestAnimationFrame(fadeFrame)
    })
  }

  /**
   * SUPERNOVA_COLOR_PATTERNS の中から、ランダムに1つのパターンを選んで返す。
   * 完全にランダムな色を都度組み立てるのではなく、
   * あらかじめ用意したパターンの中から選ぶだけなので、毎回それらしい配色になる。
   *
   * @returns {number[]} 選ばれた色パターン(16進カラーコードの配列)
   */
  pickSupernovaColorPattern() {
    const randomIndex = Math.floor(Math.random() * SUPERNOVA_COLOR_PATTERNS.length)
    return SUPERNOVA_COLOR_PATTERNS[randomIndex]
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
