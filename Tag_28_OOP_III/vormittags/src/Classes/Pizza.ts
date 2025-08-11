import IPizza from "../Interfaces/IPizza"

class Pizza implements IPizza {
  _name: string
  _quantity: number

  constructor(name: string, quantity: number) {
    this._name = name
    this._quantity = quantity
  }
}

export default Pizza
