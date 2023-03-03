import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const group = new THREE.Group()
scene.add(group)

const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
//mesh.position.x = 0.7
//mesh.position.y = -0.6
//mesh.position.z = 1
mesh.position.set(0.7, -0.6, 1)
mesh.scale.set(2,0.5,0.5)
//rotation
mesh.rotation.reorder('YXZ')
//mesh.rotation.y = Math.PI * 0.25
//mesh.rotation.x = Math.PI * 0.25



//create a second cube
const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x0000ff })
)

cube1.position.x = 1.5

group.add(mesh)
group.add(cube2)
group.add(cube1)

group.position.z = 0.5

//axis helper
const axesHelper = new THREE.AxesHelper(1)
scene.add(axesHelper)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.set(0, 0, 3)
scene.add(camera)

camera.lookAt(mesh.position)




/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)