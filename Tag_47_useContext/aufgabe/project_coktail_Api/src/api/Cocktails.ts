import axios from "axios"
import type { CocktailLite } from "../types/Types"

const api = axios.create({
  baseURL: "https://www.thecocktaildb.com/api/json/v1/1",
})

const mapLite = (d: any): CocktailLite => ({
  id: d.idDrink,
  name: d.strDrink,
  thumbnail: d.strDrinkThumb,
  category: d.strCategory,
  alcoholic: d.strAlcoholic,
})

export async function listCategories(): Promise<string[]> {
  const { data } = await api.get("/list.php?c=list")
  return (data.drinks ?? []).map((x: any) => x.strCategory)
}

export async function listAlcoholicOptions(): Promise<string[]> {
  const { data } = await api.get("/list.php?a=list")
  return (data.drinks ?? []).map((x: any) => x.strAlcoholic)
}

export async function searchCocktails(q: string) {
  const { data } = await api.get("/search.php", { params: { s: q } })
  return (data.drinks ?? []).map(mapLite)
}

export async function filterByCategory(c: string) {
  const { data } = await api.get("/filter.php", { params: { c } })
  return (data.drinks ?? []).map(mapLite)
}

export async function filterByAlcoholic(a: string) {
  const { data } = await api.get("/filter.php", { params: { a } })
  return (data.drinks ?? []).map(mapLite)
}

export async function getCocktailById(id: string) {
  const { data } = await api.get("/lookup.php", { params: { i: id } })
  const d = data.drinks?.[0]
  if (!d) return null

  const ingredients = Array.from({ length: 15 }, (_, i) => i + 1)
    .map((i) => ({
      ingredient: d[`strIngredient${i}`],
      measure: d[`strMeasure${i}`] ?? null,
    }))
    .filter((x) => x.ingredient)

  return {
    ...mapLite(d),
    glass: d.strGlass,
    instructions: d.strInstructions,
    ingredients,
  }
}
