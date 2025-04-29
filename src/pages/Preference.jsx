import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Preference() {
  return (
    <div>
      <div className="bg-gradient-to-b from-[#382a20] to-[#85634b]">
        <Navbar />
        <div className="pt-48 pb-20">
          <div className="w-[90%] lg:w-[77%] bg-[#3e342c] border border-[#86644c] mx-auto rounded-lg px-10 py-7 flex flex-col gap-y-7">
            <div className=" border-b border-[#86644c] pb-7 flex  justify-between items-center">
              <div className="">
                <h1 className="text-white font-bold font-inter text-xl sm:text-3xl">
                  Preferences
                </h1>
                <p className="text-[#9f9a96] pt-3">
                  Change your language, currency, and accessibility
                  requirements.
                </p>
              </div>
            </div>
            <div className="border-b border-[#86644c] pb-7 grid grid-cols-2 lg:grid-cols-3 items-center">
              <h1 className="text-white  text-sm sm:text-lg font-medium max-lg:col-span-2">
                Currency
              </h1>
              <p className="text-[#9f9a96] text-sm sm:text-base">$</p>

              <button className="text-white  text-sm sm:text-lg font-medium flex justify-end">
                Edit
              </button>
            </div>
            <div className="border-b border-[#86644c] pb-7 grid grid-cols-2 lg:grid-cols-3 items-center">
              <h1 className="text-white  text-sm sm:text-lg font-medium max-lg:col-span-2">
                Language
              </h1>
              <p className="text-[#9f9a96] text-sm sm:text-base">
                American English.
              </p>

              <button className="text-white  text-sm sm:text-lg font-medium flex justify-end">
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
