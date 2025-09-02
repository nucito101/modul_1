import "./App.css"
import Game from "./pages/game/game"

function App() {
  return (
    <>
      <h1 className="text-center text-3xl font-bold mt-8 mb-3 tracking-widest">Rock Paper Scissors</h1>
      <p className="text-center text-xl font-thin mb-10">Chose your weapon</p>
      <main className="flex item-center justify-center">
        <Game />
      </main>
    </>
  )
}

export default App
