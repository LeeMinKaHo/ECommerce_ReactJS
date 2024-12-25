import { useRouteError } from "react-router-dom";
import './Error.css';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page">
      <div className="error-container">
        <h1 className="error-title">Oops!</h1>
        <p className="error-message">Sorry, an unexpected error has occurred.</p>
        <p className="error-detail">
          <i>{error.statusText || error.message}</i>
        </p>
        <a href="/" className="error-link">Back to Home</a>
      </div>
    </div>
  );
}
