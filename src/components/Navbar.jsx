function Navbar() {
    return (
        <header className="navbar">
            <div className="navbar-inner">
                <div className="brand">
                    <span className="brand-mark" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
                            <path d="M2 8h20M7 4v4M17 4v4M7 16v4M17 16v4" stroke="currentColor" strokeWidth="1.6" />
                        </svg>
                    </span>
                    <h1 className="brand-title">Movie Explorer</h1>
                </div>
            </div>
            <div className="film-sprocket" aria-hidden="true"></div>
        </header>
    );
}

export default Navbar;
