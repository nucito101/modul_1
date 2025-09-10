import { useMemo, useState } from "react"
import TextContent from "../../components/textContent/TextContent"
import hungryData from "../../data/Data"
import MenuCard from "../../components/menuCard/MenuCard"
import { ScrollTo } from "../../utility/scrollTo/ScrollTo"

const LABELS: Record<string, string> = {
  pizza: "PIZZA",
  pasta: "PASTA",
  dessert: "DESSERT",
  getränke: "DRINKS",
}

export default function Menu() {
  ScrollTo("menu")
  const categories = useMemo(
    () =>
      ["pizza", "pasta", "dessert", "getränke"].filter((categories) =>
        hungryData.some((item) => item.category === categories)
      ),
    []
  )

  const [active, setActive] = useState<string>(categories[0])

  const items = useMemo(() => hungryData.filter((item) => item.category === active), [active])

  return (
    <>
      <div id="menu" className="px-30 my-20">
        <div className="px-70">
          <TextContent
            heading="delicious menu"
            subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna."
          />
        </div>

        <div>
          <nav className="mt-8 flex justify-center gap-8">
            {categories.map((category) => {
              const isActive = active === category
              return (
                <button
                  key={category}
                  onClick={() => setActive(category)}
                  className={`relative pb-2 text-xs tracking-[0.2em] text-gray-600 hover:text-black`}>
                  {LABELS[category] ?? category.toUpperCase()}
                  <span
                    className={`absolute inset-x-0 -bottom-[2px] mx-auto h-[3px] w-8 rounded bg-bg-accent transition-opacity ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </button>
              )
            })}
          </nav>
          <section className="mt-10 grid grid-cols-3 gap-x-12 gap-y-2">
            {items.map((item) => (
              <MenuCard key={item.name} item={item} />
            ))}
          </section>
        </div>
      </div>
    </>
  )
}
