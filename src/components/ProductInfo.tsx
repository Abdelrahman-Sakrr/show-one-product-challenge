import React from "react";
import CartButtons from "./CartButtons";

export default function ProductInfo() {
  
  return (
    <section className="my-16 text-black mx-5 md:w-1/2 w-full ">
      <span className="text-gray-400 uppercase">Sneaker Company</span>
      <h3 className="capitalize lg:text-6xl font-bold md:text-4xl text-2xl mt-5 mb-10">
        Fall Limited Edition Sneakers
      </h3>
      <p className="text-gray-400 text-sm uppercase font-semibold">
        These Low Profile Sneakers Are your perfect casual wear companion.
        featuring a durable rubber outer sole, they will withstand everything
        the weather can offer
      </p>
      <div className="mt-10">
        <span className="font-bold text-xl">$1250.00</span>
        <span className="bg-gray-900 text-white px-3 py-2 rounded-md mx-5">
          50%
        </span>
        <p className="line-through text-gray-400 mt-3">$250</p>
      </div>
      <CartButtons />
    </section>
  );
}
