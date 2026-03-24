import React from 'react'
import cart0 from "../../../assets/cart0.png"
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router';


const Add_To_Cart = () => {
  return (
   <>
   <div className="mt-6">
    <h3 className='text-[14px] text-[#AFB0C0] font-normal font-poppins'>BROWSE YOUR</h3>
    <h2 className='text-[24px] text-[#24234B] font-medium font-poppins'>Shopping cart 3</h2>
   </div>
   <div className="w-[80%] mt-3.25">
    <div className="flex items-center">
      <div className="w-[40%]">
      <h2 className=' text-[15px] text-black font-medium font-poppins ml-7'>ITEM</h2>
      </div>
      <div className="w-1/2">
      <div className=" flex items-center ">
        <h3 className='w-1/2 text-[15px] text-black font-medium font-poppins'>QUANTITY</h3>
      <h3 className='w-1/2 text-[15px] text-black font-medium font-poppins ml-10'>PRICE</h3>
      </div>
      </div>
    </div>
   </div>
   
  <div className="flex  gap-4">
    <div className=" space-y-6 mt-2.5 w-[77%]">
    <div className="py-5 px-7 bg-white rounded-[15px] ">
     <div className="flex items-center ">
    <div className="w-[40%]">
    <div className="flex items-center gap-5.5">
      <img src={cart0} alt="" />
    <div className="">
      <h4 className='text-[14px] text-[#45437F] font-medium font-poppins'>Twitch stream ui pack</h4>
      <h3 className='text-[13px] text-black font-medium font-poppins'>Stream packs</h3>
      <h3 className='text-[12px] text-[#AFB0C0] font-normal font-poppins'>ABM shawon</h3>
    </div>
    </div>
    </div>
    <div className="w-[60%]">
    <div className="flex justify-between items-center">
      <div className="flex items-center pl-11 py-1 pr-2  border border-[#D9D9D9] rounded-[15px] gap-4">
        <h2 className='text-[17px] text-[#3E3F5E] font-medium font-poppins'>1</h2>
        <div className=" space-y-3">
          <MdKeyboardArrowUp className=' cursor-pointer'/>
          <MdKeyboardArrowDown className=' cursor-pointer'/>
        </div>
      </div>
      <div className="">
        <h2 className='text-[17px] text-black font-medium font-poppins'><span className='text-[#23D2E2]'>$</span> 12.00</h2>
      </div>
      <div className="">
        <button className='p-2.25 bg-[#EA5050] rounded-full text-white cursor-pointer'><MdDelete/></button>
      </div>
    </div>
    </div>
   </div>
  </div>
    <div className="py-5 px-7 bg-white rounded-[15px] ">
     <div className="flex items-center ">
    <div className="w-[40%]">
    <div className="flex items-center gap-5.5">
      <img src={cart0} alt="" />
    <div className="">
      <h4 className='text-[14px] text-[#45437F] font-medium font-poppins'>Twitch stream ui pack</h4>
      <h3 className='text-[13px] text-black font-medium font-poppins'>Stream packs</h3>
      <h3 className='text-[12px] text-[#AFB0C0] font-normal font-poppins'>ABM shawon</h3>
    </div>
    </div>
    </div>
    <div className="w-[60%]">
    <div className="flex justify-between items-center">
      <div className="flex items-center pl-11 py-1 pr-2  border border-[#D9D9D9] rounded-[15px] gap-4">
        <h2 className='text-[17px] text-[#3E3F5E] font-medium font-poppins'>1</h2>
        <div className=" space-y-3">
          <MdKeyboardArrowUp className=' cursor-pointer'/>
          <MdKeyboardArrowDown className=' cursor-pointer'/>
        </div>
      </div>
      <div className="">
        <h2 className='text-[17px] text-black font-medium font-poppins'><span className='text-[#23D2E2]'>$</span> 12.00</h2>
      </div>
      <div className="">
        <button className='p-2.25 bg-[#EA5050] rounded-full text-white cursor-pointer'><MdDelete/></button>
      </div>
    </div>
    </div>
   </div>
  </div>
    <div className="py-5 px-7 bg-white rounded-[15px] ">
     <div className="flex items-center ">
    <div className="w-[40%]">
    <div className="flex items-center gap-5.5">
      <img src={cart0} alt="" />
    <div className="">
      <h4 className='text-[14px] text-[#45437F] font-medium font-poppins'>Twitch stream ui pack</h4>
      <h3 className='text-[13px] text-black font-medium font-poppins'>Stream packs</h3>
      <h3 className='text-[12px] text-[#AFB0C0] font-normal font-poppins'>ABM shawon</h3>
    </div>
    </div>
    </div>
    <div className="w-[60%]">
    <div className="flex justify-between items-center">
      <div className="flex items-center pl-11 py-1 pr-2  border border-[#D9D9D9] rounded-[15px] gap-4">
        <h2 className='text-[17px] text-[#3E3F5E] font-medium font-poppins'>1</h2>
        <div className=" space-y-3">
          <MdKeyboardArrowUp className=' cursor-pointer'/>
          <MdKeyboardArrowDown className=' cursor-pointer'/>
        </div>
      </div>
      <div className="">
        <h2 className='text-[17px] text-black font-medium font-poppins'><span className='text-[#23D2E2]'>$</span> 12.00</h2>
      </div>
      <div className="">
        <button className='p-2.25 bg-[#EA5050] rounded-full text-white cursor-pointer'><MdDelete/></button>
      </div>
    </div>
    </div>
   </div>
  </div>
  <div className="py-5 px-7 bg-white rounded-[15px] ">
      <div className=" flex gap-12.5 ">
        <p className='w-[45%] text-[17px] text-[#AFB0C0] font-medium font-poppins'>If you have promotional or a discount code, please enter it right here to redeem it.</p>
      <div className="w-[50%]">
        <div className="flex justify-between  ">
          <div className="w-[70%]">
        <input className='w-full outline-none border border-[#D9D9D9] p-3.5 rounded-[15px] ' type="text" placeholder='Promo code' />
      </div>
      <div className="py-3.75 px-5 bg-[#615DFA] rounded-[15px] cursor-pointer">
        <h3 className='text-[12px] text-white font-medium font-poppins leading-[200%]  '>Redeem code</h3>
      </div>
        </div>
      </div>
      </div>
  </div>
  </div>
  <div className="w-[23%] mt-2.5">
    <div className="py-7.5 px-6.5 bg-white rounded-[15px]">
      <h4 className='text-[17px] text-black font-medium font-poppins'>Order totals</h4>
      <h2 className='text-[49px] text-black font-medium font-poppins text-center mt-4'><span className='text-[#23D2E2]'>$</span>39.00</h2>
      <div className=" space-y-2.75 mt-12.5">
        <div className="flex justify-between items-center">
          <h4 className='text-[12px] text-[#AFB0C0] font-medium font-poppins'>Cart(3)</h4>
          <h5 className='text-[12px] text-black font-medium font-poppins'><span className='text-[#23D2E2]'>$</span>44.00</h5>
        </div>
        <div className="flex justify-between items-center">
          <h4 className='text-[12px] text-[#AFB0C0] font-medium font-poppins'>Code</h4>
          <h5 className='text-[12px] text-black font-medium font-poppins'>-<span className='text-[#23D2E2]'>$</span>15.00</h5>
        </div>
        <div className="flex justify-between items-center">
          <h4 className='text-[12px] text-[#AFB0C0] font-medium font-poppins'>Total</h4>
          <h5 className='text-[12px] text-black font-medium font-poppins'><span className='text-[#23D2E2]'>$</span>39.00</h5>
        </div>

        <div className="  mt-13">
          <Link to="/Checkout">
          
          <button className='py-4 bg-[#23D2E2] border border-[#23D2E2] rounded-[15px] w-full text-[12px] text-white font-medium font-poppins cursor-pointer duration-300 ease-in-out hover:bg-white hover:text-[#AFB0C0] hover:border hover:border-[#AFB0C0] '>Proccecd to checkout</button>
          </Link>
          <button className=' mt-2.5 py-4 bg-white border border-[#AFB0C0] rounded-[15px] w-full text-[12px] text-[#AFB0C0] font-medium font-poppins cursor-pointer duration-300 ease-in-out hover:bg-[#23D2E2] hover:text-white hover:border hover:border-[#23D2E2] '>Update cart</button>
        </div>
      </div>
    </div>
  </div>
  </div>
   </>
  )
}

export default Add_To_Cart
