function adult() {
  const ageInput = document.querySelector("#ageInput").value
  const output = document.querySelector(".output")
  if (ageInput >= 18) {
    output.innerHTML = "<p>Volljährig</p>"
  } else {
    output.innerHTML = "<p>Minderjährig</p>"
  }
}
