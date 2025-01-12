import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice'; // Đảm bảo import đúng cartReducer
import authReducer from './features/auth/authSlice';
import wishlistReducer from "./features/wishlist/wishList"
export const store = configureStore({
  reducer: {
    cart: cartReducer, // Sử dụng cartReducer trong slice đã tạo
    auth: authReducer,
    wishlist: wishlistReducer
  },
});
