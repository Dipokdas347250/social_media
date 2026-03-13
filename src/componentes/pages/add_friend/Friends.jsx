import React from 'react'
import Newsfeed from '../home/NewsfeedTop'
import { FaSearch } from "react-icons/fa";
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Friends = () => {
    return (
        <>
            <Newsfeed />
            <div className="pt-15.5 pb-27.5">
                <div className="">
                    <h4 className='text-[14px] text-tertiary font-normal font-poppins uppercase'>BROWSE ABM SHAWON</h4>
                    <h2 className='text-[24px] text-[#24234B] font-medium font-poppins *:'>Friends 82</h2>
                </div>
                <div className="pl-6 pt-5.5 pb-4 bg-white rounded-[10px] mt-10">
                    <div className="flex border-2 border-[#D9D9D9] rounded-[10px] pl-4  w-[70%] ">
                        <input className=' w-full outline-none ' type="text" placeholder='Search Friends' />
                        <div className="py-3 px-7.5 bg-[#23D2E2] rounded-lg">
                            <FaSearch className='text-white' />
                        </div>

                    </div>
                </div>


               <div className="mt-8">
                 <div className=" grid grid-cols-4 gap-4.25">
                    <div className="bg-white">
                        <div className="">
                            <div className="w-full h-18.75 bg-[#45437F] pt-4 rounded-t-[10px]">

                                <div className="bg-primary w-30  h-30 mx-auto rounded-full border-6 border-white "></div>

                            </div>
                            <div className="mt-18.75">
                                <h2 className="text-[15px] text-black font-medium font-poppins text-center">Azmir Uddin Alif</h2>
                                <h4 className="text-[17px] text-tertiary font-medium font-poppins text-center">azmir@gmail.com</h4>
                            </div>
                        </div>
                        <div className="px-6 mt-5.5 ">
                            <div className=" flex justify-between items-center">
                                <div className="">
                                    <h2 className="text-[16px] text-black font-bold font-poppins text-center ">930</h2>
                                    <h4 className="text-[12px] text-tertiary font-medium font-poppins text-center">Friends</h4>
                                </div>
                                <div className=" border-l border-r px-10">
                                    <h2 className="text-[16px] text-black font-bold font-poppins text-center ">87</h2>
                                    <h4 className="text-[12px] text-tertiary font-medium font-poppins text-center">Posts</h4>
                                </div>
                                <div className=" ">
                                    <h2 className="text-[16px] text-black font-bold font-poppins text-center ">1k</h2>
                                    <h4 className="text-[12px] text-tertiary font-medium font-poppins text-center">Followers</h4>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center gap-3 mt-6.5">
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
                        <div className="mt-7.5 flex ">
                            <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#615DFA] py-2.5 rounded-bl-[10px] cursor-pointer'>Add Friend</button>
                            <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#23D2E2] py-2.5 rounded-br-[10px] cursor-pointer'>Send Message</button>
                        </div>
                    </div>
                    <div className="bg-white">
                        <div className="">
                            <div className="w-full h-18.75 bg-[#45437F] pt-4 rounded-t-[10px]">

                                <div className="bg-primary w-30  h-30 mx-auto rounded-full border-6 border-white "></div>

                            </div>
                            <div className="mt-18.75">
                                <h2 className="text-[15px] text-black font-medium font-poppins text-center">Azmir Uddin Alif</h2>
                                <h4 className="text-[17px] text-tertiary font-medium font-poppins text-center">azmir@gmail.com</h4>
                            </div>
                        </div>
                        <div className="px-6 mt-5.5 ">
                            <div className=" flex justify-between items-center">
                                <div className="">
                                    <h2 className="text-[16px] text-black font-bold font-poppins text-center ">930</h2>
                                    <h4 className="text-[12px] text-tertiary font-medium font-poppins text-center">Friends</h4>
                                </div>
                                <div className=" border-l border-r px-10">
                                    <h2 className="text-[16px] text-black font-bold font-poppins text-center ">87</h2>
                                    <h4 className="text-[12px] text-tertiary font-medium font-poppins text-center">Posts</h4>
                                </div>
                                <div className=" ">
                                    <h2 className="text-[16px] text-black font-bold font-poppins text-center ">1k</h2>
                                    <h4 className="text-[12px] text-tertiary font-medium font-poppins text-center">Followers</h4>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center gap-3 mt-6.5">
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
                        <div className="mt-7.5 flex ">
                            <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#615DFA] py-2.5 rounded-bl-[10px] cursor-pointer'>Add Friend</button>
                            <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#23D2E2] py-2.5 rounded-br-[10px] cursor-pointer'>Send Message</button>
                        </div>
                    </div>
                    <div className="bg-white">
                        <div className="">
                            <div className="w-full h-18.75 bg-[#45437F] pt-4 rounded-t-[10px]">

                                <div className="bg-primary w-30  h-30 mx-auto rounded-full border-6 border-white "></div>

                            </div>
                            <div className="mt-18.75">
                                <h2 className="text-[15px] text-black font-medium font-poppins text-center">Azmir Uddin Alif</h2>
                                <h4 className="text-[17px] text-tertiary font-medium font-poppins text-center">azmir@gmail.com</h4>
                            </div>
                        </div>
                        <div className="px-6 mt-5.5 ">
                            <div className=" flex justify-between items-center">
                                <div className="">
                                    <h2 className="text-[16px] text-black font-bold font-poppins text-center ">930</h2>
                                    <h4 className="text-[12px] text-tertiary font-medium font-poppins text-center">Friends</h4>
                                </div>
                                <div className=" border-l border-r px-10">
                                    <h2 className="text-[16px] text-black font-bold font-poppins text-center ">87</h2>
                                    <h4 className="text-[12px] text-tertiary font-medium font-poppins text-center">Posts</h4>
                                </div>
                                <div className=" ">
                                    <h2 className="text-[16px] text-black font-bold font-poppins text-center ">1k</h2>
                                    <h4 className="text-[12px] text-tertiary font-medium font-poppins text-center">Followers</h4>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center gap-3 mt-6.5">
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
                        <div className="mt-7.5 flex ">
                            <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#615DFA] py-2.5 rounded-bl-[10px] cursor-pointer'>Add Friend</button>
                            <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#23D2E2] py-2.5 rounded-br-[10px] cursor-pointer'>Send Message</button>
                        </div>
                    </div>
                    <div className="bg-white">
                        <div className="">
                            <div className="w-full h-18.75 bg-[#45437F] pt-4 rounded-t-[10px]">

                                <div className="bg-primary w-30  h-30 mx-auto rounded-full border-6 border-white "></div>

                            </div>
                            <div className="mt-18.75">
                                <h2 className="text-[15px] text-black font-medium font-poppins text-center">Azmir Uddin Alif</h2>
                                <h4 className="text-[17px] text-tertiary font-medium font-poppins text-center">azmir@gmail.com</h4>
                            </div>
                        </div>
                        <div className="px-6 mt-5.5 ">
                            <div className=" flex justify-between items-center">
                                <div className="">
                                    <h2 className="text-[16px] text-black font-bold font-poppins text-center ">930</h2>
                                    <h4 className="text-[12px] text-tertiary font-medium font-poppins text-center">Friends</h4>
                                </div>
                                <div className=" border-l border-r px-10">
                                    <h2 className="text-[16px] text-black font-bold font-poppins text-center ">87</h2>
                                    <h4 className="text-[12px] text-tertiary font-medium font-poppins text-center">Posts</h4>
                                </div>
                                <div className=" ">
                                    <h2 className="text-[16px] text-black font-bold font-poppins text-center ">1k</h2>
                                    <h4 className="text-[12px] text-tertiary font-medium font-poppins text-center">Followers</h4>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center gap-3 mt-6.5">
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
                        <div className="mt-7.5 flex ">
                            <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#615DFA] py-2.5 rounded-bl-[10px] cursor-pointer'>Add Friend</button>
                            <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#23D2E2] py-2.5 rounded-br-[10px] cursor-pointer'>Send Message</button>
                        </div>
                    </div>
                    <div className="bg-white">
                        <div className="">
                            <div className="w-full h-18.75 bg-[#45437F] pt-4 rounded-t-[10px]">

                                <div className="bg-primary w-30  h-30 mx-auto rounded-full border-6 border-white "></div>

                            </div>
                            <div className="mt-18.75">
                                <h2 className="text-[15px] text-black font-medium font-poppins text-center">Azmir Uddin Alif</h2>
                                <h4 className="text-[17px] text-tertiary font-medium font-poppins text-center">azmir@gmail.com</h4>
                            </div>
                        </div>
                        <div className="px-6 mt-5.5 ">
                            <div className=" flex justify-between items-center">
                                <div className="">
                                    <h2 className="text-[16px] text-black font-bold font-poppins text-center ">930</h2>
                                    <h4 className="text-[12px] text-tertiary font-medium font-poppins text-center">Friends</h4>
                                </div>
                                <div className=" border-l border-r px-10">
                                    <h2 className="text-[16px] text-black font-bold font-poppins text-center ">87</h2>
                                    <h4 className="text-[12px] text-tertiary font-medium font-poppins text-center">Posts</h4>
                                </div>
                                <div className=" ">
                                    <h2 className="text-[16px] text-black font-bold font-poppins text-center ">1k</h2>
                                    <h4 className="text-[12px] text-tertiary font-medium font-poppins text-center">Followers</h4>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center gap-3 mt-6.5">
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
                        <div className="mt-7.5 flex ">
                            <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#615DFA] py-2.5 rounded-bl-[10px] cursor-pointer'>Add Friend</button>
                            <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#23D2E2] py-2.5 rounded-br-[10px] cursor-pointer'>Send Message</button>
                        </div>
                    </div>
                    <div className="bg-white">
                        <div className="">
                            <div className="w-full h-18.75 bg-[#45437F] pt-4 rounded-t-[10px]">

                                <div className="bg-primary w-30  h-30 mx-auto rounded-full border-6 border-white "></div>

                            </div>
                            <div className="mt-18.75">
                                <h2 className="text-[15px] text-black font-medium font-poppins text-center">Azmir Uddin Alif</h2>
                                <h4 className="text-[17px] text-tertiary font-medium font-poppins text-center">azmir@gmail.com</h4>
                            </div>
                        </div>
                        <div className="px-6 mt-5.5 ">
                            <div className=" flex justify-between items-center">
                                <div className="">
                                    <h2 className="text-[16px] text-black font-bold font-poppins text-center ">930</h2>
                                    <h4 className="text-[12px] text-tertiary font-medium font-poppins text-center">Friends</h4>
                                </div>
                                <div className=" border-l border-r px-10">
                                    <h2 className="text-[16px] text-black font-bold font-poppins text-center ">87</h2>
                                    <h4 className="text-[12px] text-tertiary font-medium font-poppins text-center">Posts</h4>
                                </div>
                                <div className=" ">
                                    <h2 className="text-[16px] text-black font-bold font-poppins text-center ">1k</h2>
                                    <h4 className="text-[12px] text-tertiary font-medium font-poppins text-center">Followers</h4>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center gap-3 mt-6.5">
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
                        <div className="mt-7.5 flex ">
                            <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#615DFA] py-2.5 rounded-bl-[10px] cursor-pointer'>Add Friend</button>
                            <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#23D2E2] py-2.5 rounded-br-[10px] cursor-pointer'>Send Message</button>
                        </div>
                    </div>
                    <div className="bg-white">
                        <div className="">
                            <div className="w-full h-18.75 bg-[#45437F] pt-4 rounded-t-[10px]">

                                <div className="bg-primary w-30  h-30 mx-auto rounded-full border-6 border-white "></div>

                            </div>
                            <div className="mt-18.75">
                                <h2 className="text-[15px] text-black font-medium font-poppins text-center">Azmir Uddin Alif</h2>
                                <h4 className="text-[17px] text-tertiary font-medium font-poppins text-center">azmir@gmail.com</h4>
                            </div>
                        </div>
                        <div className="px-6 mt-5.5 ">
                            <div className=" flex justify-between items-center">
                                <div className="">
                                    <h2 className="text-[16px] text-black font-bold font-poppins text-center ">930</h2>
                                    <h4 className="text-[12px] text-tertiary font-medium font-poppins text-center">Friends</h4>
                                </div>
                                <div className=" border-l border-r px-10">
                                    <h2 className="text-[16px] text-black font-bold font-poppins text-center ">87</h2>
                                    <h4 className="text-[12px] text-tertiary font-medium font-poppins text-center">Posts</h4>
                                </div>
                                <div className=" ">
                                    <h2 className="text-[16px] text-black font-bold font-poppins text-center ">1k</h2>
                                    <h4 className="text-[12px] text-tertiary font-medium font-poppins text-center">Followers</h4>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center gap-3 mt-6.5">
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
                        <div className="mt-7.5 flex ">
                            <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#615DFA] py-2.5 rounded-bl-[10px] cursor-pointer'>Add Friend</button>
                            <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#23D2E2] py-2.5 rounded-br-[10px] cursor-pointer'>Send Message</button>
                        </div>
                    </div>
                    <div className="bg-white">
                        <div className="">
                            <div className="w-full h-18.75 bg-[#45437F] pt-4 rounded-t-[10px]">

                                <div className="bg-primary w-30  h-30 mx-auto rounded-full border-6 border-white "></div>

                            </div>
                            <div className="mt-18.75">
                                <h2 className="text-[15px] text-black font-medium font-poppins text-center">Azmir Uddin Alif</h2>
                                <h4 className="text-[17px] text-tertiary font-medium font-poppins text-center">azmir@gmail.com</h4>
                            </div>
                        </div>
                        <div className="px-6 mt-5.5 ">
                            <div className=" flex justify-between items-center">
                                <div className="">
                                    <h2 className="text-[16px] text-black font-bold font-poppins text-center ">930</h2>
                                    <h4 className="text-[12px] text-tertiary font-medium font-poppins text-center">Friends</h4>
                                </div>
                                <div className=" border-l border-r px-10">
                                    <h2 className="text-[16px] text-black font-bold font-poppins text-center ">87</h2>
                                    <h4 className="text-[12px] text-tertiary font-medium font-poppins text-center">Posts</h4>
                                </div>
                                <div className=" ">
                                    <h2 className="text-[16px] text-black font-bold font-poppins text-center ">1k</h2>
                                    <h4 className="text-[12px] text-tertiary font-medium font-poppins text-center">Followers</h4>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center gap-3 mt-6.5">
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
                        <div className="mt-7.5 flex ">
                            <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#615DFA] py-2.5 rounded-bl-[10px] cursor-pointer'>Add Friend</button>
                            <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#23D2E2] py-2.5 rounded-br-[10px] cursor-pointer'>Send Message</button>
                        </div>
                    </div>
                    
                </div>
               </div>
            </div>
        </>
    )
}

export default Friends