import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null); //create board
  const [loadingObj, setLoadingObj] = useState({
    user: 'loading', //loading, checked, verify
    board: 'loading', //loading, checked, verify
  }); //create board
  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        loadingObj,
        setLoadingObj,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
