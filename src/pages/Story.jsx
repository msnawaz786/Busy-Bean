import React from 'react'
import Navbar from '../components/Navbar'
import Mission from '../components/Mission'
import Slider from '../components/Slider'
import Footer from '../components/Footer'

export default function Story() {
  return (
    <div className='bg-[#3e342c]'>
      <Navbar />
      <div className='pt-36'>
        <h1 className='text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-white text-center  font-roboto font-bold pb-10'>Our Story</h1>
        <div className='w-ful h-[250px] sm:h-[400px] md:h-[500px] 2xl:h-[800px]'>
            <img src="/images/ourstory.png"  className='w-full h-full object-cover'/>
        </div>
      </div>

      <div className='pt-14 pb-14'>
        <h1 className='text-xl sm:text-4xl lg:text-6xl 2xl:text-7xl text-white text-center  font-roboto font-bold'>Meet Our Team</h1>
        <div className='grid grid-cols-1 md:grid-cols-3 text-white xl:w-[60%] mx-auto pt-10 md:pt-20 gap-y-10'>
            <div className='flex flex-col justify-center items-center'>
                <div className=''>
                    <img src='/images/image 31.png' />
                </div>
                <div className='pt-2 md:pt-8 flex flex-col gap-y-1  text-center'>
                    <h2 className='text-[30px] font-bold'>Travis Esters</h2>
                    <p className='text-base font-inter'>Owner, Co-Founder</p>
                </div>
                <div className='bg-[#F8E4BE] text-black pl px-4 py-2 flex justify-center items-center rounded-full mt-6'>
                    <buuton>Send Email</buuton>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <div className=''>
                    <img src='/images/image33.png' />
                </div>
                <div className='pt-2 md:pt-8 flex flex-col gap-y-1 text-center'>
                    <h2 className='text-[30px] font-bold'>Joe Argyle</h2>
                    <p  className='text-base font-inter'>Sales</p>
                </div>
                <div className='bg-[#F8E4BE] text-black pl px-4 py-2 flex justify-center items-center rounded-full mt-6'>
                    <buuton>Send Email</buuton>
                </div>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <div className=''>
                    <img src='/images/image34.png' />
                </div>
                <div className='pt-2 md:pt-8 flex flex-col gap-y-1 text-center'>
                    <h2 className='text-[30px] font-bold'>Travis Esters</h2>
                  <p  className='text-base font-inter'>Executive Chef<br />
                  Director of Technical Services</p>
                </div>
                <div className='bg-[#F8E4BE] text-black pl px-4 py-2 flex justify-center items-center rounded-full mt-6'>
                    <buuton>Send Email</buuton>
                </div>
            </div>

        </div>
      </div>

      <Mission />

      <div className="bg-[#322a23] w-full pb-10">
      <h1 className="text-center text-white font-bold font-roboto text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl md:py-24 py-10 px-10">

            What Our Customers Say About Our Products
          </h1>
          <div className="w-full xl:w-[90%] 2xl:w-[78%]   mx-auto px-5 lg:px-0">

            <Slider />
          </div>
        </div>

        <Footer />
    </div>
  )
}
