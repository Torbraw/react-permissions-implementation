import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Button } from './ui/button';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import PermissionsGate from './permission-gate';
import { PERMISSION } from '../config';

export default function Navbar() {
  const { logout } = useAuth();

  return (
    <>
      <header className="w-full border-b">
        <div className="flex h-14 items-center px-8">
          <nav className="flex flex-1 space-x-6 font-medium">
            <PermissionsGate permissions={[PERMISSION.DASHBOARD_PAGE]} actionType="HIDE">
              <NavLink
                className={({ isActive }) =>
                  twMerge(
                    clsx({
                      'text-foreground/60 transition-colors hover:text-foreground/80': true,
                      'text-foreground': isActive,
                    }),
                  )
                }
                to="/dashboard"
              >
                Dashboard
              </NavLink>
            </PermissionsGate>
            <PermissionsGate permissions={[PERMISSION.USERS_PAGE]} actionType="HIDE">
              <NavLink
                className={({ isActive }) =>
                  twMerge(
                    clsx({
                      'text-foreground/60 transition-colors hover:text-foreground/80': true,
                      'text-foreground': isActive,
                    }),
                  )
                }
                to="/users"
              >
                Users
              </NavLink>
            </PermissionsGate>
          </nav>
          <div className="flex">
            <Button
              className="text-base text-foreground/60 transition-colors hover:text-foreground/80"
              variant="ghost"
              onClick={() => logout()}
            >
              Logout
            </Button>
          </div>
        </div>
      </header>
    </>
  );
}
