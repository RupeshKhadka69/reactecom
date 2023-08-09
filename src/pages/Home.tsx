import { useApiData } from "../data/ProductData";
import { Link } from "react-router-dom";
import CurrencyFormat from "../utilities/CurrencyFormat";
import { useState } from "react";
import { LandingPage } from "../data/LandingPage";
import images from "../data/ImageData";
import CountdownTimer from "./OfferSale";
// import React from 'react'
const Home = () => {
  const { fullapidata } = useApiData();
  const [currentIndex, setCurrentIndex] = useState(0)



  return (
    <div className="bg-[#FFF9C9]">
      <LandingPage currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} />
      <div className="relative   h-screen ">
        {images.map((slide, index) => (
          <div
            key={index}
            className={`${currentIndex === index ? 'opacity-100 z-10 pointer-events-auto' : 'opacity-0'
              }  absolute brightness-90  top-0 left-0    bg-center bg-no-repeat bg-cover w-full h-full  text-white text-center transition-opacity duration-700`}
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            {slide?.text1 &&
              <div className="poppins h-full w-full flex flex-col items-center justify-center">

                <h1 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-widest py-2">{slide.text1}</h1>
                <h3 className="text-lg sm:text-xl md:text-3xl bg-green-300  font-semibold tracking-wider py-2">{slide.text2}</h3>
                <h4 className=" text-black text-xl p-2 mt-2 rounded-xl">{slide.text3} </h4>
                <button  className="text-sm border-2 hover:text-white ease-in-out duration-300 border-slate-200 hover:bg-[#FC7300] bg-slate-300 text-slate-900 mt-4 px-3 py-2 rounded-xl"><Link to={"/store"}>{slide.shop}</Link></button>
              </div>


            }
            {
              slide?.secText && (
                <div className="poppins h-full w-full flex flex-col items-center justify-center">

                  <h3 className="text-lg sm:text-xl md:text-2xl bg-[#FFF9C9] text-black  px-2 font-semibold tracking-normal py-2 rounded-md">{slide.secText}</h3>
                  <button className=" text-sm border-2 ease-in-out duration-300 hover:text-white border-slate-200 hover:bg-[#FC7300] bg-slate-300 text-slate-900 mt-4 px-3 py-2 rounded-xl"> <Link to={"/store"}>{slide.shop}</Link></button>



                </div>
              )
            }
          </div>
        ))}
      </div>

      <div>
        <CountdownTimer />
      </div>
      <h1 className=' line before:h-0.5 before:bg-slate-800 my-16 before:absolute relative text-center'><span><span className=" my-8 md:text-2xl text-xl font-semibold z-10 relative bg-[#FFF9C9] px-4 ">Trending Now</span></span></h1>
      <div className="py-8">

        <div className="container mx-auto ">

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  place-items-center container mx-auto  '>

            {
              
              fullapidata.map((data) => (
                <div key={data.id} className='  py-4 flex flex-col items-center   md:items-start ' >
                  <div className=" ">

                    <img className='w-[18rem] h-[18rem] rounded-lg  object-cover' src={data.image} alt={data.description} />
                  </div>
                  <div className="mt-4 text-center md:text-left">
                    <h4 className="text-sm sm:text-base py-2 ">{data.title}</h4>

                    <p className="py-1 text-red-400"> {CurrencyFormat(data.price)}</p>
                    <button className='hover:text-white ease-in-out duration-300 hover:bg-[#FC7300] trans rounded-md border-solid text-sm border-2 border-slate-950 p-2 py-1 cursor-pointer'>  <Link to={`/product/${data.id}`}>Check Out</Link></button>
                  </div>

                </div>

              ))
            }
          </div>
          <div className="text-center py-12 border-b-2 border-black ">
            <button className='hover:text-white ease-in-out duration-300 hover:bg-[#FC7300] trans rounded-md border-solid  border-2 border-slate-950 p-2 py-1 cursor-pointer '>Show All Product</button>

          </div>
        </div>
      </div>
      {/* THIS IS THE PAGE TO --- */}
      <div className="bg-[#FFF9C9] py-6 sm:py-[4rem]">

        <div className=" flex md:flex-row flex-col-reverse items-center justify-between w-full md:h-screen  h-auto">
          <div className="relative hidden md:block ">
            <img src="../assets/Images/photos-1.jpg" className=" w-full md:w-[22rem] object-cover " alt="photos-1" />
            <img src="../assets/Images/photos-2.jpg" className=" w-[16rem]  object-cover absolute   top-[7rem] left-[5rem] md:top-[9rem] md:left-[9rem]" alt="photos-1" />
          </div>
          <div className="text-center flex-1 px-0 md:px-[6rem]">
            <p className="text-xm mt-4 md:text-sm">our Belief</p>
            <h3 className="text-3xl mt-4 ">We are the one that you need all to one</h3>
            <p className="md:my-4 text-sm my-4 md:text-base">We spend one-third of our lives sleeping. Therefore, it's important to invest in natural bedding products that are beneficial to support our health and well-being. Heveya® is your one-stop premium brand for safe and sustainable bedding!</p>
            <button className="hover:text-white ease-in-out duration-300 hover:bg-[#FC7300] trans rounded-md border-solid border-2 border-slate-950 p-2 py-1 cursor-pointer ">About us</button>
          </div>
          <div className="relative py-8">
            <img src="../assets/Images/photos-3.jpg" className=" w-[22rem] object-cover hidden md:block" alt="photos-1" />
            <img src="../assets/Images/photos-4.jpg" className=" w-[20rem] sm:w-[25rem] md:w-[16rem] object-cover relative top-0 md:absolute md:top-[11rem] md:right-[9rem]" alt="photos-1" />

          </div>
        </div>
      </div>

    </div>
  )
}

export default Home