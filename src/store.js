import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice'; // Đảm bảo import đúng cartReducer

export const store = configureStore({
  reducer: {
    cart: cartReducer, // Sử dụng cartReducer trong slice đã tạo
  },
});
