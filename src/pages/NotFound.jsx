export default function NotFoundPage() {
    const not_foundStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f8f9fa',
        color: '#343a40',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        fontSize: '1.5rem',
        padding: '20px',
        width: '100%',
        overflow: 'hidden'
    };

    const headingStyle = {
        fontSize: '3rem',
        fontWeight: 'bold',
        marginBottom: '16px',
        color: '#dc3545'
    };

    const paragraphStyle = {
        marginBottom: '24px',
        fontSize: '1.2rem'
    };

    const buttonStyle = {
        display: 'inline-block',
        padding: '12px 32px',
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        textDecoration: 'none',
        fontSize: '1rem',
        fontWeight: 'bold',
        transition: 'background 0.2s',
        cursor: 'pointer'
    };

    return (
        <div className="not-found-page" style={not_foundStyle}>
            <h1 style={headingStyle}>404 - Page Not Found</h1>
            <p style={paragraphStyle}>Sorry, the page you are looking for does not exist.</p>
            <a href="/" style={buttonStyle}>Go to Home</a>
        </div>
    );
}