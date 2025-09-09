import Btn from "../btn/Btn" // falls nötig

export default function AboutSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-10 md:grid-cols-[280px_minmax(0,1fr)_minmax(0,1fr)] items-start">
        <div className="grid gap-6">
          <div className="bg-gray-100">
            <img src="/about_1.jpg" alt="" className="aspect-square w-full object-cover" />
          </div>
          <div className="bg-gray-100">
            <img src="/about_2.jpg" alt="" className="aspect-auto w-full object-cover" />
          </div>
        </div>

        <div className="w-full">
          <div>
            <img
              src="/about_3.jpg"
              alt="Architecture"
              className="aspect-auto w-[90%] object-cover translate-y-[50px]"
            />
          </div>
        </div>

        <div className="max-w-prose">
          <h2 className="text-6xl font-extralight text-gray-300">About</h2>
          <p className="mt-4 text-sm leading-6 text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>

          <div className="mt-8">
            <Btn text="Read More" linkref="/about" variant="outline" />
          </div>
        </div>
      </div>
    </section>
  )
}
