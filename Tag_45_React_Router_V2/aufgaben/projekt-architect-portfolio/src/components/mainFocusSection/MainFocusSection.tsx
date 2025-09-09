import React from "react"
import SectionContainer from "../sectionContainer/SectionContainer"

export default function MainFocusSection() {
  return (
    <>
      <SectionContainer text="Main Focus/Mission Statement" />
      <div className="grid grid-cols-2 gap-30 -mt-10">
        <div className="flex items-center gap-6 w-[80%]">
          <h4 className="font-black text-[12rem] text-[#f2f2f2]">1</h4>
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat.
          </p>
        </div>
        <div className="flex items-center gap-6">
          <h4 className="font-black text-[12rem] text-[#f2f2f2]">2</h4>
          <p className="text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat, magna
            mauris porttitor tortor, a auctor est felis ut nisl.
          </p>
        </div>
      </div>
    </>
  )
}
