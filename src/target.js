import * as THREE from "three";

export class Target extends THREE.Mesh {
  constructor(hitPoints) {
    super();
    this.points = hitPoints;
    this.hits = hitPoints;
  }

  hit(damage = 1) {
    this.hits -= damage;
    return this.hits > 0;
  }
}
