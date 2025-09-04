import { useParams } from "react-router"
import type { Car } from "../../components/carCard/CarCard"
import cars from "../../data/cars.json"

export default function CarDetail() {
  const { id } = useParams()
  const carId = Number(id)

  const car = (cars as Car[]).find((c) => c.id === carId)

  return (
    <section>
      <h2>{car?.CarMake}</h2>
      <h2>{car?.carModel}</h2>
      <h2>{car?.CarYear}</h2>
    </section>
  )
}
