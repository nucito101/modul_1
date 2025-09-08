type ImageCardProps = {
  src: string
  alt?: string
}

export default function ImageCard({ src, alt = "" }: ImageCardProps) {
  return (
    <div className="w-[210px] h-[260px] overflow-hidden">
      <img src={src} alt={alt} className="h-full w-full aspect-[21/26] object-cover" />
    </div>
  )
}
