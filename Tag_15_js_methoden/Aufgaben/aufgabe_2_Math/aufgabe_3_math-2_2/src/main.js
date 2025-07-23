const randomNumber = Math.floor(Math.random() * 10) + 1

const userInput = window.prompt("Schätzen Sie eine Nummer zwischen 1 und 10")

if (randomNumber == userInput) {
  console.log("Du hast Gewonnen. Die nummer lautet ", randomNumber)
} else {
  console.log("Du hast verloren. Die nummer lautet ", randomNumber)
}
