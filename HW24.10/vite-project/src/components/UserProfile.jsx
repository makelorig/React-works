import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import Avatar from './Avatar.jsx'

function UserProfile(){
    const { user } = useContext(UserContext);
    return(
        <div className="user-profile">
            <h2>Информация о GJKMPJDFNTKT</h2>
            <p>Имя: {user.name}</p>
            <p>Email: {user.email}</p>
            <Avatar />
        </div>
    )
}
export default UserProfile