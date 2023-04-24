import './App.css'

import Favorites from './components/Favorites';
import Modal from './components/Modal';
import Meals from './components/Meals';
import Search from './components/Search';


import { useGlobalContext } from './context'

export default function App() {
  const { favoriteMeals, showModal } = useGlobalContext()
  return (
    <main>
      <Search />
      {favoriteMeals.length >0 && <Favorites />}
      <Meals />
      {showModal && <Modal />}
    </main>
  )
}
