import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const wishListSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishList(state, action) {
      console.log(state); // Kiểm tra danh sách hiện tại
      console.log(action); // Kiểm tra payload được gửi vào

      const wishListItem = state.find((item) => item.id === action.payload.id);
      if (!wishListItem) {
        state.push(action.payload); // Thêm sản phẩm mới vào danh sách
      }
    },
    RemoveItemInWishList(state, action) {
        return state.filter((wishList) => wishList.id !== action.payload.id);
    }
    
  },
});

export const { addToWishList } = wishListSlice.actions;

export default wishListSlice.reducer;
