import { useState, createContext, useEffect } from 'react'
import RecipeList from './RecipeList'
import { sampleRecipes } from '../data/SampleRecipes'
import { recipeProps, recipeListProps } from './interfaces'
import { v4 as uuidv4 } from 'uuid'
import '../css/App.css'

export interface Store {
  handleRecipeAdd(): void
  handleRecipeDel(id: string): void
}

export const RecipeContext = createContext({} as Store)
const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes'

const App = () => {
  const [recipes, setRecipes] = useState(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (recipeJSON) {
      return JSON.parse(recipeJSON)
    } else {
      return sampleRecipes
    }
  })

  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    console.log(recipeJSON)
    if (recipeJSON != null) setRecipes(JSON.parse(recipeJSON))
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
  }, [recipes])

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
    const newRecipeList: recipeListProps = recipes.filter(
      (recipe: recipeProps) => recipe.id !== id,
    )
    setRecipes(newRecipeList)
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
