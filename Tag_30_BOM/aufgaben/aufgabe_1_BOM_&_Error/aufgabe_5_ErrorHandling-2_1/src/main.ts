function generateLottNumber(): number {
  const randomNumber = Math.floor(Math.random() * 100) + 1

  if (randomNumber > 49) {
    throw new Error(`unvalid: ${randomNumber}`)
  }
  return randomNumber
}

const lottoResult: number[] = []

while (lottoResult.length < 7) {
  try {
    const lottoNumber = generateLottNumber()

    if (!lottoResult.includes(lottoNumber)) {
      lottoResult.push(lottoNumber)
    }
  } catch (error: any) {
    console.error(error.message)
  }
}
console.log(lottoResult)
