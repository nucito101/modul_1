import type CarType from "../Enum/EnumCarType"

class Car {
  _brand: string
  private _constructionYear: number
  _currentSpeed: number
  _carType: CarType

  constructor(brand: string, constructionYear: number, currentSpeed: number, carType: CarType) {
    this._brand = brand
    this._constructionYear = constructionYear
    this._currentSpeed = currentSpeed
    this._carType = carType
  }

  public get contructionYear(): number {
    return this._constructionYear
  }

  public get carType(): CarType {
    return this._carType
  }

  getSpeedInfo(): string {
    const speed = this._currentSpeed

    if (speed <= 40) {
      return "Driving slowly"
    } else if (speed <= 70) {
      return "Driving normally"
    } else if (speed <= 120) {
      return "Driving fast"
    } else if (speed <= 190) {
      return "Driving really fast"
    } else {
      return "WTF"
    }
  }
}
export default Car
