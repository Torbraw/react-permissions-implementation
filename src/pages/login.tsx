import { Button } from '../components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { useAuth } from '../hooks/useAuth';
import { Permissions, User } from '../types';

export default function Login() {
  const { login } = useAuth();

  const users: User[] = [
    {
      name: 'Admin',
      permissions: [Permissions.ADMIN],
    },
    {
      name: 'Reporting accountant',
      permissions: [Permissions.DASHBOARD_PAGE, Permissions.REPORTING_PAGE],
    },
    {
      name: 'User manager',
      permissions: [Permissions.DASHBOARD_PAGE, Permissions.USERS_PAGE],
    },
    {
      name: 'Read only',
      permissions: [Permissions.DASHBOARD_PAGE, Permissions.REPORTING_PAGE, Permissions.USERS_PAGE],
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
              <h4>Permissions</h4>
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
