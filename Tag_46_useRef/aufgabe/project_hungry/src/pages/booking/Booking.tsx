import { useRef, useState } from "react"

export default function Booking() {
  const [submit, setSubmit] = useState(false)

  const inputRefs = {
    name: useRef<HTMLInputElement>(null),
    email: useRef<HTMLInputElement>(null),
    phone: useRef<HTMLInputElement>(null),
    people: useRef<HTMLSelectElement>(null),
    date: useRef<HTMLInputElement>(null),
    time: useRef<HTMLSelectElement>(null),
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const bookingData = {
      name: inputRefs.name.current?.value || "",
      email: inputRefs.email.current?.value || "",
      phone: inputRefs.phone.current?.value || "",
      people: inputRefs.people.current?.value || "1",
      date: inputRefs.date.current?.value || "",
      time: inputRefs.time.current?.value || "",
    }

    console.log("Booking Data:", bookingData)
    setSubmit(true)
  }

  const personQty = ["1", "2", "3", "4", "5", "6", "7", "8"]

  const times: string[] = []
  for (let hour = 17; hour <= 21; hour++) {
    for (let min of [0, 30]) {
      if (hour === 21 && min > 30) continue
      times.push(`${String(hour).padStart(2, "0")}:${String(min).padStart(2, "0")}`)
    }
  }

  return (
    <>
      <div className="w-[50%] m-auto">
        <form onSubmit={handleSubmit} className="grid w-full gap-3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input placeholder="Name" ref={inputRefs.name} />
            <input placeholder="Email" type="email" ref={inputRefs.email} />
            <input placeholder="Phone" ref={inputRefs.phone} />
            <select defaultValue="1" ref={inputRefs.people}>
              {personQty.map((person, index) => (
                <option key={index} value={person}>
                  {person} People
                </option>
              ))}
            </select>
            <input type="date" ref={inputRefs.date} />
            <select defaultValue="17:00" ref={inputRefs.time}>
              {times.map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
          <button type="submit">Book now</button>
        </form>
      </div>
    </>
  )
}
