class Person {
  // => private / protected / public

  // Protected => ich erlaube die Kindklasse, die Werte meiner Eigenschaften nachträglich zu ändern und nicht von außen

  protected _firstName: string = ""
  protected _lastName: string = ""
  public _handyNummer?: string = ""

  constructor(firstName: string, lastName: string, handyNummer?: string) {
    this._firstName = firstName
    this._lastName = lastName
    this._handyNummer = handyNummer
  }

  protected checkPassport(): void {
    console.log(`${this._lastName} is allowed to fly`)
  }
}

export default Person
