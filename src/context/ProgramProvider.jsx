import React, { createContext, useState } from "react";

export const ProgramContext = createContext();

export const ProgramProvider = ({ children }) => {
  const [programs, setPrograms] = useState(null);

  return (
    <ProgramContext.Provider value={{ programs, setPrograms }}>
      {children}
    </ProgramContext.Provider>
  );
};