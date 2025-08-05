// = querySelector
//  holt sich nur das erste Element das gefunden wird
// wir können hier die Elemente über die bekannt CSS syntax "." nutzen, it . auf Klassen oder mit # auf Ids oder div auf div elemente

// V.01
// const containerElement = document.getElementById("container")!

// containerElement.innerHTML = "<p>Hello World</p>"

// V.02
const containerElement = document.getElementById("container") as HTMLDivElement

// containerElement.innerHTML = "<p>Hello World</p>"

// V.03
// Diese Variante funktioniert nur unter einer Bedingung und zwar mit nur querySelector, ansonsten würde dass mit getElemenById nicht funktionieren

// const containerElementVarianteDrei = document.querySelector<HTMLDivElement>("#container")

// V.04
// const containerElementVarianteVier: HTMLDivElement | null = document.querySelector("#container")

// createElement
const paragraphElement = document.createElement("p") as HTMLParagraphElement
paragraphElement.textContent = "Was ghet ab"
containerElement.appendChild(paragraphElement)

// Container 2
const container2 = document.getElementById("container2") as HTMLDivElement
const obstSalat: string[] = ["Kiwi", "Apfel", "Aprikose"]
const ungeordneteListenElement = document.createElement("ul") as HTMLUListElement

obstSalat.forEach((obst: string) => {
  const listElement = document.createElement("li") as HTMLLIElement
  listElement.textContent = obst
  listElement.style.color = "red"
  listElement.style.listStyle = "none"
  ungeordneteListenElement.appendChild(listElement)
})
container2.appendChild(ungeordneteListenElement)

const shoppingList = ["Gemüse", "Obst", "Snacks", ["Shampoo", "Seife", "Spüllung"]]

const myBtnElement = document.getElementById("show_myList") as HTMLButtonElement
myBtnElement.addEventListener("click", () => {
  const olListElement = document.createElement("ol") as HTMLOListElement
  olListElement.style.listStyle = "none"

  shoppingList.forEach((product: string | string[]) => {
    const liElement = document.createElement("li") as HTMLLIElement
    if (Array.isArray(product)) {
      const innerULListElement = document.createElement("ul") as HTMLUListElement
      innerULListElement.style.listStyle = "none"
      const innerLiElement = document.createElement("li") as HTMLLIElement
      innerLiElement.textContent = "Dm"
      innerULListElement.appendChild(innerLiElement)
      product.forEach((element: string) => {
        const liElementinSchleife = document.createElement("li") as HTMLLIElement
        liElementinSchleife.textContent = element
        innerULListElement.appendChild(liElementinSchleife)
      })
      liElement.appendChild(innerULListElement)
    } else {
      liElement.textContent = product
    }
    olListElement.appendChild(liElement)
  })

  document.body.appendChild(olListElement)
})

// =querySelctorAll
// holt sich alle Elemente, auf die die Bedingung zutrifft

const alleDivElement = document.querySelectorAll("div")
const allLisElemente = document.querySelectorAll<HTMLLIElement>("#testingArea li")

// allLisElemente[1].style.color = "red"
allLisElemente[0].textContent = "Ich bin das erste Kind"

allLisElemente.forEach((element: HTMLLIElement, index: number) => {
  if (index % 2 === 0) {
    element.style.color = "red"
  } else {
    element.style.color = "green"
  }
})

const myImg = document.createElement("img") as HTMLImageElement
myImg.setAttribute("src", "https://picsum.photos/id/237/200/300")
myImg.setAttribute("alt", "das ist ein random Pic von picsum")

document.body.appendChild(myImg)

const anchorElement = document.createElement("a") as HTMLAnchorElement
anchorElement.setAttribute("href", "https://www.google.com/?hl=de")
anchorElement.setAttribute("target", "_blank")
anchorElement.textContent = "got to google"

document.body.appendChild(anchorElement)
