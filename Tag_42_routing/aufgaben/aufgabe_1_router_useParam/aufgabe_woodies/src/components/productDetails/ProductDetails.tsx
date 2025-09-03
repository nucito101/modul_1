import Headline from "../headline/Headline"

type ProductDetailsProps = {
  name: string
  src: string
  text: string
}

export default function ProductDetails(props: ProductDetailsProps) {
  return (
    <>
      <div>
        <Headline leftText={props.name} rightText="Products" />
      </div>

      <div className="mt-10 flex flex-row items-center justify-center gap-20">
        <div>
          <img src={props.src} alt={props.name} />
        </div>
        <div className="w-[50%] text-2xl">
          <p>{props.text}</p>
        </div>
      </div>
    </>
  )
}
