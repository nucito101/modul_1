function getHighestNumber(numbers: number[]): number {
  let highest = numbers[0]

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > highest) {
      highest = numbers[i]
    }
  }

  return highest
}
console.log(getHighestNumber([3, 9, 2, 17, 6]))
console.log(getHighestNumber([100, 42, 87, 93]))
