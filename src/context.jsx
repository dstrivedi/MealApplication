import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';

const AppContext = React.createContext();

const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'

const getFavoritesFromLocalStorage = () => {
  let favorites = localStorage.getItem('favorites');
  if (favorites) {
    favorites = JSON.parse(localStorage.getItem('favorites'));
  } else {
    favorites = []
  }
  return favorites
}

const AppProvider = ({ children }) => {

  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [selectedMeal, setSelectedMeal] = useState(null)
  const [favoriteMeals, setFavoriteMeals] = useState(getFavoritesFromLocalStorage())

  const addToFavorites = (idMeal) => {
    const meal = meals.find((meal) => meal.idMeal === idMeal);
    const alreadydFavroite = favoriteMeals.find((meal) => meal.idMeal === idMeal);
    if (alreadydFavroite) return;
    const updateFavoriteMeals = [...favoriteMeals, meal];
    // console.log(meal, alreadydFavroite, favoriteMeals, updateFavoriteMeals)
    localStorage.setItem('favorites', JSON.stringify(updateFavoriteMeals));
    setFavoriteMeals(updateFavoriteMeals);
  }

  const removeFavoriteMeal = (idMeal) => {
    const updateFavorites = favoriteMeals.filter((meal) => meal.idMeal !== idMeal);
    localStorage.setItem('favorites', JSON.stringify(updateFavorites));
    setFavoriteMeals(updateFavorites);
  }

  const selectMeal = (idMeal, favoriteMeal) => {
    let meal;
    if (favoriteMeal) {
      meal = favoriteMeals.find((meal) => meal.idMeal === idMeal);
    } else {
      meal = meals.find((meal) => meal.idMeal === idMeal);
    }
    setSelectedMeal(meal)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

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
        catch (error) {
        console.log(error)
        
      
    
    fetchData() */

    /*fetch("https://randomuser.me/api/")
    .then((res) => {
      return res.json()
      
    .then((data) => {
      console.log(data.results)
      
    .catch((err) => {
      console.log(err)
       */
    [searchTerm]
  });

  return (
    <AppContext.Provider value={{ loading, meals, setSearchTerm, fetchRandomMeals, showModal, closeModal, selectMeal, selectedMeal, favoriteMeals, addToFavorites, removeFavoriteMeal }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }

