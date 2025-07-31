const fahrenheit: number[] = [0, 32, 45, 50, 75, 80, 99, 120]

function toCelsius(f: number): number {
  return (f - 32) / 1.8
}

const celsiusRounded: number[] = fahrenheit.map((f) => +toCelsius(f).toFixed(0))

console.log("Celsius:", celsiusRounded)
