import { eightiesHits } from "./eightiesHits"

//* Loops

// Wir möchten 5x Hello World in der Console auszugeben
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");
// console.log("Hello World");

// [1, 2, 3, 4, 5].forEach(()=>{
//     console.log("Hello World");
// })

//* while
// der codeblock in while wird ausgeführt, solange die Bedingung wahr ist.
// Quasi wie ein sich wiederholendes "if"
//! Das kann auch unendlich lang gehen, falls die Bedingung nie "false" wird

let i = 0
while (i < 5) {
  console.log("Hello World")
  i++
}

// alle elemente eines arrays ausgeben:

// Zaehler:
// let j = 0;
// const arrayLength = eightiesHits.length
// while (j < arrayLength){
//     const currentHit = eightiesHits[j]
//     console.log(currentHit)
//     j++;
// }

//* for

for (let i = 0; i < eightiesHits.length; i++) {
  const currentHit = eightiesHits[i]
  console.log(currentHit)
}

//? alle Zahlen von 30 bis 0 durchzaehlen, und alle ausgeben die durch 3 teilbar sind
for (let i = 30; i >= 0; i--) {
  if (i % 3 === 0) {
    console.log(i)
  }
}

//? Wir wollen die Summe aller Zahlen von 0 bis einschließlich 100 bilden
let sum = 0
for (let i = 0; i <= 100; i++) {
  sum += i
}
console.log("Summe aller von 0 bis 100: ", sum)

//? Wir wollen von 0 in 7er Schritten hochzaehlen,
//? und aus den Schritten einen Array bilden der 100 Elemente haben soll
const arrayWithSevenMultiples: number[] = []
for (let i = 0; arrayWithSevenMultiples.length < 100; i += 7) {
  arrayWithSevenMultiples.push(i)
}

//* i++ vs ++i
// bei i++ ist der rueckgabewert der wert vor der Inkrementierung, bei ++i der nachher-wert

//* For...of Loop
// Fuehlt sich an wie ein Zwischending aus for und Arraymethode
//* For .. of geht nicht nur bei Arrays sondern bei allen Iterables (also auch z.B. String, Set, Map etc.)

for (const hit of eightiesHits) {
  console.log(hit.toUpperCase())
}

for (const charachter of "Hallo Kurs") {
  console.log(charachter, "🎉")
}

//? Wir wollen rausfinden ob es im EightiesHits Array einen Titel gibt der "Enjoy" enthält

eightiesHits.forEach((hit) => {
  console.log(hit)
  if (hit.charAt(0) !== "E") {
    console.log("Doesn't start with E")
    return // return in foreach verhaelt sich aehnlich wie continue in for loops
  }

  if (hit.includes("Enjoy")) {
    console.log("HURRA GEFUNDEN!!!!!!!")
  }
})

//? BREAK => mit dem break-Statement können wir die Ausführung des Loops in dem wir sind beenden/abbrechen
//? CONTINUE => mit Continue brechen wir den aktuellen Durchlauf des Loops ab und gehen zum nächsten

for (const hit of eightiesHits) {
  console.log(hit)
  if (hit.charAt(0) !== "E") {
    console.log("Doesn't start with E")
    continue
  }
  console.log("Checking for 'Enjoy'...")
  if (hit.includes("Enjoy")) {
    console.log("HURRA GEFUNDEN!!!!!!!")
    break
  }
}

//* Do... while
//* Bei do-while steht die Bedingung am Fuß der Struktur
// Do While Schleifen werden in jedem Fall mindestens einmal ausgefuehrt, da die Bedingung hier erst
// am Ende gecheckt wird.

let index = 10
do {
  console.log(index)
  index++
} while (index < 10)

// while(index < 10){
//     console.log(index)
//     index++;
// }
