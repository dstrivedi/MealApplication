import { useState } from 'react';
import { useGlobalContext } from '../context.jsx';

const Search = () => {

  const [text, setText] = useState("")

  const { setSearchTerm, fetchRandomMeals } = useGlobalContext();

  const handleChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      setSearchTerm(text)
    }
  }

  const handleRandomMeal = () => {
    setText('')
    setSearchTerm('')
    fetchRandomMeals()
  }

  return <header className='search-container'>
    <form onSubmit={handleSubmit}>
      <input className='form-input' onChange={handleChange} value={text} type="text" placeholder="type favorite meal" />
      <button type="submit" className="btn">Search</button>
      <button type="btn" className="btn btn-hipster" onClick={handleRandomMeal}>Surprise me!</button>
    </form>
  </header>
}

export default Search