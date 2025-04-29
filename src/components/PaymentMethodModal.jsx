import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

export default function PaymentMethodModal({ isOpen, onClose ,selectPaymentMethod}) {
  
  const handleSelect = (method) => {
    localStorage.setItem("selectedPaymentMethod", JSON.stringify(method));
    onClose();
    selectPaymentMethod(method); 
  
  };
  
  
    return (
      <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
        <ModalOverlay />
        <ModalContent borderRadius="2xl" backgroundColor="#86644c">
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
            <div className="text-white px-5 pt-20 pb-10">
              <h1 className="text-3xl font-bold font-inter pb-5">Payment Method</h1>
  
           
              <div className="flex items-center justify-between border-b pb-5">
                <div className="flex items-center gap-x-5">
                  <div className="w-12 h-8">
                    <img src="/images/cod.png" className="w-full h-full object-contain" />
                  </div>
                  <h1 className="text-xl font-semibold">COD</h1>
                </div>
                <button 
                  className="text-xl font-semibold bg-[#775a46] px-3 py-2 rounded-lg"
                  onClick={() => handleSelect({ name: "COD", image: "/images/cod.png" })}
                >
                  Choose
                </button>
              </div>
  
      
              <div className="flex items-center justify-between border-b py-5">
                <div className="flex items-center gap-x-5">
                  <div className="w-12 h-8">
                    <img src="/images/cod.png" className="w-full h-full object-contain" />
                  </div>
                  <h1 className="text-xl font-semibold">Cheque</h1>
                </div>
                <button 
                  className="text-xl font-semibold bg-[#775a46] px-3 py-2 rounded-lg"
                  onClick={() => handleSelect({ name: "Cheque", image: "/images/cod.png" })}
                >
                  Choose
                </button>
              </div>
  
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  }
  
