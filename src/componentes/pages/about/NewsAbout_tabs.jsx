import React from 'react'
import NewsAbout_me from '../home/NewsAbout_me'
import NewsAbout_Details from '../home/NewsAbout_Details'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { FaAlignCenter } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa6";
import { FaCamera } from "react-icons/fa";
import { FaPhotoVideo } from "react-icons/fa";
import ima from "../../../assets/ima.png"
import iam1 from "../../../assets/iam1.png"
import { RiDeleteBin6Line } from "react-icons/ri";






const NewsAbout_tabs = () => {
    return (
        <>
            <div className="flex gap-6 mt-8.5">
                <div className="w-[20%]">
                    <NewsAbout_me />
                </div>
                <div className="w-[55%]">
                    <Tabs>
                        <TabList className="flex justify-center border-b  border-[#D9D9D9] bg-white rounded-t-[10px]">
                            <Tab
                                selectedClassName=" bg-[#615DFA] text-white"
                                className=" w-[50%] flex justify-center items-center py-7.5 cursor-pointer outline-none text-[12px] text-[#DEDEDE] font-bold font-poppins gap-4 rounded-tl-[10px] "><FaAlignCenter className='text-[20px]' /> Status</Tab>
                            <Tab
                                selectedClassName=" bg-[#615DFA] text-white"
                                className=" w-[50%] flex justify-center items-center py-7.5 cursor-pointer outline-none text-[12px] text-[#DEDEDE] font-bold font-poppins gap-4 rounded-tr-[10px]  "><FaLayerGroup className='text-[20px]' /> Product Upload</Tab>

                        </TabList>


                        <TabPanel>
                            <div className="">
                                <textarea
                                    className="w-full py-3.5 px-4 outline-none bg-[#FCFCFD]  border-b-[#d9d9d9] transition-all duration-300 resize-none"
                                    rows="5"
                                    placeholder="Hi, A B M Shawon Islam, Share your post ..."
                                ></textarea>
                            </div>
                            <div className="py-4.5 px-7 bg-white mb-4.5 rounded-b-[10px]">
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-5 text-[#3E3F5E] text-[16px]">
                                        <FaCamera />
                                        <FaPhotoVideo />
                                    </div>
                                    <div className="flex gap-5">
                                        <button className='px-9.5 py-3.25 bg-[#181828] text-[12px] text-white font-bold font-poppins rounded-[10px] cursor-pointer'>Discard</button>
                                        <button className='px-12 py-3.25 bg-[#615DFA] text-[12px] text-white font-bold font-poppins rounded-[10px] cursor-pointer'>Post</button>
                                    </div>
                                </div>
                            </div>
                            <NewsAbout_Details />
                        </TabPanel>
                        <TabPanel>
                            <div className="">
                                <div className="py-7.5 px-5 bg-[#FCFCFD]">
                                    <div className=" grid grid-cols-2 gap-3">
                                        <select className='py-2 px-2 border border-[#D9D9D9] rounded-[5px] outline-none  text-[12px] text-[#D9D9D9] font-normal font-poppins' name="" id="">
                                            <option value="Product name">Product name</option>
                                            <option value="Essence">Essence</option>
                                            <option value="Glamour Beauty">Glamour Beauty</option>
                                            <option value="Chic Cosmetics">Chic Cosmetics</option>
                                        </select>
                                        <div className="py-2 px-2 border border-[#D9D9D9] rounded-[5px] outline-none  text-[12px] text-black font-normal font-poppins">
                                            <h2>$12</h2>
                                        </div>
                                        <select className='py-2 px-2 border border-[#D9D9D9] rounded-[5px] outline-none  text-[12px] text-[#D9D9D9] font-normal font-poppins' name="" id="">
                                            <option value="Product Categoty">Product Categoty</option>
                                            <option value="Essence">Essence</option>
                                            <option value="Glamour Beauty">Glamour Beauty</option>
                                            <option value="Chic Cosmetics">Chic Cosmetics</option>
                                        </select>
                                        <select className='py-2 px-2 border border-[#D9D9D9] rounded-[5px] outline-none  text-[12px] text-[#D9D9D9] font-normal font-poppins' name="" id="">
                                            <option value="Product color">Product color</option>
                                            <option value="Essence">Essence</option>
                                            <option value="Glamour Beauty">Glamour Beauty</option>
                                            <option value="Chic Cosmetics">Chic Cosmetics</option>
                                        </select>
                                        <select className='py-2 px-2 border border-[#D9D9D9] rounded-[5px] outline-none  text-[12px] text-[#D9D9D9] font-normal font-poppins' name="" id="">
                                            <option value="Product Size">Product Size</option>
                                            <option value="Essence">Essence</option>
                                            <option value="Glamour Beauty">Glamour Beauty</option>
                                            <option value="Chic Cosmetics">Chic Cosmetics</option>
                                        </select>
                                        <div className="py-2 px-2 border border-[#D9D9D9] rounded-[5px] outline-none  text-[12px] text-black font-normal font-poppins">
                                            <h2>10</h2>
                                        </div>
                                        <div className="py-3 px-2 bg-[#24234B] rounded-[10px] outline-none  text-[12px] text-white font-normal font-poppins text-center">
                                            <h2>Image Preview</h2>
                                        </div>
                                        <div className="py-3 px-2 bg-[#1877F2] rounded-[10px] outline-none  text-[12px] text-white font-normal font-poppins text-center">
                                            <h2>Image Thumbnail</h2>
                                        </div>
                                        <img className='w-full' src={ima} alt="" />
                                        <img className='w-full' src={iam1} alt="" />

                                    </div>
                                    <div className=" mt-2.5">
                                        <textarea
                                            className="w-full py-3.5 px-4 outline-none bg-[#FCFCFD] border-2  border-[#d9d9d9]  rounded-[10px] resize-none"
                                            rows="4"
                                            placeholder="Product Description"
                                        ></textarea>
                                    </div>
                                    <div className="mt-2.5">
                                        <h2 className='text-[12px] text-black font-medium font-poppins'>Additional Information</h2>
                                        <div className="mt-2.5">
                                            <div className="flex justify-between gap-2.5">
                                                <div className=" w-[50%] py-2 px-2 border border-[#D9D9D9] rounded-[5px] outline-none  text-[12px] text-[#D9D9D9] font-normal font-poppins">
                                                    <h2>Feature Name</h2>
                                                </div>
                                                <div className=" w-[50%] py-2 px-2 border border-[#D9D9D9] rounded-[5px] outline-none  text-[12px] text-[#D9D9D9] font-normal font-poppins">
                                                    <h2>Feature Value</h2>
                                                </div>
                                                <div className=" py-2.5 px-1 bg-[#EA5050] text-white cursor-pointer ">
                                                    <RiDeleteBin6Line />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-2.5">
                                            <div className="flex justify-between gap-2.5">
                                                <div className=" w-[50%] py-2 px-2 border border-[#D9D9D9] rounded-[5px] outline-none  text-[12px] text-[#D9D9D9] font-normal font-poppins">
                                                    <h2>Feature Name</h2>
                                                </div>
                                                <div className=" w-[50%] py-2 px-2 border border-[#D9D9D9] rounded-[5px] outline-none  text-[12px] text-[#D9D9D9] font-normal font-poppins">
                                                    <h2>Feature Value</h2>
                                                </div>
                                                <div className=" py-2.5 px-1 bg-[#EA5050] text-white cursor-pointer ">
                                                    <RiDeleteBin6Line />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-2.5">
                                            <div className="flex justify-between gap-2.5">
                                                <div className=" w-[50%] py-2 px-2 border border-[#D9D9D9] rounded-[5px] outline-none  text-[12px] text-[#D9D9D9] font-normal font-poppins">
                                                    <h2>Feature Name</h2>
                                                </div>
                                                <div className=" w-[50%] py-2 px-2 border border-[#D9D9D9] rounded-[5px] outline-none  text-[12px] text-[#D9D9D9] font-normal font-poppins">
                                                    <h2>Feature Value</h2>
                                                </div>
                                                <div className=" py-2.5 px-1 bg-[#EA5050] text-white cursor-pointer ">
                                                    <RiDeleteBin6Line />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="py-5 px-7 bg-white border-t-2 border-[#D9D9D9]  mb-4.5 rounded-b-[10px]">
                                <div className="flex justify-end items-center">
                                    
                                    <div className="flex gap-5">
                                        <button className='px-9.5 py-3.25 bg-[#181828] text-[12px] text-white font-bold font-poppins rounded-[10px] cursor-pointer'>Discard</button>
                                        <button className='px-12 py-3.25 bg-[#615DFA] text-[12px] text-white font-bold font-poppins rounded-[10px] cursor-pointer'>Post</button>
                                    </div>
                                </div>
                            </div>
                            </div>
                            <NewsAbout_Details />
                        </TabPanel>
                    </Tabs>

                </div>
            </div>
        </>
    )
}

export default NewsAbout_tabs