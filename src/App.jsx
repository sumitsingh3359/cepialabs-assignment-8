/**
 * App.jsx - Main Portfolio Application Component
 * 
 * This is the root component that orchestrates all sections of the portfolio.
 * It imports and renders all child components in a structured order:
 * Header → Skills → Projects → GitHub → About → Footer → BackToTop
 * 
 * The component uses the global App.css for styling and layout.
 */

import './App.css'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import GitHub from './components/GitHub'
import Projects from './components/Projects'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

/**
 * Main App component - renders the complete portfolio structure
 * @returns {JSX.Element} The main portfolio container with all sections
 */
function App() {
  return (
    <div className="portfolio">
      {/* Hero section with name and tagline */}
      <Header />
      
      {/* Skills section with programming languages and tools */}
      <Skills />
      
      {/* Projects showcase section */}
      <Projects />
      
      {/* GitHub stats and activity section */}
      <GitHub />
      
      {/* About me section with social links */}
      <About />
      
      {/* Footer with copyright information */}
      <Footer />
      
      {/* Back to top button - appears when scrolled down */}
      <BackToTop />
    </div>
  )
}

export default App
