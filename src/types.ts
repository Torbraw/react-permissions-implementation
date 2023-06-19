export const PERMISSION = {
  ADMIN: 'ui:*',
  DASHBOARD_PAGE: 'ui:page:dashboard',
  REPORTING_PAGE: 'ui:page:reporting',
} as const;
export type PermissionValues = (typeof PERMISSION)[keyof typeof PERMISSION];

export const ACTION_TYPE = {
  HIDE: 'HIDE',
  REDIRECT: 'REDIRECT',
  DISABLE: 'DISABLE',
} as const;
export type ActionTypeKeys = keyof typeof ACTION_TYPE;

export type User = {
  name: string;
  permissions: Array<PermissionValues>;
};

export type StateUser = {
  name: string;
  encryptedPermissions: string;
};
