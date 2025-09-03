import { Link } from "react-router"
import { blogData } from "../../data/Date"
import Button from "../../components/button/Button"

export default function Blog() {
  return (
    <section>
      {blogData.map((post) => (
        <article key={post.id}>
          <img className="w-[200px]" src={post.img_url} alt={post.title} />
          <div>
            <h3>{post.title}</h3>
            <p>{post.published_date}</p>
            <p>{post.description}</p>
            <p>by {post.author}</p>
            <Button to={`/blog/${post.id}`} text="Read more" />
          </div>
        </article>
      ))}
    </section>
  )
}
