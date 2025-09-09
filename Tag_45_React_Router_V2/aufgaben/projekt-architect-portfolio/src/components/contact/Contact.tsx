import React from "react"
import Btn from "../btn/Btn"
import Input from "../input/Input"
import SectionContainer from "../sectionContainer/SectionContainer"

export default function Contact() {
  return (
    <>
      <div>
        <SectionContainer text="Contact Us" />
        <div className="grid grid-cols-[1fr_2fr] gap-10 max-h-fit">
          <div>
            <form className="flex flex-col gap-3">
              <Input type="text" label="Name" />
              <Input type="number" label="Phone Number" required />
              <Input type="email" label="E-Mail" required />
              <Input type="text" label="Interested in" />
              <Input type="textarea" label="Message" required />
            </form>
          </div>

          <div className="bg-[url(/contact_img.jpg)] bg-center bg-cover"></div>
        </div>
        <div className="my-15">
          <Btn text="Send Email" variant="filled" linkref="" />
        </div>
      </div>
    </>
  )
}
