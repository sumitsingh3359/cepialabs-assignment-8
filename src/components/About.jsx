/**
 * About.jsx - About Me Section Component
 * 
 * Displays personal information about the developer along with social media links.
 * This section helps visitors learn more about the developer and connect via social platforms.
 * 
 * Styling: Uses .about-section, .about-content, .social-links from App.css
 */

/**
 * About component - renders the about me section with personal bio and social links
 * @returns {JSX.Element} About section with description and social media links
 */
function About() {
  return (
    <section className="section about-section">
      {/* Section heading */}
      <h2>About Me</h2>
      
      <div className="about-content">
        {/* Personal description and background */}
        <p>
          I'm a passionate developer with expertise in building intelligent
          applications and tools. I love working with modern technologies and
          continuously learning new skills. My focus is on creating efficient,
          clean, and scalable solutions.
        </p>
        
        {/* Social media links container */}
        <div className="social-links">
          {/* GitHub profile link */}
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            GitHub
          </a>
          
          {/* LinkedIn profile link */}
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

export default About
