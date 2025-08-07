import Customer from "./Classes/Customer"

const customer = new Customer("Max Mustermann", "max@google.com", "Musterstraße 1", "12345", "Berlin")

console.log(customer)
console.log(customer)

customer.name = "x".repeat(61)
customer.email = "fehlerhafte-email"
customer.postalCode = "12a45"
customer.postalCode = "123456"
