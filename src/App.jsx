import './App.css'
import {Navbar} from './compos/Navbar'
import { Herosection } from './compos/Herosection'
import { About } from './compos/About'
import { Techstack } from './compos/Techstack'
import {Projects} from './compos/Projects'
import AnimatedList from './compos/AnimatedList'
import VerticalAccordion from './compos/VerticalAccordion'
import {Social} from './compos/Social'
import {Contact} from './compos/Contact'
import {Footer} from './compos/Footer'
function App() {

  return (
    <>
      <Navbar />
      <Herosection />
      <About />
      <VerticalAccordion />
      <Social />
      <Contact />
      <Footer />
    </>
  )
}

export default App
