import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { base_url } from "../utilities/URL";
import { BiSolidMessageAltDetail } from "react-icons/bi";

export default function Timeline() {
  const location = useLocation();
  const orderId = location.state?.orderId;

  const [tab, setTab] = useState("Status");
  const tabs = ["Status", "Details"];
  const [orderDetail, setOrderDetails] = useState([]);
  const fetchOrderDetail = async () => {
    try {
      const response = await fetch(
        `${base_url}api/v1/users/order-details/${orderId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();
      console.log(result, "order-detaass");
      if (result?.status === "success") {
        setOrderDetails(result?.data?.order);
      }
    } catch (error) {
      console.log("Error fetch data");
    }
  };
  useEffect(() => {
    fetchOrderDetail();
  }, []);
  return (
    <>
      <div className="bg-gradient-to-b from-[#382a20] to-[#85634b] min-h-[60vh]">
        <Navbar />
        <div className="pt-48 pb-20">
          <div className="w-[90%] lg:w-[77%] bg-[#3e342c] border border-[#86644c] mx-auto rounded-lg px-10 py-7 flex flex-col gap-y-7">
            <div className="flex space-x-20  pb-3 text-2xl ">
              {tabs.map((item) => (
                <button
                  key={item}
                  onClick={() => setTab(item)}
                  className={`text-white pb-2 transition-all ${
                    tab === item
                      ? "border-b-2 border-white font-semibold"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="text-white">
              {tab === "Status" && (
                <div>
                  <div className="border rounded-lg w-1/2 py-3 px-5 flex items-center gap-x-5 font-inter">
                    <div className="bg-white text-black size-10 rounded-full flex justify-center items-center text-lg">
                      <span>1</span>
                    </div>
                    <h1>{orderDetail?.orderCurrentStatus}</h1>
                  </div>
                  <div className="pt-10">
                    <h1 className="text-xl font-inter pb-5">
                      Need help with your order?
                    </h1>
                    <div className="border rounded-lg w-1/2 py-3 px-5 flex items-center gap-x-5 font-inter">
                      <div className="bg-white text-black size-10 rounded-full flex justify-center items-center text-lg">
                        <BiSolidMessageAltDetail size={24} />
                      </div>
                      <div className="text-base font-inter">
                      <h1>Contact support</h1>
                      <p>Contact support If you need help with your order</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {tab === "Details" && (
                <div>
                  <h2 className="text-xl font-bold mb-2">Order Details</h2>
                  <p>Item: Example Item</p>
                  <p>Quantity: 2</p>
                  <p>Price: $20</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
