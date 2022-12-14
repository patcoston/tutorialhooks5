export interface IngredientProps {
  id: string
  name: string
  amount: string
}

export interface IngredientObjProps {
  ingredient: IngredientProps
  handleIngredientChange(ingredient: IngredientProps): void
  handleIngredientDel(id: string): void
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

export interface recipeObjProp {
  recipe: recipeProps
}

export interface recipeListProps {
  recipes: recipeProps[]
}
