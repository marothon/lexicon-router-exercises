import { createBrowserRouter, Navigate } from "react-router-dom"
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import App from "./components/app";
import Dashboard from "./components/dashboard";
import Stats from "./components/stats";
import Settings from "./components/settings";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/dashboard',
        element: <Dashboard/>,
        children: [
          {
            index: true,
            element: <Navigate to='stats' replace/>
          },
          {
            path: 'stats',
            element: <Stats/>
          },
          {
            path: 'settings',
            element: <Settings/>
          }
        ]
      }
    ]
  }
]);