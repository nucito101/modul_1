import OrderStatus from "../Enum/OrderStatus"
import IOrder from "../Interfaces/IOrder"
import IPizza from "../Interfaces/IPizza"

class Order implements IOrder {
  _ordernumber: number
  _customerName: string
  _pizzen: IPizza[] = []
  _status: OrderStatus

  cancle(): boolean {
    if (OrderStatus.Created) {
      return false
    } else {
      this._status = OrderStatus.Canceled
      return true
    }
  }

  constructor(orderNumber: number, customerName: string, status: OrderStatus) {
    this._ordernumber = orderNumber
    this._customerName = customerName
    this._status = status
  }

  updateStatus(): void {
    if (OrderStatus.Created === this._status) {
      this._status = OrderStatus.Ready
    }
  }
}
export default Order
