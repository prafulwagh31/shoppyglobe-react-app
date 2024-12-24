import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import UseFetchUrl from "../utils/useFetchUrl";

const ProductList = () => {
  const [filteredProduct, setFilteredProduct] = useState([]);
  const { data, error, loading } = UseFetchUrl(
    "https://dummyjson.com/products"
  );

  useEffect(() => {
    if (data && data.products) {
      setFilteredProduct(data.products);
    }
  }, [data]);

  function handleChange(e) {
    const searchProduct = e.target.value.toLowerCase();

    const filteredProduct = data.products.filter((item) => {
      return item.title.toLowerCase().includes(searchProduct);
    });

    setFilteredProduct(filteredProduct);
  }

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <p className="px-4 py-4 font-bold">
        Error occured while fetching product data.
      </p>
    );
  }

  return (
    <>
      <div className="px-2">
        <h2 className="text-center text-2xl font-bold py-4 mt-4 underline">
          Product List
        </h2>
        <div className="flex justify-center m-4">
          <input
            className="border border-stone-300 p-1 pr-4 pl-4 w-[30%]"
            type="text"
            placeholder="Enter Product Name"
            onChange={handleChange}
          />
        </div>
        <div className="box-border p-4 m-4 flex gap-6 flex-wrap py-2 justify-center">
          {filteredProduct.map((data) => (
            <div
              key={data.id}
              className="flex flex-col w-[16rem] m-5 border-2 border-stone-100 rounded-lg shadow-xl shadow-gray-300"
            >
              <img
                className="w-[15rem] h-[20rem] border border-stone-300 object-cover mx-auto mt-2"
                src={data.images[0]}
                alt=""
              />
              <h2 className="text-lg m-3 font-semibold">
                {data.title.length > 22
                  ? `${data.title.slice(0, 22)}..`
                  : data.title}
              </h2>
              <p className="text-justify text-wrap m-3">
                {data.description.length > 80
                  ? `${data.description.slice(0, 80)}..`
                  : data.description}
              </p>
              <h3 className="font-semibold m-3">Price:- ₹ {data.price}</h3>
              <Link
                to={`/productdetail/${data.id}`}
                className="py-2 text-center border-2 border-yellow-500 m-4 font-bold text-yellow-500 hover:bg-yellow-500 hover:text-white transition-all"
              >
                <button>View Product</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
