import React, { useContext } from 'react';

const AppContext = React.createContext();

export const AppProvider = ({children}) => {
    const [hello, setHello] = React.useState("hello");
    console.log(hello)
  return <AppContext.Provider value={{
    hello}}>
    {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
};
