import { useState, createContext, useContext } from 'react'
import RecipeList from './RecipeList'
import { sampleRecipes } from '../data/SampleRecipes'
import { v4 as uuidv4 } from 'uuid'
import '../css/App.css'

export interface Store {
  handleRecipeAdd(): void
  handleRecipeDel(id: string): void
}

export const RecipeContext = createContext({} as Store)

const App = () => {
  const [recipes, setRecipes] = useState(sampleRecipes)

  const handleRecipeAdd = () => {
    const newRecipe = {
      id: uuidv4(),
      name: 'New',
      cookTime: '1:00',
      servings: 1,
      instructions: 'Instruct.',
      ingredients: [{ id: uuidv4(), name: 'Name', amount: '1 Tbs' }],
    }

    setRecipes([...recipes, newRecipe])
  }

  const handleRecipeDel = (id: string) => {
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }

  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDel,
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes} />
    </RecipeContext.Provider>
  )
}

export default App
