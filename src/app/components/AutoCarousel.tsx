"use client";
import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const AutoCarousel = ({ items }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [itemsPerSlide, setItemsPerSlide] = useState(1); // Default 1 item per slide

  // Function to update the number of items per slide based on window width
  const updateItemsPerSlide = () => {
    const width = window.innerWidth;
    if (width >= 900) {
      setItemsPerSlide(6); // 6 items per slide on large screens
    } else if (width >= 768) {
      setItemsPerSlide(3); // 3 items per slide on medium screens
    } else if (width >= 425) {
      setItemsPerSlide(2); // 3 items per slide on medium screens
    } else {
      setItemsPerSlide(1); // 1 item per slide on small screens (mobile-first)
    }
  };

  // Update itemsPerSlide on window resize
  useEffect(() => {
    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);

    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  // Function to split the items into chunks of the given size (itemsPerSlide)
  const chunkItems = (arr, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  };

  // Split items into slides (batches of 6, or dynamic based on screen size)
  const slides = chunkItems(items, itemsPerSlide);

  return (
    <div className="embla " ref={emblaRef}>
      <div className="embla__container">
        {slides.map((slideItems, slideIndex) => (
          <div
            key={slideIndex}
            className={`embla__slide flex ${
              itemsPerSlide > 1 ? "justify-start" : "justify-center"
            }`}
          >
            {slideItems.map((item, index) => (
              <div
                key={index}
                className=" w-full sm:1/2 md:w-1/3 sm:max-h-full lg:w-1/6 px-2"
              >
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoCarousel;
