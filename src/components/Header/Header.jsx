import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
export const Header = () => {
   const listMenu = [
      {
         to: "/",
         title: "Home",
      },
      {
         to: "/product_list",
         title: "Shop",
      },
      {
         to: "/product_list",
         title: "Product",
      },
      {
         to: "/shop",
         title: "Blog",
      },
      {
         to: "/featured",
         title: "Featured",
      },
   ];
   const cart = useSelector((state) => state.cart)
   return (
      <header className="py-5 lg:py-8 sticky top-0 z-10 bg-white shadow-lg">
         <div className="container flex items-center">
            <h1 className="flex-shrink-0 mr-5">
               <a className="block max-w-[130px]" href="index.html">
                  <img
                     className="max-w-full"
                     src="images/logo.webp"
                     alt="Darion"
                  />
               </a>
            </h1>

            <div className="relative ml-auto lg:mr-20 max-w-[500px] w-full hidden xl:block">
               <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
               />
               <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <span>
                     <img
                        className="size-5"
                        src="images/ico_search.png"
                        alt=""
                     />
                  </span>
               </div>
            </div>

            <nav className="mr-28 hidden lg:block ml-auto">
               <ul className="flex items-center gap-10">
                  {/* Map ra menu */}
                  {listMenu.map((item) => {
                     return (
                        <li>
                           <NavLink
                              key={item.to}
                              to={item.to}
                              className={({ isActive }) =>
                                 `relative after:absolute after:h-[1.5px] after:bg-black after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 after:w-full after:scale-x-0 hover:after:-scale-x-100 ${
                                    isActive ? "active" : ""
                                 }`
                              }
                           >
                              {item.title}
                           </NavLink>
                        </li>
                     );
                  })}
               </ul>
            </nav>

            <div className="flex items-center gap-6 ml-auto lg:ml-0 shrink-0">
               <a href="#none" className="lg:hidden">
                  <img className="size-5" src="images/ico_search.png" alt="" />
               </a>
               <NavLink to="/login" >
                  <img className="size-5" src="images/ico_user.png" alt="" />
               </NavLink>

               <a href="#none" className="relative">
                  <span className="absolute -top-[8px] -right-[10px] size-[18px] bg-black text-white rounded-full text-xs grid place-items-center">
                     10
                  </span>
                  <img className="size-5" src="images/ico_heart.png" alt="" />
               </a>
               <NavLink to="/shopping-cart"  className="relative">
                  <span className="absolute -top-[8px] -right-[10px] size-[18px] bg-black text-white rounded-full text-xs grid place-items-center">
                    { cart.length  }
                  </span>
                  <img className="size-5" src="images/ico_bag.png" alt="" />
               </NavLink>
            </div>
         </div>
      </header>
   );
};
