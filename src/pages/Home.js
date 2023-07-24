import React from "react";
import SliderComp from "../components/home/SliderComp";
import Sorting from "../components/home/Sorting";
import Category from "../components/home/Category";
import Products from "../components/home/Products";
import { useState } from "react";
const Home = () => {
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div>
      <SliderComp></SliderComp>
      <Sorting></Sorting>
      <div className="flex">
        <Category setCategory={setCategory}></Category>
        <Products category={category}></Products>
      </div>
    </div>
  );
};

export default Home;