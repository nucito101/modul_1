import React, { useEffect, useState } from "react"

// Was sind UseEffect ?
// eine useEffect ist dafür das um einen Seiteneffekt zu machen. Heißt es wird immer ausgeführt wenn sich ein Wert ändert. Wird natürlich nur die Komponente neu gerendet

// wie ist die Schreibweise ?

// zuerst Useeffect dann als erstes Argument eine allBackFunction und dann Dependecie als lereres Array []

// useEffect(()=>{
// },[])

export default function Example() {
  const [counter, setCounter] = useState<number>(0)
  const [slider, setSlider] = useState<string>("")
  const changeCounter = () => {
    setCounter(counter + 1)
    console.log(counter)
  }

  const changeSlider = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(slider)
    setSlider(event.target.value)
  }

  useEffect(() => {
    // ich kann unendlich viele Abhängigkeiten haben
    // NO GO Bitte den Setter nie innerhalb der UseEffect schreiben
    // ich kann alles mögiche hier reinschreiben. dasa muss nicht nur ei State sein, später lernen wir auch noch wie wir z-B ID von der URL extrahieren das könnte in das leere Array als Dependecie geschrieben werden
    console.log(counter)
    console.log(slider)
  }, [counter, slider])

  return (
    <>
      <div>
        <p>Counter:</p>
        <p>{counter}</p>
        <button onClick={changeCounter}>+1</button>

        <p>Slider: {slider}</p>
        <input type="range" value={slider} onChange={changeSlider} />
      </div>
    </>
  )
}
