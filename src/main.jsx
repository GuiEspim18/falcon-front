import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./assets/css/styles.scss";
import { Navigate, RouterProvider, createBrowserRouter, redirect } from "react-router-dom";
import Dashboard from "./pages/Dashoard/Dashboard.jsx";
import Students from "./pages/Students/Students.jsx";
import Profile from "./pages/Profile/Profile.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <App />,
    children: [
      {
        path: "/",
        element: <Navigate to="/dashboard" replace />
      },
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/students",
        children: [
          {
            path: "",
            element: <Students />
          },
          {
            path: "profile/:id",
            element: <Profile />
          }
        ] 
      },
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
);
