import Dog from "./Classes/Dog"
import LibaryBook from "./Classes/LibaryBook"
import Owner from "./Classes/Owner"
import Person from "./Classes/Person"

const ownerVariable = new Owner("Joe Doe", "Musterstraße", 10111, new Date(2022, 3, 25))

console.log(ownerVariable)

const myDog = new Dog("sunny", 10, ownerVariable, "2024.06.02")
console.log(myDog)
// myDog.age = 20

console.log(myDog.dogInGerman)
console.log(myDog.age)
console.log(myDog.name)

const myInputElement = document.getElementById("myInput") as HTMLInputElement
document.querySelector("form")?.addEventListener("submit", (e: Event) => {
  e.preventDefault()
  myDog.name = myInputElement?.value
  console.log(myDog)
})

myDog.sleep()
myDog.bark("wuff wuff wuff")

myDog.eat()
myDog.eat()
myDog.eat()
myDog.eat()
myDog.eat()
console.log(myDog.isHunger())

const andre = new Person("Andre", "Schmidt", new Date("2004-01-01"))

andre.email = "andre@email.com"

console.log(andre.email)
console.clear()

const goodGirlBook = new LibaryBook("Good Girl", "Aria Daba")
console.log(goodGirlBook)
goodGirlBook.borrowBook("Malte")
goodGirlBook.returnBook()
goodGirlBook.borrowBook("Farid")

goodGirlBook.borrowBook("Andre")
