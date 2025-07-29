function calculateAge(birthYear: number): number {
  const aktuellesJahr = new Date().getFullYear()
  return aktuellesJahr - birthYear
}

const myAge = calculateAge(1995)
console.log(myAge)

function compareAge(Age1: number, Age2: number): number {
  const ageDifference = Math.abs(Age1 - Age2)
  return ageDifference
}
const otherAge = calculateAge(2000)
const difference = compareAge(myAge, otherAge)
console.log(compareAge(30, 29))
