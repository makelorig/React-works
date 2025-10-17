import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.jsx";

function ThemeSwitcher(){
    const { theme, toggleTheme } = useContext(ThemeContext);
    return(
       <div className="theme-switcher">
            <button onClick={toggleTheme}>Переключить на {theme === 'light' ? 'темную' : 'светлую'} тему</button>
    </div>
    )
}
export default ThemeSwitcher