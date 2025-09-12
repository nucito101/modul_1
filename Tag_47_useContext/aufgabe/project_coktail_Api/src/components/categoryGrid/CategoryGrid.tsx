import { useCocktails } from "../../context/CocktailsContext"
import { Button } from "../button/Button"

export default function CategoryGrid() {
  const { categories, setCategory, setAlcoholic } = useCocktails()
  if (!categories.length) return null
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((cat) => (
        <Button
          variant="outline"
          key={cat}
          onClick={() => {
            setAlcoholic(null)
            setCategory(cat)
          }}
          className="rounded-full! px-4! py-2! h-fit! text-sm! font-semibold text-accent-80! bg-transparent! border-border-80!"
          children={cat}
        />
      ))}
    </div>
  )
}
