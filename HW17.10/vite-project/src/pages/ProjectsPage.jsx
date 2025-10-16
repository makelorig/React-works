import {Link} from 'react-router-dom'
function ProjectsPage(){
    return(<div className='ppage'>
        Мои проекты:
        <ul >
            <li>Проект:<Link to="/projects/1">ZOmBert атакует!</Link></li>
            <li>Проект:<Link to="/projects/2">Крутая змейка!</Link></li>
            <li>Проект:<Link to="/projects/3">Hundekot</Link></li>
        </ul>
    </div>)
}
export default ProjectsPage