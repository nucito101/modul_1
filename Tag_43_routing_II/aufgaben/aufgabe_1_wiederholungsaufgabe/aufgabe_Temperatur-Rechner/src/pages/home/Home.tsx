import React, { useState } from "react"
import Input from "../../component/input/Input"
import Result from "../../component/result/Result"

export default function Home() {
  const [celsius, setCelsius] = useState<number | "">("")
  const [fahrenheit, setFahrenheit] = useState<number | "">("")

  const CelsiusChange = (value: string) => {
    const number = Number(value)
    if (isNaN(number)) {
      setCelsius("")
      setFahrenheit("")
      return
    }
    setCelsius(number)
    setFahrenheit((number * 9) / 5 + 32)
  }

  const FahrenheitChange = (value: string) => {
    const number = Number(value)
    if (isNaN(number)) {
      setCelsius("")
      setFahrenheit("")
      return
    }
    setFahrenheit(number)
    setCelsius(((number - 32) * 5) / 9)
  }

  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-screen text-black gap-6">
        <h1 className="text-3xl font-bold">Temperatur Umrechner</h1>

        <Input label="Celsius (°C)" value={celsius} onChange={CelsiusChange} />

        <Input label="Fahrenheit (°F)" value={fahrenheit} onChange={FahrenheitChange} />

        <Result celsius={celsius} fahrenheit={fahrenheit} />
      </main>
    </>
  )
}
