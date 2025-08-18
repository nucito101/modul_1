const numberPromise: Promise<number[]> = new Promise((resolve, reject) => {
  const randomNumbers: number[] = [
    Math.floor(Math.random() * 130) + 1,
    Math.floor(Math.random() * 130) + 1,
    Math.floor(Math.random() * 130) + 1,
  ]
  console.log(randomNumbers)

  if (randomNumbers[0] > 100 || randomNumbers[1] > 100 || randomNumbers[2] > 100) {
    reject("At least one value is > 100")
  } else {
    resolve(randomNumbers)
  }
})

numberPromise
  .then((numbers) => {
    const increased = numbers.map((num) => num + 7)
    console.log("+7:", increased)
    return increased
  })
  .then((numbers) => {
    const doubled = numbers.map((num) => num * 2)
    console.log("*2:", doubled)
    return doubled
  })
  .then((numbers) => {
    const decreased = numbers.map((num) => num - 1)
    console.log("-1:", decreased)
    return decreased
  })
  .then((numbers) => {
    const modulo = numbers.map((num) => num % 2)
    console.log("%2:", modulo)
    return modulo
  })
  .then((finalNumbers) => {
    console.log("result:", finalNumbers)
  })
  .catch((error) => {
    console.error("Error:", error)
  })
  .finally(() => {
    console.log("Finished")
  })
