import React, { useState } from "react"

// Aufgabe React-useState-Input-Level-1_6
export default function Input() {
  const [vorname, setVorname] = useState<string>("")
  const [nachname, setNachname] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  return (
    <>
      <div>
        <div>
          <label>
            Vorname:
            <input
              className="border border-grey-200"
              type="text"
              value={vorname}
              onChange={(e) => setVorname(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Nachname:
            <input
              className="border border-grey-200"
              type="text"
              value={nachname}
              onChange={(e) => setNachname(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input
              className="border border-grey-200"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <h2>Ausgabe:</h2>
        <p>Vorname: {vorname}</p>
        <p>Nachname: {nachname}</p>
        <p>Email: {email}</p>
      </div>
    </>
  )
}
