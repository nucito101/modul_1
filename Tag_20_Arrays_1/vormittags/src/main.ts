//* Array Docs von MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const item1: string = "Tomatensuppe"

//* Arrays sind Listen aus Werten. Sie werden mit [] gebildet, die einzelnen Werte werden durch Kommas getrennt
//* Aus JS Sicht, dürfen die Werte unterschiedliche Typen haben
const einkaufsListe: string[] = ["Tomatensuppe", "Zwiebelsuppe", "Gemüsebrühe", "Pilzsuppe"]
// Andere Mögliche Notation für den Typ: Array<string> (Array aus strings)

//* Mit .length können wir auf die Zahl der Elemente im Array zugreifen
einkaufsListe.length // => 4

//* Mit .push können wir neue Einträge ans Ende des Arrays anfügen. Der alte Array selbst wird dabei verändert!
//* Als Rückgabewert erhalten wir die neue Länge des Arrays.
einkaufsListe.push("Vogelfutter")

// Obacht: Werte die wir pushen müssen zum Typ des Arrays passen.
//! einkaufsListe.push(999)

//* Wir können auch mehrere Werte auf einmal pushen
einkaufsListe.push("Erbseneintopf", "Kartoffelsuppe")
console.log(einkaufsListe)
console.log(einkaufsListe.length)

//* Mit .pop können wir den letzten Eintrag des Arrays "platzen lassen"
//* — wir bekommen seinen Inhalt als Rückgabewert, und er wird aus dem Array entfernt.
//* Auch diese Methode ist "verändernd"/"destruktiv"/"mutierend"
einkaufsListe.pop()

//* Da wir den Wert zurückgegeben bekommen, können wir ihn z.B. in die Konsole loggen:
console.log(einkaufsListe.pop())
//* Oder in einer anderen Variable ablegen:
const lastItem = einkaufsListe.pop()

//* .shift entspricht .pop, agiert aber auf dem ersten Element des Arrays, und entfernt dieses (und gibt es zurück)
einkaufsListe.shift()

//* .unshift entspricht .push, und fügt ein Element zum Anfang des Arrays hinzu
//* Wie auch .push, gibt es die neue Länge des Arrays zurück
einkaufsListe.unshift("Tofu")

//* mit eckigen Klammern und dem gewünschten Index, können wir auf beliebige Elemente des Arrays zugreifen
console.log(einkaufsListe[2]) // => Element mit Index 2, "Gemüsebrühe"

//* Wir können diese Syntax auch nutzen um den Array zu verändern
einkaufsListe[1] = "Knoblauchsuppe" // Das Element mit Index 1 ist von nun an "Knoblauchsuppe"

//* Beispiel eiskalt geklaut von
//* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
const animals = ["ant", "bison", "camel", "duck", "elephant"]

console.log(animals.slice(2))
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4))
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5))
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2))
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1))
// Expected output: Array ["camel", "duck"]

console.log(animals.slice())
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

//* SPLICE
//* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
//* Mit Splice können wir an beliebigen Stellen im Array Elemente hinzufügen und/oder bestehende überschreiben oder löschen
// splice(startIndex, deleteCount, neuesItem1, neuesItem2, /* …, */ neuesItemN)

const months = ["Jan", "M4rch", "4pril", "May", "Jun5"]
months.splice(1, 2, "March", "April") // => ["Jan", "March", "April", "May", "Jun5"]

months.splice(4, 1, "June", "July", "August") //=> ["Jan", "March", "April", "May", "June","July","August"]
console.log(months)

//* .reverse => Überraschung, der Array wird umgedreht
//! Obacht, auch hier wird der Array mutiert
const numbers: number[] = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
numbers.reverse()
console.log(numbers)

//* Um .reverse auf einen String anwenden zu können, müssen wir diesen erst zu einem Array umwandeln
//* bzw. aufspalten, dann umdrehen, und dann wieder zusammenführen
const string = "nafetS"
const characters = string.split("")
/* Argument hier ist das Zeichen entlang dessen getrennt werden soll. "" => Jeder Buchstabe wird getrennt */
characters.reverse()
const reversedString = characters.join("") // Argument hier analog zum Trennzeichen
console.log(reversedString)

//* .sort
// sort sortiert arrays, und mutiert diese dabei
// wir können sort eine custom Sortierfunktion übergeben, ansonsten wird alphabetisch sortiert
// Ja, auch bei Zahlen

const monthsAgain = ["March", "Jan", "Feb", "Dec"]
months.sort() // => [ "Dec", "Feb", "Jan", "March"]

// Aber:

const numbersAgain = [11, 2, 1, 0, 9]
numbersAgain.sort() // => [0,1,11,2,9]
//! Bald lernen wir, wie wir das Sortierverhalten konfigurieren können

// * Arrays kombinieren
const obst = ["Blaubeeren", "Birnen", "Melone", "Mango", "Himbeeren"]
const gemuese = ["Brokkoli", "Lauch", "Möhren", "Spinat"]

// .concat kombiniert Arrays (beliebig viele)
const combinedArray = obst.concat(gemuese)
console.log({ combinedArray })

// mit ... koennen wir Arrays "auspacken" (quasi als wuerden wir die Klammern entfernen)
// und sie z.B. gemeinsam in einem neuen Array ablegen
const combinedArray2 = [...obst, ...gemuese]
console.log({ combinedArray2 })

// das hier ist keine echte kopie, beide variablen verweisen auf den gleichen Speicher
// d.h. wenn ich naiveObstkopie verändere, ändert sich auch der Wert hinter obst
const naiveObstKopie = obst

// das hier ist eine echte Kopie, kann getrennt vom original mutiert werden
const obstKopie = [...obst]
// andere Möglichkeiten:
const obstKopie2 = obst.concat()

//* Higher Order Functions

//* .forEach
// Wir koennen forEach auf jedem Array aufrufen, und ihm eine Funktion als Argument übergeben
// Diese Funktion wird dann für jedes Element im Array aufgerufen

combinedArray.forEach(function (element, index) {
  console.log({ element, index })
})
