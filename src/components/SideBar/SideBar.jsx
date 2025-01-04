import axios from "axios";
import React, { useEffect, useState } from "react";

export const SideBar = ({onCategoryChange,onCategoryClick}) => {
   const api_category_list = "https://dummyjson.com/products/category-list";
   const [categories, setCategories] = useState([]);
   useEffect(() => {
      axios
         .get(api_category_list)
         .then((res) => setCategories(res.data))
         .catch((error) => console.error("Error fetching categories:", error));
   }, []);

   return (
      <>
         <div className="col-span-1 p-0 lg:p-4">
            <div>
               <h2 onClick={onCategoryClick} className="text-lg font-semibold">Category</h2>
               <ul className="mt-4 space-y-3">
                  {categories && categories.length > 0 ? (
                     categories.map((category, index) => (
                        <li key={index} onClick={ () => onCategoryChange(category)  }>
                           <a
                              href={`#${category}`}
                              className="font-medium text-lightGray text-sm hover:text-black transition-all"
                           >
                              {category}
                           </a>
                        </li>
                     ))
                  ) : (
                     <p className="text-sm text-gray-500">Loading categories...</p>
                  )}
               </ul>
            </div>

            <div className="mt-5">
               <h2 className="text-lg font-semibold">Availability</h2>
               <ul className="mt-4 space-y-3">
                  <li>
                     <a
                        href="#none"
                        className="font-medium text-black text-sm hover:text-black transition-all"
                     >
                        In stock (16)
                     </a>
                  </li>
                  <li>
                     <a
                        href="#none"
                        className="font-medium text-lightGray text-sm hover:text-black transition-all"
                     >
                        Out of stock (1)
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </>
   );
};
