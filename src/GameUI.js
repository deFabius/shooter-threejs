import * as THREE from "three";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";

export class GameUI extends THREE.Mesh {
  constructor(font) {
    super();
    this.font = font;
    this.score = 0;
    this.dps = 0;
    this.pointsMesh;
    this.dpsMesh;

    this.createText();
  }

  createText() {
    const textGeometry = new TextGeometry(this.score.toString(), {
      font: this.font,
      size: 2,
      depth: 0.2,
    });
    const textMaterial = new THREE.MeshBasicMaterial({ color: 0x8bc50c });
    textGeometry.computeBoundingBox();
    this.pointsMesh = new THREE.Mesh(textGeometry, textMaterial);
    this.pointsMesh.position.x = -6 - textGeometry.boundingBox.max.x;
    this.pointsMesh.rotation.x = Math.PI / 3;
    this.pointsMesh.rotation.y = Math.PI / 5;
    this.add(this.pointsMesh);

    const textGeometry2 = new TextGeometry(`DPS: ${this.dps.toString()}`, {
      font: this.font,
      size: 1,
      depth: 0.2,
    });
    textGeometry.computeBoundingBox();
    this.dpsMesh = new THREE.Mesh(textGeometry2, textMaterial);
    this.dpsMesh.position.x = 6;
    this.dpsMesh.rotation.x = Math.PI / 3;
    this.dpsMesh.rotation.y = -Math.PI / 5;
    this.add(this.dpsMesh);
  }

  update(newPoints, dps) {
    this.score += newPoints;
    this.dps = dps;
    this.remove(this.pointsMesh);
    this.remove(this.dpsMesh);
    this.createText();
  }
}
