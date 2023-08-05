// import React from 'react'
import {FiArrowRight} from 'react-icons/fi'
import {FaFacebook,FaInstagram,FaYoutube,FaTwitter,FaTiktok} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="  bg-[#FFC95F]">

    <div className="container mx-auto ">
 
      <div className="px-8 flex flex-col-reverse md:flex-row   justify-bwtween w-full border-b-2 border-black py-16">
        <div className="flex-1">
          <h4 className="text-lg  py-4 ">Why E-Cum</h4>
          <ul className="flex flex-col text-sm gap-2 text-gray-700">

          <a href="#"  className='hover:underline '>Our Story</a>
          <a href="#" className='hover:underline '>Sustainability</a>
          <a href="#" className='hover:underline '>Charity</a>
          </ul>
        </div>
        <div className="flex-1 ">
          <h4 className="text-lg py-4 ">Support</h4>
          <ul className="flex flex-col text-sm text-gray-700 gap-2">

          <a href="#" className='hover:underline '>Contact</a>
          <a href="#" className='hover:underline '>Made to Order</a>
          <a href="#" className='hover:underline '>Warranty</a>
          <a href="#" className='hover:underline '>Faq</a>
          </ul>
        </div>

        <div className="flex-1 ">
          <h2 className="text-2xl mt-2">Catch up on the latest snooze!</h2>
          <p className="text-sm py-4">Receive $30* off your first purchase when you sign up for our newsletter for inspiration, exclusive previews & sleeping tips.</p>
          <div className="bg-white relative w-full">
          <input type="email" name="email" id="s" placeholder="Your email" className="w-full h-12 p-2 focus:outline-none text-sm" />
          <FiArrowRight className=" text-black text-2xl absolute top-[14px] right-2 cursor-pointer"/>
          </div>
          <div className='flex items-center gap-4 py-4'>
            
          <FaFacebook className=" text-black text-2xl  cursor-pointer"/>
          <FaInstagram className=" text-black text-2xl  cursor-pointer"/>
          <FaTwitter className=" text-black text-2xl  cursor-pointer"/>
          <FaTiktok className=" text-black text-2xl  cursor-pointer"/>
          <FaYoutube className=" text-black text-2xl cursor-pointer"/>
          </div>
        </div>
      </div>

      <div className="px-2 flex   w-full justify-end py-4">
        <ul className="flex  text-xs gap-4  items-center text-gray-700">
          <li ><a href="#" className='hover:underline '>After sales Service</a></li>
          <li><a href="#" className='hover:underline '>Terms and Condition</a></li>
          <li><a href="#" className='hover:underline '>Privacy Policy</a></li>
         
        </ul>
      </div>
    </div>
          
    </div>
  )
}

export default Footer