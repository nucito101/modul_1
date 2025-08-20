import { Starfield } from "./Class/Starfield"
import "./style.css"

//  ======================== TYPES ========================
type Film = {
  title: string
  episode_id: number
  opening_crawl: string
  director: string
  producer: string
  release_date: string
}

type Planet = {
  name: string
  climate: string
  terrain: string
  population: string
}

type Person = {
  name: string
  birth_year: string
  gender: string
  height: string
  mass: string
}

type Resource = "films" | "planets" | "people"

type TechListResponsePaginated = {
  results: Array<{ uid: string; name: string; url: string }>
  next: string | null
}

type FilmsListResponse = {
  message: string
  result: Array<{
    properties: Film
    uid: string
    _id: string
    description: string
    __v: number
  }>
}

// ======================== DOM ========================
const listElement = document.getElementById("list") as HTMLUListElement
const tabButtons = Array.from(document.querySelectorAll<HTMLButtonElement>(".btn"))
const statusElement = document.getElementById("status") as HTMLDivElement
const searchForm = document.getElementById("search_form") as HTMLFormElement
const searchInput = document.getElementById("input_search") as HTMLInputElement

//  ======================== API ========================
const API_BASE_URL = "https://swapi.tech/api"
const PEOPLE_URL = `${API_BASE_URL}/people`
const PLANETS_URL = `${API_BASE_URL}/planets`
const FILMS_URL = `${API_BASE_URL}/films`

const PEOPLE_LIST_100 = `${PEOPLE_URL}?page=1&limit=100`
const PLANETS_LIST_100 = `${PLANETS_URL}?page=1&limit=100`

//  ======================== STATE ========================
let currentResource: Resource = "films"
let currentAbortController: AbortController | null = null
let starfield: Starfield | null = null

//  ======================== HELPERS ========================
function tabLabelToResource(label: string): Resource {
  switch (label.toLowerCase()) {
    case "filme":
      return "films"
    case "planeten":
      return "planets"
    case "personen":
      return "people"
    default:
      return "films"
  }
}
function setActiveTab(resource: Resource): void {
  tabButtons.forEach((button) => {
    const label = (button.textContent || "").trim()
    button.setAttribute("aria-selected", String(tabLabelToResource(label) === resource))
  })
}
function buildListUrl(resource: Resource, searchQuery?: string): string {
  const url = searchQuery?.trim()
  if (resource === "films") {
    return url ? `${FILMS_URL}/?title=${encodeURIComponent(url)}` : `${FILMS_URL}/`
  }
  if (resource === "people") {
    return url ? `${PEOPLE_URL}/?name=${encodeURIComponent(url)}` : PEOPLE_LIST_100
  }
  if (resource === "planets") {
    return url ? `${PLANETS_URL}/?name=${encodeURIComponent(url)}` : PLANETS_LIST_100
  }
  return ""
}

//  ======================== FETCHERS ========================
async function fetchFilms(listUrl: string, signal?: AbortSignal): Promise<Film[]> {
  const url = listUrl.replace(/^http:\/\//, "https://")
  const res = await fetch(url, { signal })
  if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`)
  const json = (await res.json()) as FilmsListResponse
  return (json.result ?? []).map((item) => item.properties)
}

async function fetchPageWithDetails<T>(listUrl: string, signal?: AbortSignal): Promise<T[]> {
  const url = listUrl.replace(/^http:\/\//, "https://")
  const listRes = await fetch(url, { signal })
  if (!listRes.ok) throw new Error(`HTTP ${listRes.status} ${listRes.statusText}`)
  const listJson = (await listRes.json()) as TechListResponsePaginated
  const detailUrls = (listJson.results ?? []).map((e) => e.url.replace(/^http:\/\//, "https://"))
  const items: T[] = await Promise.all(
    detailUrls.map(async (detailUrl) => {
      const resp = await fetch(detailUrl, { signal })
      if (!resp.ok) throw new Error(`HTTP ${resp.status} ${resp.statusText}`)
      const detail = (await resp.json()) as { result?: { properties?: unknown } }
      return (detail?.result?.properties ?? detail) as T
    })
  )
  return items
}

//  ======================== RENDER ========================
function renderFilms(films: Film[]): void {
  listElement.innerHTML = films
    .map(
      (filme) => `
    <li>
      <strong>${filme.title}</strong>
      <div class="kv">
        <span>Episode</span><div>${filme.episode_id}</div>
        <span>Erscheinung</span><div>${filme.release_date}</div>
        <span>Regie</span><div>${filme.director}</div>
        <span>Produzent</span><div>${filme.producer}</div>
      </div>
    </li>
  `
    )
    .join("")
}
function renderPlanets(planets: Planet[]): void {
  listElement.innerHTML = planets
    .map(
      (planets) => `
    <li>
      <strong>${planets.name}</strong>
      <div class="kv">
        <span>Klima</span><div>${planets.climate}</div>
        <span>Terrain</span><div>${planets.terrain}</div>
        <span>Bevölkerung</span><div>${planets.population}</div>
      </div>
    </li>
  `
    )
    .join("")
}
function renderPeople(people: Person[]): void {
  listElement.innerHTML = people
    .map(
      (person) => `
    <li>
      <strong>${person.name}</strong>
      <div class="kv">
        <span>Geburtsjahr</span><div>${person.birth_year}</div>
        <span>Geschlecht</span><div>${person.gender}</div>
        <span>Größe</span><div>${person.height}</div>
        <span>Gewicht</span><div>${person.mass}</div>
      </div>
    </li>
  `
    )
    .join("")
}

// ======================== LOAD ========================
async function loadResource(resource: Resource, searchQuery?: string): Promise<void> {
  if (currentAbortController) currentAbortController.abort()
  currentAbortController = new AbortController()

  statusElement.hidden = false
  statusElement.textContent = "Lade Daten… Hyperantrieb aktiviert."
  starfield?.startWarp?.()

  try {
    const listUrl = buildListUrl(resource, searchQuery)
    if (resource === "films") {
      const films = await fetchFilms(listUrl, currentAbortController.signal)
      renderFilms(films)
    } else if (resource === "planets") {
      const planets = await fetchPageWithDetails<Planet>(listUrl, currentAbortController.signal)
      renderPlanets(planets)
    } else {
      const people = await fetchPageWithDetails<Person>(listUrl, currentAbortController.signal)
      renderPeople(people)
    }
    statusElement.hidden = true
  } catch (err) {
    if ((err as Error).name === "AbortError") return
    statusElement.hidden = false
    statusElement.textContent = `Fehler: ${(err as Error).message}`
    console.error(err)
  } finally {
    starfield?.stopWarp?.()
  }
}

// ======================== EVENTS ========================
tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const label = (button.textContent || "").trim()
    currentResource = tabLabelToResource(label)
    setActiveTab(currentResource)
    loadResource(currentResource, searchInput?.value)
  })
})

searchForm.addEventListener("submit", (e) => {
  e.preventDefault()
  loadResource(currentResource, searchInput?.value)
})

// ======================== STARFIELD & INITIAL ========================
starfield = new Starfield("#starfield")

let t = 0
setInterval(() => {
  t += 0.02
  starfield!.setDrift(Math.sin(t) * 0.2, Math.cos(t * 0.2))
}, 50)

setActiveTab(currentResource)
