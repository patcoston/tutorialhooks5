import { FC } from 'react'
import { IngredientProps } from './interfaces'

const Ingredient: FC<IngredientProps> = ({ name, amount }) => {
  return (
    <>
      <span>{name}</span>
      <span>{amount}</span>
    </>
  )
}

export default Ingredient
