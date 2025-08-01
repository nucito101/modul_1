const allGermanLetters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
]

function rot13(text: string): string {
  let result = ""

  const upperText = text.toUpperCase()

  for (let char of upperText) {
    if (char === " ") {
      result += " "
      continue
    }

    const index = allGermanLetters.indexOf(char)

    if (index === -1) {
      result += char
      continue
    }

    const newIndex = (index + 13) % allGermanLetters.length
    const newChar = allGermanLetters[newIndex]

    result += newChar
  }

  return result
}
console.log(rot13("Hello World"))
