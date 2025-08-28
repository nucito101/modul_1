import React from "react"
import { type Animal } from "../../data/Animal"

type AnimalCardProps = {
  animal: Animal
}

export default function AnimalCard({ animal }: AnimalCardProps) {
  return (
    <>
      <article className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm">
        <div className="text-6xl text-center">{animal.emoji}</div>
        <h3 className="mt-2 mb-1 text-lg font-bold">
          {animal.name} <span className="text-gray-500 font-normal text-sm">({animal.species})</span>
        </h3>
        <p className="text-sm text-gray-700">Habitat: {animal.habitat}</p>
        <p className="text-sm text-gray-700">Diet: {animal.diet}</p>
        <p className="text-sm text-gray-700">Lifespan: {animal.lifespan} Years</p>

        <ul className="mt-2 list-none list-inside text-start text-sm text-gray-600">
          <p className="font-bold m-2">Fun Facts:</p>
          {animal.funFacts.map((fact, index) => (
            <li key={index}>{fact}</li>
          ))}
        </ul>
      </article>
    </>
  )
}
