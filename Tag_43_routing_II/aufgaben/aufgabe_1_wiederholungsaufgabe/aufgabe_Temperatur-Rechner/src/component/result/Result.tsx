type ResultProps = {
  celsius: number | ""
  fahrenheit: number | ""
  comfyGifSrc?: string
}

const BOIL_C = 100
const COMFY_MIN_C = 25
const COMFY_MAX_C = 30
const EPS = 0.5
const COMFY_GIF = "/Hello_how_are_you_I_am_under_the_water.gif"

export default function Result({ celsius, fahrenheit, comfyGifSrc }: ResultProps) {
  if (celsius === "" || fahrenheit === "") return null

  const isBoiling = Math.abs(celsius - BOIL_C) <= EPS || celsius > BOIL_C
  const isComfy = celsius >= COMFY_MIN_C && celsius <= COMFY_MAX_C

  return (
    <div className="mt-4 p-4 rounded-lg space-y-3">
      {isBoiling && <p className="font-semibold">The water is boiling</p>}

      {isComfy && (
        <div className="flex items-center gap-3">
          <img
            src={comfyGifSrc || COMFY_GIF}
            alt="Hello, how are you? I am under the water"
            className="h-full w-full rounded-md object-cover"
          />
        </div>
      )}
    </div>
  )
}
