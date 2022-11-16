import React, { FC, createContext, useContext } from 'react'
import { Store } from '../store/StoreProvider'
import { recipeProps } from './interfaces'
//import { IngredientListProps } from './IngredientList'
import IngredientList from './IngredientList'

const Recipe: FC<recipeProps> = props => {
  const { id, name, cookTime, servings, instructions, ingredients } = props
  const StoreContext = createContext({} as Store)
  const useStore = () => useContext<Store>(StoreContext)
  const { handleRecipeDel } = useStore()
  return (
    <div className="recipe">
      <header className="recipe__header">
        <h3 className="recipe__title">{name}</h3>
        <div>
          <button className="btn btn--primary mr-1">Edit</button>
          <button
            className="btn btn--danger"
            onClick={() => handleRecipeDel(id)}
          >
            Delete
          </button>
        </div>
      </header>
      <div className="recipe__row">
        <span className="recipe__label">Cook Time:</span>
        <span className="recipe__value">{cookTime}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Servings:</span>
        <span className="recipe__value">{servings}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Instructions:</span>
        <div className="recipe__value recipe__value--instructions recipe__value--indented">
          {instructions}
        </div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label">Ingredients:</span>
        <div className="recipe__value recipe__value--indented">
          <IngredientList ingredients={ingredients} />
        </div>
      </div>
    </div>
  )
}

export default Recipe
