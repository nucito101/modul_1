import React, { useRef, useState } from "react"

interface IUser {
  username: string
  email: string
  password: string
}

export default function SingUp() {
  const [user, setUser] = useState<IUser>({ username: "", email: "", password: "" })

  //  wir deklarieren uns erstmal eine Variable mit useRef
  // dann verwenden wir die Variable direkt in dem HTMLElement in dem Fall Input Element

  const usernameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const username = usernameRef.current?.value || ""
    const email = emailRef.current?.value || ""
    const password = passwordRef.current?.value || ""

    setUser({ ...user, username: username, email: email, password: password })
  }
  return (
    <>
      <div className="mx-auto max-w-md">
        <h3 className="text-2xl mb-6">Sign Up</h3>
        <form className="space-y-4 text-blue-800" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="w-full rounded-md border border-blue-300 bg-emerald-800 px-3 py-2 outline-none focus:ring-2 focus:yellow-400"
              ref={usernameRef}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="w-full rounded-md border border-blue-300 bg-emerald-800 px-3 py-2 outline-none focus:ring-2 focus:yellow-400"
              ref={emailRef}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="text"
              className="w-full rounded-md border border-blue-300 bg-emerald-800 px-3 py-2 outline-none focus:ring-2 focus:yellow-400"
              ref={passwordRef}
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-red-600 hover:bg-sky-700 text-white px-4 py-2 font-medium">
            Sign Up
          </button>
        </form>
      </div>
    </>
  )
}
