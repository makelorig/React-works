import './App.css'
import { NavLink } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import RecipeListPage from './pages/RecipeListPage'
import RecipeDetailPage from './pages/RecipeDetailPage'
import NotFoundPage from './pages/NotFoundPage'
function App() {
  return (
    <>
    <header>
      <nav>
        <NavLink to="/recipes">Рецепты </NavLink>
        <NavLink to="/">Главная</NavLink>
      </nav>
    </header>
      <Routes>
        <Route path="/" element={<h1>Добро пожаловать в книгу рецептов!</h1>}/>
        <Route path="/recipes" element={<RecipeListPage/>}/>
        <Route path="/recipes/:recipeId" element={<RecipeDetailPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </>
  )
}
export default App