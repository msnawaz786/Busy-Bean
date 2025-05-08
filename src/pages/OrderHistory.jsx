import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { base_url } from "../utilities/URL";
import { useNavigate } from "react-router-dom";
export default function OrderHistory() {
  const userDetail = JSON.parse(localStorage.getItem("user"));
  const userId = userDetail?.id;
  const [orderHistory, setOrderHistory] = useState([]);
const navigate=useNavigate()
  const fetchOrderHistory = async () => {
    try {
      const response = await fetch(
        `${base_url}api/v1/users/orders?userId=${userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = await response.json();
      if (result.status === "success") {
        setOrderHistory(result?.data);
      }
    } catch (error) {}
  };
  useEffect(() => {
    fetchOrderHistory();
  }, []);

  return (
    <div className="">
      <div className="bg-gradient-to-b from-[#382a20] to-[#85634b]  min-h-[60vh]">
        <Navbar />
        <div className="pt-48 pb-20">
          <div className="w-[90%] md:w-[77%] bg-[#3e342c] border border-[#86644c] mx-auto rounded-lg px-10 py-7 flex flex-col gap-y-7 ">
            {userId ? (
              <>
                <div>
                  <h1 className="text-white font-bold font-inter text-xl sm:text-3xl">
                    Order History
                  </h1>
                  <h1 className="text-white font-bold font-inter text-xl sm:text-2xl mt-4">
                    Active Order
                  </h1>
                </div>
                {orderHistory.results > 0 ? (
                  <div>
                    {orderHistory?.data.map((orders) => (
                   
                        <div className="border-b border-[#86644c] py-7 cursor-pointer"   onClick={() => navigate("/timeline", { state: { orderId: orders.id } })}>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 ">
                            {orders?.items.map((items) => (
                              <div className="flex gap-x-5 text-white">
                                <div className="h-24 w-36 border">
                                  <img
                                    src="/images/pro3.jpg"
                                    className="w-full h-full"
                                  />
                                </div>
                                <div className="font-normal font-inter">
                                  <h1 className=" text-lg font-semibold">
                                    {items?.product}
                                  </h1>
                                  <h2 className="text-sm">
                                    Payment Method: {orders?.paymentMethod}
                                  </h2>
                                  <span className="text-sm">Product Price: ${items?.price}</span>
                                  <p className="text-[#9ca3af] text-xs">{orders?.orderCurrentStatus}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="text-white flex justify-end text-lg font-bold font-inter">
                            <span>Order Total: ${orders?.totalBill}</span>
                          </div>
                        </div>
                    
                    ))}
                  </div>
                ) : (
                  <h1 className="text-white">No order</h1>
                )}
              </>
            ) : (
              <h1 className="text-white">User not logged in</h1>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
