function Skills() {
  const programmingLanguages = [
    { name: 'Python' },
    { name: 'C Programming' },
    { name: 'C++' },
    { name: 'Java' },
    { name: 'JavaScript' },
    { name: 'HTML/CSS' }
  ]
  const tools = [
    { name: 'VS Code' },
    { name: 'Docker' },
    { name: 'Git' },
    { name: 'GitHub' }
  ]

  return (
    <section className="section skills-section">
      <h2>Skills</h2>
      <div className="skills-grid">
        <div className="skill-category">
          <h3>Programming Languages</h3>
          <div className="skills-container">
            {programmingLanguages.map((skill, index) => (
              <div key={index} className="skill-badge language">
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="skill-category">
          <h3>Tools & Technologies</h3>
          <div className="skills-container">
            {tools.map((skill, index) => (
              <div key={index} className="skill-badge tool">
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
