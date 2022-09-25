import React, { useState } from "react";
import { SliderData } from "../components/SliderData";
import Image from "next/image";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const myLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <div
      id="gallery"
      className="max-w-[1240px] m-auto"
    >
      <h1 className="p-4 text-2xl font-bold text-center">Gallery</h1>
      <div className="relative flex justify-center p-4">
        {SliderData.map((slide, index) => {
          return (
            <div
              key={index}
              className={
                index === current
                  ? "opacity-[1] duration-1000 ease-in-out"
                  : "opacity-[0] duration-1000 ease-in-out"
              }
            >
              <FaArrowAltCircleLeft
                className="absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]"
                size={50}
                onClick={prevSlide}
              />
              {index === current && (
                <Image
                  loader={myLoader}
                  src={slide.image}
                  alt="/"
                  //   layout="responsive"
                  width={1440}
                  height={600}
                  objectFit="cover"
                  quality={100}
                />
              )}
              <FaArrowAltCircleRight
                className="absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]"
                size={50}
                onClick={nextSlide}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
