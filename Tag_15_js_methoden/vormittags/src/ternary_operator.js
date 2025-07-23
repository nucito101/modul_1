//  Tarnary Operator

const myAge = 19

if (myAge > 20) {
  console.log("Ich darf Party machen")
} else {
  console.log("Geh bitte nach Hause")
}

// Schreibweise => zuerst kommt die Variable dann die Fragezeichen danach kommt der erste Prozess oder bzw True Bedinung und nach ":" ist die false bedingung
myAge > 20 ? console.log("Ich darf Party machen") : console.log("Geh bitte nach Hause")

const habIchHunger = false

habIchHunger ? console.log("Ja, ich habe Hunger") : console.log("Nein, danke ich hab keinen Appetit")

let zahl2 = 6

let ergebnis = zahl2 > 5 ? "Ja, das ich größer als 5" : "Nein, das ist kleiner als 5"

console.log(ergebnis)

const durst = true ? console.log("nein Danke") : console.log("ja ich hab durst")

const passwort = "1234"

//  das was man in den runden Klammern bei if-else schreib ist, das was am Anfang be Ternary Operator vor den Fragezeichen schreibt, das wäre die Bedingungen

//                                        true Area          false Area
const zugang = passwort === "geheim" ? "Zugang erlaubt" : "Zugang verweigert"

console.log(zugang)

//  bisschen Komplexer
const username = "Max"

const login = username === "Max" && passwort === "geheim" ? "Willkommen, Max" : "password oder Username sind falsch"

console.log(login)

// taschenrechner

const a = 5
const b = 3
const operator = "*"
let result = 0

// const result = operator === "+" ? a + b : operator === "*" ? a * b : operator === "/" ? a / b : a - b

// console.log(result)

switch (operator) {
  case "+":
    result = a + b
    break
  case "*":
    result = a * b
    break
  case "+":
    result = a + b
    break
  case "-":
    result = a - b
    break
  default:
    result = "Ungültiger Operator"
}

console.log(result)
