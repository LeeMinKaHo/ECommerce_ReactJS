import React from "react";
import { Header } from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer/Footer";

export const Root = () => {
   return (
      <div className="wrap">
         <Header></Header>
         <main>
            <Outlet></Outlet>
         </main>
         <Footer></Footer>
      </div>
   );
};
