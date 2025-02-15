import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import RaceFlags from "./interfaces/race-flags/race-flags";
import RaceControl from "./interfaces/race-control/race-control";
import { SocketProvider } from "./context/SocketContext";

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
    <SocketProvider>
      {" "}
      {/* Provides socket for the whole app */}
      <RouterProvider router={router} />
    </SocketProvider>
  </React.StrictMode>
);
