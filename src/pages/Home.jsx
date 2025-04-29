import React from "react";
import Navbar from "../components/Navbar";
import Marquee from "react-fast-marquee";
import Footer from "../components/Footer";

import Slider from "../components/Slider";
import Mission from "../components/Mission";
import Coffee from "../components/Coffee";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate=useNavigate();
  return (
    <div className="">
      <section className="header-section">
        <div className="bg-gradient-to-b from-[#332b24] to-[#5C4F4A] ">
          <Navbar />
          <div className="md:pt-[300px] pt-[200px] ">
            <div className="w-full flex flex-col items-center">
              <h1 className="font-bold text-3xl sm:text-5xl  lg:text-7xl 2xl:text-[120px] font-roboto text-center bg-gradient-to-r from-[#F8E4BE] to-[rgba(249,192,106,0.22)] bg-clip-text text-transparent mx-auto lg:leading-[85px] 2xl:leading-[125px]">
                The Future Of Coffee <br /> For Business
              </h1>
              <button className="text-[#F8E4BECC] font-roboto font-bold h-10 md:h-14 w-40 shadow-[0_0_4px_#F8E4BE] rounded-xl bg-[#3e342c] cursor-pointer mt-16" onClick={()=>navigate("/products")}>
                Order Now
              </button>
            </div>
            <div className="w-full h-20 mt-20 md:mt-52 bg-[url('/images/frame1st.png')] bg-cover bg-no-repeat"></div>
          </div>
          <div className=""></div>
        </div>
      </section>
      <section>
        <div className="bg-[#3D332B] w-full pb-16">
          <h1 className="text-white font-bold font-roboto text-2xl sm:text-4xl lg:text-6xl 2xl:text-8xl text-center">
            Our Trusted Partners
          </h1>
          <div className="mt-16 text-white text-2xl font-ibm font-light">
            <Marquee speed={60}>
              <div className="flex gap-16 py-4 ">
                <div className="flex items-center gap-2 ">BrewPros</div>
                <div className="flex items-center gap-2 ">Brand 7</div>
                <div className="flex items-center gap-2 ">BistroElite</div>
                <div className="flex items-center gap-2 ">GourmetHub</div>
                <div className="flex items-center gap-2 ">dinelux</div>
                <div className="flex items-center gap-2 ">beanmasters</div>
                <div className="flex items-center gap-2 ">RoastRite</div>
                <div className="flex items-center gap-2 ">BrewPros</div>
                <div className="flex items-center gap-2 ">BrewPros</div>
                <div className="flex items-center gap-2 ">BrewPros</div>
                <div className="flex items-center gap-2 ">BrewPros</div>
                <div className="flex items-center gap-2 ">BrewPros</div>
                <div className="flex items-center gap-2 ">BrewPros</div>
                <div className="flex items-center gap-2 ">BrewPros</div>
                <div className="flex items-center gap-2 ">BrewPros</div>
                <div className="flex items-center gap-2 ">sohail</div>
              </div>
            </Marquee>
            <Marquee speed={40}>
              <div className="flex gap-16  py-4 ">
                <div className="flex items-center gap-2 ">BrewPros</div>
                <div className="flex items-center gap-2 ">Brand 7</div>
                <div className="flex items-center gap-2 ">BistroElite</div>
                <div className="flex items-center gap-2 ">GourmetHub</div>
                <div className="flex items-center gap-2 ">dinelux</div>
                <div className="flex items-center gap-2 ">beanmasters</div>
                <div className="flex items-center gap-2 ">RoastRite</div>
                <div className="flex items-center gap-2 ">BrewPros</div>
                <div className="flex items-center gap-2 ">BrewPros</div>
                <div className="flex items-center gap-2 ">BrewPros</div>
                <div className="flex items-center gap-2 ">BrewPros</div>
                <div className="flex items-center gap-2 ">BrewPros</div>
                <div className="flex items-center gap-2 ">BrewPros</div>
                <div className="flex items-center gap-2 ">BrewPros</div>
                <div className="flex items-center gap-2 ">BrewPros</div>
                <div className="flex items-center gap-2 ">BrewPros</div>
              </div>
            </Marquee>
          </div>
        </div>
      </section>
      <section>
        <div className="relative bg-gradient-to-b from-[#1d1713] to-[#3e342c] bg-opacity-10">
          <div className="">
            <img
              src="/images/bhframe.png"
              className="w-full object-cover opacity-5"
            />
          </div>
          <div className="  flex items-center justify-center relative xl:-top-24">
            <h1 className="font-roboto text-xl sm:text-4xl lg:text-6xl 2xl:text-7xl font-bold text-center text-white leading-tight xl:leading-[70px] 2xl:leading-[85px]">
              Providing Services to <br />
              Millions of People Worldwide
            </h1>
          </div>
          <div className="w-full flex justify-center pt-10">
            <img src="/images/bgcontainer1.png" />
          </div>
        </div>
      </section>
      <Coffee />
      <Mission />
      <section>
        <div className="bg-[#322a23] w-full pb-10">
          <h1 className="text-center text-white font-bold font-roboto text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl md:py-24 py-10 px-10">
            What Our Customers Say About Our Products
          </h1>
          <div className="w-full xl:w-[90%] 2xl:w-[78%]   mx-auto px-5 lg:px-0">
            <Slider />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
