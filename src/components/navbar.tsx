import { useAuth } from '../hooks/useAuth';
import { Button } from './ui/button';

export default function Navbar() {
  const { logout } = useAuth();

  return (
    <div>
      <Button onClick={() => logout()}>Logout</Button>
    </div>
  );
}
