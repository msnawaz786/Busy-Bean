import React, { useState } from "react";
import { base_url } from "../utilities/URL";
import { toast } from "react-toastify";
import PinVerification from "../components/PinVerification";

export default function ForgotPassword() {
const [email , setEmail]=useState("");
const [userId , setUserId]=useState("")
  const [showPinModal, setShowPinModal] = useState(false);

const handleforgot=async(e)=>{
    e.preventDefault();
    try {
        const response=await fetch(`${base_url}api/v1/users/forgot-password`,{
            method:"POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify({email})
        })
        const result=await response.json();
 
        if (result.status === "success") {
            toast.success(" OTP sent to  your email.");
            setUserId(result?.data?.id)
            setShowPinModal(true)
          } else {
            toast.error(result.message || "Something went wrong.");
          }

    } catch (error) {
        toast.error("Network error. Try again later.");
    }
}



  return (
    <div className="bg-[#3e342c] h-screen">
      <div className="h-screen flex items-center">
        <div className="w-11/12 sm:w-4/6 md:w-[70%] lg:w-3/5 xl:w-2/4 mx-auto border border-[#86644C] bg-[#322a23] px-5 pb-5 ">
        <div className="flex justify-center pt-5 pb-3">
          <div className="w-60 md:w-72 lg:w-80 ">
            <img
              src="/images/logocoffeelogin.png"
              className="h-full w-full object-contain"
            />
          </div>
          </div>
          {!showPinModal && (
<>
<h1 className="text-white text-center text-2xl lg:text-3xl font-inter font-bold">
            Forgot Password
          </h1>
          <p className="text-[#9f9a96]  text-center pt-5">
            Add your email and we will send you a one time password (OTP)
          </p>
          <form onSubmit={handleforgot}>
            <div className=" w-11/12 xl:w-3/5 mx-auto pt-5 text-white">
              <div className="flex flex-col gap-y-3">
                <label className="text-white">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-black rounded-lg py-2 outline-none px-5 w-full"
                  placeholder="Enter email"
                  required
                />
              </div>
              <div className="flex justify-center items-center bg-[#86644c] py-3 rounded-lg cursor-pointer text-white font-bold mt-5">
                <button type="submit">Continue</button>
              </div>
            </div>
          </form>
</>
          )}
    {showPinModal && (
                    <PinVerification type="forgot-password" userId={userId} userEmail={email} />
        
    )}


        </div>
      </div>
    </div>
  );
}



