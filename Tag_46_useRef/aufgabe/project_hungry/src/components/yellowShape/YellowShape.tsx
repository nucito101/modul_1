type YellowShapeProps = {
  variant?: "small" | "square"
  className?: string
}

export default function YellowShape({ variant = "small", className = "" }: YellowShapeProps) {
  return (
    <>
      <div
        className={
          variant === "small"
            ? `w-[60.91px] h-[5px] bg-bg-accent rounded-full ${className}`
            : `w-[250px] h-[250px] border-20 border-bg-accent bg-transparent rounded-[5px] ${className}`
        }></div>
    </>
  )
}
