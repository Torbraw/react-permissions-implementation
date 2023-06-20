import { Children, ReactElement, ReactNode, cloneElement } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { ActionTypeKeys, PermissionValues } from '../types';
import { ACTION_TYPE } from '../config';

type Props = {
  permissions: Array<PermissionValues>;
  actionType: ActionTypeKeys;
  children?: ReactNode;
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
        return Children.map(children, (child, i) => cloneElement(child as ReactElement, { ...disabledProps, key: i }));
      default:
        return <></>;
    }
  }

  if (children) return <>{children}</>;
  return <Outlet />;
}
