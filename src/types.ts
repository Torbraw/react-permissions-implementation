import { ACTION_TYPE, PERMISSION } from './config';

export type PermissionValues = (typeof PERMISSION)[keyof typeof PERMISSION];

export type ActionTypeKeys = keyof typeof ACTION_TYPE;

export type User = {
  name: string;
  description: string;
  permissions: Array<PermissionValues>;
};

export type StateUser = {
  name: string;
  encryptedPermissions: string;
};
