import React, { FC } from 'react'
import Recipe from './Recipe'
//import { recipeType } from './types'
import { recipeListProps } from './interfaces'

const RecipeList: FC<recipeListProps> = props => {
  const { recipes, handleRecipeAdd, handleRecipeDel } = props
  return (
    <div className="recipe-list">
      <div>
        {recipes.map(recipe => (
          <Recipe
            key={recipe.id}
            handleRecipeDel={handleRecipeDel}
            {...recipe}
          />
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
