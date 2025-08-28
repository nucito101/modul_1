import React from "react"
import AnimalList from "../../componets/animalList/AnimalList"
import animals from "../../data/Animal"

export default function Home() {
  return (
    <div>
      <main className="mx-16 p-6 text-center">
        <h1 className="text-2xl font-bold mb-4">Animal-Database</h1>
        <AnimalList animals={animals} />
      </main>
    </div>
  )
}
