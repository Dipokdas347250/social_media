import React from 'react'
import store from "../../assets/store.png"

const Marketplace = () => {
  return (
   <>
   <div className="bg-primary flex items-center rounded-[20px] gap-9 ">
    <img src={store} alt="" />
    <div className="">
        <h2 className='text-[36px] text-white font-bold font-poppins'>MERNIAN Marketplace</h2>
        <h3 className='text-[15px] text-white font-normal font-poppins'>The best place for the community to buy and sell!</h3>
    </div>
   </div>
   </>
  )
}

export default Marketplace
