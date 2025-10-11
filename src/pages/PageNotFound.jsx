import "../css/PageNotFound.css";

export default function PageNotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Oops! The page you’re looking for doesn’t exist or has been moved.</p>
      <a href="/" className="home-link">Go Back Home</a>
    </div>
  );
}
