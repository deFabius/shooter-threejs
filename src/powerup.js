import * as THREE from "three";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { Target } from "./target";

export const types = {
  SPEED: 0,
  MULTIPLIER: 1,
  POWER: 2,
};

const colors = {
  [types.SPEED]: 0x29ca44,
  [types.MULTIPLIER]: 0xc81717,
  [types.POWER]: 0xc8ef18,
};

export class Powerup extends Target {
  constructor(font) {
    super(-10);
    this.type = Math.floor(Math.random() * 3);
    this.geometry = new THREE.BoxGeometry(3, 0.2, 3);
    this.material = new THREE.MeshStandardMaterial({
      color: 0xaaaa33,
      opacity: 0.4,
      transparent: true,
    });
    this.font = font;

    this.textMesh;

    this.createText();
    this.geometry.computeBoundingBox();
  }

  createText() {
    const textGeometry = new TextGeometry(this.hits.toString(), {
      font: this.font,
      size: 1,
      depth: 0.2,
    });
    const textMaterial = new THREE.MeshBasicMaterial({
      color: colors[this.type],
    });

    textGeometry.computeBoundingBox();

    const centerOffset =
      -0.5 * (textGeometry.boundingBox.max.x - textGeometry.boundingBox.min.x);
    this.textMesh = new THREE.Mesh(textGeometry, textMaterial);

    this.textMesh.position.x = centerOffset;
    // this.textMesh.position.y = 1;
    this.textMesh.position.z = 0.25;

    this.textMesh.rotation.x = Math.PI / 2;

    this.add(this.textMesh);
  }

  hit() {
    this.remove(this.textMesh);
    this.createText();
    return super.hit(-1);
  }

  getBonus() {
    return {
      rateOfFire: this.type === types.SPEED ? 1 : 0,
      damage: this.type === types.POWER ? 1 : 0,
      numberOfGuns: this.type === types.MULTIPLIER ? 1 : 0,
    };
  }
}
