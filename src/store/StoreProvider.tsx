import { createContext, FC } from 'react'

export interface Store {
  handleRecipeAdd(): void
  handleRecipeDel(id: string): void
  children: React.ReactNode
}

const StoreProvider: FC<Store> = ({
  handleRecipeAdd,
  handleRecipeDel,
  children,
}) => {
  const StoreContext = createContext({} as Store)

  const store: Store = {
    handleRecipeAdd,
    handleRecipeDel,
    children,
  }

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export default StoreProvider
