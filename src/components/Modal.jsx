import { useGlobalContext } from "../context";

const Modal = () => {
  const { selectedMeal, closeModal } = useGlobalContext();

  const {strMealThumb : image, strMeal:title, strInstructions: instructions, strSource:source} = selectedMeal
  
  return <aside className="modal-overlay">
    <div className="modal-container">
      <img src={image} className="img modal-img"/>
      <div className="modal-content">
        <h4>{title}</h4>
        <p>Cooking instructions</p>
        <p>{instructions}</p>
        <a href={source} target="_blank">Original source</a>
        <button type="btn" className="btn btn-hipster close-btn" onClick={closeModal}>Close</button>
      </div>
    </div>
  </aside>
}

export default Modal