import type { ICharacter, ICharaterResult } from "./Interface/Character"
import type { IEpisode, IEpisodeResult } from "./Interface/Episode"
import type { ILocation, ILocationResult } from "./Interface/Location"
import "./style.css"

const BASE_URL = `https://rickandmortyapi.com/api/`
const CHARAKTER_URL = `${BASE_URL}character`
const LOCATION_URL = `${BASE_URL}location`
const EPISODEN_URL = `${BASE_URL}episode`

// DOM

const outputElement = document.getElementById("output") as HTMLDivElement
const characterElement = document.getElementById("api-character") as HTMLAnchorElement
const locationElement = document.getElementById("api-location") as HTMLAnchorElement
const episodeElement = document.getElementById("api-episode") as HTMLAnchorElement
const nextPageElement = document.getElementById("next-page") as HTMLButtonElement
const lastPageElement = document.getElementById("last-page") as HTMLButtonElement

let currentPageUrl: string = CHARAKTER_URL
nextPageElement.addEventListener("click", async (event: Event) => {
  event.preventDefault()
  outputElement.innerHTML = ""
  try {
    const resp = await fetch(currentPageUrl)
    // console.log(await resp.json())
    const { info, results } = (await resp.json()) as ICharacter
    // console.log(info)
    // console.log(results)
    results.forEach(async (result: ICharaterResult) => {
      const divElement = document.createElement("div") as HTMLDivElement
      divElement.innerHTML = await dislpayCharakter(result)
      outputElement.appendChild(divElement)
    })

    if (info.next) {
      currentPageUrl = info.next
    }
  } catch (err) {}
})

characterElement.addEventListener("click", async () => {
  outputElement.innerHTML = ""
  try {
    const resp = await fetch(CHARAKTER_URL)
    if (resp.status === 200) {
      const { results } = (await resp.json()) as ICharacter
      // console.log(resp)
      // console.log(data)
      results.forEach(async (result: ICharaterResult) => {
        // console.log(result)
        const characterContainer = document.createElement("div") as HTMLDivElement
        characterContainer.innerHTML = await dislpayCharakter(result)
        outputElement.appendChild(characterContainer)
      })
    }
  } catch (error) {
    console.error(error)
  }
})

async function dislpayCharakter(character: ICharaterResult): Promise<string> {
  const resultAsString = `
  <div class="flex flex-row justify-center align-sub">
  <p class="text-red-600 font-bold">Name: ${character.name}</p>
  <p class="text-amber-300">Status: ${character.status}</p>
  <p>Gender: ${character.gender}</p>
  <p>Origin: ${character.origin?.name}</p>
  <p class="text-pink-400">Location: ${character.location?.name}</p>
  <img src="${character.image}" alt="${character.name}"
  </div>
  `
  return resultAsString
}

locationElement.addEventListener("click", async () => {
  outputElement.innerHTML = ""
  try {
    const resp = await fetch(LOCATION_URL)
    const { results } = (await resp.json()) as ILocation
    for (let result of results) {
      // console.log(result)
      const locationContainer = document.createElement("div") as HTMLDivElement
      locationContainer.innerHTML = await dislpayLocation(result)
      outputElement.appendChild(locationContainer)
    }
  } catch (error) {
    console.error(error)
  }
})

async function dislpayLocation(location: ILocationResult): Promise<string> {
  const nameCharacterResidents = await fetchResident(location.residents)
  const resultAsString = `
  <p>${location.name}</p>
  <p>Resident-Character Name: ${nameCharacterResidents}</p>
  `
  return resultAsString
}

async function fetchResident(locationResidentUrl: string[]): Promise<string> {
  const characterArray: string[] = []

  for (let residentUrl of locationResidentUrl) {
    try {
      const resp = await fetch(residentUrl)
      const character: ICharaterResult = await resp.json()
      if (character.name) {
        characterArray.push(character.name)
      }
    } catch (error) {
      console.error(error)
    }
  }
  return characterArray.join(", ")
}

episodeElement.addEventListener("click", async () => {
  outputElement.innerHTML = ""
  try {
    const resp = await fetch(EPISODEN_URL)
    const data = (await resp.json()) as IEpisode
    await Promise.all(
      data.results.map(async (result: IEpisodeResult) => {
        // console.log(result)
        const episodeContainer = document.createElement("div") as HTMLDivElement
        episodeContainer.innerHTML = await displayEpisode(result)
        outputElement.appendChild(episodeContainer)
      })
    )
  } catch (error) {
    console.error(error)
  }
})

async function displayEpisode(episode: IEpisodeResult): Promise<string> {
  const characterName = await fetchResident(episode.characters)
  // console.log(episode)
  const resultAsString = `
  <div>
  <p>Name: ${episode.name}</p>
  <p>Character: ${characterName}</p>
  </div>
  `

  return resultAsString
}
