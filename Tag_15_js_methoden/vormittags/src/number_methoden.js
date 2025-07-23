// Number Methoden
const String1 = "10"
console.log(String1)

const myStringToNumber = Number(String1)
console.log(myStringToNumber)

const myName = "Malte"
console.log(Number(myName)) // NaN => not a Number

//  Nice to Know
console.log(Number(true))
console.log(Number(false))

// Number Methoden

// tofixed()
const number1 = 10.345678
console.log(number1.toFixed(1))
console.log(number1.toFixed(3))
console.log(number1.toFixed(5))

// toString()

const number2 = 20
console.log(number2)
console.log(number2.toString())

// # Math object Methoden

// Math.round() die Zahl nach "." unter 50 wird abgerundet ansonsten wird über 50 aufgerundet
console.log(Math.round(59.442356))
console.log(Math.round(48.842356))

// math.ceil() rundet immer den nächsten integer auf
console.log(Math.ceil(33.22452))

// Math.floor() rundet immer ab
console.log(Math.floor(33.22458759))

// Math.random() gibt uns eine zufällige Zahl aus
console.log(Math.random())

const randomNumber = Math.random() * 9 + 1
console.log(Math.round(randomNumber))

// Math.max() gibt die Größte Zahl aus einer Liste von Zahlen zurück
console.log(Math.max(4, 78, 23, 99, 12))

// Math.sqrt() Gibt die Quadratwurzel einer zahl zurück
console.log(Math.sqrt(144))

// Math.pow() hebt eine Zahlt auf eine bestimmte potenz
console.log(Math.pow(2, 5)) // 2 hoch 5
