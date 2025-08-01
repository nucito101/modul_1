function createImageNames(): string[] {
  let returnArray: string[] = []

  for (let i = 1; i <= 100; i++) {
    let numberStr = i.toString().padStart(3, "0")
    let fileName = `image_${numberStr}.jpg`

    returnArray.push(fileName)
  }

  return returnArray
}
console.log(createImageNames())
