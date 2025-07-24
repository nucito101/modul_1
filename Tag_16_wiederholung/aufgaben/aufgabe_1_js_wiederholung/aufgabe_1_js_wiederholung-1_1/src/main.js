function doubleval() {
  const inputNumber = document.getElementById("numberinput").value
  const resultOutput = document.querySelector(".double__result")

  const result = inputNumber * 2
  resultOutput.textContent = result
}
