import React from 'react'
import logo from "../../assets/logo.png"
import { FaBars, FaBell } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import { FaShoppingCart, FaSms } from "react-icons/fa";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router';








const Navber = () => {
    return (
        <>
            <nav className='py-4  bg-primary pl-6 pr-10 sticky top-0  z-50'>
                <div className="flex justify-between items-center gap-18.25">
                    <div className="w-[38%]">
                        <div className="flex justify-between items-center">
                            <div className="">
                                <Link to="/">
                                
                                <img src={logo} alt="" />
                                </Link>
                            </div>
                            <div className="">
                                <ul className='flex justify-between items-center gap-12 text-[14px] text-white font-poppins font-bold  cursor-pointer'>
                                    <li><FaBars /></li>
                                    <li>Careers</li>
                                    <li>Store</li>
                                    <li>FAQ</li>
                                    <li><BsThreeDots /></li>

                                </ul>



                            </div>
                        </div>
                    </div>
                    <div className="w-[62%]">
                        <div className="flex justify-between items-center gap-20">
                            <div className="w-[45%]">
                                <div className=" w-full bg-[#4E4AC8] py-4 px-3 relative  rounded-[11px]  ">
                                    <input className='w-full outline-none text-[#6763DF]' type="text" name="" id="" placeholder='Search here ....' />
                                    <IoSearch className=' absolute top-[50%] -translate-[50%] right-2 text-[#6763DF]' />

                                </div>
                            </div>
                            <div className="w-[40%]">
                                <div className="flex justify-between items-center ">
                                    <div className="">
                                        <div className="flex gap-12 items-center pb-1.5">
                                            <h4 className='text-[12px] text-white font-normal font-poppins '>Next</h4>
                                        <h4 className='text-[12px] text-white font-normal font-poppins '>35 EXP</h4>
                                        </div>
                                        <div className="w-full h-1 bg-[#4E4AC8] rounded-full relative after:absolute after:contant-[''] after:top-0 after:left-0 after:w-[80%] after:h-full after:bg-[#41EFFF]
                                        after:rounded-full ">

                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center gap-8 px-10 py-3 border-l border-r border-[#7A77FD] text-[#7A77FD] text-[20px]">
                                        <FaShoppingCart />
                                        <FaSms />
                                        <FaBell />
                                    </div>
                                    <div className="text-[#7A77FD] text-[20px] ">
                                        <FaScrewdriverWrench />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navber
