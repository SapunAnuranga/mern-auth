import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [userData, setUserData] = useState(null);

  const getAuthState = async ()=> {
    try {
      const { data } = await axios.post(backendUrl + "/api/user/data", {}, { withCredentials: true });

      if (data.success) {
        setIsLoggedin(true)
        await getUserData()
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  const getUserData = async () => {
    try {
      
      const { data } = await axios.post(backendUrl + "/api/user/data", {}, { withCredentials: true });

      data.success ? setUserData(data.userData) : toast.error(data.message);

    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(()=>{
    getAuthState();
  },[])

  const value = {
    backendUrl,
    isLoggedin, setIsLoggedin,
    userData, setUserData,
    getUserData,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
