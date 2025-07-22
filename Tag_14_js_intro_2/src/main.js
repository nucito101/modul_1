function sayHello(firstName) {
  const btnOutput = document.querySelector(".btn-output")
  console.log(btnOutput)
  btnOutput.innerHTML = `<p>${firstName}</p>`
}

// Counter

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

//  values auslesen

function getInputVal() {
  const name = document.querySelector("#name").value
  const age = document.querySelector("#age").valueAsNumber
  const range = number(document.querySelector("#range").value)
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

// Conditional Statements -> if/else

const age = 17
if (age >= 18) {
  console.log("Du bist volljährig")
} else {
  console.log("Du bist minderjährig!")
}

// Function ceck

function checkNumber() {
  // entweder .value (oder ähnliches) am ende des querySelector
  const inputNum = document.querySelector(".num-import")
  const inputNumVal = inputNum.value

  if (inputNumVal < 0) {
    console.log("Zahl ist kleiner als 0")

    // "=" zuweisung
    // "==" wert vergleich - 0 - "0"
    // "===" vergleicht wert also 0 oder "0" und den type string, numer etc
  } else if (inputNumVal == 0) {
    console.log("Zahl ist 0.")
  } else {
    console.log("Zahl ist größer als 0")
  }
}

// login
const username = "Marco"
const password = "supercode"

function checkUserData() {
  let loginUserName = document.querySelector("#userName")
  let passwordInput = document.querySelector("#password")
  const userNameVal = loginUserName.value
  const passwordVal = passwordInput.value
  const output = document.querySelector(".login-feedback")

  //  && operrator: damit kannst du in einer if abfrage mehrere bedingungen abfragen ( die ALLE true ergeben müssen)

  if ((username == userNameVal) & (password == passwordVal)) {
    output.innerHTML = "<p>Login succuessful.</p>"
  } else {
    output.innerHTML = "<p>Username or password wrong.</p>"
  }
}

// switch

// wir brauchen einmal eine Variable um die sich unser switch-statement kümmert (abhängigkiet)
const age1 = 21
// es fängt immer mit dem switch keyword an in klammern kommt die abhängigkeit (unsere variable z.B.)

switch (age1) {
  case 20:
    // in unserem switch öffnen wir einzelne Cases in denen wir dann unsere logik aufbauen jenachdem was gerade die variable für einen wert hat ( also unseren case)
    console.log("age ist 20")

    // mit break sagen wir dass dieser case zuende ist, und dass sich um die nächste logik kümmert
    break

  case 21:
    console.log("age ist 21")
    break
  case 18:
    console.log("age ist 18")
    break
  default:
    console.log("age ist uns egal")
}

//  classlist -> add, remove & toggle

// add

function addClass() {
  const headline = document.querySelector(".add")
  headline.classList.add("big")
}

// remove
function removeClass() {
  const headline1 = document.querySelector(".remove")
  headline1.classList.toggle("remove")
}

function toggleClass() {
  const headline1 = document.querySelector(".remove")
  headline1.classList.toggle("remove")
}
