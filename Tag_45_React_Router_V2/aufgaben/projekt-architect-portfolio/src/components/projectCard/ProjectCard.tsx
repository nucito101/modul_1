import Btn from "../btn/Btn"

type ProjectCardProps = {
  src: string
  title: string
  ctaLabel?: string
  ctaHref?: string
  compact?: boolean
}

export default function ProjectCard({ src, title, ctaLabel = "VIEW MORE", ctaHref = "#", compact }: ProjectCardProps) {
  return (
    <div className="relative group overflow-hidden bg-gray-100 cursor-pointer">
      <img
        src={src}
        alt={title}
        className={`w-full object-cover object-center ${compact ? " aspect-[18/17]" : "aspect-[38/17]"}`}
      />

      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex h-full w-full flex-col items-start justify-center px-6  text-white ml-5">
          <h3 className="text-6xl w-[50%]">{title}</h3>
          <Btn linkref={ctaHref} text={ctaLabel} variant="textWhite" />
        </div>
      </div>
    </div>
  )
}
