import "./style.css"

const heightInput = document.getElementById("height")
const ageInput = document.getElementById("age")
const weightInput = document.getElementById("weight")
const activityInput = document.getElementById("activity")

document.getElementById("calculator__form").addEventListener("submit", function (e) {
  e.preventDefault()

  const heightInputValue = heightInput.value
  const ageInputValue = ageInput.value
  const weightInputValue = weightInput.value
  const activityInputValue = activityInput.value
  const genderInput = document.querySelector('input[name="gender"]:checked')
  const genderInputValue = genderInput.value

  let grundumsatz = 0
  let grundumsatzKJ = 0
  let gesamtumsatz = 0
  let gesamtumsatzKJ = 0

  if (genderInputValue === "male") {
    grundumsatz = 66.47 + 13.7 * weightInputValue + 5 * heightInputValue - 6.8 * ageInputValue
  } else {
    grundumsatz = 65.51 + 9.6 * weightInputValue + 1.8 * heightInputValue - 4.7 * ageInputValue
  }

  // kcal
  gesamtumsatz = grundumsatz * activityInputValue

  // kj
  grundumsatzKJ = grundumsatz * 4.1868
  gesamtumsatzKJ = gesamtumsatz * 4.1868

  document.getElementById("calc__result__rate__kcal").innerText = grundumsatz.toFixed(2)
  document.getElementById("calc__result__rate__kj").innerText = grundumsatzKJ.toFixed(2)
  document.getElementById("calc__result__total__kcal").innerText = gesamtumsatz.toFixed(2)
  document.getElementById("calc__result__total__kj").innerText = gesamtumsatzKJ.toFixed(2)
})
