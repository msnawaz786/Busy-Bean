import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import Cart from "./Cart";
import { useSelector } from "react-redux";
import { FaShoppingCart, FaUserAlt } from "react-icons/fa";
import UserModal from "./UserModal";
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {
  const navigate = useNavigate();
  const totalQuantity = useSelector((state) =>
    state.cart.reduce((total, product) => total + product.quantity, 0)
  );
  const product=useSelector(state=>state.cart);

  const {
    isOpen: isCartOpen,
    onOpen: onCartOpen,
    onClose: onCartClose,
  } = useDisclosure();

  const {
    isOpen: isUserModalOpen,
    onOpen: onUserModalOpen,
    onClose: onUserModalClose,
  } = useDisclosure();

  const userDetail = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="fixed top-7 left-1/2 transform -translate-x-1/2 bg-[#645548] h-16 sm:h-20 w-[90%] lg:w-[77%]  rounded-2xl z-[100]">
      <div className=" lg:pl-9 flex items-center w-full h-full justify-between pr-4 lg:pr-9 font-inter">
        <div
          className="h-12 lg:h-14 w-40 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src="/images/logowhite.png"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="text-white hidden md:block">
          <ul className="flex items-center gap-x-2  lg:gap-x-5 font-medium">
            <li className="cursor-pointer" onClick={() => navigate("/story")}>
              Our Story{" "}
            </li>
            <li
              className="cursor-pointer"
              onClick={() => navigate("/financing")}
            >
              Financing
            </li>
            <li
              className="cursor-pointer"
              onClick={() => navigate("/resources")}
            >
              Resources
            </li>
            <li
              className="cursor-pointer"
              onClick={() => navigate("/products")}
            >
              Products
            </li>
          </ul>
        </div>
        <div className="flex md:gap-x-2 xl:gap-x-6 items-center">
          <div
            className="h-12 w-10 md:w-24 xl:w-28 md:bg-white rounded-xl flex items-center gap-x-2 justify-center cursor-pointer"
            onClick={onCartOpen}
          >
            <div className="w-[30px] h-[30px] bg-[#3E342C] rounded-full text-white flex justify-center items-center">
              <FaShoppingCart />
            </div>

            <p className="text-lg font-medium text-[#3D332B] hidden md:block">
              Cart
            </p>

            {totalQuantity > 0 && (
              <span className="bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full absolute md:relative bottom-10 right-[50px] md:bottom-3 md:right-16">
                {product?.length}
              </span>
            )}
          </div>
          <div>
  {userDetail?.status === true ? (
    <div className="bg-white h-12 w-20 rounded-full hidden md:flex justify-between px-1 items-center cursor-pointer "  onClick={onUserModalOpen}>
      <div className="bg-black w-10 h-10 rounded-full flex justify-center items-center text-white text-xs">
        {userDetail?.name?.slice(0,2).toUpperCase()}
      </div>
      <div className="">
      <IoIosArrowDown size={20}/>
      </div>
    </div>
  ) : (
    <div
      className="h-12 border-2 border-white w-20  justify-center items-center rounded-xl text-white hidden md:flex"
      onClick={() => navigate("/login")}
    >
      <button>Log in</button>
    </div>
  )}
</div>

       
          <div
            className="w-[30px] h-[30px] bg-[#3E342C] rounded-full text-white flex justify-center items-center md:hidden cursor-pointer"
            onClick={onUserModalOpen}
          >
            {userDetail?.status ? userDetail?.name?.slice(0 , 2).toUpperCase() :  <FaUserAlt />}
          
          </div>
        </div>
      </div>
      <Cart isOpen={isCartOpen} onClose={onCartClose} />
      <UserModal isOpen={isUserModalOpen} onClose={onUserModalClose} />
    </div>
  );
}
