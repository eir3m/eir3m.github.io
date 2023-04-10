// Импортируем Three.js
import * as THREE from 'three';

// Создаем сцену
const scene = new THREE.Scene();

// Создаем камеру
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Создаем рендерер
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Создаем геометрию для октаэдра
const geometry = new THREE.OctahedronGeometry(2, 0);

// Создаем материал для октаэдра
const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });

// Создаем объект меша, объединяющий геометрию и материал
const octahedron = new THREE.Mesh(geometry, material);

// Добавляем октаэдр на сцену
scene.add(octahedron);

// Создаем анимацию
function animate() {
  requestAnimationFrame(animate);
  octahedron.rotation.x += 0.01;
  octahedron.rotation.y += 0.01;
  renderer.render(scene, camera);
}

animate();
