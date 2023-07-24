import React from "react";

const Product = ({ product }) => {
  return (
    <div className=" hover:bg-orange-200 w-[430px] p-3 mb-5 mx-5 border rounded-lg relative cursor-pointer">
      <div className="text-3xl font-bold absolute rounded-md top-0 right-0 bg-teal-500 text-white p-1 m-1">
        {product?.price} <span className="text-sm">TL</span>
      </div>
      <img
        className="w-[200px] h-[200px] object-cover m-auto"
        src={product?.image}
      ></img>
      <div className="text-center px-3 mt-3 text-xl font-bold">
        {product?.title}
      </div>
    </div>
  );
};

export default Product;
