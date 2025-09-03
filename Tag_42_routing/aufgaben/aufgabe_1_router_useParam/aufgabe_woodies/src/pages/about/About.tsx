import Headline from "../../components/headline/Headline"

export default function About() {
  return (
    <>
      <section className="mx-45 mb-40">
        <div>
          <Headline leftText="Who we are" rightText="About Us" />
        </div>

        <div className="flex flex-row items-center justify-between mt-20">
          <div>
            <img src="/img-3/About.png" alt="" />
          </div>
          <div className="w-[45%]">
            <h2 className=" text-4xl font-bold leading-12 tracking-wide">
              WOODIES <span className="font-normal">is the</span> home of modern wooden furniture
            </h2>
            <p className="text-2xl mt-3">the answer to your need for furniture with shapes, sizes and colors. </p>
          </div>
        </div>
      </section>
    </>
  )
}
