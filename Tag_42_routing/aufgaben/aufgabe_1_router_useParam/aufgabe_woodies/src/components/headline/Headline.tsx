type HeadlineProps = {
  leftText: string
  rightText: string
}

export default function Headline({ leftText, rightText }: HeadlineProps) {
  return (
    <div className="flex items-center mt-15">
      <span className="flex items-center gap-2 text-4xl">
        <img src="/img-3/Vektor_logo.png" alt="" />
        {leftText}
      </span>
      <div className="flex-grow border-t-1 border-black mx-4"></div>
      <span className="text-7xl opacity-10 text-[#222222] uppercase font-extrabold">{rightText}</span>
    </div>
  )
}
