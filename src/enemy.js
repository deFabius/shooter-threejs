import * as THREE from "three";
import { Target } from "./target";

export class Enemy extends Target {
  constructor(num) {
    super(11 - num);
    const size = 0.7 + 3 / num;
    this.geometry = new THREE.BoxGeometry(size, size, size);
    this.material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
  }

  hit() {
    const scaleRatio = this.hits / this.points;
    this.scale.set(scaleRatio, scaleRatio, scaleRatio);
    return super.hit();
  }
}
