import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";

export const ProductQuantitySelector = ({ item }) => {
   const [quantity, setQuantity] = useState(1);
   const dispatch = useDispatch();
   const handleAddToCart = () => {
      dispatch(
         addToCart({
            id : item.id,
            name:item.name, // Thay thế bằng ID thực của sản phẩm
            price:item.price,
            thumbnail:item.thumbnail,
            quantity: quantity, // Số lượng hiện tại
         })
      );
   };
   return (
      <>
         <div>
            {" "}
            <div class="flex items-center w-max relative">
               {quantity > 1 ? (
                  <button
                     type="button"
                     class="text-lg block text-[0px] absolute left-4"
                     onClick={() => setQuantity(quantity - 1)}
                  >
                     <span class="text-2xl leading-[24px]">-</span>
                  </button>
               ) : (
                  <button
                     type="button"
                     class="text-lg block text-[0px] absolute left-4"
                     disabled
                  >
                     <span class="text-2xl leading-[24px]">-</span>
                  </button>
               )}

               <input
                  type="text"
                  class="w-[120px] h-[50px] border px-10 border-gray rounded-full text-center"
                  value={quantity}
               />
               <button
                  type="button"
                  class="text-lg block text-[0px] absolute right-4"
                  onClick={() => setQuantity(quantity + 1)}
               >
                  <span class="text-2xl leading-[24px]">+</span>
               </button>
            </div>
         </div>
         <button
            type="button"
            class="h-[50px] bg-black text-white font-semibold text-sm px-4 flex-1 rounded-full hover:bg hover:bg-white border hover:border-black hover:text-black transition-all"
            onClick={handleAddToCart}
         >
            Add To Cart
         </button>
      </>
   );
};
