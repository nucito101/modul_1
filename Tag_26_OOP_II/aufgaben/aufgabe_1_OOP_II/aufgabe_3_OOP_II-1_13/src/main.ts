import Car from "./Classes/Car"
import Driver from "./Classes/Driver"
import CarType from "./Enum/EnumCarType"

const car1 = new Car("Porsche", 2020, 120, CarType.Coupe)
const car2 = new Car("Tesla", 2022, 80, CarType.SUV)
const car3 = new Car("BMW", 2018, 200, CarType.Sedan)

const driver1 = new Driver("Anna", "Weber", 32, car1, 2012)
const driver2 = new Driver("Ben", "Schmidt", 45, car2, 2014)
const driver3 = new Driver("Clara", "Müller", 28, car3, 2020)

driver1.introduce()
driver2.introduce()
driver3.introduce()

console.log(car1.getSpeedInfo())
console.log(driver1.getCarType())
console.log(driver1.licenseFromYear)
console.log(car1.contructionYear)
