import React from "react"

export default function Footer() {
  return (
    <>
      <footer className="flex bg-[#f1f1f1] relative w-full">
        <div className="border-t-1 border-[#c4c4c4] my-14 ml-30 w-[80%] h-full z-10 pt-4">
          <img src="/img-3/Logo.png" alt="" className="mt-3" />
          <ul className="flex flex-col gap-2 mt-5 text-[#8D8D8D] text-sm">
            <li>(012) 8967453</li>
            <li>woodies@gmail.com</li>
            <li>Jakarta, Indonesia</li>
          </ul>
        </div>

        <div className="-ml-30 z-0">
          <img src="/img-3/Footer.png" alt="" className="object-contain" />
        </div>

        <div className="absolute bottom-4 w-full text-center">
          <p className="text-gray-400 text-xs py-4">© 2020 WOODIES</p>
        </div>
      </footer>
    </>
  )
}
