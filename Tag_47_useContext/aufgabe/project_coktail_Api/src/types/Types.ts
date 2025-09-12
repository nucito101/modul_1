export type CocktailLite = {
  id: string
  name: string
  thumbnail: string | null
  category?: string | null
  alcoholic?: string | null
}

export type Ingredient = { ingredient: string; measure: string | null }

export type CocktailDetail = CocktailLite & {
  glass?: string | null
  instructions?: string | null
  ingredients: Ingredient[]
}
