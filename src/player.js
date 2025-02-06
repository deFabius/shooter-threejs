import * as THREE from "three";
import { Projectile } from "./projectile";

export class Player extends THREE.Mesh {
  constructor(projectiles) {
    super();
    this.projectiles = projectiles;
    this.geometry = new THREE.CapsuleGeometry(0.4, 1, 4, 8);
    this.material = new THREE.MeshStandardMaterial({ color: 0x99ffaa });
    this.rateOfFire = 3;
    this.damage = 1;
    this.numberOfGuns = 1;
    this.isShooting = false;
    this.geometry.computeBoundingBox();

    this.gunIntervals = {};

    window.addEventListener("mousemove", (e) => {
      this.position.x = (e.clientX / window.innerWidth) * 10 - 5;
    });
  }

  shootGun(gunNumber = 0) {
    clearInterval(this.gunIntervals[gunNumber]);
    this.gunIntervals[gunNumber] = setInterval(() => {
      if (!this.isShooting) {
        return;
      }
      const deltaX =
        this.numberOfGuns > 1 ? gunNumber / (this.numberOfGuns - 1) - 1 / 2 : 0;
      const projectile = new Projectile();
      projectile.position.set(this.position.x + deltaX, -4, 0.5);
      this.projectiles.add(projectile);
    }, 1000 / this.rateOfFire);
  }

  shoot(gunNumber = 0) {
    this.isShooting = true;
    setTimeout(() => {
      this.shootGun(gunNumber);
      if (gunNumber < this.numberOfGuns - 1) this.shoot(gunNumber + 1);
    }, 1000 / this.rateOfFire / this.numberOfGuns);
  }

  stopShooting() {
    this.isShooting = false;
  }

  powerUp(bonus) {
    console.log(bonus);
    this.rateOfFire += bonus.rateOfFire;
    this.damage += bonus.damage;
    this.numberOfGuns += bonus.numberOfGuns;
    if (this.isShooting) this.shoot();
  }

  getDps() {
    return this.damage * this.rateOfFire;
  }
}
