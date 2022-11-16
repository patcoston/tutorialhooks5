import { useState, useContext } from 'react'
import StoreProvider from '../store/StoreProvider'
import RecipeList from './RecipeList'
import { sampleRecipes } from '../data/SampleRecipes'
import { v4 as uuidv4 } from 'uuid'
import '../css/App.css'

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

  return (
    <StoreProvider
      handleRecipeAdd={handleRecipeAdd}
      handleRecipeDel={handleRecipeDel}
    >
      <RecipeList recipes={recipes} />
    </StoreProvider>
  )
}

export default App
