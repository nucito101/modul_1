// ======= BOM =======

//-> Browser Object Model ist eine Schnittstelle, die vom Browser bereit gestellt wird.
//-> wir können mit TS mit dem Browserfenster und den Browserdaten itegieren

// # window.screen.height

console.log("Aktuelle Biildschrimhöhe in PX", window.screen.height)
console.log("Aktuelle Biildschrimbereit in PX", window.screen.width)

//# verfügbare Bildschirmgröße

console.log("Verfügbare Bildschirmhöhe in PX", window.screen.availHeight)

console.log("Verfügbare Bildschirmbereit in PX", window.screen.availWidth)

// # Farbtiefe
console.log(`Farbtiefe`, window.screen.colorDepth)

//- Browserfenster selbst ======

console.log("Innere Höhe des Browserfenster", window.innerHeight)

console.log("Innere Bereite des Browserfenster", window.innerWidth)

//-> Eventlistener, wie sich die Größe des fesnter ändert

window.addEventListener("resize", () => {
  console.log(`Fenstergröße wurde geändert auf ${window.innerWidth} ${window.innerHeight}`)
})

// # Info zur aktuellen URL =>
console.log("GESAMTE URL:", window.location.href)
console.log("PORT", window.location.port)

//# Verlauf der Aufrufe => window.history

console.log("Länge der History", window.history.length)

// # ich kann darüber auch selbst navigieren und zu der letzen Seite zurückgehen

document.getElementById("back-button")?.addEventListener("click", () => {
  window.history.back()
})

// # Seite neu laden
document.getElementById("reload")?.addEventListener("click", () => {
  window.location.reload()
})

// # umleiten / öffnen
document.getElementById("open_btn")?.addEventListener("click", () => {
  window.open("https://super-code.de/", "_blank")
})

// # ich kann die Info bekommen, welchen Browser User gerade nutzt
// EXTRA INFO => https://www.seokratie.de/guide/user-agent/

console.log("BrowserInfo", window.navigator.userAgent)

if (window.navigator.userAgent.includes("Chrome")) {
  console.log("Du bist coool")
} else {
  console.log("Brother awwwww")
}

// # welche Browsersprache ist eingestellt
console.log(window.navigator.language)

if (window.navigator.language.startsWith("de")) {
  console.log("Ok lass mal alles auf deutsch machen")
}

// # normale oder klassische function
// function greetToUser(): void {

// }

// # Arrow function
const greetToUser = (): void => {
  const languageBrowser = window.navigator.language

  switch (languageBrowser) {
    case "de-DE":
      console.log("Hallo Guten Morgeeeeeen")
      break
    case "en-US":
      console.log("Hello good morning")
      break
    default:
      console.log("irgendwas stimmt nicht!!")
      break
  }
}

greetToUser()

console.log("IsOnline", window.navigator.onLine)

// # cookies

if (window.navigator.cookieEnabled) {
  console.log("Cookies ist aktiv")
} else {
  console.log("cookie wurde blockiert")
}

document.cookie = "username=joedoe"

// => JSON.parse & JSON.stringify =======

// $ JSON ist leichtes Datenformat, das haupsächlich zum Austauch von Daten zwischen Server und Cleint verwendet wird.
// $ kann leicht auch von versch. Sprachen verarbeitet werden.

// ! JSON => JAvascript Object Notation

//- JSON.stringify => nimmt ein JS-Object und wandelt es in einem JSONString um

const user = {
  email: "andre@gmail.de",
  password: "123456789",
}

console.log(user)

// ! um in den LocalStorage speichern zu können, müssen wir das User Obj unbedingt in das JSON Format umwandeln

// => Div Tools (Untersuchen), App , Application , local storage

const objToJSON = JSON.stringify(user)

console.log(objToJSON)

localStorage.setItem("currentUser", objToJSON)

//- JSON.parse zurückumwandeln in ein Object

const userFromLocalStorage = localStorage.getItem("currentUser")

console.log(userFromLocalStorage)

if (userFromLocalStorage) {
  const stringToObj = JSON.parse(userFromLocalStorage)
  console.log(stringToObj)
}

const langSettings = {
  language: "German",
  subTitles: "English",
}

const settingAsJSON = JSON.stringify(langSettings)
console.log(settingAsJSON)

const myLanguage = "Deutsch"

localStorage.setItem("languageSettingEinfach", myLanguage)
localStorage.setItem("languageSettingMitObjStruktur", settingAsJSON)

//-> ICE CREAM EXAMPLE

const iceCreamFlavorsArr = [
  {
    name: "Vanilla",
    price: 2.5,
    isPopular: true,
  },
  {
    name: "Chocolate",
    price: 3.0,
    isPopular: true,
  },
  {
    name: "Strawberry",
    price: 2.8,
    isPopular: false,
  },
  {
    name: "Mint Chocolate Chip",
    price: 3.2,
    isPopular: true,
  },
  {
    name: "Cookie Dough",
    price: 3.5,
    isPopular: false,
  },
]

console.log(iceCreamFlavorsArr)

const myArrToJSON = JSON.stringify(iceCreamFlavorsArr)

console.log(myArrToJSON)

localStorage.setItem("iceCreamSorten", myArrToJSON)

// #  ===== try catch ========

//- für Fälle, in denen ich nicht genau weiß was zurückkommt oder ob ein Fehler auftreten wird, arbeite ich mit try catch block
//- das wäre wie ein Sicherheitnetz, dass ich meinen Code spanne.
//- sprich mit try-catch kann man code Abschnitte umschlossen werden, die pontentiell fehlerhaften code enthalten

const myInput = document.getElementById("someI") as HTMLInputElement

if (myInput) {
  console.log(myInput.value)
}

try {
  console.log(myInput.value)
} catch (error) {
  // ! V1
  console.error("wir haben den Fehler abgefangen", error)

  // ! V2
  const errorMessage = (error as Error).message
  console.log(errorMessage)
  const myParagraph = document.createElement("p") as HTMLParagraphElement
  myParagraph.innerText = errorMessage
  document.body.appendChild(myParagraph)
}

// # throw new Error

const divide = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error("Division by zero is not allowed")
  }
  return a / b
}

console.log(divide(10, 0))
