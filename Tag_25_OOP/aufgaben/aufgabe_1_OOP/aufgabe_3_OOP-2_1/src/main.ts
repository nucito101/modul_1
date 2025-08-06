import Person from "./Classes/Person"
import SchoolClass from "./Classes/SchoolClass"

const persons: Person[] = [
  new Person(1, "Max", "Muster", new Date("2007-05-15")),
  new Person(2, "Laura", "Licht", new Date("2006-11-22")),
  new Person(3, "Tim", "Tester", new Date("2007-01-30")),
]

const classA = new SchoolClass(1, "Informatik", persons)

persons.forEach((person) => classA.addPerson(person))

console.log(`Alle Personen in der Klasse ${classA._name}:`)
classA.listAllPersons()
