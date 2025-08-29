import React, { useState } from "react"

// Aufgabe React-useState-Day-Night-Change-Level-2_2
export default function DayNight() {
  const [day, setDay] = useState<boolean>(true)
  return (
    <>
      <div
        className={`h-screen w-screen flex flex-col items-center justify-center transition-colors duration-300 ${
          day ? "bg-gray-100 text-black" : "bg-black text-white"
        }`}>
        <h1 className="text-3xl font-bold">{day ? "Day" : "Night"}</h1>
        <button
          onClick={() => setDay(!day)}
          className={`mt-6 px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${
            day ? "border border-grey-600 text-black " : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}>
          {day ? "Change to Night" : "Change to Day"}
        </button>
      </div>
    </>
  )
}
