const woerter: string[] = [
  "Banane",
  "Kaktus",
  "Flausch",
  "Ente",
  "Apfel",
  "Auto",
  "Giraffe",
  "Schmetterling",
  "Krokodil",
  "Lampe",
]

function filterShortWords(words: string[]): string[] {
  return words.filter((word) => word.length <= 6)
}

console.log("Wörter mit max. 6 Zeichen:", filterShortWords(woerter))

function filterWordsWithE(words: string[]): string[] {
  return words.filter((word) => word.toLowerCase().includes("e"))
}

console.log("Wörter mit E oder e:", filterWordsWithE(woerter))

function filterWordsWithMoreThanTwoVowels(words: string[]): string[] {
  return words.filter((word) => {
    const vowels = word.match(/[aeiou]/gi) // alle Vokale (auch Großbuchstaben)
    return vowels !== null && vowels.length > 2
  })
}

console.log("Wörter mit mehr als 2 Vokalen:", filterWordsWithMoreThanTwoVowels(woerter))
