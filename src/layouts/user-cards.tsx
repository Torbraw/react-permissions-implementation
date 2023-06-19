import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { USERS } from '../config';
import { useAuth } from '../hooks/useAuth';

type Props = {
  showLogin?: boolean;
};

export default function UserCards({ showLogin }: Props) {
  const { login } = useAuth();

  return (
    <div className="flex justify-center">
      <div className="grid max-w-6xl flex-auto grid-cols-3 gap-6">
        {USERS.map((user, i) => (
          <Card key={i} className="flex flex-col">
            <CardHeader>
              <CardTitle>{user.name}</CardTitle>
              <CardDescription>{user.description}</CardDescription>
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
            {showLogin && (
              <CardFooter>
                <Button className="w-full" onClick={() => login(user)}>
                  Choose this user
                </Button>
              </CardFooter>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
}
