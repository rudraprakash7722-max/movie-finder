function Error({ message }) {
    return (
        <div className="state-message state-error" role="alert">
            <span className="state-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="28" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M12 8v5M12 16h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
            </span>
            <p className="state-title">Something went wrong</p>
            <p className="state-detail">{message || "Please try again."}</p>
        </div>
    )
}

export default Error;
