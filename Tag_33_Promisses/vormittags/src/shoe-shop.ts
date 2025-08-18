import "./style.css"

const shoePromise: Promise<string[]> = new Promise((resolve, reject) => {
  let ourShoeServer: boolean = true

  const shoes: string[] = ["Black High Heels", "Adidas Samba", "Green Crocs", "Nike Air Max", "Red Converse"]

  setTimeout(() => {
    if (ourShoeServer) {
      resolve(shoes)
    } else {
      reject("sry not shoes available")
    }
  }, 3000)
})

const orderbtn = document.getElementById("order-button") as HTMLButtonElement
const shoeOutPutElement = document.getElementById("shoe-output") as HTMLDivElement
const loaderIndicator = document.getElementById("loading") as HTMLDivElement

if (orderbtn && shoeOutPutElement && loaderIndicator) {
  orderbtn.addEventListener("click", () => {
    // ladeanzeige anzeigen, ist vorher aus display "none"
    loaderIndicator.style.display = "block"
    shoePromise
      .then((shoes: string[]) => {
        shoes.forEach((shoe: string) => {
          // schuhe anzeigen lassen
          // hier in shoes steckt das Ergebnis, das oben bei resolve mitgegebn wurde
          const shoeElement = document.createElement("p") as HTMLParagraphElement
          shoeElement
          shoeElement.innerText = shoe
          shoeOutPutElement.appendChild(shoeElement)
        })
      })
      .catch((err: string) => {
        const errorParagraph = document.createElement("p") as HTMLParagraphElement
        // const msg: string = err.message
        // errorParagraph.innerText = msg
        errorParagraph.innerText = err
        shoeOutPutElement.appendChild(errorParagraph)
      })
      .finally(() => {
        loaderIndicator.style.display = "none"
      })
  })
}
