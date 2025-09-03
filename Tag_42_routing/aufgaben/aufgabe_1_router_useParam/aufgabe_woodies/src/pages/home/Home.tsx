import Button from "../../components/button/Button"

export default function Home() {
  return (
    <section className="relative min-h-screen">
      <div className="absolute inset-y-0 right-0 w-[38%] h-[120%] -mt-30 bg-[#f6aeb7]" />

      <div className="mx-auto grid max-w-7xl grid-cols-2 items-center gap-10 px-20 py-10">
        <div className="relative z-10">
          <p className="text-xl md:text-2xl text-neutral-500 w-[75%] tracking-wide font-light">
            Are you looking for <span className="font-bold"> woodden furniture</span> for your place?
          </p>

          <h1 className="mt-6 mb-2 text-6xl font-bold leading-23 tracking-wider w-[80%]">This is the Right Place</h1>

          <Button text="Explore Categories" />
        </div>
        <div className="relative h-[577px]">
          <img
            src="/img-3/Home.png"
            alt=""
            className="absolute right-[10%] top-[8%] z-20 h-[110%] max-h-none object-cover drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  )
}
