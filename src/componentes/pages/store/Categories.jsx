import React from 'react'
import cart from "../../../assets/cart.png"
import { Link } from 'react-router'

const Categories = () => {
    return (
        <>
            <div className="mt-5.5">
                <h2 className='text-[14px] text-black font-bold font-poppins'>Categories</h2>
                <div className="p-3.5 bg-white rounded-[7px] mt-6">
                    <ul className='flex gap-3.75 items-center '>
                        <li className='text-[14px] text-black font-medium font-poppins cursor-pointer'>Desktop</li>
                        <li className='text-[14px] text-black font-medium font-poppins cursor-pointer'>Laptop</li>
                        <li className='text-[14px] text-black font-medium font-poppins cursor-pointer'>Component</li>
                        <li className='text-[14px] text-black font-medium font-poppins cursor-pointer'>Monitor</li>
                        <li className='text-[14px] text-black font-medium font-poppins cursor-pointer'>UPS</li>
                        <li className='text-[14px] text-black font-medium font-poppins cursor-pointer'>Tablet</li>
                        <li className='text-[14px] text-black font-medium font-poppins cursor-pointer'>Office Equipment</li>
                        <li className='text-[14px] text-black font-medium font-poppins cursor-pointer'>Camera</li>
                        <li className='text-[14px] text-black font-medium font-poppins cursor-pointer'>Security</li>
                        <li className='text-[14px] text-black font-medium font-poppins cursor-pointer'>Networking</li>
                        <li className='text-[14px] text-black font-medium font-poppins cursor-pointer'>Software</li>
                        <li className='text-[14px] text-black font-medium font-poppins cursor-pointer'>Accessories</li>
                        <li className='text-[14px] text-black font-medium font-poppins cursor-pointer'>Gadget</li>
                        <li className='text-[14px] text-black font-medium font-poppins cursor-pointer'>Gaming</li>
                    </ul>
                </div>
            </div>

            <div className="mt-5">
                <div className="grid grid-cols-4 gap-5">
                    <div className="bg-white rounded-[20px] relative">
                        <div className="py-1.5 px-6 bg-white rounded-full shadow inline-block absolute bottom-1/2 right-3.5">
                            <h3 className='text-[14px] text-primary font-bold font-poppins'>$12</h3>
                        </div>
                        <img className='w-full' src={cart} alt="" />
                        <div className=" py-6.5 px-10">
                            <h2 className='text-[16px] text-black font-bold font-poppins'>Intel Pentium G6400 10th Gen Special Deal PC</h2>
                        <div className="flex items-center gap-1.5 mt-2.25">
                            <div className="h-2.5 w-2.5 bg-[#23D2E2] rounded-full"></div>
                            <h4 className='text-[14px] text-black font-light font-poppins'>Laptop</h4>
                        </div>
                        <Link to="/Product">
                        
                            <h3 className='text-[13px] text-primary font-light font-poppins underline mt-3.25'>Full Screen View</h3>
                        </Link>
                        </div>
                        <div className="mt-7.5 flex ">
                            <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#615DFA] py-2.5 rounded-bl-[10px] cursor-pointer'>Add To Cart</button>
                            <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#23D2E2] py-2.5 rounded-br-[10px] cursor-pointer'>Wishlist</button>
                        </div>
                    </div>
                    <div className="bg-white rounded-[20px] relative">
                        <div className="py-1.5 px-6 bg-white rounded-full shadow inline-block absolute bottom-1/2 right-3.5">
                            <h3 className='text-[14px] text-primary font-bold font-poppins'>$12</h3>
                        </div>
                        <img className='w-full' src={cart} alt="" />
                        <div className=" py-6.5 px-10">
                            <h2 className='text-[16px] text-black font-bold font-poppins'>Intel Pentium G6400 10th Gen Special Deal PC</h2>
                        <div className="flex items-center gap-1.5 mt-2.25">
                            <div className="h-2.5 w-2.5 bg-[#23D2E2] rounded-full"></div>
                            <h4 className='text-[14px] text-black font-light font-poppins'>Laptop</h4>
                        </div>
                        <Link to="/Product">
                        
                            <h3 className='text-[13px] text-primary font-light font-poppins underline mt-3.25'>Full Screen View</h3>
                        </Link>
                        </div>
                        <div className="mt-7.5 flex ">
                            <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#615DFA] py-2.5 rounded-bl-[10px] cursor-pointer'>Add To Cart</button>
                            <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#23D2E2] py-2.5 rounded-br-[10px] cursor-pointer'>Wishlist</button>
                        </div>
                    </div>
                    <div className="bg-white rounded-[20px] relative">
                        <div className="py-1.5 px-6 bg-white rounded-full shadow inline-block absolute bottom-1/2 right-3.5">
                            <h3 className='text-[14px] text-primary font-bold font-poppins'>$12</h3>
                        </div>
                        <img className='w-full' src={cart} alt="" />
                        <div className=" py-6.5 px-10">
                            <h2 className='text-[16px] text-black font-bold font-poppins'>Intel Pentium G6400 10th Gen Special Deal PC</h2>
                        <div className="flex items-center gap-1.5 mt-2.25">
                            <div className="h-2.5 w-2.5 bg-[#23D2E2] rounded-full"></div>
                            <h4 className='text-[14px] text-black font-light font-poppins'>Laptop</h4>
                        </div>
                        <Link to="/Product">
                        
                            <h3 className='text-[13px] text-primary font-light font-poppins underline mt-3.25'>Full Screen View</h3>
                        </Link>
                        </div>
                        <div className="mt-7.5 flex ">
                            <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#615DFA] py-2.5 rounded-bl-[10px] cursor-pointer'>Add To Cart</button>
                            <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#23D2E2] py-2.5 rounded-br-[10px] cursor-pointer'>Wishlist</button>
                        </div>
                    </div>
                    <div className="bg-white rounded-[20px] relative">
                        <div className="py-1.5 px-6 bg-white rounded-full shadow inline-block absolute bottom-1/2 right-3.5">
                            <h3 className='text-[14px] text-primary font-bold font-poppins'>$12</h3>
                        </div>
                        <img className='w-full' src={cart} alt="" />
                        <div className=" py-6.5 px-10">
                            <h2 className='text-[16px] text-black font-bold font-poppins'>Intel Pentium G6400 10th Gen Special Deal PC</h2>
                        <div className="flex items-center gap-1.5 mt-2.25">
                            <div className="h-2.5 w-2.5 bg-[#23D2E2] rounded-full"></div>
                            <h4 className='text-[14px] text-black font-light font-poppins'>Laptop</h4>
                        </div>
                        <Link to="/Product">
                        
                            <h3 className='text-[13px] text-primary font-light font-poppins underline mt-3.25'>Full Screen View</h3>
                        </Link>
                        </div>
                        <div className="mt-7.5 flex ">
                            <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#615DFA] py-2.5 rounded-bl-[10px] cursor-pointer'>Add To Cart</button>
                            <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#23D2E2] py-2.5 rounded-br-[10px] cursor-pointer'>Wishlist</button>
                        </div>
                    </div>
                    <div className="bg-white rounded-[20px] relative">
                        <div className="py-1.5 px-6 bg-white rounded-full shadow inline-block absolute bottom-1/2 right-3.5">
                            <h3 className='text-[14px] text-primary font-bold font-poppins'>$12</h3>
                        </div>
                        <img className='w-full' src={cart} alt="" />
                        <div className=" py-6.5 px-10">
                            <h2 className='text-[16px] text-black font-bold font-poppins'>Intel Pentium G6400 10th Gen Special Deal PC</h2>
                        <div className="flex items-center gap-1.5 mt-2.25">
                            <div className="h-2.5 w-2.5 bg-[#23D2E2] rounded-full"></div>
                            <h4 className='text-[14px] text-black font-light font-poppins'>Laptop</h4>
                        </div>
                        <Link to="/Product">
                        
                            <h3 className='text-[13px] text-primary font-light font-poppins underline mt-3.25'>Full Screen View</h3>
                        </Link>
                        </div>
                        <div className="mt-7.5 flex ">
                            <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#615DFA] py-2.5 rounded-bl-[10px] cursor-pointer'>Add To Cart</button>
                            <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#23D2E2] py-2.5 rounded-br-[10px] cursor-pointer'>Wishlist</button>
                        </div>
                    </div>
                    <div className="bg-white rounded-[20px] relative">
                        <div className="py-1.5 px-6 bg-white rounded-full shadow inline-block absolute bottom-1/2 right-3.5">
                            <h3 className='text-[14px] text-primary font-bold font-poppins'>$12</h3>
                        </div>
                        <img className='w-full' src={cart} alt="" />
                        <div className=" py-6.5 px-10">
                            <h2 className='text-[16px] text-black font-bold font-poppins'>Intel Pentium G6400 10th Gen Special Deal PC</h2>
                        <div className="flex items-center gap-1.5 mt-2.25">
                            <div className="h-2.5 w-2.5 bg-[#23D2E2] rounded-full"></div>
                            <h4 className='text-[14px] text-black font-light font-poppins'>Laptop</h4>
                        </div>
                        <Link to="/Product">
                        
                            <h3 className='text-[13px] text-primary font-light font-poppins underline mt-3.25'>Full Screen View</h3>
                        </Link>
                        </div>
                        <div className="mt-7.5 flex ">
                            <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#615DFA] py-2.5 rounded-bl-[10px] cursor-pointer'>Add To Cart</button>
                            <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#23D2E2] py-2.5 rounded-br-[10px] cursor-pointer'>Wishlist</button>
                        </div>
                    </div>
                    <div className="bg-white rounded-[20px] relative">
                        <div className="py-1.5 px-6 bg-white rounded-full shadow inline-block absolute bottom-1/2 right-3.5">
                            <h3 className='text-[14px] text-primary font-bold font-poppins'>$12</h3>
                        </div>
                        <img className='w-full' src={cart} alt="" />
                        <div className=" py-6.5 px-10">
                            <h2 className='text-[16px] text-black font-bold font-poppins'>Intel Pentium G6400 10th Gen Special Deal PC</h2>
                        <div className="flex items-center gap-1.5 mt-2.25">
                            <div className="h-2.5 w-2.5 bg-[#23D2E2] rounded-full"></div>
                            <h4 className='text-[14px] text-black font-light font-poppins'>Laptop</h4>
                        </div>
                        <Link to="/Product">
                        
                            <h3 className='text-[13px] text-primary font-light font-poppins underline mt-3.25'>Full Screen View</h3>
                        </Link>
                        </div>
                        <div className="mt-7.5 flex ">
                            <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#615DFA] py-2.5 rounded-bl-[10px] cursor-pointer'>Add To Cart</button>
                            <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#23D2E2] py-2.5 rounded-br-[10px] cursor-pointer'>Wishlist</button>
                        </div>
                    </div>
                    <div className="bg-white rounded-[20px] relative">
                        <div className="py-1.5 px-6 bg-white rounded-full shadow inline-block absolute bottom-1/2 right-3.5">
                            <h3 className='text-[14px] text-primary font-bold font-poppins'>$12</h3>
                        </div>
                        <img className='w-full' src={cart} alt="" />
                        <div className=" py-6.5 px-10">
                            <h2 className='text-[16px] text-black font-bold font-poppins'>Intel Pentium G6400 10th Gen Special Deal PC</h2>
                        <div className="flex items-center gap-1.5 mt-2.25">
                            <div className="h-2.5 w-2.5 bg-[#23D2E2] rounded-full"></div>
                            <h4 className='text-[14px] text-black font-light font-poppins'>Laptop</h4>
                        </div>
                        <Link to="/Product">
                        
                            <h3 className='text-[13px] text-primary font-light font-poppins underline mt-3.25'>Full Screen View</h3>
                        </Link>
                        </div>
                        <div className="mt-7.5 flex ">
                            <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#615DFA] py-2.5 rounded-bl-[10px] cursor-pointer'>Add To Cart</button>
                            <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#23D2E2] py-2.5 rounded-br-[10px] cursor-pointer'>Wishlist</button>
                        </div>
                    </div>
                    <div className="bg-white rounded-[20px] relative">
                        <div className="py-1.5 px-6 bg-white rounded-full shadow inline-block absolute bottom-1/2 right-3.5">
                            <h3 className='text-[14px] text-primary font-bold font-poppins'>$12</h3>
                        </div>
                        <img className='w-full' src={cart} alt="" />
                        <div className=" py-6.5 px-10">
                            <h2 className='text-[16px] text-black font-bold font-poppins'>Intel Pentium G6400 10th Gen Special Deal PC</h2>
                        <div className="flex items-center gap-1.5 mt-2.25">
                            <div className="h-2.5 w-2.5 bg-[#23D2E2] rounded-full"></div>
                            <h4 className='text-[14px] text-black font-light font-poppins'>Laptop</h4>
                        </div>
                        <Link to="/Product">
                        
                            <h3 className='text-[13px] text-primary font-light font-poppins underline mt-3.25'>Full Screen View</h3>
                        </Link>
                        </div>
                        <div className="mt-7.5 flex ">
                            <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#615DFA] py-2.5 rounded-bl-[10px] cursor-pointer'>Add To Cart</button>
                            <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#23D2E2] py-2.5 rounded-br-[10px] cursor-pointer'>Wishlist</button>
                        </div>
                    </div>
                    <div className="bg-white rounded-[20px] relative">
                        <div className="py-1.5 px-6 bg-white rounded-full shadow inline-block absolute bottom-1/2 right-3.5">
                            <h3 className='text-[14px] text-primary font-bold font-poppins'>$12</h3>
                        </div>
                        <img className='w-full' src={cart} alt="" />
                        <div className=" py-6.5 px-10">
                            <h2 className='text-[16px] text-black font-bold font-poppins'>Intel Pentium G6400 10th Gen Special Deal PC</h2>
                        <div className="flex items-center gap-1.5 mt-2.25">
                            <div className="h-2.5 w-2.5 bg-[#23D2E2] rounded-full"></div>
                            <h4 className='text-[14px] text-black font-light font-poppins'>Laptop</h4>
                        </div>
                        <Link to="/Product">
                        
                            <h3 className='text-[13px] text-primary font-light font-poppins underline mt-3.25'>Full Screen View</h3>
                        </Link>
                        </div>
                        <div className="mt-7.5 flex ">
                            <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#615DFA] py-2.5 rounded-bl-[10px] cursor-pointer'>Add To Cart</button>
                            <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#23D2E2] py-2.5 rounded-br-[10px] cursor-pointer'>Wishlist</button>
                        </div>
                    </div>
                    <div className="bg-white rounded-[20px] relative">
                        <div className="py-1.5 px-6 bg-white rounded-full shadow inline-block absolute bottom-1/2 right-3.5">
                            <h3 className='text-[14px] text-primary font-bold font-poppins'>$12</h3>
                        </div>
                        <img className='w-full' src={cart} alt="" />
                        <div className=" py-6.5 px-10">
                            <h2 className='text-[16px] text-black font-bold font-poppins'>Intel Pentium G6400 10th Gen Special Deal PC</h2>
                        <div className="flex items-center gap-1.5 mt-2.25">
                            <div className="h-2.5 w-2.5 bg-[#23D2E2] rounded-full"></div>
                            <h4 className='text-[14px] text-black font-light font-poppins'>Laptop</h4>
                        </div>
                        <Link to="/Product">
                        
                            <h3 className='text-[13px] text-primary font-light font-poppins underline mt-3.25'>Full Screen View</h3>
                        </Link>
                        </div>
                        <div className="mt-7.5 flex ">
                            <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#615DFA] py-2.5 rounded-bl-[10px] cursor-pointer'>Add To Cart</button>
                            <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#23D2E2] py-2.5 rounded-br-[10px] cursor-pointer'>Wishlist</button>
                        </div>
                    </div>
                    <div className="bg-white rounded-[20px] relative">
                        <div className="py-1.5 px-6 bg-white rounded-full shadow inline-block absolute bottom-1/2 right-3.5">
                            <h3 className='text-[14px] text-primary font-bold font-poppins'>$12</h3>
                        </div>
                        <img className='w-full' src={cart} alt="" />
                        <div className=" py-6.5 px-10">
                            <h2 className='text-[16px] text-black font-bold font-poppins'>Intel Pentium G6400 10th Gen Special Deal PC</h2>
                        <div className="flex items-center gap-1.5 mt-2.25">
                            <div className="h-2.5 w-2.5 bg-[#23D2E2] rounded-full"></div>
                            <h4 className='text-[14px] text-black font-light font-poppins'>Laptop</h4>
                        </div>
                        <Link to="/Product">
                        
                            <h3 className='text-[13px] text-primary font-light font-poppins underline mt-3.25'>Full Screen View</h3>
                        </Link>
                        </div>
                        <div className="mt-7.5 flex ">
                            <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#615DFA] py-2.5 rounded-bl-[10px] cursor-pointer'>Add To Cart</button>
                            <button className='w-full text-[13px] text-white font-semibold font-poppins bg-[#23D2E2] py-2.5 rounded-br-[10px] cursor-pointer'>Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Categories
