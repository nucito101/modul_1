import React, { useState } from "react"

// Aufgabe React-useState-Faq-Level-1_1
// export default function Faq() {
//   const [open, setOpen] = useState<boolean>(false)
//   return (
//     <>
//       <div>
//         <p>Why is React great ? </p>
//         <button onClick={() => setOpen(!open)}>{open ? "−" : "+"}</button>
//         <div>{open ? <p>Fast Learning Curve</p>}</div>
//       </div>
//     </>
//   )
// }

// Aufgabe React-useState-Faq-2 Level-1_2
export default function Faq() {
  const [showShort, setShowShort] = useState<boolean>(false)
  const [showLong, setShowLong] = useState<boolean>(false)

  return (
    <>
      <div>
        <p>Why is React great?</p>
        <button onClick={() => setShowShort(!showShort)}>{showShort ? "−" : "+"}</button>
      </div>

      <div>
        {showShort ? <p>Fast Learning Curve</p> : null}
        {showShort ? <button onClick={() => setShowLong(!showLong)}>{showLong ? "−" : "+"}</button> : null}
      </div>

      {showLong ? (
        <p>
          React is very a simple and lightweight library that only deals with the view layer. It is not a beast like
          other MV* frameworks such as Angular or Ember. Any Javascript developer can understand the basics and start
          developing an awesome web application after only a couple of days reading tutorial. As the React guide says
          ‘Thinking in React’ may be a little different than you used to since it brings a new approach to the table,
          but it will become much easier and natural as you gain experience with it.
        </p>
      ) : null}
    </>
  )
}
