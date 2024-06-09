import './App.css'
import {Navbar} from './compos/Navbar'
import { Herosection } from './compos/Herosection'
import { About } from './compos/About'
import { Techstack } from './compos/Techstack'
import htmlIcon from '/html.svg'
import vite from '/vite.svg'


function App() {

  return (
    <>
    <Navbar />
    <Herosection />
    <About />
    <Techstack />
    </>
  )
}

export default App
