const starWarsActor: [string, string] = ["Luke Skywalker", "Mark Hamill"]

const starWarsActors: [string, string][] = [
  ["Luke Skywalker", "Mark Hamill"],
  ["Darth Vader", "James Earl Jones"],
  ["Yoda", "Frank Oz"],
  ["Han Solo", "Harrison Ford"],
  ["Princess Leia", "Carrie Fisher"],
]

console.log(starWarsActor)

starWarsActors.forEach(([rolle, schauspieler]) => {
  console.log(`${schauspieler} spielt ${rolle}`)
})
