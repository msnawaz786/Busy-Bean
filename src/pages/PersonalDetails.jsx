import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { base_url } from "../utilities/URL";
import { useSlider } from "@chakra-ui/react";
import { toast } from "react-toastify";

export default function PersonalDetails() {
  const userDetail = JSON.parse(localStorage.getItem("user"));
  const [model, setModel] = useState({
    type: "",
    open: false,
  });
  const [profile, setProfile] = useState({
    userId: userDetail?.id || "",
    name: userDetail?.name || "",
    phoneNumber: userDetail?.phoneNumber || "",
    saleTaxNumber: userDetail?.saleTaxNumber || "",
    emailToSendInvoices: userDetail?.emailToSendInvoices || "",
    companyName: userDetail?.companyName || "",
    addressId: userDetail?.address?.id || "",
    companyaddress: userDetail?.address?.companyaddress || "",
    addressLineOne: userDetail?.address?.addressLineOne || "",
    addressLineTwo: userDetail?.address?.addressLineTwo || "",
    town: userDetail?.address?.town || "",
    zipCode: userDetail?.address?.zipCode || "",
    country: userDetail?.address?.country || "",
    state: userDetail?.address?.state || "",
  });

  const accessToken = localStorage.getItem("token");

  const handleProfileUpdate = async (type) => {
    let data = {};

    if (type === "name") {
      data = { userId: profile.userId, userData: { name: profile.name } };
    } else if (type === "companyName") {
      data = { userId: profile.userId, userData: { companyName: profile.companyName } };
    } else if (type === "emailToSendInvoices") {
      data = { userId: profile.userId, userData: { emailToSendInvoices: profile.emailToSendInvoices } };
    } else if (type === "phoneNumber") {
      data = { userId: profile.userId, userData: { phoneNumber: profile.phoneNumber } };
    } else if (type === "saleTaxNumber") {
      data = { userId: profile.userId, userData: { saleTaxNumber: profile.saleTaxNumber } };
    } else if (type === "address") {
      data = {
        addressId: profile.addressId,
        addressData: {
          companyaddress: profile.companyaddress,
          addressLineOne: profile.addressLineOne,
          addressLineTwo: profile.addressLineTwo,
          town: profile.town,
          zipCode: profile.zipCode,
          country: profile.country,
          state: profile.state,
        },
      };
    }

    const res = await fetch(`${base_url}api/v1/users/drawer/update-profile`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        accessToken,
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (result?.status === "success") {
      if (model.type === "name") {
        localStorage.setItem("userName", profile.name);
      } else if (model.type === "companyName") {
        localStorage.setItem("companyName", profile.companyName);
      } else if (model.type === "emailToSendInvoices") {
        localStorage.setItem("emailToSendInvoices", profile.emailToSendInvoices);
      } else if (model.type === "saleTaxNumber") {
        localStorage.setItem("saleTaxNumber", profile.saleTaxNumber);
      } else if (model.type === "phoneNumber") {
        localStorage.setItem("phoneNumber", profile.phoneNumber);
      } else if (model.type === "address") {
        localStorage.setItem("address", JSON.stringify({
          companyaddress: profile.companyaddress,
          addressLineOne: profile.addressLineOne,
          addressLineTwo: profile.addressLineTwo,
          town: profile.town,
          zipCode: profile.zipCode,
          country: profile.country,
          state: profile.state,
        }));
      }

      setModel({ type: "", open: false });
      toast.success("Profile updated successfully!");
    } else {
      toast.error("Update failed!");
    }
  };

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
              <h1 className="text-white text-sm sm:text-lg font-medium max-lg:col-span-2">
                Name
              </h1>

              {model.type === "name" ? (
                <input
                  value={profile.name}
                  onChange={(e) =>
                    setProfile({ ...profile, name: e.target.value })
                  }
                  className="text-white bg-transparent border border-[#86644c] px-2 py-1 rounded outline-none"
                />
              ) : (
                <p className="text-[#9f9a96] text-sm sm:text-base">
                  {profile?.name || "N/A"}
                </p>
              )}

              <div className="flex justify-end">
                {model.type === "name" ? (
                  <button
                    onClick={() => handleProfileUpdate("name")}
                    className="text-black bg-white py-1 px-2 rounded-lg text-sm sm:text-lg font-medium"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      setModel({ ...model, type: "name", open: true })
                    }
                    className="text-white text-sm sm:text-lg font-medium"
                  >
                    Edit
                  </button>
                )}
              </div>
            </div>

            <div className="border-b border-[#86644c] pb-7 grid grid-cols-2 lg:grid-cols-3 items-center">
              <h1 className="text-white  text-sm sm:text-lg font-medium max-lg:col-span-2">
                Company Name
              </h1>
              {model.type === "companyName" ? (
                <input
                  value={profile.companyName}
                  onChange={(e) =>
                    setProfile({ ...profile, companyName: e.target.value })
                  }
                  className="text-white bg-transparent border border-[#86644c] px-2 py-1 rounded outline-none"
                />
              ) : (
                <p className="text-[#9f9a96] text-sm sm:text-base">
                  {profile?.companyName || "N/A"}
                </p>
              )}

              <div className="flex justify-end">
                {model.type === "companyName" ? (
                  <button
                    onClick={() => handleProfileUpdate("companyName")}
                    className="text-black bg-white py-1 px-2 rounded-lg text-sm sm:text-lg font-medium"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      setModel({ ...model, type: "companyName", open: true })
                    }
                    className="text-white text-sm sm:text-lg font-medium"
                  >
                    Edit
                  </button>
                )}
              </div>
            </div>
            <div className="border-b border-[#86644c] pb-7 grid grid-cols-2 lg:grid-cols-3 items-center">
              <h1 className="text-white  text-sm sm:text-lg font-medium max-lg:col-span-2">
                Email address
              </h1>
              <div className="text-[#9f9a96] text-sm sm:text-base">
                <p className="">
                  {userDetail?.status ? userDetail?.email : "email@gmail.com"}
                </p>
                <p>This is the email address you can to sign in.</p>
              </div>
            </div>
            <div className="border-b border-[#86644c] pb-7 grid grid-cols-2 lg:grid-cols-3 items-center">
              <h1 className="text-white text-sm sm:text-lg font-medium max-lg:col-span-2">
                Email to send invoice
              </h1>

              {model.type === "emailToSendInvoices" ? (
                <input
                  value={profile.emailToSendInvoices}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      emailToSendInvoices: e.target.value,
                    })
                  }
                  className="text-white bg-transparent border border-[#86644c] px-2 py-1 rounded outline-none"
                />
              ) : (
                <div className="text-[#9f9a96] text-sm sm:text-base">
                  <p>
                    {userDetail?.status
                      ? profile?.emailToSendInvoices
                      : "email@gmail.com"}
                  </p>
                  <p>This email is used to send invoices</p>
                </div>
              )}

              <div className="flex justify-end">
                {model.type === "emailToSendInvoices" ? (
                  <button
                    onClick={() => handleProfileUpdate("emailToSendInvoices")}
                    className="text-black bg-white py-1 px-2 rounded-lg text-sm sm:text-lg font-medium"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      setModel({
                        ...model,
                        type: "emailToSendInvoices",
                        open: true,
                      })
                    }
                    className="text-white text-sm sm:text-lg font-medium"
                  >
                    Edit
                  </button>
                )}
              </div>
            </div>

            <div className="border-b border-[#86644c] pb-7 grid grid-cols-2 lg:grid-cols-3 items-center">
              <h1 className="text-white text-sm sm:text-lg font-medium max-lg:col-span-2">
                Phone Number
              </h1>

              {model.type === "phoneNumber" ? (
                <input
                  value={profile.phoneNumber}
                  onChange={(e) =>
                    setProfile({ ...profile, phoneNumber: e.target.value })
                  }
                  className="text-white bg-transparent border border-[#86644c] px-2 py-1 rounded outline-none"
                />
              ) : (
                <p className="text-[#9f9a96] text-sm sm:text-base">
                  {userDetail?.status ? profile?.phoneNumber : "000000000"}
                </p>
              )}

              <div className="flex justify-end">
                {model.type === "phoneNumber" ? (
                  <button
                    onClick={() => handleProfileUpdate("phoneNumber")}
                    className="text-black bg-white py-1 px-2 rounded-lg text-sm sm:text-lg font-medium"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      setModel({ ...model, type: "phoneNumber", open: true })
                    }
                    className="text-white text-sm sm:text-lg font-medium"
                  >
                    Edit
                  </button>
                )}
              </div>
            </div>

            <div className="border-b border-[#86644c] pb-7 grid grid-cols-2 lg:grid-cols-3 items-center">
              <h1 className="text-white text-sm sm:text-lg font-medium max-lg:col-span-2">
                Sales Tax Number
              </h1>

              {model.type === "saleTaxNumber" ? (
                <input
                  value={profile.saleTaxNumber}
                  onChange={(e) =>
                    setProfile({ ...profile, saleTaxNumber: e.target.value })
                  }
                  className="text-white bg-transparent border border-[#86644c] px-2 py-1 rounded outline-none"
                />
              ) : (
                <p className="text-[#9f9a96] text-sm sm:text-base">
                  {profile?.saleTaxNumber || "-"}
                </p>
              )}

              <div className="flex justify-end">
                {model.type === "saleTaxNumber" ? (
                  <button
                    onClick={() => handleProfileUpdate("saleTaxNumber")}
                    className="text-black bg-white py-1 px-2 rounded-lg text-sm sm:text-lg font-medium"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      setModel({ ...model, type: "saleTaxNumber", open: true })
                    }
                    className="text-white text-sm sm:text-lg font-medium"
                  >
                    Edit
                  </button>
                )}
              </div>
            </div>

            <div className="border-b border-[#86644c] pb-7 grid grid-cols-2 lg:grid-cols-3 items-center">
              <h1 className="text-white text-sm sm:text-lg font-medium max-lg:col-span-2">
                Address
              </h1>

              {model.type === "address" ? (
                <div className="flex flex-col gap-y-5">
                  <div className="flex flex-col">
                    <label className="text-white">Country</label>
                    <input
                      type="text"
                      placeholder="Country"
                      value={profile.country}
                      onChange={(e) =>
                        setProfile({ ...profile, country: e.target.value })
                      }
                      className="text-white bg-transparent border border-[#86644c] px-2 py-1 rounded outline-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-white">Address 1</label>
                    <input
                      type="text"
                      placeholder="address"
                      value={profile.addressLineOne}
                      onChange={(e) =>
                        setProfile({
                          ...profile,
                          addressLineOne: e.target.value,
                        })
                      }
                      className="text-white bg-transparent border border-[#86644c] px-2 py-1 rounded outline-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="text-white">State</label>
                    <input
                      type="text"
                      placeholder="State"
                      value={profile.state}
                      onChange={(e) =>
                        setProfile({ ...profile, state: e.target.value })
                      }
                      className="text-white bg-transparent border border-[#86644c] px-2 py-1 rounded outline-none"
                    />
                  </div>
                  <div className="flex gap-x-5 w-full">
                    <div className="flex flex-col">
                      <label className="text-white">Zip Code</label>
                      <input
                        type="text"
                        placeholder="Zip Code"
                        value={profile.zipCode}
                        onChange={(e) =>
                          setProfile({ ...profile, zipCode: e.target.value })
                        }
                        className="text-white bg-transparent border border-[#86644c] px-2 py-1 rounded outline-none"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-white">City</label>
                      <input
                        type="text"
                        placeholder="City"
                        value={profile.town}
                        onChange={(e) =>
                          setProfile({ ...profile, town: e.target.value })
                        }
                        className="text-white bg-transparent border border-[#86644c] px-2 py-1 rounded outline-none"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-[#9f9a96] text-sm sm:text-base col-span-2 lg:col-span-1">
                  {profile?.addressLineOne || "-"} {profile?.city || ""}{" "}
                  {profile?.zipCode || ""} {profile?.country || ""}{" "}
                  {profile?.state || ""}
                </p>
              )}

              <div className="flex justify-end">
                {model.type === "address" ? (
                  <button
                    onClick={() => handleProfileUpdate("address")}
                    className="text-black bg-white py-1 px-2 rounded-lg text-sm sm:text-lg font-medium"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      setModel({ ...model, type: "address", open: true })
                    }
                    className="text-white text-sm sm:text-lg font-medium"
                  >
                    Edit
                  </button>
                )}
              </div>
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
