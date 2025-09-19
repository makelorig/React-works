import { useState } from 'react'
import './App.css'
import Modal from './components/Modal'
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal=()=>{
    setIsModalOpen(true);
  };
  const closeModal=()=>{
    setIsModalOpen(false);
  };
  return (
    <>
      {isModalOpen && (<Modal onClose={closeModal}><p>Здесь могла быть ваша реклама!</p></Modal>)}
      <button onClick={openModal}>Открыть</button>
      <h1>Окно</h1>
    </>
  )
}
export default App
