"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/../public/images/logo.svg";
import avatar from "@/../public/images/image-avatar.png";
import { Menu, ShoppingCart, Trash, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/index";
import productImage1 from "@/../public/images/image-product-1.jpg";
import { removeFromCart } from "@/store/counterSlice";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const navElements = [
    { id: 1, title: "Collections" },
    { id: 2, title: "Men" },
    { id: 3, title: "Women" },
    { id: 4, title: "About" },
    { id: 5, title: "Contact" },
  ];
  const navVariant = {
    hidden: { opacity: 0, y: -50 },
    show: {
      opacity: 1,
      y: 0,
    },
  };
  const handleNavClick = (title: string) => {
    const element = document.querySelector(title);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };
  const items = Array.from({ length: count }, (_, index) => ({
    id: index,
    name: "Fall Limited Edition Sneakers",
    discount: 50,
    image: productImage1,
  }));

  return (
    <motion.nav
      initial="hidden"
      animate="show"
      variants={navVariant}
      className="absolute border-b-2 font-poppins top-0 left-0 right-0 flex md:justify-around justify-between px-5 md:px-0 items-center py-9 z-20"
    >
      {" "}
      <div className="flex gap-4 items-center text-white">
        <button
          className="md:hidden black"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X color="black" /> : <Menu color="black" />}
        </button>
        <Image src={logo.src} alt="Logo" width={100} height={100} />
        <ul className="md:flex gap-4 hidden text-gray-400">
          {navElements.map((item) => (
            <li
              key={item.id}
              className="group relative hover:text-gray-700 transition-all duration-300 cursor-pointer"
            >
              {item.title}
              <span className="absolute bottom-[-3.125rem] left-0 w-0 group-hover:w-full h-[2px] bg-orange-500 transition-all duration-300 ease-in-out"></span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-2 items-center text-gray-400 font-bold">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:block  relative w-12 h-12 hover:text-black text-gray-400 rounded-full transition-all duration-300 cursor-pointer"
        >
          <ShoppingCart className="w-full" />
          <span className="absolute top-1 right-1 flex items-center justify-center text-white text-[10px] font-medium w-4 h-4 rounded-full  bg-gradient-to-r bg-orange-500 animate-ping"></span>
          <span className="absolute top-1 right-1 flex items-center justify-center text-white text-[9px] font-medium w-4 h-4 rounded-full  bg-gradient-to-r bg-orange-500">
            {count}
          </span>{" "}
        </button>
        <button className="md:block bg-customBlue bg-orange-600 w-12 h-12   hover:scale-95 text-white rounded-full transition-all duration-300 cursor-pointer">
          <Image
            src={avatar}
            alt="avatar"
            className="w-12 h-12 p-1 hover:p-0 transition-all duration-200 rounded-full "
          />
        </button>

        {isMenuOpen && (
          <div className="absolute top-20 right-5 bg-white border shadow-xl rounded-xl w-80 p-4 z-30">
            <h3 className="font-bold text-black mb-3 border-b pb-2">Cart</h3>
            {items.length === 0 ? (
              <p className="text-gray-500 text-sm text-center">
                Your cart is empty.
              </p>
            ) : (
              items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-4 mb-4"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={50}
                    height={50}
                    className="rounded-md"
                  />
                  <div className="flex-1">
                    <p className="text-black text-sm font-medium">
                      {item.name}
                    </p>
                    <p className="text-gray-500 text-xs">
                      Discount: {item.discount}%
                    </p>
                  </div>
                  <button
                    onClick={() => dispatch(removeFromCart())}
                    className="text-red-500 hover:text-red-700"
                  >
                    <Trash size={18} />
                  </button>
                </div>
              ))
            )}
          </div>
        )}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-gray-800 text-white absolute rounded-xl top-20 left-0 w-full border-slate-200 dark:border-slate-700 py-4">
            {navElements.map((item) => (
              <button
                key={item.title}
                onClick={() => handleNavClick(item.title)}
                className={`block w-full text-left px-4 py-3 text-base font-medium transition-colors duration-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-50 dark:hover:bg-slate-800 `}
              >
                {item.title}
              </button>
            ))}
          </div>
        )}
      </div>
    </motion.nav>
  );
}
