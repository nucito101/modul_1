// Das ist ein String Array

const cocktails: string[] = ["Pina Colada", "Mojito", "Long Island Ice Tea", "Mojito", "Cuba Libre", "Pina Colada"]
console.log(cocktails.length)

// Set Methode
// Set verhält sich irgendwie wie Array, lässt aber nur eindeutige Werte zu
// Dazu kommen einige Methoden und zwar add, size und usw...

const cocktailWithSet = new Set<string>()

// add
cocktailWithSet.add("Pina Colada")
cocktailWithSet.add("Mojito")
cocktailWithSet.add("Long Island Ice Tea")
console.log(cocktailWithSet)

// kein Indexzugriff möglich
// size
console.log(cocktailWithSet.size)

// has
if (cocktailWithSet.has("Mojito")) {
  console.log("Es gibt Mojito auf der Karte")
}

const kostenMitSetMethode = new Set<number>()
kostenMitSetMethode.add(100)
kostenMitSetMethode.add(22)
kostenMitSetMethode.add(4)
kostenMitSetMethode.add(320)

// Es gibt eine kleine Gemeinsamkeit zwischen array uns Set Methode => forEach()

kostenMitSetMethode.forEach((number: number) => {
  console.log(number)
})

const setA = new Set([1, 3, 7])
const setB = new Set([3, 6, 9])

// Set ist eine Super Möglichkeit, um doppelte Werte in einem Array zu entfernen

const union = new Set([...setA, ...setB])
// Set ist eine super Möglichkeit, um doppelte Werte in einem Array zu entfernen
console.log(union)

const clearCocktailVariable = new Set(cocktails)
console.log(clearCocktailVariable)

//  V1
const meinArrayVomCocktailsSet = [...clearCocktailVariable]
// console.log(meinArrayVomCocktailsSet);

// V2
const myArrayVomCocktailSetVarianteZwei = Array.from(clearCocktailVariable)
console.log(myArrayVomCocktailSetVarianteZwei)

// Map methode ist ein spezielles object, dass man wie ein Nachschlagewerk oder Lection sehen kann

// wenn ich mit Map arbeite dann soll ich deren methode dementsprechend benutzen
const germanEnglishDictionary = new Map<string, string>()
germanEnglishDictionary.set("Tier", "Animal")
germanEnglishDictionary.set("froh", "happy")
germanEnglishDictionary.set("Montag", "Monaday")
console.log(germanEnglishDictionary)

germanEnglishDictionary.forEach((value, key) => {
  console.log(`${key} heißt übersetzt ${value}`)
})

// get
// mit get kann ich mir einen Wert aus der Variable germanEnglishDictionary herausholen
console.log(germanEnglishDictionary.get("Tier"))

// Bsp2

const italienMenu = new Map<number, string>()
italienMenu.set(20.0, "Pizza Margherita")
italienMenu.set(14.0, "Pizza Funghi")
italienMenu.set(7.0, "Bruscetta")
console.log(italienMenu)

console.log(italienMenu.get(14.0))

// Bsp 3
const iceMenu = new Map<number, string>()
iceMenu.set(10, "Himbeere")
iceMenu.set(11, "Erdbeere")
iceMenu.set(12, "Mandel")

console.log(iceMenu)

// Bsp 4
const iceMenu2 = new Map<number, string>()
const flavors = ["himbeere", "Erdbeere", "Mandel"]

flavors.forEach((flavor, index) => {
  iceMenu2.set(index, flavor)
})

console.log(iceMenu2)

// Tuple => eingeschränktes Array mit verschiedenen Datentypen
const customer5: [string, number, number] = ["Annie", 22, 1.73]

customer5[0] = "Lisa"
customer5[1] = 21314

type TSimplePerson = {
  name: string
  age: number
  height: number
}

const person: TSimplePerson = {
  name: "Annie",
  age: 22,
  height: 1.73,
}

console.log(person)
