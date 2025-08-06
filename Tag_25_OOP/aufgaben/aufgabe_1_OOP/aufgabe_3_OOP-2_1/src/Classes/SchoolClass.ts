import Person from "./Person"

class SchoolClass {
  _id: number
  _name: string
  _endDate?: string
  _persons: Person[] = []

  constructor(id: number, name: string, person: Person[]) {
    this._id = id
    this._name = name
    this._persons = person
    console.log("School class creation successful")
  }
  addPerson(person: Person) {
    this._persons.push(person)
  }

  listAllPersons() {
    this._persons.forEach((p) => {
      console.log(`${p._firstName} ${p._lastName} (Geboren am: ${p._birthday.toDateString()})`)
    })
  }
}
export default SchoolClass
