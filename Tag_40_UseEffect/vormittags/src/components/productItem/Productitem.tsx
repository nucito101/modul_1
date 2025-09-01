import React from "react"
import type { IProduct } from "../interfaces/Iproduct"
import "./ProductItem.css"

interface ProductItemProps {
  product: IProduct
  warenkorb: IProduct[]
  setWarenkorb: React.Dispatch<React.SetStateAction<IProduct[]>>
}

export default function Productitem({ product, warenkorb, setWarenkorb }: ProductItemProps) {
  const addToCartFunction = (item: IProduct) => {
    if (!item) return
    // der Warenkorb darf nicht überschrieben werden, sondern nur ein Product jedes mal neu hinzugefügt werden
    setWarenkorb([...warenkorb, item])
    console.log(item)
  }

  return (
    <>
      <div>
        <h5>Product Item</h5>
        <h6>Title: {product.title}</h6>
        <p>Price: {product.price}</p>
        <p>Category: {product.category}</p>
        <img src={product.image} alt="" />
        <button onClick={() => addToCartFunction(product)}>Add to Cart</button>
      </div>
    </>
  )
}
