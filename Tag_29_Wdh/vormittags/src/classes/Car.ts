import { OrderStatus } from "../enums/OrderStatus"
import { ICar } from "../Interfaces/ICar"

class Car implements ICar {
  _brand: string
  _model: string

  // was ist static ?
  // sie gehört der Klasse selbst und nicht einer Instanz
  // man greift mit KlassenName.Eigenschaften oder KlassenName.Methoden
  // ! dafür braucht man keine new oder erzeugtes Obj
  static numberOfCar: number = 0

  static status: OrderStatus = OrderStatus.Created

  static availableTypes = ["BMW", "BENZ", "TESLA", "VW", "FORD", "FERRARI"]

  constructor(brand: string, model: string) {
    this._brand = brand
    this._model = model
    Car.numberOfCar++
  }

  static howManyCars(): void {
    console.log(`Es gibt ${Car.numberOfCar} Autos in der Garage`)
  }

  startEngine(): void {
    throw new Error("Method not implemented.")
  }

  static updateOrder(): void {
    if (Car.status === OrderStatus.Created) {
      Car.status = OrderStatus.Ready
    }
    if (Car.status === 1) console.log("Das Auto ist bereit zu verkaufen")
  }

  static isAvailable(typeParameter: string): void {
    if (Car.availableTypes.includes(typeParameter)) {
      console.log(`Die Marke ${typeParameter} ist Vorhanden`)
    } else {
      console.log(`Die Marke ${typeParameter} ist nicht Vorhanden`)
    }
  }
}

export default Car
