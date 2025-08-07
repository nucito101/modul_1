class Person {
  firstName: string
  lastName: string
  private _email: string = ""
  private _birthday: Date

  public get email(): string {
    return this._email
  }

  public set email(value: string) {
    if (value.includes("@")) {
      this._email = value
    } else {
      console.error("Email must have include an @")
    }
  }

  // Mein wunsch ist, dass der Geburtstag nur einmal über den Constructor gesetzt werden kann und dann nie wieder verändert werden kann

  public get birthday(): Date {
    return this._birthday
  }

  constructor(firstName: string, lastName: string, birthday: Date) {
    this.firstName = firstName
    this.lastName = lastName
    this._birthday = birthday
  }
}

export default Person
