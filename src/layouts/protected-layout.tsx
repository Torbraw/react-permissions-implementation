import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function ProtectedLayout() {
  const { currentUser } = useAuth();

  if (!currentUser) {
    // User is not authenticated, redirect to login
    return <Navigate to="/login" />;
  }
  return <Outlet />;
}
