import Button from "../button/Button"
import { Link } from "react-router"

type ProductCardProps = {
  name: string
  src: string
  to: string
}

export default function ProductCard(props: ProductCardProps) {
  return (
    <>
      <div className="relative">
        <h4 className="absolute top-4 left-5 text-xl font-semibold">{props.name}</h4>
        <img src={props.src} alt={props.name} />

        <Link to={props.to}>
          <span className="absolute bottom-2 left-35">
            <Button text="Shop now" />
          </span>
        </Link>
      </div>
    </>
  )
}
