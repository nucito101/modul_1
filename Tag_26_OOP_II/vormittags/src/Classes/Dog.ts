import type Owner from "./Owner"

class Dog {
  _owner: Owner
  _breed: string | undefined = ""
  _favoriteFood?: string = ""
  private _birthday: string
  private _numberOfMeals: number = 0
  private _name: string | undefined = ""
  private _age: number = 0

  get age(): number {
    return this._age
  }

  set age(value: number) {
    if (value < 0 || value > 40) {
      console.error("Invalid Value for dog Age. Must be between 0 and 40")
    } else {
      this._age = value
    }
  }

  get dogInGerman(): string {
    return "Hund"
  }

  get name(): string | undefined {
    return this._name
  }

  set name(value: string) {
    this._name = value
  }

  constructor(name: string, age: number, owner: Owner, birthday: string) {
    this._name = name
    this._birthday = birthday

    // V1
    // if (age < 0 || age > 40) {
    //   throw new Error("Invalid Value for dog Age. Must be between 0 and 40")
    // } else {
    //   this._age = age
    // }

    // V2
    this.age = age //wir rufen den Setter auf, nicht direkt _age

    this._age = age
    this._owner = owner
    console.log("Dog was created")
  }

  // Methoden
  sleep(): void {
    console.log(`${this._name} is sleeping`)
  }

  bark(sound: string): void {
    console.log(`${this._name} says ${sound}`)
  }

  eat(): void {
    this._numberOfMeals++
    console.log("Current Number of Meals", this._numberOfMeals)
    if (this._numberOfMeals > 4) {
      this.sleep()
    }
  }

  isHunger(): string {
    if (this._numberOfMeals < 4) {
      return `${this._name} is Hungry`
    } else {
      return `${this._name} is not Hungry at Moment`
    }
  }
}
export default Dog
