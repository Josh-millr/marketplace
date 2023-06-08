import React, { useState, createContext } from "react";

export const FormDataContext = createContext();

/**
 * @usage getAllData()
 *
 * @usage getData([data1, data2, ...])
 *
 * @usage isDataPresent('data')
 *
 * @usage storeData({ key: data })
 *
 * */

export default function FormDataProvider({ children }) {
  const [currData, setCurrData] = useState({});

  const storeData = (newData) => {
    setCurrData({ ...currData, ...newData });
  };

  const getAllData = () => {
    return currData;
  };

  const getData = (data) => {
    const requestedData = {};

    data.forEach((request) => {
      if (request in currData) {
        requestedData[request] = currData[request];
      }
    });

    return requestedData;
  };

  const isDataPresent = (request) => request in currData;

  return (
    <FormDataContext.Provider
      value={{ storeData, getData, isDataPresent, getAllData }}
    >
      {children}
    </FormDataContext.Provider>
  );
}
