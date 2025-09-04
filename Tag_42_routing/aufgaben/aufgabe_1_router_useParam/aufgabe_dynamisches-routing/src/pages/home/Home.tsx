import type { Car } from "../../components/carCard/CarCard"
import CarCard from "../../components/carCard/CarCard"
import cars from "../../data/cars.json"

export default function Home() {
  const list = cars as Car[]

  return (
    <section>
      <div className="grid">
        {list.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </section>
  )
}
