import { useParams } from 'react-router-dom';
import recipes from '../recipes';

function RecipeDetailPage(){
  const {recipeId} = useParams()
  const recipe = recipes.find(r =>r.id === parseInt(recipeId))
  return (
    <div className='RDP'>
      <h1>{recipe.name}</h1><h2>Ингредиенты: </h2>
      <ul>{recipe.ingredients.map((ingredient, index)=>(<li key={index}>{ingredient}</li>))}</ul>
      <h2>Инструкция: </h2><p>{recipe.instructions}</p>
    </div>
  )
}
export default RecipeDetailPage