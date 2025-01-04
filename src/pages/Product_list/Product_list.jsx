import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import axios from "axios";
import { Pagination, Skeleton, Spin, notification } from "antd";
import { Link } from "react-router-dom";
import { SideBar } from "../../components/SideBar/SideBar";
export const Product_list = () => {
   const dispatch = useDispatch();
   // chứa danh sách sản phẩm
   const [productList, setProductList] = useState([]);
   // chứa thông tin paging
   const [totalItem, setTotalItem] = useState(0);
   const [fillter, setFillter] = useState({
      page: 1,
      sortBy: "",
      order: "",
      category: "",
   });
   // loading
   const [loading, setLoading] = useState(false);
   // notify
   const [api, contextHolder] = notification.useNotification();

   const openNotificationWithIcon = (type) => {
      if (type === "success") {
         api[type]({
            message: "Notification Title",
            description: "The cart item has been successfully added.",
         });
      } else {
         api[type]({
            message: "Notification Title",
            description: "There was an issue removing the cart item.",
         });
      }
   };
   // Hàm lấy danh sách sản phẩm từ API
   const fetchProductList = async () => {
      try {
         let apiProduct = "https://dummyjson.com/products";
         if (fillter.category) {
            // Ensure `filter.category` is a string
            apiProduct = `${apiProduct}/category/${fillter.category}`;
         }
         console.log(fillter.category);
         console.log(apiProduct);
         const response = await axios.get(apiProduct, {
            params: {
               limit: 12,
               skip: (fillter.page - 1) * 12,
               sortBy: fillter.sortBy,
               order: fillter.order,
            },
         });
         setTotalItem(response.data.total);
         setProductList(response.data.products);
         console.log(totalItem);
         console.log("đã chạy fetch product");
         setTimeout(() => {
            setLoading(true);
         }, 2000);
      } catch (error) {
         console.error("Lỗi khi gọi API:", error);
      }
   };

   // lấy dữ liệu khi page thay đổi
   useEffect(() => {
      console.log("Đã chạy");
      fetchProductList();
   }, [fillter.page, fillter.sortBy, fillter.order, fillter.category]);

   const handleSortParam = async (e) => {
      const params = e.split("_");
      setFillter({ ...fillter, sortBy: params[0], order: params[1] });
   };

   // hàm để lấy category thay đổi từ sidebar
   const handleCategoryChange = (category) => {
      setFillter({
         ...fillter,
         category: category,
      }); // Cập nhật category khi chọn từ SideBar
   };

   const handleResetCategory = () => {
      setFillter({
         ...fillter,
         category: "",
      });
   };
   return (
      <>
         {contextHolder}
         {/* Banner */}
         <section className="relative">
            <img src="./images/img_product_list_banner.webp" alt="" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
               <h2 className="text-4xl font-semibold">Products</h2>
               <ul className="flex items-center gap-3 justify-center mt-2">
                  <li>
                     <a href="index.html">Home / </a>
                  </li>
                  <li>
                     <a href="index.html">Products</a>
                  </li>
               </ul>
            </div>
         </section>

         <section className="pt-12 pb-12">
            <div className="container">
               <div className="lg:grid grid-cols-5">
                  {/* Category */}
                  <SideBar
                     onCategoryChange={handleCategoryChange}
                     onCategoryClick={handleResetCategory}
                  ></SideBar>
                  {/* Main */}
                  <div className="col-span-4 mt-6 lg:mt-0">
                     {/* Sort */}
                     <div className="py-2 px-3 border rounded-full cursor-pointer w-max">
                        <select
                           onChange={(e) => handleSortParam(e.target.value)}
                           name=""
                           id=""
                           className="w-full text-sm"
                        >
                           <option value="price_asc">
                              Price, low to hight
                           </option>
                           <option value="price_desc">
                              Price, hight to low
                           </option>
                           <option value="date_asc">Date, old to new</option>
                           <option value="date_desc">Date, new to old</option>
                           <option value="5">Best selling</option>
                        </select>
                     </div>
                     {/* List product */}

                     <ul className="lg:grid grid-cols-3 gap-5 mt-9 space-y-3 lg:space-y-0">
                        {loading ? (
                           productList.map((pro) => (
                              <li
                                 key={pro.id}
                                 className="mt-6 md:mt-0 text-center group relative"
                              >
                                 <Link to={`/product/${pro.id}`}>
                                    {pro.stock === 0 && (
                                       <span className="absolute py-1 text-xs px-2 top-3 left-3 bg-black text-white rounded-xl">
                                          Out of stock
                                       </span>
                                    )}
                                    <ul className="absolute bottom-28 left-4 z-10 flex flex-col gap-3">
                                       {/* Các nút yêu thích, reload, và tìm kiếm */}
                                    </ul>
                                    <div className="rounded-xl overflow-hidden bg-white lg:h-[385px]">
                                       <img
                                          className="block size-full object-cover"
                                          src={pro.thumbnail}
                                          alt=""
                                       />
                                    </div>
                                    <div className="flex justify-center items-center gap-1 mt-5">
                                       {/* Xếp hạng sao */}
                                    </div>
                                    <h3 className="text-15 mt-2">
                                       {pro.title}
                                    </h3>
                                 </Link>
                                 <div className="mt-2 relative h-5 overflow-hidden">
                                    <div className="absolute left-1/2 -translate-x-1/2 group-hover:bottom-0 -bottom-5 transition-all duration-300">
                                       <div className="flex items-center justify-center font-bold text-15 text-center">
                                          <span className="">${pro.price}</span>
                                       </div>
                                       <a
                                          href="#none"
                                          className="uppercase text-xs font-medium tracking-widest relative"
                                          onClick={() => {
                                             dispatch(
                                                addToCart({
                                                   id: pro.id,
                                                   name: pro.title,
                                                   price: pro.price,
                                                   thumbnail: pro.thumbnail,
                                                })
                                             );
                                             console.log("hahhaaaa")
                                             openNotificationWithIcon(
                                                "success"
                                             );
                                          }}
                                       >
                                          Add to cart
                                       </a>
                                    </div>
                                 </div>
                              </li>
                           ))
                        ) : (
                           <Spin spinning={true} fullscreen />
                        )}

                        {/* {productList.map((pro) => {
                           return (
                              <li className="mt-6 md:mt-0 text-center group relative">
                                 <a
                                    href="product-detail.html"
                                    className="bg-red"
                                 >
                                    {pro.stock === 0 && (
                                       <span className="absolute py-1 text-xs px-2 top-3 left-3 bg-black text-white rounded-xl">
                                          Out of stock
                                       </span>
                                    )}

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
                                          src={pro.thumbnail}
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
                                    <h3 className="text-15 mt-2">
                                       {pro.title}
                                    </h3>
                                    <div className="mt-2 relative h-5 overflow-hidden">
                                       <div className="absolute left-1/2 -translate-x-1/2 group-hover:bottom-0 -bottom-5 transition-all duration-300">
                                          <div className="flex items-center justify-center font-bold text-15 text-center">
                                             <span className="">
                                                ${pro.price}
                                             </span>
                                          </div>
                                          <a
                                             href="#none"
                                             className="uppercase text-xs font-medium tracking-widest relative before:absolute before:bottom-0 before:w-0 before:h-[1px] before:bg-black before:left-0 hover:before:w-full before:transition-all before:duration-500"
                                             onClick={() =>
                                                dispatch(addToCart({ id: 3 }))
                                             }
                                          >
                                             Add to cart
                                          </a>
                                       </div>
                                    </div>
                                 </a>
                              </li>
                           );
                        })} */}
                     </ul>

                     {/* Pagging  */}
                     <div className="mt-10">
                        <ul className="flex items-center justify-center gap-2">
                           <Pagination
                              total={totalItem}
                              pageSize={12}
                              showSizeChanger={false}
                              onChange={(page) => {
                                 setLoading(false);
                                 setFillter({ ...fillter, page: page });
                              }}
                           />
                        </ul>
                        {/* <ul className="flex items-center justify-center gap-2">
                           <li>
                              <button className="grid place-items-center size-10 rounded-full border border-lightGray">
                                 <img
                                    className="size-4"
                                    src="./images/ico_chevron_left.png"
                                    alt=""
                                 />
                              </button>
                           </li>
                           <li>
                              <a className="grid place-items-center size-10 rounded-full border border-lightGray hover:text-white hover:bg-black transition-all bg-black text-white">
                                 1
                              </a>
                           </li>
                           <li>
                              <a
                                 className="grid place-items-center size-10 rounded-full border border-lightGray hover:text-white hover:bg-black transition-all"
                                 href="#none"
                              >
                                 2
                              </a>
                           </li>
                           <li>
                              <a
                                 className="grid place-items-center size-10 rounded-full border border-lightGray hover:text-white hover:bg-black transition-all"
                                 href="#none"
                              >
                                 3
                              </a>
                           </li>
                           <li>
                              <a
                                 className="grid place-items-center size-10 rounded-full border border-lightGray hover:text-white hover:bg-black transition-all"
                                 href="#none"
                              >
                                 4
                              </a>
                           </li>
                           <li>
                              <button className="grid place-items-center size-10 rounded-full border border-lightGray">
                                 <img
                                    className="size-4"
                                    src="./images/ico_chevron_right.png"
                                    alt=""
                                 />
                              </button>
                           </li>
                        </ul> */}
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};
