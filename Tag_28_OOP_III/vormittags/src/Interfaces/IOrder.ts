import OrderStatus from "../Enum/OrderStatus"
import type IPizza from "./IPizza"

interface IOrder {
  _ordernumber: number
  _customerName: string
  // Ich kann auch ein Interface in der Type definition eines anderen verwenden
  _pizzen: IPizza[]
  _status: OrderStatus

  // Schreibweise (wie bei type 9 => Methodenname: () für Parameter => Rückgabedatentyp)
  // gibMalName: () => string
  updateStatus: () => void
  cancle: () => boolean
}

export default IOrder
