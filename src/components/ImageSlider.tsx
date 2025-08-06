"use client";
import Image from "next/image";
import React, { useState } from "react";
import productImage1 from "@/../public/images/image-product-1.jpg";
import productImage2 from "@/../public/images/image-product-2.jpg";
import productImage3 from "@/../public/images/image-product-3.jpg";
import productImage4 from "@/../public/images/image-product-4.jpg";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

export default function ImageSlider() {
  const images = [
    { id: 1, image: productImage1, name: "Image One" },
    { id: 2, image: productImage2, name: "Image Two" },
    { id: 3, image: productImage3, name: "Image Three" },
    { id: 4, image: productImage4, name: "Image Four" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="flex flex-col justify-center items-center">
      <div>
        <Image
          src={images[currentIndex].image}
          alt={images[currentIndex].name}
          width={400}
          height={400}
          className="rounded-md cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        />
      </div>

      <div className="flex flex-wrap gap-2 justify-between items-center my-5">
        {images.map((item, index) => (
          <Image
            key={item.id}
            src={item.image}
            alt={item.name}
            width={80}
            height={80}
            onClick={() => setCurrentIndex(index)}
            className={`rounded-md cursor-pointer mx-2 ${
              currentIndex === index
                ? "opacity-50 border-4 border-orange-500"
                : ""
            }`}
          />
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={() => setIsModalOpen(false)}
          >
            <X size={32} />
          </button>

          <button
            className="absolute left-5 text-white hover:text-gray-300"
            onClick={handlePrev}
          >
            <ChevronLeft size={40} />
          </button>

          {/* Image */}
          <Image
            src={images[currentIndex].image}
            alt={images[currentIndex].name}
            width={600}
            height={600}
            className="rounded-lg max-w-[90vw] max-h-[90vh]"
          />

          {/* Next Button */}
          <button
            className="absolute right-5 text-white hover:text-gray-300"
            onClick={handleNext}
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </section>
  );
}
