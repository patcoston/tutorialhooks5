export interface IngredientProps {
  id: string
  name: string
  amount: string
}

export interface IngredientListProps {
  ingredients: IngredientProps[]
}

export interface recipeProps {
  id: string
  name: string
  cookTime: string
  servings: number
  instructions: string
  ingredients: IngredientProps[]
}

export interface Recipe {
  id: string
  name: string
  cookTime: string
  servings: number
  instructions: string
  ingredients: IngredientProps[]
}

export interface recipeListProps {
  recipes: Recipe[]
}
