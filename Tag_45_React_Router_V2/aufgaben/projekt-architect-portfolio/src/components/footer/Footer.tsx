import React from "react"
import Navbar from "../navbar/Navbar"

export default function Footer() {
  return (
    <>
      <footer className="bg-[#2c2c2c] text-white pt-15">
        <div className="w-[85%] m-auto flex gap-30 mb-20">
          <div>
            <img className="w-[70%]" src="/footer_logo.png" alt="" />
          </div>
          <div className="">
            <h5 className="mb-4 font-bold mr-10">Information</h5>
            <Navbar variant="footer" />
          </div>
          <div className="flex flex-col gap-5 mr-30">
            <h5 className="font-bold">Contacts</h5>
            <div className="flex gap-5">
              <img src="/icon_pin.svg" alt="" />
              <p className="flex flex-col text-sm">
                1234 Sample Street <span>Austin Texas 78704</span>
              </p>
            </div>
            <div className="flex gap-5 ">
              <img src="/icon_phone.svg" alt="" />
              <p className="text-sm">512.333.2222</p>
            </div>
            <div className="flex gap-5">
              <img src="/icon_mail.svg" alt="" />
              <p className="text-sm">sampleemail@gmail.com</p>
            </div>
          </div>
          <div>
            <h5 className="mb-5 font-bold">Social Media</h5>
            <div className="flex gap-6">
              <img src="/icon_facebook.svg" alt="" />
              <img src="/icon_twitter.svg" alt="" />
              <img src="/icon_linkedin.svg" alt="" />
              <img src="/icon_pininterest.svg" alt="" />
            </div>
          </div>
        </div>
        <div className="border-t-1 border-[#C8C8C880] py-5">
          <p className="text-xs text-center text-[#C8C8C880]">© 2021 All Rights Reserved</p>
        </div>
      </footer>
    </>
  )
}
