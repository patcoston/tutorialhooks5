import { useState, createContext, useEffect } from 'react'
import RecipeList from './RecipeList'
import { sampleRecipes } from '../data/SampleRecipes'
import { recipeProps, recipeListProps } from './interfaces'
import { v4 as uuidv4 } from 'uuid'
import '../css/App.css'
import RecipeEdit from './RecipeEdit'

export interface RecipeContextValue {
  handleRecipeAdd(): void
  handleRecipeDel(id: string): void
  handleRecipeSelect(id: string): void
}

export const RecipeContext = createContext({} as RecipeContextValue)
const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes'

const App = () => {
  const [selectedRecipeId, setSelectedRecipeId] = useState('')
  const [recipes, setRecipes] = useState(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (recipeJSON) {
      return JSON.parse(recipeJSON)
    } else {
      return sampleRecipes
    }
  })
  const selectedRecipe: recipeProps = recipes.find(
    (recipe: recipeProps) => recipe.id === selectedRecipeId,
  )

  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if (recipeJSON != null) setRecipes(JSON.parse(recipeJSON))
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
  }, [recipes])

  const handleRecipeSelect = (id: string) => {
    setSelectedRecipeId(id)
  }

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
    handleRecipeSelect,
  }

  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes} />
      {selectedRecipe && <RecipeEdit recipe={selectedRecipe} />}
    </RecipeContext.Provider>
  )
}

export default App
