import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import axios from "@/services/ajax";
import { User } from "../types/auth";
import { setToken, removeToken, getToken } from "@/utils/user-token";
import { usePathname } from "next/navigation";
import { loginService, fetchUserInfoService } from "@/services/login";

interface AuthContextType {
  user: User | null;
  login: (token: string) => Promise<void>;
  logout: () => void;
  loading: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const pathUrl = usePathname();

  useEffect(() => {
    console.log("AuthProvider mounted");
    const token = getToken();
    if (token) {
      fetchUserInfo();
    } else {
      setLoading(false);
    }
  }, [pathUrl]);

  const fetchUserInfo = async () => {
    try {
      const res = await fetchUserInfoService();
      const { code, user } = res;
      if (code === 200) {
        setUser(user);
      } else {
        removeToken();
      }
    } catch (error) {
      console.error("Failed to fetch user info", error);
      removeToken();
    } finally {
      setLoading(false);
    }
  };

  const login = async (token: string) => {
    setToken(token);
    await fetchUserInfo();
  };

  const logout = async () => {
    const callbackUrl = window.location.href;
    // 调用注销登录接口
    try {
      await axios.post("/logout");
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      removeToken();
      setUser(null);
      window.location.href = callbackUrl;
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
