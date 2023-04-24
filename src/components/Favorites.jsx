import { useGlobalContext } from "../context"

const Favorites = () => {
  const { favoriteMeals, removeFavoriteMeal, selectMeal } = useGlobalContext();

  return <section className="favorites">
    <div className="favorites-content">
      <h5>Favorites</h5>
      <div className="favorites-container">
        {favoriteMeals.map((meal) => {
          const { idMeal, strMealThumb: image } = meal
          return (
            <div key={idMeal} className='favorite-item'>
              <img src={image} className="img favorite-img" onClick={() => selectMeal(idMeal, true)} />
              <button type="btn" className="remove-btn" onClick={() => removeFavoriteMeal(idMeal)}>remove</button>
            </div>
          )
        })}
      </div>
    </div>
  </section >
}

export default Favorites