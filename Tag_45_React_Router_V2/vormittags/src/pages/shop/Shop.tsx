import React, { useEffect, useState } from "react"
import type { IProduct } from "../../interfaces/IProduct"
import axios from "axios"
import ProductItem from "../../components/productitem/ProductItem"

export default function Shop() {
  const [products, setProducts] = useState<IProduct[]>([])
  useEffect(() => {
    const fetchData = async () => {
      const resp = await axios.get("https://fakestoreapi.com/products")
      setProducts(resp.data)
      console.log(resp)
    }

    fetchData()
  }, [])

  return (
    <>
      <h4>Product Liste</h4>
      {products.map((product) => (
        <div key={product.id}>
          <ProductItem product={product} />
        </div>
      ))}
    </>
  )
}
