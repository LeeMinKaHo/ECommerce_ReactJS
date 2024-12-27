import React, { useState } from "react";

export const Counter = () => {
   const [quantity, setQuantity] = useState(1);
   return (
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
   );
};
