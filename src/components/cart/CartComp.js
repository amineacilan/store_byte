import React from "react";
import { removeFromCart } from "../../redux/cardSlice";
import { useDispatch } from "react-redux";

const CartComp = ({ cart }) => {
  const dispatch = useDispatch();

  return (
    <div className="my-5 flex items-center justify-between">
      <img className="w-[150px] h-[150px]" src={cart?.image}></img>
      <div className="w-[500px]">
        <div className="text-xl">{cart?.title}</div>
        <div>{cart?.description}</div>
      </div>
      <div>
        <div className="font-bold text-2xl">
          {cart?.price} TL ({cart?.quantity})
        </div>
      </div>
      <div
        onClick={() => dispatch(removeFromCart(cart?.id))}
        className="bg-orange-700 text-white text-2xl w-[150px] h-16 flex items-center justify-center cursor-pointer rounded-md"
      >
        Ürünü Sil
      </div>
    </div>
  );
};

export default CartComp;
