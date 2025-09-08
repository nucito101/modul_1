import React from "react"

export default function Contact() {
  return (
    <>
      <div>
        <h3 className="font-extralight text-7xl text-[#bdbdbd] my-10">Contact Us</h3>

        <div className="grid grid-cols-[1fr_2fr] gap-10 max-h-fit">
          <div className="h-fit h-full">
            <form className="flex flex-col gap-3">
              <input type="text" placeholder="Name" className="bg-[#F3F3F3] py-1 px-4" />

              <input type="number" placeholder="Phone Number" className="bg-[#F3F3F3] py-1 px-4" required />
              <input type="text" placeholder="E-mail" className="bg-[#F3F3F3] py-1 px-4" required />
              <input type="text" placeholder="Interested in" className="bg-[#F3F3F3] py-1 px-4" />
              <textarea rows={4} className="bg-[#F3F3F3] py-1 px-4" placeholder="Message"></textarea>
            </form>
          </div>

          <div className="bg-[url(/contact_img.jpg)] bg-center bg-cover"></div>
        </div>
        <button className="">Send</button>
      </div>
    </>
  )
}
