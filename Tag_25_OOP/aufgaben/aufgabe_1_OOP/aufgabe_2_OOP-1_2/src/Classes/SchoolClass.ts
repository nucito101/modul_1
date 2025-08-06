class SchoolClass {
  _id: number
  _name: string
  _endDate?: string

  constructor(id: number, name: string) {
    this._id = id
    this._name = name
    console.log("School class creation successful")
  }
}
export default SchoolClass
