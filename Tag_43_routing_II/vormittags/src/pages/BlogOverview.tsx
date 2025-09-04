import { Link } from "react-router"
import blogData from "../blogData.json"

export default function BlogOverviewPage() {
  return (
    <div>
      <h1>Meine schoener Blog</h1>
      <p>Willkommen auf meiner schoenen Seite</p>
      <br />
      <ul>
        {blogData.map((entry) => (
          <li key={entry.id}>
            <Link to={`/blog/${entry.slug}`}>{entry.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
