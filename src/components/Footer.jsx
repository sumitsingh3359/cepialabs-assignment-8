/**
 * Footer.jsx - Footer Component
 * 
 * Displays copyright information at the bottom of the portfolio.
 * Simple footer showing the current year and developer name.
 * 
 * Styling: Uses .footer from App.css
 */

/**
 * Footer component - renders the page footer with copyright info
 * @returns {JSX.Element} Footer section with copyright notice
 */
function Footer() {
  return (
    <footer className="footer">
      {/* Copyright notice with current year */}
      <p>&copy; 2025 Sumit Kumar. All rights reserved.</p>
    </footer>
  )
}

export default Footer
