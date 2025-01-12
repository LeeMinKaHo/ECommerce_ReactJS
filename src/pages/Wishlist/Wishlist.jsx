import React from "react";
import { Breadcrumb } from "../../components/Banner/Breadcrumb";
import { Button, Table } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
export const Wishlist = () => {
   
   const wishLists = useSelector((state) => state.wishlist)
   const columns = [
      {
         title: "",
         dataIndex: "info",
         key: "info",
         render: (text) => (
            <div className="flex items-center gap-2">
               <div className="group inline-block">
                  <CloseOutlined className="transform transition-transform duration-300 group-hover:rotate-180 group-hover:scale-110 group-hover:font-bold" />
               </div>

               <div className="flex items-center gap-5">
                  <img className="w-20 h-auto " src={text.img}></img>
                  <div>
                     <p className="font-semibold">{text.name}</p>
                     <p className="font-bold">{text.price}$</p>
                     <p className="text-slate-400">{text.date}</p>
                  </div>
               </div>
            </div>
         ),
      },
      {
         title: "",
         dataIndex: "outOfStock",
         key: "outOfStock",
         render: (text) => (
            <div>
               {text && <p className="text-neutral-500">Out Of Stock</p>}
               <Button
                  color="default"
                  className="border-black rounded-2xl mt-3 font-semibold"
                  variant="outlined"
               >
                  {" "}
                  Read More{" "}
               </Button>
            </div>
         ),
      },
   ];
   
   const data = wishLists.map((item) => ({
      info: {
         img: item.img, // Hình ảnh từ wishlist
         name: item.name, // Tên sản phẩm
         date: new Date(item.date).toLocaleDateString(), // Chuyển đổi date về định dạng ngày tháng
         price: item.price, // Giá từ wishlist
         stock: item.stock, // Kiểm tra còn hàng hay không
      },
      outOfStock: item.stock === false, // Thiết lập outOfStock dựa trên thuộc tính stock
   }));
   return (
      <React.Fragment>
         <Breadcrumb name={"Wishlist"}></Breadcrumb>
         <div className="container">
            <Table bordered columns={columns} dataSource={data}></Table>
         </div>
      </React.Fragment>
   );
};
