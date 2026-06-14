import type { ReactNode } from "react";
import {
  createContext,
  useContext,
  useState,
} from "react";

type User = {
  email: string;
  role: string;
};

type AuthContextType = {
  user: User | null;
  login: (email: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export function AuthProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [user, setUser] = useState<User | null>(() => {
    const stored = sessionStorage.getItem("user");

    return stored ? JSON.parse(stored) : null;
  });

  const login = (email: string) => {
    const roleMap: Record<string, string> = {
      "admin@ksp.ai": "ADMIN",
      "analyst@ksp.ai": "ANALYST",
      "officer@ksp.ai": "OFFICER",
      "supervisor@ksp.ai": "SUPERVISOR",
    };

    const userData = {
      email,
      role: roleMap[email] || "USER",
    };

    sessionStorage.setItem(
      "user",
      JSON.stringify(userData)
    );

    setUser(userData);
  };

  const logout = () => {
    sessionStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () =>
  useContext(AuthContext);