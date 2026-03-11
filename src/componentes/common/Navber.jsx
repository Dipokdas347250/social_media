import React from 'react'
import logo from "../../assets/logo.png"
import { FaBars } from "react-icons/fa6";


const Navber = () => {
  return (
    <>
    <nav className='py-5 bg-primary px-6'>
        <div className="">
            <div className="w-[20%]">
                <div className="flex justify-between items-center">
                    <img src={logo} alt="" />
                <FaBars className='text-white' />
                </div>
            </div>
            <div className="w-[80%]"></div>
        </div>
    </nav>
    </>
  )
}

export default Navber
