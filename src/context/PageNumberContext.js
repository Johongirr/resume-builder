import React, { useState } from "react";

export const PageNumberContextProvider = React.createContext();
function PageNumberContext({ children }) {
  const [pageNumber, setPageNumber] = useState(1);

  const incrementPageNumber = () => {
    setPageNumber(pageNumber + 1);
  };
  const decrementPageNumber = () => {
    setPageNumber(pageNumber - 1);
  };
  return (
    <PageNumberContextProvider.Provider
      value={{ pageNumber, incrementPageNumber, decrementPageNumber }}
    >
      {children}
    </PageNumberContextProvider.Provider>
  );
}

export default PageNumberContext;
