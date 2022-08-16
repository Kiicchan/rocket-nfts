import { MainSection } from "./components/MainSection"
import { Header } from "./components/Header"
import { Statistics } from "./components/Statistics"
import { Popular } from "./components/Popular"
import { Artists } from "./components/Artists"
import { Footer } from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <MainSection />
        <Statistics />
        <Popular />
        <Artists />
      </main>
      <Footer />
    </div>
  )
}

export default App
