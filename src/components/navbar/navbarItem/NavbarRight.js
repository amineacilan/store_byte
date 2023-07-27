import React from "react";
import { useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../../../redux/cardSlice";
import { useNavigate } from "react-router-dom";
const NavbarRight = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { carts } = useSelector((state) => state.carts);
  console.log(carts, "carts");

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  return (
    <div className="flex items-center gap-8">
      <div className="flex items-center border p-3 rounded-full bg-gray-200">
        <input
          className="bg-gray-200 outline-none"
          type="text"
          placeholder="Arama Yapınız.."
        ></input>
        <BsSearch className="cursor-pointer" size={28}></BsSearch>
      </div>
      <FiHeart className="cursor-pointer" size={28}></FiHeart>
      <div onClick={() => navigate("cart")} className="relative cursor-pointer">
        <div className="absolute -top-3 -right-3 bg-teal-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
          {carts.length}
        </div>
        <SlBasket size={28}></SlBasket>
      </div>
    </div>
  );
};

export default NavbarRight;
