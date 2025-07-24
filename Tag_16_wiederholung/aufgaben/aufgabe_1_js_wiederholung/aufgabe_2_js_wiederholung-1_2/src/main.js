const gebJahr = document.getElementById("geburtsjahr").value
const aktuelJahr = new Date().getFullYear()
const resultOutput = document.querySelector(".alter")

function berechnungAlter() {
  if (gebJahr.length === 4) {
    const result = aktuelJahr - gebJahr

    resultOutput.textContent = result
  } else {
    resultOutput.textContent = "Gebe das volle Jahr ein"
  }
}
