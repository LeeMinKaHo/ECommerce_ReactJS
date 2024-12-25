import React from 'react'
import { Pagination } from "antd";
export const CustomPagination = (prop) => {
   const {totalPage,currentPage} = prop
  return (
    <Pagination
    total={totalPage}
    showQuickJumper
    showTotal={(total) => `Total ${total} items`}
  />
  )
}
