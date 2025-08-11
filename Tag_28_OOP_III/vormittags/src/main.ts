import Employee from "./Classes/Employee"
import Order from "./Classes/Order"
import Person from "./Classes/Person"
import Pizza from "./Classes/Pizza"
import OrderStatus from "./Enum/OrderStatus"
import IPizza from "./Interfaces/IPizza"
import "./style.css"

const user1 = new Person("Andre", "Schmidt", "178612446352")
console.log(user1)

const Employee_Andre = new Employee("Andre", "Schmidt", "178612446352")
console.log(Employee_Andre)

Employee_Andre.email = "andre@gmail.de"
console.log(Employee_Andre)

console.log(Employee_Andre.getfullName())
Employee_Andre.checkingFly()

const order1 = new Order(1, "Joe Dow", OrderStatus.Created)

const pizzaFunghi = new Pizza("Pizza Funghi", 1)
const pizzaaTunna = new Pizza("Pizza Tuna", 2)

// Die einfach Variante
// order1_status = OrderStatus.Ready

order1.updateStatus()
console.log(order1)

const pizzariaArray = [pizzaFunghi, pizzaaTunna]

if (order1._status === OrderStatus.Ready) {
  pizzariaArray.forEach((pizza: IPizza) => {
    order1._pizzen.push(pizza)
  })
}
