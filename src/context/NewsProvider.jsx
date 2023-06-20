import React, { createContext, useState } from "react";

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [newsData, setNewsData] = useState(null);

  return (
    <NewsContext.Provider value={{ newsData, setNewsData }}>
      {children}
    </NewsContext.Provider>
  );
};