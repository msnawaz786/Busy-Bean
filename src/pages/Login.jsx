import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { base_url } from "../utilities/URL";
import { toast } from "react-toastify";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });
  const [loading, setIsLoading] = useState(false);
  const accessToken = localStorage.getItem("token");

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    setLoginUser((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };
  

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const newErrors = {};
   

  if (!loginUser.email) {
    newErrors.email = "Please enter your email.";
  } else if (!/^\S+@\S+\.\S+$/.test(loginUser.email)) {
    newErrors.email = "Email must be a valid email.";
  }

  if (!loginUser.password) {
    newErrors.password = "Please enter your password.";
  } else if (loginUser.password.length < 8) {
    newErrors.password = "Password must be at least 8 characters.";
  }

  setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      setIsLoading(false);
      return;
    }
    try {
      const response = await fetch(`${base_url}api/v1/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accessToken: `${accessToken}`,
        },
        body: JSON.stringify(loginUser),
      });

      const result = await response.json();

      if (result.status === "success") {
        localStorage.setItem("token", result?.data?.token);
        localStorage.setItem("user", JSON.stringify(result?.data?.user));
        toast.success("Login successfull");

        navigate("/");
      } else {
        toast.error("invalide credential");
        setLoginUser({
          email: "",
          password: "",
        });
      }
    } catch (error) {
      toast.error("Network Error");
      setLoginUser({
        email: "",
        password: "",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-[#3e342c]">
      <div className="w-11/12 sm:w-4/6 md:w-3/5 2xl:w-[60%] mx-auto bg-[#322a23] grid grid-cols-1 md:grid-cols-2 border md:border-0 border-[#86644C]">
        <div className="h-full flex justify-center items-center px-5 md:border border-[#86644C] ">
          <div className="w-full h-36">
            <img
              src="/images/logocoffeelogin.png"
              className="h-full w-full object-contain"
              alt="Login Logo"
            />
          </div>
        </div>

        <div className="pb-10 sm:py-14 px-10 md:border border-[#86644C]">
          <h1 className="text-2xl lg:text-3xl text-white">
            Sign in to Busy Bean
          </h1>
          {loading ? (
            <div className="pt-10 flex justify-center">
              <ul className="loader">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          ) : (
            <form onSubmit={handleLogin}>
              <div className="text-white pt-5 flex flex-col gap-y-5">
                <div className="">
                <div className="flex flex-col gap-y-3">
                  <label>Email</label>
                  <input
              
                    name="email"
                    value={loginUser.email}
                    onChange={handleChange}
                    className="bg-black rounded-lg py-2 outline-none px-5"
                    placeholder="Email"
                  />
                
                </div>
                <div className="pt-2">
                {errors.email && (
                    <p className="text-red-500 text-sm  border-t border-[#5b554f] pt-1">{errors.email}</p>
                  )}
                  </div>
                  </div>
                  <div className="">
                <div className="flex flex-col gap-y-3 relative">
                  <label>Password</label>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={loginUser.password}
                    onChange={handleChange}
                    className="bg-black rounded-lg py-2 outline-none px-5 pr-10"
                    placeholder="Password"
                  />
              
                  <div
                    className="absolute right-3 top-[58%] cursor-pointer text-white"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <AiOutlineEye size={22} />
                    ) : (
                      <AiOutlineEyeInvisible size={22} />
                    )}
                  </div>
                </div>
                <div className="pt-2">
                {errors.password && (
                    <p className="text-red-500 text-sm border-t border-[#5b554f] pt-1">{errors.password}</p>
                  )}

                </div>
                </div>

                <div
                  className="flex justify-end"
                  onClick={() => navigate("/forgot-password")}
                >
                  <button type="button" className="underline text-sm">
                    Forgot Password?
                  </button>
                </div>

                <div className="flex justify-center items-center bg-[#86644c] py-2 rounded-lg cursor-pointer">
                  <button type="submit" className="w-full">
                    Sign in
                  </button>
                </div>

                <div className="flex gap-x-2">
                  <p className="text-[#869fb4]">New Customer?</p>
                  <button
                    type="button"
                    className="underline"
                    onClick={() => navigate("/signup")}
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
