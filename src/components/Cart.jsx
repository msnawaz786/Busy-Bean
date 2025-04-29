import React, { useEffect, useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrease,
  increase,
  remove,
  selectTotalPrice,
} from "./store/cartSlice";
import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { base_url } from "../utilities/URL";

export default function Cart({ isOpen, onClose }) {
  const navigate = useNavigate();

  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(null);
  const userDetail = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  const handleIncrease = (id) => {
    dispatch(increase(id));
  };

  const handleDecrease = (id) => {
    dispatch(decrease(id));
  };

  const toggleEditing = (id) => {
    setIsEditing(isEditing === id ? null : id);
  };

  const totalPrice = useSelector(selectTotalPrice);

  return (
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
        <DrawerCloseButton
          style={{
            fontSize: "12px",
            color: "white",
            padding: "8px",
            backgroundColor: "#3e342c",
            borderRadius: "50%",
          }}
        />
        <DrawerHeader>
          <h1 className="font-extrabold  text-3xl text-white pt-16">
            Your Order
          </h1>
        </DrawerHeader>

        <DrawerBody className="overflow-y-auto custom-scrollbar">
          <div className="flex flex-col">
            {products.map((product) => (
              <div
                key={product.id}
                className=" p-2 flex items-center justify-between space-x-4"
              >
                <div className="w-28 h-16 flex items-center justify-center">
                  <img
                    src={`${base_url}${product.image}`}
                    alt={product.title}
                    className=" w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 ">
                  <h3 className="  text-lg font-bold text-white">
                    {product.name}
                  </h3>

                  <span className="font-bold text-white">
                    ${(product.price * product.quantity).toFixed(2)}
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  {isEditing !== product.id ? (
                    <div
                      className="bg-[#3e342c] text-white w-8 h-8 flex items-center justify-center rounded-full cursor-pointer "
                      onClick={() => toggleEditing(product.id)}
                    >
                      {product.quantity}
                    </div>
                  ) : (
                    <div className="flex items-center bg-[#3e342c] text-white w-32 py-2 rounded-full  justify-around font-bold">
                      <button onClick={() => handleDecrease(product.id)}>
                        -
                      </button>
                      <div>{product.quantity}</div>
                      <button onClick={() => handleIncrease(product.id)}>
                        +
                      </button>
                      <button onClick={() => handleRemove(product.id)}>
                        <RiDeleteBinLine />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </DrawerBody>

        <div className="flex justify-center mt-10 bg-[#3e342c] mb-2 mx-3 rounded-full font-bold text-sm">
          <button className="text-white px-6 py-4 transition-all duration-200 flex justify-between w-full">
            <div className="flex justify-between items-center gap-x-2 w-full">
              {products.length > 0 ? (
                <>
                  <div
                    className="flex items-center gap-x-2"
                    onClick={() => {userDetail?.status ? navigate("/checkout") : navigate("/login")}}
                  >
                    <span className="size-4 flex items-center justify-center rounded-full bg-white text-black text-xs">
                      {products.length}
                    </span>
                    <h2>Go to Checkout</h2>
                  </div>
                  <span>$ {totalPrice.toFixed(2)}</span>
                </>
              ) : (
                <h2
                  onClick={() => navigate("/products")}
                  className="w-full text-center"
                >
                  Add item
                </h2>
              )}
            </div>
          </button>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
