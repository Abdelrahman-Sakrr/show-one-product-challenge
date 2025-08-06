"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/../public/images/logo.svg";
import avatar from "@/../public/images/image-avatar.png";
import { Menu, ShoppingCart, X } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/index";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const count = useSelector((state: RootState) => state.counter.value);

  const navElements = [
    { id: 1, title: "Collections" },
    { id: 2, title: "Men" },
    { id: 3, title: "Women" },
    { id: 4, title: "About" },
    { id: 5, title: "Contact" },
  ];
  const handleNavClick = (title: string) => {
    const element = document.querySelector(title);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="absolute border-b-2 font-poppins top-0 left-0 right-0 flex md:justify-around justify-between px-5 md:px-0 items-center py-9 z-20">
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
        <button className="md:block  relative w-12 h-12 hover:text-black text-gray-400 rounded-full transition-all duration-300 cursor-pointer">
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
    </nav>
  );
}
