import React, {createContext, useState, useEffect} from "react";
import {useAuth0} from "@auth0/auth0-react";
import {getRole} from "./AuthService";

export const AuthContext = createContext();

// eslint-disable-next-line import/no-anonymous-default-export
export default ({children}) => {
  const [userRole, setUserRole] = useState("");
  const [token, setToken] = useState(null);
  const {user, isAuthenticated, getAccessTokenSilently} = useAuth0();

  useEffect(() => {
    const getUserRole = async () => {
      if (isAuthenticated) {
        const user_token = await getAccessTokenSilently();
        setToken(user_token);
        const res = await getRole(user_token);

        if (res.success) {
          setUserRole(res.role);
        } else {
          console.log("error while getting user role");
        }
      }
    };

    getUserRole();
  }, [isAuthenticated]);

  return (
    <AuthContext.Provider value={{isAuthenticated, token, user, userRole}}>
      {children}
    </AuthContext.Provider>
  );
};
