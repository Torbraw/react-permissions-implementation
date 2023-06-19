import { Button } from '../components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { useAuth } from '../hooks/useAuth';
import { PERMISSION, User } from '../types';

export default function Login() {
  const { login } = useAuth();

  // Simulate users from a database
  const users: User[] = [
    {
      name: 'Admin',
      permissions: [PERMISSION.ADMIN],
    },
    {
      name: 'Dashboard reader',
      permissions: [PERMISSION.DASHBOARD_PAGE],
    },
    {
      name: 'Reporting accountant',
      permissions: [PERMISSION.DASHBOARD_PAGE, PERMISSION.REPORTING_PAGE],
    },
    {
      name: 'Read only',
      permissions: [PERMISSION.DASHBOARD_PAGE, PERMISSION.REPORTING_PAGE],
    },
  ];

  return (
    <div className="m-8 flex justify-center">
      <div className="grid max-w-6xl flex-auto grid-cols-3 gap-6">
        {users.map((user, i) => (
          <Card key={i} className="flex flex-col">
            <CardHeader>
              <CardTitle>{user.name}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <h4>Permission</h4>
              <ul>
                {user.permissions.map((permission, i) => (
                  <li key={i} className="text-sm text-muted-foreground">
                    - {permission}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={() => login(user)}>
                Choose this user
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
