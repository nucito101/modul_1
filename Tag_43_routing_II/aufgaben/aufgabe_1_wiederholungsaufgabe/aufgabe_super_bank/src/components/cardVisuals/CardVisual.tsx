import { CreditCard } from "react-kawaii"
import { getSprite } from "../mood/Mood"

type Props = { balance: number }
export default function CardVisual({ balance }: Props) {
  const { mood } = getSprite(balance)
  return (
    <div className="pt-10">
      <CreditCard size={300} mood={mood} color="#7dd3fc" />
    </div>
  )
}
