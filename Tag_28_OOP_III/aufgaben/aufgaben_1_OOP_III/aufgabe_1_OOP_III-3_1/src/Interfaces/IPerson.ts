import type Gender from "../Enum/Gender"

interface IPerson {
  _firstName: string
  _lastName: string
  _birthday: Date
  _gender: Gender

  formatDate: () => string
}

export default IPerson
