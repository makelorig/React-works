import {Link} from 'react-router-dom'
import {useParams} from 'react-router-dom'
function SingleProjectPage(){
    const params = useParams()
    return(<div className='sppage'>
        <h1>Проект  №{params.projectId}</h1>
        {params.projectId==1&&<p>Бобрет</p>}
        {params.projectId==2&&<p>Ура,ВИШЕНКА!!!!</p>}
        {params.projectId==3&&<p>Моя самя люб игр.</p>}
        <Link to="/projects">Вернуться к списку проектов</Link>
    </div>)
}
export default SingleProjectPage