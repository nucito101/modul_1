import SchoolClass from "./Classes/SchoolClass"

const classA = new SchoolClass(1, "Math")
const classB = new SchoolClass(2, "English")
const classC = new SchoolClass(3, "History")

console.log(classA)
console.log(classB)
console.log(classC)

classA._name = "Mathematics"
classB._name = "Biology"

console.log(classA)
console.log(classB)
console.log(classC)
