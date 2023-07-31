import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cardSlice";

const DetailComp = ({ productDetail }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0);
  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  /*  let any = productDetail?.rating.count;
  console.log(any);
  any = 555; */
  const increment = () => {
    if (quantity < productDetail?.rating.count) {
      setQuantity(quantity + 1);
    }
  };

  const addBasket = () => {
    dispatch(
      addToCart({
        id: productDetail?.id,
        title: productDetail?.title,
        image: productDetail?.image,
        price: productDetail?.price,
        quantity: quantity,
      })
    );
  };
  return (
    <div className="flex gap-10 my-10">
      <img
        className="w-max h-max m-auto"
        src={productDetail?.image}
        alt=""
      ></img>
      <div>
        <div className="text-4xl font-bold">{productDetail?.title}</div>
        <div className="my-2">{productDetail?.description}</div>
       {/*  <div className="my-2 text-orange-500 text-xl">
          Rating: {productDetail?.rating.rate}
        </div> */}
     {/*    <div className="my-2 text-orange-500 text-xl">
          Count: {productDetail?.rating.count}
        </div> */}
        <div className="text-5xl font-bold">
          {productDetail?.price} <span className="text-lg">TL</span>
        </div>
        <div className="flex items-center gap-5 my-4 ">
          <div onClick={decrement} className="text-5xl cursor-pointer">
            -
          </div>
          <input
            className="w-20 text-center text-4xl font-bold"
            type="text"
            value={quantity}
          ></input>
          <div onClick={increment} className="text-4xl cursor-pointer">
            +
          </div>
        </div>
        <div
          onClick={addBasket}
          className=" my-4 border text-2xl rounded-lg bg-gray-100 cursor-pointer flex items-center justify-center h-10 w-[200px]"
        >
          Sepete Ekle
        </div>
      </div>
    </div>
  );
};

export default DetailComp;
