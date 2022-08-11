import { MainSection } from "./components/MainSection"
import { Header } from "./components/Header"
import { Statistics } from "./components/Statistics"

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <MainSection />
        <Statistics />
      </main>
    </div>
  )
}

export default App
