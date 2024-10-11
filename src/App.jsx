
import './App.css'
import './index.css'
import Header from './component/Header'
import Hero from './component/Hero'
import About from './component/About'
import Skills from './component/Skills'
import Work from './component/Work'
import Review from './component/Review'
import Contact from './component/Contact'
import Footer from './component/Footer'

function App() {

  return (
    <>
        <Header/>
        <main>
          <Hero/>
          <About/>
          <Skills/>
          <Work/>
          {/* <Review/> */}
          <Contact/>
        </main>
        <Footer/>
    </>
  )
}

export default App
