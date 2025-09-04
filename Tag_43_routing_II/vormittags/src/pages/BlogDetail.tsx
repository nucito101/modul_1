import React from "react"
import { useParams } from "react-router"

export default function BlogDetail() {
  // const location = useLocation()
  // useLocation gibt uns die informationen vergleichbar mit window.location;

  const params = useParams<string>()
  return (
    <>
      <div>Huhu Details</div>
    </>
  )
}
