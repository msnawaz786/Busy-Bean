import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { FaCirclePlus } from "react-icons/fa6";
import Coffee from "../components/Coffee";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import { base_url } from "../utilities/URL";
import { useDisclosure } from "@chakra-ui/react";
import ProductsModal from "../components/ProductsModal";

export default function Products() {
  const accessToken = localStorage.getItem("token");
  const [products, setProducts] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setIsLoading] = useState(true);

  const categoryDetail = async () => {
    const response = await fetch(`${base_url}api/v1/admin/category`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accessToken: `${accessToken}`,
      },
    });
    const result = await response.json();
    if (result.status === "success") {
      setCategories(result?.data?.data);
    } else {
      console.log("Error to fetch category");
    }
  };

  const productDetail = async () => {
    const response = await fetch(`${base_url}api/v1/admin/product`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accessToken: `${accessToken}`,
      },
    });
    const result = await response.json();
    console.log(result);
    if (result?.status === "success") {
      setProducts(result?.data?.data);
      setIsLoading(false);
    } else {
      console.log("Error fetch data");
    }
  };

  const handleProductClick = (products) => {
    setSelectedProduct(products);
    onOpen();
  };
  useEffect(() => {
    productDetail();
    categoryDetail();
  }, []);

  return (
    <div className="w-full ">
      <Navbar />

      {loading ? (
        <div className="bg-[#86644c] w-full h-screen flex items-center justify-center">
          <ul className="loader">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      ) : (
        <>
          <div className="pt-36 w-full">
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-white text-center font-roboto font-bold pb-10">
              Products
            </h1>
            <div className="bg-[url('/images/productbg.png')] bg-cover  w-full bg-no-repeat bg-center">
            <h1 className="text-xl sm:text-2xl md:text-5xl lg:text-6xl text-white text-center font-roboto font-bold pt-10">
            Exclusive Space to Showcase Your Product!</h1>
            <div className="flex gap-x-2 justify-center py-10">
              <div className="">
                <img src="/images/pr.png" />
              </div>
              <div className="">
                <img src="/images/pr.png" />
              </div>
              <div className="">
                <img src="/images/pr.png" />
              </div>
              <div className="">
                <img src="/images/pr.png" />
              </div>
            </div>

</div>

          </div>
          <div className="w-full text-center pt-16">
            <div className="inline-flex flex-wrap justify-center gap-3 text-white font-inter 2xl:w-[75%] mx-auto">
              {categories.map((category) => (
                <button
                  className="px-4 py-1.5 border rounded-full"
                  key={category?.id}
                >
                  {category?.name}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-b from-transparent to-[#191512]">
            <div className="grid grid-cols-2 lg:grid-cols-3 w-[95%] md:w-[90%] lg:w-[77%] mx-auto pt-14 gap-x-3 gap-y-3 lg:gap-10 text-white pb-28">
              {products.map((product) => (
                <div
                  className="border border-yellow-200 rounded-lg flex flex-col h-full"
                  key={product?.id}
                  onClick={() => handleProductClick(product)}
                >
                  <div className="h-40 sm:h-52 w-full">
                    <img
                      src={`${base_url}${product?.image}`}
                      className="h-full w-full rounded-t-lg object-cover"
                      alt={product?.name}
                    />
                  </div>

                  <div className="flex flex-col flex-grow justify-between px-2 sm:px-5 py-2 sm:py-5">
                    <div className="flex flex-col gap-y-0.5 sm:gap-y-2">
                      <h2 className="text-sm sm:text-2xl font-bold">
                        {product?.name}
                      </h2>
                      <span className="text-sm font-inter">
                        ${product?.price}
                      </span>
                      <p className="text-xs sm:text-sm font-inter overflow-hidden text-ellipsis line-clamp-2">
                        {product?.desc}
                      </p>
                    </div>

                    <div className="pt-3 sm:pt-5 flex justify-end">
                      <button className="bg-white px-2 sm:px-3 text-black py-1 sm:py-3 rounded-full flex items-center justify-center gap-x-2 sm:gap-x-4 font-inter text-xs sm:text-sm sm:font-medium">
                        Order now
                        <FaCirclePlus size={30} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Coffee />

          <div className="bg-[#322a23] w-full pb-10">
            <h1 className="text-center text-white font-bold font-roboto text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl md:py-24 py-10 px-10">
              What Our Customers Say About Our Products
            </h1>
            <div className="w-full xl:w-[90%] 2xl:w-[78%]   mx-auto px-5 lg:px-0">

              <Slider />
            </div>
          </div>
        </>
      )}

      <Footer />

      <ProductsModal
        isOpen={isOpen}
        onClose={onClose}
        product={selectedProduct}
      />
    </div>
  );
}
