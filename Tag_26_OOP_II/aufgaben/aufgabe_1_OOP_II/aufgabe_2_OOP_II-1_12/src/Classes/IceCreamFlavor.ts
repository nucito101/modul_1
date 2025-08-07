class IceCreamFlavor {
  _name: string = ""
  _price: number = 0
  _isPopular: boolean = false
  _description?: string = "0"

  constructor(name: string, price: number, isPopular: boolean) {
    this._name = name
    this._price = price
    this._isPopular = isPopular
  }

  getTotalPrice(numberOfScoops: number): void {
    const total = this._price * numberOfScoops
    console.log(`Total price for ${numberOfScoops} scoops of ${this._name}: ${total.toFixed(2)} Euro`)
  }

  printInfo(): void {
    const popularity = this._isPopular ? "is popular" : "is not popular"
    console.log(`Flavor ${this._name} ${popularity} and costs ${this._price.toFixed(2)} Euro.`)
  }

  getLengthOfDescription(): number {
    return this._description?.length ?? 0
  }
}

export default IceCreamFlavor
