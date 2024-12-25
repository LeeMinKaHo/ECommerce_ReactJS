import React from "react";

export const Order_detail = () => {
   return (
      <div class="container">
         <ul class="flex gap-2 items-center py-4">
            <li>
               <a class="text-sm" href="#none">
                  Home /{" "}
               </a>
            </li>
            <li>
               <a class="text-sm" href="#none">
                  Bathroom /{" "}
               </a>
            </li>
            <li>
               <a class="text-sm">Century Starburst Clock</a>
            </li>
         </ul>

         <div class="lg:grid grid-cols-5 gap-7 mt-4">
            <div class="col-span-3 flex gap-3">
               <ul class="flex flex-col gap-4">
                  <li class="w-[82px] cursor-pointer p-[10px] rounded-md border border-black hover:border-black transition-all">
                     <img
                        class="image"
                        src="./images/img_product_thumb.avif"
                        alt=""
                     />
                  </li>
                  <li class="w-[82px] cursor-pointer p-[10px] rounded-md border border-transparent hover:border-black transition-all">
                     <img
                        class="image"
                        src="./images/img_product_thumb2.webp"
                        alt=""
                     />
                  </li>
                  <li class="w-[82px] cursor-pointer p-[10px] rounded-md border border-transparent hover:border-black transition-all">
                     <img
                        class="image"
                        src="./images/img_product_thumb4.webp"
                        alt=""
                     />
                  </li>
               </ul>
               <div class="overflow-hidden">
                  <div class="rounded-xl overflow-hidden">
                     <img
                        src="./images/img_product_detail.webp"
                        class="image"
                        alt=""
                     />
                  </div>
               </div>
            </div>
            <div class="col-span-2 mt-6">
               <h2 class="text-xl lg:text-3xl font-semibold">
                  Century Starburst Clock
               </h2>
               <ul class="flex items-center gap-1 mt-4">
                  <li>
                     <img
                        class="size-[16px]"
                        src="./images/ico_star_active.png"
                        alt=""
                     />
                  </li>
                  <li>
                     <img
                        class="size-[16px]"
                        src="./images/ico_star_active.png"
                        alt=""
                     />
                  </li>
                  <li>
                     <img
                        class="size-[16px]"
                        src="./images/ico_star_active.png"
                        alt=""
                     />
                  </li>
                  <li>
                     <img
                        class="size-[16px]"
                        src="./images/ico_star_active.png"
                        alt=""
                     />
                  </li>
                  <li>
                     <img
                        class="size-[16px]"
                        src="./images/ico_star_gray.png"
                        alt=""
                     />
                  </li>
               </ul>

               <p class="mt-3 text-xl font-semibold">$70.00</p>

               <div class="mt-2 pt-2 border-t border-gray">
                  <p class="flex items-center gap-2 mt-2">
                     <img
                        class="w-5 block animate-flicker"
                        src="./images/ico_eye.png"
                        alt=""
                     />
                     <span class="font-medium text-sm">
                        35 people are viewing this right now
                     </span>
                  </p>
                  <p class="flex items-center gap-2 mt-4">
                     <img
                        class="w-5 block animate-zoomInOut"
                        src="./images/ico_fire.png"
                        alt=""
                     />
                     <span class="text-red-600 font-medium text-sm">
                        35 sold in last 18 hours
                     </span>
                  </p>
                  <p class="flex items-center gap-2 mt-6">
                     <img
                        class="w-5 block"
                        src="./images/ico_checked.png"
                        alt=""
                     />{" "}
                     <span class="text-green font-medium text-sm">
                        In stock
                     </span>
                  </p>

                  <p class="mt-5 text-midGray">
                     Curabitur egestas malesuada volutpat. Nunc vel vestibulum
                     odio, ac pellentesque lacus. Pellentesque dapibus nunc nec
                     est imperdiet, a malesuada sem rutrum
                  </p>

                  <div class="mt-6 flex items-center gap-3">
                     <div class="flex items-center w-max relative">
                        <button
                           type="button"
                           class="text-lg block text-[0px] absolute left-4"
                        >
                           <span class="text-2xl leading-[24px]">-</span>
                        </button>
                        <input
                           type="text"
                           class="w-[120px] h-[50px] border px-10 border-gray rounded-full text-center"
                           value="1"
                        />
                        <button
                           type="button"
                           class="text-lg block text-[0px] absolute right-4"
                        >
                           <span class="text-2xl leading-[24px]">+</span>
                        </button>
                     </div>

                     <button
                        type="button"
                        class="h-[50px] bg-black text-white font-semibold text-sm px-4 flex-1 rounded-full hover:bg hover:bg-white border hover:border-black hover:text-black transition-all"
                     >
                        Add To Cart
                     </button>
                     <button
                        type="button"
                        class="p-4 bg-white border border-[#e6e6e6] rounded-full"
                     >
                        <img class="w-4" src="./images/ico_heart.png" alt="" />
                     </button>
                  </div>

                  <ul class="flex items-center gap-4 mt-6">
                     <li>
                        <button
                           type="button"
                           class="flex items-center gap-4 text-sm font-medium"
                        >
                           <img
                              class="w-4"
                              src="./images/ico_reload.png"
                              alt=""
                           />
                           Compare
                        </button>
                     </li>
                     <li>
                        <button
                           type="button"
                           class="flex items-center gap-4 text-sm font-medium"
                        >
                           <img
                              class="w-4"
                              src="./images/ico_question.png"
                              alt=""
                           />
                           Question
                        </button>
                     </li>
                     <li>
                        <button
                           type="button"
                           class="flex items-center gap-4 text-sm font-medium"
                        >
                           <img
                              class="w-4"
                              src="./images/ico_shipping.png"
                              alt=""
                           />
                           Shipping info
                        </button>
                     </li>
                     <li>
                        <button
                           type="button"
                           class="flex items-center gap-4 text-sm font-medium"
                        >
                           <img
                              class="w-4"
                              src="./images/ico_share.png"
                              alt=""
                           />
                           Share
                        </button>
                     </li>
                  </ul>

                  <div class="flex items-center mt-6 mb-6 pt-6 pb-6 border-t border-b border-b-gray border-t-gray">
                     <div>
                        <img
                           class="block w-9"
                           src="./images/ico_shipping2.png"
                           alt=""
                        />
                     </div>
                     <p class="flex-1 ml-4 pl-4 border-l border-l-[#d9d9d9] text-sm">
                        Order in the next 22 hours 45 minutes to get it between{" "}
                        <br />
                        <span class="font-semibold underline">
                           Tuesday, Oct 22{" "}
                        </span>{" "}
                        <span class="mx-2">and</span>
                        <span class="font-semibold underline">
                           {" "}
                           Saturday, Oct 26
                        </span>
                     </p>
                  </div>

                  <div class="p-[15px] rounded-xl border border-[#dedede] flex items-start gap-3">
                     <div>
                        <img
                           src="./images/ico_check.png"
                           class="w-6 block"
                           alt=""
                        />
                     </div>
                     <div class="text-sm">
                        <p class="text-lightGray">
                           Pickup available at{" "}
                           <span class="font-semibold text-black">
                              {" "}
                              Akaze store
                           </span>
                        </p>
                        <p class="text-xs text-lightGray mt-1">
                           Usually ready in 24 hours
                        </p>
                        <button type="button" class="underline text-xs mt-4">
                           View store information
                        </button>
                     </div>
                  </div>

                  <div class="text-center mt-6 p-6 bg-[#f6f6f6] rounded-lg">
                     <p class="text-sm tracking-widest">Guaranteed Checkout</p>
                     <img
                        class="block mt-3"
                        src="./images/img_payment.avif"
                        alt=""
                     />
                  </div>
               </div>
            </div>
         </div>

         <div class="mt-9 lg:mt-24">
            <ul class="flex items-center lg:justify-center gap-6">
               <li>
                  <button
                     type="button"
                     class="text-lg font-semibold py-2 px-4 bg-black text-white rounded-full"
                  >
                     Description
                  </button>
               </li>
               <li>
                  <button
                     type="button"
                     class="lg:block hidden text-lg font-semibold py-2 px-4 text-[#8a8a8a] hover:text-black transition-all"
                  >
                     Review
                  </button>
               </li>
               <li>
                  <button
                     type="button"
                     class="lg:block hidden text-lg font-semibold py-2 px-4 text-[#8a8a8a] hover:text-black transition-all"
                  >
                     Shipping
                  </button>
               </li>
               <li>
                  <button
                     type="button"
                     class="lg:block hidden text-lg font-semibold py-2 px-4 text-[#8a8a8a] hover:text-black transition-all"
                  >
                     Return
                  </button>
               </li>
            </ul>

            <div class="mt-9 lg:mt-20">
               <p class="text-[#8a8a8a] leading-7">
                  Get a fresh 'fit for spring with the Free People Love Letter
                  Ivory Floral Jacquard Cropped Cami Top! Stretchy jacquard
                  fabric, with a textured floral design throughout, shapes this
                  cami top that has wide straps, a high square neckline, and a
                  fitted bodice that ends at a cropped hem with lettuce-edge
                  trim.
               </p>
               <p class="mt-9 text-[#8a8a8a] leading-7">
                  Get a fresh 'fit for spring with the Free People Love Letter
                  Ivory Floral Jacquard Cropped Cami Top! Stretchy jacquard
                  fabric, with a textured floral design throughout, shapes this
                  cami top that has wide straps, a high square neckline, and a
                  fitted bodice that ends at a cropped hem with lettuce-edge
                  trim. Get a fresh 'fit for spring with the Free People Love
                  Letter Ivory Floral Jacquard Cropped Cami Top! Stretchy
                  jacquard fabric, with a textured floral design throughout,
                  shapes this cami top that has wide straps, a high square
                  neckline, and a fitted bodice that ends at a cropped hem with
                  lettuce-edge trim.
               </p>
            </div>
         </div>

         <div class="mt-24 mb-24">
            <h2 class="text-center text-lg lg:text-3xl font-semibold">
               You may also like
            </h2>
            <ul class="mt-8 lg:grid grid-cols-4 gap-7">
               <li class="mt-6 md:mt-0 text-center group relative">
                  <a href="#none" class="bg-red">
                     <span class="absolute py-1 text-xs px-2 top-3 left-3 bg-black text-white rounded-xl">
                        Out of stock
                     </span>
                     <ul class="absolute bottom-28 left-4 z-10 flex flex-col gap-3">
                        <li class="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                           <button
                              type="button"
                              class="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                           >
                              <img
                                 src="./images/ico_heart.png"
                                 class="image size-4 rouded-full"
                                 alt=""
                              />
                           </button>
                        </li>
                        <li class="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-100">
                           <button
                              type="button"
                              class="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                           >
                              <img
                                 src="./images/ico_reload.png"
                                 class="image size-4 rouded-full"
                                 alt=""
                              />
                           </button>
                        </li>
                        <li class="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-200">
                           <button
                              type="button"
                              class="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                           >
                              <img
                                 src="./images/ico_search.png"
                                 class="image size-4 rouded-full"
                                 alt=""
                              />
                           </button>
                        </li>
                     </ul>

                     <div class="rounded-xl overflow-hidden bg-white lg:h-[385px]">
                        <img
                           class="block size-full object-cover"
                           src="./images/img_product.webp"
                           alt=""
                        />
                     </div>
                     <div class="flex justify-center items-center gap-1 mt-5">
                        <img
                           class="size-13 inline-block"
                           src="./images/ico_star_active.png"
                           alt=""
                        />
                        <img
                           class="size-13 inline-block"
                           src="./images/ico_star_gray.png"
                           alt=""
                        />
                        <img
                           class="size-13 inline-block"
                           src="./images/ico_star_gray.png"
                           alt=""
                        />
                        <img
                           class="size-13 inline-block"
                           src="./images/ico_star_gray.png"
                           alt=""
                        />
                        <img
                           class="size-13 inline-block"
                           src="./images/ico_star_gray.png"
                           alt=""
                        />
                     </div>
                     <h3 class="text-15 mt-2">Egg Dining Table</h3>
                     <div class="mt-2 relative h-5 overflow-hidden">
                        <div class="absolute left-1/2 -translate-x-1/2 group-hover:bottom-0 -bottom-5 transition-all duration-300">
                           <div class="flex items-center justify-center font-bold text-15 text-center">
                              <span class="">$70.00</span>
                           </div>
                           <a
                              href="#none"
                              class="uppercase text-xs font-medium tracking-widest relative before:absolute before:bottom-0 before:w-0 before:h-[1px] before:bg-black before:left-0 hover:before:w-full before:transition-all before:duration-500"
                           >
                              Add to cart
                           </a>
                        </div>
                     </div>
                  </a>
               </li>

               <li class="mt-6 md:mt-0 text-center group relative">
                  <a href="#none">
                     <ul class="absolute bottom-28 left-4 z-10 flex flex-col gap-3">
                        <li class="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                           <button
                              type="button"
                              class="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                           >
                              <img
                                 src="./images/ico_heart.png"
                                 class="image size-4 rouded-full"
                                 alt=""
                              />
                           </button>
                        </li>
                        <li class="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-100">
                           <button
                              type="button"
                              class="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                           >
                              <img
                                 src="./images/ico_reload.png"
                                 class="image size-4 rouded-full"
                                 alt=""
                              />
                           </button>
                        </li>
                        <li class="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-200">
                           <button
                              type="button"
                              class="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                           >
                              <img
                                 src="./images/ico_search.png"
                                 class="image size-4 rouded-full"
                                 alt=""
                              />
                           </button>
                        </li>
                     </ul>
                     <div class="rounded-xl overflow-hidden bg-white lg:h-[385px]">
                        <img
                           class="block size-full object-cover"
                           src="./images/img_product2.webp"
                           alt=""
                        />
                     </div>
                     <div class="flex justify-center items-center gap-1 mt-5">
                        <img
                           class="size-13 inline-block"
                           src="./images/ico_star_active.png"
                           alt=""
                        />
                        <img
                           class="size-13 inline-block"
                           src="./images/ico_star_gray.png"
                           alt=""
                        />
                        <img
                           class="size-13 inline-block"
                           src="./images/ico_star_gray.png"
                           alt=""
                        />
                        <img
                           class="size-13 inline-block"
                           src="./images/ico_star_gray.png"
                           alt=""
                        />
                        <img
                           class="size-13 inline-block"
                           src="./images/ico_star_gray.png"
                           alt=""
                        />
                     </div>
                     <h3 class="text-15 mt-2">Century Starburst Clock</h3>
                     <div class="mt-2 relative h-5 overflow-hidden">
                        <div class="absolute left-1/2 -translate-x-1/2 group-hover:bottom-0 -bottom-5 transition-all duration-300">
                           <div class="flex items-center justify-center font-bold text-15 text-center">
                              <span class="">$55.00</span>
                           </div>
                           <a
                              href="#none"
                              class="uppercase text-xs font-medium tracking-widest relative before:absolute before:bottom-0 before:w-0 before:h-[1px] before:bg-black before:left-0 hover:before:w-full before:transition-all before:duration-500"
                           >
                              Add to cart
                           </a>
                        </div>
                     </div>
                  </a>
               </li>

               <li class="mt-6 md:mt-0 text-center group relative">
                  <a href="#none">
                     <div class="rounded-xl overflow-hidden bg-white lg:h-[385px]">
                        <img
                           class="block size-full object-cover"
                           src="./images/img_product3.webp"
                           alt=""
                        />
                     </div>
                     <ul class="absolute bottom-28 left-4 z-10 flex flex-col gap-3">
                        <li class="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                           <button
                              type="button"
                              class="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                           >
                              <img
                                 src="./images/ico_heart.png"
                                 class="image size-4 rouded-full"
                                 alt=""
                              />
                           </button>
                        </li>
                        <li class="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-100">
                           <button
                              type="button"
                              class="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                           >
                              <img
                                 src="./images/ico_reload.png"
                                 class="image size-4 rouded-full"
                                 alt=""
                              />
                           </button>
                        </li>
                        <li class="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-200">
                           <button
                              type="button"
                              class="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                           >
                              <img
                                 src="./images/ico_search.png"
                                 class="image size-4 rouded-full"
                                 alt=""
                              />
                           </button>
                        </li>
                     </ul>
                     <div class="flex justify-center items-center gap-1 mt-5">
                        <img
                           class="size-13 inline-block"
                           src="./images/ico_star_active.png"
                           alt=""
                        />
                        <img
                           class="size-13 inline-block"
                           src="./images/ico_star_gray.png"
                           alt=""
                        />
                        <img
                           class="size-13 inline-block"
                           src="./images/ico_star_gray.png"
                           alt=""
                        />
                        <img
                           class="size-13 inline-block"
                           src="./images/ico_star_gray.png"
                           alt=""
                        />
                        <img
                           class="size-13 inline-block"
                           src="./images/ico_star_gray.png"
                           alt=""
                        />
                     </div>
                     <h3 class="text-15 mt-2">Bouquet Flower Vase</h3>
                     <div class="mt-2 relative h-5 overflow-hidden">
                        <div class="absolute left-1/2 -translate-x-1/2 group-hover:bottom-0 -bottom-5 transition-all duration-300">
                           <div class="flex items-center justify-center font-bold text-15 text-center">
                              <span class="">$59.00</span> -
                              <span class="">$60.00</span>
                           </div>
                           <a
                              href="#none"
                              class="uppercase text-xs font-medium tracking-widest relative before:absolute before:bottom-0 before:w-0 before:h-[1px] before:bg-black before:left-0 hover:before:w-full before:transition-all before:duration-500"
                           >
                              Add to cart
                           </a>
                        </div>
                     </div>
                  </a>
               </li>

               <li class="mt-6 md:mt-0 text-center group relative">
                  <a href="#none">
                     <span class="absolute py-1 text-xs px-2 top-3 left-3 bg-red-600 text-white rounded-xl">
                        -30%
                     </span>
                     <ul class="absolute bottom-28 left-4 z-10 flex flex-col gap-3">
                        <li class="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                           <button
                              type="button"
                              class="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                           >
                              <img
                                 src="./images/ico_heart.png"
                                 class="image size-4 rouded-full"
                                 alt=""
                              />
                           </button>
                        </li>
                        <li class="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-100">
                           <button
                              type="button"
                              class="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                           >
                              <img
                                 src="./images/ico_reload.png"
                                 class="image size-4 rouded-full"
                                 alt=""
                              />
                           </button>
                        </li>
                        <li class="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-200">
                           <button
                              type="button"
                              class="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                           >
                              <img
                                 src="./images/ico_search.png"
                                 class="image size-4 rouded-full"
                                 alt=""
                              />
                           </button>
                        </li>
                     </ul>
                     <div class="rounded-xl overflow-hidden bg-white lg:h-[385px]">
                        <img
                           class="block size-full object-cover"
                           src="./images/img_product4.webp"
                           alt=""
                        />
                     </div>
                     <div class="flex justify-center items-center gap-1 mt-5">
                        <img
                           class="size-13 inline-block"
                           src="./images/ico_star_active.png"
                           alt=""
                        />
                        <img
                           class="size-13 inline-block"
                           src="./images/ico_star_gray.png"
                           alt=""
                        />
                        <img
                           class="size-13 inline-block"
                           src="./images/ico_star_gray.png"
                           alt=""
                        />
                        <img
                           class="size-13 inline-block"
                           src="./images/ico_star_gray.png"
                           alt=""
                        />
                        <img
                           class="size-13 inline-block"
                           src="./images/ico_star_gray.png"
                           alt=""
                        />
                     </div>
                     <h3 class="text-15 mt-2">Caravaggio Read Wall Light</h3>
                     <div class="mt-2 relative h-5 overflow-hidden">
                        <div class="absolute left-1/2 -translate-x-1/2 group-hover:bottom-0 -bottom-5 transition-all duration-300">
                           <div class="flex items-center justify-center font-bold text-15 text-center">
                              <span class="line-through text-lightGray">
                                 $59.00{" "}
                              </span>{" "}
                              -<span class="text-red-600">$60.00</span>
                           </div>
                           <a
                              href="#none"
                              class="uppercase text-xs font-medium tracking-widest relative before:absolute before:bottom-0 before:w-0 before:h-[1px] before:bg-black before:left-0 hover:before:w-full before:transition-all before:duration-500"
                           >
                              Add to cart
                           </a>
                        </div>
                     </div>
                  </a>
               </li>
            </ul>
         </div>

         <div class="mt-24 mb-32">
            <h2 class="text-center text-xl lg:text-3xl font-semibold">
               Recently Viewed Products
            </h2>
            <ul class="mt-8 lg:grid grid-cols-4 gap-7">
               <li class="mt-6 md:mt-0 text-center group relative">
                  <a href="#none" class="bg-red">
                     <span class="absolute py-1 text-xs px-2 top-3 left-3 bg-black text-white rounded-xl">
                        Out of stock
                     </span>
                     <ul class="absolute bottom-28 left-4 z-10 flex flex-col gap-3">
                        <li class="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                           <button
                              type="button"
                              class="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                           >
                              <img
                                 src="./images/ico_heart.png"
                                 class="image size-4 rouded-full"
                                 alt=""
                              />
                           </button>
                        </li>
                        <li class="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-100">
                           <button
                              type="button"
                              class="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                           >
                              <img
                                 src="./images/ico_reload.png"
                                 class="image size-4 rouded-full"
                                 alt=""
                              />
                           </button>
                        </li>
                        <li class="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-200">
                           <button
                              type="button"
                              class="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                           >
                              <img
                                 src="./images/ico_search.png"
                                 class="image size-4 rouded-full"
                                 alt=""
                              />
                           </button>
                        </li>
                     </ul>

                     <div class="rounded-xl overflow-hidden bg-white lg:h-[385px]">
                        <img
                           class="block size-full object-cover"
                           src="./images/img_product.webp"
                           alt=""
                        />
                     </div>
                     <div class="flex justify-center items-center gap-1 mt-5">
                        <img
                           class="size-13 inline-block"
                           src="./images/ico_star_active.png"
                           alt=""
                        />
                        <img
                           class="size-13 inline-block"
                           src="./images/ico_star_gray.png"
                           alt=""
                        />
                        <img
                           class="size-13 inline-block"
                           src="./images/ico_star_gray.png"
                           alt=""
                        />
                        <img
                           class="size-13 inline-block"
                           src="./images/ico_star_gray.png"
                           alt=""
                        />
                        <img
                           class="size-13 inline-block"
                           src="./images/ico_star_gray.png"
                           alt=""
                        />
                     </div>
                     <h3 class="text-15 mt-2">Egg Dining Table</h3>
                     <div class="mt-2 relative h-5 overflow-hidden">
                        <div class="absolute left-1/2 -translate-x-1/2 group-hover:bottom-0 -bottom-5 transition-all duration-300">
                           <div class="flex items-center justify-center font-bold text-15 text-center">
                              <span class="">$70.00</span>
                           </div>
                           <a
                              href="#none"
                              class="uppercase text-xs font-medium tracking-widest relative before:absolute before:bottom-0 before:w-0 before:h-[1px] before:bg-black before:left-0 hover:before:w-full before:transition-all before:duration-500"
                           >
                              Add to cart
                           </a>
                        </div>
                     </div>
                  </a>
               </li>

               <li class="mt-6 md:mt-0 text-center group relative">
                  <a href="#none">
                     <ul class="absolute bottom-28 left-4 z-10 flex flex-col gap-3">
                        <li class="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                           <button
                              type="button"
                              class="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                           >
                              <img
                                 src="./images/ico_heart.png"
                                 class="image size-4 rouded-full"
                                 alt=""
                              />
                           </button>
                        </li>
                        <li class="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-100">
                           <button
                              type="button"
                              class="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                           >
                              <img
                                 src="./images/ico_reload.png"
                                 class="image size-4 rouded-full"
                                 alt=""
                              />
                           </button>
                        </li>
                        <li class="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-200">
                           <button
                              type="button"
                              class="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                           >
                              <img
                                 src="./images/ico_search.png"
                                 class="image size-4 rouded-full"
                                 alt=""
                              />
                           </button>
                        </li>
                     </ul>
                     <div class="rounded-xl overflow-hidden bg-white lg:h-[385px]">
                        <img
                           class="block size-full object-cover"
                           src="./images/img_product2.webp"
                           alt=""
                        />
                     </div>
                     <div class="flex justify-center items-center gap-1 mt-5">
                        <img
                           class="size-13 inline-block"
                           src="./images/ico_star_active.png"
                           alt=""
                        />
                        <img
                           class="size-13 inline-block"
                           src="./images/ico_star_gray.png"
                           alt=""
                        />
                        <img
                           class="size-13 inline-block"
                           src="./images/ico_star_gray.png"
                           alt=""
                        />
                        <img
                           class="size-13 inline-block"
                           src="./images/ico_star_gray.png"
                           alt=""
                        />
                        <img
                           class="size-13 inline-block"
                           src="./images/ico_star_gray.png"
                           alt=""
                        />
                     </div>
                     <h3 class="text-15 mt-2">Century Starburst Clock</h3>
                     <div class="mt-2 relative h-5 overflow-hidden">
                        <div class="absolute left-1/2 -translate-x-1/2 group-hover:bottom-0 -bottom-5 transition-all duration-300">
                           <div class="flex items-center justify-center font-bold text-15 text-center">
                              <span class="">$55.00</span>
                           </div>
                           <a
                              href="#none"
                              class="uppercase text-xs font-medium tracking-widest relative before:absolute before:bottom-0 before:w-0 before:h-[1px] before:bg-black before:left-0 hover:before:w-full before:transition-all before:duration-500"
                           >
                              Add to cart
                           </a>
                        </div>
                     </div>
                  </a>
               </li>

               <li class="mt-6 md:mt-0 text-center group relative">
                  <a href="#none">
                     <div class="rounded-xl overflow-hidden bg-white lg:h-[385px]">
                        <img
                           class="block size-full object-cover"
                           src="./images/img_product3.webp"
                           alt=""
                        />
                     </div>
                     <ul class="absolute bottom-28 left-4 z-10 flex flex-col gap-3">
                        <li class="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                           <button
                              type="button"
                              class="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                           >
                              <img
                                 src="./images/ico_heart.png"
                                 class="image size-4 rouded-full"
                                 alt=""
                              />
                           </button>
                        </li>
                        <li class="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-100">
                           <button
                              type="button"
                              class="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                           >
                              <img
                                 src="./images/ico_reload.png"
                                 class="image size-4 rouded-full"
                                 alt=""
                              />
                           </button>
                        </li>
                        <li class="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-200">
                           <button
                              type="button"
                              class="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                           >
                              <img
                                 src="./images/ico_search.png"
                                 class="image size-4 rouded-full"
                                 alt=""
                              />
                           </button>
                        </li>
                     </ul>
                     <div class="flex justify-center items-center gap-1 mt-5">
                        <img
                           class="size-13 inline-block"
                           src="./images/ico_star_active.png"
                           alt=""
                        />
                        <img
                           class="size-13 inline-block"
                           src="./images/ico_star_gray.png"
                           alt=""
                        />
                        <img
                           class="size-13 inline-block"
                           src="./images/ico_star_gray.png"
                           alt=""
                        />
                        <img
                           class="size-13 inline-block"
                           src="./images/ico_star_gray.png"
                           alt=""
                        />
                        <img
                           class="size-13 inline-block"
                           src="./images/ico_star_gray.png"
                           alt=""
                        />
                     </div>
                     <h3 class="text-15 mt-2">Bouquet Flower Vase</h3>
                     <div class="mt-2 relative h-5 overflow-hidden">
                        <div class="absolute left-1/2 -translate-x-1/2 group-hover:bottom-0 -bottom-5 transition-all duration-300">
                           <div class="flex items-center justify-center font-bold text-15 text-center">
                              <span class="">$59.00</span> -
                              <span class="">$60.00</span>
                           </div>
                           <a
                              href="#none"
                              class="uppercase text-xs font-medium tracking-widest relative before:absolute before:bottom-0 before:w-0 before:h-[1px] before:bg-black before:left-0 hover:before:w-full before:transition-all before:duration-500"
                           >
                              Add to cart
                           </a>
                        </div>
                     </div>
                  </a>
               </li>

               <li class="mt-6 md:mt-0 text-center group relative">
                  <a href="#none">
                     <span class="absolute py-1 text-xs px-2 top-3 left-3 bg-red-600 text-white rounded-xl">
                        -30%
                     </span>
                     <ul class="absolute bottom-28 left-4 z-10 flex flex-col gap-3">
                        <li class="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                           <button
                              type="button"
                              class="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                           >
                              <img
                                 src="./images/ico_heart.png"
                                 class="image size-4 rouded-full"
                                 alt=""
                              />
                           </button>
                        </li>
                        <li class="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-100">
                           <button
                              type="button"
                              class="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                           >
                              <img
                                 src="./images/ico_reload.png"
                                 class="image size-4 rouded-full"
                                 alt=""
                              />
                           </button>
                        </li>
                        <li class="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-200">
                           <button
                              type="button"
                              class="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                           >
                              <img
                                 src="./images/ico_search.png"
                                 class="image size-4 rouded-full"
                                 alt=""
                              />
                           </button>
                        </li>
                     </ul>
                     <div class="rounded-xl overflow-hidden bg-white lg:h-[385px]">
                        <img
                           class="block size-full object-cover"
                           src="./images/img_product4.webp"
                           alt=""
                        />
                     </div>
                     <div class="flex justify-center items-center gap-1 mt-5">
                        <img
                           class="size-13 inline-block"
                           src="./images/ico_star_active.png"
                           alt=""
                        />
                        <img
                           class="size-13 inline-block"
                           src="./images/ico_star_gray.png"
                           alt=""
                        />
                        <img
                           class="size-13 inline-block"
                           src="./images/ico_star_gray.png"
                           alt=""
                        />
                        <img
                           class="size-13 inline-block"
                           src="./images/ico_star_gray.png"
                           alt=""
                        />
                        <img
                           class="size-13 inline-block"
                           src="./images/ico_star_gray.png"
                           alt=""
                        />
                     </div>
                     <h3 class="text-15 mt-2">Caravaggio Read Wall Light</h3>
                     <div class="mt-2 relative h-5 overflow-hidden">
                        <div class="absolute left-1/2 -translate-x-1/2 group-hover:bottom-0 -bottom-5 transition-all duration-300">
                           <div class="flex items-center justify-center font-bold text-15 text-center">
                              <span class="line-through text-lightGray">
                                 $59.00{" "}
                              </span>{" "}
                              -<span class="text-red-600">$60.00</span>
                           </div>
                           <a
                              href="#none"
                              class="uppercase text-xs font-medium tracking-widest relative before:absolute before:bottom-0 before:w-0 before:h-[1px] before:bg-black before:left-0 hover:before:w-full before:transition-all before:duration-500"
                           >
                              Add to cart
                           </a>
                        </div>
                     </div>
                  </a>
               </li>
            </ul>
         </div>
      </div>
   );
};
