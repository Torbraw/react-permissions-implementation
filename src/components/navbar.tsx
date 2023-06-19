import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Button } from './ui/button';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

export default function Navbar() {
  const { logout } = useAuth();

  return (
    <>
      <header className="w-full border-b">
        <div className="flex h-14 items-center px-8">
          <nav className="flex flex-1 space-x-6 font-medium">
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
            <NavLink
              className={({ isActive }) =>
                twMerge(
                  clsx({
                    'text-foreground/60 transition-colors hover:text-foreground/80': true,
                    'text-foreground': isActive,
                  }),
                )
              }
              to="/reporting"
            >
              Reporting
            </NavLink>
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
