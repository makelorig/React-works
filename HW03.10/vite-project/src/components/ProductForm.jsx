import { useState } from "react"

function ProductForm({onAdd}) {
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("food")
    const [important, setImportant] = useState(false)
    function handleSubmit(event){
        event.preventDefault()
        const newProduct = {id:Date.now(),title,category,important}
        onAdd(newProduct)
        setTitle("")
        setCategory("food")
        setImportant(false)
    }
    return( 
        <form onSubmit={handleSubmit}>
            <label>Название продукта</label>
            <input type="text" value={title} onChange={(event)=>setTitle(event.target.value)} placeholder="Введите название продукта"/>
            <select value={category} onChange={(event)=>setCategory(event.target.value)}>
                <option value="food">Еда</option>
                <option value="drinks">Напитки</option>
                <option value="dessert">Десерт</option>
            </select>
            <label>Важно?</label>
            <input type="checkbox" checked={important} onChange={(event)=>setImportant(event.target.checked)}/>
            <button type="submit">Добавить</button>
        </form>
    )
}
export default ProductForm