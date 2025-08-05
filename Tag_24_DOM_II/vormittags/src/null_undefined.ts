// undefined, null, any

// undefined
// klassischer Fall: Variable wurde deklariert, aber es wurde ihr kein Wert zugewiesen

let sum20: number

console.log(sum20)

// Hinter dem undefined verteckt sich ein true/false
// if (sum20) {
//   console.log("Die Zahl wurde gefunden")
// }

//  ein weiterer fall Wenn eine function kein explizierten Rückgabewert hat, git uns eine undefined zurück

// function myFunc() {}
// console.log(myFunc())

// ein letzter Fall: Der zugriff auf nich existierende Eigenschaften eines Objects

// let myObj = {}
// console.log(myObj.username)

// Mit Array

type TplantsSchema = {
  name: string
  color: string
}

const plants: TPlantsSchema[] = [
  { name: "rose", color: "red" },
  { name: "ivy", color: "green" },
  { name: "lavander", color: "purple" },
]

// Sobald ihr mit geschweiften Klammern arbeitet, denkt bitte dran dass ihr mit return arbeiten solltet
const ichSuchNachKaktus = plants.find((plant: TPlantsSchema) => {
  return plant.name.includes("kaktus")
})

console.log(ichSuchNachKaktus)

// null wenn etwas nicht Vorhanden ist / nicht existiert

const myBtn = document.getElementById("mein-btn")
console.log(myBtn)

// undefined bedeutet in TS, dass eine Variable wurde bereits deklariert, aber wurde noch nicht zugewiesen
// Elvis Operator ? kann nur bei zuweisung und ausgaben verwendet werden kurz gesagt => auf der rechten Seite
const someText = myBtn?.innerText
console.log(someText)

// man kann null verwenden, um ein Variable zuzuweisen, die Später ein Objectwert erhalten soll
type TmyUser = {
  id?: number
  name: string
  age?: number
}

let user: null | TmyUser = null

// Simulation vom Backend
user = {
  name: "Joe",
  age: 20,
}

const userCollection: TmyUser[] = [
  { id: 1, name: "Andre" },
  { id: 2, name: "Riya" },
  { id: 3, name: "Malte" },
]

function findUserById(id: number): TmyUser | null {
  for (let user of userCollection) {
    if (user.id === id) {
      return user
    }
  }
  // kein User wurde gefunden, weil es existiert nicht
  return null
}

const user2 = findUserById(2)
console.log(user2)

// any
//  Das sollte sehr sehr sehr selten verwendet werden
const iAmSomeThing: any = {
  firstName: "Joe",
}

function returnAnyThing(): any {
  return 3983942
}

returnAnyThing()
