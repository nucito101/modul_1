// # Functions

// * Funktion ein Argument uebergeben - Parameter vs. Argument
//? Parameter = Platzhalter bei der Definition von der Funktion
//? Argument = der Wert der an die FN uebergeben wird, wenn sie aufgerufen wird

function sayHello(firstName) {
  const btnOutput = document.querySelector(".btn-output")
  console.log(btnOutput)

  btnOutput.innerHTML = `<p>${firstName}</p>`
}

// ? Counter

let outputVal = 0

function calc(operator) {
  const outputH4 = document.querySelector(".output-vom-rechner")
  outputVal = outputVal + operator
  outputH4.innerText = outputVal
}

function malZwei() {
  const outputH4 = document.querySelector(".output-vom-rechner")
  outputVal = outputVal * 2
  outputH4.innerText = outputVal
}

function reset() {
  const outputH4 = document.querySelector(".output-vom-rechner")
  outputVal = 0
  outputH4.innerText = outputVal
}

// # values auslesen

function getInputVal() {
  const name = document.querySelector("#name").value
  const age = document.querySelector("#age").valueAsNumber
  const range = Number(document.querySelector("#range").value)
  const checkbox = document.querySelector("#checkbox").checked
  const bday = document.querySelector("#bday").value

  console.log(name)
  console.log(age)
  console.log(range)
  console.log(checkbox)
  console.log(bday)

  document.querySelector(
    ".values"
  ).innerHTML += `<p>${name}, ${age}, range: ${range}, happy: ${checkbox}, Bday: ${bday}</p>`
}

//# Conditional Statements -> if/else
//? In jeder Programmiersprache muss der Code Entscheidungen treffen und entsprechend unterschiedliche Eingaben ausführen. Beispielsweise in einem Spiel: Wenn die Anzahl der Leben des Spielers 0 ist, dann ist das Spiel vorbei. In einer Wetter-App: Wenn sie morgens betrachtet wird, zeigen Sie eine Sonnenaufgangs-Grafik an; zeigen Sie Sterne und einen Mond, wenn es Nacht ist. In diesem Artikel werden wir untersuchen, wie sogenannte bedingte Anweisungen in JavaScript funktionieren.

//? Javascript if else führt Anweisungen aus, wenn eine Bedingung wahr ist. Der optionale else-Zweig wird ausgeführt, wenn die Bedingung nicht wahr ist. Die Bedingung muss dabei stets in runde Klammern gesetzt werden, damit kein Syntaxfehler entsteht.

const age = 17

if (age >= 18) {
  console.log("Du bist volljaehrig!")
} else {
  console.log("Du bist minderjaehrig!")
}

// Function check
// # if else

function checkNumber() {
  // entweder .value (oder aehnliches) am ende des querySelector
  const inputNum = document.querySelector(".num-input") //.value
  // oder eben als neue variable deklarieren
  const inputNumVal = inputNum.value

  if (inputNumVal < 0) {
    console.log("Zahl ist kleiner als 0.")
    // "=" => zuweisung
    // "==" => wert vergleich - 0 - "0"
    // "===" => vergleicht wert also 0 oder "0" und den type also string, number etc.
  } else if (inputNumVal == 0) {
    console.log("Zahl ist 0.")
  } else {
    console.log("Zahl ist groesser als 0")
  }
}

// Login
// ? Login daten
// ! global scope
const username = "marco"
const password = "123"

function checkUserData() {
  let loginUserName = document.querySelector("#userName")
  let passwordInput = document.querySelector("#password")

  const userNameVal = loginUserName.value
  const passwordVal = passwordInput.value
  console.log(userNameVal, passwordVal)
  console.log(username)

  const output = document.querySelector(".login-feedback")

  // ? && operator: damit kannst du in einer if abfrage mehrere bedingungen abfragen ( die !ALLE! true ergeben muessen )
  // ? || operator: damit kannst du in einer if abfrage mehrere bedingungen abfragen ( die !NICHT! alle true ergeben muessen )
  if (username == userNameVal && password == passwordVal) {
    output.innerHTML = "<p>Login successful.</p>"
  } else {
    output.innerHTML = "<p>Username or password wrong.</p>"
  }
}

// # switch

// wir brauchen einmal eine variable um die sich unser switch-statement kuemmert (abhaengigkeit)
const age1 = 20

// es faengt immer mit dem switch keyword an in klammern kommt die abhaenigkeit(unsere variable z.B.)
switch (age1) {
  // in unserem switch oeffnen wir einzelne cases in denen wir dann unsere logik aufbauen je nachdem was gerade die variable fuer einen wert hat ( also unseren case )
  case 20:
    console.log("age ist 20")
    // mit break sagen wir dass dieser case zuende ist, und dass sich um die naechste logik gekuemmert werden kann
    break
  case 21:
    console.log("age ist 21")
    break
  case 18:
    console.log("age ist 18")
    break
  // case sunny:
  // case rainy:
  default:
    console.log("age ist uns egal")
}

// # classList -> add, remove & toggle

// add
function addClass() {
  const headline = document.querySelector(".add")
  headline.classList.add("big")
}

// remove
function removeClass() {
  const headline1 = document.querySelector(".remove")
  headline1.classList.remove("bg-1")
}

// toggle
function toggleClass() {
  // ! wichtig beim removen der class wird auch das element nicht mehr gefunden, wenn es ueber diese class gezogen wurde.
  const headline1 = document.querySelector(".headline-toggle")
  headline1.classList.toggle("remove")
}
