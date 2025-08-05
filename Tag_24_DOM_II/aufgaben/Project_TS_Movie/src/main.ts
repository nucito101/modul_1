import "./style.css"
import { movies } from "./data"

const searchInput = document.getElementById("searchinput") as HTMLInputElement
const movieContainer = document.getElementById("movielist") as HTMLDivElement
const searchBtn = document.getElementById("search") as HTMLButtonElement
const sortYearUP = document.getElementById("latest") as HTMLButtonElement
const sortYearDown = document.getElementById("newest") as HTMLButtonElement
const sortByRating = document.getElementById("popular") as HTMLButtonElement

//#  === Sort Function ===

// ! newest film first
sortYearDown.addEventListener("click", () => {
  // searchInput.value = ""
  const sorted = [...movies].sort((a, b) => +b[1] - +a[1])
  showMovies(sorted)
})

// ! oldest film first
sortYearUP.addEventListener("click", () => {
  // searchInput.value = ""
  const sorted = [...movies].sort((a, b) => +a[1] - +b[1])
  showMovies(sorted)
})

// ! sort popularity
sortByRating.addEventListener("click", () => {
  // searchInput.value = ""
  const sorted = [...movies].sort((a, b) => +b[5] - +a[5])
  showMovies(sorted)
})

//# === Input Function ===

function filterMovies(input: string) {
  const lowerInput = input.toLowerCase()
  return movies.filter(
    ([title, year, director]) =>
      title.toLowerCase().includes(lowerInput) ||
      year.includes(lowerInput) ||
      director.toLowerCase().includes(lowerInput)
  )
}

searchInput.addEventListener("keydown", () => {
  searchBtn.click()
})

searchBtn.addEventListener("click", () => {
  const inputValue = searchInput.value.trim()
  const filtered = filterMovies(inputValue)
  showMovies(filtered, true) //
})

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
