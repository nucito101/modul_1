import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useState } from "react"

interface IPost {
  id: number
  title: string
  body: string
}

interface PostResponse {
  posts: IPost[]
  total: number
  skip: number
  limit: number
}

export default function PostList() {
  const [page, setPage] = useState<number>(1)

  const fetchPosts = async (page: number): Promise<PostResponse> => {
    const limit = 5
    const skip = (page - 1) * limit

    const resp = await axios.get(`https://dummyjson.com/posts?limit=${limit}&skip=${skip}`)

    return resp.data
  }

  const { data, isLoading, error } = useQuery<PostResponse>({
    // Das ist die Speicherplatz, der ein Name als key und value beinhaltet
    queryKey: ["posts", page],
    // V1.
    // queryFn: async () => {
    //   const resp = await axios.get("https://dummyjson.com/posts");
    //   return resp.data;
    // },
    queryFn: () => fetchPosts(page),
    // max 3 versuchen
    retry: 3,
    // 2 Sekunden Pause zwischen Versuchen
    retryDelay: 2000,
  })

  if (isLoading) {
    return <p className="text-red-600">Lädt.....</p>
  }

  if (error) {
    return <p className="text-red-700">Fehler: {error.message}</p>
  }

  return (
    <div>
      <h2>Seite {page}</h2>
      <ul className="divide-y divide-red-800 rounded-md border border-yellow-600 mb-6">
        {data?.posts.map((post: IPost) => {
          return (
            <li className="p-4 hover:bg-green-300 transition-colors" key={post.id}>
              {post.title}
            </li>
          )
        })}
      </ul>

      {page > 1 && <button onClick={() => setPage(page - 1)}>Zurück</button>}
      <button
        onClick={() => setPage(page + 1)}
        className="rounded-md border border-slate-300 dark:border-slate-700 px-4 py-2 disabled:opacity-50 hover:bg-slate-100 dark:hover:bg-slate-800">
        Weiter
      </button>
    </div>
  )
}
