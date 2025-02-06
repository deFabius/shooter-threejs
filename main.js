import * as THREE from "three";
import { Player } from "./src/player";
import { Powerup } from "./src/powerup";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
import typefaceData from "@compai/font-roboto/data/typefaces/normal-900.json";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { Enemy } from "./src/enemy";
import { GameUI } from "./src/GameUI";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

const loader = new FontLoader();
const font = loader.parse(typefaceData);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const targets = new Set();
const powerUps = new THREE.Group();
scene.add(powerUps);
const projectiles = new THREE.Group();
scene.add(projectiles);

const cube = new THREE.Mesh(geometry, material);
const light = new THREE.HemisphereLight(0xffffbb, 0x080820, 1);
scene.add(light);

const groundGeometry = new THREE.PlaneGeometry(10, 30);
const groundMaterial = new THREE.MeshStandardMaterial({
  color: 0xaaaaff,
  side: THREE.DoubleSide,
});
const plane = new THREE.Mesh(groundGeometry, groundMaterial);
scene.add(plane);

const player = new Player(projectiles);
scene.add(player);
player.rotation.x = Math.PI / 2;
player.position.y = -5;
let movePlayer = 0;

camera.position.z = 5;
camera.position.y = -7;
camera.lookAt(0, 0, 0);

const gameUI = new GameUI(font);
scene.add(gameUI);
// gameUI.position.x = -10;
gameUI.position.y = 10;
// gameUI.rotation.x = Math.PI / 2;
// gameUI.rotation.y = Math.PI / 3;
gameUI.update(0, player.getDps());

const projectileBox = new THREE.Box3();
const targetBox = new THREE.Box3();
const playerBox = new THREE.Box3();
playerBox.setFromObject(player);

const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

function animate() {
  controls.update();

  playerMove();
  targets.forEach((target) => {
    target.position.y -= 0.03;
    if (target.position.y < -15) {
      targets.delete(target);
      scene.remove(target);
    }
  });
  projectiles.children.forEach((projectile) => {
    projectileBox.setFromObject(projectile);
    projectile.position.y += 0.07;
    if (projectile.position.y > 15) projectiles.remove(projectile);
    targets.forEach((target) => {
      targetBox.setFromObject(target);
      if (projectileBox.intersectsBox(targetBox)) {
        const isAlive = target.hit(player.damage);
        if (target instanceof Enemy && !isAlive) {
          targets.delete(target);
          scene.remove(target);
          gameUI.update(target.points, player.getDps());
        }
        projectiles.remove(projectile);
      }
    });
    // console.log(powerUps.children);
    powerUps.children.forEach((powerup) => {
      targetBox.setFromObject(powerup);
      if (playerBox.intersectsBox(targetBox)) {
        console.log(powerup.type);
        player.powerUp(powerup.getBonus());
        gameUI.update(0, player.getDps());
        powerUps.remove(powerup);
      }
    });
  });
  player.position.x += movePlayer * 0.2;

  checkCollision();
  renderer.render(scene, camera);
  consoleInt.innerHTML = countMeshes();
}

const countMeshes = () =>
  scene.children.length +
  powerUps.children.length +
  projectiles.children.length;

const consoleInt = document.getElementById("console");
let keyStrokes = [];

window.addEventListener("keydown", (evt) => {
  if (!evt.repeat) keyStrokes.push(evt.keyCode);
});

window.addEventListener("keyup", () => {
  keyStrokes.shift();
});

const playerMove = () => {
  if (!keyStrokes.length) {
    movePlayer = 0;
    return;
  }
  switch (keyStrokes[0]) {
    case 39:
      movePlayer = 1;
      break;
    case 37:
      movePlayer = -1;
      break;
    default:
      movePlayer = 0;
  }
};

const createEnemyRun = () => {
  setTimeout(() => {
    const numOfBadGuys = Math.floor(Math.random() * 9) + 1;
    // console.log(numOfBadGuys);
    for (let i = 0; i < numOfBadGuys; i++) {
      const badGuyMesh = new Enemy(numOfBadGuys);
      badGuyMesh.position.set((10 / numOfBadGuys) * i - 4.25, 10, 0.5);
      badGuyMesh.geometry.computeBoundingBox();
      scene.add(badGuyMesh);
      targets.add(badGuyMesh);
    }
    if (run.checked)
      isPowerupEligible() ? createPowerup(font) : createEnemyRun();
  }, 3000);
};

const createPowerup = (font) => {
  setTimeout(() => {
    console.log(powerUps);
    const powerup = new Powerup(font);
    powerup.position.y = 10;
    targets.add(powerup);
    powerUps.add(powerup);
    if (run.checked) createEnemyRun(font);
  }, 3000);
};

// shoot();

const checkCollision = () => {};

const run = document.getElementById("start-game");

run.addEventListener("click", (e) => {
  if (e.target.checked) {
    createEnemyRun();
    player.shoot();
  } else {
    player.stopShooting();
  }
});
createEnemyRun(font);

player.shoot();

let lastCheckpoint = 0;
const isPowerupEligible = () => {
  const step = Math.floor(gameUI.score / 50);
  console.log(lastCheckpoint, step);
  if (lastCheckpoint !== step) {
    lastCheckpoint = step;
    return true;
  }
  return false;
};

window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
