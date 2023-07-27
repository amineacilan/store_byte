import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCartTotal } from "../redux/cardSlice";
import { useEffect } from "react";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { carts, totalAmount, itemCount } = useSelector((state) => state.carts);
  console.log(carts, "carts");

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch]);

  return <div>Cart</div>;
};

export default Cart;
