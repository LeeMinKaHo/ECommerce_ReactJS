import React from 'react'

export const Breadcrumb = ({name}) => {
  return (
    <section className="relative">
            <img src="./images/img_product_list_banner.webp" alt="" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
               <h2 className="text-4xl font-semibold">{name}</h2>
               <ul className="flex items-center gap-3 justify-center mt-2">
                  <li>
                     <a href="index.html">Home / </a>
                  </li>
                  <li>
                     <a href="index.html">{name}</a>
                  </li>
               </ul>
            </div>
    </section>
  )
}
