import "./style.css"

// # odd or even

let zahl = 10

// ? wir benötigen erstmal den Operator "%"" modulo
// 1.if-else 2.switch 3.ternary-Operator

// if-else
if (zahl === 10) {
  console.log("das ist eine Lotto Zahl")
} else if (zahl % 2 !== 0) {
  console.log("Die Zahl ist ungerade")
} else if (zahl % 2 === 0) {
  console.log("Die Zahl ist gerade")
} else {
  console.log("Die Zahl ist ungültig")
}

// switch
// ! V1.
switch (true) {
  case zahl % 2 === 0:
    console.log("Die Zahl ist gerade")
    break
  case zahl % 2 !== 0:
    console.log("Die Zahl ist ungerade")
    break
  default:
    console.log("ungültige Zahl")
}

// !V2.
switch (zahl % 2) {
  case 0:
    console.log("Die Zahl ist gerade")
    break
  default:
    console.log("Die Zahl ist ungerade")
}

// ternary
//.     true oder false
// ! v1.
zahl % 2 === 0 ? console.log("Die Zahl ist gerade") : console.log("Die Zahl ist ungerade")

// ! v2.
const result = zahl % 2 === 0 ? "Die Zahl ist gerade" : "Die Zahl ist ungerade"

console.log(result)

// # Wochentagen anzeigen

const today = new Date()

console.log(today.getDay())

const donnerstag = today.getDay()

console.log(donnerstag)

const output_div = document.querySelector("#output")

console.log(output_div)

switch (today.getDay()) {
  case 0:
    console.log("Sonntag")
    output_div.innerHTML = "<p>Sonntag</p>"
    break
  case 1:
    output_div.innerHTML = "<p>Montag</p>"
    break
  case 2:
    output_div.innerHTML = "<p>Dienstag</p>"
    break
  case 3:
    output_div.innerHTML = "<p>Mittwoch</p>"
    break
  case 4:
    output_div.innerHTML = "<p>Donnerstag</p>"
    break
  case 5:
    output_div.innerHTML = "<p>Freitag</p>"
    break
  case 6:
    output_div.innerHTML = "<p>Samstag</p>"
    break
  default:
    output_div.innerHTML = "<p>keine gültiger Input</p>"
    break
}

// # && => und

let istEingeloggt = true
let istAdmin = false

// bei && ist wichtig dass alle Bedingungen true oder false sein sollen, ansonsten schmeißt uns immer false aus
if (istEingeloggt && istAdmin) {
  console.log("Willkommen, admin!")
} else {
  console.log("Zugriff verweigert")
}

// # || => oder

let hatGutschein = false
let istHappyHour = true

if (hatGutschein || istHappyHour) {
  console.log("du kriegst Rabbat")
} else {
  console.log("leider kein Rabbat")
}

// # || &&

let alter = 17
let mitEinwilligung = false

if (alter >= 18 || (alter < 18 && mitEinwilligung)) {
  console.log("zugang erlaubt")
} else {
  console.log("geh nach Hause")
}

// ! ====== undefined und null =======

// ? undefined heißt das irgendwas existiert aber wir haben darauf noch keinen Zugang

// ? null d.H es existiert noch nicht

let myAge

console.log(myAge)

const meinDiv = document.querySelector(".klickMich")

meinDiv.addEventListener("dblclick", function () {
  meinDiv.style.height = "1000px"
  meinDiv.style.backgroundColor = "yellow"
})
