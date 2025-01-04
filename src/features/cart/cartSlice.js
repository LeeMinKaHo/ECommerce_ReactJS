import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

export const cartSlice = createSlice({
   name: "cart",
   initialState,
   reducers: {
      addToCart(state, action) {
         const item = state.find((item) => item.id === action.payload.id);

         if (item) {
            // Tăng số lượng sản phẩm
            item.quantity += action.payload.quantity || 1;
         } else {
            // Thêm sản phẩm mới vào giỏ hàng
            state.push({
               ...action.payload,
               quantity: action.payload.quantity || 1,
            });
         }
      },
      removeFromCart(state, action) {
         // Loại bỏ sản phẩm khỏi giỏ hàng
         return state.filter((cart) => cart.id !== action.payload.id);
      },
      increateCartQuantity(state, action) {
         // Find the correct cart item by matching IDs
         const cartIndex = state.findIndex(
            (cart) => cart.id === action.payload.id
         );

         if (cartIndex !== -1) {
            // Increment the quantity of the cart item if it exists
            state[cartIndex].quantity += 1;
         }

         return state;
      },
      decreaseCartQuantity(state, action) {
         const cartIndex = state.findIndex(
            (cart) => cart.id === action.payload.id
         );

         if (cartIndex !== -1) {
            // Increment the quantity of the cart item if it exists
            if (state[cartIndex].quantity > 1) {
               state[cartIndex].quantity += 1;
            }
         }

         return state;
      },
   },
});

// Action creators are generated for each case reducer function
export const {
   addToCart,
   removeFromCart,
   increateCartQuantity,
   decreaseCartQuantity,
} = cartSlice.actions;

// Export reducer để sử dụng trong store
export default cartSlice.reducer;
