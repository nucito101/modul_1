import React from "react"
import type { ICar } from "../../interface/ICars"
import CardItem from "../cardItem/CardItem"

interface ListItemProps {
  carsArray: ICar[]
}

export default function ListItem({ carsArray }: ListItemProps) {
  // console.log(carsArray);
  return (
    <div>
      {carsArray.map((car: ICar, index: number) => {
        console.log(car)
        return (
          <>
            <div key={index}>
              <CardItem car={car} />
            </div>
          </>
        )
      })}
    </div>
  )
}
