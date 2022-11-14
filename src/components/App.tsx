import { useState } from 'react'
import RecipeList from './RecipeList'
import { v4 as uuidv4 } from 'uuid'
import '../css/App.css'

const sampleRecipes = [
  {
    id: '1',
    name: 'Plain Chicken',
    cookTime: '1:45',
    servings: 3,
    instructions:
      '1. Put salt on chicken 2.\nPut chicken in oven 3.\nEat chicken\n',
    ingredients: [
      {
        id: '1',
        name: 'Chicken',
        amount: '2 Pounds',
      },
      {
        id: '2',
        name: 'Salt',
        amount: '1 Tbs',
      },
    ],
  },
  {
    id: '2',
    name: 'Plain Pork',
    cookTime: '2:30',
    servings: 5,
    instructions: '1. Put paprika on pork 2.\nPut pork in oven 3.\nEat pork\n',
    ingredients: [
      {
        id: '1',
        name: 'Pork',
        amount: '3 Pounds',
      },
      {
        id: '2',
        name: 'Paprika',
        amount: '2 Tbs',
      },
    ],
  },
]

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
    <RecipeList
      recipes={recipes}
      handleRecipeAdd={handleRecipeAdd}
      handleRecipeDel={handleRecipeDel}
    />
  )
}

export default App
