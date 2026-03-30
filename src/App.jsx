import { useEffect, useState } from "react"
import Footer from "./components/body/Footer"
import HeroSection from "./components/body/HeroSection"
import MainSection from "./components/body/mainSection/MainSection"
import PricingSection from "./components/body/PricingSection"
import SateSection from "./components/body/SateSection"
import StepsSection from "./components/body/StepsSection"
import WorkflowSection from "./components/body/WorkflowSection"
import Navbar from "./components/navbar/Navbar"


function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/products.json')
      .then(res => res.json())
      .then(data => {

        setProducts([...data])

      })
  }, [])

  return (
    <>

      <header className="shadow-sm bg-white z-10 fixed w-full">
        <Navbar />
      </header>

      <main>
        <HeroSection />
        <SateSection />

        <MainSection products={products}/>

        <StepsSection />
        <PricingSection />
        <WorkflowSection />
      </main>

      <footer>
        <Footer />
      </footer>

    </>
  )
}

export default App
