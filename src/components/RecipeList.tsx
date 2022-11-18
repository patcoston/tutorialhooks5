import { FC, useContext } from 'react'
import { RecipeContextValue, RecipeContext } from './App'
import Recipe from './Recipe'
import { recipeListProps } from './interfaces'

const RecipeList: FC<recipeListProps> = ({ recipes }) => {
  const useStore = () => useContext<RecipeContextValue>(RecipeContext)
  const { handleRecipeAdd } = useStore()
  return (
    <div className="recipe-list">
      <div>
        {recipes.map(recipe => (
          <Recipe key={recipe.id} {...recipe} />
        ))}
      </div>
      <div className="recipe-list__add-recipe-btn-container">
        <button className="btn btn--primary" onClick={handleRecipeAdd}>
          Add Recipe
        </button>
      </div>
    </div>
  )
}

export default RecipeList
