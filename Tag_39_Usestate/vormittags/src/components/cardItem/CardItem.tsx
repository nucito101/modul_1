import React from "react"
import type { ICar } from "../../interface/ICars"

interface cardItemProps {
  car: ICar
}

export default function CardItem({ car }: cardItemProps) {
  return (
    <>
      <div>
        <h2>Modell: {car.modell}</h2>
        <h3>Marke: {car.marke}</h3>
        <p>PS: {car.ps}</p>
      </div>
    </>
  )
}
