function checkAirQuality() {
  const aqi = parseInt(document.getElementById("aqiSlider").value)
  const aqiValue = document.getElementById("aqiValue")
  const resultDiv = document.getElementById("result")
  aqiValue.textContent = aqi

  if (aqi <= 50) {
    document.body.style.backgroundColor = "#A8E05F"
    result.innerHTML = `
      <p>Level of health concern: Good</p>
      <p>Level of health effect: Little or no risk</p>
        `
  } else if (aqi <= 100 && aqi >= 50) {
    document.body.style.backgroundColor = "#FDD74B"
    result.innerHTML = `
      <p>Level of health concern: Moderate</p>
      <p>Level of health effect: Acceptable quality</p>
        `
  } else if (aqi <= 150 && aqi >= 100) {
    document.body.style.backgroundColor = "#FE9B57"
    result.innerHTML = `
      <p>Level of health concern: Unhealthy for sensitive groups</p>
      <p>Level of health effect: General public not likely affected</p>
        `
  }
}
