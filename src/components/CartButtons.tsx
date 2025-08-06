"use client";
import { addToCart } from "@/store/counterSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function CartButtons() {
  const [counter, setcounter] = useState(0);
  const dispatch = useDispatch();
  return (
    <div className="mt-6 flex flex-col sm:flex-row gap-4">
      <div className="flex items-center justify-between bg-gray-100 rounded-lg px-4 py-2 w-[140px]">
        <button
          disabled={counter === 0}
          onClick={() => setcounter(counter === 0 ? 0 : counter - 1)}
          className="text-2xl font-bold text-orange-600 hover:text-black"
        >
          -
        </button>
        <span className="text-lg font-semibold">{counter}</span>
        <button
          onClick={() => setcounter(counter + 1)}
          className="text-2xl font-bold text-orange-600 hover:text-black"
        >
          +
        </button>
      </div>

      <button
        disabled={counter === 0}
        onClick={() => {
          dispatch(addToCart(counter));
          setcounter(0);
        }}
        className={`bg-orange-500 hover:bg-orange-600 ${
          counter === 0 ? "opacity-50 cursor-not-allowed" : "opacity-100"
        } text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200`}
      >
        Add to Cart
      </button>
    </div>
  );
}
