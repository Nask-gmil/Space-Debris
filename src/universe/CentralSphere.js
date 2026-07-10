import * as THREE from 'three'

export class CentralSphere {
  constructor(radius = 8, color = 0x3a7bd5, emissiveColor = 0x000000, emissiveIntensity = 0) {
    this.radius = radius
    this.color = color
    this.emissiveColor = emissiveColor
    this.emissiveIntensity = emissiveIntensity
    this.mesh = this.createMesh()
  }

  createMesh() {
    const geometry = new THREE.SphereGeometry(this.radius, 32, 32)

    const material = new THREE.MeshStandardMaterial({
      color: this.color,
      roughness: 0.6,
      metalness: 0.1,
      emissive: this.emissiveColor,
      emissiveIntensity: this.emissiveIntensity,
    })

    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.set(0, 0, 0)
    return mesh
  }

  getMesh() {
    return this.mesh
  }

  // 将来のための更新メソッド
  update(deltaTime) {
    // 例えばゆっくり自転させるなど
    // this.mesh.rotation.y += 0.01 * deltaTime
  }
}
