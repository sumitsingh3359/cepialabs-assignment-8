function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="name">Sumit Kumar</h1>
        <p className="tagline">Dev Ops</p>
        <div className="social-links">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link">
            GitHub
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link">
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header
