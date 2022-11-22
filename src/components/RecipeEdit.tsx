import { FC, FormEventHandler, useContext } from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit'
import { RecipeContextValue, RecipeContext } from './App'
import { recipeObjProp } from './interfaces'
import { IngredientProps } from './interfaces'
import { v4 as uuidv4 } from 'uuid'

const RecipeEdit: FC<recipeObjProp> = ({ recipe }) => {
  const { id, name, cookTime, servings, instructions, ingredients } = recipe
  const useStore = () => useContext<RecipeContextValue>(RecipeContext)
  const { handleRecipeEdit } = useStore()
  type changeType = {
    name?: string
    cookTime?: string
    servings?: number
    instructions?: string
    ingredients?: IngredientProps[]
  }
  const handleChange = (changes: changeType) => {
    handleRecipeEdit({ ...recipe, ...changes })
  }
  const handleIngredientChange = (ingredient: IngredientProps) => {
    const newIngredients = [...recipe.ingredients]
    const index = newIngredients.findIndex(i => i.id === ingredient.id)
    newIngredients[index] = ingredient
    handleChange({ ingredients: newIngredients })
  }
  const handleIngredientDel = (id: string) => {
    const ingredients = [...recipe.ingredients]
    const newIngredients = ingredients.filter(i => i.id !== id)
    handleChange({ ingredients: newIngredients })
  }
  const handleIngredientAdd = () => {
    const ingredients = [...recipe.ingredients]
    ingredients.push({
      id: uuidv4(),
      name: 'NAME',
      amount: 'AMOUNT',
    })
    console.log('handleIngredientAdd')
    handleChange({ ingredients: ingredients })
  }
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange({ name: e.target.value })
          }
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange({ cookTime: e.target.value })
          }
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange({ servings: parseInt(e.target.value) || 0 })
          }
        />
        <label htmlFor="instruction" className="recipe-edit__label">
          Instructions
        </label>
        <textarea
          name="instructions"
          id="instructions"
          className="recipe-edit__input"
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            handleChange({ instructions: e.target.value })
          }
          value={instructions}
        />
      </div>
      <br />
      <label className="recipe-edit__label">Ingredients</label>
      <div className="recipe-edit__ingredient-grid">
        <div>Name</div>
        <div>Amount</div>
        <div></div>
        {ingredients.map(ingredient => {
          return (
            <RecipeIngredientEdit
              key={ingredient.id}
              ingredient={ingredient}
              handleIngredientChange={handleIngredientChange}
              handleIngredientDel={handleIngredientDel}
            />
          )
        })}
      </div>
      <div className="recipe-edit__add-ingredient-btn-container">
        <button
          className="btn btn--primary"
          onClick={() => handleIngredientAdd()}
        >
          Add Ingredient
        </button>
      </div>
    </div>
  )
}

export default RecipeEdit
