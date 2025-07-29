function returnOne(): number {
  return 1
}

let x = 1
let y = returnOne()

if (x === y) {
  console.log("Wird das gedruckt?")
}
