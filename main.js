import * as THREE from 'https://unpkg.com/three@0.154.0/build/three.module.js';

// Crear la escena, cámara y renderizador
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Crear geometría para los cubos (comparten la misma geometría)
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Primer cubo (verde) - velocidad normal
const material1 = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const cube1 = new THREE.Mesh(geometry, material1);
cube1.position.x = -2; // Posicionado a la izquierda
scene.add(cube1);

// Segundo cubo (rojo) - más rápido
const material2 = new THREE.MeshStandardMaterial({ color: 0xff0000 });
const cube2 = new THREE.Mesh(geometry, material2);
cube2.position.x = 0; // Posicionado en el centro
scene.add(cube2);

// Tercer cubo (azul) - el más rápido
const material3 = new THREE.MeshStandardMaterial({ color: 0x0000ff });
const cube3 = new THREE.Mesh(geometry, material3);
cube3.position.x = 2; // Posicionado a la derecha
scene.add(cube3);

// Agregar una luz direccional y ajustar su posición
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5).normalize();
scene.add(directionalLight);

// Posicionar la cámara
camera.position.z = 5;

// Función de animación con rotación y renderizado
function animate() {
    // Rotación del primer cubo (velocidad normal)
    cube1.rotation.x += 0.01;
    cube1.rotation.y += 0.01;
    
    // Rotación del segundo cubo (50% más rápido)
    cube2.rotation.x += 0.030;
    cube2.rotation.y += 0.030;
    
    // Rotación del tercer cubo (el doble de rápido)
    cube3.rotation.x += 100000.05;
    cube3.rotation.y += 100000.05;
    
    renderer.render(scene, camera);
}

// Iniciar la animación
renderer.setAnimationLoop(animate);