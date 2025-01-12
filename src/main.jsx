import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./pages/Root/Root.jsx";
import { Home } from "./pages/Home/Home.jsx";
import ErrorPage from "./pages/Error/Error.jsx";
import { Product_list } from "./pages/Product_list/Product_list.jsx";
import { Login } from "./pages/Login/Login.jsx";
import { Product_detail } from "./pages/Product_detail/Product_detail.jsx";
import { Shopping_cart } from "./pages/Shopping_cart/Shopping_cart.jsx";
import { Provider } from "react-redux";
import { store } from "./store.js";
import { Wishlist } from "./pages/Wishlist/Wishlist.jsx";
const router = createBrowserRouter([
   {
      path: "/",
      element: <Root />,
      children: [
         {
            path: "/",
            element: <Home />,
         },
         {
            path: "/product_list",
            element: <Product_list></Product_list>,
         },
         {
            path:"/product/:id",
            element:<Product_detail ></Product_detail>
         }
         ,{
            path: "/login",
            element: <Login></Login>,
         },
         {
            path: "/order-detail",
            element:<Login></Login>
         },
         {
            path: "/shopping-cart",
            element: <Shopping_cart></Shopping_cart>,
         },
         {
            path:"/wishlist",
            element:<Wishlist></Wishlist>
         }
      ],
      errorElement: <ErrorPage />,
   },
]);

createRoot(document.getElementById("root")).render(
   <React.StrictMode>
      <Provider store={store}>
         <RouterProvider router={router} />
      </Provider>
   </React.StrictMode>
);
