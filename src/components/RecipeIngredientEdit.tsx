import { FC } from 'react'

const RecipeIngredientEdit: FC = () => {
  return (
    <>
      <input className="recipe-edit__input" type="text" />
      <input className="recipe-edit__input" type="text" />
      <button className="btn btn--danger">&times;</button>
    </>
  )
}

export default RecipeIngredientEdit
