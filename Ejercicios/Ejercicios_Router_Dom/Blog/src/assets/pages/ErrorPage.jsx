import { useRouteError } from "react-router-dom";
import './ErrorPage.css';

const ErrorPage = () => {
  let error = useRouteError();
  console.error("React dio error, redirigió react-router-dom:", error);
  return (
    <div className="error">
      <h1>Error</h1>
      <h3>{error.status} - {error.statusText}</h3>
      <h4>{error.data}</h4>
    </div>
  );
};

export default ErrorPage;
