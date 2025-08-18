// ! Promise

// ? Promise ist wie ein Versprechen und hat entweder gute Nachricht oder schlechte Nachricht
// ? was ist überhaupt Promise => sie ist im Grunde genommen eine Klasse bzw ein Art von Obj
// ? mit Promise arbeiten zu können braucht man dafür eine neue Instanz.
// ? die Instanzen können sowohl als Variable als auch als Function deklariert werden

// ? die Promise Function haben zwei Haupstände =>
// ? fullfield  => (erfüllt) Das Promise wurde erfolgreich erfüllt
// ? rejected => (abgelehnt) Das Promise wurde nicht erfolgreich erfüllt
// ? pending => (ausstehend) Das Promise braucht noch bevor das aufgelöst wird und abgelehnt wird.

// ? beim Daten laden (API Abfragen)

// = V1. Variable

// new Promise braucht ein Callback function, die callback function erwartet immer zwei Argumenten

let myPromise = new Promise((resolve, reject) => {
  let server: boolean = true

  if (server) {
    resolve("Die Operation war erfolgreich!!!!")
  } else {
    reject("Es gab ein Problem !!!!")
  }
})

// console.log(myPromise);

// ! resolve => then
// ! reject => catch
// myPromise.then((resp) => {
//     console.log(resp);
// }).catch((err: Error) => {
//     console.error(err);
// }).finally(() => console.log("Alles ist supi dupi"))

// = V2 Function

function loadData(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let server: boolean = false
      if (server) {
        resolve("Daten erfolgreich geladen")
      } else {
        reject("Fehler beim Laden der Daten")
      }
    }, 3000)
  })
}

// console.log(loadData());

// loadData().then((resp: string) => {
//     console.log(resp);
// }).catch((err: Error) => console.error(err))

// = V3. Function

function firstStep(): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success: boolean = true

      if (success) {
        console.log("Erster Schritt ist abgeschlossen")
        resolve()
      }
    }, 1000)
  })
}

function secondStep(): Promise<void | string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success: boolean = false

      if (success) {
        console.log("Zweiter Schritt ist abgeschlossen")
        resolve()
      } else {
        reject("Fehler im zweiten Schritt")
      }
    }, 1200)
  })
}

function thirdStep(): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 2000)
  })
}

// firstStep().then(() => secondStep())
//     .then(() => thirdStep())
//     .then(() => {
//         console.log("Alle Schritte sind erfolgreich abgeschlossen");
//     }).catch((err: Error) => console.error(err))

// = V4

const dogAgePromise: Promise<number> = new Promise((resolve, reject) => {
  const randomAge: number = Math.floor(Math.random() * 30)
  if (randomAge <= 20) {
    resolve(randomAge)
  } else {
    reject("No dog age available")
  }
})

dogAgePromise
  .then((resp: number) => {
    console.log(resp)
    const myRespToString = resp.toString()
    return myRespToString
  })
  .then((newVariable: string) => {
    console.log(newVariable)
  })
  .catch((err: Error) => console.error(err))
