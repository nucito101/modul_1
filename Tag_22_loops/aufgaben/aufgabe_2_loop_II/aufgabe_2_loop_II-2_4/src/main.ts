function addToFifty(): void {
  let sum = 0

  while (sum <= 50) {
    const randomNum = Math.floor(Math.random() * 10) + 1 // 1 bis 10
    console.log(`Zufallszahl: ${randomNum}`)
    sum += randomNum
  }

  console.log(`${sum} > 50. Stopping right here.`)
}

addToFifty()
