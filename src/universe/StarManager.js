import { Star } from './Star.js'
import { Constants } from '../utils/constants.js'

export class StarManager {
  constructor() {
    this.stars = []
    this.starMap = new Map() // ID ベースのマップ（高速検索用）
  }

  // 星を生成
  generateStars(count = Constants.UNIVERSE.STAR_COUNT) {
    const stars = []
    for (let i = 0; i < count; i++) {
      const star = this.createRandomStar(i)
      stars.push(star)
      this.stars.push(star)
      this.starMap.set(i, star)
    }
    return stars
  }

  // ランダムな星を生成
  createRandomStar(id) {
    const { STAR_SIZE_MIN, STAR_SIZE_MAX, STAR_DISTANCE_MIN, STAR_DISTANCE_MAX } = Constants.UNIVERSE

    // ランダム位置（球面上）
    const distance = Math.random() * (STAR_DISTANCE_MAX - STAR_DISTANCE_MIN) + STAR_DISTANCE_MIN
    const theta = Math.random() * Math.PI * 2
    const phi = Math.random() * Math.PI * 2

    const x = distance * Math.sin(phi) * Math.cos(theta)
    const y = distance * Math.sin(phi) * Math.sin(theta)
    const z = distance * Math.cos(phi)

    // ランダムサイズ
    const size = Math.random() * (STAR_SIZE_MAX - STAR_SIZE_MIN) + STAR_SIZE_MIN

    // ランダムな色（星のバリエーション）
    const colors = [0xffffff, 0xffa500, 0x87ceeb, 0xff6b6b, 0xffff00]
    const color = colors[Math.floor(Math.random() * colors.length)]

    return new Star(x, y, z, size, color)
  }

  // すべての星を取得
  getAllStars() {
    return this.stars
  }

  // 特定の星を ID から取得
  getStarById(id) {
    return this.starMap.get(id)
  }

  // メッシュから Star オブジェクトを取得（クリック判定で使用）
  getStarByMesh(mesh) {
    for (const star of this.stars) {
      if (star && star.getMesh && star.getMesh() === mesh) return star
    }
    return null
  }

  // 星を追加
  addStar(star) {
    this.stars.push(star)
    const id = this.stars.length - 1
    star.id = id
    this.starMap.set(id, star)
    return id
  }

  // Star インスタンスから ID を取得します。
  getStarId(star) {
    for (const [id, item] of this.starMap.entries()) {
      if (item === star) {
        return id
      }
    }
    return null
  }

  // Star インスタンスを削除します。
  removeStarByInstance(star) {
    const id = this.getStarId(star)
    if (id !== null) {
      this.removeStar(id)
    }
  }

  // 名前から星を検索（将来的に複数同名を返す可能性あり）
  getStarsByName(name) {
    return this.stars.filter((s) => (s.name || s.data.name) === name)
  }

  // 星を削除
  removeStar(id) {
    const star = this.starMap.get(id)
    if (star) {
      const index = this.stars.indexOf(star)
      if (index > -1) {
        this.stars.splice(index, 1)
      }
      this.starMap.delete(id)
    }
  }

  // 全ての星を更新（アニメーション用）
  updateAll(deltaTime) {
    this.stars.forEach((star) => {
      star.evolve(deltaTime)
      if (typeof star.animateOrbit === 'function') {
        star.animateOrbit(deltaTime)
      }
    })
  }

  /**
   * 特定の星の見た目を更新する
   * 
   * 【初心者向け解説】
   * 星のカロリーが変わったとき、この関数を呼んで見た目を更新します。
   * 内部的に Star の updateAppearance() メソッドを呼んで、
   * mesh の色と発光を自動的に変更します。
   * 
   * @param {number} id - 星の ID
   */
  updateStarAppearance(id) {
    const star = this.starMap.get(id)
    if (star && star.getMesh && star.updateAppearance) {
      star.updateAppearance(star.getMesh())
    }
  }

  // 星の総数を取得
  getCount() {
    return this.stars.length
  }
}
