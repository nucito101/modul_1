const beispielArray = [
  "Beerenkonfitüre",
  "blaubeeren",
  "Erdbeeren",
  "kartoffeln",
  "schlagsahne",
  "kichererbsen",
  "Kartoffelpüree",
  "eis",
]
const beispielNumberArray = [-10, 1, 3, -9, 3, 2, 7, 5]

//* Higher Order Functions
// Bedeutet: Funktionen die als Parameter andere Funktionen erhalten

//* .forEach
// Wir koennen forEach auf jedem Array aufrufen, und ihm eine Funktion als Argument übergeben
// Diese Funktion wird dann für jedes Element im Array aufgerufen

const meinCallbackFuerForEach = function (element: string, index: number) {
  console.log({ element, index })
}

beispielArray.forEach(meinCallbackFuerForEach)

//* Falls wir die Callbackfunktion inline definieren, sind keine expliziten Typ-Annotationen nötig.
// beispielArray.forEach(function (element, index) {
//     console.log({element, index})
// });

//* Foreach hat keinen Rückgabewert.
//* Um Dennoch Ergebnis außerhalb zu speichern, können wir externe variablen definieren

const bigBeispielArray: string[] = []
beispielArray.forEach((element) => {
  bigBeispielArray.push(element.toUpperCase())
  // console.log(bigBeispielArray)
})

// console.log(bigBeispielArray)

//* .includes
// includes gibt true/false zurueck, je nachdem ob das argument im Array vorliegt.

console.log("includes himbeeren:", beispielArray.includes("himbeeren"))
console.log("includes blaubeeren:", beispielArray.includes("blaubeeren"))

//* .indexOf
//! .indexOf gibt den Index zurueck falls das Element vorhanden ist, sonst -1

console.log("indexOf kartoffeln: ", beispielArray.indexOf("kartoffeln")) // => 2, da index von kartoffeln 2 ist
console.log("indexOf salami: ", beispielArray.indexOf("salami"))

if (beispielArray.indexOf("salami") !== -1) {
  console.log("Viel Spaß beim Essen der Salami")
}

if (beispielArray.includes("blaubeeren")) {
  console.log("Viel Spaß beim Essen der Blaubeeren")
}

//* .find
// find gibt uns das erste Element des Arrays zurueck, bei dem die übergebene Callbackfunktion "true" ergibt

// wir wollen ein element mit mindestens 12 zeichen finden
const findResult = beispielArray.find(function (value, index) {
  return value.length >= 12
})

const findResult2 = beispielArray.find(function (value) {
  return value.toLowerCase().includes("beere")
})

//* .findIndex => Das gleiche, gibt aber den Index zurueck

const findIndexResult = beispielArray.findIndex(function (value) {
  return value.toLowerCase().includes("beere")
})

//* .filter
// filter kriegt auch eine Prädikatsfunktion (Funktion die true oder false zurückgibt).
// es gibt einen Array zurück, der nur die Werte enthält für die die Funktion true ausgibt

const filteredArray = beispielArray.filter(function (value) {
  return value.toLowerCase().includes("beere")
})

const filteredNumbers = beispielNumberArray.filter((value) => value >= 0)

//* sort
//  Sort sortiert entweder alphabetisch, oder mit Hilfe einer übergebenen Vergleichsfunktion.
//  diese kriegt elemente a und b übergeben, und soll ein negatives ergebnis liefern wenn a kleiner ist als b, etc.

const unsortedNumbers = [1, 33, 20, 4, 19, 29, 7, 10, 999]

console.log(unsortedNumbers.sort()) //=> [ 1, 10, 19, 20, 29, 33, 4, 7, 999 ]
//! Problem: per default wird alles alphabetisch sortiert, auch Zahlen

// so kann z.B. numerisch aufsteigend sortiert werden
console.log(unsortedNumbers.sort((a, b) => a - b))
// so absteigend:
console.log(unsortedNumbers.sort((a, b) => b - a))
// so nach zahl der ziffern
console.log(unsortedNumbers.sort((a, b) => a.toString().length - b.toString().length))
// so nach zahl der zeichen
console.log(beispielArray.sort((a, b) => a.length - b.length))

//* .map
// .map ist eine Arraymethode die einen Array in einen Array mit transformierten Elementen verwandeln kann

const resultArray = beispielArray.map((element) => element.toUpperCase())

// alle quadrieren:
const squaredNumbers = beispielNumberArray.map((element) => element * element) // es gibt sonst auch Math.pow(element, 2)

// alle quadrieren und filtern, so dass maximal 99 groß
const squaredAndFilteredNumbers = beispielNumberArray.map((element) => element * element).filter((value) => value < 100)

// const beispielArray = [
// "Beerenkonfitüre",
//   "Blaubeeren 🫐",
//   "Erdbeeren 🍓",
//   "Kartoffeln 🥔",
//   "schlagsahne",
//   "kichererbsen",
//   "Eis 🍦"
// ];

const arrayWithEmojis = beispielArray.map((value) => {
  const lowerCaseValue = value.toLowerCase()

  if (lowerCaseValue.includes("blaubeer")) {
    return value + " 🫐"
  } else if (lowerCaseValue.includes("kartoffel")) {
    return value + " 🥔"
  } else if (lowerCaseValue.includes("erdbeer")) {
    return value + " 🍓"
  } else if (lowerCaseValue.includes("eis")) {
    return value + " 🍦"
  } else {
    return value
  }
})
console.log({ arrayWithEmojis })

//* Mehrdimensionale Arrays
// sind arrays die aus arrays bestehen.

const shoppingLists = [
  ["Eis", "Kartoffeln", "Kekse"],
  ["Hundefutter", "Socken", "Schokolade", "Klopapier"],
  ["Wein", "Schnapps", "Bier"],
]

// Zugriff auf das zweite Element im ersten Unterarray
console.log(shoppingLists[0][1])

// sortieren nach laenge
console.log(shoppingLists.sort((a, b) => a.length - b.length))

// mit .flat koennen wir mehrdimensionale arrays "plätten"
console.log(
  shoppingLists
    .flat()
    .sort()
    .map((value) => value.toUpperCase())
)
