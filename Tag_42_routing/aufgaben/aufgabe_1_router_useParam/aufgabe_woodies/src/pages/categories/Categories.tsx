import Headline from "../../components/headline/Headline"
import ProductCard from "../../components/productCard/ProductCard"

export default function Categories() {
  return (
    <>
      <section className="mx-45 mb-40">
        <div>
          <Headline leftText="What we have" rightText="Products" />
        </div>

        <div className="mt-15 flex flex-row justify-between">
          <ProductCard name="Jenson" src="/img-3/Tisch.png" to="/jenson" />
          <ProductCard name="Deon" src="/img-3/Stuhl.png" to="/deon" />
          <ProductCard name="Krisha" src="/img-3/Schuesseln.png" to="/krisha" />
        </div>
      </section>
    </>
  )
}
