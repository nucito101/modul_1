import "./style.css"

type Alcohol = {
  name: string
  percentage: number
  type: string
}

type Mixer = {
  name: string
  type: string
  carbonated: boolean
}

type Cocktail = Alcohol & Mixer

const mojito: Cocktail = {
  name: "Mojito",
  percentage: 14,
  type: "Rum",
  carbonated: true,
}

console.log("Name:", mojito.name)
console.log("Alkoholgehalt:", mojito.percentage + "%")
console.log("Alkohol-Typ:", mojito.type)
console.log("Kohlensäurehaltig:", mojito.carbonated)
