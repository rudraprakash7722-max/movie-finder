function MovieDetails({ movie }) {
    const hasPoster = movie.Poster && movie.Poster !== "N/A";
    const has = (field) => field && field !== "N/A";

    return (
        <article className="md-details">
            <style>{`
                .md-details {
                    position: relative;
                    max-width: 1000px;
                    margin: 24px auto;
                    border-radius: 20px;
                    overflow: hidden;
                    background: #14161c;
                    border: 1px solid #262932;
                    box-shadow: 0 20px 50px -20px rgba(0,0,0,0.6);
                }

                .md-backdrop {
                    position: absolute;
                    inset: 0;
                    z-index: 0;
                    background-size: cover;
                    background-position: center 20%;
                    filter: blur(28px) saturate(1.1) brightness(0.55);
                    transform: scale(1.15);
                    opacity: 0.55;
                }

                .md-backdrop::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(180deg, rgba(10,11,15,0.55) 0%, #14161c 92%);
                }

                .md-content {
                    position: relative;
                    z-index: 1;
                    display: grid;
                    grid-template-columns: 260px 1fr;
                    gap: 36px;
                    padding: 36px;
                }

                .md-poster {
                    width: 100%;
                    aspect-ratio: 2 / 3;
                    border-radius: 14px;
                    overflow: hidden;
                    background: #1b1e26;
                    box-shadow: 0 18px 34px -12px rgba(0,0,0,0.7);
                    border: 1px solid rgba(255,255,255,0.06);
                }

                .md-poster img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    display: block;
                }

                .md-poster-placeholder {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #6b6f79;
                }

                .md-body {
                    display: flex;
                    flex-direction: column;
                    gap: 16px;
                    min-width: 0;
                }

                .md-type {
                    align-self: flex-start;
                    font-family: 'JetBrains Mono', 'SFMono-Regular', Menlo, monospace;
                    font-size: 11px;
                    font-weight: 600;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    color: #e3a857;
                    background: rgba(227,168,87,0.12);
                    border: 1px solid rgba(227,168,87,0.3);
                    padding: 4px 11px;
                    border-radius: 999px;
                }

                .md-title-row {
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    gap: 20px;
                }

                .md-title {
                    font-family: 'Bebas Neue', 'Arial Narrow', sans-serif;
                    font-weight: 400;
                    font-size: 42px;
                    line-height: 1.05;
                    letter-spacing: 0.02em;
                    color: #f2efe9;
                    margin: 0;
                }

                .md-rating {
                    flex-shrink: 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    width: 56px;
                    height: 56px;
                    border-radius: 50%;
                    background: linear-gradient(180deg, #f0bd76, #e3a857);
                    color: #1a1305;
                }

                .md-rating strong {
                    font-size: 17px;
                    font-weight: 700;
                    line-height: 1;
                }

                .md-rating span {
                    font-size: 8.5px;
                    font-weight: 600;
                    letter-spacing: 0.05em;
                    text-transform: uppercase;
                    opacity: 0.75;
                }

                .md-facts {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    gap: 8px 10px;
                    font-family: 'JetBrains Mono', 'SFMono-Regular', Menlo, monospace;
                    font-size: 12.5px;
                    color: #9498a3;
                }

                .md-facts .md-dot {
                    width: 3px;
                    height: 3px;
                    border-radius: 50%;
                    background: #6b6f79;
                }

                .md-plot {
                    font-size: 15px;
                    line-height: 1.75;
                    color: #c7cad2;
                    max-width: 62ch;
                    margin: 4px 0 0;
                }

                .md-meta {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
                    gap: 18px 28px;
                    margin-top: 12px;
                    padding-top: 20px;
                    border-top: 1px solid #262932;
                }

                .md-meta-item {
                    display: flex;
                    flex-direction: column;
                    gap: 3px;
                }

                .md-meta-label {
                    font-size: 10.5px;
                    font-weight: 600;
                    letter-spacing: 0.08em;
                    text-transform: uppercase;
                    color: #6b6f79;
                }

                .md-meta-value {
                    font-size: 14px;
                    color: #f2efe9;
                    line-height: 1.4;
                }

                .md-meta-value.md-mono {
                    font-family: 'JetBrains Mono', 'SFMono-Regular', Menlo, monospace;
                    font-size: 12.5px;
                    color: #9498a3;
                    letter-spacing: 0.02em;
                }

                @media (max-width: 720px) {
                    .md-content {
                        grid-template-columns: 1fr;
                        padding: 24px;
                        gap: 22px;
                    }

                    .md-poster {
                        max-width: 200px;
                        margin: 0 auto;
                    }

                    .md-body {
                        text-align: center;
                        align-items: center;
                    }

                    .md-title-row {
                        flex-direction: column-reverse;
                        align-items: center;
                        gap: 12px;
                    }

                    .md-title {
                        font-size: 32px;
                    }

                    .md-facts {
                        justify-content: center;
                    }

                    .md-plot {
                        max-width: none;
                    }

                    .md-meta {
                        grid-template-columns: 1fr;
                        text-align: center;
                    }
                }
            `}</style>

            {hasPoster && (
                <div className="md-backdrop" style={{ backgroundImage: `url(${movie.Poster})` }} />
            )}

            <div className="md-content">
                <div className="md-poster">
                    {hasPoster ? (
                        <img src={movie.Poster} alt={movie.Title} loading="lazy" />
                    ) : (
                        <div className="md-poster-placeholder" aria-hidden="true">
                            <svg viewBox="0 0 24 24" width="30" height="30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.6" />
                                <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                            </svg>
                        </div>
                    )}
                </div>

                <div className="md-body">
                    {has(movie.Type) && <span className="md-type">{movie.Type}</span>}

                    <div className="md-title-row">
                        <h2 className="md-title">{movie.Title}</h2>

                        {has(movie.imdbRating) && (
                            <div className="md-rating">
                                <strong>{movie.imdbRating}</strong>
                                <span>IMDb</span>
                            </div>
                        )}
                    </div>

                    <div className="md-facts">
                        {has(movie.Year) && <span>{movie.Year}</span>}
                        {has(movie.Runtime) && (
                            <>
                                <span className="md-dot" />
                                <span>{movie.Runtime}</span>
                            </>
                        )}
                        {has(movie.Genre) && (
                            <>
                                <span className="md-dot" />
                                <span>{movie.Genre}</span>
                            </>
                        )}
                    </div>

                    {has(movie.Plot) && <p className="md-plot">{movie.Plot}</p>}

                    <div className="md-meta">
                        {has(movie.Director) && (
                            <div className="md-meta-item">
                                <span className="md-meta-label">Director</span>
                                <span className="md-meta-value">{movie.Director}</span>
                            </div>
                        )}
                        {has(movie.Actors) && (
                            <div className="md-meta-item">
                                <span className="md-meta-label">Actors</span>
                                <span className="md-meta-value">{movie.Actors}</span>
                            </div>
                        )}
                        {has(movie.imdbID) && (
                            <div className="md-meta-item">
                                <span className="md-meta-label">IMDb ID</span>
                                <span className="md-meta-value md-mono">{movie.imdbID}</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </article>
    )
}

export default MovieDetails;
