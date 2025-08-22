import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js"

const camera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 20

const scene = new THREE.Scene()

// ===== Renderer =====
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap
document.getElementById("container3D").appendChild(renderer.domElement)

// ===== Environment (Reflexe) =====
const pmrem = new THREE.PMREMGenerator(renderer)
scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture
scene.background = null

// ===== Lighting =====
const ambient = new THREE.AmbientLight(0xffffff, 0.25)
scene.add(ambient)

const hemi = new THREE.HemisphereLight(0xffffff, 0x223344, 0.4)
scene.add(hemi)

const key = new THREE.DirectionalLight(0xfff2e0, 2.2)
key.position.set(3, 4, 2)
key.castShadow = true
key.shadow.mapSize.set(2048, 2048)
key.shadow.normalBias = 0.02
key.shadow.camera.near = 0.1
key.shadow.camera.far = 20
scene.add(key)

const fill = new THREE.DirectionalLight(0xdde7ff, 0.8)
fill.position.set(-4, 2, 3)
scene.add(fill)

const rim = new THREE.DirectionalLight(0xffffff, 1.4)
rim.position.set(-1, 3.5, -3)
scene.add(rim)

// ===== Schattenboden =====
const groundGeo = new THREE.PlaneGeometry(20, 20)
const groundMat = new THREE.ShadowMaterial({ opacity: 0.3 })
const ground = new THREE.Mesh(groundGeo, groundMat)
ground.rotation.x = -Math.PI / 2
ground.position.y = -0.1
ground.receiveShadow = true
ground.userData.ignoreRaycast = true
scene.add(ground)

// ===== GLTF =====
let pokeball
let mixer
let action

const loader = new GLTFLoader()
loader.load(
  "../../public/pokeball_-_animated.glb",
  (gltf) => {
    pokeball = gltf.scene
    pokeball.position.y = 0
    scene.add(pokeball)
    mixer = new THREE.AnimationMixer(pokeball)
    if (gltf.animations && gltf.animations.length > 0) {
      action = mixer.clipAction(gltf.animations[0])
      action.setLoop(THREE.LoopOnce, 1)
      action.clampWhenFinished = true
      action.paused = true // startet erst bei Klick
      action.time = 0
    }
  },
  undefined,
  (error) => console.error(error)
)

// ===== Animation per Klick starten =====
const raycaster = new THREE.Raycaster()
const pointer = new THREE.Vector2()

function onPointerDown(event) {
  const rect = renderer.domElement.getBoundingClientRect()
  const x = ((event.clientX - rect.left) / rect.width) * 2 - 1
  const y = -((event.clientY - rect.top) / rect.height) * 2 + 1
  pointer.set(x, y)

  raycaster.setFromCamera(pointer, camera)
  if (!pokeball || !action) return

  const hits = raycaster.intersectObjects(pokeball.children, true)
  if (hits.length > 0) {
    action.reset()
    action.paused = false
    action.play()
  }
}

renderer.domElement.addEventListener("pointerdown", onPointerDown)

// ===== Render-Loop =====
const clock = new THREE.Clock()
function reRender3D() {
  requestAnimationFrame(reRender3D)
  const dt = clock.getDelta()
  if (mixer) mixer.update(dt)
  renderer.render(scene, camera)
}
reRender3D()

// ===== Resize =====
window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight)
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
})
