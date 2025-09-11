import React from "react"
import type { ICharacter, IEpisode, ILocation } from "../../interfaces/Interface"

interface CardItemProps<T> {
  item: T
  link: string
}

export default function CardItem<T>({ item, link }: CardItemProps<T>) {
  return (
    <div>
      {link === "character" && (
        <>
          <img src={(item as ICharacter).image} alt="" />
          <h2>Name: {(item as ICharacter).name}</h2>
        </>
      )}
      {link === "location" && (
        <>
          <h2>Name: {(item as ILocation).name}</h2>
          <p>Dimension {(item as ILocation).dimension}</p>
        </>
      )}

      {link === "episode" && (
        <>
          <h2>Name: {(item as IEpisode).name}</h2>
        </>
      )}
    </div>
  )
}
