import React, { useEffect, useState } from "react"
import type { IProduct } from "../interfaces/Iproduct"
import Loading from "../loading/Loading"
import Productitem from "../productItem/Productitem"
import "./Shop.css"

interface ShopProps {
  warenkorb: IProduct[]
  setWarenkorb: React.Dispatch<React.SetStateAction<IProduct[]>>
}

export default function Shop(props: ShopProps) {
  const [megaData, setMegaData] = useState<null | IProduct[]>([])
  useEffect(() => {
    // Function zum Daten fetchen
    //  der Vorteil hier ist, die Daten werden nun einmal gefetched bei ersten rendern der Komponent

    // bitte denkt dran dass aync darf nicht vor der ersten callbackfunction in UseEffect geschrieben werden, dafür brauchen wir eine zusätzliche CallBackFunction
    const fetchData = async () => {
      const resp = await fetch("https://fakestoreapi.com/products")
      const respInJson = await resp.json()
      setMegaData(respInJson)
    }
    fetchData()
  }, [])
  return (
    <>
      <h2>Shop</h2>
      {megaData ? (
        <>
          <div className="product_container">
            {megaData.map((itemObj: IProduct) => {
              return (
                <div key={itemObj.id}>
                  <Productitem product={itemObj} warenkorb={props.warenkorb} setWarenkorb={props.setWarenkorb} />
                </div>
              )
            })}
          </div>
        </>
      ) : (
        <Loading />
      )}
    </>
  )
}
