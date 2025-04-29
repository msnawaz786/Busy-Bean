import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { base_url } from "../utilities/URL";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./store/cartSlice";
import { toast } from "react-toastify";

export default function ProductsModal({ isOpen, onClose, product }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const cartItem = cartItems.find((item) => item.id === product?.id);
  const [localQuantity, setLocalQuantity] = useState(1);

  useEffect(() => {
    setLocalQuantity(cartItem ? cartItem.quantity : 1);
  }, [product]);

  const handleAddToCart = () => {
    const productWithQuantity = { ...product, quantity: localQuantity };
    dispatch(add(productWithQuantity));

    if (cartItem) {
      toast.success("Product updated successfully!");
    } else {
      toast.success("Product added successfully!");
    }

    onClose();
  };

  const handleIncrease = () => {
    setLocalQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (localQuantity > 1) {
      setLocalQuantity((prev) => prev - 1);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="lg"
      isCentered
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent borderRadius="2xl" backgroundColor="#3e342c">
        <ModalCloseButton
          style={{
            fontSize: "12px",
            color: "black",
            padding: "8px",
            backgroundColor: "#e0e0e0",
            borderRadius: "50%",
          }}
        />
        <ModalBody p={0}>
          <div className="w-full h-52 flex items-center justify-center">
            <img
              src={`${base_url}${product?.image}`}
              alt={product?.name}
              className="h-full w-full rounded-lg object-cover"
            />
          </div>

          <div className="px-5 py-5 flex flex-col gap-y-2 text-white">
            <h2 className="text-2xl font-bold">{product?.name}</h2>
            <span className="text-sm">${product?.price}</span>
            <p className="text-sm">{product?.desc}</p>
          </div>

          <div className="px-5 pb-7 flex items-center gap-5">
            <div className="w-[30%] bg-[#d0be9f] h-14 flex items-center justify-between rounded-full px-1 shadow-md">
              <button
                className={`bg-[#86644c] w-12 h-12 rounded-full flex justify-center items-center text-white text-2xl font-bold leading-none text-center ${
                  localQuantity === 1 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={handleDecrease}
                disabled={localQuantity === 1}
              >
                -
              </button>

              <span className="text-white font-semibold text-lg">
                {localQuantity}
              </span>
              <button
                className="bg-[#86644c] w-12 h-12 rounded-full flex justify-center items-center text-white text-2xl font-bold leading-none text-center"
                onClick={handleIncrease}
              >
                +
              </button>
            </div>

            <button
              className="w-[70%] h-14 flex justify-center items-center font-bold bg-[#86644c] text-white rounded-full shadow-md hover:bg-[#6e4e3c] transition-all duration-300"
              onClick={handleAddToCart}
            >
              {cartItem ? <h1>Update cart</h1> : <h1>Add to cart</h1>}
            </button>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
