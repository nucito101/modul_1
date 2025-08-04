// Registriere Kunden

type TNewCostumer = {
  firstName: string
  lastName: string
  email: string
  mobilePhone?: string
}

const customer1: TNewCostumer = {
  firstName: "Franny",
  lastName: "Salinger",
  email: "f.salinger@gmail.de",
  mobilePhone: "0178 / 12340182",
}

const customer2: TNewCostumer = {
  firstName: "Malte",
  lastName: "Pfeiffer",
  email: "malte@gmail.de",
}

// Object Kopieren

// const copyCustomer1: TNewCostumer = customer1
// console.log(copyCustomer1);

// V1 spread Operator
const realCopyCustomer1: TNewCostumer = { ...customer1 }
realCopyCustomer1.firstName = "Joe"
console.log(customer1)
console.log(realCopyCustomer1)

// V2 Object.assign()
const copyWithAssign = Object.assign({}, customer1)
console.log(copyWithAssign)

copyWithAssign.firstName = "Sunny"
console.log("copy customer", copyWithAssign.firstName)
console.log("costumer1", customer1.firstName)

const customer4: TNewCostumer = {
  firstName: "Jochen",
  lastName: "Schweitzer",
  email: "jochen@schweitzer.com",
}

const customerListe: TNewCostumer[] = [customer1, customer4, customer2]

// customerListe.forEach((customer1: TNewCostumer)=> if(customer1.mobilePhone){
//   console.log(customer1.mobilePhone);
// }{}
// )

type TAppointment = {
  title: string
  date: Date
  isImportant: boolean
}

const footballTraining: TAppointment = {
  title: "Training Alte Herren",
  date: new Date(),
  isImportant: false,
}

const watchMovie: TAppointment = {
  title: "Planet der Affen anschauen",
  date: new Date(),
  isImportant: true,
}

const termine: TAppointment[] = [footballTraining, watchMovie]
termine.forEach((termin: TAppointment) => {
  console.log(termin.title)
})

// Datentype in anderem Datentype
type TArticle = {
  number: number
  name: string
  quantity: number
}

type TOrder = {
  id: string
  customerNumber: number
  articles: TArticle[]
}

const article1: TArticle = {
  number: 123,
  name: "Adidas Samba Größe 44",
  quantity: 1,
}

const article2: TArticle = {
  number: 100,
  name: "Nike Micheal Jorden Größe 50",
  quantity: 3,
}

const firstOrder: TOrder = {
  id: "Ad21e31231",
  customerNumber: 2131231,
  articles: [article1, article2],
}

console.log(firstOrder.articles[0].name)
