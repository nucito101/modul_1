class IceCreamFlavor {
  _name: string = ""
  _price: number = 0
  _isPopular: boolean = false
  _description?: string

  constructor(name: string, price: number, isPopular: boolean) {
    this._name = name
    this._price = price
    this._isPopular = isPopular
  }
}

export default IceCreamFlavor
