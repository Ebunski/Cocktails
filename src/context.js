import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";
import axios from "axios";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsloading] = useState(true);

  async function getData() {
    try {
      const items = await axios.get(`${url}`);
      setData(items.data.drinks);
      setIsloading(false);
    } catch (err) {
      console.err(err);
      setIsloading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        //states
        data,
        isLoading,
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
