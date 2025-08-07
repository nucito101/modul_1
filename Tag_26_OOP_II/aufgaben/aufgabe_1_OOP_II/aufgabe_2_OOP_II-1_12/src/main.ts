import IceCreamFlavor from "./Classes/IceCreamFlavor"

const vanilla = new IceCreamFlavor("Vanilla", 1.5, true)
vanilla._description = "Classic Taste"
const chocolate = new IceCreamFlavor("Chocolate", 1.5, true)
const lemon = new IceCreamFlavor("Lemon", 1.6, false)
lemon._description = "lemony"
const smurf = new IceCreamFlavor("Smurf", 1, true)

const IceCreamFlavors: IceCreamFlavor[] = [vanilla, chocolate, lemon, smurf]

// IceCreamFlavors.forEach((flavor) => {
//   if (flavor._isPopular) {
//     console.log(flavor._name)
//   }
// })

vanilla.printInfo()
chocolate.printInfo()

smurf.getTotalPrice(3)
console.log(lemon.getLengthOfDescription())
console.log(vanilla.getLengthOfDescription())

const card = document.getElementById("flavor_list") as HTMLDivElement

IceCreamFlavors.forEach((flavor) => {
  let scoopsCount = 0

  const wrapper = document.createElement("div")
  wrapper.className = "flavor"

  const tittle = document.createElement("h2")
  tittle.textContent = flavor._name
  if (flavor._isPopular) {
    tittle.classList.add("popular")
  }

  const price = document.createElement("p")
  price.textContent = `Price: ${flavor._price.toFixed(2)} Euro`

  const scoopbtn = document.createElement("button")
  scoopbtn.textContent = "+1"

  const totalPriceContent = document.createElement("p")
  totalPriceContent.className = "total-price"
  totalPriceContent.textContent = "Total Price: 0.00 Euro"

  scoopbtn.addEventListener("click", () => {
    scoopsCount++
    flavor.getTotalPrice(scoopsCount)

    const total = (flavor._price * scoopsCount).toFixed(2)
    totalPriceContent.textContent = `Total Price : ${total} Euro`
  })
  wrapper.appendChild(tittle)
  wrapper.appendChild(price)
  wrapper.appendChild(totalPriceContent)
  wrapper.appendChild(scoopbtn)
  card?.appendChild(wrapper)
})
