import Car from "./Car"

class Driver {
  _firstName: string
  _lastName: string
  _age: number
  _car: Car

  constructor(firstName: string, lastName: string, age: number, car: Car) {
    this._firstName = firstName
    this._lastName = lastName
    this._age = age
    this._car = car
  }
  introduce(): void {
    console.log(
      `Ich bin ${this._firstName} ${this._lastName}, ${this._age} Jahre alt und fahre ${this._car._currentSpeed} km/h in einem ${this._car._brand} .`
    )
  }
}
export default Driver
