// Ein Test um herauszufinden ob unsere JS Datei erfolgreich eingebunden ist
// Console.log => Damit können wir sachen (texte bzw Variablen) in der Konsole ausgeben lassen, das benutzen wir sehr oft wenn wir die sachen testen wollen

console.log("Die Verbindung isZzzz Da")

// Variablen

// const => Die Variablen sollte für Werte verwendet werden die sich nicht mehr verändern

const meinName = "Farid"
console.log(meinName)

// let => die Variablen werden für die Werte verwendet, die sich später auch ändern können

let alter = 29
console.log(alter)

alter = 30
console.log(alter)

// var => hat man vor ECMAS script 6 benutzt => benutzen wir NICHT mehr
// var street = "musterstraße"
// console.log(street)

// ! Datentypen

// 1. string, number, boolean

// string => Text der in Anführungszeichen, Gänsefüßchen stehen müssen
console.log("Hallo ich bin da")

// 2. number => die zahlen, werden in der konsole lila ausgegeben oder angezeigt

const number1 = 17
console.log(number1)

console.log(number1 + 3)
// sobald man eine string mit einem number kombiniert, wird am Ende ein String ausgegeben
console.log(number1 + "3")

// 3. boolean => gibt true/fals bzw 0 oder 1

console.log(true)
console.log(false)

// konvention bei Variablenbenennung
// ! Aussagekräftig sein
// ! nicht zu kurz
// ! nicht zu lang
// ! Namen dürfen nicht mit zahlen beginnen
// ! keine Leerzeichen
// ! JS ist case-sensitive

// let 0 apfel =
// main.js:12 Uncaught TypeError: Assignment to constant variable
// let kiwi apfel = 200
// let heuteisteinschönertag = true

//  hier zwei verschiedenen Variablen da Apfel groß oder einmal klein geschrieben wurden
// klein oder groß geschriebenen Variablen sind zwei Verschiedene Variablen

let apfel = 15
console.log(apfel)

let Apfel = 20
console.log(Apfel)

// ! camelCase

let vorName = "joe"
let nachName = "doe"

console.log(vorName)
console.log(nachName)

// ! snake_case

let meine_erste_variable = "heute ist richtig warm"
console.log(meine_erste_variable)

// ! PascalCase

let MeineErsteVariable = "Andre sieht heute sehr schön aus"

//  ! Auf gar KEINEN FALL

// let $meineErsteVariable
// let meineerstevariable
// let banane-traube-apfel

// string mit einander verbinden

const firstName = "Marco"
const lastName = "Orlandi"

let city = "München"

const fullName = firstName + lastName
console.log(fullName)

// mehere textelemente miteinander verbinden direkt in console.log
console.log("ich heiße " + firstName + " " + lastName + " und ich wohne in " + city)

// template Literals => schreiben wir in die Backticks  + $ {}
// Hier werden Zeilenumbrüche, leerzeichen und Einrückungen beachtet
console.log(`ich bin ${firstName} ${lastName} und wohne in ${city}`)

console.log("ich heiße " + firstName + " " + lastName + " und ich wohne in " + city)

// mit dem Zuweisungoperator += können wir den Satz "hallo was geht" nach dem Saatz hello wasupp anhängen
let message = "hello wasupp"
message += "hallo was geht"

console.log(message)

// Arithmetissche Operatoren

let x = 5
let y = 10
let z = 3

// Addition
console.log(x + y)

// substraktion
console.log(y - z)

// multiplikation
console.log(x * y)

// division
console.log(y / 5)

// modulo
console.log(y % 2)

// wie können wir zu variable x 1 addieren
let a = 1
const summe = x + 1

console.log(summe)

// hier wird ebenfalls 1 addiert, dies ist aber die eine kurzschreibweise + das darf bei einer neuen deklaration nicht verwendet werden
// let summe2 = a++

a++
console.log(a)

// hier wird die Variable b 1 abgezogen
let b = 10
b--
console.log(b)

// sehr veraltet
//  hier können wir Text in Html einfügen
document.write("Hallo, heute ist sehr warms")
document.write("<h2> ich bin eine Überschrift</h2>")

// es öffnet sich ein popup fenster jedes mal, wenn die Seite neu geladen wird
// window.alert("irgendwas blablabla")

// confirm => öffnet ein Dialog-popup Fenster mit der eingegeben Nachricht und wartet darauf, dass der User odern Benutzer den Dialog bestätigt

// let confirmElement = window.confirm("Stimmen sie den Cookies zu?")
// console.log(confirmElement)

// wie deklarieren eine Variable genau richtig ?
let myStreet = "Musterstraße"
let myCity = "Berlin"

console.log(myStreet + " " + myCity)

let actor = "ben aflek"
console.log(`${actor} ist gerade in ${myCity}`)

myStreet = "sesamstraße"
console.log(myStreet)

const result = myStreet + "10"

console.log(result)
