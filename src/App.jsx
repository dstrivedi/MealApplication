import './App.css'

import Favorites from './components/Favorites';
import Modal from './components/Modal';
import Meals from './components/Meals';
import Search from './components/Search';

import { AppProvider } from './context'

export default function App() {
  return (
    <AppProvider>
{/*       <Search />
      <Favorites /> */}
      <Meals />
{/*       <Modal /> */}
    </AppProvider>
  )
}
