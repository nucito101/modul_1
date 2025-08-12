import Car from "./classes/Car"
import { userListe } from "./data/userDate"
import { IAdress } from "./Interfaces/IAdress"
import IMovie from "./Interfaces/IMovies"
import IUser from "./Interfaces/IUser"

console.log(userListe)

const ichSuchNachKeys = Object.keys(userListe)

console.log(ichSuchNachKeys)

// forEach() => um irgendwas sehen zu können brauchen wir console.log und kein return
// map() => um irgendwas sehen zu können brauchen wir unbedingt return und console.log() ist Optional
const allesKeyInObj = userListe.map((user: IUser) => {
  // console.log(Object.keys(user))
  return Object.keys(user)
})

console.log(allesKeyInObj)

// 1.Object.keys() 2.Object() 3. Object.entries()

userListe.forEach((user: IUser) => {
  const divElement = document.createElement("div") as HTMLDivElement
  let content = `<h3>Username: ${user.username}</h3>`
  const ObjToArray = Object.entries(user)
  console.log("ObjToArray", ObjToArray)
  ObjToArray.forEach(([key, value]: [string, string | IAdress | IMovie[]]) => {
    content += `<ul>
  <li>${key} : ${typeof value === "string" ? value : ObjToArrayFunction(value)}</li>
  </ul>`
  })
  divElement.innerHTML = content
  document.body.appendChild(divElement)
})

// function ObjToArrayFunction(valueParameter: IAdress | IMovie[]): HTMLDivElement | string {
//   if (Array.isArray(valueParameter)) {
//     const divMovieElement = document.createElement("div") as HTMLDivElement
//     valueParameter.forEach((movie: IMovie) => {
//       divMovieElement.innerHTML = `<h6>${movie.title}</h6>
//                           <p>${movie.rate}</p>`
//     })
//     return divMovieElement
//   }
// }

function ObjToArrayFunction(valueParameter: IAdress | IMovie[]): HTMLDivElement | string | undefined {
  if (Array.isArray(valueParameter)) {
    const divMovieElement = document.createElement("div") as HTMLDivElement

    // valueParameter.forEach((movie: IMovie) => {
    //   divMovieElement.innerHTML += `
    //     <h6>${movie.title}</h6>
    //     <p>${movie.rate}</p>
    //   `
    // })
    divMovieElement.style.display = "flex"
    const newMovieArrayValue = valueParameter.map((movie: IMovie) => {
      const myValue = (divMovieElement.innerHTML = ` <h6>${movie.title}</h6>
      <p>${movie.rate}</p>`)
      return myValue
    })
  } else {
    return `${valueParameter.street}, ${valueParameter.postalCode} ${valueParameter.city}`
  }
}

enum ColorPlattes {
  Red = "#c1121f",
  Brown = "#bc6c25",
  Yellow = "#ffd60a",
  BabyBlue = "#cae9ff",
}

const enumToArray = Object.entries(ColorPlattes)
console.log(enumToArray)

enumToArray.forEach(([key, value]: [string, string]) => {
  console.log(key, value)
  const btn = document.createElement("button") as HTMLButtonElement
  btn.textContent = key
  btn.style.backgroundColor = value
  document.body.appendChild(btn)
  btn.addEventListener("click", () => {
    document.body.style.backgroundColor = value
  })
})

console.clear()

// static

const car1 = new Car("Tesla", "X5")
console.log(car1)

Car.howManyCars()
Car.updateOrder()
Car.isAvailable("BMW")
