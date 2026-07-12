import MovieCard from "./MovieCard";
import Loader from "./Loader";

function MovieList({ movies, loading, error, setSelectedMovie }) {
    if (loading) {
        return <Loader />;
    }

    if (error) {
        return (
            <div className="state-message state-error" role="alert">
                <span className="state-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
                        <path d="M12 8v5M12 16h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                </span>
                <p className="state-title">Something went wrong</p>
                <p className="state-detail">{error}</p>
            </div>
        )
    }

    if (movies.length === 0) {
        return (
            <div className="state-message state-empty">
                <span className="state-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.6" />
                        <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                </span>
                <p className="state-title">Start exploring</p>
                <p className="state-detail">Search for a title above to see movies, shows and more.</p>
            </div>
        )
    }

    return (
        <div className="movie-list">
            {movies.map((movie) => (
                <MovieCard key={movie.imdbID} data={movie} />
            ))}
        </div>
    )
}

export default MovieList;
