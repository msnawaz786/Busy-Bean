import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PaymentDetail() {
  return (
    <div>
      <div className="bg-gradient-to-b from-[#382a20] to-[#85634b]">
        <Navbar />
        <div className="pt-48 pb-20">
          <div className="w-[90%] lg:w-[77%] bg-[#3e342c] border border-[#86644c] mx-auto rounded-lg px-10 py-7 flex flex-col gap-y-7">
            <div className=" border-b border-[#86644c] pb-7 flex  justify-between items-center">
              <div className="">
                <h1 className="text-white font-bold font-inter text-xl sm:text-3xl">
                  Payment details
                </h1>
                <p className="text-[#9f9a96] pt-3">
                  Securely add or remove payment methods to make it easier when
                  you book.
                </p>
              </div>
            </div>
            <div className="border-b border-[#86644c] pb-7 grid grid-cols-2 lg:grid-cols-3 items-center">
              <h1 className="text-white  text-sm sm:text-lg font-medium max-lg:col-span-2">
                Payment cards
              </h1>
              <p className="text-[#9f9a96] text-sm sm:text-base">
                Add a phone number to set up two-factor authentication
              </p>

              <button className="text-white  text-sm sm:text-lg font-medium flex justify-end">
                Set up
              </button>
            </div>
            <div className="border-b border-[#86644c] pb-7 grid grid-cols-2 lg:grid-cols-3 items-center">
              <h1 className="text-white  text-sm sm:text-lg font-medium max-lg:col-span-2">
                Active sessions
              </h1>
              <p className="text-[#9f9a96] text-sm sm:text-base">
                Selecting “ Sign out “ will sign you out from all devices except
                this one. This can take up to 10 minutes.
              </p>

              <button className="text-white  text-sm sm:text-lg font-medium flex justify-end">
                Sign out
              </button>
            </div>
            <div className="border-b border-[#86644c] pb-7 grid grid-cols-2 lg:grid-cols-3 items-center">
              <h1 className="text-white  text-sm sm:text-lg font-medium max-lg:col-span-2">
                Delete account
              </h1>
              <p className="text-[#9f9a96] text-sm sm:text-base">
                Permanently delete your account
              </p>

              <button className="text-white  text-sm sm:text-lg font-medium flex justify-end">
                Delete account
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
