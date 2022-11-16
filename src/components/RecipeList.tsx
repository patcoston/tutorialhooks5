import React, { FC, createContext, useContext } from 'react'
import { Store } from '../store/StoreProvider'
import Recipe from './Recipe'
//import { recipeType } from './types'
import { recipeListProps } from './interfaces'

const RecipeList: FC<recipeListProps> = ({ recipes }) => {
  const StoreContext = createContext({} as Store)
  const useStore = () => useContext<Store>(StoreContext)
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
