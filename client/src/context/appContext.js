import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const AppContext = createContext({ token: "", auth: false, user: {} });

export const AppProvider = ({ children }) => {
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    if (localStorage.getItem("token")) {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/user/self`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const res = response.data;
        if (res?.user && res?.token) {
          if (res.token !== token) {
            setToken(res.token);
            setUser(res.user);
            setIsLoading(false);
          }
        } else {
          setToken("");
          localStorage.setItem("token", "");
          setUser({});
          console.log("User fetching failed!");
          setIsLoading(false);
        }
      } catch (error) {
        setToken("");
        localStorage.setItem("token", "");
        setUser({});
        console.log("User fetching failed!");
        setIsLoading(false);
      }
    } else {
      setToken("");
      setUser({});
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [token]);

  const loggedIn = (auth_token, user) => {
    setToken(auth_token);
    setUser(user);
    setIsLoading(false);
  };

  const loggedOut = () => {
    setToken("");
    setUser({});
    setIsLoading(false);
  };

  if (isLoading) {
    return <div>LOADING PLEASE WAIT</div>;
  } else {
    return (
      <AppContext.Provider
        value={{ token, loggedIn, loggedOut, user, setUser }}
      >
        {children}
      </AppContext.Provider>
    );
  }
};
