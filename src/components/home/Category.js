import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/categorySlice";
const Category = ({ setCategory }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  /*   console.log(categories, "categories"); */

  useEffect(
    () => {
      dispatch(getCategories());
    },
    { dispatch }
  );
  return (
    <div className=" h-[400px] bg-gray-100 p-4 ">
      <div className="border-b w-[200px] px-2 pb-1 text-xl font-bold">
        KATEGORİ
      </div>
      {categories?.map((category, i) => (
        <div
          onClick={() => {
            setCategory(category);
          }}
          className="text-lg cursor-pointer hover:bg-gray-200 p-2"
          key={i}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default Category;
