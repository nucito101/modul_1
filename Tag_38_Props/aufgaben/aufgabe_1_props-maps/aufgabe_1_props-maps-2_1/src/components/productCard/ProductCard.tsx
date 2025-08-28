import React from "react"
import BuyBtn from "../buybtn/BuyBtn"

type ProductCardProps = {
  name: string
  price: number
  image: string
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, image }) => {
  return (
    <div className="p-4 w-90 text-center flex flex-col gap-5">
      <img src={image} alt={name} className="h-60 w-full object-cover" />
      <h2 className="mt-3 text-lg font-semibold">{name}</h2>
      <p className="text-white-200">$ {price}</p>
      <BuyBtn />
    </div>
  )
}

export default ProductCard
