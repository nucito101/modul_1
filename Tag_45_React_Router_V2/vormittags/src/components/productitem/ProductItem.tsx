import React from "react"
import type { IProduct } from "../../interfaces/IProduct"
import { Link } from "react-router"

interface ProductProps {
  product: IProduct
}

export default function ProductItem({ product }: ProductProps) {
  return (
    <>
      <div>
        <h3>{product.title}</h3>
        <img src={product.image} alt="" />
        <Link to={`/shop/${product.id}`}>See More Details</Link>
      </div>
    </>
  )
}
