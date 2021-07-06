import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "87b25f16ddd949f59d5dfb47fc8d335f";

  useEffect(() => {
    axios
      .get(`https://newsapi.org/v2/everything?q=bitcoin&apiKey=${apiKey}`)
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};
