import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { decreaseCartQuantity, increateCartQuantity, removeFromCart } from "../../features/cart/cartSlice";
import { Button, notification, Space } from "antd";
export const Shopping_cart = () => {
   const [api, contextHolder] = notification.useNotification();
   
   const openNotificationWithIcon = (type) => {
      if(type === "success"){
         api[type]( {
            message: "Notification Title",
            description: "The cart item has been successfully removed.",
         });
      }
      else{
         api[type]( {
            message: "Notification Title",
            description: "There was an issue removing the cart item.",
         });
      }
   };
   
   const carts = useSelector((state) => state.cart);
   const dispatch = useDispatch();
   const handleRemoveCart = (id) => {
      const item = carts.find(cart => cart.id === id);  // Tìm sản phẩm để thông báo
      try {
         dispatch(removeFromCart({ id }));
         openNotificationWithIcon(
            "success", 
           
         );
      } catch (error) {
         openNotificationWithIcon(
            "error", 
         );
      }
   };

   return (
      <>
         {contextHolder}
         <section className="">
            <div className="pt-20">
               <h2 className="text-3xl font-semibold text-center">
                  Shopping Cart
               </h2>

               <div className="container">
                  <div className="grid grid-cols-6 mt-10 gap-8">
                     <div className="col-span-4">
                        <div className="border border-gray rounded-lg">
                           <div className="flex">
                              <div className="p-5 border border-gray w-2/4 flex items-center justify-center">
                                 Product
                              </div>
                              <div className="p-5 border border-gray w-1/4 flex items-center justify-center">
                                 Quantity
                              </div>
                              <div className="p-5 border border-gray w-1/4 flex items-center justify-center">
                                 Total
                              </div>
                              <div className="p-5 border border-gray w-1/4 flex items-center justify-center"></div>
                           </div>
                           {/* SHOW LIST CART */}
                           {carts.map((cart) => (
                              <div className="flex">
                                 <div className="p-5 border border-gray w-2/4">
                                    <div className="flex items-center gap-3">
                                       <div className="w-32 overflow-hidden">
                                          <img
                                             className="image"
                                             src={cart.thumbnail}
                                             alt=""
                                          />
                                       </div>
                                       <div>
                                          <p className="text-xs uppercase">
                                             {cart.name}
                                          </p>
                                          <span className="text-xs">
                                             ${cart.price}
                                          </span>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="p-5 border border-gray w-1/4 flex justify-center">
                                    <div className="flex items-center w-max relative">
                                       <button
                                          type="button"
                                          className="text-lg block text-[0px] absolute left-4"
                                          onClick={ () => dispatch( decreaseCartQuantity({id : cart.id}) ) }
                                       >
                                          <span className="text-2xl leading-[24px]">
                                             -
                                          </span>
                                       </button>
                                       <input
                                          type="text"
                                          className="w-[120px] h-[40px] border px-10 border-black rounded-full text-center"
                                          value={cart.quantity}
                                       />
                                       <button
                                          type="button"
                                          className="text-lg block text-[0px] absolute right-4"
                                          onClick={ () =>dispatch( increateCartQuantity( {id: cart.id}) )  }
                                       >
                                          <span className="text-2xl leading-[24px]">
                                             +
                                          </span>
                                       </button>
                                    </div>
                                 </div>
                                 <div className="p-5 border border-gray w-1/4 flex items-center justify-center">
                                    ${cart.quantity * cart.price}
                                 </div>
                                 <div className="p-5 border border-gray w-1/4 flex items-center justify-center">
                                    {/* DELETE BUTTON */}
                                    <button type="button">
                                       <img
                                          onClick={ () => handleRemoveCart(cart.id) }
                                          className="block size-5"
                                          src="images/ico_trash.png"
                                          alt=""
                                       />
                                    </button>
                                 </div>
                              </div>
                           ))}
                        </div>
                        {/* Block for help */}
                        <div className="mt-9">
                           <p className="text-md">
                              Special instructions for seller
                           </p>

                           <textarea
                              name=""
                              id=""
                              placeholder="how can we help you?"
                              className="text-md mt-3 border border-gray p-5 w-full"
                              rows="5"
                           ></textarea>
                        </div>
                     </div>
                     <div className="col-span-2">
                        <div className="p-7 bg-[#f7f4ef] rounded-lg">
                           <h3 className="uppercase font-medium text-sm">
                              FREE SHIPPING ON ORDERS $100.00
                           </h3>
                           <p className="text-sm mt-2">
                              Congratulations , you've got free shipping!
                           </p>
                           <p className="bg-[#14c100] w-full h-1 mt-5"></p>
                        </div>

                        <div className="p-6 mt-4 bg-[#f6f6f6] rounded-lg">
                           <span>Coupon</span>
                           <p className="mt-2 mb-6 text-md text-lightGray">
                              * Discount will be calculated and applied at
                              checkout
                           </p>
                           <input
                              type="text"
                              className="h-10 px-6 text-sm border border-gray rounded-md w-full"
                              placeholder="Coupon code"
                           />
                           {/* Tổng tiền */}
                           <p className="mt-6 font-semibold">
                              Total: $
                              {carts
                                 .reduce(
                                    (accumulator, currentValue) =>
                                       accumulator +
                                       currentValue.price *
                                          currentValue.quantity,
                                    0
                                 )
                                 .toFixed(2)}
                           </p>
                           <NavLink
                              to="/order-detail"
                              className="flex items-center justify-center h-[50px] mt-6 bg-black w-full text-white font-semibold text-sm px-4 flex-1 rounded-full hover:bg hover:bg-white border hover:border-black hover:text-black transition-all"
                           >
                              Check out
                           </NavLink>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className="pt-12 pb-12"></section>
      </>
   );
};
