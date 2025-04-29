import React from 'react'
import Navbar from '../components/Navbar'
import Slider from "../components/Slider";
import Footer from '../components/Footer';
import ResourceSlider from '../components/ResourceSlider';


export default function Resources() {
  return (
    <div>
      <Navbar />
      <div className='pt-40 pb-20'>
        <h1 className='text-white text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-10 text-center font-roboto'>Busy Bean Coffee <br />
        Executive Chef Leslie</h1>
        <div className='w-ful h-[250px] sm:h-[400px] md:h-[500px] 2xl:h-[800px]'>
            <img src="/images/recepies.png"  className='w-full h-full object-cover'/>
        </div>
      </div>

      <div className=''>
        <ResourceSlider />
      </div>

      <section>
        <div className="bg-[#322a23] w-full pb-10">
          <h1 className="text-center text-white font-bold font-roboto text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl md:py-24 py-10 px-10">
            What Our Customers Say About Our Products
          </h1>
          <div className="w-full xl:w-[90%] 2xl:w-[78%]   mx-auto px-5 lg:px-0">

            <Slider />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
