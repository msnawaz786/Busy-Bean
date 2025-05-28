import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { base_url } from "../utilities/URL";
import { toast } from "react-toastify";
import PinVerification from "../components/PinVerification";
import { FaLongArrowAltLeft } from "react-icons/fa";

export default function Signup() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [userId, setUserId] = useState(null);
  const [userEmail, setUserEmail] = useState("");
  const [showPinModal, setShowPinModal] = useState(false);

  const [addUser, setAddUser] = useState({
    address: {
      addressLineOne: "",
      addressLineTwo: "",
      companyaddress: "",
      country: "",
      state: "",
      status: true,
      town: "",
      zipCode: "",
    },
    info: {
      companyInfo: "",
      companyName: "",
      email: "",
      emailToSendInvoices: "",
      name: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      saleTaxNumber: "",
      status: true,
    },
  });
  const accessToken = localStorage.getItem("token");
  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddUser((prev) => ({
      ...prev,
      address: {
        ...prev.address,
        [name]: value,
      },
    }));
  };
  const handleInfoChange = (e) => {
    const { name, value } = e.target;
    setAddUser((prev) => ({
      ...prev,
      info: {
        ...prev.info,
        [name]: value,
      },
    }));
  };
  const validateStepOne = () => {
    const requiredFields = {
      companyaddress: addUser.address.companyaddress,
      addressLineOne: addUser.address.addressLineOne,
      addressLineTwo: addUser.address.addressLineTwo,
      town: addUser.address.town,
      zipCode: addUser.address.zipCode,
      country: addUser.address.country,
      state: addUser.address.state,
    };

    for (const [field, value] of Object.entries(requiredFields)) {
      if (!value.trim()) {
        toast.error(`Please fill the ${field}`);
        return false;
      }
    }
    return true;
  };

  const validateStepTwo = () => {
    const requiredFields = {
      companyName: addUser.info.companyName,
      companyInfo: addUser.info.companyInfo,
      phoneNumber: addUser.info.phoneNumber,
      saleTaxNumber: addUser.info.saleTaxNumber,
      emailToSendInvoices: addUser.info.emailToSendInvoices,
    };

    for (const [field, value] of Object.entries(requiredFields)) {
      if (!value.trim()) {
        toast.error(`Please fill the ${field}`);
        return false;
      }
    }
    return true;
  };

  const validateStepThree = () => {
    const requiredFields = {
      name: addUser.info.name,
      email: addUser.info.email,
      password: addUser.info.password,
    };

    for (const [field, value] of Object.entries(requiredFields)) {
      if (!value.trim()) {
        toast.error(`Please fill the ${field}`);
        return false;
      }
    }
    return true;
  };

  const handleAddUser = async (e) => {
    e.preventDefault();
    if (addUser.info.password.length < 8) {
      toast.error("Password must be at least 8 characters long");
      return;
    }

    if (addUser.info.password !== addUser.info.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const response = await fetch(`${base_url}api/v1/users/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accessToken: `${accessToken}`,
        },
        body: JSON.stringify(addUser),
      });

      const result = await response.json();
      if (result?.status === "success") {
        toast.success("OTP sent Successful");
        setShowPinModal(true);

        setUserId(result?.data?.data?.id);
        setUserEmail(result?.data?.data?.email);
        setShowPinModal(true);
        setAddUser({
          address: {
            addressLineOne: "",
            addressLineTwo: "",
            companyaddress: "",
            country: "",
            state: "",
            status: "",
            town: "",
            zipCode: "",
          },
          info: {
            companyInfo: "",
            companyName: "",
            email: "",
            emailToSendInvoices: "",
            name: "",
            password: "",
            confirmPassword: "",

            phoneNumber: "",
            saleTaxNumber: "",
            status: "",
          },
        });
      } else {
        toast.error(result?.message || "Signup failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="bg-[#3e342c]">
      <div className="h-screen flex items-center">
        <div className="w-11/12 sm:w-4/6 md:w-[70%] lg:w-3/5 xl:w-2/4 mx-auto border border-[#86644C] bg-[#322a23] px-5">
          {currentStep > 1 && (
            <div
              className="text-white cursor-pointer text-2xl relative top-16 left-10"
              onClick={() => setCurrentStep(currentStep - 1)}
            >
              <FaLongArrowAltLeft />
            </div>
          )}
          <div className="flex justify-center">
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
                Welcome to Busy Bean Coffee
              </h1>
              <form onSubmit={handleAddUser}>
                {currentStep === 1 && (
                  <div className="step-1 w-11/12 xl:w-3/5 mx-auto">
                    <h1 className="text-white pt-7 font-medium text-xl lg:text-2xl ">
                      1. Company Address
                    </h1>
                    <div className="text-white pt-5 flex flex-col gap-y-5">
                      <div className="flex flex-col gap-y-3">
                        <label>Company Address</label>
                        <input
                          type="text"
                          name="companyaddress"
                          value={addUser.address.companyaddress}
                          onChange={handleAddressChange}
                          className="bg-black rounded-lg py-2 outline-none px-5 w-full"
                          placeholder="Address"
                          required
                        />
                      </div>
                      <div className="flex flex-col gap-y-3">
                        <label>Address line 1</label>
                        <input
                          type="text"
                          name="addressLineOne"
                          value={addUser.address.addressLineOne}
                          onChange={handleAddressChange}
                          className="bg-black rounded-lg py-2 outline-none px-5"
                          placeholder="Address"
                          required
                        />
                      </div>
                      <div className="flex flex-col gap-y-3">
                        <label>Address line 2</label>
                        <input
                          type="text"
                          name="addressLineTwo"
                          value={addUser.address.addressLineTwo}
                          onChange={handleAddressChange}
                          className="bg-black rounded-lg py-2 outline-none px-5"
                          placeholder="Address"
                          required
                        />
                      </div>
                      <div className="flex gap-x-10 gap-y-5 md:gap-y-0 flex-col md:flex-row">
                        <div className="flex flex-col gap-y-3 w-full">
                          <label>Town/City</label>
                          <input
                            type="text"
                            name="town"
                            value={addUser.address.town}
                            onChange={handleAddressChange}
                            className="bg-black rounded-lg py-2 outline-none px-5"
                            placeholder="Town"
                            required
                          />
                        </div>
                        <div className="flex flex-col gap-y-3 w-full">
                          <label>Zip Code</label>
                          <input
                            type="text"
                            name="zipCode"
                            value={addUser.address.zipCode}
                            onChange={handleAddressChange}
                            className="bg-black rounded-lg py-2 outline-none px-5"
                            placeholder="Zip code"
                            required
                          />
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row gap-y-5 md:gap-y-0 gap-x-10 ">
                        <div className="flex flex-col gap-y-3 w-full">
                          <label>Country</label>
                          <input
                            type="text"
                            name="country"
                            value={addUser.address.country}
                            onChange={handleAddressChange}
                            className="bg-black rounded-lg py-2 outline-none px-5"
                            placeholder="Country"
                            required
                          />
                        </div>
                        <div className="flex flex-col gap-y-3 w-full">
                          <label>State</label>
                          <input
                            type="text"
                            name="state"
                            value={addUser.address.state}
                            onChange={handleAddressChange}
                            className="bg-black rounded-lg py-2 outline-none px-5"
                            placeholder="State"
                            required
                          />
                        </div>
                      </div>
                      <div className="flex justify-center items-center bg-[#86644c] py-2 rounded-lg cursor-pointer">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            if (validateStepOne()) {
                              setCurrentStep(2);
                              toast.success("First Step complete");
                            }
                          }}
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="step-2 w-11/12 xl:w-3/5 mx-auto">
                    <h1 className="text-white font-inter font-medium text-xl lg:text-2xl pt-7">
                      2. Company Details
                    </h1>
                    <div className="text-white pt-5 flex flex-col gap-y-5">
                      <div className="flex flex-col gap-y-3">
                        <label>Company Name</label>
                        <input
                          type="text"
                          name="companyName"
                          value={addUser.info.companyName}
                          onChange={handleInfoChange}
                          className="bg-black rounded-lg py-2 outline-none px-5"
                          placeholder="Company Name"
                        />
                      </div>
                      <div className="flex flex-col gap-y-3">
                        <label>Comapny info</label>
                        <input
                          type="text"
                          name="companyInfo"
                          value={addUser.info.companyInfo}
                          onChange={handleInfoChange}
                          className="bg-black rounded-lg py-2 outline-none px-5"
                          placeholder="Company info"
                        />
                      </div>
                      <div className="flex flex-col gap-y-3">
                        <label>Phone Number</label>
                        <input
                          type="number"
                          name="phoneNumber"
                          value={addUser.info.phoneNumber}
                          onChange={handleInfoChange}
                          className="bg-black rounded-lg py-2 outline-none px-5"
                          placeholder="Phone Number"
                        />
                      </div>
                      <div className="flex flex-col gap-y-3">
                        <label>Sale Tax Number(If applicable)</label>
                        <input
                          type="text"
                          name="saleTaxNumber"
                          value={addUser.info.saleTaxNumber}
                          onChange={handleInfoChange}
                          className="bg-black rounded-lg py-2 outline-none px-5"
                          placeholder="Tax number"
                        />
                      </div>

                      <div className="flex flex-col gap-y-3">
                        <label>Email to send invoice</label>
                        <input
                          type="email"
                          name="emailToSendInvoices"
                          value={addUser.info.emailToSendInvoices}
                          onChange={handleInfoChange}
                          className="bg-black rounded-lg py-2 outline-none px-5"
                          placeholder="Invoice email"
                        />
                      </div>

                      <div className="flex justify-center items-center bg-[#86644c] py-2 rounded-lg cursor-pointer">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            if (validateStepTwo()) {
                              setCurrentStep(3);
                              toast.success("Second Step complete");
                            }
                          }}
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="step-3 w-11/12 xl:w-3/5 mx-auto">
                    <h1 className="text-white font-inter font-medium text-xl lg:text-2xl pt-7">
                      3. User Details
                    </h1>
                    <div className="text-white pt-5 flex flex-col gap-y-5">
                      <div className="flex flex-col gap-y-3">
                        <label>Your Name</label>
                        <input
                          type="text"
                          name="name"
                          value={addUser.info.name}
                          onChange={handleInfoChange}
                          className="bg-black rounded-lg py-2 outline-none px-5"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="flex flex-col gap-y-3">
                        <label>Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={addUser.info.email}
                          onChange={handleInfoChange}
                          className="bg-black rounded-lg py-2 outline-none px-5"
                          placeholder="Email"
                        />
                      </div>
                      <div className="flex flex-col gap-y-3">
                        <label>Password</label>

                        <input
                          type="password"
                          name="password"
                          value={addUser.info.password}
                          onChange={handleInfoChange}
                          className="bg-black rounded-lg py-2 outline-none px-5"
                          placeholder="Password"
                          minLength={8}
                        />
                      </div>
                      <div className="flex flex-col gap-y-3">
                        <label>Confirm Password</label>
                        <input
                          type="password"
                          name="confirmPassword"
                          value={addUser.info.confirmPassword}
                          onChange={handleInfoChange}
                          className="bg-black rounded-lg py-2 outline-none px-5"
                          placeholder="Confirm password"
                        />
                      </div>

                      <div className="flex justify-center items-center bg-[#86644c] py-2 rounded-lg cursor-pointer">
                        <button type="submit">Submitt</button>
                      </div>
                    </div>
                  </div>
                )}
              </form>

              <div className="flex gap-x-2 py-5 justify-center">
                <p className="text-[#869fb4]">I have an account?</p>
                <button
                  type="button"
                  className="underline text-white "
                  onClick={() => navigate("/login")}
                >
                  Sign in
                </button>
              </div>
            </>
          )}

          {showPinModal && (
            <PinVerification
              type="signup"
              userId={userId}
              userEmail={userEmail}
            />
          )}
        </div>
      </div>
      {/* {showPinModal && <PinVerification userId={userId} userEmail={userEmail}/>} */}
    </div>
  );
}
