import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { AuthCredentials, User } from './auth.types';
import { AuthContext } from './auth.context';

const storageKey = 'cusports.auth.user';

const readStoredUser = (): User | null => {
  const storedUser = localStorage.getItem(storageKey);
  if (!storedUser) return null;

  try {
    return JSON.parse(storedUser) as User;
  } catch {
    localStorage.removeItem(storageKey);
    return null;
  }
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setUser(readStoredUser());
    setIsLoading(false);
  }, []);

  const persistUser = useCallback((nextUser: User) => {
    localStorage.setItem(storageKey, JSON.stringify(nextUser));
    setUser(nextUser);
  }, []);

  const signIn = useCallback(async ({ email }: AuthCredentials) => {
    persistUser({ id: crypto.randomUUID(), email, name: email.split('@')[0] });
  }, [persistUser]);

  const signUp = useCallback(async ({ email, name }: AuthCredentials & { name: string }) => {
    persistUser({ id: crypto.randomUUID(), email, name });
  }, [persistUser]);

  const signOut = useCallback(() => {
    localStorage.removeItem(storageKey);
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({ user, isLoading, signIn, signUp, signOut }),
    [isLoading, signIn, signOut, signUp, user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
