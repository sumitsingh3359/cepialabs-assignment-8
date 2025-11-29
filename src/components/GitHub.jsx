/**
 * GitHub.jsx - GitHub Activity Section Component
 * 
 * Displays GitHub profile statistics and activity using embedded images:
 * - GitHub user stats (commits, repos, etc.)
 * - GitHub contribution streak
 * 
 * Note: Replace 'USERNAME' in image URLs with actual GitHub username
 * 
 * Styling: Uses .github-section, .github-stats from App.css
 */

/**
 * GitHub component - renders GitHub stats and contribution streak
 * @returns {JSX.Element} GitHub section with stats cards
 */
function GitHub() {
  return (
    <section className="section github-section">
      {/* Section heading */}
      <h2>GitHub Activity</h2>
      
      <div className="github-content">
        {/* Link to GitHub profile */}
        <p className="github-note">
          View my GitHub contributions at&nbsp;
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com
          </a>
        </p>
        
        {/* GitHub user stats card - shows commits, repos, followers, etc. */}
        <img
          src="https://github-readme-stats.vercel.app/api?username=USERNAME&show_icons=true&theme=radical&hide_border=true"
          alt="GitHub Stats"
          className="github-stats"
        />
        
        {/* GitHub contribution streak card - shows current streak */}
        <img
          src="https://github-readme-streak-stats.herokuapp.com/?user=USERNAME&theme=radical&hide_border=true"
          alt="GitHub Streak"
          className="github-stats"
        />
      </div>
    </section>
  );
}

export default GitHub
