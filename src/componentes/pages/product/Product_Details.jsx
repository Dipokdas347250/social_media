import React from 'react'
import { FaSearch, FaStar } from "react-icons/fa";
import cart from "../../../assets/cart.png"
import { IoIosArrowBack ,IoIosArrowForward } from "react-icons/io";






const Product_Details = () => {
  return (
    <>
      <div className=" mt-6">
        <h3 className='text-[14px] text-[#AFB0C0] font-normal font-poppins'>BROWSE PRODUTS</h3>
        <h2 className='text-[24px] text-[#24234B] font-medium font-poppins'>Digital Items</h2>
      </div>


      <div className="py-7.5 px-5 bg-white rounded-[20px] mt-6">
        <div className="flex justify-between items-center gap-5">
          <div className="w-[30%]">
            <div className="flex justify-between items-center gap-3 ">
              <input className=' w-full border border-[#D9D9D9] outline-none py-2 px-4 rounded-[10px]' type="text" placeholder='Search items' />
              <div className=" py-3 px-5 bg-[#23D2E2] inline-block text-white text-[20px] rounded-[10px] cursor-pointer ">
                <FaSearch />
              </div>
            </div>
          </div>
          <div className="w-[70%]">
            <div className="flex justify-between items-center  gap-5">
              <div className="w-[40%]">
                <select className=' w-full py-2 px-2  border border-[#D9D9D9] rounded-[15px] outline-none  text-[17px] text-black font-medium font-poppins cursor-pointer' name="" id="">
                  <option value="Date Published ">Date Published </option>
                  <option value="Essence">Essence</option>
                  <option value="Glamour Beauty">Glamour Beauty</option>
                  <option value="Chic Cosmetics">Chic Cosmetics</option>
                </select>
              </div>
              <div className="w-[40%]">
                <select className=' w-full py-2 px-2 border border-[#D9D9D9] rounded-[15px] outline-none   text-[17px] text-black font-medium font-poppins cursor-pointer' name="" id="">
                  <option value="Descending">Descending</option>
                  <option value="Essence">Essence</option>
                  <option value="Glamour Beauty">Glamour Beauty</option>
                  <option value="Chic Cosmetics">Chic Cosmetics</option>
                </select>
              </div>
              <div className=" py-2.75 px-4 bg-[#615DFA] rounded-[7px] cursor-pointer">
                <h2 className='text-[14px] text-white font-medium font-poppins '>Apply Filters</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between  mt-5 gap-3.5 ">
        <div className="w-[23%]">
          <div className="py-7.5 px-3.75 bg-white rounded-[15px]">
            <h2 className='text-[14px] text-black font-bold font-poppins'>Categories</h2>
            <div className=" space-y-2.5 mt-3.5">
              <div className="flex justify-between items-center">
                <h4 className='text-[14px] text-[#AFB0C0] font-medium font-poppins'>All Categories</h4>
                <h4 className='text-[14px] text-[#23D2E2] font-medium font-poppins'>1207</h4>
              </div>
              <div className="flex justify-between items-center">
                <h4 className='text-[14px] text-[#AFB0C0] font-medium font-poppins'>Psd Templates</h4>
                <h4 className='text-[14px] text-[#23D2E2] font-medium font-poppins'>134</h4>
              </div>
              <div className="flex justify-between items-center">
                <h4 className='text-[14px] text-[#AFB0C0] font-medium font-poppins'>HTML Templates</h4>
                <h4 className='text-[14px] text-[#23D2E2] font-medium font-poppins'>134</h4>
              </div>
              <div className="flex justify-between items-center">
                <h4 className='text-[14px] text-[#AFB0C0] font-medium font-poppins'>WP Templates</h4>
                <h4 className='text-[14px] text-[#23D2E2] font-medium font-poppins'>134</h4>
              </div>
              <div className="flex justify-between items-center">
                <h4 className='text-[14px] text-[#AFB0C0] font-medium font-poppins'>Illustration</h4>
                <h4 className='text-[14px] text-[#23D2E2] font-medium font-poppins'>134</h4>
              </div>
              <div className="flex justify-between items-center">
                <h4 className='text-[14px] text-[#AFB0C0] font-medium font-poppins'>Logos and badges</h4>
                <h4 className='text-[14px] text-[#23D2E2] font-medium font-poppins'>134</h4>
              </div>
            </div>

            <h2 className='text-[14px] text-black font-bold font-poppins mt-7.5'>Price Range</h2>
            <div className="flex items-center gap-3 mt-6.25">
              <button className='py-3.5 px-5 border border-[#D9D9D9] rounded-[15px] text-[14px] text-[#D9D9D9] font-medium font-poppins'>From</button>
              <button className='py-3.5 px-7.5 border border-[#D9D9D9] rounded-[15px] text-[14px] text-[#D9D9D9] font-medium font-poppins'>To</button>
            </div>
            <button className='py-2.5 px-14 bg-[#23D2E2] rounded-[11px] text-[14px] text-white font-medium font-poppins mt-8.5 '>Apply Price Filter</button>

            <h2 className='text-[14px] text-black font-bold font-poppins mt-10'>Reviews</h2>

            <div className=" space-y-2.5 mt-5.5">
              <div className="flex justify-between items-center">
                <h4 className='text-[14px] text-[#45437F] font-medium font-poppins'>All reviews</h4>
                <h4 className='text-[14px] text-[#23D2E2] font-medium font-poppins'>1207</h4>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2.75 ">
                  <div className="flex items-center gap-0.7545437F text-yellow-400">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>

                  <h4 className='text-[14px] text-[#3E3F5E] font-medium font-poppins mt-1'>4+</h4>
                </div>
                <h4 className='text-[14px] text-[#23D2E2] font-medium font-poppins'>1207</h4>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2.75 ">
                  <div className="flex items-center gap-0.7545437F text-yellow-400">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>

                  <h4 className='text-[14px] text-[#3E3F5E] font-medium font-poppins mt-1'>4+</h4>
                </div>
                <h4 className='text-[14px] text-[#23D2E2] font-medium font-poppins'>1207</h4>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2.75 ">
                  <div className="flex items-center gap-0.7545437F text-yellow-400">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>

                  <h4 className='text-[14px] text-[#3E3F5E] font-medium font-poppins mt-1'>4+</h4>
                </div>
                <h4 className='text-[14px] text-[#23D2E2] font-medium font-poppins'>1207</h4>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2.75 ">
                  <div className="flex items-center gap-0.7545437F text-yellow-400">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>

                  <h4 className='text-[14px] text-[#3E3F5E] font-medium font-poppins mt-1'>4+</h4>
                </div>
                <h4 className='text-[14px] text-[#23D2E2] font-medium font-poppins'>1207</h4>
              </div>
            </div>

          </div>
        </div>
        <div className="w-[77%]">
          <div className=" grid grid-cols-3 gap-5 ">
            <div className="bg-white rounded-[20px] relative">
              <div className="py-1.5 px-6 bg-white rounded-full shadow inline-block absolute bottom-1/2 right-3.5">
                <h3 className='text-[14px] text-primary font-bold font-poppins'>$12</h3>
              </div>
              <img className='w-full' src={cart} alt="" />
              <div className=" py-6.5 px-10">
                <h2 className='text-[16px] text-black font-bold font-poppins'>Intel Pentium G6400 10th Gen Special Deal PC</h2>
                <div className="flex items-center gap-1.5 mt-2.25">
                  <div className="h-2.5 w-2.5 bg-[#23D2E2] rounded-full"></div>
                  <h4 className='text-[14px] text-black font-light font-poppins'>Laptop</h4>
                </div>


                <h3 className='text-[13px] text-primary font-light font-poppins underline mt-3.25'>Full Screen View</h3>

              </div>
              <div className="mt-7.5 flex ">
                <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#615DFA] py-2.5 rounded-bl-[10px] cursor-pointer'>Add To Cart</button>
                <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#23D2E2] py-2.5 rounded-br-[10px] cursor-pointer'>Wishlist</button>
              </div>
            </div>
            <div className="bg-white rounded-[20px] relative">
              <div className="py-1.5 px-6 bg-white rounded-full shadow inline-block absolute bottom-1/2 right-3.5">
                <h3 className='text-[14px] text-primary font-bold font-poppins'>$12</h3>
              </div>
              <img className='w-full' src={cart} alt="" />
              <div className=" py-6.5 px-10">
                <h2 className='text-[16px] text-black font-bold font-poppins'>Intel Pentium G6400 10th Gen Special Deal PC</h2>
                <div className="flex items-center gap-1.5 mt-2.25">
                  <div className="h-2.5 w-2.5 bg-[#23D2E2] rounded-full"></div>
                  <h4 className='text-[14px] text-black font-light font-poppins'>Laptop</h4>
                </div>


                <h3 className='text-[13px] text-primary font-light font-poppins underline mt-3.25'>Full Screen View</h3>

              </div>
              <div className="mt-7.5 flex ">
                <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#615DFA] py-2.5 rounded-bl-[10px] cursor-pointer'>Add To Cart</button>
                <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#23D2E2] py-2.5 rounded-br-[10px] cursor-pointer'>Wishlist</button>
              </div>
            </div>
            <div className="bg-white rounded-[20px] relative">
              <div className="py-1.5 px-6 bg-white rounded-full shadow inline-block absolute bottom-1/2 right-3.5">
                <h3 className='text-[14px] text-primary font-bold font-poppins'>$12</h3>
              </div>
              <img className='w-full' src={cart} alt="" />
              <div className=" py-6.5 px-10">
                <h2 className='text-[16px] text-black font-bold font-poppins'>Intel Pentium G6400 10th Gen Special Deal PC</h2>
                <div className="flex items-center gap-1.5 mt-2.25">
                  <div className="h-2.5 w-2.5 bg-[#23D2E2] rounded-full"></div>
                  <h4 className='text-[14px] text-black font-light font-poppins'>Laptop</h4>
                </div>


                <h3 className='text-[13px] text-primary font-light font-poppins underline mt-3.25'>Full Screen View</h3>

              </div>
              <div className="mt-7.5 flex ">
                <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#615DFA] py-2.5 rounded-bl-[10px] cursor-pointer'>Add To Cart</button>
                <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#23D2E2] py-2.5 rounded-br-[10px] cursor-pointer'>Wishlist</button>
              </div>
            </div>
            <div className="bg-white rounded-[20px] relative">
              <div className="py-1.5 px-6 bg-white rounded-full shadow inline-block absolute bottom-1/2 right-3.5">
                <h3 className='text-[14px] text-primary font-bold font-poppins'>$12</h3>
              </div>
              <img className='w-full' src={cart} alt="" />
              <div className=" py-6.5 px-10">
                <h2 className='text-[16px] text-black font-bold font-poppins'>Intel Pentium G6400 10th Gen Special Deal PC</h2>
                <div className="flex items-center gap-1.5 mt-2.25">
                  <div className="h-2.5 w-2.5 bg-[#23D2E2] rounded-full"></div>
                  <h4 className='text-[14px] text-black font-light font-poppins'>Laptop</h4>
                </div>


                <h3 className='text-[13px] text-primary font-light font-poppins underline mt-3.25'>Full Screen View</h3>

              </div>
              <div className="mt-7.5 flex ">
                <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#615DFA] py-2.5 rounded-bl-[10px] cursor-pointer'>Add To Cart</button>
                <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#23D2E2] py-2.5 rounded-br-[10px] cursor-pointer'>Wishlist</button>
              </div>
            </div>
            <div className="bg-white rounded-[20px] relative">
              <div className="py-1.5 px-6 bg-white rounded-full shadow inline-block absolute bottom-1/2 right-3.5">
                <h3 className='text-[14px] text-primary font-bold font-poppins'>$12</h3>
              </div>
              <img className='w-full' src={cart} alt="" />
              <div className=" py-6.5 px-10">
                <h2 className='text-[16px] text-black font-bold font-poppins'>Intel Pentium G6400 10th Gen Special Deal PC</h2>
                <div className="flex items-center gap-1.5 mt-2.25">
                  <div className="h-2.5 w-2.5 bg-[#23D2E2] rounded-full"></div>
                  <h4 className='text-[14px] text-black font-light font-poppins'>Laptop</h4>
                </div>


                <h3 className='text-[13px] text-primary font-light font-poppins underline mt-3.25'>Full Screen View</h3>

              </div>
              <div className="mt-7.5 flex ">
                <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#615DFA] py-2.5 rounded-bl-[10px] cursor-pointer'>Add To Cart</button>
                <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#23D2E2] py-2.5 rounded-br-[10px] cursor-pointer'>Wishlist</button>
              </div>
            </div>
            <div className="bg-white rounded-[20px] relative">
              <div className="py-1.5 px-6 bg-white rounded-full shadow inline-block absolute bottom-1/2 right-3.5">
                <h3 className='text-[14px] text-primary font-bold font-poppins'>$12</h3>
              </div>
              <img className='w-full' src={cart} alt="" />
              <div className=" py-6.5 px-10">
                <h2 className='text-[16px] text-black font-bold font-poppins'>Intel Pentium G6400 10th Gen Special Deal PC</h2>
                <div className="flex items-center gap-1.5 mt-2.25">
                  <div className="h-2.5 w-2.5 bg-[#23D2E2] rounded-full"></div>
                  <h4 className='text-[14px] text-black font-light font-poppins'>Laptop</h4>
                </div>


                <h3 className='text-[13px] text-primary font-light font-poppins underline mt-3.25'>Full Screen View</h3>

              </div>
              <div className="mt-7.5 flex ">
                <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#615DFA] py-2.5 rounded-bl-[10px] cursor-pointer'>Add To Cart</button>
                <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#23D2E2] py-2.5 rounded-br-[10px] cursor-pointer'>Wishlist</button>
              </div>
            </div>
            <div className="bg-white rounded-[20px] relative">
              <div className="py-1.5 px-6 bg-white rounded-full shadow inline-block absolute bottom-1/2 right-3.5">
                <h3 className='text-[14px] text-primary font-bold font-poppins'>$12</h3>
              </div>
              <img className='w-full' src={cart} alt="" />
              <div className=" py-6.5 px-10">
                <h2 className='text-[16px] text-black font-bold font-poppins'>Intel Pentium G6400 10th Gen Special Deal PC</h2>
                <div className="flex items-center gap-1.5 mt-2.25">
                  <div className="h-2.5 w-2.5 bg-[#23D2E2] rounded-full"></div>
                  <h4 className='text-[14px] text-black font-light font-poppins'>Laptop</h4>
                </div>


                <h3 className='text-[13px] text-primary font-light font-poppins underline mt-3.25'>Full Screen View</h3>

              </div>
              <div className="mt-7.5 flex ">
                <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#615DFA] py-2.5 rounded-bl-[10px] cursor-pointer'>Add To Cart</button>
                <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#23D2E2] py-2.5 rounded-br-[10px] cursor-pointer'>Wishlist</button>
              </div>
            </div>
            <div className="bg-white rounded-[20px] relative">
              <div className="py-1.5 px-6 bg-white rounded-full shadow inline-block absolute bottom-1/2 right-3.5">
                <h3 className='text-[14px] text-primary font-bold font-poppins'>$12</h3>
              </div>
              <img className='w-full' src={cart} alt="" />
              <div className=" py-6.5 px-10">
                <h2 className='text-[16px] text-black font-bold font-poppins'>Intel Pentium G6400 10th Gen Special Deal PC</h2>
                <div className="flex items-center gap-1.5 mt-2.25">
                  <div className="h-2.5 w-2.5 bg-[#23D2E2] rounded-full"></div>
                  <h4 className='text-[14px] text-black font-light font-poppins'>Laptop</h4>
                </div>


                <h3 className='text-[13px] text-primary font-light font-poppins underline mt-3.25'>Full Screen View</h3>

              </div>
              <div className="mt-7.5 flex ">
                <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#615DFA] py-2.5 rounded-bl-[10px] cursor-pointer'>Add To Cart</button>
                <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#23D2E2] py-2.5 rounded-br-[10px] cursor-pointer'>Wishlist</button>
              </div>
            </div>
            <div className="bg-white rounded-[20px] relative">
              <div className="py-1.5 px-6 bg-white rounded-full shadow inline-block absolute bottom-1/2 right-3.5">
                <h3 className='text-[14px] text-primary font-bold font-poppins'>$12</h3>
              </div>
              <img className='w-full' src={cart} alt="" />
              <div className=" py-6.5 px-10">
                <h2 className='text-[16px] text-black font-bold font-poppins'>Intel Pentium G6400 10th Gen Special Deal PC</h2>
                <div className="flex items-center gap-1.5 mt-2.25">
                  <div className="h-2.5 w-2.5 bg-[#23D2E2] rounded-full"></div>
                  <h4 className='text-[14px] text-black font-light font-poppins'>Laptop</h4>
                </div>


                <h3 className='text-[13px] text-primary font-light font-poppins underline mt-3.25'>Full Screen View</h3>

              </div>
              <div className="mt-7.5 flex ">
                <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#615DFA] py-2.5 rounded-bl-[10px] cursor-pointer'>Add To Cart</button>
                <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#23D2E2] py-2.5 rounded-br-[10px] cursor-pointer'>Wishlist</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-10 mb-27">
        <h1></h1>
        <ul className='flex gap-5 items-center py-5.25 px-6.25 bg-white rounded-[15px]'>
          <li className='text-[20px] text-[#3E3F5E] font-bold font-poppins cursor-pointer'><IoIosArrowBack /></li>
          <li className='text-[14px] text-[#23D2E2] font-medium font-poppins cursor-pointer'>01</li>
          <li className='text-[14px] text-[#3E3F5E] font-medium font-poppins cursor-pointer'>02</li>
          <li className='text-[14px] text-[#3E3F5E] font-medium font-poppins cursor-pointer'>03</li>
          <li className='text-[14px] text-[#3E3F5E] font-medium font-poppins cursor-pointer'>04</li>
          <li className='text-[14px] text-[#3E3F5E] font-medium font-poppins cursor-pointer'>05</li>
          <li className='text-[14px] text-[#3E3F5E] font-medium font-poppins cursor-pointer'>06</li>
          <li className='text-[20px] text-[#3E3F5E] font-bold font-poppins cursor-pointer'><IoIosArrowForward /></li>
        </ul>
      </div>


    </>
  )
}

export default Product_Details
