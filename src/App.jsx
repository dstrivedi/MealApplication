import './App.css'

import Favorites from './components/Favorites';
import Modal from './components/Modal';
import Meals from './components/Meals';
import Search from './components/Search';


import { useGlobalContext } from './context'

export default function App() {
  const { showModal } = useGlobalContext()
  return (
    <main>
      {<Search />
     /* <Favorites /> */}
      <Meals />
      {showModal && <Modal />}
    </main>
  )
}
