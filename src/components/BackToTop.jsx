/**
 * BackToTop.jsx - Back to Top Button Component
 * 
 * Displays a floating button that appears when the user scrolls down the page.
 * Clicking the button smoothly scrolls the page back to the top.
 * 
 * Features:
 * - Uses React hooks (useState, useEffect) for state management and side effects
 * - Listens to window scroll events to show/hide button
 * - Appears after 300px of scrolling
 * - Smooth scroll animation to top
 * - Accessibility features (aria-label, title attribute)
 * 
 * Styling: Uses .back-to-top from App.css
 */

import { useState, useEffect } from 'react'

/**
 * BackToTop component - renders floating button to scroll to top
 * @returns {JSX.Element|null} Back to top button (only visible when scrolled down)
 */
function BackToTop() {
  // State to track if the button should be visible
  const [visible, setVisible] = useState(false)

  /**
   * Effect hook to manage scroll event listener
   * Shows button when page is scrolled more than 300px down
   * Cleans up listener on component unmount
   */
  useEffect(() => {
    // Scroll event handler
    const onScroll = () => setVisible(window.scrollY > 300)
    
    // Add scroll event listener
    window.addEventListener('scroll', onScroll)
    
    // Cleanup: remove listener on unmount
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /**
   * Smooth scroll to top of the page
   * Uses window.scrollTo with 'smooth' behavior for animation
   */
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  // Only render button if visible state is true
  return (
    visible && (
      <button
        className="back-to-top"
        onClick={scrollToTop}
        aria-label="Back to top"
        title="Back to top"
      >
        {/* Up arrow symbol */}
        ↑
      </button>
    )
  )
}

export default BackToTop
