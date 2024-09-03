import { createBrowserRouter, Navigate } from "react-router-dom"
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import App from "./components/app";
import Dashboard from "./components/dashboard";
import Stats from "./components/stats";
import Settings from "./components/settings";
import NotFound from "./components/not-found";
import ProtectedRoute from "./components/protected-route";
import UserProfile from "./components/user-profile";
import SignUp from "./components/signup";
import SignUpStep1 from "./components/signup-step1";
import SignUpStep2 from "./components/signup-step2";
import SignUpStep3 from "./components/signup-step3";

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
        path: '/old_home',
        element: <Navigate to="/home"/>
      },
      {
        path: '/user/:id',
        element: <UserProfile/>
      },
      {
        path: '/signup',
        element: <SignUp/>,
        children: [
          {
            index: true,
            element: <Navigate to='step1' replace/>
          },
          {
            path: 'step1',
            element: <SignUpStep1/>
          },
          {
            path: 'step2',
            element: <SignUpStep2/>
          },
          {
            path: 'step3',
            element: <SignUpStep3/>
          }
        ]
      },
      {
        path: '/dashboard',
        element:
          <ProtectedRoute>
            <Dashboard/>
          </ProtectedRoute>,
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
  },
  {
    path: '/not-found',
    element: <NotFound/>
  },
  {
    path: '*',
    element: <Navigate to='/not-found' replace/>
  }
]);