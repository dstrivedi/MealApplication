import React, { useContext , useEffect, useState} from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        console.log(data)
      } catch(error) {
        console.log(error)
      }
    }

    fetchData()
    /*fetch("https://randomuser.me/api/")
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      console.log(data.results)
    })
    .catch((err) => {
      console.log(err)
    }) */
  }, [])
  
  return (
    <AppContext.Provider value="hello">
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export {AppContext, AppProvider} 

