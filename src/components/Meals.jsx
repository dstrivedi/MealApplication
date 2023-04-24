
import { useGlobalContext } from '../context';
import { BsHandThumbsUp } from "react-icons/bs";

const Meals = () => {
  const { loading, meals, selectMeal } = useGlobalContext()
  if (loading) {
    return <section className='section'>
      <h4>Loading....</h4>
    </section>
  }
  if(meals.length == 0) {
    return <section className="section">
      <h4>No items matched your search criteria. Please try again later.</h4>
    </section>
  }
  return (
    <section className="section-center">
      {
        meals.map(singleMeal => {
          const { idMeal, strMeal: title, strMealThumb: image } = singleMeal

          return (
            <article key={idMeal} className="single-meal">
              <img src={image} className="img" onClick={() => selectMeal(idMeal)}/>
              <footer>
                <h5>{title}</h5>
                <button className="like-btn"><BsHandThumbsUp /></button>
              </footer>
            </article>
          )
        })
      }
    </section>
  )
}

export default Meals