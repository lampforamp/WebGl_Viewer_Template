// Import Libraries

import * as THREE from './libs/three.module.js';
import { OrbitControls } from './libs/OrbitControls.js';

// Setting a canvas
const canvas = document.querySelector('canvas.webgl')

// Creating a scene
const scene = new THREE.Scene()

// Basic geometry
const geometry = new THREE.BoxGeometry( 1, 1, 1 ); 
const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} ); 
const cube = new THREE.Mesh( geometry, material ); 
scene.add( cube );

// Loading Textures


// Materials


// Import Models


// Lights


// Viewport settings
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// Viewport resizing
window.addEventListener('resize', () => 
{
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

// Camera
const camera = new THREE.PerspectiveCamera(50, sizes.width / sizes.height)
camera.position.set(1.5, 2 ,5 )

scene.add(camera)

// Camera Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.maxPolarAngle = Math.PI/2.2
controls.minDistance = 3
controls.maxDistance = 10
controls.enablePan = false

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

// Animation
const tick = () =>
{   
    // Update controls
    controls.update()

    // Update Camera Target
    camera.lookAt(new THREE.Vector3(0,1,0))

    // Renderer
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick()