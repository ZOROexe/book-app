import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { GoHeart } from "react-icons/go";
import { FaCartShopping } from "react-icons/fa6";
import avatar from "../assets/avatar.png";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAuth } from "../context/AuthContext";
export default function Navbar() {
  const cartItems = useSelector((state) => state.cart.cartItems);

  const dropDown = [
    /* { name: "Dashboard", href: "/dashboard" }, */
    { name: "Orders", href: "/orders" },
    { name: "Cart Page", href: "/cart" },
    { name: "CheckOut", href: "/checkout" },
  ];
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const { currentUser, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };
  return (
    <header className="max-w-screen-xl mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        <div className="flex items-center md:gap-10 gap-4">
          <div>
            <Link to="/">
              <FaBars />
            </Link>
          </div>
          <div className="relative sm:w-72 w-40 space-x-2">
            <IoSearch className="absolute inline-block left-3 inset-y-2" />
            <input
              type="text"
              placeholder="Search here"
              className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none"
            />
          </div>
        </div>
        <div className="relative flex items-center md:space-x-3 space-x-4">
          <div>
            {currentUser ? (
              <>
                <button
                  onClick={() => {
                    setIsDropDownOpen(!isDropDownOpen);
                  }}
                >
                  <img
                    src={avatar}
                    alt=""
                    className="size-6 rounded-full ring-2 ring-blue-500"
                  />
                </button>
                {isDropDownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                    <ul className="py-2">
                      {dropDown.map((items) => {
                        return (
                          <li
                            key={items.name}
                            onClick={() => setIsDropDownOpen(!isDropDownOpen)}
                          >
                            <Link
                              to={items.href}
                              className="block px-4 py-2 text-sm hover:bg-gray-200"
                            >
                              {items.name}
                            </Link>
                          </li>
                        );
                      })}
                      <li>
                        <button
                          className="block px-4 w-full py-2 text-sm text-left hover:bg-gray-200"
                          onClick={handleLogout}
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link to="/login">
                <FaRegUser className="size-5" />
              </Link>
            )}
          </div>

          <button className="hidden sm:block">
            <GoHeart className="size-5" />
          </button>
          <Link
            to="/cart"
            className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-md"
          >
            <FaCartShopping />
            {cartItems.length > 0 ? (
              <span className="text-sm font-semibold sm:ml-1">
                {cartItems.length}
              </span>
            ) : (
              <span className="text-sm font-semibold sm:ml-1">0</span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
}
