/**
 * Header.jsx - Hero Section Component
 * 
 * Displays the portfolio hero section with the user's name and professional tagline.
 * This is the first section visitors see when landing on the portfolio.
 * 
 * Styling: Uses .header and .header-content from App.css for layout and theming
 */

/**
 * Header component - renders the hero/header section
 * @returns {JSX.Element} Header section with name and tagline
 */
function Header() {
  return (
    <header className="header">
      <div className="header-content">
        {/* User's name - main heading */}
        <h1 className="name">Sumit Kumar</h1>
        
        {/* Professional tagline or job title */}
        <p className="tagline">Dev Ops</p>
      </div>
    </header>
  );
}

export default Header
