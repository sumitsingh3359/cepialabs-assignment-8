/**
 * Projects.jsx - Projects Showcase Component
 * 
 * Displays a list of completed projects with details including:
 * - Project title
 * - Project description
 * - Technology tags used in the project
 * 
 * Projects are rendered dynamically from an array using the map() function.
 * Each project is displayed as a card with styled tags showing technologies used.
 * 
 * Styling: Uses .projects-section, .project-card, .tag from App.css
 */

/**
 * Projects component - renders project cards with descriptions and tech tags
 * @returns {JSX.Element} Projects section with project cards
 */
function Projects() {
  // Array of projects to display
  const projects = [
    {
      title: 'Python Voice Assistant — with Gemini',
      description: 'Voice assistant built in Python with the Gemini API',
      tags: ['Python', 'AI', 'Voice']
    }
  ]

  return (
    <section className="section projects-section">
      {/* Section heading */}
      <h2>Projects</h2>
      
      <div className="projects-container">
        {/* Dynamically render each project as a card */}
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            {/* Project title */}
            <h3>{project.title}</h3>
            
            {/* Project description */}
            <p>{project.description}</p>
            
            {/* Technology tags for this project */}
            <div className="project-tags">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
