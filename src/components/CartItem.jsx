import React from "react";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../utils/cartSlice";
import { MdDelete } from "react-icons/md";
import toast from "react-hot-toast";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  function handleRemoveCart() {
    dispatch(removeFromCart(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className="flex items-center justify-between border-b py-4">
      <div className="flex items-center w-[63%]">
        <img
          src={item.thumbnail}
          alt={item.title}
          className="w-20 h-20 object-cover rounded-md mr-4"
        />
        <div>
          <h2 className="text-lg font-semibold">{item.title}</h2>
          <p className="text-gray-600"> ₹ {item.price.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex items-center ">
        <button
          onClick={() => dispatch(decrementQuantity(item.id))}
          className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
        >
          -
        </button>
        <span className="mx-4">{item.quantity}</span>
        <button
          onClick={() => dispatch(incrementQuantity(item.id))}
          className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600"
        >
          +
        </button>
      </div>
      <button
        onClick={handleRemoveCart}
        className="border-2 border-red-500 w-[2rem] h-[2rem] flex justify-center items-center text-red-500"
      >
        <MdDelete />
      </button>
    </div>
  );
};

export default CartItem;
