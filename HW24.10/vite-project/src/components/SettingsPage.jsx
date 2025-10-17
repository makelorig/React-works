import UserProfile from './UserProfile.jsx'
import ThemeSwitcher from './ThemeSwitcher.jsx'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext.jsx'
import EditProfile from './EditProfile.jsx'

function SettingsPage(){
    const { theme } = useContext(ThemeContext)
    return(
        <div className={`settings-page ${theme}`}>
            <UserProfile/>
            <ThemeSwitcher/>
            <EditProfile/>
        </div>
    )
}
export default SettingsPage