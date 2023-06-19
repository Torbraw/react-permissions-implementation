import { createContext, useCallback, useContext, useMemo } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { AES, enc } from 'crypto-js';
import { PermissionValues, StateUser, User } from '../types';
import { useStore } from './useStore';

type AuthCtx = {
  login: (user: User) => void;
  logout: () => void;
  hasPermissions: (permissions: Array<PermissionValues>) => boolean;
  currentUser: StateUser | undefined;
};

export const AuthContext = createContext<AuthCtx | null>(null);

export function AuthProvider() {
  const encryptPassPhrase = 'encryptPassPhrase';
  const navigate = useNavigate();

  const currentUser = useStore((state) => state.currentUser);
  const setCurrentUser = useStore((state) => state.setCurrentUser);

  const login = useCallback(
    (user: User) => {
      setCurrentUser({
        name: user.name,
        encryptedPermissions: AES.encrypt(JSON.stringify(user.permissions), encryptPassPhrase).toString(),
      });
      navigate('/dashboard');
    },
    [navigate, setCurrentUser],
  );

  const logout = useCallback(() => {
    setCurrentUser(undefined);
    navigate('/login', { replace: true });
  }, [navigate, setCurrentUser]);

  const decryptPermissions = useCallback(() => {
    if (!currentUser) {
      return [];
    }

    const bytes = AES.decrypt(currentUser.encryptedPermissions, encryptPassPhrase);
    return JSON.parse(bytes.toString(enc.Utf8));
  }, [currentUser]);

  /**
   * Take a array of permissions and determine if the logged user has all those permissions
   */
  const hasPermissions = useCallback(
    (permissions: Array<PermissionValues>) => {
      console.log(currentUser);
      const userPermissions = decryptPermissions();
      // Check the admin flag
      if (userPermissions.includes('ui:*')) {
        return true;
      }
      return permissions.every((p) => userPermissions.includes(p));
    },
    [currentUser, decryptPermissions],
  );

  const value = useMemo(
    () => ({
      login,
      logout,
      hasPermissions,
      currentUser,
    }),
    [currentUser, login, logout, hasPermissions],
  );

  return (
    <AuthContext.Provider value={value}>
      <Outlet />
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext) as AuthCtx;
};
