import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const ProductItem = ({ product, handleAddToCart }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-orange-500" />);
      } else if (i - rating < 1) {
        stars.push(<FaStarHalfAlt key={i} className="text-orange-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-orange-500" />);
      }
    }
    return stars;
  };

  return (
    <>
      <div
        key={product.id}
        className="border border-stone-300 flex gap-10 flex-col sm:flex-row sm:w-[64rem] shadow-lg py-4 px-4 sm:px-8 mx-auto"
      >
        <img
          src={product.images[0]}
          className="w-[18rem] h-[23rem] object-cover border-2 border-gray-400"
          alt=""
        />
        <div>
          <h2 className="font-semibold pt-2">
            <span className="font-bold">Title :-</span> {product.title}
          </h2>
          <h3 className="font-semibold py-2 my-1">
            <span className="font-bold">Brand :-</span> {product.brand}
          </h3>
          <p className="text-wrap py-2">
            <span className="font-bold">Category :-</span> {product.category}
          </p>
          <h3 className="font-semibold text-wrap py-2">
            <span className="font-bold">Price :-</span> ₹ {product.price}
          </h3>
          <p className="text-wrap py-2">
            <span className="font-bold">Description :-</span>{" "}
            {product.description}
          </p>
          <h3 className="text-wrap py-2 flex flex-row items-center">
            <span className="font-bold">Rating :-</span>&nbsp; {product.rating}
            <span className="ml-2 flex">{renderStars(product.rating)}</span>
          </h3>
          <p className="text-wrap py-2">
            <span className="font-bold">Shipping Info :-</span>{" "}
            {product.shippingInformation}
          </p>
          <p className="text-wrap py-2">
            <span className="font-bold">Warranty :-</span>{" "}
            {product.warrantyInformation}
          </p>
          <p className="text-wrap py-2">
            <span className="font-bold">Return Policy :-</span>{" "}
            {product.returnPolicy}
          </p>
          <p className="text-wrap py-2">
            <span className="font-bold">Tags :-</span> {product.tags[0]},{" "}
            {product.tags[1]}
          </p>

          <button
            onClick={() => handleAddToCart(product)}
            className="flex gap-2 items-center w-[10rem] my-2 justify-center border-2 border-red-500 text-red-500 font-bold shadow-md px-4 py-[3px] hover:bg-red-500 hover:text-white transition-all cursor-pointer"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
