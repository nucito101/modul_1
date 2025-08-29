import React, { useState } from "react"
export default function CounterComponent() {
  // was ist ein Hook in React
  // Ein hock ist eine Function, die uns besimmte Functionen von React gibt, z.b State (Daten Merken oder speichern), Effekte (etwas ausführen, wenn sich etwas ändert) oder Refs (sachen langfristig speichern, ohne neu zu rendern)

  // UseState

  // const pizzaVariante = "funghi"

  // Stattdessen => UseState

  // !Usestate

  // der erste Wert ist "counter" (in diesem Fall) ist wie der getter wo ich mir die Daten holen kann
  // der zweite Wert "setCounter" ist wie der setter, sollte immer mit set beginnnen und ist die function mit der wir den Wert abändern können

  // die schreibweise von UseState
  const [counter, setCounter] = useState<number>(0)

  const plus = () => {
    setCounter(counter + 1)
  }

  return (
    <>
      <div>
        <p>Dast ist der der Counter {counter}</p>
        <button onClick={plus}>+1</button>
        <button onClick={() => setCounter(counter - 1)}>-1</button>
      </div>
    </>
  )
}
