function weather() {
  const weatherQuali = document.querySelector("#weather-quali").valueAsNumber
  const output = document.querySelector(".output")
  if (weatherQuali >= 8 && weatherQuali <= 10) {
    output.innerHTML = "<p>super</p>"
  } else if (weatherQuali >= 6 && weatherQuali <= 7) {
    output.innerHTML = "<p>gut</p>"
  } else if (weatherQuali >= 3 && weatherQuali <= 5) {
    output.innerHTML = "<p>okay</p>"
  } else {
    output.innerHTML = "<p>schlecht</p>"
  }
}
