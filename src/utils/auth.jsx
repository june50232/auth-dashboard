import * as React from "react";
import {
    useLocation,
    Navigate,
  } from "react-router-dom";

import docCookies, { loginCookieName } from './cookie'

/**
 * This represents some generic auth provider API, like Firebase.
 */
const fakeAuthProvider = {
    isAuthenticated: false,
    signin(callback) {
        fakeAuthProvider.isAuthenticated = true;
        setTimeout(callback, 100); // fake async
    },
    signout(callback) {
        fakeAuthProvider.isAuthenticated = false;
        setTimeout(callback, 100);
    },
};

let AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
    let [user, setUser] = React.useState(null);
  
    let signin = (newUser, callback) => {
      return fakeAuthProvider.signin(() => {
        docCookies.setItem(loginCookieName, newUser, 'Infinity', '/dashboard')
        setUser(newUser);
        if (callback) callback();
      });
    };
  
    let signout = (callback) => {
      return fakeAuthProvider.signout(() => {
        docCookies.removeItem(loginCookieName, '/dashboard')
        setUser(null);
        if (callback) callback();
      });
    };
  
    let value = { user, signin, signout };
  
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
  }

export const useAuth = () => {
    return React.useContext(AuthContext);
}

export const RequireAuth = ({ children }) => {
    let auth = useAuth();
    let location = useLocation();
    if (!auth.user) {
      const cookieUser = docCookies.getItem(loginCookieName)
      if (cookieUser) {
        auth.signin(cookieUser)
      } else {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/login" state={{ from: location }} replace />;
      } 
    }
  
    return children;
  }