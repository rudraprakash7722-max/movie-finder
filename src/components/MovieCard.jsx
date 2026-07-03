function MovieCard({ data, onMovieClick, setSelectedMovie }) {
    const hasPoster = data.Poster && data.Poster !== "N/A";

    return (
        <div className="movie-card" onClick={()=>{
            setSelectedMovie(data);
            onMovieClick(data.imdbID);
        }}>
            <div className="movie-poster">
                {hasPoster ? (
                    <img src={data.Poster} alt={data.Title} loading="lazy" />
                ) : (
                    <div className="poster-fallback" aria-hidden="true">
                        <svg viewBox="0 0 24 24" width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
                            <path d="M2 8h20M7 4v4M17 4v4M7 16v4M17 16v4" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                    </div>
                )}
                <span className="movie-type-badge">{data.Type}</span>
            </div>

            <div className="movie-info">
                <h2 className="movie-title" title={data.Title}>{data.Title}</h2>
                <div className="movie-meta">
                    <span className="movie-year">{data.Year}</span>
                    <span className="movie-imdb-id">IMDb: {data.imdbID}</span>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;
