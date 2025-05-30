import React, { useEffect, useRef, useState } from "react";
import { Modal, ModalOverlay, ModalContent, ModalBody } from "@chakra-ui/react";
import { ImCross } from "react-icons/im";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowLeft, FaPlus } from "react-icons/fa";
import Select from "react-select";
import CheckoutMap from "./CheckoutMap";
import { Country, City } from "country-state-city";
import { Autocomplete } from "@react-google-maps/api";
import axios from "axios";
import { base_url } from "../utilities/URL";

export default function AddressModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [address, setAddress] = useState([]);
  const countryOptions = Country.getAllCountries().map((country) => ({
    value: country.isoCode,
    label: country.name,
  }));

  const handleClose = () => {
    setStep(1);
    onClose();
  };
  const userId = JSON.parse(localStorage.getItem("userId"));

  const handleAddress = async () => {
    try {
      const response = await axios.get(
        `${base_url}api/v1/users/address/view-all?userId=${userId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const result = response.data;

      if (result?.status === "success") {
        setAddress(result?.data?.data);
      } else {
        console.error("Failed to fetch user addresses:", result?.message);
      }
    } catch (error) {
      console.error(
        "Something went wrong:",
        error?.response?.data?.message || error.message
      );
    }
  };
  const [selectedCountry, setSelectedCountry] = useState(null);
  const inputRef = useRef(null);

  useEffect(() => {
    handleAddress();
    if (!selectedCountry || !inputRef.current || !window.google) return;

    const autocomplete = new window.google.maps.places.Autocomplete(
      inputRef.current,
      {
        types: ["(cities)"],
        componentRestrictions: {
          country: selectedCountry?.value?.toLowerCase(),
        },
      }
    );

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      console.log("Selected city:", place?.formatted_address);
    });
  }, [selectedCountry]);
  return (
    <Modal isOpen={isOpen} onClose={handleClose} size="2xl" isCentered>
      <ModalOverlay />
      <ModalContent borderRadius="10px" p={4} overflowY="auto" bg="#86644c">
        <ModalBody>
          <div
            className={`flex ${step > 1 ? "justify-between" : "justify-end"} `}
          >
            {step > 1 && (
              <button
                className="hover:bg-black hover:text-white rounded-full px-1"
                onClick={() => setStep(step - 1)}
              >
                <FaArrowLeft size={20} />
              </button>
            )}

            <button
              className="border px-2 py-2 rounded-md hover:bg-black hover:text-white"
              onClick={handleClose}
            >
              <ImCross />
            </button>
          </div>

          {step === 1 && (
            <div>
              <h1 className="text-white font-inter font-bold text-3xl">
                Where To?
              </h1>
              <div className="pt-5 flex flex-col gap-y-5">
                <div className="text-white flex items-center gap-x-5 pb-5 border-b">
                  <FaLocationDot size={30} />
                  <div>
                    {address.map((adr) => (
                      <p>
                        {adr?.addressLineOne},{adr?.addressLineTwo},{adr?.town},
                        {adr?.zipCode},{adr?.country}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="text-white flex items-center gap-x-5 pb-5 border-b">
                  <FaPlus size={30} />
                  <button onClick={() => setStep(2)}>Add new address</button>
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h1 className="text-white font-inter font-bold text-3xl pb-4 text-center">
                Add New Address
              </h1>
              <form className="flex flex-col gap-4">
                <div>
                  <Select
                    options={countryOptions}
                    placeholder="Select Countries"
                    onChange={(option) => setSelectedCountry(option)}
                    value={selectedCountry}
                    className="text-black"
                    styles={{
                      control: (provided) => ({
                        ...provided,
                        minHeight: "48px",
                        height: "48px",
                      }),
                      menu: (provided) => ({
                        ...provided,
                        maxHeight: "200px",
                        overflowY: "hidden",
                      }),
                      menuPortal: (base) => ({ ...base, zIndex: 9999 }),
                    }}
                    menuPortalTarget={document.body}
                    menuPosition="fixed"
                  />
                </div>
                <div>
                  {/* <Autocomplete> */}
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Chose a delivery address"
                    className="h-12 px-2 rounded-md bg-white text-black w-full "
                  />

                  {/* </Autocomplete> */}
                </div>

                <div className="flex gap-x-3">
                  <div className="flex flex-col gap-y-2 w-full">
                    <label className="text-white font-inter font-medium text-sm">
                      Country
                    </label>
                    <input
                      value={selectedCountry?.label || ""}
                      type="text"
                      placeholder="Enter country"
                      className="h-12 px-2 rounded-md bg-white text-black w-full "
                    />
                  </div>
                  <div className="flex flex-col gap-y-2 w-full">
                    <label className="text-white font-inter font-medium text-sm">
                      State
                    </label>
                    <input
                      type="text"
                      placeholder="enter state"
                      className="h-12 px-2 rounded-md bg-white text-black w-full "
                    />
                  </div>
                </div>
                <div className="flex gap-x-3">
                  <div className="flex flex-col gap-y-2 w-full">
                    <label className="text-white font-inter font-medium text-sm">
                      Town/City
                    </label>
                    <input
                      type="text"
                      placeholder="Enter town/city"
                      className="h-12 px-2 rounded-md bg-white text-black w-full "
                    />
                  </div>
                  <div className="flex flex-col gap-y-2 w-full">
                    <label className="text-white font-inter font-medium text-sm">
                      Zip Code
                    </label>
                    <input
                      type="text"
                      placeholder="enter zipcode"
                      className="h-12 px-2 rounded-md bg-white text-black w-full "
                    />
                  </div>
                </div>

                <div className="bg-white   h-14 w-full flex justify-center items-center rounded-md font-inter font-semibold">
                  <button type="submit" onClick={() => setStep(3)}>
                    Select From Map
                  </button>
                </div>
                <div className="bg-[#3e342c] text-white  h-14 w-full flex justify-center items-center rounded-md font-inter font-semibold">
                  <button type="submit">Save Address</button>
                </div>
              </form>
            </div>
          )}

          {step === 3 && (
            <div className="">
              <h1 className="text-white font-inter font-bold text-3xl">
                Address Details
              </h1>
              <p className="text-white font-inter font-medium py-3">
                Giving exact address details helps us deliver your order faster.
              </p>
              <h1 className="text-white font-inter font-bold text-2xl">
                Address
              </h1>
              <p className="text-white font-inter font-medium py-3">
                Address here
              </p>
              <div className="bg-white h-60 rounded-md">
                <CheckoutMap />
              </div>
              <div className="bg-[#3e342c] text-white  h-14 w-full flex justify-center items-center rounded-md font-inter font-semibold mt-3">
                <button type="submit">Save Address</button>
              </div>
            </div>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
