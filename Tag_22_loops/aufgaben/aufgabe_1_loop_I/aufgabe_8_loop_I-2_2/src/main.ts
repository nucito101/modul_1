import "./style.css"

const input = document.getElementById("inputCount") as HTMLInputElement
const button = document.getElementById("btn") as HTMLButtonElement
const output = document.getElementById("output") as HTMLParagraphElement

button.addEventListener("click", () => {
  const count = parseInt(input.value)

  if (isNaN(count) || count < 1) {
    output.textContent = "Bitte gib eine gültige Zahl größer als 0 ein."
    return
  }

  let loopWord = "L"
  for (let i = 0; i < count; i++) {
    loopWord += "o"
  }
  loopWord += "p"

  output.textContent = loopWord
})
