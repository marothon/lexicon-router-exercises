import { createBrowserRouter } from "react-router-dom"
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import App from "./components/app";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: '/',
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
      }
    ]
  }
]);