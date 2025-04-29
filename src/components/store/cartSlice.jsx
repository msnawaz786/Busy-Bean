import { createSlice } from "@reduxjs/toolkit";

const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

const cartSlice = createSlice({
  name: "cart",
  initialState: savedCart,
  reducers: {
    add(state, action) {
      const existingItem = state.find((item) => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity = action.payload.quantity;
      } else {
        state.push({
          ...action.payload,
          quantity: action.payload.quantity || 1,
        });
      }

      localStorage.setItem("cart", JSON.stringify(state));
    },

    remove(state, action) {
      const updatedCart = state.filter((item) => item.id !== action.payload);

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    },
    increase(state, action) {
      const item = state.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },
    decrease(state, action) {
      const item = state.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },
    clearCart(state) {
      localStorage.removeItem("cart");
      return [];
    },
    
  },
});

export default cartSlice.reducer;
export const { add, remove, increase, decrease , clearCart} = cartSlice.actions;
// store/cartSlice.js

export const selectTotalPrice = (state) =>
  state.cart.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
