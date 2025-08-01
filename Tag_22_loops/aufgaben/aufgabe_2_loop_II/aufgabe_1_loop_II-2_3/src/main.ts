function getNumberOfVowels(text: string): number {
  const vowels = ["A", "E", "I", "O", "U"]
  let count = 0

  for (let char of text.toUpperCase()) {
    if (vowels.includes(char)) {
      count++
    }
  }

  return count
}

console.log(getNumberOfVowels("Hello World"))
console.log(getNumberOfVowels("AEIOU"))
console.log(getNumberOfVowels("Fischers Fritze fischt frische Fische; Frische Fische fischt Fischers Fritze"))
