import './App.css'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import GitHub from './components/GitHub'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div className="portfolio">
      <Header />
      <Skills />
      <Projects />
      <GitHub />
      <About />
      <Footer />
    </div>
  )
}

export default App
