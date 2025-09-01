import Fetch from "../../components/fetch/Fetch"

export default function Home() {
  return (
    <>
      <h1 className="text-[#633636] text-7xl font-bold text-center my-7">Breaking News</h1>
      <main>
        <Fetch />
      </main>
    </>
  )
}
