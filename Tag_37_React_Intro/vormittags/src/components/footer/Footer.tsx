import React from "react"

export default function footer() {
  return (
    <div>
      {/* kleiner Hinweis => die Inline-Style sollte noch in ein Obj geschrieben werden */}
      <footer className="footer_container" id="" style={{ color: "red" }}>
        <nav>
          <a href="#">Home</a>
          <a href="#">Contact</a>
        </nav>
      </footer>
    </div>
  )
}
