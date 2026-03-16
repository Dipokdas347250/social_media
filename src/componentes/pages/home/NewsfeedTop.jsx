import React from 'react'
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router';



const Newsfeed = () => {
    return (
        <>
            <section>
                <div className="">
                    <div className="w-full h-75 bg-[#45437F] rounded-t-[10px] relative ">


                        <div className="bg-primary w-38  h-38 mx-auto rounded-full border-6 border-white absolute -bottom-18 left-1/2 -translate-x-1/2  "></div>
                        <div className=" flex gap-4 items-center absolute -bottom-6 right-7">
                                <Link to="/Add_friend">
                            <button className=' text-[14px] text-white font-semibold font-poppins cursor-pointer px-13 py-3.75 bg-[#615DFA] rounded-[10px] '>
                                Add Friend
                            </button>
                                </Link>
                            <button className=' text-[14px] text-white font-semibold font-poppins cursor-pointer px-13 py-3.75 bg-[#23D2E2] rounded-[10px] '>Send Message</button>
                        </div>


                    </div>
                    <div className="pt-16.25 pb-5.25 bg-white rounded-b-[10px] ">
                        <div className="flex justify-between items-center pl-16.25 pr-28.5">

                            <div className=" flex gap-6 items-center">
                                <div className="">
                                    <h2 className="text-[16px] text-black font-bold font-poppins text-center ">930</h2>
                                    <h4 className="text-[12px] text-tertiary font-medium font-poppins text-center">Friends</h4>
                                </div>
                                <div className=" border-l border-r px-5">
                                    <h2 className="text-[16px] text-black font-bold font-poppins text-center ">87</h2>
                                    <h4 className="text-[12px] text-tertiary font-medium font-poppins text-center">Posts</h4>
                                </div>
                                <div className=" ">
                                    <h2 className="text-[16px] text-black font-bold font-poppins text-center ">1k</h2>
                                    <h4 className="text-[12px] text-tertiary font-medium font-poppins text-center">Followers</h4>
                                </div>
                            </div>
                            <div className="ml-10">

                                <h2 className="text-[16px] text-black font-bold font-poppins text-center">A B M Shawon Islam</h2>
                                <h4 className="text-[12px] text-tertiary font-medium font-poppins text-center">www.abm.com</h4>

                            </div>
                            <div className="flex gap-3">
                                <div className="p-3 bg-[#3763d2] rounded-[10px] cursor-pointer">
                                    <RiFacebookBoxFill className='text-white text-[20px]' />
                                </div>
                                <div className="p-3 bg-[#f8468d] rounded-[10px] cursor-pointer">
                                    <FaInstagram className='text-white text-[20px]' />
                                </div>
                                <div className="p-3 bg-[#1abcff] rounded-[10px] cursor-pointer">
                                    <FaTwitter className='text-white text-[20px]' />
                                </div>
                                <div className="p-3 bg-[#fd434f] rounded-[10px] cursor-pointer">
                                    <FaYoutube className='text-white text-[20px]' />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Newsfeed