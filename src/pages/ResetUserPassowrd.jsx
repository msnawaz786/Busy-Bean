import React, { useState } from 'react';
import { base_url } from '../utilities/URL';
import { useToast } from "@chakra-ui/react";
import { useLocation, useNavigate } from 'react-router-dom';

export default function ResetUserPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const toast = useToast();
  const navigate = useNavigate();
  
const location = useLocation();
const userId = location.state?.userId;

  const handleReset = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast({
        title: "Passwords do not match",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    try {
      const response = await fetch(`${base_url}api/v1/users/reset-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId,
          password: password,
        }),
      });

      const result = await response.json();
      console.log(result);

      if (result?.status === "success") {
        toast({
          title: "Password Reset Successful",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate("/login"); 
       
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "Error!",
        description: "Network error. Try again later.",
        status: "error",
        isClosable: true,
      });
    }
  };

  return (
    <div className="bg-[#3e342c] h-screen">
      <div className="h-screen flex items-center">
        <div className="w-11/12 sm:w-4/6 md:w-[70%] lg:w-3/5 xl:w-2/4 mx-auto border border-[#86644C] bg-[#322a23] px-5 pb-5">
          <div className="flex justify-center pt-5 pb-3">
            <div className="w-60 md:w-72 lg:w-80">
              <img
                src="/images/logocoffeelogin.png"
                className="h-full w-full object-contain"
                alt="logo"
              />
            </div>
          </div>

          <h1 className="text-white text-center text-2xl lg:text-3xl font-inter font-bold">
            Reset Password
          </h1>

          <form onSubmit={handleReset}>
            <div className="w-11/12 xl:w-3/5 mx-auto pt-5 text-white">
              <div className="flex flex-col gap-y-3">
                <label className="text-white">New Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-black rounded-lg py-2 outline-none px-5 w-full"
                  placeholder="Enter password"
                  required
                />
              </div>
              <div className="flex flex-col gap-y-3 pt-5">
                <label className="text-white">Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="bg-black rounded-lg py-2 outline-none px-5 w-full"
                  placeholder="Enter confirm password"
                  required
                />
              </div>
              <div className="flex justify-center items-center bg-[#86644c] py-3 rounded-lg cursor-pointer text-white font-bold mt-5">
                <button type="submit">Done</button>
              </div>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}
