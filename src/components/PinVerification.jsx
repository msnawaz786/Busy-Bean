import React, { useState, useEffect } from "react";
import { PinInput, PinInputField } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { base_url } from "../utilities/URL";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function PinVerification({ userId, userEmail, type }) {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  // const toast = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (timer === 0) {
      setCanResend(true);
      return;
    }

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const handleOtpComplete = async (value) => {
    setOtp(value);

    try {
      const response = await fetch(`${base_url}api/v1/users/otp/verfication`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: userId,
          otp: value,
          on: "signup",
        }),
      });

      const result = await response.json();
      console.log(result);

      if (result?.status === "success") {
    
        toast.success("OTP successfull verified")
        {
          type === "forgot-password"
            ? navigate("/reset-password", { state: { userId: userId } })
            : navigate("/login");
        }
      } else {
      
        toast.error("Invalid OTP")
      }
    } catch (error) {
      toast.error(result?.message || "OTP Verification Failed!")
    }
  };

  const handleResendOtp = () => {
    if (!canResend) return;

toast.success(`A new OTP has been sent to ${userEmail}`)
    setTimer(60);
    setCanResend(false);
  };

  return (
    <div className=" flex justify-center items-center">
      <div className=" bg-[#322a23]  pb-20">
        <h1 className="text-white text-2xl lg:text-3xl text-center font-bold">
          Verify Your Email
        </h1>
        <p className="text-white text-center py-5">
          Please enter the 4 digit code sent to your {userEmail}
        </p>

        <div className="flex justify-center gap-2 my-4">
          <PinInput autoFocus placeholder="" otp onComplete={handleOtpComplete}>
            <PinInputField
              borderColor="white"
              bg="black"
              color="white"
              width="80px"
              height="90px"
              fontSize="50px"
            />
            <PinInputField
              borderColor="white"
              bg="black"
              color="white"
              width="80px"
              height="90px"
              fontSize="50px"
            />
            <PinInputField
              borderColor="white"
              bg="black"
              color="white"
              width="80px"
              height="90px"
              fontSize="50px"
            />
            <PinInputField
              borderColor="white"
              bg="black"
              color="white"
              width="80px"
              height="90px"
              fontSize="50px"
            />
          </PinInput>
        </div>

        <p className="text-white text-center mt-6">
          {canResend ? (
            <button
              onClick={handleResendOtp}
              className="text-blue-400 hover:underline"
            >
              Resend OTP
            </button>
          ) : (
            <>00: {timer}</>
          )}
        </p>
      </div>
    </div>
  );
}
