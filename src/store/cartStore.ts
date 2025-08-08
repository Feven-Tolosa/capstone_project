import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type CartItem = {
  id: number
  name: string
  price: number
  image: string
  quantity: number
}

type CartStore = {
  cart: CartItem[]
  addItem: (item: Omit<CartItem, 'quantity'>) => void
  removeItem: (id: number) => void
  clearCart: () => void
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      cart: [],
      addItem: (item) =>
        set((state) => {
          const existing = state.cart.find((i) => i.id === item.id)
          if (existing) {
            return {
              cart: state.cart.map((i) =>
                i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
              ),
            }
          }
          return { cart: [...state.cart, { ...item, quantity: 1 }] }
        }),
      removeItem: (id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        })),
      clearCart: () => set({ cart: [] }),
    }),
    { name: 'furniture-cart' }
  )
)
