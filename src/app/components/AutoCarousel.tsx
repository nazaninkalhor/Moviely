"use client";
import React, { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const AutoCarousel = ({ items }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const [itemsPerSlide, setItemsPerSlide] = useState(1);

  const updateItemsPerSlide = () => {
    const width = window.innerWidth;
    if (width >= 900) {
      setItemsPerSlide(6); 
    } else if (width >= 768) {
      setItemsPerSlide(3); 
    } else if (width >= 425) {
      setItemsPerSlide(2); 
    } else {
      setItemsPerSlide(1); 
    }
  };

  useEffect(() => {
    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);

    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  const chunkItems = (arr, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
  };

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
