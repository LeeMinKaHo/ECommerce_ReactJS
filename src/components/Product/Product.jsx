import React, { useState } from "react";

export const Product = (data) => {
    const {pro} = data
   const [product, setProduct] = useState(pro);
   return (
      <div>
         <li className="mt-6 md:mt-0 text-center group relative">
            <a href="product-detail.html">
               <ul className="absolute bottom-28 left-4 z-10 flex flex-col gap-3">
                  <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                     <button
                        type="button"
                        className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                     >
                        <img
                           src="./images/ico_heart.png"
                           className="image size-4 rouded-full"
                           alt=""
                        />
                     </button>
                  </li>
                  <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-100">
                     <button
                        type="button"
                        className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                     >
                        <img
                           src="./images/ico_reload.png"
                           className="image size-4 rouded-full"
                           alt=""
                        />
                     </button>
                  </li>
                  <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-200">
                     <button
                        type="button"
                        className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                     >
                        <img
                           src="./images/ico_search.png"
                           className="image size-4 rouded-full"
                           alt=""
                        />
                     </button>
                  </li>
               </ul>
               <div className="rounded-xl overflow-hidden bg-white lg:h-[385px]">
                  <img
                     className="block size-full object-cover"
                     src="./images/img_product2.webp"
                     alt=""
                  />
               </div>
               <div className="flex justify-center items-center gap-1 mt-5">
                  <img
                     className="size-13 inline-block"
                     src="./images/ico_star_active.png"
                     alt=""
                  />
                  <img
                     className="size-13 inline-block"
                     src="./images/ico_star_gray.png"
                     alt=""
                  />
                  <img
                     className="size-13 inline-block"
                     src="./images/ico_star_gray.png"
                     alt=""
                  />
                  <img
                     className="size-13 inline-block"
                     src="./images/ico_star_gray.png"
                     alt=""
                  />
                  <img
                     className="size-13 inline-block"
                     src="./images/ico_star_gray.png"
                     alt=""
                  />
               </div>
               <h3 className="text-15 mt-2">{product.name}</h3>
               <div className="mt-2 relative h-5 overflow-hidden">
                  <div className="absolute left-1/2 -translate-x-1/2 group-hover:bottom-0 -bottom-5 transition-all duration-300">
                     <div className="flex items-center justify-center font-bold text-15 text-center">
                        <span className="">${product.price}</span>
                     </div>

                     <a
                        href="#none"
                        className="uppercase text-xs font-medium tracking-widest relative before:absolute before:bottom-0 before:w-0 before:h-[1px] before:bg-black before:left-0 hover:before:w-full before:transition-all before:duration-500"
                        onClick={() => dispatch(addToCart({ id: product.id }))}
                     >
                        Add to cart
                     </a>
                  </div>
               </div>
            </a>
         </li>
      </div>
   );
};
