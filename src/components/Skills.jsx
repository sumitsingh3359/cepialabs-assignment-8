/**
 * Skills.jsx - Skills Section Component
 * 
 * Displays technical skills organized into two categories:
 * 1. Programming Languages (Python, C, C++, Java, JavaScript, HTML/CSS)
 * 2. Tools & Technologies (VS Code, Docker, Git, GitHub)
 * 
 * Skills are rendered dynamically from arrays using the map() function.
 * Each skill is displayed as a badge with different styling per category.
 * 
 * Styling: Uses .skills-section, .skill-badge, .language, .tool from App.css
 */

/**
 * Skills component - renders programming languages and tools as skill badges
 * @returns {JSX.Element} Skills section with categorized skill badges
 */
function Skills() {
  // Array of programming languages the developer is proficient in
  const programmingLanguages = [
    { name: 'Python' },
    { name: 'C Programming' },
    { name: 'C++' },
    { name: 'Java' },
    { name: 'JavaScript' },
    { name: 'HTML/CSS' }
  ]
  
  // Array of tools and technologies the developer uses
  const tools = [
    { name: 'VS Code' },
    { name: 'Docker' },
    { name: 'Git' },
    { name: 'GitHub' }
  ]

  return (
    <section className="section skills-section">
      {/* Section heading */}
      <h2>Skills</h2>
      
      <div className="skills-grid">
        {/* Programming Languages Category */}
        <div className="skill-category">
          <h3>Programming Languages</h3>
          <div className="skills-container">
            {/* Dynamically render each programming language as a badge */}
            {programmingLanguages.map((skill, index) => (
              <div key={index} className="skill-badge language">
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Tools & Technologies Category */}
        <div className="skill-category">
          <h3>Tools & Technologies</h3>
          <div className="skills-container">
            {/* Dynamically render each tool as a badge */}
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
