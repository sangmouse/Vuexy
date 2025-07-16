import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.scss";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LayoutRoot from "./components/LayoutRoot";
import HomePage from "./components/HomePage";
import SignIn from "./components/SignIn";
import UserDetail from "./components/UserDetail";
import UserForm from "./components/UserForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutRoot />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "view/:id",
        element: <UserDetail />,
      },
      {
        path: "edit/:id",
        element: <UserForm />,
      },
      {
        path: "create/user",
        element: <UserForm />,
      },
    ],
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
