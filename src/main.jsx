import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./pages/Root/Root.jsx";
import { Home } from "./pages/Home/Home.jsx";
import ErrorPage from "./pages/Error/Error.jsx";
import { Product_list } from "./pages/Product_list/Product_list.jsx";
import { Login } from "./pages/Login/Login.jsx";
import { Order_detail } from "./pages/Product_detail/Product_detail.jsx";
import { Shopping_cart } from "./pages/Shopping_cart/Shopping_cart.jsx";
import { Provider } from "react-redux";
import { store } from "./store.js";
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
            path: "/login",
            element: <Login></Login>,
         },
         {
            path: "/order-detail",
            element: <Order_detail></Order_detail>,
         },
         {
            path: "/shopping-cart",
            element: <Shopping_cart></Shopping_cart>,
         },
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
