import { createContext, useState } from 'react';
export const UserContext = createContext(null);
export function UserProvider({children}){
    const [user, setUser] = useState({name: 'Иван Петров',email:'ivan@example.com'})
    const changeName = (newName) => {setUser({...user, name: newName})}
    return (<UserContext.Provider value={{user,changeName}}>{children}</UserContext.Provider>)
}