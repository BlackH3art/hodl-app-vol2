import React, { useState, createContext } from 'react';

const applicationState = {
  openSettings: false,
  openInvestedForm: false
};

export const AppContext = createContext(applicationState);

export const AppContextProvider = (props) => {

  const [appState, setAppState] = useState(applicationState);
  const [user, setUser] = useState(null);

  return ( 
    <>
      <AppContext.Provider value={{
        appState, 
        setAppState, 
        user, 
        setUser,
      }}>
        {props.children}
      </AppContext.Provider>
    </>
  );
};