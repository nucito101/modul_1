import React from "react"
import Liste from "../../components/liste/Liste"
import Header from "../../components/header/Header"

// simple React Snippets => sfc
// e57 + React/Redux => rfc

export default function Home() {
  // selbstgeschriebene Komponente wie hier z.b Liste werden großgeschrieben um sie von eingebauten HTML Elemente unterscheidbar zu machen
  return (
    <>
      <Header />
      <main>
        <h2>Ich bin in der Home Seite </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quidem aspernatur iusto sint perferendis
          atque aut eaque delectus quam nostrum, tempore quis fuga ullam adipisci quisquam eum officia commodi dolores
          impedit corrupti hic. Temporibus voluptatibus, reiciendis sint tenetur ullam quos dignissimos vel, inventore
          dicta blanditiis iusto cupiditate laborum explicabo aperiam.
        </p>
        <Liste />

        <ol>
          <li>ich bin das erste Element</li>
          <li>ich bin das zweite Element</li>
          <li>ich bin das dritte Element</li>
        </ol>
      </main>
    </>
  )
}
