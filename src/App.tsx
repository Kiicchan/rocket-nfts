import { MainSection } from "./components/MainSection"
import { Header } from "./components/Header"
import { Statistics } from "./components/Statistics"
import { Popular } from "./components/Popular"

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <MainSection />
        <Statistics />
        <Popular />
      </main>
    </div>
  )
}

export default App
