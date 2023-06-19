import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import PageLayout from './page-layout';

export default function PublicLayout() {
  const { currentUser } = useAuth();
  console.log(currentUser);
  if (currentUser) {
    return <Navigate to={'/dashboard'} />;
  }

  return (
    <PageLayout>
      <Outlet />
    </PageLayout>
  );
}
