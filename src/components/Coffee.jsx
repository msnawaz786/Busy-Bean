import React from "react";

export default function Coffee() {
  return (
    <section>
      <div className="pt-8 md:pt-16 bg-[#3e342c] pb-20">
        <h1 className="text-2xl sm:text-4xl lg:text-6xl 2xl:text-7xl font-bold text-white font-roboto text-center pb-10">
          Coffee Solution For
        </h1>
        <div className="grid grid-cols-2  lg:grid-cols-4  w-full justify-center">
          <div className="">
            <img
              src="/images/bakeries.png"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="">
            <img
              src="/images/cafe.png"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="">
            <img
              src="/images/cafes.png"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="">
            <img
              src="/images/cstore.png"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:col-start-2">
            <img
              src="/images/restaurants.png"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="">
            <img
              src="/images/hostpitality.png"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>


    
    </section>
  );
}
