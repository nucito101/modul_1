import IceCreamFlavor from "./Classes/IceCreamFlavor"

const vanilla = new IceCreamFlavor("Vanilla", 1.5, true, "Classic Taste")
const chocolate = new IceCreamFlavor("Chocolate", 1.5, true)
const lemon = new IceCreamFlavor("Lemon", 1.6, false, "lemony")
const smurf = new IceCreamFlavor("Smurf", 1.4, true)

const IceCreamFlavors: IceCreamFlavor[] = [vanilla, chocolate, lemon, smurf]

IceCreamFlavors.forEach((flavor) => {
  if (flavor._isPopular) {
    console.log(flavor._name)
  }
})
