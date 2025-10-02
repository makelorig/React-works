import { useState } from 'react'
import './App.css'
import ProductForm from './components/ProductForm'
import ProductList from './components/ProductList'

function App() {
  const [products, setProducts] = useState([
    {id:1,title:"Сок",category:"drinks",important:true},
    {id:2,title:"Яблоки",category:"food",important:false},
    {id:3,title:"Кумыс",category:"drinks",important:false}])
  function addProduct(newProduct){setProducts((prev)=>[...prev,newProduct])}
  function removeProduct(id){setProducts((prev)=>prev.filter((product)=>product.id !== id))}
  function clearList(){setProducts([])}
  const total = products.length
  const importantCount = products.filter((p)=>p.important).length
  return (
    <>
      <h1>Работа powered by Роберт Коваль</h1><h6>(Николай Кузнецов)</h6>
      <ProductForm onAdd={addProduct} />
      <ProductList products={products} onRemove={removeProduct} />
      <p>Всего: {total}</p>
      <p>Важных: {importantCount}</p>
      {total > 0 && <button onClick={clearList}>Очистить список</button>}
    </>
  )
}
export default App