import React from 'react'
import { FaSearch } from "react-icons/fa";


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


    </>
  )
}

export default Product_Details
