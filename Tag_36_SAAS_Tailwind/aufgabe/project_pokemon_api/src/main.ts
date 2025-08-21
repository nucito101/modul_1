import CryGenerator from "./sound/CryGenerator"
import { CRY_TYPES } from "./sound/data/cryTypes"
import pokemonList from "./sound/data/pokemonList"
import "./style.css"

const BASE_URL = "https://pokeapi.co/api/v2/"
const POKEMON_URL = "https://pokeapi.co/api/v2/pokemon"
const TYPE_URL = "https://pokeapi.co/api/v2/type"
const GIF_URL = (id: number) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${id}.gif`

const LIMIT = 151
const POKEMON_URL_WITH_LIMIT = `https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=0`

const TYPES = [
  "bug",
  "dragon",
  "electric",
  "dark",
  "fairy",
  "ghost",
  "fighting",
  "grass",
  "fire",
  "ground",
  "flying",
  "ice",
  "normal",
  "poison",
  "psychic",
  "rock",
  "steel",
  "water",
]

const KEY = "pokedex"
// Time To Live
const TTL = 1000 * 60 * 60 * 24 * 30

type Pokemon = {
  name: string
  url: string
}

type PokemonResult = {
  results: Pokemon[]
}

type PokemonDetail = {
  id: number
  name: string
  types: Array<{
    type: {
      name: string
    }
  }>
}

const grid = document.getElementById("card_grid") as HTMLUListElement
const statusContainer = document.getElementById("status") as HTMLDivElement
const searchInput = document.getElementById("search") as HTMLInputElement
const typeOutput = document.getElementById("type_output") as HTMLDivElement

async function fetchJSON<T>(url: string): Promise<T> {
  const cache = JSON.parse(localStorage.getItem(KEY) || "{}") as Record<string, { timestamp: number; value: any }>
  const cacheEntry = cache[url]
  if (cacheEntry && Date.now() - cacheEntry.timestamp < TTL) {
    return cacheEntry.value as T
  }
  const resp = await fetch(url)
  const data = await resp.json()
  cache[url] = { timestamp: Date.now(), value: data }
  localStorage.setItem(KEY, JSON.stringify(cache))
  return data as T
}

let allBasics: Array<{ id: number; name: string }> = []
let filteredBasics = allBasics
let activeType: string | null = null

function extractId(url: string): number {
  const id = Number(url.split("/").filter(Boolean).pop())
  return id
}

async function loadBasics() {
  statusContainer.textContent = "Load Pokemon..."
  const list = await fetchJSON<PokemonResult>(POKEMON_URL_WITH_LIMIT)
  allBasics = list.results.map((pokemon): { id: number; name: string } => {
    return {
      name: pokemon.name,
      id: extractId(pokemon.url),
    }
  })
  filteredBasics = allBasics
  await render()
  statusContainer.textContent = ""
}

async function loadDetails(list: Array<{ id: number; name: string }>): Promise<PokemonDetail[]> {
  const details = await Promise.all(list.map((pokemon) => fetchJSON<PokemonDetail>(`${POKEMON_URL}/${pokemon.id}`)))
  return details
}

// Cry-Synth vorbereiten
const synth = new CryGenerator()
synth.init()

// Name aus PokeAPI in Mapping-Key umwandeln (Sonderfälle)
function toMappingKey(apiName: string): string {
  const n = apiName.toLowerCase()
  if (n === "nidoran-f" || n === "nidoran♀") return "Nidoran&female;"
  if (n === "nidoran-m" || n === "nidoran♂") return "Nidoran&male;"
  if (n === "mr-mime" || n === "mr. mime" || n === "mr mime") return "Mr.Mime"
  if (n === "farfetchd") return "Farfetch'd"
  return capitalize(apiName)
}

// einfache Kanal-Mischung (3 WebAudio-Kanäle → ein Array)
function mixChannels(...channels: number[][]): number[] {
  const maxLen = Math.max(...channels.map((c) => c.length))
  const out = new Array<number>(maxLen).fill(0)
  for (let i = 0; i < maxLen; i++) {
    let sum = 0
    for (const ch of channels) sum += ch[i] ?? 0
    out[i] = sum / channels.length
  }
  return out
}

// Cry abspielen nach Namen (aus API)
function playCryByApiName(apiName: string) {
  const key = toMappingKey(apiName)
  const meta = pokemonList.find((p) => p.name === key)
  if (!meta) {
    console.warn("No Cry-Mapping for:", apiName, "(Key:", key, ")")
    return
  }
  const cryType = CRY_TYPES[meta.cry]
  const { pulse1, pulse2, noise } = synth.generate(cryType, meta.pitch, meta.length)
  const mixed = mixChannels(pulse1, pulse2, noise)
  synth.play(mixed)
}

async function render() {
  grid.innerHTML = ""
  const details = await loadDetails(filteredBasics)

  const html = details
    .map((detail) => {
      const id = detail.id
      const name = capitalize(detail.name)
      const typeNames = detail.types.map((t) => t.type.name)

      return `
        <li class="card">
          <div class="thumbnail">
            <img 
              src="${GIF_URL(id)}" 
              alt="${name}" 
              data-pokemon="${detail.name}" 
              class="pokemon-img"
            />
          </div>
          <div class="id">#${String(id).padStart(3, "0")}</div>
          <div class="name">${name}</div>
          <div class="badges">
            ${typeNames.map((t) => `<span class="badge ${t}">${t}</span>`).join("")}
          </div>
        </li>
      `
    })
    .join("")

  grid.innerHTML = html
}

function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1)
}

function search() {
  searchInput.addEventListener("keydown", (e: KeyboardEvent) => {
    if (e.key !== "Enter") return

    const input = searchInput.value.trim().toLowerCase()

    if (!input) {
      filteredBasics = activeType ? filteredBasics : allBasics
    } else if (input.startsWith("#")) {
      const id = Number(input.slice(1))
      filteredBasics = allBasics.filter((pokemon) => pokemon.id === id)
    } else if (!Number.isNaN(Number(input))) {
      const id = Number(input)
      filteredBasics = allBasics.filter((pokemon) => pokemon.id === id)
    } else {
      filteredBasics = allBasics.filter((pokemon) => pokemon.name.includes(input))
    }
    render()
  })
}

function setupTypeBtn() {
  const typeBtn = document.createElement("button")
  typeBtn.className = "type-btn"
  typeBtn.textContent = "All"
  typeBtn.setAttribute("aria-pressed", "true")
  typeBtn.onclick = async () => {
    activeType = null
    markedActive(null)
    filteredBasics = allBasics
    await render()
  }
  typeOutput.appendChild(typeBtn)

  TYPES.forEach((typeName) => {
    const btn = document.createElement("button")
    btn.className = "type-btn"
    btn.textContent = typeName.toUpperCase()
    btn.dataset.type = typeName
    btn.onclick = async () => {
      activeType = typeName
      markedActive(typeName)
      const typeResponse = await fetchJSON<{ pokemon: Array<{ pokemon: { url: string } }> }>(`${TYPE_URL}/${typeName}`)
      const pokemonIds = new Set<number>(typeResponse.pokemon.map((p) => extractId(p.pokemon.url)))
      filteredBasics = allBasics.filter((pokemon) => pokemonIds.has(pokemon.id))
      await render()
    }
    typeOutput.appendChild(btn)
  })
}

function markedActive(type: string | null) {
  typeOutput.querySelectorAll<HTMLButtonElement>(".type-btn").forEach((btn) => {
    btn.setAttribute("aria-pressed", "false")
  })
  if (type === null) {
    typeOutput.querySelector(".type-btn")?.setAttribute("aria-pressed", "true")
  } else typeOutput.querySelector(`.type-btn[data-type="${type}"]`)?.setAttribute("aria-pressed", "true")
}

grid.addEventListener("click", (e) => {
  e.preventDefault()
  const img = (e.target as HTMLElement).closest<HTMLImageElement>(".pokemon-img")
  if (!img) return
  const apiName = img.dataset.pokemon
  if (apiName) playCryByApiName(apiName)
})

setupTypeBtn()
search()
loadBasics()
