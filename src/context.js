import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";
import axios from "axios";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const getData = useCallback(
    async function getData() {
      setIsLoading(true);
      try {
        const items = await axios.get(
          `${url}${searchTerm.toLowerCase() || "a"}`
        );
        setData(items.data.drinks);
        setIsLoading(false);
        console.time();
        console.timeEnd();
      } catch (err) {
        console.error(err);
        setIsLoading(false);
      }
    },
    [searchTerm]
  );

  useEffect(() => {
    getData();
  }, [searchTerm, getData]);

  return (
    <AppContext.Provider
      value={{
        //states
        data,
        isLoading,
        searchTerm,

        //functions
        setSearchTerm,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
