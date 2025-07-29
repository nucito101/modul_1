//* Deklarierte Funktionen dürfen auch in Zeilen vor ihrer Deklaration aufgerufen werden
//* Das nennt sich "Hoisting"
printMessages()

//* Funktionsdeklaration, da mit function Keyword am Anfang der Zeile definiert
function printMessages(): void {
  //* Dinge die während Funktionsausführung passieren und mit der Außenwelt interagieren
  //* => Seiteneffekte / Side effects
  console.log("Guten Morgen")
  console.log("Guten Mittag")
  console.log("Guten Abend")
}

// so in reinem JS
// function addTwenty(num) {
//   return num + 20;
// }

// so in TS, mit Typ für Parameter und Ergebnis
function addTwenty(num: number): number {
  //* return muss zwingend einen Wert vom Typ number zurueckgeben
  return num + 20
}

console.log(addTwenty(20)) // hier soll 40
addTwenty(100) // und hier soll 120 rauskommen

// soll bis zu 5 zahlen addieren
// * mit dem gleichzeichen nach dem parametertyp können wir einen defaultwert für diesen Parameter festlegen.
// * in diesem Beispiel hier: werden zahlen nicht übergeben, werden sie gleich null gesetzt
function addABunchOfNumbers(num1: number, num2: number = 0, num3: number = 0, num4: number = 0, num5: number = 0) {
  return num1 + num2 + num3 + num4 + num5
}

console.log(addABunchOfNumbers(10)) // => 10
console.log(addABunchOfNumbers(10, 30, 20, 40)) // => 60
console.log(addABunchOfNumbers(10, 30, 20, 5, 1)) // => 66

// mit ? koennen wir ausdruecken, dass ein bestimmter wert nicht uebergeben werden muss.
// er darf also undefined sein
// das "wirkt" nur bei den Parametern am Ende der Parameterliste
function getGreetingMessage(name: string, customGreeting?: string) {
  const greeting = customGreeting || "Hallo"
  return greeting + name
}

getGreetingMessage("John") // "Hallo John"
getGreetingMessage("John", "Guten Abend") // "Guten Abend John"

//! Hoisting funktioniert nur mit funktionsdeklarationen
// console.log(getMehrwertsteuer(200, 7)) // 14

// neben funktionsdeklarationen gibt es auch function expressions
const getMehrwertsteuer = function (wert: number, steuerSatz: number = 19): number {
  return (wert / 100) * steuerSatz
}
console.log(getMehrwertsteuer(200, 7)) // 14

const steuerSatzMarried = 0.3
const steuerSatzUnmarried = 0.35

function calculateEinkommenssteuer(einkommen: number, isMarried: boolean): number {
  let steuerSatz: number
  if (isMarried) {
    //? wir sind hier in einem codeblock der ein child-scope von calculateEinkommenssteuer ist,
    //? haben also zugriff auf variablen die dort, oder weiter oben definiert wurden
    steuerSatz = steuerSatzMarried
  } else {
    steuerSatz = steuerSatzUnmarried
  }
  return einkommen * steuerSatz
}

//! Das hier geht nicht, da steuerSatz im Scope der Funktion definiert wurde
// console.log(steuerSatz)

console.log("Steuern fuer 30000, unverheiratet: ", calculateEinkommenssteuer(30000, false))
console.log("Steuern fuer 40000, verheiratet: ", calculateEinkommenssteuer(40000, true))

//* ES6 Arrow Functions:
const addThirty = (num: number) => {
  return num + 30
}

//* Arrow Function mit implizitem Return
const addVierzig = (num: number) => num + 40

// [1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => console.log(num * 40));
