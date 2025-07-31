const drinks = [
  "Coca-Cola",
  "Apfelsaft",
  "Pepsi",
  "Traubensaft",
  "Sprite",
  "Orangensaft",
  "Red Bull Energy Drink",
  "Fanta",
]

const upperDrinks = drinks.map(toUpperCaseDrink)
console.log("Uppercase:", upperDrinks)

const likeMessages = drinks.map(createLikeMessage)
likeMessages.forEach((msg) => console.log(msg))

function toUpperCaseDrink(drink) {
  return drink.toUpperCase()
}

function createLikeMessage(drink) {
  return `I like ${drink}`
}
