import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';

const AppContext = React.createContext();

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'

const AppProvider = ({ children }) => {

  const [meals,setMeals] = useState([])
  
  const fetchMeals = async (url) => {
    try {
      const {data} = await axios(url);
      setMeals(data.meals)
      // console.log(data);
    } catch (error) {
      console.log(error.response)
    }
  }
  useEffect(() => {
    fetchMeals(allMealsUrl);
    /*const fetchData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/');
        const data = await response.json();
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData() */

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
    <AppContext.Provider value={{ meals }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }

