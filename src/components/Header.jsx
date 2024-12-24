import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  const cartItems = useSelector((state) => state.cart.items);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap p-6 shadow-lg bg-white">
        <div className="flex items-center flex-shrink-0 text-black mr-6">
          <h2 className="font-bold text-2xl hover:text-yellow-500 hover:underline cursor-pointer">
            Shoppy Globe App
          </h2>
        </div>
        {/* Hamburger Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black focus:outline-none"
          >
            <GiHamburgerMenu size={24} />
          </button>
        </div>
        {/* Desktop Navigation */}
        <div className={`hidden md:flex`}>
          <ul className="flex flex-row gap-x-10 text-lg font-semibold">
            <Link to={"/"}>
              <li className="border-2 border-gray-900 rounded-lg px-4 py-2 hover:bg-yellow-500 hover:text-black transition-all cursor-pointer">
                Home
              </li>
            </Link>
            <Link to={"/cart"}>
              <li className="border-2 border-gray-900 rounded-lg px-4 py-2 hover:bg-yellow-500 hover:text-black transition-all cursor-pointer">
                Cart ({cartItems.length})
              </li>
            </Link>
          </ul>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden w-full mt-4">
            <ul className="flex flex-col gap-y-4 text-lg font-semibold">
              <Link to={"/"} onClick={() => setIsMenuOpen(false)}>
                <li className="border-2 border-gray-900 rounded-lg px-4 py-2 hover:bg-yellow-500 hover:text-black transition-all cursor-pointer">
                  Home
                </li>
              </Link>
              <Link to={"/cart"} onClick={() => setIsMenuOpen(false)}>
                <li className="border-2 border-gray-900 rounded-lg px-4 py-2 hover:bg-yellow-500 hover:text-black transition-all cursor-pointer">
                  Cart ({cartItems.length})
                </li>
              </Link>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Header;
