import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getCategoryProducts } from "../../redux/productSlice";
import Product from "./Product";
import Loading from "../Loading";
import ReactPaginate from "react-paginate";

const Products = ({ category }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const dispatch = useDispatch();
  const { products, productsStatus } = useSelector((state) => state.products);
  console.log(products, "products");

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const itemsPerPage = 6;
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  useEffect(() => {
    if (category) {
      dispatch(getCategoryProducts(category));
    } else {
      dispatch(getProducts());
    }
  }, [dispatch, category]);
  return (
    <div>
      {productsStatus == "LOADING" ? (
        <Loading />
      ) : (
        <div className="flex flex-wrap">
          {currentItems?.map((product, i) => (
            <Product key={i} product={product}></Product>
          ))}
        </div>
      )}
      <>
        <ReactPaginate
          className="paginate "
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
          activeClassName="paginateActiveBtn"
        />
      </>
    </div>
  );
};

export default Products;
