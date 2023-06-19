import { User } from './types';

export const PERMISSION = {
  ADMIN: 'ui:*',
  DASHBOARD_PAGE: 'ui:page:dashboard',
  DASHBOARD_CRUD: 'ui:component:dashboard-crud',
  USERS_PAGE: 'ui:page:users',
} as const;

export const ACTION_TYPE = {
  HIDE: 'HIDE',
  REDIRECT: 'REDIRECT',
  DISABLE: 'DISABLE',
} as const;

// Simulate users from a database
export const USERS: User[] = [
  {
    name: 'Admin',
    description: 'This user has all permissions',
    permissions: [PERMISSION.ADMIN],
  },
  {
    name: 'Dashboard editor',
    description: 'This user can access the dashboard page and edit the dashboard',
    permissions: [PERMISSION.DASHBOARD_PAGE, PERMISSION.DASHBOARD_CRUD],
  },
  {
    name: 'Read only',
    description: 'This user can access the dashboard page and the users page, but cannot edit anything',
    permissions: [PERMISSION.DASHBOARD_PAGE, PERMISSION.USERS_PAGE],
  },
];
