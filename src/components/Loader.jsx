function Loader() {
    return (
        <div className="state-message state-loading" role="status" aria-live="polite">
            <span className="spinner" aria-hidden="true"></span>
            <p className="state-title">Loading movies...</p>
        </div>
    );
}

export default Loader;
