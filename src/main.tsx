import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import Login from './pages/login';
import Reporting from './pages/reporting';
import PublicLayout from './layouts/public-layout';
import ProtectedLayout from './layouts/protected-layout';
import { AuthProvider } from './hooks/useAuth';

const router = createBrowserRouter([
  {
    element: <AuthProvider />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        element: <PublicLayout />,
        children: [
          {
            path: 'login',
            element: <Login />,
          },
        ],
      },
      {
        element: <ProtectedLayout />,
        children: [
          {
            path: 'dashboard',
            element: <Dashboard />,
          },
          {
            path: 'reporting',
            element: <Reporting />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
