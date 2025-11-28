function Projects() {
  const projects = [
    {
      title: 'Python Voice Assistant — with Gemini',
      description: 'Voice assistant built in Python with the Gemini API',
      tags: ['Python', 'AI', 'Voice']
    }
  ]

  return (
    <section className="section projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
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
