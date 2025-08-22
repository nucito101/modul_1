import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"

// ===== Kamera  =====
const camera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 25

const scene = new THREE.Scene()

// ===== Renderer =====
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.outputColorSpace = THREE.SRGBColorSpace
renderer.toneMapping = THREE.NoToneMapping
renderer.toneMappingExposure = 1.0
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFShadowMap
document.getElementById("container3D")?.appendChild(renderer.domElement)

scene.environment = null
scene.background = null

// ===== Licht  =====
const ambient = new THREE.AmbientLight(0xffffff, 0.7)
scene.add(ambient)

const hemi = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.5)
scene.add(hemi)

const key = new THREE.DirectionalLight(0xffffff, 1.5)
key.position.set(0, 5, 4)
key.castShadow = true
key.shadow.mapSize.set(1024, 1024)
key.shadow.normalBias = 0.03
scene.add(key)
key.target.position.set(0, 0, 0)
scene.add(key.target)

const fill = new THREE.DirectionalLight(0xffffff, 0.6)
fill.position.set(0, -2, 6)
scene.add(fill)

const rim = new THREE.DirectionalLight(0xffffff, 0.7)
rim.position.set(-2.5, 3.5, -3.5)
scene.add(rim)

// ===== Toon-Helfer =====
function makeToonRamp(steps = 4) {
  const size = Math.max(2, steps)
  const data = new Uint8Array(size * 4)
  for (let i = 0; i < size; i++) {
    const t = i / (size - 1)
    const v = Math.round(160 + t * 95)
    const o = i * 4
    data[o + 0] = v
    data[o + 1] = v
    data[o + 2] = v
    data[o + 3] = 255
  }
  const tex = new THREE.DataTexture(data, size, 1, THREE.RGBAFormat)
  tex.needsUpdate = true
  tex.magFilter = THREE.NearestFilter
  tex.minFilter = THREE.NearestFilter
  tex.generateMipmaps = false
  tex.wrapS = THREE.ClampToEdgeWrapping
  tex.wrapT = THREE.ClampToEdgeWrapping
  return tex
}
const toonRamp = makeToonRamp(4)

function toToonPreserve(srcMat) {
  const toon = new THREE.MeshToonMaterial({ gradientMap: toonRamp })
  if (srcMat?.color) toon.color.copy(srcMat.color)
  if (srcMat?.map) {
    toon.map = srcMat.map
    if (toon.map.colorSpace !== THREE.SRGBColorSpace) {
      toon.map.colorSpace = THREE.SRGBColorSpace
      toon.map.needsUpdate = true
    }
  }
  if (srcMat?.normalMap) toon.normalMap = srcMat.normalMap
  if (srcMat?.emissive) toon.emissive = srcMat.emissive.clone()
  if (srcMat?.emissiveIntensity !== undefined) toon.emissiveIntensity = srcMat.emissiveIntensity
  if (srcMat?.emissiveMap) toon.emissiveMap = srcMat.emissiveMap
  if (srcMat?.alphaMap) toon.alphaMap = srcMat.alphaMap
  if (srcMat?.vertexColors) toon.vertexColors = true
  if (srcMat?.transparent) toon.transparent = true
  if (srcMat?.opacity !== undefined) toon.opacity = srcMat.opacity
  if (srcMat?.side !== undefined) toon.side = srcMat.side

  toon.skinning = !!srcMat?.skinning
  toon.morphTargets = !!srcMat?.morphTargets
  toon.morphNormals = !!srcMat?.morphNormals

  if (!toon.emissive) toon.emissive = new THREE.Color(0x222222)
  if (toon.emissiveIntensity === undefined) toon.emissiveIntensity = 0.35

  toon.needsUpdate = true
  return toon
}

function convertToToonMaterials(root) {
  root.traverse((obj) => {
    if (obj.isMesh && !obj.userData.isOutline) {
      const m = obj.material
      if (Array.isArray(m)) obj.material = m.map((mm) => toToonPreserve(mm))
      else if (m) obj.material = toToonPreserve(m)
      obj.castShadow = true
      obj.receiveShadow = true
    }
  })
}

function addSimpleOutline(root, scale = 1.012, color = 0x0a0a0a) {
  const targets = []
  root.traverse((o) => {
    if (o.isMesh && o.geometry && !o.userData.isOutline) targets.push(o)
  })
  for (const o of targets) {
    const outlineMat = new THREE.MeshBasicMaterial({ color, side: THREE.BackSide })
    outlineMat.userData = { keepBasic: true }
    const outline = new THREE.Mesh(o.geometry, outlineMat)
    outline.userData.isOutline = true
    outline.renderOrder = -1
    outline.material.depthWrite = false
    outline.position.copy(o.position)
    outline.quaternion.copy(o.quaternion)
    outline.scale.copy(o.scale).multiplyScalar(scale)
    o.add(outline)
  }
}

// ===== Audio =====
const sfx = new Audio("/soundeffekt.mp3")
sfx.preload = "auto"
sfx.crossOrigin = "anonymous"
sfx.volume = 1
let preFadeTimer = null

// ===== GLTF=====
let pokeball,
  mixer,
  action,
  clipDuration = 0
const loader = new GLTFLoader()
loader.load(
  "/pokeball_-_animated.glb",
  (gltf) => {
    pokeball = gltf.scene
    scene.add(pokeball)

    convertToToonMaterials(pokeball)
    addSimpleOutline(pokeball, 1.012, 0x0a0a0a)

    mixer = new THREE.AnimationMixer(pokeball)
    if (gltf.animations?.length) {
      const clip = gltf.animations[0]
      clipDuration = 6
      const shortClip = clip.clone()
      shortClip.duration = clipDuration

      action = mixer.clipAction(shortClip)
      action.setLoop(THREE.LoopOnce, 1)
      action.clampWhenFinished = true
      action.paused = true
      action.time = 0
      action.timeScale = 1.05

      mixer.addEventListener("finished", () => {
        const stage = document.getElementById("container3D")
        const main = document.getElementById("main")
        if (stage) stage.style.display = "none"
        if (main) main.style.display = "block"
      })
    }
  },
  undefined,
  (e) => console.error(e)
)

function fadeOutAudio(ms = 1200) {
  const steps = 20
  const stepTime = ms / steps
  let i = 0
  const startVol = sfx.volume
  const iv = setInterval(() => {
    i++
    sfx.volume = Math.max(0, startVol * (1 - i / steps))
    if (i >= steps) {
      clearInterval(iv)
      sfx.pause()
    }
  }, stepTime)
}

// ===== Animation + Sound =====
const raycaster = new THREE.Raycaster()
const pointer = new THREE.Vector2()
async function onPointerDown(e) {
  if (!pokeball || !action) return
  const r = renderer.domElement.getBoundingClientRect()
  pointer.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1)
  raycaster.setFromCamera(pointer, camera)
  const hits = raycaster.intersectObjects(pokeball.children, true)
  if (!hits.length) return

  // Sound
  try {
    sfx.currentTime = 0
    await sfx.play()
  } catch (err) {
    console.warn("Audio blockiert:", err)
  }

  document.getElementById("text").style.display = "none"

  // Animation starten
  action.reset()
  action.paused = false
  action.play()

  setTimeout(() => {
    const stage = document.getElementById("container3D")
    if (stage?.style.display === "none") return
    const main = document.getElementById("main")
    if (stage) stage.style.display = "none"
    if (main) main.style.display = "block"
  }, clipDuration * 1000 + 150)
}
renderer.domElement.addEventListener("pointerdown", onPointerDown, { passive: true })

// ===== Loop =====
const clock = new THREE.Clock()
function animate() {
  requestAnimationFrame(animate)
  const dt = clock.getDelta()
  if (mixer) mixer.update(dt)
  renderer.render(scene, camera)
}
animate()

// ===== Resize =====
window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight)
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
})
