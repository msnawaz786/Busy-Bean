import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PersonalDetails() {
  const userDetail = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <div className="bg-gradient-to-b from-[#382a20] to-[#85634b]">
        <Navbar />

        <div className="pt-48 pb-20">
          <div className="w-[90%] lg:w-[77%] bg-[#3e342c] border border-[#86644c] mx-auto rounded-lg px-10 py-7 flex flex-col gap-y-7">
            <div className=" border-b border-[#86644c] pb-7 flex  justify-between items-center">
              <div className="">
                <h1 className="text-white font-bold font-inter text-xl sm:text-3xl">
                  Personal details
                </h1>
                <p className="text-[#9f9a96] pt-3">
                  Upload your info and find how it’s used.
                </p>
              </div>
              <div className="bg-white h-16 w-16 rounded-full"></div>
            </div>
            <div className="border-b border-[#86644c] pb-7 grid grid-cols-2 lg:grid-cols-3 items-center">
              <h1 className="text-white  text-sm sm:text-lg font-medium max-lg:col-span-2">
                Name
              </h1>
              <p className="text-[#9f9a96] text-sm sm:text-base">{userDetail?.status ? userDetail?.name : "Sigi Technologes"}</p>

              <button className="text-white  text-sm sm:text-lg font-medium flex justify-end">
                Edit
              </button>
            </div>
            <div className="border-b border-[#86644c] pb-7 grid grid-cols-2 lg:grid-cols-3 items-center">
            <h1 className="text-white  text-sm sm:text-lg font-medium max-lg:col-span-2">

                Company Name
              </h1>
              <p className="text-[#9f9a96] text-sm sm:text-base">{userDetail?.status ? userDetail?.companyName : "Choose a display name"}</p>

              <button className="text-white  text-sm sm:text-lg font-medium flex justify-end">
                Edit
              </button>
            </div>
            <div className="border-b border-[#86644c] pb-7 grid grid-cols-2 lg:grid-cols-3 items-center">
            <h1 className="text-white  text-sm sm:text-lg font-medium max-lg:col-span-2">

                Email address
              </h1>
              <div className="text-[#9f9a96] text-sm sm:text-base">
                <p className="">{userDetail?.status ? userDetail?.email : "email@gmail.com"}</p>
                <p>This is the email address you can to sign in.</p>
              </div>

            </div>
            <div className="border-b border-[#86644c] pb-7 grid grid-cols-2 lg:grid-cols-3 items-center">
            <h1 className="text-white  text-sm sm:text-lg font-medium max-lg:col-span-2">

                Email to send invoice
              </h1>
              <div className="text-[#9f9a96] text-sm sm:text-base">
                <p>{userDetail?.status ? userDetail?.emailToSendInvoices : "email@gmail.com"}</p>
                <p>This email use to send Invoice</p>
              </div>

              <button className="text-white  text-sm sm:text-lg font-medium flex justify-end">
                Edit
              </button>
            </div>
            <div className="border-b border-[#86644c] pb-7 grid grid-cols-2 lg:grid-cols-3 items-center">
            <h1 className="text-white  text-sm sm:text-lg font-medium max-lg:col-span-2">

                Phone Number
              </h1>
              <p className="text-[#9f9a96] text-sm sm:text-base">{userDetail?.status ? userDetail?.phoneNumber : "000000000"}</p>

              <button className="text-white  text-sm sm:text-lg font-medium flex justify-end">
                Edit
              </button>
            </div>
            <div className="border-b border-[#86644c] pb-7 grid grid-cols-2 lg:grid-cols-3 items-center">
            <h1 className="text-white  text-sm sm:text-lg font-medium max-lg:col-span-2">

                Sales Tax Number
              </h1>
              <p className="text-[#9f9a96] text-sm sm:text-base">{userDetail?.status ? userDetail?.saleTaxNumber : "-"}</p>

              <button className="text-white  text-sm sm:text-lg font-medium flex justify-end">
                Edit
              </button>
            </div>
            <div className="border-b border-[#86644c] pb-7 grid grid-cols-2 lg:grid-cols-3 items-center">
            <h1 className="text-white  text-sm sm:text-lg font-medium max-lg:col-span-2">

                Address
              </h1>
              <p className="text-[#9f9a96] text-sm sm:text-base">
  {userDetail?.status ? `${userDetail?.address?.addressLineOne} ${userDetail?.address?.addressLineTwo}` : "address"}
</p>


              <button className="text-white  text-sm sm:text-lg font-medium flex justify-end">
                Edit
              </button>
            </div>
            <div className="border-b border-[#86644c] pb-7 grid grid-cols-2 lg:grid-cols-3 items-center">
            <h1 className="text-white  text-sm sm:text-lg font-medium max-lg:col-span-2">

                Password
              </h1>
              <p className="text-[#9f9a96] text-sm sm:text-base">***********</p>

              <button className="text-white  text-sm sm:text-lg font-medium flex justify-end">
                Change Passowrd
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
