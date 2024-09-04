console.log("test.js is working ");
// // Import THREE.js
// import * as THREE from 'three';

// // Create the scene
// const scene = new THREE.Scene();

// // Create a camera
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.z = 5;

// // Create a renderer and add it to the DOM
// const renderer = new THREE.WebGLRenderer();
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// // Create a basic cube
// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

// // Create a basic light
// const light = new THREE.AmbientLight(0x404040); // soft white light
// scene.add(light);

// // Create the animation loop
// function animate() {
//     requestAnimationFrame(animate);

//     // Rotate the cube
//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;

//     // Render the scene from the perspective of the camera
//     renderer.render(scene, camera);
// }

// // Start the animation
// animate();

// // Handle window resize
// window.addEventListener('resize', () => {
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
// });
