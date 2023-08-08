import { createContext, useEffect, useState } from "react";
import { getAccessTokenFromLS } from "@/src/utils/auth";
const initialAppContext = {
  isAuthenticated: Boolean(getAccessTokenFromLS()),
  authLoading: true,
  userData: null,
};

export const AppContext = createContext(initialAppContext);

export const AppProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticate] = useState(
    initialAppContext.isAuthenticated
  );
  const [authLoading, setAuthLoading] = useState(initialAppContext.authLoading);
  const [userData, setUserData] = useState(initialAppContext.userData);

  const authContextData = {
    isAuthenticated,
    authLoading,
    userData,
    setIsAuthenticate,
    setAuthLoading,
    setUserData,
  };

  useEffect(() => {
    setIsAuthenticate(Boolean(getAccessTokenFromLS()));
  }, []);

  return (
    <AppContext.Provider value={authContextData}>
      {children}
    </AppContext.Provider>
  );
};
