import * as THREE from 'three'
import { Constants } from '../utils/constants.js'

export class Star {
  constructor(x, y, z, size, color = 0xffffff, name = null, calories = 0, genre = null) {
    const geometry = new THREE.SphereGeometry(size, 8, 8)
    const material = new THREE.MeshBasicMaterial({ color })
    this.mesh = new THREE.Mesh(geometry, material)
    this.mesh.position.set(x, y, z)

    // 名前を含む星のメタデータ
    this.name = name
    this.initialSize = 0 // 初期サイズを記録（Universe で setInitialSize() で設定）
    this.orbitRadius = 0
    this.targetOrbitRadius = 0
    this.orbitAngle = 0
    this.orbitSpeed = 0
    this.rotationSpeed = 0
    this.orbitLine = null
    this.data = {
      name,
      x,
      y,
      z,
      size,
      color,
      calories,
      genre,
      orbitRadius: 0,
      orbitAngle: 0,
      orbitSpeed: 0,
      rotationSpeed: 0,
      age: 0,
      type: 'main_sequence', // 将来の星の進化に対応
      foods: [],
    }
  }

  // 外部で作成した Mesh を割り当てる場合に使用
  setMesh(mesh) {
    if (mesh) {
      this.mesh = mesh
    }
  }

  getMesh() {
    return this.mesh
  }

  getData() {
    return this.data
  }

  /**
   * 永続化用のデータ構造を返します。
   * localStorage や将来のデータベース保存に使います。
   */
  getSerializableData() {
    return {
      ...this.data,
      orbitRadius: this.orbitRadius,
      targetOrbitRadius: this.targetOrbitRadius,
      orbitAngle: this.orbitAngle,
      orbitSpeed: this.orbitSpeed,
      rotationSpeed: this.rotationSpeed,
    }
  }

  /**
   * 軌道線をこの星に紐付ける
   *
   * 将来の公転アニメーションや表示切り替えのために、
   * 星オブジェクトとその軌道線を一緒に保持します。
   *
   * @param {THREE.LineLoop} orbitLine
   */
  setOrbitLine(orbitLine) {
    this.orbitLine = orbitLine
    if (this.data) {
      this.data.orbitLine = orbitLine
    }
  }

  updateOrbitPosition() {
    if (!this.mesh) return

    const x = Math.cos(this.orbitAngle) * this.orbitRadius
    const z = Math.sin(this.orbitAngle) * this.orbitRadius
    this.mesh.position.set(x, this.mesh.position.y, z)
    if (this.data) {
      this.data.x = x
      this.data.z = z
    }
  }

  updateOrbitLine() {
    if (!this.orbitLine) return

    const points = []
    const segments = 128
    for (let i = 0; i <= segments; i += 1) {
      const theta = (i / segments) * Math.PI * 2
      points.push(new THREE.Vector3(Math.cos(theta) * this.orbitRadius, 0, Math.sin(theta) * this.orbitRadius))
    }

    this.orbitLine.geometry.setFromPoints(points)
    if (this.orbitLine.geometry.attributes.position) {
      this.orbitLine.geometry.attributes.position.needsUpdate = true
    }
  }

  animateOrbit(deltaTime) {
    if (Math.abs(this.targetOrbitRadius - this.orbitRadius) < 0.01) {
      return
    }

    const t = Math.min(deltaTime * 2.5, 1)
    this.orbitRadius = THREE.MathUtils.lerp(this.orbitRadius, this.targetOrbitRadius, t)
    if (this.data) {
      this.data.orbitRadius = this.orbitRadius
    }
    this.updateOrbitPosition()
    this.updateOrbitLine()
  }

  setOrbitRadius(radius) {
    this.orbitRadius = radius
    this.targetOrbitRadius = radius
    if (this.data) {
      this.data.orbitRadius = radius
    }
    this.updateOrbitPosition()
    this.updateOrbitLine()
  }

  setTargetOrbitRadius(radius) {
    this.targetOrbitRadius = radius
  }

  // 将来：星の詳細情報を取得
  getDetails() {
    return {
      position: this.data,
      type: this.data.type,
      age: this.data.age,
      size: this.data.size,
    }
  }

  /**
   * カロリー値から進化段階を判定する関数
   * 
   * 【初心者向け解説】
   * この関数は、Constants.EVOLUTION_STAGES 配列を使って
   * カロリー値を進化段階に変換します。
   * 
   * 例えば EVOLUTION_STAGES は以下の構造：
   * [
   *   { threshold: 300, stage: '小惑星' },
   *   { threshold: 800, stage: '微惑星' },
   *   ...
   * ]
   * 
   * for ループで配列を1つずつ走査して、
   * 最初に「カロリー <= threshold」となった stage を返します。
   * 
   * こうすることで、constants.js を変更するだけで
   * ルールを簡単に調整できます！
   * 
   * @returns {string} 進化段階（微惑星、小惑星、原始惑星、地球型惑星、巨大惑星、褐色矮星、赤色矮星、黄色矮星、赤色巨星、超巨星）
   */
  getEvolutionStage() {
    const calories = this.data.calories

    // constants.js に定義された進化段階ルールを走査
    for (const rule of Constants.EVOLUTION_STAGES) {
      if (calories <= rule.threshold) {
        return rule.stage
      }
    }

    // 念のため、全てに当てはまらなかった場合は最後の段階を返す
    return Constants.EVOLUTION_STAGES[Constants.EVOLUTION_STAGES.length - 1].stage
  }

  /**
   * 進化段階に基づいて、SphereGeometry の半径を取得する
   * 
   * 【初心者向け解説】
   * 進化段階ごとに定義されたサイズ（size）を constants.js から取得します。
   * 小惑星は小さく、超巨星は大きくなります。
   * 
   * この方式により、constants.js の size 値を変更するだけで
   * すべての星のサイズが自動的に変わります。
   * 
   * ただし最終段階「超巨星」だけは例外で、上限なく育ち続けます。
   * 一つ前の段階（赤色巨星）の閾値を超えた分について、
   * constants.js の FINAL_STAGE_GROWTH（1000kcalごとに+5）を
   * 使って追加サイズを計算し、基準サイズに足します。
   * 
   * @returns {number} SphereGeometry の半径
   */
  getEvolutionStageSize() {
    const calories = this.data.calories
    const stages = Constants.EVOLUTION_STAGES

    // constants.js に定義された進化段階ルールを走査してサイズを取得
    for (let i = 0; i < stages.length; i++) {
      const rule = stages[i]
      if (calories <= rule.threshold) {
        // 最終段階（threshold: Infinity）なら、際限のない成長を計算する
        if (rule.threshold === Infinity) {
          return this.calculateFinalStageSize(calories, stages, i)
        }
        return rule.size
      }
    }

    // 念のため、全てに当てはまらなかった場合は最終段階の成長込みサイズを返す
    return this.calculateFinalStageSize(calories, stages, stages.length - 1)
  }

  /**
   * 最終進化段階（超巨星）のサイズを計算する
   * 
   * 【初心者向け解説】
   * 「一つ前の段階（赤色巨星）の閾値を何kcal超えているか」を求め、
   * FINAL_STAGE_GROWTH.calorieStep（1000kcal）で割った数（＝何段階分成長したか）に
   * FINAL_STAGE_GROWTH.sizeStep（5）を掛けて、基準サイズに足します。
   * 
   * 例: 赤色巨星の閾値が8000、基準サイズが17の場合
   * 　calories = 8001 → 8000kcalちょうどなので +0 → サイズ17
   * 　calories = 9000 → 1000kcal超過 → +5 → サイズ22
   * 　calories = 10000 → 2000kcal超過 → +10 → サイズ27
   * 
   * @param {number} calories - 現在のカロリー
   * @param {Array} stages - Constants.EVOLUTION_STAGES
   * @param {number} finalIndex - 最終段階（超巨星）のインデックス
   * @returns {number} 成長込みのサイズ
   */
  calculateFinalStageSize(calories, stages, finalIndex) {
    const finalStage = stages[finalIndex]
    // 超巨星になる直前の段階（＝赤色巨星、一つ前の要素）の閾値を「成長の起点」にする
    const previousThreshold = finalIndex > 0 ? stages[finalIndex - 1].threshold : 0
    const growth = Constants.FINAL_STAGE_GROWTH

    const excessCalories = Math.max(0, calories - previousThreshold)
    const growthSteps = Math.floor(excessCalories / growth.calorieStep)

    return finalStage.size + growthSteps * growth.sizeStep
  }

  /**
   * 進化段階に基づいて、SphereGeometry の色を取得する
   * 
   * 【初心者向け解説】
   * 進化段階ごとに定義された色（color）を constants.js から取得します。
   * 小惑星は灰色、超巨星は赤になります。
   * 
   * この方式により、constants.js の color 値を変更するだけで
   * すべての星の色が自動的に変わります。
   * 
   * @returns {number} 16進数カラーコード (例: 0xFF0000 は赤)
   */
  getEvolutionStageColor() {
    const calories = this.data.calories

    // constants.js に定義された進化段階ルールを走査して色を取得
    for (const rule of Constants.EVOLUTION_STAGES) {
      if (calories <= rule.threshold) {
        return rule.color
      }
    }

    // 念のため、全てに当てはまらなかった場合は最後の色を返す
    return Constants.EVOLUTION_STAGES[Constants.EVOLUTION_STAGES.length - 1].color
  }

  /**
   * 進化段階に基づいて、発光（emissive）の強度を取得する
   * 
   * 【初心者向け解説】
   * 「自ら光を放つ天体かどうか」は、constants.js 側の
   * 各進化段階に付けた emissive: true / false フラグで判定します。
   * （褐色矮星以降が true。閾値の数値をここに直接書かないことで、
   *  今後 constants.js の段階数や閾値を調整しても、この関数は直さずに済みます）
   * 
   * 重くならないように、emissive: true の段階だけに発光効果を適用します。
   * それ以外の段階は emissiveIntensity = 0 で発光なし。
   * 
   * @returns {object} { color（16進カラーコード）, intensity（0～1の数値） }
   */
  getEvolutionStageEmissive() {
    const calories = this.data.calories

    // constants.js に定義された進化段階ルールを走査
    for (const rule of Constants.EVOLUTION_STAGES) {
      if (calories <= rule.threshold) {
        // emissive: true の段階のみ発光させる
        if (rule.emissive) {
          return { color: rule.color, intensity: 0.3 }
        } else {
          return { color: 0x000000, intensity: 0 }
        }
      }
    }

    // 念のため、全てに当てはまらなかった場合は最後の段階をチェック
    const lastRule = Constants.EVOLUTION_STAGES[Constants.EVOLUTION_STAGES.length - 1]
    if (lastRule.emissive) {
      return { color: lastRule.color, intensity: 0.3 }
    }
    return { color: 0x000000, intensity: 0 }
  }

  // 将来：星の進化を適用
  evolve(deltaTime) {
    this.data.age += deltaTime
    // 進化ロジックはここに実装予定
  }

  /**
   * 初期サイズを記録する（Universe 初期化時に呼ばれる）
   * 
   * 【初心者向け解説】
   * Star が作成されたときの初期サイズを記録します。
   * これは後で scale 計算をするときに使います。
   * 
   * @param {number} size - 初期サイズ（evolution stage size）
   */
  setInitialSize(size) {
    this.initialSize = size
  }

  /**
   * カロリーを変更する
   * 
   * 【初心者向け解説】
   * この関数でカロリーを変更すると、進化段階が変わります。
   * ただし、見た目を更新するには updateAppearance() を呼ぶ必要があります。
   * 
   * @param {number} newCalories - 新しいカロリー値
   */
  setCalories(newCalories) {
    this.data.calories = newCalories
  }

  createFoodEntryId() {
    // 一意なIDを返します。将来、このIDで編集・削除・検索ができます。
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
      return crypto.randomUUID()
    }
    return `food-${Date.now()}-${Math.floor(Math.random() * 1000000)}`
  }

  addFoodEntry(foodName, calories, storeName = '') {
    const entry = {
      id: this.createFoodEntryId(),
      name: foodName,
      calories,
      storeName,
      registeredAt: new Date().toISOString(),
    }

    this.data.foods.push(entry)
    return entry
  }

  getFoods() {
    return this.data.foods
  }

  /**
   * 現在の foods 配列から合計カロリーを再計算し、星の合計カロリーに反映します。
   * 削除や編集後に履歴から再計算する設計にすることで、
   * 誤差や不整合を避けられます。
   */
  recalculateCaloriesFromFoods() {
    if (!Array.isArray(this.data.foods)) {
      this.data.calories = 0
      return 0
    }

    const totalCalories = this.data.foods.reduce((sum, entry) => {
      return sum + Number(entry.calories || 0)
    }, 0)

    this.data.calories = totalCalories
    return totalCalories
  }

  /**
   * mesh の見た目を更新する（色・発光・サイズ）
   * 
   * 【初心者向け解説】
   * カロリーが変わったとき、mesh の色・発光・サイズをすべて更新します。
   * ジオメトリを再生成せず、scale を変更することで高速に対応します。
   * 
   * マテリアル（material）のプロパティを変更して即座に反映します。
   * 
   * @param {THREE.Mesh} mesh - 更新する mesh オブジェクト
   */
  updateAppearance(mesh) {
    if (!mesh || !mesh.material) return

    // 新しい色を取得して適用
    const newColor = this.getEvolutionStageColor()
    mesh.material.color.setHex(newColor)

    // 新しい発光設定を取得して適用
    const emissive = this.getEvolutionStageEmissive()
    if (mesh.material.emissive) {
      mesh.material.emissive.setHex(emissive.color)
      mesh.material.emissiveIntensity = emissive.intensity
    }

    // 🆕 サイズを更新（scale で対応）
    if (this.initialSize > 0) {
      const newSize = this.getEvolutionStageSize()
      const scaleFactor = newSize / this.initialSize
      mesh.scale.set(scaleFactor, scaleFactor, scaleFactor)
    }

    // マテリアルが更新されたことを Three.js に通知
    mesh.material.needsUpdate = true
  }
}
