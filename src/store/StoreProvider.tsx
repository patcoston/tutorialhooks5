import { createContext, useContext, FC } from 'react'
import { handleRecipeAdd, handleRecipeDel } from '../components/App'

interface Store {
  handleRecipeAdd(): void
  handleRecipeDel(id: string): void
  children: React.ReactNode
}

const StoreContext = createContext({} as Store)

export const useStore = () => useContext<Store>(StoreContext)

const StoreProvider: FC<Store> = ({
  handleRecipeAdd,
  handleRecipeDel,
  children,
}) => {
  const store: Store = {
    handleRecipeAdd,
    handleRecipeDel,
    children,
  }

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export default StoreProvider
