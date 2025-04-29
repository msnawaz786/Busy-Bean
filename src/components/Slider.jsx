import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Slider = () => {
  return (
    <div className=""> 
<Swiper
  spaceBetween={30}
  slidesPerView={1}
  centeredSlides={true}
  loop={true}
  grabCursor={true}
  pagination={{ clickable: true }}
  modules={[Pagination]}
  className="mySwiper "
  breakpoints={{
    640: {
      slidesPerView: 2,
      centeredSlides: false,
    },
    1024: {
      slidesPerView: 3,
      centeredSlides: false,
    },
  }}
>
  
        <SwiperSlide>
          <div className="bg-white rounded-lg px-3 sm:px-6 py-3 sm:py-7 shadow-lg flex flex-col justify-center items-center text-center transition-all duration-300">
            <img
              src="/images/sliderimg1.png"
              alt="profile"
              className="w-20 h-20 mb-4 rounded-full object-cover border-2 border-white shadow"
            />
            <p className="font-medium text-base text-gray-800">Trish B</p>
            <p className="text-base  pb-2">Parks Lincoln of Longwood</p>
            <p className="text-sm sm:text-base ">
              "I have worked at Parks Lincoln of Longwood for 25 years. I have
              had coffee companies come and go. I can tell you that since we
              installed our Busy Bean Coffee machine our customers love it and
              so do the employees. The machine itself has added class to our
              waiting area and having fresh ground coffee along with specialty
              coffee is a great addition for our customer satisfaction..Thanks
              Busy Bean"
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white rounded-lg px-3 sm:px-6 py-3 sm:py-7 shadow-lg flex flex-col justify-center items-center text-center transition-all duration-300">
            <img
              src="/images/sliderimg1.png"
              alt="profile"
              className="w-20 h-20 mb-4 rounded-full object-cover border-2 border-white shadow"
            />
            <p className="font-medium text-base text-gray-800">Trish B</p>
            <p className="text-base  pb-2">Parks Lincoln of Longwood</p>
            <p className="text-sm sm:text-base ">
              "I have worked at Parks Lincoln of Longwood for 25 years. I have
              had coffee companies come and go. I can tell you that since we
              installed our Busy Bean Coffee machine our customers love it and
              so do the employees. The machine itself has added class to our
              waiting area and having fresh ground coffee along with specialty
              coffee is a great addition for our customer satisfaction..Thanks
              Busy Bean"
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white rounded-lg px-3 sm:px-6 py-3 sm:py-7 shadow-lg flex flex-col justify-center items-center text-center transition-all duration-300">
            <img
              src="/images/sliderimg1.png"
              alt="profile"
              className="w-20 h-20 mb-4 rounded-full object-cover border-2 border-white shadow"
            />
            <p className="font-medium text-base text-gray-800">Trish B</p>
            <p className="text-base  pb-2">Parks Lincoln of Longwood</p>
            <p className="text-sm sm:text-base ">
              "I have worked at Parks Lincoln of Longwood for 25 years. I have
              had coffee companies come and go. I can tell you that since we
              installed our Busy Bean Coffee machine our customers love it and
              so do the employees. The machine itself has added class to our
              waiting area and having fresh ground coffee along with specialty
              coffee is a great addition for our customer satisfaction..Thanks
              Busy Bean"
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white rounded-lg px-3 sm:px-6 py-3 sm:py-7 shadow-lg flex flex-col justify-center items-center text-center transition-all duration-300">
            <img
              src="/images/sliderimg1.png"
              alt="profile"
              className="w-20 h-20 mb-4 rounded-full object-cover border-2 border-white shadow"
            />
            <p className="font-medium text-base text-gray-800">Trish B</p>
            <p className="text-base  pb-2">Parks Lincoln of Longwood</p>
            <p className="text-sm sm:text-base ">
              "I have worked at Parks Lincoln of Longwood for 25 years. I have
              had coffee companies come and go. I can tell you that since we
              installed our Busy Bean Coffee machine our customers love it and
              so do the employees. The machine itself has added class to our
              waiting area and having fresh ground coffee along with specialty
              coffee is a great addition for our customer satisfaction..Thanks
              Busy Bean"
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white rounded-lg px-3 sm:px-6 py-3 sm:py-7 shadow-lg flex flex-col justify-center items-center text-center transition-all duration-300">
            <img
              src="/images/sliderimg1.png"
              alt="profile"
              className="w-20 h-20 mb-4 rounded-full object-cover border-2 border-white shadow"
            />
            <p className="font-medium text-base text-gray-800">Trish B</p>
            <p className="text-base  pb-2">Parks Lincoln of Longwood</p>
            <p className="text-sm sm:text-base ">
              "I have worked at Parks Lincoln of Longwood for 25 years. I have
              had coffee companies come and go. I can tell you that since we
              installed our Busy Bean Coffee machine our customers love it and
              so do the employees. The machine itself has added class to our
              waiting area and having fresh ground coffee along with specialty
              coffee is a great addition for our customer satisfaction..Thanks
              Busy Bean"
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white rounded-lg px-3 sm:px-6 py-3 sm:py-7 shadow-lg flex flex-col justify-center items-center text-center transition-all duration-300">
            <img
              src="/images/sliderimg1.png"
              alt="profile"
              className="w-20 h-20 mb-4 rounded-full object-cover border-2 border-white shadow"
            />
            <p className="font-medium text-base text-gray-800">Trish B</p>
            <p className="text-base  pb-2">Parks Lincoln of Longwood</p>
            <p className="text-sm sm:text-base ">
              "I have worked at Parks Lincoln of Longwood for 25 years. I have
              had coffee companies come and go. I can tell you that since we
              installed our Busy Bean Coffee machine our customers love it and
              so do the employees. The machine itself has added class to our
              waiting area and having fresh ground coffee along with specialty
              coffee is a great addition for our customer satisfaction..Thanks
              Busy Bean"
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white rounded-lg px-6 py-7 shadow-lg flex flex-col justify-center items-center text-center transition-all duration-300">
            <img
              src="/images/slider3.png"
              alt="profile"
              className="w-20 h-20 mb-4 rounded-full object-cover border-2 border-white shadow"
            />
            <p className="font-medium text-base text-gray-800">Trish B</p>
            <p className="text-base text-gray-600 pb-2">Parks Lincoln of Longwood</p>
            <p className=" text-base">
              "I have worked at Parks Lincoln of Longwood for 25 years. I have
              had coffee companies come and go. I can tell you that since we
              installed our Busy Bean Coffee machine our customers love it and
              so do the employees. The machine itself has added class to our
              waiting area and having fresh ground coffee along with specialty
              coffee is a great addition for our customer satisfaction..Thanks
              Busy Bean"
            </p>
          </div>
        </SwiperSlide>

 

      </Swiper>

      <style jsx>{`
  .swiper-pagination-bullet {
    background: #ffffff !important;
    opacity: 0.5;
  }
  .swiper-pagination-bullet-active {
    background: #ffffff !important;
    opacity: 1;
  }
  .swiper-pagination {
    position: relative;
    margin-top: 40px;
    text-align: center;
  }

  /* Add this for mobile screens */
  @media (max-width: 640px) {
    .swiper-pagination {
      margin-top: -70px; 
    }
  }
`}</style>

    </div>
  );
};

export default Slider;
