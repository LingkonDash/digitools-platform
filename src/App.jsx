import HeroSection from "./components/body/HeroSection"
import Navbar from "./components/navbar/Navbar"


function App() {

  return (
    <>

      <header className="shadow-sm bg-white z-10 fixed w-full">
        <Navbar />
      </header>

      <main className="pt-18 lg:pt-25 max-w-400 mx-auto px-6 lg:px-10">
        <HeroSection />
      </main>

    </>
  )
}

export default App
