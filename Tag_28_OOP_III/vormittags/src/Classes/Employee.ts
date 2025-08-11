import Person from "./Person"

// wenn ich von einer Elternklasse Eigenschaften und Methoden erben will, sieht immer so aus =>
// class klassennam extends (Name der Eltern Klasse)
// Eine klasse erbt von einer anderen Klasse

// ich brauche zwei Ding, um zu erben => "extends" und "super" in Konstruktor

class Employee extends Person {
  public _isMarried: boolean = false
  private _email: string = ""

  public get email(): string {
    return this._email
  }

  public set email(value: string) {
    this._email = value
  }

  constructor(firstName: string, lastName: string, handyNummer?: string) {
    // diese Logik passiert schon in der Elternklasse =>
    // this._firstName = firstName
    // this._lastName = lastName
    // stattde
    super(firstName, lastName, handyNummer)
  }

  public getfullName(): string {
    return `${this._firstName} ${this._lastName}`
  }

  public checkingFly(): void {
    if (this._isMarried) {
      this.checkPassport()
    } else {
      console.log(`${this._lastName} is not allowed to fly`)
    }
  }
}
export default Employee
