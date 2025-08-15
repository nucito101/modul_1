import type { IHead, IHouses, ITrait } from "./interfaces/IHouses"
import type { ISpells } from "./interfaces/ISpells"
import "./style.css"

// immer am Anfang, wenn ich die Schnittstelle aufrufe und mehrere Endpunkt/Routen habe, die URLs am besten festlegen
// BaseURL ist die basic_URL one Route
const BASE_URL = "https://wizard-world-api.herokuapp.com"
const HOUSE_URL = `${BASE_URL}/Houses`
const SPELLS_URL = `${BASE_URL}/Spells`

// Elemente abholen

const houseLink = document.getElementById("nav-houses") as HTMLAnchorElement
const spellsLink = document.getElementById("nav-spells") as HTMLAnchorElement
const contentDiv = document.getElementById("content") as HTMLDivElement

houseLink.addEventListener("click", () => {
  console.log("House clicked")
  fetchAndDisplay(HOUSE_URL, "Houses")
})

spellsLink.addEventListener("click", () => {
  console.log("spells clicked")
  fetchAndDisplay(SPELLS_URL, "Spells")
})

function fetchAndDisplay(url: string, routeName: string) {
  fetch(url)
    .then((resp: Response) => {
      // console.log(resp)
      return resp.json()
    })
    .then((data) => {
      if (routeName === "Houses") {
        const houses = data as IHouses[]
        // console.log(houses)
        contentDiv.innerHTML = createHouseList(houses)
      } else if (routeName === "Spells") {
        const spells = data as ISpells[]
        // console.log(spells)
        contentDiv.innerHTML = createSpellsList(spells)
      }
    })
    .catch((error: Error) => {
      console.error(error)
    })
}

function createHouseList(houses: IHouses[]): string {
  const resultasString = houses.map((house: IHouses) => {
    const headsList = house.heads.map((head: IHead) => `${head.firstName} ${head.lastName}`).join(", ")

    const traitsList = house.traits.map((trait: ITrait) => trait.name).join(", ")

    return `
    <div>
      <p>Id: ${house.id}</p>
      <p>Name: ${house.name}</p>
      <p>House Colours: ${house.houseColours}</p>
      <p>Founder: ${house.founder}</p>
      <p>Animal: ${house.animal}</p>
      <p>Element: ${house.element}</p>
      <p>Ghost: ${house.ghost}</p>
      <p>CommonRoom: ${house.commonRoom}</p>
      <p>Heads: ${headsList}</p>
      <p>Traits: ${traitsList}</p>
    </div>
    
    `
  })
  return `<main>${resultasString.join("")}</main>
  `
}

function createSpellsList(spells: ISpells[]): string {
  const resultasString = spells.map((spell: ISpells) => {
    return `
    <li>
      <p>Id: ${spell.id}</p>
      <p>Name: ${spell.name}</p>
      <p>Incantation: ${spell.incantation}</p>
      <p>Effect: ${spell.effect}</p>
      <p>Type: ${spell.type}</p>
    </li>
    `
  })
  return `<ul>${resultasString.join("")}</ul>`
}
