import React, { useState } from "react"

// Aufgabe React-Counter-Level-1_3
export default function Counter() {
  const [count, setCount] = useState<number>(0)
  return (
    <>
      <div>
        <h1>Counter: {count}</h1>

        <div>
          <button onClick={() => setCount(count + 1)}>+</button>
          <button onClick={() => setCount(count - 1)}>-</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>
    </>
  )
}
