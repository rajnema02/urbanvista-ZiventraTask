import { createContext, useContext, useEffect, useState } from "react";
import {
  getProfile,
  loginUser,
  signupUser
} from "../services/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [loading, setLoading] = useState(true);

  const isAuthenticated = Boolean(token);

  useEffect(() => {
    const loadUser = async () => {
      const storedToken = localStorage.getItem("token");

      if (!storedToken) {
        setLoading(false);
        return;
      }

      try {
        const response = await getProfile();
        setUser(response.user);
        setToken(storedToken);
      } catch (error) {
        localStorage.removeItem("token");
        setToken(null);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  const login = async (email, password) => {
    const response = await loginUser({
      email,
      password
    });

    localStorage.setItem("token", response.token);

    setToken(response.token);
    setUser(response.user);

    return response;
  };

  const signup = async (name, email, password) => {
    const response = await signupUser({
      name,
      email,
      password
    });

    localStorage.setItem("token", response.token);

    setToken(response.token);
    setUser(response.user);

    return response;
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        loading,
        isAuthenticated,
        login,
        signup,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};