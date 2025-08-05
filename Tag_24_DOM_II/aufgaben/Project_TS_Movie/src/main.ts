import "./style.css"
import { movies } from "./data"

type Movie = [title: string, year: string, director: string, duration: string, genres: string[], rating: string]

const searchInput = document.getElementById("searchinput") as HTMLInputElement
const movieContainer = document.getElementById("movielist") as HTMLDivElement
const searchBtn = document.getElementById("search") as HTMLButtonElement
const sortYear = document.getElementById("release") as HTMLButtonElement
const sortByRating = document.getElementById("popular") as HTMLButtonElement
const sortUpBtn = document.getElementById("sortup") as HTMLButtonElement
const sortDownBtn = document.getElementById("sortdown") as HTMLButtonElement

//# === Button Function ===

let currentSortKey: "year" | "rating" | null = null
let currentSortOrder: "asc" | "desc" | null = null

sortYear.addEventListener("click", () => {
  currentSortKey = "year"
})

sortByRating.addEventListener("click", () => {
  currentSortKey = "rating"
})

sortUpBtn.addEventListener("click", () => {
  currentSortOrder = "asc"
  applySort()
})

sortDownBtn.addEventListener("click", () => {
  currentSortOrder = "desc"
  applySort()
})

// //#  === Sort Function ===

function applySort() {
  if (!currentSortKey || !currentSortOrder) return

  let sorted = [...movies]

  if (currentSortKey === "year") {
    sorted.sort((a, b) => (currentSortOrder === "asc" ? +a[1] - +b[1] : +b[1] - +a[1]))
  } else if (currentSortKey === "rating") {
    sorted.sort((a, b) => (currentSortOrder === "asc" ? +a[5] - +b[5] : +b[5] - +a[5]))
  }

  showMovies(sorted)
}

//# === Display Movie Function ===

function showMovies(movieArray: typeof movies, showNotFound: boolean = false) {
  movieContainer.innerHTML = ""

  if (movieArray.length === 0 && showNotFound) {
    const notFound = document.createElement("div")
    notFound.className = "movie-card not-found"
    notFound.innerHTML = `
      <h3>Movie not found</h3>
    `
    movieContainer.appendChild(notFound)
    return
  }

  movieArray.forEach(([title, year, director, duration, , rating]) => {
    const card = document.createElement("div")
    card.className = "movie-card"
    card.innerHTML = `
      <h3>${title}</h3>
      <p><strong>Year:</strong> ${year}</p>
      <p><strong>Director:</strong> ${director}</p>
      <p><strong>Duration:</strong> ${duration}</p>
      <p><strong>Rating:</strong> ⭐ ${rating}</p>
    `
    movieContainer.appendChild(card)
  })
}
showMovies(movies)

const btnEffect = document.querySelectorAll<HTMLButtonElement>(".btn")
const outputDiv = document.getElementById("output") as HTMLDivElement

btnEffect.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.classList.contains("active")) {
      button.classList.remove("active")
      outputDiv.textContent = ""
    } else {
      btnEffect.forEach((a) => a.classList.remove("active"))
      button.classList.add("active")
      outputDiv.textContent = `${button.textContent} Movies` || ""
    }
  })
})

showMovies(movies)

// //# === Input Function ===

function filterMovies(input: string) {
  const lowerInput = input.toLowerCase()
  return movies.filter(
    ([title, year, director]) =>
      title.toLowerCase().includes(lowerInput) ||
      year.includes(lowerInput) ||
      director.toLowerCase().includes(lowerInput)
  )
}

searchInput.addEventListener("keyup", () => {
  searchBtn.click()
})

searchBtn.addEventListener("click", () => {
  const inputValue = searchInput.value.trim()
  const filtered = filterMovies(inputValue)
  showMovies(filtered, true)
})

//# === Genre Filter ===

const genreContainer = document.getElementById("genre_list") as HTMLDivElement
const toggleGenre = document.getElementById("toggle_genres") as HTMLButtonElement
let activeGenreBtn: HTMLButtonElement | null = null

toggleGenre.addEventListener("click", () => {
  genreContainer.classList.toggle("hidden")
})

const genres = Array.from(new Set(movies.flatMap(([, , , , genres]) => genres))).sort()

genres.forEach((genre) => {
  const btn = document.createElement("button")
  btn.className = "genre-btn"
  btn.textContent = genre
  genreContainer.appendChild(btn)

  btn.addEventListener("click", () => {
    if (activeGenreBtn === btn) {
      btn.classList.remove("active")
      activeGenreBtn = null
      searchInput.value = ""
      outputDiv.textContent = ""
      showMovies(movies)
      return
    }

    if (activeGenreBtn) {
      activeGenreBtn.classList.remove("active")
    }

    btn.classList.add("active")
    activeGenreBtn = btn

    const filtered = movies.filter(([, , , , movieGenres]) => movieGenres.includes(genre))
    searchInput.value = ""
    btnEffect.forEach((b) => b.classList.remove("active"))
    outputDiv.textContent = `Genre: ${genre}`
    showMovies(filtered, true)
  })
})
