import YellowShape from "../yellowShape/YellowShape"

type TextContentProps = {
  heading: string
  subheading?: string
  paragraph?: string
  variant?: "white" | "black"
}

export default function TextContent({ heading, subheading, paragraph, variant = "black" }: TextContentProps) {
  return (
    <>
      <div className="flex flex-col items-center text-center">
        <h3
          className={`text-4xl font-banny font-bold uppercase mb-4 ${
            variant === "white" ? "text-white" : "text-black"
          }`}>
          {heading}
        </h3>
        <YellowShape variant="small" />
        <h4
          className={`text-lg font-bold font-opensans my-5 ${variant === "white" ? "text-t-accent-2" : "text-black"}`}>
          {subheading}
        </h4>
        <p className={`text-sm font-opensans ${variant === "white" ? "text-t-accent-2" : "text-black"}`}>{paragraph}</p>
      </div>
    </>
  )
}
