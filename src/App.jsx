import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Model from "./components/Model"
import Navbar from "./components/Navbar"
import * as Sentry from '@sentry/react';
import Features from './components/Features'
import Chip from "./components/Chip";
import Footer from "./components/Footer";

function App() {

  return (
    <>
    
       <main className="bg-black">
           <Navbar/>
           <Hero/>
           <Highlights/>
           <Model/>
           <Features/>
           <Chip/>
           <Footer/>
       </main>
    </>
  )
}

export default Sentry.withProfiler(App)
