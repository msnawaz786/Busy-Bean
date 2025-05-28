import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosNotifications,
} from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { LuCircleUserRound, LuHistory, LuUsers } from "react-icons/lu";
import { MdSupportAgent } from "react-icons/md";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearCart } from "./store/cartSlice";
import { toast } from "react-toastify";
import { RiLogoutBoxRLine } from "react-icons/ri";
export default function UserModal({ isOpen, onClose }) {
  const navigate = useNavigate();
  const scrollBar = () => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };
  scrollBar();
  const dispatch = useDispatch();
  const userDetail = JSON.parse(localStorage.getItem("user"));
  // const totalOrders = JSON.parse(localStorage.getItem("totalOrders"));
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("selectedPaymentMethod");
    dispatch(clearCart());
    onClose();
    toast.success("Successfully logged out");

    navigate("/");
  };

  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="md">
        <DrawerOverlay />
        <DrawerContent
          sx={{
            borderTopLeftRadius: "1rem",
            borderBottomLeftRadius: "0rem",
            overflow: "hidden",
            backgroundColor: "#86644c",
          }}
        >
          <div className="text-white pt-5 px-5 text-2xl flex items-center justify-between">
            <IoIosArrowBack className="cursor-pointer" onClick={onClose} />
            <IoIosNotifications />
          </div>

          <DrawerBody>
            <h1 className="text-white font-bold text-3xl font-roboto py-5 ">
              Howdy {userDetail?.status ? userDetail?.name:"User"}
            </h1>
            <div className="flex items-center gap-x-10">
              <div className="text-white text-5xl border-2  rounded-full size-28 flex justify-center items-center">
                <FaUserAlt />
              </div>
              <div className="text-white flex flex-col gap-y-2">
                <h1 className="text-2xl font-semibold">
                  Hi,
                  {userDetail?.status ? userDetail?.name?.split(" ")[0] : "user"}

                </h1>

                <p className="text-lg font-medium">
                  {userDetail?.status ? userDetail?.email : "user@gmail.com"}
                </p>
                <p className="text-lg font-medium">
                  {userDetail?.status ? userDetail?.phoneNumber : ""}
                </p>

                {/* <div className="flex gap-x-4 text-lg font-medium">
                  <div className="">
                    <span>{userDetail?.status ? totalOrders : "0"}</span>
                    <p>Order</p>
                  </div>
                  <div className="">
                    <span>5</span>
                    <p>Token</p>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="text-white pt-10 ">
              <h1 className="font-semibold text-2xl font-roboto">Settings</h1>
              <div className="main font-medium font-inter">
                {/* <div className="flex items-center justify-between border-b pb-4 pt-5 cursor-pointer">
                  <div className="flex items-center gap-x-5">
                    <LuUsers />
                    <p>Invite Friends</p>
                  </div>
                  <IoIosArrowForward />
                </div> */}
                <div className="flex items-center justify-between border-b pb-4 pt-5 cursor-pointer">
                  <div className="flex items-center gap-x-5">
                    <MdSupportAgent size={24} />

                    <p>Support</p>
                  </div>
                  <IoIosArrowForward />
                </div>
                <div
                  className="flex items-center justify-between border-b pb-4 pt-5 cursor-pointer"
                  onClick={() => navigate("/order-history")}
                >
                  <div className="flex items-center gap-x-5">
                    <LuHistory size={24} />

                    <p>Order History</p>
                  </div>
                  <IoIosArrowForward />
                </div>
                {/* <div className="flex items-center justify-between border-b pb-4 pt-5 cursor-pointer">
                  <div className="flex items-center gap-x-5">
                    <LuUsers />
                    <p>Account</p>
                  </div>
                  <IoIosArrowForward />
                </div>
                <div className="flex items-center justify-between border-b pb-4 pt-5 cursor-pointer">
                  <div className="flex items-center gap-x-5">
                    <LuUsers />
                    <p>Payment methods</p>
                  </div>
                  <IoIosArrowForward />
                </div>
                <div className="flex items-center justify-between border-b pb-4 pt-5 cursor-pointer">
                  <div className="flex items-center gap-x-5">
                    <LuUsers />
                    <p>My Addresses</p>
                  </div>
                  <IoIosArrowForward />
                </div> */}

                {/* <div className="flex items-center justify-between border-b pb-4 pt-5 cursor-pointer">
                  <div className="flex items-center gap-x-5">
                    <LuUsers />
                    <p>Secruity</p>
                  </div>
                  <IoIosArrowForward />
                </div> */}
              </div>
            </div>

            <div className="text-white pt-10 ">
              <h1 className="font-semibold text-2xl font-roboto">
                Quick Linnks
              </h1>
              <div className="main font-medium font-inter">
                <div
                  className="flex items-center justify-between border-b pb-4 pt-5 cursor-pointer"
                  onClick={() => navigate("/story")}
                >
                  <div className="flex items-center gap-x-5">
                    <LuUsers size={24} />
                    <p>Our Story</p>
                  </div>
                  <IoIosArrowForward />
                </div>
                <div
                  className="flex items-center justify-between border-b pb-4 pt-5 cursor-pointer"
                  onClick={() => navigate("/financing")}
                >
                  <div className="flex items-center gap-x-5">
                    <LuUsers size={24} />

                    <p>Financing</p>
                  </div>
                  <IoIosArrowForward />
                </div>
                <div
                  className="flex items-center justify-between border-b pb-4 pt-5 cursor-pointer"
                  onClick={() => navigate("/resources")}
                >
                  <div className="flex items-center gap-x-5">
                    <LuUsers size={24} />

                    <p>Resources</p>
                  </div>
                  <IoIosArrowForward />
                </div>
                <div
                  className="flex items-center justify-between border-b pb-4 pt-5 cursor-pointer"
                  onClick={() => navigate("/products")}
                >
                  <div className="flex items-center gap-x-5">
                    <LuUsers size={24} />

                    <p>Products</p>
                  </div>
                  <IoIosArrowForward />
                </div>
                <div
                  className="flex items-center justify-between border-b pb-4 pt-5 cursor-pointer"
                  onClick={() => navigate("/payment-detail")}
                >
                  <div className="flex items-center gap-x-5">
                    <LuUsers size={24} />

                    <p>Payment details</p>
                  </div>
                  <IoIosArrowForward />
                </div>
                <div
                  className="flex items-center justify-between border-b pb-4 pt-5 cursor-pointer"
                  onClick={() => navigate("/personal-detail")}
                >
                  <div className="flex items-center gap-x-5">
                    <LuUsers size={24} />

                    <p>Personal Details</p>
                  </div>
                  <IoIosArrowForward />
                </div>
                <div
                  className="flex items-center justify-between border-b pb-4 pt-5 cursor-pointer"
                  onClick={() => navigate("/preference")}
                >
                  <div className="flex items-center gap-x-5">
                    <LuUsers size={24} />

                    <p>Preferences</p>
                  </div>
                  <IoIosArrowForward />
                </div>
                <div
                  className="flex items-center justify-between border-b pb-4 pt-5 cursor-pointer"
                  onClick={() => navigate("/security")}
                >
                  <div className="flex items-center gap-x-5">
                    <LuUsers size={24} />

                    <p>Secruity</p>
                  </div>
                  <IoIosArrowForward />
                </div>
                <div className="flex items-center justify-between border-b pb-4 pt-5 cursor-pointer">
                  {userDetail?.status === true && (
                    <div
                      className="flex items-center gap-x-5"
                      onClick={handleLogout}
                    >
                      <RiLogoutBoxRLine size={24} />

                      <p>Logout</p>
                    </div>
                  )}
                  {userDetail?.status !== true && (
                    <div
                      className="flex items-center gap-x-5"
                      onClick={() => navigate("/login")}
                    >
                      <RiLogoutBoxRLine />

                      <p>Login</p>
                    </div>
                  )}

                  <IoIosArrowForward />
                </div>
              </div>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
