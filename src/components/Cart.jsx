import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import CartItem from "./CartItem";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  function handleClearCart() {
    dispatch(clearCart());
    toast.success("All Product Clear");
  }

  return (
    <div className="p-6 min-h-screen">
      <Link to={"/"}>
        <button className="text-center border-2 border-yellow-500 hover:bg-yellow-500 text-yellow-500 font-bold hover:text-white  transition-all flex gap-2 items-center w-[8rem] my-2 rounded-md  px-4 py-[3px] cursor-pointer">
          <FaArrowLeft />
          Back
        </button>
      </Link>
      <h1 className="text-2xl font-bold text-center mb-6">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-4">
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className="mt-4 text-right">
            <h3 className="text-xl font-bold">
              Total: ₹ {parseFloat(totalAmount.toFixed(2))}
            </h3>
          </div>
          <div className="flex justify-between mt-6">
            <button
              onClick={handleClearCart}
              className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600"
            >
              Clear Cart
            </button>
            <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
