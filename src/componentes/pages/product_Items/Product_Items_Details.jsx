import React from 'react'
import { FaArrowRight,FaArrowLeft  } from "react-icons/fa";
import rec from "../../../assets/rec.png"
import rect0 from "../../../assets/rect0.png"
import { FaStar } from "react-icons/fa";


const Product_Items_Details = () => {
  return (
    <>
    <div className=" mt-6">
        <h3 className='text-[14px] text-[#AFB0C0] font-normal font-poppins'>BROWSE PRODUTS</h3>
        <h2 className='text-[24px] text-[#24234B] font-medium font-poppins'>Digital Items</h2>
      </div>

      <div className="flex gap-2.5 mt-6">
        <div className=" space-y-1.5 mt-42.5">
           <div className="py-2 px-4.25 bg-white flex justify-center rounded-[7px] text-[#23D2E2]">
             <FaArrowRight/>
           </div>
            <div className="p-1.5 bg-white rounded-[10px] space-y-1">
                <img src={rec} alt="" />
                <img src={rec} alt="" />
                <img src={rec} alt="" />
            </div>
            <div className="py-2 px-4.25 bg-white flex justify-center rounded-[7px] text-[#23D2E2]">

            <FaArrowLeft/>
            </div>
        </div>
        <div className="w-[70%]">
            <img className='w-full' src={rect0} alt="" />
        </div>
        <div className="w-[30%]">
            <div className="p-7.5 bg-white rounded-[15px]">
                 <h2 className='text-[49px] text-black font-medium font-poppins text-center'><span className='text-[#23D2E2]'>$</span>39.00</h2>

                 <div className="flex justify-between items-center mt-8">
                    <div className="border-r border-[#AFB0C0] pr-25">
                        <h3 className='text-[24px] text-[#181828] font-semibold font-poppins'>1,320</h3>
                        <h4 className='text-[14px] text-[#AFB0C0] font-medium font-poppins text-center'>Sales</h4>
                    </div>
                    <div className="">
                        <h3 className='text-[24px] text-[#181828] font-semibold font-poppins text-center'>4.2/5</h3>
                        <div className="flex justify-center text-[#FCE730] ">
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </div>
                    </div>
                 </div>
                 <button className='py-3 bg-[#23D2E2] w-full rounded-[15px] text-[17px] text-white font-medium font-poppins mt-10'>Add to your cart</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Product_Items_Details