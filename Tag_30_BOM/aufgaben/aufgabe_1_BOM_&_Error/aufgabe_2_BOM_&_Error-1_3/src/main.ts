import "./style.css"

const btn = document.getElementById("getdata") as HTMLButtonElement
const outputVal = document.getElementById("output") as HTMLDivElement

function randomColor(): string {
  return `hsl(${Math.floor(Math.random() * 360)}, 70%, 60%)`
}
// setInterval(() => {
//   document.body.style.backgroundColor = randomColor()
// }, 20)

btn.addEventListener("click", () => {
  setInterval(() => {
    document.body.style.backgroundColor = randomColor()
  }, 20)
  const browserName = window.navigator.userAgent
  const architecture = window.navigator.platform
  const browserVersion = window.navigator.appVersion
  const windowResolution = `${window.screen.width} x ${window.screen.height}`
  const innerSize = `${window.innerWidth} x ${window.innerHeight}`
  const colorDepth = screen.colorDepth
  const pixelDepth = screen.pixelDepth
  outputVal.innerHTML = `
    <p><strong>Browsername:</strong> ${browserName}</p>
    <p><strong>Betriebssystem-Architektur:</strong> ${architecture}</p>
    <p><strong>Browser-Version:</strong> ${browserVersion}</p>
    <p><strong>Window-Auflösung:</strong> ${windowResolution}</p>
    <p><strong>Innenhöhe/-breite:</strong> ${innerSize}</p>
    <p><strong>colorDepth:</strong> ${colorDepth}</p>
    <p><strong>pixelDepth:</strong> ${pixelDepth}</p>
  `
})
