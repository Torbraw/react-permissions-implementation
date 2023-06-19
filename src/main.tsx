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
import PermissionsGate from './components/permission-gate';
import { ACTION_TYPE, PERMISSION } from './types';

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
            element: <PermissionsGate permissions={[PERMISSION.DASHBOARD_PAGE]} actionType={ACTION_TYPE.REDIRECT} />,
            children: [
              {
                path: 'dashboard',
                element: <Dashboard />,
              },
            ],
          },
          {
            element: <PermissionsGate permissions={[PERMISSION.REPORTING_PAGE]} actionType={ACTION_TYPE.REDIRECT} />,
            children: [
              {
                path: 'reporting',
                element: <Reporting />,
              },
            ],
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
