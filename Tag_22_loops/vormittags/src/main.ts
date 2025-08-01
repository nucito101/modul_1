// querySelector<HTMLInputElement> <- Hiermit können wir TS mitteilen welches Element wir erwarten
const arrayInput = document.querySelector<HTMLInputElement>("#array-input")
const buttonElement = document.querySelector<HTMLButtonElement>("#button")

//* mit dem Optional Chaining operator (?.) können wir auf properties von Werten zugreifen
//* die vielleicht nicht vorhanden sind. Falls sie nicht vorhanden sind, ist das Ergebnis undefined
// const inputValue = arrayInput ? arrayInput.value : undefined
// const inputValue = arrayInput?.value

buttonElement?.addEventListener("click", function buttonCallback() {
  if (arrayInput) {
    const array: number[] = JSON.parse(arrayInput.value)

    // * Umsetzung einer einzelnen Bubblesort-Iteration:
    // wir iterieren einmal ueber den array, hoeren dabei aber ein element frueher auf als sonst,
    // da wir immer zwei benachbarte elemente vergleichen wollen, und sonst uebers ziel hinausschiessen wuerden.
    for (let i = 0; i < array.length - 1; i++) {
      let a = array[i]
      let b = array[i + 1]
      // wir vergleichen benachbarte elemente:
      // falls sie nicht richtig sortiert stehen, vertauschen wir sie
      if (a > b) {
        array[i + 1] = a
        array[i] = b
      }
    }
    console.log(array)
    // etwas sortierteren array zurueck in input schreiben:
    arrayInput.value = JSON.stringify(array)
  }
})
