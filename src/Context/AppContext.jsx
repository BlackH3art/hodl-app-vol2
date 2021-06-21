import React, { useState, createContext } from 'react';

const applicationState = {
  openSettings: false,
  openInvestedForm: false
};

export const AppContext = createContext(applicationState);

export const AppContextProvider = (props) => {

  const [appState, setAppState] = useState(applicationState);

  return ( 
    <>
      <AppContext.Provider value={[appState, setAppState]}>
        {props.children}
      </AppContext.Provider>
    </>
  );
};