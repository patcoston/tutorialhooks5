import { FC } from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit'
import { recipeProps } from './interfaces'

const RecipeEdit: FC<recipeProps> = ({
  name,
  cookTime,
  servings,
  instructions,
}) => {
  return (
    <div className="recipe-edit">
      <div className="recipe-edit__remove-button-container">
        <button className="btn recipe-edit__remove-button">&times;</button>
      </div>
      <div className="recipe-edit__details-grid">
        <label htmlFor="name" className="recipe-edit__label">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          className="recipe-edit__input"
        />
        <label htmlFor="cookTime" className="recipe-edit__label">
          Cook Time
        </label>
        <input
          type="text"
          name="cookTime"
          id="cookTime"
          value={cookTime}
          className="recipe-edit__input"
        />
        <label htmlFor="serving" className="recipe-edit__label">
          Serving
        </label>
        <input
          type="number"
          name="serving"
          id="serving"
          min="1"
          value={servings}
          className="recipe-edit__input"
        />
        <label htmlFor="instruction" className="recipe-edit__label">
          Instructions
        </label>
        <textarea
          name="instructions"
          id="instructions"
          className="recipe-edit__input"
        >
          {instructions}
        </textarea>
      </div>
      <br />
      <label className="recipe-edit__label">Ingredients</label>
      <div className="recipe-edit__ingredient-grid">
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        <RecipeIngredientEdit />
        <RecipeIngredientEdit />
      </div>
      <div className="recipe-edit__add-ingredient-btn-container">
        <button className="btn btn--primary">Add Ingredient</button>
      </div>
    </div>
  )
}

export default RecipeEdit
