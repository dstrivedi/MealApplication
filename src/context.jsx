import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';

const AppContext = React.createContext();

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'

const AppProvider = ({ children }) => {

  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const fetchRandomMeals = () => {
    fetchMeals(randomMealUrl)
  }

  const fetchMeals = async (url) => {
    setLoading(true)
    try {
      const { data } = await axios(url);
      if (data.meals.length > 0) {
        setMeals(data.meals)
      } else {
        setMeals([])
      }
      // console.log(data);
    } catch (error) {
      console.log(error.response)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchMeals(allMealsUrl)
  }, [])

  useEffect(() => {
    if (!searchTerm) return
    fetchMeals(`${allMealsUrl}${searchTerm}`);
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
  }, [searchTerm])

  return (
    <AppContext.Provider value={{ loading, meals, setSearchTerm, fetchRandomMeals }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }

