export const Permissions = {
  ADMIN: 'ui:*',
  DASHBOARD_PAGE: 'ui:page:dashboard',
  REPORTING_PAGE: 'ui:page:reporting',
  USERS_PAGE: 'ui:page:users',
} as const;
export type PermissionValues = (typeof Permissions)[keyof typeof Permissions];

export type User = {
  name: string;
  permissions: Array<PermissionValues>;
};

export type StateUser = {
  name: string;
  encryptedPermissions: string;
};
