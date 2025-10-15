import { Link } from 'react-router-dom';
import recipes from '../recipes';

function RecipeListPage(){
  return (
    <div className='RLP'>
      <ul>{recipes.map(recipe =>(<li key={recipe.id}><Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link></li>))}</ul>
    </div>
  )
}
export default RecipeListPage