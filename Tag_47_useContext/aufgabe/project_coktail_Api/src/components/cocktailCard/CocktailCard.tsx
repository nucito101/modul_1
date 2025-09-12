import { useCocktails } from "../../context/CocktailsContext"
import type { CocktailLite } from "../../types/Types"
import { Card, CardHeader, CardMedia } from "../card/Card"

type Props = { item: CocktailLite }

export default function CocktailCard({ item }: Props) {
  const { setSelectedId } = useCocktails()

  const altText = item.name || "Cocktail"
  const thumb = item.thumbnail ?? ""
  return (
    <Card
      variant="ghost"
      shadow="lg"
      padding="sm"
      interactive
      onClick={() => setSelectedId(item.id)}
      aria-label={`Details zu ${item.name}`}
      className="group overflow-hidden bg-transparent!">
      <CardMedia
        src={thumb}
        alt={altText}
        ratio="1/1"
        rounded
        className="transition-transform duration-200 group-hover:scale-[1.05]"
      />
      <CardHeader title={item.name} className="mt-4 text-text font-thin!" />
      {/* <CardContent>
        {" "}
        <CardActions align="between">
          <Button
            onClick={() => setSelectedId(item.id)}
            size="xs"
            variant="ghost"
            className="p-0! bg-transparent! cursor-pointer px-1! hover:border-b rounded-none! text-accent-80!"></Button>
        </CardActions>
      </CardContent> */}
    </Card>
  )
}
