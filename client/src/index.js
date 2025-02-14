import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import RaceFlags from "./interfaces/race-flags/race-flags";
import RaceControl from "./interfaces/race-control/race-control";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/race-flags",
    element: <RaceFlags />,
  },
  {
    path: "/race-control",
    element: <RaceControl />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
