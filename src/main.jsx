import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import About from "./components/About";
import ErrorPage from "./components/Error-page";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Service from "./components/Service";
import Home from "./components/Home";

const router = createBrowserRouter([
  { path: "/", element: <Home/> },
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "hero",
        element: <Hero />,
      },
      {
        path: "project",
        element: <Project />,
      },
      {
        path: "service",
        element: <Service />,
      },
    ],
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
