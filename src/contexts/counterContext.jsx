import { createContext, useState } from "react";

export const counterContext = createContext();

export const counterContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(5);
  return (
    <counterContext.Provider value={{ counter, setCounter }}>
      {children}
    </counterContext.Provider>
  );
};
