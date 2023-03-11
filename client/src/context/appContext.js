import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const AppContext = createContext({ token: "", type: "", user: {} });

export const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  // const [token, setToken] = useState("");
  // const [user, setUser] = useState(null);
  const [type, setType] = useState("");
  const [selectedChat, setSelectedChat] = useState();
  const [notification, setNotification] = useState([]);
  const [chats, setChats] = useState();

  const fetchUser = async () => {
    if (localStorage.getItem("token")) {
      try {
        const response = await axios.get(`http://localhost:5000/api`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const res = response.data;
        console.log(res);
        if (res?.token) {
            localStorage.setItem("token", res.token);
            // setToken(res.token);
            // setUser(res.user);
            // setType(res.type);
            setIsLoading(false);
        } else {
          // setToken("");
          // localStorage.setItem("token", "");
          // setUser({});
          console.log("User fetching failed!");
          setIsLoading(false);
        }
      } catch (error) {
        // setToken("");
        // localStorage.setItem("token", "");
        // setUser({});
        console.log("User fetching failed!");
        setIsLoading(false);
      }
    } else {
      // setToken("");
      // setUser({});
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const loggedIn = (auth_token, user) => {
    // setToken(auth_token);
    // setUser(user);
    setIsLoading(false);
  };

  const loggedOut = () => {
    // setToken("");
    // setUser({});
    setIsLoading(false);
  };

  if (isLoading) {
    return <div>LOADING PLEASE WAIT</div>;
  } else {
    return (
      <AppContext.Provider
        value={{
          loggedIn,
          loggedOut,
          type,
          setType,
          notification,
          setNotification,
          selectedChat,
          setSelectedChat,
          chats,
          setChats,
        }}
      >
        {children}
      </AppContext.Provider>
    );
  }
};
