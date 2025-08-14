// URL Linke = https://api.chucknorris.io/jokes/random

type TJoke = {
  icon_url: string
  id: string
  url: string
  value: string
}

const myJokeBtn = document.getElementById("joke-button") as HTMLButtonElement
const jokeOutput = document.getElementById("joke-output") as HTMLParagraphElement

const URL_JOKE_API = "https://api.chucknorris.io/jokes/random"
myJokeBtn.addEventListener("click", () => {
  fetch(URL_JOKE_API)
    .then((response: Response) => {
      console.log(response)

      return response.json()
    })
    .then((joke: TJoke) => {
      console.log(joke)
      const imgElement = document.createElement("img") as HTMLImageElement
      jokeOutput.textContent = joke.value
      imgElement.src = joke.icon_url
      document.body.appendChild(imgElement)
    })
})
