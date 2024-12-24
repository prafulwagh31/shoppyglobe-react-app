import { Link, useParams, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import ProductItem from "./ProductItem";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import toast from "react-hot-toast";
import { addToCart } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductDetail = () => {
  const params = useParams();
  const [productData, setProductData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const cartItem = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    toast.success("Item added to cart");
    dispatch(addToCart(product));
    navigate("/cart");
  };

  useEffect(() => {
    const fetchProdcutData = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/${params.id}`
        );
        const result = await response.json();
        setProductData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProdcutData();
  }, []);

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
      <div className="py-4 px-2 xs:px-8">
        <Link to={"/"}>
          <button className="text-center border-2 border-yellow-500 hover:bg-yellow-500 text-yellow-500 font-bold hover:text-white transition-all flex gap-2 items-center w-[8rem] my-2 rounded-md  px-4 py-[3px] cursor-pointer">
            <FaArrowLeft />
            Back
          </button>
        </Link>
        <h2 className="text-center text-2xl font-bold py-4 mt-4 underline">
          Product Details
        </h2>
        <ProductItem product={productData} handleAddToCart={handleAddToCart} />
      </div>
    </>
  );
};

export default ProductDetail;
