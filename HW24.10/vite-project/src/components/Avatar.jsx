import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function Avatar(){
  const { user } = useContext(UserContext);
  return (<div><img src={`https://i.pravatar.cc/100?u=${user.email}`} alt={user.name}/></div>)
}
export default Avatar
