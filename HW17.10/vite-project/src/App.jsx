import './App.css'
import {Route} from 'react-router-dom'
import {Routes} from 'react-router-dom'
import AboutPage from './pages/AboutPage.jsx'
import HomePage from './pages/HomePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import SingleProjectPage from './pages/SingleProjectPage.jsx'
import Header from './components/Header'

function App() {
  return (
    <>  
    <Header/>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/projects" element={<ProjectsPage />}></Route>
        <Route path="/projects/:projectId" element={<SingleProjectPage/>}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </>
  )
}

export default App
