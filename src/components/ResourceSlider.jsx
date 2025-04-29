import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function ResourceSlider() {
  return (
    <div className="w-full relative">
      <div className="w-[90%] 2xl:w-[80%] mx-auto text-white pb-20 ">
        <Swiper
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <h1 className="text-center font-roboto pb-10 font-bold text-xl sm:text-4xl lg:text-6xl 2xl:text-7xl">
              Coffee Dry Rub
            </h1>

            <div className="relative flex flex-col lg:flex-row items-center gap-6 group">
              <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] xl:h-[500px] 2xl:h-[600px] relative overflow-hidden rounded-lg">
                <img
                  src="/images/r3.png"
                  className="h-full w-full object-cover cursor-pointer rounded-lg"
                />
                {/* {Hover text} */}

                <div className="absolute inset-0 bg-black bg-opacity-60 text-white p-4 flex flex-col justify-start opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-y-auto max-h-[600px] lg:hidden scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent text-xs sm:text-sm">
                  <p>
                    The Busy Bean Coffee universal dry rub has a diversity of
                    usage...
                  </p>
                  <p className="py-5">
                    This recipe can be used to add flavor to chicken, beef,
                    pork, fish, or vegetables.
                  </p>
                  <div>
                    <p>Ingredients:</p>
                    <p>2 cup Busy Bean Medium Ground Coffee</p>
                    <p>2 ½ cups Brown Sugar</p>
                    <p>2 oz Onion Powder</p>
                    <p>1 oz Ole Bay</p>
                    <p>½ Cup garlic powder</p>
                    <p>1 oz Ground Mustard</p>
                    <p>1 oz Turmeric</p>
                    <p>2 oz Salt</p>
                    <p>2 oz Chili Powder</p>
                    <p>4 oz Spanish Paprika</p>
                    <p>2 oz Butt Rub</p>
                    <p>2 oz Black Pepper</p>
                    <p>2 oz Cumin</p>
                  </div>
                </div>
              </div>

              {/* Right Side Text for large screens */}
              <div className="hidden lg:block w-full lg:w-1/2 p-4 text-xl overflow-y-auto max-h-[600px] scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent">
                <p>
                  The Busy Bean Coffee universal dry rub has a diversity of
                  usage...
                </p>
                <p className="py-5">
                  This recipe can be used to add flavor to chicken, beef, pork,
                  fish, or vegetables.
                </p>
                <div>
                  <p>Ingredients:</p>
                  <p>2 cup Busy Bean Medium Ground Coffee</p>
                  <p>2 ½ cups Brown Sugar</p>
                  <p>2 oz Onion Powder</p>
                  <p>1 oz Ole Bay</p>
                  <p>½ Cup garlic powder</p>
                  <p>1 oz Ground Mustard</p>
                  <p>1 oz Turmeric</p>
                  <p>2 oz Salt</p>
                  <p>2 oz Chili Powder</p>
                  <p>4 oz Spanish Paprika</p>
                  <p>2 oz Butt Rub</p>
                  <p>2 oz Black Pepper</p>
                  <p>2 oz Cumin</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <h1 className="text-center font-roboto pb-10 font-bold text-xl sm:text-4xl lg:text-6xl 2xl:text-7xl">
              French Vanilla Creme Brule
            </h1>

            <div className="relative flex flex-col lg:flex-row-reverse items-center gap-6 group">
              <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] xl:h-[500px] 2xl:h-[600px] relative overflow-hidden rounded-lg">
                <img
                  src="/images/r2.png"
                  className="h-full w-full object-cover cursor-pointer rounded-lg"
                />

                {/* Hover Text */}
                <div className="absolute inset-0 bg-black bg-opacity-60 text-white p-4 flex flex-col justify-start opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-y-auto max-h-[600px] lg:hidden scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent text-xs sm:text-sm">
                  <p>Ingredients:</p>
                  <p>13 Egg Yolks</p>
                  <p>2 Quarts Heavy Crème</p>
                  <p>2 cups or 1-pint Sugar</p>
                  <p>1 cup Busy Bean French Vanilla</p>
                  <p className="py-5">
                    This recipe can be used to add flavor to chicken, beef,
                    pork, fish, or vegetables.
                  </p>
                  <div className="flex flex-col gap-y-4">
                    <p>
                      Step 1) Begin by steeping Heavy cream, bring to a boil and
                      take off the heat source.
                    </p>
                    <p>
                      Step 2) In a stainless-steel mixing bowl, place 9 egg
                      yolks and whisk...
                    </p>
                    <p>Step 3) Temper egg mixture with hot cream...</p>
                    <p>
                      Step 4) Pour crème Brule into ramekins and bake at 350°
                      for 30-45 minutes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Side Text for large screens */}
              <div className="hidden lg:block w-full lg:w-1/2 p-4 text-xl overflow-y-auto max-h-[600px] scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent">
                <p>Ingredients:</p>
                <p>13 Egg Yolks</p>
                <p>2 Quarts Heavy Crème</p>
                <p>2 cups or 1-pint Sugar</p>
                <p>1 cup Busy Bean French Vanilla</p>
                <p className="py-5">
                  This recipe can be used to add flavor to chicken, beef, pork,
                  fish, or vegetables.
                </p>
                <div className="flex flex-col gap-y-4">
                  <p>
                    Step 1) Begin by steeping Heavy cream, bring to a boil and
                    take off the heat source.
                  </p>
                  <p>
                    Step 2) In a stainless-steel mixing bowl, place 9 egg yolks
                    and whisk...
                  </p>
                  <p>Step 3) Temper egg mixture with hot cream...</p>
                  <p>
                    Step 4) Pour crème Brule into ramekins and bake at 350° for
                    30-45 minutes.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <h1 className="text-center font-roboto pb-10 font-bold text-xl sm:text-4xl lg:text-6xl 2xl:text-7xl">
              Coffee Dry Rub
            </h1>

            <div className="relative flex flex-col lg:flex-row items-center gap-6 group">
              <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] xl:h-[500px] 2xl:h-[600px] relative overflow-hidden rounded-lg">
                <img
                  src="/images/r3.png"
                  className="h-full w-full object-cover cursor-pointer rounded-lg"
                />
                {/* {Hover text} */}

                <div className="absolute inset-0 bg-black bg-opacity-60 text-white p-4 flex flex-col justify-start opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-y-auto max-h-[600px] lg:hidden scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent text-xs sm:text-sm">
                  <p>
                    The Busy Bean Coffee universal dry rub has a diversity of
                    usage...
                  </p>
                  <p className="py-5">
                    This recipe can be used to add flavor to chicken, beef,
                    pork, fish, or vegetables.
                  </p>
                  <div>
                    <p>Ingredients:</p>
                    <p>2 cup Busy Bean Medium Ground Coffee</p>
                    <p>2 ½ cups Brown Sugar</p>
                    <p>2 oz Onion Powder</p>
                    <p>1 oz Ole Bay</p>
                    <p>½ Cup garlic powder</p>
                    <p>1 oz Ground Mustard</p>
                    <p>1 oz Turmeric</p>
                    <p>2 oz Salt</p>
                    <p>2 oz Chili Powder</p>
                    <p>4 oz Spanish Paprika</p>
                    <p>2 oz Butt Rub</p>
                    <p>2 oz Black Pepper</p>
                    <p>2 oz Cumin</p>
                  </div>
                </div>
              </div>

              {/* Right Side Text for large screens */}
              <div className="hidden lg:block w-full lg:w-1/2 p-4 text-xl overflow-y-auto max-h-[600px] scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-transparent">
                <p>
                  The Busy Bean Coffee universal dry rub has a diversity of
                  usage...
                </p>
                <p className="py-5">
                  This recipe can be used to add flavor to chicken, beef, pork,
                  fish, or vegetables.
                </p>
                <div>
                  <p>Ingredients:</p>
                  <p>2 cup Busy Bean Medium Ground Coffee</p>
                  <p>2 ½ cups Brown Sugar</p>
                  <p>2 oz Onion Powder</p>
                  <p>1 oz Ole Bay</p>
                  <p>½ Cup garlic powder</p>
                  <p>1 oz Ground Mustard</p>
                  <p>1 oz Turmeric</p>
                  <p>2 oz Salt</p>
                  <p>2 oz Chili Powder</p>
                  <p>4 oz Spanish Paprika</p>
                  <p>2 oz Butt Rub</p>
                  <p>2 oz Black Pepper</p>
                  <p>2 oz Cumin</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="custom-prev absolute top-1/2 left-2 sm:left-5 transform -translate-y-1/2 bg-[#5c4433] text-white p-2 sm:p-3 text-xl sm:text-2xl rounded-full cursor-pointer z-50">
          <IoIosArrowBack />
        </div>
        <div className="custom-next absolute top-1/2 right-2 sm:right-5 transform -translate-y-1/2 bg-[#5c4433] text-white p-2 sm:p-3 text-xl sm:text-2xl rounded-full cursor-pointer z-50">
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
}
