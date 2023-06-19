import { JSXElementConstructor, ReactElement, cloneElement } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { ActionTypeKeys, ACTION_TYPE, PermissionValues } from '../types';

type Props = {
  permissions: Array<PermissionValues>;
  actionType: ActionTypeKeys;
  children?: ReactElement<unknown, string | JSXElementConstructor<unknown>>;
};

export default function PermissionsGate({ permissions, actionType, children }: Props) {
  const { hasPermissions } = useAuth();
  const disabledProps = { disabled: true };

  if (!hasPermissions(permissions)) {
    switch (actionType) {
      case ACTION_TYPE.REDIRECT:
        return <Navigate to="dashboard"></Navigate>;
      case ACTION_TYPE.HIDE:
        return <></>;
      case ACTION_TYPE.DISABLE:
        if (!children) return <></>;
        if (Array.isArray(children)) {
          return children.map((child, i) => cloneElement(child, { ...disabledProps, key: i }));
        }
        return cloneElement(children, disabledProps);
      default:
        return <></>;
    }
  }

  if (children) return <>{children}</>;
  return <Outlet />;
}
