import React, { useState } from "react"
import Example from "../../components/example/Example"
import type { IProduct } from "../../components/interfaces/Iproduct"
import Shop from "../../components/shop/Shop"
import Header from "../../components/header/Header"

export default function Home() {
  const [warenkorb, setWarenkorb] = useState<IProduct[]>([])
  return (
    <>
      <Header warenkorb={warenkorb} setWarenkorb={setWarenkorb} />
      {/* <Example /> */}
      {/* hier reiche ich getterr und setter weiter - props */}
      <Shop warenkorb={warenkorb} setWarenkorb={setWarenkorb} />
    </>
  )
}
