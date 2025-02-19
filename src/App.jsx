import Hero from "./components/Hero"
import Phrase from "./components/Phrase"
import CountDown from "./components/CountDown"
import Ceremony from "./components/Ceremony"
import DressCode from "./components/DressCode"
import Inolvidable from "./components/Inolvidable"
import Venis from "./components/Venis"
import Gracias from "./components/Gracias"
import Regalo from "./components/Regalo"
import Footer from "./components/Footer"
import Music from "./components/Music"

import foto4 from "/foto4.jpeg"
import foto5 from "/foto5.jpeg"
import Canciones from "./components/Canciones"


function App() {


  return (
    <div className="flex flex-col items-center w-full lg:w-[700px] m-auto">
      <Hero />
      <Music />
      <Phrase />
      <CountDown />
      <Ceremony />
      <img src={foto4} alt="foto4" className="w-full mt-10" />
      <DressCode />
      <img src={foto5} alt="foto5" className="w-full mt-10" />
      <Canciones />
      <Inolvidable />
      <Venis />
      <Regalo />
      <Gracias />
      <Footer />
    </div>
  )
}

export default App
