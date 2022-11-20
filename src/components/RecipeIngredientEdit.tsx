import { FC } from 'react'
import { IngredientObjProps } from './interfaces'

const RecipeIngredientEdit: FC<IngredientObjProps> = ({
  ingredient,
  handleIngredientChange,
}) => {
  const { id, name, amount } = ingredient
  return (
    <>
      <input
        className="recipe-edit__input"
        type="text"
        value={name}
        onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleIngredientChange({
            id,
            name: e.target.value,
            amount,
          })
        }
      />
      <input
        className="recipe-edit__input"
        type="text"
        value={amount}
        onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleIngredientChange({
            id,
            name,
            amount: e.target.value,
          })
        }
      />
      <button className="btn btn--danger">&times;</button>
    </>
  )
}

export default RecipeIngredientEdit
