import React, { useEffect, useState } from "react";
import { Banner } from "../../components/Banner/Banner";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { addToWishList } from "../../features/wishlist/wishList";
import { HeartFilled } from "@ant-design/icons";
export const Home = () => {
   const [bestSellers, setBestSellers] = useState([]);
   useEffect(getBestSellers, []);
   function getBestSellers() {
      axios
         .get("https://dummyjson.com/products", {
            params: {
               sortBy: "rating",
               limit: 4,
            },
         })
         .then((res) => {
            const products = res.data.products;
            console.log(products);
            setBestSellers(products);
         });
   }
   
   const wishList = useSelector((state) => state.wishlist);
   const dispatch = useDispatch();
   return (
      <main>
         <Banner></Banner>
         <section class="bg-gray">
            <div class="container">
               <ul class="grid grid-cols-2 lg:grid-cols-4 gap-5 items-center py-14">
                  <li class="flex items-center lg:justify-center lg:flex-1 gap-[15px]">
                     <img src="images/ico_freeship.svg" alt="" />
                     <span class="text-sm lg:text-base font-semibold">
                        Free Shipping Over $50
                     </span>
                  </li>

                  <li class="flex items-center lg:justify-center lg:flex-1 gap-[15px]">
                     <img src="images/ico_quality.svg" alt="" />
                     <span class="text-sm lg:text-base font-semibold">
                        Quality Assurance
                     </span>
                  </li>

                  <li class="flex items-center lg:justify-center lg:flex-1 gap-[15px]">
                     <img src="images/ico_return.svg" alt="" />
                     <span class="text-sm lg:text-base font-semibold">
                        Return within 14 days
                     </span>
                  </li>

                  <li class="flex items-center lg:justify-center lg:flex-1 gap-[15px]">
                     <img src="images/ico_support.svg" />
                     <span class="text-sm lg:text-base font-semibold">
                        Support 24/7
                     </span>
                  </li>
               </ul>
            </div>
         </section>

         <section class="mt-8 lg:mt-24">
            <div class="container">
               <div class="lg:flex justify-between items-center">
                  <h2 class="text-3xl font-bold">Our Categories</h2>
                  <a
                     href="#none"
                     class="mt-6 lg:mt-0 h-9 border border-black px-7 inline-flex items-center font-semibold text-black rounded-full text-[15px] hover:bg-black hover:text-white transition-all duration-300"
                  >
                     View All
                  </a>
               </div>

               <ul class="mt-10 md:grid grid-cols-3 gap-10 cursor-pointer">
                  <li>
                     <div class="rounded-[20px] overflow-hidden relative group">
                        <img
                           class="image"
                           src="images/img_collection.jpg"
                           alt=""
                        />
                        <a
                           href="#none"
                           class="absolute group-hover:bottom-10 left-1/2 -translate-x-1/2 -bottom-10 mt-8 h-9 bg-white px-7 inline-flex items-center font-semibold text-black rounded-full text-[15px] hover:bg-black hover:text-white transition-all duration-300"
                        >
                           Living Room
                        </a>
                     </div>
                  </li>
                  <li class="mt-6 md:mt-0">
                     <div class="rounded-[20px] overflow-hidden relative group">
                        <img
                           class="image"
                           src="images/img_collection2.webp"
                           alt=""
                        />
                        <a
                           href="#none"
                           class="absolute group-hover:bottom-10 left-1/2 -translate-x-1/2 -bottom-10 mt-8 h-9 bg-white px-7 inline-flex items-center font-semibold text-black rounded-full text-[15px] hover:bg-black hover:text-white transition-all duration-300"
                        >
                           Lamp
                        </a>
                     </div>
                  </li>
                  <li class="mt-6 md:mt-0">
                     <div class="rounded-[20px] overflow-hidden relative group">
                        <img
                           class="image"
                           src="images/img_collection3.webp"
                           alt=""
                        />
                        <a
                           href="#none"
                           class="absolute group-hover:bottom-10 left-1/2 -translate-x-1/2 -bottom-10 mt-8 h-9 bg-white px-7 inline-flex items-center font-semibold text-black rounded-full text-[15px] hover:bg-black hover:text-white transition-all duration-300"
                        >
                           Deco
                        </a>
                     </div>
                  </li>
               </ul>
            </div>
         </section>

         {/* Best Seller */}
         <section class="mt-9 lg:mt-24 pt-16 pb-8 bg-gray">
            <div class="container">
               <div class="lg:flex justify-between items-end">
                  <div>
                     <h2 class="text-3xl font-bold">Bestseller</h2>
                     <p class="mt-2 text-lightGray">
                        Experience the best products at our store!
                     </p>
                  </div>
                  <a
                     href="#none"
                     class="mt-6 lg:mt-0 h-9 border border-black px-7 inline-flex items-center font-semibold text-black rounded-full text-[15px] hover:bg-black hover:text-white transition-all duration-300"
                  >
                     View All
                  </a>
               </div>

               <ul class="mt-8 lg:grid grid-cols-4 gap-7">
                  {bestSellers.map((item) => {
                     return (
                        <li
                           className="mt-6 md:mt-0 text-center group relative"
                           key={item.id}
                        >
                           <a href="product-detail.html" className="bg-red">
                              {item.stock < 0 && (
                                 <span className="absolute py-1 text-xs px-2 top-3 left-3 bg-black text-white rounded-xl">
                                    Out of stock
                                 </span>
                              )}
                              <ul className="absolute bottom-28 left-4 z-10 flex flex-col gap-3">
                                 <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                                    {/* heart - wishlist */}
                                    <button
                                       onClick={(e) => {
                                          e.preventDefault();
                                          dispatch(
                                             addToWishList({
                                                id: item.id,
                                                name: item.title,
                                                price: item.price,
                                                img: item.thumbnail,
                                                date: Date.now(),
                                             })
                                          );
                                       }}
                                       type="button"
                                       className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                                    >
                                       {/*  */}
                                       {wishList.some(
                                          (i) => i.id === item.id
                                       ) ? (
                                          <HeartFilled style={{ color: "#FF0000" }} />
                                       ) : (
                                          <img
                                             src="./images/ico_heart.png"
                                             className="image size-4 rounded-full"
                                             alt=""
                                          />
                                       )}
                                    </button>
                                 </li>
                                 <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-100">
                                    <button
                                       type="button"
                                       className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                                    >
                                       <img
                                          src="./images/ico_reload.png"
                                          className="image size-4 rounded-full"
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
                                          className="image size-4 rounded-full"
                                          alt=""
                                       />
                                    </button>
                                 </li>
                              </ul>

                              <div className="rounded-xl overflow-hidden bg-white lg:h-[385px]">
                                 <img
                                    className="block size-full object-cover"
                                    src={item.thumbnail}
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
                              <h3 className="text-15 mt-2">{item.title}</h3>
                              <div className="mt-2 relative h-5 overflow-hidden">
                                 <div className="absolute left-1/2 -translate-x-1/2 group-hover:bottom-0 -bottom-5 transition-all duration-300">
                                    <div className="flex items-center justify-center font-bold text-15 text-center">
                                       <span className="">${item.price}</span>
                                    </div>
                                    <a
                                       href="#none"
                                       className="uppercase text-xs font-medium tracking-widest relative before:absolute before:bottom-0 before:w-0 before:h-[1px] before:bg-black before:left-0 hover:before:w-full before:transition-all before:duration-500"
                                    >
                                       Add to cart
                                    </a>
                                 </div>
                              </div>
                           </a>
                        </li>
                     );
                  })}
               </ul>
            </div>
         </section>

         {/* Our Categories */}
         <section class="mt-9 lg:mt-24">
            <div class="container">
               <h2 class="text-3xl font-bold text-center">Our Categories</h2>

               <ul class="md:grid grid-cols-4 gap-10 mt-11">
                  <li class="mt-6 md:mt-0">
                     <a href="#none">
                        <div class="rounded-lg overflow-hidden">
                           <img
                              class="image"
                              src="./images/img_category.webp"
                              alt=""
                           />
                        </div>
                        <h3 class="mt-4 font-semibold">Bathroom</h3>
                     </a>
                  </li>
                  <li class="mt-6 md:mt-0">
                     <a href="#none">
                        <div class="rounded-lg overflow-hidden">
                           <img
                              class="image"
                              src="./images/img_category2.webp"
                              alt=""
                           />
                        </div>
                        <h3 class="mt-4 font-semibold">Chair</h3>
                     </a>
                  </li>
                  <li class="mt-6 md:mt-0">
                     <a href="#none">
                        <div class="rounded-lg overflow-hidden">
                           <img
                              class="image"
                              src="./images/img_category3.webp"
                              alt=""
                           />
                        </div>
                        <h3 class="mt-4 font-semibold">Decor</h3>
                     </a>
                  </li>
                  <li class="mt-6 md:mt-0">
                     <a href="#none">
                        <div class="rounded-lg overflow-hidden">
                           <img
                              class="image"
                              src="./images/img_category4.webp"
                              alt=""
                           />
                        </div>
                        <h3 class="mt-4 font-semibold">Lamp</h3>
                     </a>
                  </li>
               </ul>
            </div>
         </section>

         {/* Experience the best */}
         <section class="pt-20 pb-20 mt-20 mb-9 lg:mb-20 bg-gray">
            <div class="container">
               <div class="lg:flex items-center justify-between">
                  <div>
                     <p class="text-[14px] uppercase">EXPERIENCE THE BEST</p>
                     <h2 class="text-3xl font-semibold py-5 lg:py-10 leading-[1.4]">
                        Tailored Comfort: <br />
                        Customized Interior <br />
                        Styling
                     </h2>
                     <a
                        href="#none"
                        class="h-9 border border-black px-7 inline-flex items-center font-semibold text-black rounded-full text-[15px] hover:bg-black hover:text-white transition-all duration-300"
                     >
                        View All
                     </a>
                  </div>

                  <div class="rounded-2xl overflow-hidden mt-6 lg:mt-0">
                     <img
                        class="image"
                        src="images/img_experience.webp"
                        alt=""
                     />
                  </div>
               </div>
            </div>
         </section>

         {/* New Arrivals */}
         <section class="pt-16 pb-8 bg-gray">
            <div class="container">
               <div class="lg:flex justify-between items-end">
                  <div>
                     <h2 class="text-3xl font-bold">New Arrivals</h2>
                     <p class="mt-2 text-lightGray">
                        Experience the best products at our store!
                     </p>
                  </div>
                  <a
                     href="#none"
                     class="mt-6 lg:mt-0 h-9 border border-black px-7 inline-flex items-center font-semibold text-black rounded-full text-[15px] hover:bg-black hover:text-white transition-all duration-300"
                  >
                     View All
                  </a>
               </div>
               <ul class="mt-8 lg:grid grid-cols-4 gap-7">
                  <li class="mt-6 md:mt-0 text-center group relative">
                     <a href="product-detail.html">
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
                     <a href="product-detail.html">
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
                     <a href="product-detail.html">
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
                     <a href="product-detail.html">
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
         </section>
      </main>
   );
};
