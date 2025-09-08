import ImageCard from "../../components/imageCard/ImageCard"

export default function Gallery() {
  return (
    <>
      <section className=" w-[80%] m-auto mb-50">
        <div className="my-15">
          <h2 className="text-7xl flex flex-col font-light text-[#bdbdbd]">
            Photo <span className="font-semibold text-black">Gallery</span>
          </h2>
        </div>

        <div className="grid grid-cols-5 gap-5">
          <div className="overflow-hidden w-[210] h-[260px] bg-[#C4C4C4]"></div>
          <ImageCard src="/Grid_2.jpg" />
          <ImageCard src="/Grid_3.jpg" />
          <ImageCard src="/Grid_4.jpg" />
          <ImageCard src="/Grid_5.jpg" />
          <ImageCard src="/Grid_6.jpg" />
          <ImageCard src="/Grid_7.jpg" />
          <ImageCard src="/Grid_8.jpg" />
          <ImageCard src="/Grid_9.jpg" />
          <ImageCard src="/Grid_10.jpg" />
        </div>
      </section>
    </>
  )
}
