import HeroSection from "./components/body/HeroSection"
import SateSection from "./components/body/SateSection"
import Navbar from "./components/navbar/Navbar"


function App() {

  return (
    <>

      <header className="shadow-sm bg-white z-10 fixed w-full">
        <Navbar />
      </header>

      <main>

        <HeroSection />
        <SateSection />

      </main>

    </>
  )
}

export default App
