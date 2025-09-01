import type { Article } from "../../types/news"

interface ArticleProps {
  article: Article
}

export default function ArticleCard({ article }: ArticleProps) {
  return (
    <>
      <div className="rounded-xl min-w-100 shadow-md overflow-hidden flex flex-col">
        <img
          className="min-w-100 max-h-50 object-cover"
          src={article.urlToImage ? article.urlToImage : "https://placehold.co/600x400?text=No+Image"}
          alt={article.title}
        />
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
          <p className="text-sm text-gray-500 mb-2">
            {article.publishedAt ? new Date(article.publishedAt).toLocaleDateString() : ""}
          </p>
          <p className="text-sm text-gray-700 flex-grow line-clamp-3">{article.description}</p>
          <div className="mt-4">
            <a
              className="inline-block text-sm py-2 px-3 rounded-full hover:bg-blue-100 transition"
              href={article.url}
              target="_blank">
              Zur Quelle
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
