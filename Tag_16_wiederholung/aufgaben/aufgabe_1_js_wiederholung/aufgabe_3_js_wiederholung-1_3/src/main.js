function agegape() {
  const alter1 = document.getElementById("age_input_1").value
  const alter2 = document.getElementById("age_input_2").value
  const resultOutput = document.querySelector(".result")

  const ageDifferenz = Math.abs(alter1 - alter2)
  resultOutput.textContent = ageDifferenz
}
