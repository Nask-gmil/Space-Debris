import * as THREE from 'three'
import { Constants } from '../utils/constants.js'

// シェーダで個別サイズとソフトなポイント描画を行う実装
export class StarField {
  constructor(count = Constants.UNIVERSE.STAR_COUNT) {
    this.count = count
    this.points = null
    this.createPoints()
  }

  createPoints() {
    const positions = new Float32Array(this.count * 3)
    const colors = new Float32Array(this.count * 3)
    const sizes = new Float32Array(this.count)

    const baseColor = new THREE.Color(0xffffff)
    const { STAR_DISTANCE_MIN, STAR_DISTANCE_MAX, STAR_SIZE_MIN, STAR_SIZE_MAX } = Constants.UNIVERSE

    for (let i = 0; i < this.count; i++) {
      // ランダムな球状分布（奥行きを持たせる）
      const distance = Math.random() * (STAR_DISTANCE_MAX - STAR_DISTANCE_MIN) + STAR_DISTANCE_MIN
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      const x = distance * Math.sin(phi) * Math.cos(theta)
      const y = distance * Math.sin(phi) * Math.sin(theta)
      const z = distance * Math.cos(phi)

      const idx3 = i * 3
      positions[idx3] = x
      positions[idx3 + 1] = y
      positions[idx3 + 2] = z

      // 色のばらつき
      const v = 0.85 + Math.random() * 0.3
      colors[idx3] = baseColor.r * v
      colors[idx3 + 1] = baseColor.g * v
      colors[idx3 + 2] = baseColor.b * v

      // 個別サイズ（奥行きとランダムさを混ぜる）
      const size = Math.random() * (STAR_SIZE_MAX - STAR_SIZE_MIN) + STAR_SIZE_MIN
      sizes[i] = size * (1.0 + (distance - STAR_DISTANCE_MIN) / (STAR_DISTANCE_MAX - STAR_DISTANCE_MIN) * 0.5)
    }

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))
    geometry.setAttribute('aSize', new THREE.Float32BufferAttribute(sizes, 1))
    geometry.computeBoundingSphere()

    const vertexShader = `
      attribute float aSize;
      varying vec3 vColor;
      uniform float uPixelRatio;
      void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        // 視点距離に応じたサイズ調整（透視補正）
        float size = aSize * (200.0 / -mvPosition.z);
        gl_PointSize = size * uPixelRatio;
        gl_Position = projectionMatrix * mvPosition;
      }
    `

    const fragmentShader = `
      varying vec3 vColor;
      uniform float uOpacity;
      void main() {
        // 円形のポイント（ソフトエッジ）
        vec2 coord = gl_PointCoord - vec2(0.5);
        float dist = length(coord);
        float alpha = smoothstep(0.5, 0.0, dist);
        gl_FragColor = vec4(vColor, alpha * uOpacity);
      }
    `

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uPixelRatio: { value: window.devicePixelRatio || 1 },
        uOpacity: { value: 0.95 },
      },
      vertexShader,
      fragmentShader,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      transparent: true,
      vertexColors: true,
    })

    this.points = new THREE.Points(geometry, material)
    this.points.frustumCulled = false
  }

  getObject() {
    return this.points
  }

  update(deltaTime) {
    // 将来的に動きを付ける場合に使用
  }
}
