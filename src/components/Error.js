import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Oops! Something went wrong</h1>
      <h3>{err.status}</h3>
    </div>
  );
};

export default ErrorPage;
