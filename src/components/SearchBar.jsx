function SearchBar({ searchTerm, setSearchTerm, handleSearch }) {

    return (
        <section className="search-section">
            <div className="search-bar">
                <span className="search-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                        <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </span>

                <input
                    className="search-input"
                    type="text"
                    placeholder="Search for a movie..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <button className="search-button" onClick={handleSearch}>
                    Search
                </button>
            </div>
        </section>
    )
}

export default SearchBar;
