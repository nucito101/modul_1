import { format, differenceInYears, getDate, getDay } from "date-fns"

console.log("%c Date Methoden", "background-color: red; color: white")

const myDate = new Date()
console.log("myDate ", myDate)
console.log(typeof myDate)

console.log(typeof myDate.toString())

// Koordienierte Weltzeit (UTC)
console.log(myDate.toUTCString())

// Uhrzeiten in Stunden, Minuten Sekunden unterteilt
console.log(myDate.toISOString())

// tolocle-Methoden

console.log(
  'myDate.toLocaleDateString("de", { dateStyle: "full" }) ====>',
  myDate.toLocaleDateString("de", { dateStyle: "full" })
)
console.log(
  'myDate.toLocaleDateString("de", { dateStyle: "long" }) ===>',
  myDate.toLocaleDateString("de", { dateStyle: "long" })
)
console.log(
  'myDate.toLocaleDateString("de", { dateStyle: "short" }) ===>',
  myDate.toLocaleDateString("de", { dateStyle: "short" })
)

// Das gibt uns eine MS zurück
console.log(Date.now())

// getfullYear() => holt sich den Jahrgang
console.log(myDate.getFullYear().toString())

// getMonth() => holt sich den Monat, die Zählung beginnt immer mit 0
console.log(myDate.getMonth())

// getDay() => holt sich den Tag der Woche, da wird der Tag mit 0 beginnen und der Start der Woche ist Sonntag
console.log(myDate.getDay())

// geteDate() => holt sich den Tag des Monats
console.log(myDate.getDate())

// gettime() => sind die Anzahl der Milisekunden seit 1.01.1970
console.log(myDate.getTime())

console.log(myDate.getHours(), myDate.getMinutes(myDate.getSeconds()))

console.clear()

const projektStartDate = new Date(2020, 7, 24, 10, 0)
console.log(projektStartDate)

// sobald wir keine UHrzeit übergeben wird da 00:00:00 angezeigt
console.log(new Date(2025, 8, 30))

// was cooles installieren
console.log(format(new Date(), "'Heute ist' eeee"))

const sagMirWieAltduBIst = differenceInYears(new Date(), new Date("200-02-11"))
console.log(sagMirWieAltduBIst)

const gibMirDenTag = getDay(new Date(2025, 6, 28))
console.log(gibMirDenTag)

switch (gibMirDenTag) {
  case 0:
    console.log("Sonntag")
    break

  case 1:
    console.log("Montag")
    break

  case 2:
    console.log("Dienstag")
    break
}
