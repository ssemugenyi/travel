import "./App.css"
import Filter from "./components/Filter/Filter"
import Header from "./components/Header/Header"
import HeroSection from "./components/HeroSection/HeroSection"

function App() {
    return (
        <div className="App">
            <header>
                <Header />
            </header>
            <main>
                <HeroSection />
                <Filter />
            </main>
        </div>
    )
}

export default App
