import React, { useState, createContext } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [serverData, setServerData] = useState([]);

  return (
    <AppContext.Provider value={ {serverData, setServerData }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider ;
