import AlcoholicGrid from "../../components/alcoholicGrid/AlcoholicGrid"
import CardSkeleton from "../../components/cardSkeleton/CardSkeleton"
import CategoryGrid from "../../components/categoryGrid/CategoryGrid"
import CocktailCard from "../../components/cocktailCard/CocktailCard"
import DrinkDetailDialog from "../../components/drinkDetailDialog/DrinkDetailDialog"
import { Section } from "../../components/section/Section"
import { useCocktails } from "../../context/CocktailsContext"

export default function Home() {
  const { query, setQuery, items, loading, error, selectedId, setSelectedId } = useCocktails()

  return (
    <>
      <div>
        <Section
          headline={<p className="text-5xl md:text-8xl">Discover Cocktails</p>}
          maxWidth="full"
          padding="large"
          subHeadline="Explore our collection of cocktail recipes"
          textAlignment="center">
          <div className="prose prose-sm sm:prose-base dark:prose-invert">
            {" "}
            <section className="mx-auto px-4 py-8">
              <div className="space-y-6 mb-6">
                <div>
                  <h2 className="mb-1 ml-1 font-semibold">Kategorien</h2>
                  <CategoryGrid />
                </div>
                <div>
                  <h2 className="mb-1 ml-1 font-semibold">Filter</h2>
                  <AlcoholicGrid />
                </div>
              </div>

              <div>
                <input
                  placeholder="Suche nach Name (z. B. Margarita)…"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="border py-2 px-2 w-sm md:w-xl border-border-80 mb-6 rounded-md focus-visible:outline-none "
                />
              </div>

              <div className="min-h-[200px]">
                {loading && (
                  <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <CardSkeleton key={i} />
                    ))}
                  </div>
                )}

                {error && <p className="text-red-600">{error}</p>}

                {!loading && !error && items.length > 0 && (
                  <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                    {items.map((d) => (
                      <CocktailCard key={d.id} item={d} />
                    ))}
                  </div>
                )}

                {!loading && !error && items.length === 0 && !query && (
                  <p className="text-accent-80/50">Bitte Suche starten oder Filter wählen.</p>
                )}
              </div>

              {/* --- Detail-Dialog --- */}
              <DrinkDetailDialog open={Boolean(selectedId)} onClose={() => setSelectedId(null)} />
            </section>
          </div>
        </Section>
      </div>
    </>
  )
}
