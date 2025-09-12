import { Button } from "../button/Button"

export default function Header() {
  return (
    <>
      <header className="flex items-center justify-between px-5 py-4  ">
        <div className="flex items-center">
          <div className="bg-[url(/cocktail_no_bg.png)] bg-center bg-contain bg-no-repeat  w-[40px] h-[40px] -rotate-20"></div>
          <h2 className="uppercase font-bold pointer-events-none">drinks&chill</h2>
        </div>
        <Button
          color="neutral"
          onClick={() => {}}
          rounded="md"
          size="md"
          variant="ghost"
          className="p-0! bg-transparent! cursor-pointer! text-text! font-semibold">
          Menu
        </Button>
      </header>
    </>
  )
}
