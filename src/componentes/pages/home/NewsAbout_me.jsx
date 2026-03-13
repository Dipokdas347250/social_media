import React from 'react'
import { BsThreeDots } from "react-icons/bs";
import pic01 from "../../../assets/pic01.png"
import pic02 from "../../../assets/pic02.png"
import pic03 from "../../../assets/pic03.png"
import video from "../../../assets/video.png"
import video1 from "../../../assets/video1.png"


const NewsAbout_me = () => {
  return (
   <>
   <div className="">
   <div className="p-6 bg-white rounded-[10px]">
        <div className="flex justify-between items-center">
            <h3 className='text-[14px] text-[#3E3F5E] font-bold font-poppins '>About me</h3>
            <BsThreeDots className=' cursor-pointer'/>

        </div>
        <p className='text-[12px] text-tertiary font-normal font-poppins mt-7.5'>Hi! My name is A B M Shawon Islam but some people may know me as GameHuntress! I have a Twitch channel where I stream, play and review all the newest games.</p>
        <h4 className='text-[12px] text-tertiary font-bold   font-poppins mt-4.5'>Joined: <span className=' font-normal ml-4'>22 November 2008</span></h4>
        <h4 className='text-[12px] text-tertiary font-bold   font-poppins mt-4.5'>City:   <span className=' font-normal ml-4'>  Dhaka</span></h4>
        <h4 className='text-[12px] text-tertiary font-bold   font-poppins mt-4.5'>Age: <span className=' font-normal ml-4'>  18 years </span></h4>
   </div>
   <div className="p-6 bg-white rounded-[10px] mt-3">
        <div className="flex justify-between items-center">
            <h3 className='text-[14px] text-[#3E3F5E] font-bold font-poppins '>Photos <span className='text-[#23D2E2]'>37</span></h3>
            <BsThreeDots className=' cursor-pointer'/>

        </div>
        <div className=" grid grid-cols-2 gap-3.75 mt-6.25">
            <img src={pic01} alt="" />
            <img src={pic02} alt="" />
            <img src={pic02} alt="" />
            <img src={pic01} alt="" />
            <img src={pic01} alt="" />
            <img src={pic03} alt="" />
        </div>
        
   </div>
   <div className="p-6 bg-white rounded-[10px] mt-3">
        <div className="flex justify-between items-center">
            <h3 className='text-[14px] text-[#3E3F5E] font-bold font-poppins '>Photos <span className='text-[#23D2E2]'>37</span></h3>
            <BsThreeDots className=' cursor-pointer'/>

        </div>
        <div className="  mt-6.25 space-y-5">
            <img src={video} alt="" />
            <img src={video1} alt="" />
            <img src={video} alt="" />
            
        </div>
        
   </div>
   </div>
   </>
  )
}

export default NewsAbout_me