import React, { useState } from "react"

export default function Formular() {
  const [vorName, setVorname] = useState<string>("")
  const [nachName, setNachname] = useState<string>("")
  const [age, setAge] = useState<number>(0)
  const [happy, setHappy] = useState<boolean>(false)

  const [shoes, setShoes] = useState<string[]>(["Adidas", "Nike", "Puma", "Jordans"])

  interface User {
    username: string
    email: string
    age: number
  }

  const [userOne, setUserOne] = useState<User>({
    username: "",
    email: "",
    age: 0,
  })
  return (
    <>
      <form>
        <label htmlFor="vorname">Firstname</label>
        <input type="text" value={vorName} onChange={(event) => setVorname(event?.target.value)} />

        <label htmlFor="nachname">Lastname</label>
        <input type="text" value={nachName} onChange={(event) => setNachname(event?.target.value)} />

        <label htmlFor="age">Lastname</label>
        <input type="text" value={age} onChange={(event) => setAge(Number(event?.target.value))} />

        <label htmlFor="happy">Are you Happy ?</label>
        <input type="checkbox" checked={happy} onChange={(event) => setHappy(event.target.checked)} />
      </form>
      <div>Firstname: {vorName}</div>
      <div>Firstname: {nachName}</div>
      <div>age: {age}</div>
      <p>Are you Happy ? {happy ? "yay" : "meh"}</p>

      <div>
        <ul>
          {/* wenn man mit runden Klammern arbeitet, dann brauchen wir kein return, aber wenn wir mit geschweifte Klammern arbeiten, dann return ist ein muss */}
          {shoes.map((shoe: string, index: number) => {
            return <li key={index}>{shoe}</li>
          })}
        </ul>
      </div>
    </>
  )
}
