import { FC } from 'react'
import { IngredientObjProps } from './interfaces'

const RecipeIngredientEdit: FC<IngredientObjProps> = ({ ingredient }) => {
  const { name, amount } = ingredient
  return (
    <>
      <input className="recipe-edit__input" type="text" value={name} />
      <input className="recipe-edit__input" type="text" value={amount} />
      <button className="btn btn--danger">&times;</button>
    </>
  )
}

export default RecipeIngredientEdit
