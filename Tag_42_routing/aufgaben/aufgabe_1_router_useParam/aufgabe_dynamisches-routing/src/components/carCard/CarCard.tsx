import { Link } from "react-router"

export interface Car {
  id: number
  carModel: string
  CarMake: string
  CarYear: number
}

export default function CarCard({ car }: { car: Car }) {
  return (
    <>
      <article>
        <h3>{car.CarMake}</h3>
        <div>
          <Link to={`/cars/${car.id}`}>Read more</Link>
        </div>
      </article>
    </>
  )
}
