import * as THREE from "three";

export class Projectile extends THREE.Mesh {
  constructor() {
    super();
    this.geometry = new THREE.CapsuleGeometry(0.05, 0.2);
    this.material = new THREE.MeshBasicMaterial({ color: 0x333333 });
    this.geometry.computeBoundingBox();
  }
}
