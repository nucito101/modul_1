import "./style.css"

function doHomeWork(studentName: string, timeInMillliSeconds: number): Promise<string> {
  return new Promise((resolve, reject) => {
    if (timeInMillliSeconds === 0) {
      reject("Homework duration must be greater than =")
    }
    setTimeout(() => {
      resolve(`${studentName} has finished homework`)
    }, timeInMillliSeconds)
  })
}

const aliceHomeWork = doHomeWork("Alice", 3000)
const joeHomework = doHomeWork("Joe", 1000)
console.log(aliceHomeWork)
console.log(joeHomework)

// langeversion sich an alle Promise einzeln hängen
// aliceHomeWork
//   .then((lastMsg: string) => {
//     console.log(lastMsg)
//   })
//   .catch((err: string) => {
//     console.error(err)
//   })

Promise.all([aliceHomeWork, joeHomework])
  .then((results: string[]) => {
    // hier landen wir, wenn alle zei Promises erfolgreich in resolve gegangen sind (bis auch der letzte fertig ist)
    // in results stehen die zwei Ergebnisse der Promises genau in der Reihenfolge, das was wir in Promise.all reingeschrieben haben
    results.forEach((result: string) => {
      console.log(result)
    })
  })
  .catch((err) => {
    console.error(err)
  })

type IceCream = {
  id: number
  name: string
  details?: string
  price: number
}

// online
const onlineIceCreams: IceCream[] = [
  { id: 3, name: "Strawberry", price: 3.0 },
  { id: 4, name: "Mango", price: 2.5 },
]

// lokal
const localIceCreams: IceCream[] = [
  { id: 1, name: "Vanilla", price: 2.0 },
  { id: 2, name: "Chocolate", price: 2.5 },
]

const getLocalIceCream = (): Promise<IceCream[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(localIceCreams)
    }, 2000)
  })
}

const getOnlineIceCream = (): Promise<IceCream[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(onlineIceCreams)
    }, 3000)
  })
}

Promise.all([getLocalIceCream(), getOnlineIceCream()])
  // V1 IceCream[][]

  // V2 [IceCream[], IceCream[]]
  .then((resp: IceCream[][]) => {
    console.log(resp)
    const [local, online] = resp
    // resp ist ein Array von Array von IceCream Obj
    console.log("Local IceCream", local)
    console.log("Online IceCream", online)

    const allIceCream: IceCream[] = [...local, ...online]
    allIceCream.forEach((IceCream: IceCream) => {
      console.log(IceCream.price)
    })
  })
  .catch((err: string) => {
    console.error(err)
  })
