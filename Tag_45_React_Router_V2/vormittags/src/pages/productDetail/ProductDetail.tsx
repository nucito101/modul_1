import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router"
import type { IProduct } from "../../interfaces/IProduct"

export default function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState<IProduct>()
  console.log({ id })

  useEffect(() => {
    const fetcchData = async () => {
      const resp = await axios.get(`https://fakestoreapi.com/products/${id}`)
      setProduct(resp.data)
    }
    fetcchData()
  }, [id])
  return (
    <div>
      ProductDetail
      <h3>Title {product?.title}</h3>
      <p>Preis {product?.price}</p>
      <img src={product?.image} alt="" />
      <p>Description {product?.description}</p>
      <Link to="/shop">Back to Shop</Link>
    </div>
  )
}
