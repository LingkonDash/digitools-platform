import HeroSection from "./components/body/HeroSection"
import MainSection from "./components/body/mainSection/MainSection"
import SateSection from "./components/body/SateSection"
import StepsSection from "./components/body/StepsSection"
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

        <MainSection />

        <StepsSection />

      </main>

    </>
  )
}

export default App
