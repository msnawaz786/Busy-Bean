import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { GrLinkedinOption } from 'react-icons/gr'

export default function Footer() {
  return (
    <div className='w-full bg-[#3d332b]'>
    <div className='w-[90%] lg:w-[77%]   mx-auto pt-5 md:pt-14'>
    <div className='grid grid-cols-1 md:grid-cols-3 font-roboto text-white gap-y-5 sm:gap-y-10 text-xs sm:text-base'>

  <div className='flex flex-col gap-y-2 sm:gap-y-5'>
    <div className='w-24 sm:w-40'>
      <img src='/images/footer1.png' className='w-full h-full object-contain' />
    </div>
    <div className='w-24 sm:w-40'>
      <img src='/images/footer2.png' className='w-full h-full object-contain' />
    </div>
    <p>We stand behind the quality of all of our product and are happy to answer any questions.</p>
  </div>


  <div className='flex flex-col gap-y-2 md:items-center items-start'>
    <div className='flex flex-col sm:gap-y-3 gap-y-1'>
    <p>Questions or Concerns?</p>
    <p>Call (833) THE-BEAN</p>
    <p>Email: info@busybeancoffee.com</p>
    </div>
  </div>


  <div className='flex flex-col items-start md:ml-auto'>
    <p>Follow us on media</p>

    <div className='flex gap-x-3 sm:py-8 py-2'>
      <div className='w-10 h-10 bg-gradient-to-b from-[#4d3e33] to-[#7a5c47] rounded-lg flex justify-center items-center'>
        <FaFacebookF className='text-white text-2xl' />
      </div>
      <div className='w-10 h-10 bg-gradient-to-b from-[#4d3e33] to-[#7a5c47] rounded-lg flex justify-center items-center'>
        <FaTwitter className='text-white text-2xl' />
      </div>
      <div className='w-10 h-10 bg-gradient-to-b from-[#4d3e33] to-[#7a5c47] rounded-lg flex justify-center items-center'>
        <GrLinkedinOption className='text-white text-2xl' />
      </div>
      <div className='w-10 h-10 bg-gradient-to-b from-[#4d3e33] to-[#7a5c47] rounded-lg flex justify-center items-center'>
        <FaFacebookF className='text-white text-2xl' />
      </div>
    </div>

    <p>Join our team</p>
    <p>Blog</p>
  </div>
</div>



        <div className=' pb-5 sm:pb-10 mt-8 sm:mt-28'>
            <p className='md:text-xl font-roboto text-white font-extralight sm:font-normal text-xs  text-center'>Mailing Address: PO Box 350, Mount Pleasant, SC 29464</p>
        </div>
      
    </div>
    </div>
  )
}
