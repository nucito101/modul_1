import "./style.css"

// Promise ist wie ein versprechen und hat entweder gute nachrichten oder schlechte Nachricht
// was ist überhaupt Promise => sie ist im Grund genommen eine Klasse bzw eine Art von Object
// um mit Promise arbeiten zu können braucht man dafür eine neue Instanz
// die Instanzen können sowohl as Variable als auch als Function deklariert werden

// die Promise Function haben zwei Hauptstände =>
// fullfield => (erfüllt) Das Promise wurde erfolgreich erfüllt
// rejected => (abgelehnt) Das Promise wurde nicht erfolgreich erfüllt
// pending => (ausstehend) Das Promise braucht noch Zeit bevor das aufgelöst oder abgelehnt wird

// beim Daten laden (API Abfragen)

// = V1. Variable
// New Promise braucht eine Callback Function, die Callback function erwartet immer zwei Argumente

let myPromise = new Promise((resolve, reject) => {
  let server: boolean = true

  if (server) {
    resolve("Die Operation war erfolgreich!!!")
  } else {
    reject("Es gab ein Problem")
  }
})

// console.log(myPromise)

// myPromise
//   .then((resp) => {
//     console.log(resp)
//   })
//   .catch((err: Error) => {
//     console.log(err)
//   })
//   .finally(() => console.log("Alles ist supi dupi"))

// V2 Function

function loadData(): Promise<string> {
  return new Promise((resolve, reject) => {
    let server: boolean = false
    setTimeout(() => {
      if (server) {
        resolve("Daten erfolgreich geladen")
      } else {
        reject("Fehler beim laden der Daten")
      }
    }, 3000)
  })
}

// console.log(loadData())

// loadData()
//   .then((resp: string) => {
//     console.log(resp)
//   })
//   .catch((err: Error) => console.error(err))

// V3. Funtion

function firstSteps(): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const succes: boolean = true

      if (succes) {
        console.log("Erste Schritt abgeschlossen")
        resolve()
      }
    }, 1000)
  })
}

function secondSteps(): Promise<void | string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success: boolean = true

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

// firstSteps()
//   .then(() => secondSteps())
//   .then(() => thirdStep())
//   .then(() => thirdStep())
//   .then(() => {
//     console.log("Alle Schritte sind erfolgreich abgeschlossen")
//   })
//   .catch((err: Error) => console.error(err))

// V4

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
    const myRespTostring = resp.toString()
    return myRespTostring
  })
  .then((newVariable: string) => {
    console.log(newVariable)
  })
  .catch((err: Error) => console.error(err))
