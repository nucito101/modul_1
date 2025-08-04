import "./styles.css"

enum ClothingColor {
  Gelb = "#FFFF00",
  Orange = "#FFA500",
  Pink = "#FFC0CB",
  Blau = "#1E90FF",
  Lila = "#800080",
  Grau = "#808080",
}

const allColors: ClothingColor[] = [
  ClothingColor.Gelb,
  ClothingColor.Orange,
  ClothingColor.Pink,
  ClothingColor.Blau,
  ClothingColor.Lila,
  ClothingColor.Grau,
]

const container = document.getElementById("button-container")!

// allColors.forEach((color) => {
//   const btn = document.createElement("button")
//   btn.style.backgroundColor = color
//   btn.textContent = getColorName(color)
//   container.appendChild(btn)
// })

function getColorName(hex: string): string {
  const entry = Object.entries(ClothingColor).find(([, value]: [string, ClothingColor]) => value === hex)
  return entry ? entry[0] : "Unbekannt"
}

Object.values(ClothingColor).forEach((hex) => {
  const btn = document.createElement("button")
  btn.style.backgroundColor = hex
  btn.textContent = getColorName(hex)
  container.appendChild(btn)
})
