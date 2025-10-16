import {NavLink} from 'react-router-dom'
function Header(){
    function getActiveLinkClass({isActive}){
        return isActive ? "nav-link active-link" : "nav-link";
    }
    return(
        <nav className='headr'>
            <NavLink to="/" className={getActiveLinkClass}>На главную </NavLink>
            <NavLink to="/about" className={getActiveLinkClass}>Обо мне </NavLink>
            <NavLink to="/projects" className={getActiveLinkClass}>Проекты</NavLink>
        </nav>
    )
}
export default Header