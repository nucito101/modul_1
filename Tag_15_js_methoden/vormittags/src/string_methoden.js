//  string Methoden

// index start ist immer bei 0 und H wäre in dem Fall also 0
const ourString = "Hallo Leudeeeee, Heute ist ein schöner Tag und werden wir Heute string methoden lernen"

// concat() verbindet zwei texte bzw strings
let moreText = "ich bin sogar meht input"
console.log(ourString.concat(" " + moreText))
console.log(moreText.concat(" Blablabla"))

// charAt() Liefert die uns das jeweiligen Zeichen zurück, das sich in einer Zeichenkette befindet
console.log(ourString.charAt(3))

// includes() überprüft erstmal ob ein bestimmtes Wort innerhabl einer Zeichenkette überhaupt gibt und gibt uns ein True oder ein false zurück
console.log(ourString.includes("Tag")) // true
console.log(ourString.includes("tag")) // false

// indexof() sucht aub welchem index das zuerst kommt
console.log(ourString.indexOf("i"))
console.log(ourString.indexOf("H"))

// length gibt uns die Länge vom String zurück
console.log(ourString.length)

// replace() ersetzt ein Teil von einem String und gibt diese zurück
console.log(ourString.replace("Tag", "Abend"))

// replaceAll()
console.log(ourString.replaceAll("Heute", "Gestern"))

// slice() schneidet bis einer bestimmten index aus und gibt uns den rest zurück
console.log(ourString.slice(6))

// substring() ist genau so wie slice allerdings gibt es einen kleinen Unterschied und zwar mit slice kann man minuswerten arbeiten und er fängt immer von hinten an, bei substring kann man sowas nicht machen
console.log(ourString.slice(-1))
console.log(ourString.substring(-1)) // das funktioniert nicht

// toLowerCase() gibt uns alles in Kleinbuchstaben zurück
console.log(ourString.toLowerCase())

// toUppercase() gubt uns alle in Großbuchstaben zurück
console.log(ourString.toUpperCase())

// toString() oder String geben uns beide string zurück
let number3 = 100
console.log(String(number3))
