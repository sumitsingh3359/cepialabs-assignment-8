function GitHub() {
  return (
    <section className="section github-section">
      <h2>GitHub Activity</h2>
      <div className="github-content">
        <p className="github-note">
          View my GitHub contributions at &
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer"> 
            github.com
          </a>
        </p>
        <img 
          src="https://github-readme-stats.vercel.app/api?username=USERNAME&show_icons=true&theme=radical&hide_border=true" 
          alt="GitHub Stats" 
          className="github-stats"
        />
        <img 
          src="https://github-readme-streak-stats.herokuapp.com/?user=USERNAME&theme=radical&hide_border=true" 
          alt="GitHub Streak" 
          className="github-stats"
        />
      </div>
    </section>
  )
}

export default GitHub
