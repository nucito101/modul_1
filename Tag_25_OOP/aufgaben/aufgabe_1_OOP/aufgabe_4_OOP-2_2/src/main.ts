import Car from "./Classes/Car"
import Driver from "./Classes/Driver"

const car1 = new Car("Porsche", 2020, 120)
const car2 = new Car("Tesla", 2022, 80)
const car3 = new Car("BMW", 2018, 50)

const driver1 = new Driver("Anna", "Weber", 32, car1)
const driver2 = new Driver("Ben", "Schmidt", 45, car2)
const driver3 = new Driver("Clara", "Müller", 28, car3)

driver1.introduce()
driver2.introduce()
driver3.introduce()
