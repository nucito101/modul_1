import type Gender from "../Enum/Gender"
import type IPerson from "../Interfaces/IPerson"

class Actor implements IPerson {
  _firstName: string
  _lastName: string
  _birthday: Date
  _gender: Gender

  constructor(firstName: string, lastName: string, birthday: Date, gender: Gender) {
    this._firstName = firstName
    this._lastName = lastName
    this._birthday = birthday
    this._gender = gender
  }

  formatDate(): string {
    const year = this._birthday.getFullYear()
    const month = String(this._birthday.getMonth() + 1).padStart(2, "0")
    const day = String(this._birthday.getDate()).padStart(2, "0")
    return `${year}-${month}-${day}`
  }
}

export default Actor
