import React from "react";

export const Cart_Quantity_Control = ({ id, quantity }) => {
   return (
      <div className="p-5 border border-gray w-1/4 flex justify-center">
         <div className="flex items-center w-max relative">
            <button
               type="button"
               className="text-lg block text-[0px] absolute left-4"
            >
               <span className="text-2xl leading-[24px]">-</span>
            </button>
            <input
               type="text"
               className="w-[120px] h-[40px] border px-10 border-black rounded-full text-center"
               value={quantity}
            />
            <button
               type="button"
               className="text-lg block text-[0px] absolute right-4"
              
            >
               <span className="text-2xl leading-[24px]">+</span>
            </button>
         </div>
      </div>
   );
};
