import React, { createContext, useState } from "react";

export const TipsContext = createContext();

export const TipsProvider = ({ children }) => {
  const [tipsData, setTipsData] = useState(null);

  return (
    <TipsContext.Provider value={{ tipsData, setTipsData }}>
      {children}
    </TipsContext.Provider>
  );
};