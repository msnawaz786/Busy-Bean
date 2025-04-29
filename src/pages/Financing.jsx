import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Financing() {
  return (
    <div>
        <div className="bg-gradient-to-b from-[#332b24] to-[#5C4F4A] ">
                <Navbar />
                <div className="md:pt-[300px] pt-[200px] ">
                  <div className="w-full flex flex-col items-center">
                    <h1 className="font-bold text-xl sm:text-3xl  lg:text-6xl 2xl:text-[90px] font-roboto text-center bg-gradient-to-r from-[#F8E4BE] to-[rgba(249,192,106,0.22)] bg-clip-text text-transparent mx-auto lg:leading-[85px] 2xl:leading-[125px] py-4">
                    Coming in the Next Phase!
                    </h1>
            <h2 className=' font-roboto text-center bg-gradient-to-r from-[#F8E4BE] to-[rgba(249,192,106,0.22)] bg-clip-text text-transparent mx-auto  text-xs  md:text-base xl:text-xl '>"We’re working on this section as part of our next release. Stay tuned for exciting updates!"</h2>
                  </div>
                  <div className="w-full h-20 mt-20 md:mt-52 bg-[url('/images/frame1st.png')] bg-cover bg-no-repeat"></div>
                </div>
           
              </div>
              <Footer />
    </div>
  )
}
