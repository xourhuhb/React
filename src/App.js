import React from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/Error";

const FoodAppPage = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <FoodAppPage />,
    errorElement: <ErrorPage />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
