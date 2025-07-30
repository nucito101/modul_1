const oldHollywoodActors: string[] = [
  "Marlon Brando",
  "Audrey Hepburn",
  "Elizabeth Taylor",
  "Cary Grant",
  "Paul Newman",
  "Doris Day",
]

const actorsReference = oldHollywoodActors

actorsReference.push("Marilyn Monroe")
console.log(oldHollywoodActors)
console.log(actorsReference)

const copyConcat = oldHollywoodActors.concat()
const copySlice = oldHollywoodActors.slice()
const copySpread = [...oldHollywoodActors]

copyConcat[0] = "Christian Bale"
copySlice[1] = "Kate Winslet"
copySpread[2] = "Megan Duchess of Sussex"

console.log(oldHollywoodActors)
console.log(copyConcat)
console.log(copySlice)
console.log(copySpread)
