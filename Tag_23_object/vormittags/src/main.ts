// Object

// Wie schreib man Obj ?
// Obj werden immer mit geschweiften Klammern geschrieben
//  sie bestehen aus Eigenschaften und deren Werte => key und Values
// zuerst kommt der Name der Eigenschaft dann ein Doppelpunkt und der Wert

const user = {
  vorName: "Joe",
  nachName: "Doe",
  age: 30,
  address: "Main Street",
}
console.log(user)
console.log("Vorname:", user.vorName)
user.vorName = "Lisa"
console.log("Vorname nach Referenz:", user.vorName)

// Eigenschaften eines Obj können auch Array oder wieder ein Obj sein
const user2 = {
  vorName: "Marc",
  nachName: "Mustermann",
  age: 42,
  beruf: "Trainer",
  address: {
    stadt: "Berlin",
    strasse: "Musterstraße",
    plz: 10111,
  },
  hobbies: ["soccer", "tennis", "play Piano"],
}

console.log(user2.nachName)
console.log(user2.address.strasse)

// const user3 ={
//   username: "Malte"
// }

// Type => wir defienieren uns einen eigenen Datentype namens TMovie und legen die pflichteigen und Datentypen fest

type TMovie = {
  title: string
  year: number
  mainCharacter: string
  categories: string[]
}

const movie1: TMovie = {
  title: "The godfather",
  year: 1972,
  mainCharacter: "Don Vito",
  categories: ["action"],
}

console.log(movie1)
movie1.categories.push("drama")

const movie2: TMovie = {
  title: "Batman Begins",
  year: 2005,
  mainCharacter: "Batman",
  categories: ["Adventure", "Drama", "Fantasy"],
}

const movie3: TMovie = {
  title: "The Lord of the Rings: The Two Towers",
  year: 2002,
  mainCharacter: "Gollum",
  categories: ["Adventure", "Drama", "Fantasy"],
}

const movieColection: TMovie[] = [movie1, movie2, movie3]

// forEach(), map(), die ganzen Arrays Methoden werden immer mit einem CallBack function geschrieben

// ich kann das Array von dem Object dann in einer Schleife durchlaufen und jeweils einzelne Eigenschaften ausgeben

movieColection.forEach((movie: TMovie) => {
  console.log(movie1.title)
})

// movies nach Erscheinungsjahr sortieren

movieColection.sort((movieA: TMovie, movieB: TMovie) => {
  return movieA.year - movieB.year
})

console.log(movieColection)

const movie4: TMovie = {
  title: "Hulk",
  year: 2010,
  mainCharacter: "Hulk",
  categories: ["Action", "Fantasy"],
}

movieColection.push(movie4)

// for in ist für Object zuständig
// key
for (const key in movie4) {
  console.log(key)
}

// Values
for (const values in movie4) {
  console.log(movie4[values])
}

// V2 Neu
console.log(Object.keys(movie4))
console.log(Object.values(movie4))
