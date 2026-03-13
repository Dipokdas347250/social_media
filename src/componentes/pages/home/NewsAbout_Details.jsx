import React, { useState } from 'react'
import ellipse from "../../../assets/ellipse.png"
import like from "../../../assets/like.png"
import love from "../../../assets/love.png"
import wow from "../../../assets/wow.png"
import { BsThreeDots } from "react-icons/bs";
import { AiFillLike } from "react-icons/ai";
import { FaCommentAlt } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import like1 from "../../../assets/like1.png"
import love1 from "../../../assets/love1.png"
import dislike1 from "../../../assets/dislike1.png"
import happy1 from "../../../assets/happy1.png"
import funny1 from "../../../assets/funny1.png"
import wow1 from "../../../assets/wow2.png"
import angry1 from "../../../assets/angry1.png"
import sad1 from "../../../assets/sad1.png"
import group from "../../../assets/group.png"
import comm from "../../../assets/comm.png"
import wowlike from "../../../assets/wowlike.png"






const NewsAbout_Details = () => {


    let [show , setShow] = useState (()=>{

  })


  return (
    <>
    <div className="w-[55%]">
      <div className="">
        <div className="py-5 pl-5 pr-10 bg-white rounded-t-[10px]">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-6">
            <img src={ellipse} alt="" />
            <div className="">
              <h3 className='text-[14px] text-black font-bold font-poppins'>A B M Shawon Islam</h3>
              <h4 className='text-[12px] text-tertiary font-medium font-poppins'>29 minutes ago</h4>
            </div>
          </div>
        <div className=" relative">
          <BsThreeDots className=' cursor-pointer' onClick={()=>setShow(!show)} />
            {
              show == true ? <div className=" absolute p-4 bg-white w-45 rounded-[10px] shadow right-0 ">
                  <ul className='text-[12px] text-black font-normal font-poppins space-y-2.5 cursor-pointer'>
                    <li>Edit Post</li>
                    <li>Delete Post</li>
                    <li>Report Post</li>
                    <li>Report Author</li>
                  </ul>
              </div> : null
            }
        </div>
        </div>
        <div className="">
          <p className='text-[12px] text-black font-medium font-poppins'>I have great news to share with you all! I’ve been officially made a game streaming verified partner by Streamy http://lyt.ly/snej25. What does this mean? I’ll be uploading new content every day, improving the quality and I’m gonna have access to games a month before the official release. This is a dream come true, thanks to all for the support!!!</p>
        </div>
        <div className=" flex justify-between items-center mt-7.5 pt-4 border-t border-[#D9D9D9]">
          <div className="">
            <div className=" relative ">
              <div className="w-5 h-5 absolute top-0 left-">
                <img className=' w-full ' src={like} alt="" />
              </div>
              <div className="w-5 h-5 absolute top-0 left-4">
                <img className='  w-full ' src={love} alt="" />
              </div>
              <div className="w-5 h-5 absolute top-0 left-8">
                <img className='  w-full ' src={wow} alt="" />
              </div>
             
              
            </div>
            <h2 className='text-[12px] text-black font-bold font-poppins ml-15'>12</h2>
          </div>
          <div className="flex gap-3 items-center">
            <img src={group} alt="" />
            <h2 className='text-[12px] text-black font-bold font-poppins'>12 Participants</h2>
          </div>
         <div className=" flex gap-4">
           <h2 className='text-[12px] text-black font-bold font-poppins'>13 Comments</h2>
          <h2 className='text-[12px] text-black font-bold font-poppins'>2 Shares</h2>
         </div>
        </div>
      </div>
      <div className="py-6 pl-5 pr-10 bg-[#FCFCFD] border-b border-t border-[#D9D9D9]">
        <div className="flex justify-between items-center">
          <div className=" group">
            <div className="flex items-center gap-4 cursor-pointer">
            <AiFillLike className='text-[#D9D9D9]'/>
            <h3 className='text-[12px] text-[#D9D9D9] font-bold font-poppins'>Like</h3>
          </div>
          <div className=" absolute hidden group-hover:block bottom-16">
           <div className="flex gap-2  bg-white p-3 rounded-full shadow-xl">
            <img className=' duration-300 ease-in-out hover:scale-130 cursor-pointer' src={like1} alt="" />
           <img className=' duration-300 ease-in-out hover:scale-130 cursor-pointer' src={love1} alt="" />
           <img className=' duration-300 ease-in-out hover:scale-130 cursor-pointer' src={dislike1} alt="" />
           <img className=' duration-300 ease-in-out hover:scale-130 cursor-pointer' src={happy1} alt="" />
           <img className=' duration-300 ease-in-out hover:scale-130 cursor-pointer' src={funny1} alt="" />
           <img className=' duration-300 ease-in-out hover:scale-130 cursor-pointer' src={wow1} alt="" />
           <img className=' duration-300 ease-in-out hover:scale-130 cursor-pointer' src={angry1} alt="" />
           <img className=' duration-300 ease-in-out hover:scale-130 cursor-pointer' src={sad1} alt="" />
           </div>
          </div>
          </div>
          <div className="flex items-center gap-4 cursor-pointer">
            <FaCommentAlt className='text-[#D9D9D9]'/>
            <h3 className='text-[12px] text-[#D9D9D9] font-bold font-poppins'>Comment</h3>
          </div>
          <div className="flex items-center gap-4 cursor-pointer">
            <FaShareAlt className='text-[#D9D9D9]'/>
            <h3 className='text-[12px] text-[#D9D9D9] font-bold font-poppins'>Share</h3>
          </div>
        </div>
      </div>
      <div className="py-4   px-8 bg-white">
        <div className="flex gap-3">
              <div className="">
                <img className='' src={comm} alt="" />
              </div>
              <div className="">
                <p className='text-[12px] text-[#3E3F5E] font-normal font-poppins'><span className='font-semibold'>Sohel rana</span>    It’s a always pleasure to do this streams with you. If we have at least half half the fun than last time it will be an incredible success!</p>
              <div className="flex gap-10 items-center mt-4">
                <div className="flex gap-2 ">
                <img src={wowlike} alt="" />
                <h2>4</h2>
              </div>
              <h3 className='text-[12px] text-tertiary font-medium font-poppins'>React!</h3>
              <h3 className='text-[12px] text-tertiary font-medium font-poppins'>Reply</h3>
              <h3 className='text-[12px] text-tertiary font-medium font-poppins'>15 minutes ago</h3>
              <BsThreeDots/>
              </div>
          </div>
          
        </div>
        
          
      
      </div>
      <div className="py-4   px-8 bg-white">
        <div className="flex gap-3 ml-6">
              <div className="">
                <img className='' src={comm} alt="" />
              </div>
              <div className="">
                <p className='text-[12px] text-[#3E3F5E] font-normal font-poppins'><span className='font-semibold'>Noyon</span>  It’s great oppurtunity</p>
              <div className="flex gap-10 items-center mt-4">
                <div className="flex gap-2 ">
                <img src={wowlike} alt="" />
                <h2>4</h2>
              </div>
              <h3 className='text-[12px] text-tertiary font-medium font-poppins'>React!</h3>
              <h3 className='text-[12px] text-tertiary font-medium font-poppins'>Reply</h3>
              <h3 className='text-[12px] text-tertiary font-medium font-poppins'>15 minutes ago</h3>
              <BsThreeDots/>
              </div>
          </div>
          
        </div>
        
          
      
      </div>
      <div className="py-4 bg-white border-b border-t border-[#D9D9D9]">
              <h3 className='text-[12px] text-[#3E3F5E] font-normal font-poppins text-center'>Load more comments <span className='text-[#01C7D9] font-medium'>9+</span></h3>
      </div>
      <div className="py-4.5 px-8 bg-white rounded-b-[10px]">
        <div className="flex items-center gap-5">
         <div className="">
           <img className='' src={comm} alt="" />
         </div>
         <div className="p-4 border border-[#D9D9D9] w-full rounded-[10px]">
           <input className='w-full outline-none' type="text" placeholder='Your reply ' />
         </div>

        </div>
      </div>
      </div>
     
     
    </div>
    </>
  )
}

export default NewsAbout_Details