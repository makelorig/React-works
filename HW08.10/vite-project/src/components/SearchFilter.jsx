import { useEffect, useState } from "react";
import itemList from "../data";
function SearchFilter(){
    const [filter,setFilter]=useState("")
    const [filteredItems, setFilteredItems] = useState(itemList)
    useEffect(()=>{
        const newFilteredList = itemList.filter(item=>item.toLowerCase().includes(filter.toLowerCase()))
        setFilteredItems(newFilteredList)
    },[filteredItems])
    useEffect(()=>{document.title = 'Интерактивный фильтр';},[])
    return(
        <div className="filteredStyle">
            <input value={filter} placeholder="Текст" type="text" onChange={(e)=>setFilter(e.target.value)} className="searchBar"/>
            <ul>{filteredItems.map((item, index)=>(<li key={index}>{item}</li>))}</ul>
        </div>
    )
}
export default SearchFilter