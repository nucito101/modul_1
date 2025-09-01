import React, { useState } from "react"

import Cart from "../../assets/SVG/Cart"
import "./Header.css"
import type { IProduct } from "../interfaces/Iproduct"

interface HeaderProps {
  warenkorb: IProduct[]
  setWarenkorb: React.Dispatch<React.SetStateAction<IProduct[]>>
}

export default function Header({ warenkorb, setWarenkorb }: HeaderProps) {
  const [warenKorbModal, setWarenKorbModal] = useState<boolean>(false)

  const pay = () => {
    setWarenkorb([])
    alert("Vielen Dank für deine Einkauf")
    setWarenKorbModal(false)
  }

  console.log(warenKorbModal)

  const deleteProductFunction = (productId: number): void => {
    const deletedProductArray: IProduct[] = warenkorb.filter((product: IProduct) => product.id !== productId)
    console.log(deletedProductArray)
    setWarenkorb(deletedProductArray)
  }

  return (
    <header>
      <h2>LOGO</h2>
      <nav>
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>

        <div className="cart-icon" onClick={() => setWarenKorbModal(!warenKorbModal)}>
          <p className="num">{warenkorb.length}</p>
          <Cart />
        </div>

        {/* Logik fpr warenkorb anzeigen oder nicht, mit dem && frage nach "true" ab */}
        {warenKorbModal && (
          <div className="cart">
            <h3>WarenKorb</h3>
            {warenkorb.length !== 0 ? (
              <>
                {warenkorb.map((product: IProduct) => {
                  return (
                    <div key={product.id}>
                      <p>
                        {product.title} {product.price}
                      </p>
                      <button onClick={() => deleteProductFunction(product.id)}>❌</button>
                    </div>
                  )
                })}
                <button onClick={pay}>Bezahlen</button>
              </>
            ) : (
              <>
                <p>Dein Warenkorb ist leer....</p>
              </>
            )}
          </div>
        )}
      </nav>
    </header>
  )
}
