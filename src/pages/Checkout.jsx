import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CheckoutMap from "../components/CheckoutMap";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { MdOutlineMessage } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import PaymentMethodModal from "../components/PaymentMethodModal";
import { base_url } from "../utilities/URL";
import { clearCart, selectTotalPrice } from "../components/store/cartSlice";
import { toast } from "react-toastify";
import AddressModal from "../components/AddressModal";

export default function Checkout() {
  const selectedProducts = useSelector((state) => state.cart);
  const subtotal = useSelector(selectTotalPrice);
  const navigate = useNavigate();
  // const { isOpen, onOpen, onClose } = useDisclosure();
   const {
  isOpen: isPaymentOpen,
  onOpen: onPaymentOpen,
  onClose: onPaymentClose,
} = useDisclosure();

const {
  isOpen: isAddressOpen,
  onOpen: onAddressOpen,
  onClose: onAddressClose,
} = useDisclosure();
 const dispatch=useDispatch();

  const [note, setNote] = useState("");
  const [orderFrequency, setOrderFrequency] = useState("just-onces");
  const frequencies = [
    { label: "Just Once", value: "just-onces" },
    { label: "Weekly", value: "weekly" },
    { label: "Every two weeks", value: "every-two-weeks" },
    { label: "Every four weeks", value: "every-four-weeks" },
  ];

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(() => {
    const savedMethod = localStorage.getItem("selectedPaymentMethod");
    return savedMethod ? JSON.parse(savedMethod) : null;
  });

  const userDetail = JSON.parse(localStorage.getItem("user"));

  const [placeOrder, setPlaceOrder] = useState({
    order: {
      totalBill: 0,
      subTotal: 0,
      discountPrice: 0,
      discountPercentage: 0,
      itemsPrice: 0,
      vat: 0,
      totalWeight: 0,
      note: "",
      paymentMethod: "",
      poNumber: "",
      orderFrequency: "",
      addressId: null,
      userId: null,
    },
    items: [],
  });

  const handlePlaceOrder = async () => {
    const payload = {
      order: {
        note,
        paymentMethod: selectedPaymentMethod?.name || "",
        userId: userDetail?.id,
        addressId: userDetail?.address?.id,
        orderFrequency,
        totalBill: subtotal,
        subTotal: subtotal,
        discountPrice: 0,
        discountPercentage: 0,
        itemsPrice: subtotal,
      },
      items: selectedProducts.map((product) => ({
        productId: product.id,
        name: product.name,
        price: parseFloat(product.price),
        qty: product?.quantity,
        totalWeight: subtotal,
        discount: product.discount || 0,
        unit: product.unit,
        description: product.desc,
        image: product.image,
      })),
    };
    try {
      const response = await fetch(`${base_url}api/v1/users/book-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      if (result.status === "success") {
        setPlaceOrder(result?.data);
        localStorage.setItem("orderId", JSON.stringify(result?.data?.id))
toast.success("Order create successfully")
    dispatch(clearCart());
    navigate("/")
      } else {
        toast.error(result.message)
       
      }
    } catch (error) {
      toast.error(error.message)
    }
  };

  return (
    <div className="bg-[#86644c] relative">
      <Navbar />
      <div className="relative h-96">
        <CheckoutMap />
        <div className="absolute bottom-28 left-[30%]">
          <h2 className="text-5xl font-bold font-roboto">Checkout</h2>
          <h3 className="text-2xl font-bold">Name</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 px-5 md:px-0 max-w-[1200px] mx-auto gap-x-20 pb-20 md:pb-10">
        <div>
          <section className="py-10">
            <h1 className="text-3xl text-white font-semibold font-roboto pb-5">
              Delivery Details
            </h1>
            <div className="bg-[#3e342c] border-2 rounded-lg h-20 text-white flex justify-between items-center px-5">
            <div className=" flex items-center gap-x-3  text-lg font-semibold">
              <FaLocationCrosshairs />
              <div className=" font-normal text-base">
                <p className="text-orange-200">Delivery Address</p>
                <p>
                  {userDetail?.address?.addressLineOne}{" "}
                  {userDetail?.address?.addressLineTwo}
                </p>
              </div>
            </div>
            <div>
            <button className="bg-[#3e4033] text-green-600 px-4 py-2 font-inter font-semibold" onClick={()=>onAddressOpen()}>Change</button>
            </div>
            </div>
            <div className="relative w-full">
              <MdOutlineMessage className="absolute left-4 top-1/2 -translate-y-1/2 text-white z-10" />
              <div className="bg-[#3e342c] border-2 rounded-lg h-20 pl-12 pr-4 text-white text-lg font-semibold relative">
                <input
                  type="text"
                  id="note"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="peer bg-transparent w-full outline-none pt-4 text-white placeholder-transparent  text-xs sm:text-base"
                  placeholder="Add note for the supplier"
                />
                <label
                  htmlFor="note"
                  className="absolute left-12 top-1/2 -translate-y-1/2 text-sm text-white transition-all duration-200
                    peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-lg peer-placeholder-shown:text-white 
                    peer-focus:top-4 peer-focus:text-orange-200 peer-focus:text-sm "
                >
                  Add note for the supplier
                </label>
              </div>
            </div>
          </section>

          <section className="py-10">
            <h1 className="text-3xl text-white font-semibold font-roboto pb-5">
              Selected items
            </h1>
            <div className="flex flex-col gap-y-3">
              {selectedProducts.map((product) => (
                <div className="flex gap-x-5" key={product?.id}>
                  <div className="w-28 h-16 border-2 rounded-lg">
                    <img
                      src={`${base_url}${product?.image}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="text-white">
                    <h3 className="text-lg font-bold">
                      {product?.quantity}x {product.name}
                    </h3>
                    <p>{product?.unit}</p>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="text-white pt-5"
              onClick={() => navigate("/products")}
            >
              +Add more items
            </button>
          </section>

          <section className="pb-10">
            <h1 className="text-3xl text-white font-semibold font-roboto pb-5">
              Payment Method
            </h1>
            <div
              className="bg-[#3e342c] rounded-lg py-5 text-white px-5 text-lg font-semibold flex items-center justify-between cursor-pointer"
              onClick={onPaymentOpen}
            >
              {selectedPaymentMethod ? (
                <div className="flex items-center gap-x-3">
                  <img
                    src={selectedPaymentMethod.image}
                    alt={selectedPaymentMethod.name}
                    className="w-10 h-6 object-contain"
                  />
                  <div>
                    <p className="text-sm">{selectedPaymentMethod.name}</p>
                    <p className="text-xs sm:text-base">The chosen payment method will be changed</p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-x-3">
                  <FaLocationCrosshairs />
                  <p className="text-sm">
                    Choose a payment method
                    <br />
                    Please add a payment method to continue with your order
                  </p>
                </div>
              )}
              <IoMdArrowDropright size={40} />
            </div>
          </section>

          <section className="pb-1">
            <h1 className="text-3xl text-white font-semibold font-roboto pb-5">
              Order Frequency
            </h1>
            <div className="flex gap-x-4 text-sm text-[#7f4f32] text-center">
              {frequencies.map((freq, idx) => (
                <div
                  key={idx}
                  className="group bg-[#3e342c] px-1 md:px-4 py-2 rounded-lg flex justify-center items-center"
                >
                  <label
                    htmlFor={freq.value}
                    className={`cursor-pointer group-has-[input:checked]:text-white`}
                  >
                    {freq.label}
                  </label>
                  <input
                    type="radio"
                    name="subscription"
                    id={freq.value}
                    className="hidden peer"
                    checked={orderFrequency === freq.value}
                    onChange={() => setOrderFrequency(freq.value)}
                  />
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="right md:mt-[-100px] md:pl-20 pt-10 md:pt-0">
          <div className="md:bg-[#3e342c] text-white md:shadow-xl md:rounded-2xl p-6 text-sm font-medium self-start md:sticky top-48 ">
            <h2 className="text-2xl font-bold mb-1">Prices in USD ($)</h2>
            <p className="text-xs mb-2">incl. taxes (if applicable)</p>
            <p className="text-sm cursor-pointer py-4">How fees work</p>

            <div className="space-y-5">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{subtotal.toFixed(2)} $</span>
              </div>
              <div className="flex justify-between">
                <span>VAT</span>
                <span>5.00</span>
              </div>
              <div className="flex justify-between">
                <span>Total Weight</span>
                <span>{subtotal.toFixed(0)}.00 kg</span>
              </div>
              <div className="border-b border-dashed pb-5 flex justify-between font-bold text-base">
                <span>Total</span>
                <span>{subtotal.toFixed(2)} $</span>
              </div>
            </div>

            <div className="w-full mt-5 bg-[#3e342c] md:bg-[#86644c]  text-white py-3 rounded-lg text-center font-semibold hover:opacity-90 transition-all">
              <button
                onClick={() => {
                  if (!note.trim()) {
               
                    toast.warning("Note can not empty")
                    return;
                  }
                  if (!selectedPaymentMethod) {
              
                    toast.warning("Payment method required")
                    return;
                  }
                  handlePlaceOrder();
                }}
              >
                {selectedPaymentMethod
                  ? "Place Order"
                  : "Select Payment Method"}
              </button>
            </div>
          </div>
        </div>





     
        
      </div>

      <Footer />
      <PaymentMethodModal
        isOpen={isPaymentOpen}
        onClose={onPaymentClose}
        selectPaymentMethod={setSelectedPaymentMethod}
      />
      <AddressModal    isOpen={isAddressOpen}
        onClose={onAddressClose}/>
    </div>
  );
}
