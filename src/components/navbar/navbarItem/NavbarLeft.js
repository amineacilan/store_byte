import React from "react";
import { useNavigate } from "react-router-dom";

const NavbarLeft = () => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/")}
      className="text-6xl text-orange-500 font-bold cursor-pointer"
    >
      StoreByte
    </div>
  );
};

export default NavbarLeft;
