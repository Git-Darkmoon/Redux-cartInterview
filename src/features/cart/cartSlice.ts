import { createSlice } from "@reduxjs/toolkit"
import { Product } from "../../types"

type CartState = {
  cartItems: Product[]
  amount: number
  total: number
}

const initialState: CartState = {
  cartItems: [],
  amount: 0,
  total: 0,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = []
      state.total = 0
    },
    addToCart: (state, action) => {
      state.cartItems.push(action.payload)
      state.amount += 1
      state.total += action.payload.price
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      )
      state.amount -= 1
      state.total -= action.payload.price
    },

    // updateAmount: (state, action) => {
    //     state.amount = action.payload
    // },
    // updateTotal: (state, action) => {
    //     state.total = action.payload
    // },
  },
})

export const { clearCart, addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer
