import { useCocktails } from "../../context/CocktailsContext"
import { Button } from "../button/Button"

export default function AlcoholicGrid() {
  const { alcoholicOptions, setAlcoholic, setCategory } = useCocktails()
  if (!alcoholicOptions.length) return null
  return (
    <div className="flex flex-wrap gap-2">
      {alcoholicOptions.map((opt) => (
        <Button
          variant="outline"
          key={opt}
          onClick={() => {
            setCategory(null)
            setAlcoholic(opt)
          }}
          className="rounded-full! px-4! py-2! h-fit! text-xs! font-semibold text-accent-80!  border-border-80! bg-transparent!"
          children={opt}
        />
      ))}
    </div>
  )
}
