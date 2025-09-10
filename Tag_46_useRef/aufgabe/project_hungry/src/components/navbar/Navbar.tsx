import Button from "../button/Button"

export default function Navbar() {
  return (
    <>
      <div className="bg-none w-[60%] m-auto text-white">
        <nav className="flex justify-between items-center uppercase">
          <Button to="/" children="home" className="text-xs" />
          <Button to="/team" children="team" className="text-xs" />
          <img className="h-[150px] translate-y-[50px]" src="/img/logo.svg" alt="" />
          <Button to="/menu" children="menu" className="text-xs" />
          <Button to="/booking" children="booking" className="text-xs" />
        </nav>
      </div>
    </>
  )
}
