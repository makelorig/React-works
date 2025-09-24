import { useState } from 'react'
import AccordionItem from './components/AccordionItem'
import faqData from './faqData'
import './App.css'

function App() {
  const [openItemId, setOpenItemId] = useState(null)
  function handleToggleItem(itemId){setOpenItemId(itemId === openItemId ? null : itemId)}
  return (
    <>
    <div>
      <h1>Часто задаваемые вопросы</h1>
      {faqData.map((item) => (<AccordionItem key={item.id} itemData={item} onToggle={handleToggleItem} isOpen={openItemId === item.id}/>))}
    </div>
    </>
  )
}
export default App