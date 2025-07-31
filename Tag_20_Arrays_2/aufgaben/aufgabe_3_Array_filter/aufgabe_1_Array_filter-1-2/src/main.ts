const heroArr: (string | null | undefined)[] = [
  "Superman",
  "Batman",
  undefined,
  undefined,
  "Wonder Woman",
  "Spider-Man",
  "Black Widow",
  "Iron Man",
  "Thor",
  "Catwoman",
  undefined,
  null,
]

function showHeroesCleaned(arr: (string | null | undefined)[]): string[] {
  return arr.filter((hero): hero is string => hero !== null && hero !== undefined)
}

console.log("Vorher:", heroArr)

const cleanedHeroes = showHeroesCleaned(heroArr)

console.log("Nachher:", cleanedHeroes)
