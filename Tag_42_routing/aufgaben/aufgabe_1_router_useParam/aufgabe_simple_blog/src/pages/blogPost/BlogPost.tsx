import React from "react"
import { blogData } from "../../data/Date"
import { useParams } from "react-router"
import Button from "../../components/button/Button"

export default function BlogPost() {
  const { id } = useParams()
  const post = blogData.find((p) => p.id === Number(id))
  return (
    <>
      <div>
        <img src={post?.img_url} alt={post?.title} />
        <header>
          <h2>{post?.title}</h2>
          <p>{post?.published_date}</p>
        </header>
        <p>{post?.description}</p>
        <p>by {post?.author}</p>
        <Button to="/blog" text="zurück" />
      </div>
    </>
  )
}
