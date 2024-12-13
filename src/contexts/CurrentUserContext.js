import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

// Create contexts
export const CurrentUserContext = createContext(null);
export const SetCurrentUserContext = createContext(null);

// Provider component
export const CurrentUserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axios.get("/dj-rest-auth/user/");
        setCurrentUser(data);
      } catch (err) {
        console.error("Error fetching user:", err.response?.data || err.message);
      }
    };
    handleMount();
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SetCurrentUserContext.Provider value={setCurrentUser}>
        {children}
      </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
};

// Custom hooks for accessing context
export const useCurrentUser = () => useContext(CurrentUserContext);
export const useSetCurrentUser = () => useContext(SetCurrentUserContext);
