import React from "react"
import type { Animal } from "../../data/Animal"
import AnimalCard from "../animalCard/AnimalCard"

type AnimalListProps = {
  animals: Animal[]
}

export default function AnimalList({ animals }: AnimalListProps) {
  return (
    <section className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(260px,1fr))]">
      {animals.map((animal, index) => (
        <AnimalCard key={index} animal={animal} />
      ))}
    </section>
  )
}
