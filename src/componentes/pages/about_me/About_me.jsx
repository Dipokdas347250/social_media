import React from 'react'
import Newsfeed from '../home/NewsfeedTop'
import { Link } from 'react-router'
import { BsThreeDots } from "react-icons/bs";


const About_me = () => {
    return (
        <div>
            <Newsfeed />
            <div className="flex gap-4.5 mt-8.5">
                <div className="w-[20%]">
                    <div className="p-6 bg-white rounded-[10px]">
                        <Link to="/About_me">
                            <div className="flex justify-between items-center">
                                <h3 className='text-[14px] text-[#3E3F5E] font-bold font-poppins '>About me</h3>
                                <BsThreeDots className=' cursor-pointer' />

                            </div>
                        </Link>
                        <p className='text-[12px] text-tertiary font-normal font-poppins mt-7.5'>Hi! My name is A B M Shawon Islam but some people may know me as GameHuntress! I have a Twitch channel where I stream, play and review all the newest games.</p>
                        <h4 className='text-[12px] text-tertiary font-bold   font-poppins mt-4.5'>Joined: <span className=' font-normal ml-4'>22 November 2008</span></h4>
                        <h4 className='text-[12px] text-tertiary font-bold   font-poppins mt-4.5'>City:   <span className=' font-normal ml-4'>  Dhaka</span></h4>
                        <h4 className='text-[12px] text-tertiary font-bold   font-poppins mt-4.5'>Age: <span className=' font-normal ml-4'>  18 years </span></h4>
                    </div>
                    <div className="p-6 bg-white rounded-[10px] mt-4">
                       
                            <div className="flex justify-between items-center">
                                <h3 className='text-[14px] text-[#3E3F5E] font-bold font-poppins '>Personal Info</h3>
                                <BsThreeDots className=' cursor-pointer' />

                            </div>
                       
                        
                        <h4 className='text-[12px] text-tertiary font-bold   font-poppins mt-6.5'>Email: <span className=' font-normal ml-4'>shawon.cit.bd@gmail.com</span></h4>
                        <h4 className='text-[12px] text-tertiary font-bold   font-poppins mt-4.5'>Birthday: <span className=' font-normal ml-4'>   28 April 1993</span></h4>
                        <h4 className='text-[12px] text-tertiary font-bold   font-poppins mt-4.5'>Occupation: <span className=' font-normal ml-4'>  MernStack Developer </span></h4>
                        <h4 className='text-[12px] text-tertiary font-bold   font-poppins mt-4.5'>Status: <span className=' font-normal ml-4'>  unmarried </span></h4>
                        <h4 className='text-[12px] text-tertiary font-bold   font-poppins mt-4.5'>Birthplace: <span className=' font-normal ml-4'>  Narayanganj </span></h4>
                    </div>
                </div>
                <div className="w-[56%]">
                    <div className="pt-3.5 pb-7.5 pl-7.5 pr-10 bg-white rounded-[10px]">
                         <div className="flex justify-between items-center">
                                <h3 className='text-[14px] text-[#3E3F5E] font-bold font-poppins '>Interests</h3>
                                <BsThreeDots className=' cursor-pointer' />

                            </div>

                            <div className="mt-5">
                                <h2 className='text-[12px] text-black font-medium font-poppins'>Favourite Tv Shows</h2>
                                <p className='text-[12px] text-black font-normal font-poppins mt-1.5'>Breaking good,Red devil,people of interest,the running dead,found,american guy Game of wars.</p>
                            </div>
                            <div className="mt-6">
                                <h2 className='text-[12px] text-black font-medium font-poppins'>Favourite Tv Shows</h2>
                                <p className='text-[12px] text-black font-normal font-poppins mt-1.5'>Breaking good,Red devil,people of interest,the running dead,found,american guy Game of wars.</p>
                            </div>
                            <div className="mt-6">
                                <h2 className='text-[12px] text-black font-medium font-poppins'>Favourite Tv Shows</h2>
                                <p className='text-[12px] text-black font-normal font-poppins mt-1.5'>Breaking good,Red devil,people of interest,the running dead,found,american guy Game of wars.</p>
                            </div>
                            <div className="mt-6">
                                <h2 className='text-[12px] text-black font-medium font-poppins'>Favourite Tv Shows</h2>
                                <p className='text-[12px] text-black font-normal font-poppins mt-1.5'>Breaking good,Red devil,people of interest,the running dead,found,american guy Game of wars.</p>
                            </div>
                    </div>
                    <div className="pt-3.5 pb-7.5 pl-7.5 pr-10 bg-white rounded-[10px] mt-4">
                         <div className="flex justify-between items-center">
                                <h3 className='text-[14px] text-[#3E3F5E] font-bold font-poppins '>Jobs & Education</h3>
                                <BsThreeDots className=' cursor-pointer' />

                            </div>

                            <div className="mt-5">
                                <h2 className='text-[12px] text-black font-medium font-poppins'>Lead custom designer</h2>
                                <p className='text-[12px] text-black font-normal font-poppins mt-1.5'>Breaking good,Red devil,people of interest,the running dead,found,american guy Game of wars.</p>
                            </div>
                            <div className="mt-6">
                                <h2 className='text-[12px] text-black font-medium font-poppins'>Mernstack developer</h2>
                                <p className='text-[12px] text-black font-normal font-poppins mt-1.5'>Breaking good,Red devil,people of interest,the running dead,found,american guy Game of wars.</p>
                            </div>
                            <div className="mt-6">
                                <h2 className='text-[12px] text-black font-medium font-poppins'>fronend developer</h2>
                                <p className='text-[12px] text-black font-normal font-poppins mt-1.5'>Breaking good,Red devil,people of interest,the running dead,found,american guy Game of wars.</p>
                            </div>
                            <div className="mt-6">
                                <h2 className='text-[12px] text-black font-medium font-poppins'>AWS</h2>
                                <p className='text-[12px] text-black font-normal font-poppins mt-1.5'>Breaking good,Red devil,people of interest,the running dead,found,american guy Game of wars.</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About_me
