import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

function EditProfile(){
    const {user,changeName} = useContext(UserContext)
    const [newName,setNewName] = useState(user.name)
    function handleSubmit(e){
        e.preventDefault()
        changeName(newName)
    }
    return(
        <div className="">
            <h3>Сменить имя</h3>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <input type="text" value={newName} onChange={(e)=>setNewName(e.target.value)}/>
                <button type="submit">Сщхр</button>
            </form>
        </div>
    )
}
export default EditProfile