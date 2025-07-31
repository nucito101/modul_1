const oldPainters = ["Caspar David Friedrich", "Mary Cassatt", "Rosa Bonheur", "Francisco de Goya", "Édouard Manet"]

const newerPainters = ["Pablo Picasso", "Salvador Dalí", "Frida Kahlo", "Georgia O'Keeffe"]

const femalePainters_concat = ["Mary Cassatt", "Rosa Bonheur"].concat(["Frida Kahlo", "Georgia O'Keeffe"])
console.log("Female (concat): ", femalePainters_concat)

const femalePainters_spread = [...["Mary Cassatt", "Rosa Bonheur"], ..."Frida Kahlo,Georgia O'Keeffe".split(",")]
console.log("Female (spread): ", femalePainters_spread)

const malePainters_concat = ["Caspar David Friedrich", "Francisco de Goya", "Édouard Manet"].concat([
  "Pablo Picasso",
  "Salvador Dalí",
])
console.log("Male (concat): ", malePainters_concat)

const malePainters_spread = [
  ...["Caspar David Friedrich", "Francisco de Goya", "Édouard Manet"],
  ..."Pablo Picasso,Salvador Dalí".split(","),
]
console.log("Male (spread):", malePainters_spread)
