import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";
import axios from "axios";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [rawData, setRawData] = useState([]);
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsloading] = useState(true);

  async function getData() {
    try {
      const items = await axios.get(`${url}`);
      setRawData(items.data.drinks);
      setData(items.data.drinks);
      setIsloading(false);
      console.time();
      console.timeEnd();
    } catch (err) {
      console.error(err);
      setIsloading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    searchHandler();
  }, [searchTerm]);

  function searchHandler() {
    const newData = rawData.filter((x) =>
      x.strDrink.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setData(newData);
  }
  return (
    <AppContext.Provider
      value={{
        //states
        data,
        isLoading,
        searchTerm,

        //functions
        setSearchTerm,
        searchHandler,
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
