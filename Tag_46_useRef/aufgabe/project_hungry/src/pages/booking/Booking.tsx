import { useMemo, useRef, useState } from "react"
import TextContent from "../../components/textContent/TextContent"
import YellowShape from "../../components/yellowShape/YellowShape"
import Button from "../../components/button/Button"
import { ScrollTo } from "../../utility/scrollTo/ScrollTo"

export default function Booking() {
  ScrollTo("booking")
  const [submit, setSubmit] = useState(false)
  const [isWeekend, setIsWeekend] = useState<boolean | null>(null)

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

  function parseDateFromYMDString(ymdString: string): Date | null {
    if (!ymdString) return null
    const [year, month, day] = ymdString.split("-").map(Number)
    if (!year || !month || !day) return null
    return new Date(year, month - 1, day)
  }

  function isWeekendDay(ymdString: string | null): boolean | null {
    const date = ymdString ? parseDateFromYMDString(ymdString) : null
    if (!date) return null
    const weekday = date.getDay()
    return weekday === 0 || weekday === 6
  }

  function createTimeSlots(options: { startTime: string; endTime: string; stepMinutes?: number }): string[] {
    const step = options.stepMinutes ?? 30
    const [startHour, startMinute] = options.startTime.split(":").map(Number)
    const [endHour, endMinute] = options.endTime.split(":").map(Number)

    const startInMinutes = startHour * 60 + startMinute
    let endInMinutes = endHour * 60 + endMinute

    const crossesMidnight = endInMinutes <= startInMinutes
    if (crossesMidnight) endInMinutes += 24 * 60

    const slots: string[] = []
    for (let minutes = startInMinutes; minutes <= endInMinutes; minutes += step) {
      const minutesOfDay = minutes % (24 * 60)
      const hour = String(Math.floor(minutesOfDay / 60)).padStart(2, "0")
      const minute = String(minutesOfDay % 60).padStart(2, "0")
      slots.push(`${hour}:${minute}`)
    }
    return slots
  }

  const availableTimeSlots = useMemo(() => {
    if (isWeekend === null) {
      return []
    }
    return isWeekend
      ? createTimeSlots({ startTime: "20:00", endTime: "02:30", stepMinutes: 30 }) // Wochenende
      : createTimeSlots({ startTime: "20:00", endTime: "21:30", stepMinutes: 30 }) // Wochentage
  }, [isWeekend])

  const inputBase = "h-12 w-full rounded-md bg-[#E8E8E8] px-4 text-gray-700 placeholder:text-gray-500 outline-none"

  return (
    <>
      <div id="booking" className="">
        <div className="grid grid-cols-2 gap-10 items-center  my-30 px-10 w-[80%] m-auto">
          <div className="flex items-center flex-col mr-10">
            <TextContent heading="Book a Table" />

            <div className="section w-full ">
              {!submit ? (
                <form onSubmit={handleSubmit} className="grid w-full gap-3">
                  <div className="grid grid-cols-2 gap-2">
                    <input type="text" placeholder="Name" ref={inputRefs.name} required className={inputBase} />
                    <input type="email" placeholder="Email" ref={inputRefs.email} className={inputBase} />
                    <input type="text" placeholder="Phone" ref={inputRefs.phone} required className={inputBase} />

                    <div className="relative">
                      <select defaultValue="2" ref={inputRefs.people} className={`${inputBase} appearance-none pr-10`}>
                        {personQty.map((person) => (
                          <option key={person} value={person}>
                            {person} People
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="relative">
                      <input
                        type="date"
                        ref={inputRefs.date}
                        onChange={(e) => setIsWeekend(isWeekendDay(e.target.value))}
                        className={`${inputBase} w-full pt-4 pb-1 uppercase`}
                        placeholder=" "
                      />
                      <label
                        htmlFor="date"
                        className={`absolute left-3 top-1 text-gray-500 text-sm pl-1 transition-all text-xs`}>
                        Date (dd/mm/yyyy)
                      </label>
                    </div>

                    <div className="relative">
                      <select
                        key={isWeekend === null ? "none" : isWeekend ? "weekend" : "weekday"}
                        ref={inputRefs.time}
                        defaultValue={availableTimeSlots[0] ?? ""}
                        disabled={isWeekend === null || availableTimeSlots.length === 0}
                        className={`${inputBase} appearance-none pr-10 disabled:opacity-50`}>
                        {isWeekend === null ? (
                          <option value="">Please pick a date first</option>
                        ) : availableTimeSlots.length === 0 ? (
                          <option value="">No times available</option>
                        ) : (
                          availableTimeSlots.map((slot) => (
                            <option key={slot} value={slot}>
                              {slot}
                            </option>
                          ))
                        )}
                      </select>
                    </div>
                  </div>
                  <Button
                    type="submit"
                    variant="filled"
                    fullWidth
                    children="Book now"
                    className="bg-bg-accent rounded-md uppercase text-xs py-7"
                  />
                </form>
              ) : (
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Thanks for dining with us.</h3>
                </div>
              )}
            </div>
          </div>
          <div className="">
            <div className="relative sepia-20 saturate-150 bg-[url(/img/booking.jpg)] w-[475px] bg-center bg-cover aspect-square rounded-[5px] shadow-2xl">
              <div className="absolute top-30 left-80">
                <YellowShape variant="square" />
              </div>
            </div>
          </div>
        </div>
        <div className="pb-10">
          <p className="mt-4 text-xs text-center text-[#333333]/50 leading-relaxed">
            <span>
              Mon – Fri: <span className="font-semibold ">8PM – 10PM, </span>
            </span>
            <span>
              Sat – Sun: <span className="font-semibold ">8PM – 3AM, </span>
            </span>
            <span>
              Phone: <span className="font-semibold">+40 729 131 637 / +40 726 458 782</span>
            </span>
          </p>
        </div>
      </div>
    </>
  )
}
