import { Link } from "react-router"



const Checkout_Details = () => {
    return (
        <>
            <div className="mt-6">
                <h3 className='text-[14px] text-[#AFB0C0] font-normal font-poppins'>YOUR ORDER</h3>
                <h2 className='text-[24px] text-[#24234B] font-medium font-poppins'>Checkout</h2>
            </div>
            <div className="flex gap-4 mt-6.25 ">
                <div className="w-[70%]">
                    <div className="p-8 bg-white rounded-[15px]">
                        <h3 className='text-[18px] text-black font-medium font-poppins'>Billing Details</h3>
                        <div className="">
                            <div className="flex items-center gap-3 mt-8 ">
                                <input className='py-3.5 px-5.5 border border-[#AFB0C0] outline-none rounded-[15px] w-full' type="text" placeholder='First name' />
                                <input className='py-3.5 px-5.5 border border-[#AFB0C0] outline-none rounded-[15px] w-full' type="text" placeholder='Last name' />
                            </div>
                            <div className="flex items-center gap-3 mt-5.5 ">
                                <input className='py-3.5 px-5.5 border border-[#AFB0C0] outline-none rounded-[15px] w-full' type="email" placeholder='Email' />
                                <input className='py-3.5 px-5.5 border border-[#AFB0C0] outline-none rounded-[15px] w-full' type="tel" placeholder='Phone number' />
                            </div>
                            <div className="mt-5.5 ">

                                <input className='py-3.5 px-5.5 border border-[#AFB0C0] outline-none rounded-[15px] w-full' type="text" placeholder='Full address' />
                            </div>
                            <div className="flex items-center gap-3 mt-5.5 ">
                                <input className='py-3.5 px-5.5 border border-[#AFB0C0] outline-none rounded-[15px] w-full' type="text" placeholder='New York' />
                                <input className='py-3.5 px-5.5 border border-[#AFB0C0] outline-none rounded-[15px] w-full' type="number" placeholder='ZIP Code' />
                            </div>
                            <div className=" mt-5.5 ">
                                <textarea
                                    className="w-full py-3.5 px-4 outline-none bg-white border  border-[#AFB0C0]  rounded-[10px] resize-none"
                                    rows="4"
                                    placeholder="Write any additional details here..."
                                ></textarea>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="w-[30%]">
                    <div className="p-6.5 bg-white rounded-[15px]">
                        <h2 className='text-[17px] text-[#181828] font-medium font-poppins'>Order Summery</h2>
                        <div className=" space-y-5 my-8">
                            <div className="flex justify-between items-center">
                                <h4 className='text-[14px] text-[#45437F] font-medium font-poppins'>Twitch stream ui pack</h4>
                                <h5 className='text-[12px] text-black font-medium font-poppins'><span className='text-[#23D2E2]'>$</span>44.00</h5>
                            </div>
                            <div className="flex justify-between items-center">
                                <h4 className='text-[14px] text-[#45437F] font-medium font-poppins'>Twitch stream ui pack</h4>
                                <h5 className='text-[12px] text-black font-medium font-poppins'><span className='text-[#23D2E2]'>$</span>44.00</h5>
                            </div>
                            <div className="flex justify-between items-center">
                                <h4 className='text-[14px] text-[#45437F] font-medium font-poppins'>Twitch stream ui pack</h4>
                                <h5 className='text-[12px] text-black font-medium font-poppins'><span className='text-[#23D2E2]'>$</span>44.00</h5>
                            </div>
                            <div className="flex justify-between items-center">
                                <h4 className='text-[14px] text-[#45437F] font-medium font-poppins'>Twitch stream ui pack</h4>
                                <h5 className='text-[12px] text-black font-medium font-poppins'><span className='text-[#23D2E2]'>$</span>44.00</h5>
                            </div>
                        </div>
                        <div className="py-5 border-t border-b border-[#AFB0C0] space-y-3 ">
                         <div className="flex justify-between items-center">
                                <h4 className='text-[12px] text-[#AFB0C0] font-medium font-poppins'>Cart(3)</h4>
                                <h5 className='text-[12px] text-black font-medium font-poppins'><span className='text-[#23D2E2]'>$</span>44.00</h5>
                            </div>
                         <div className="flex justify-between items-center">
                                <h4 className='text-[12px] text-[#AFB0C0] font-medium font-poppins'>Code</h4>
                                <h5 className='text-[12px] text-black font-medium font-poppins'>-<span className='text-[#23D2E2]'>$</span>15.00</h5>
                            </div>
                         <div className="flex justify-between items-center">
                                <h4 className='text-[12px] text-[#AFB0C0] font-medium font-poppins'>Total</h4>
                                <h5 className='text-[12px] text-black font-medium font-poppins'><span className='text-[#23D2E2]'>$</span>39.00</h5>
                            </div>
                        </div>

                        <div className="py-5 border-b border-[#AFB0C0]">
                            <h2 className='text-[49px] text-black font-medium font-poppins text-center'><span className='text-[#23D2E2]'>$</span>39.00</h2>
                        </div>

                        <div className="mt-5.25">
                            <h2 className='text-[17px] text-[#181828] font-medium font-poppins'>Payment Method</h2>
                            <div className="flex items-center gap-2 mt-5">
                                <input type="radio" />
                            <h3 className='text-[12px] text-[#181828] font-semibold font-poppins'>Paypal</h3>
                            </div>
                            <p className='text-[11px] text-[#AFB0C0] font-medium font-poppins mt-2'>Pay with your paypal balance or connected bank account its quick and really secure.</p>
                            <div className="flex items-center gap-2 mt-3">
                                <input type="radio" />
                            <h3 className='text-[12px] text-[#181828] font-semibold font-poppins'>Credit or Debit card</h3>
                            </div>

                            <Link to="/Order">
                            
                            <button className='py-4 bg-[#23D2E2] rounded-[15px] w-full mt-8.5 cursor-pointer text-[12px] text-white font-medium font-poppins'>Complete order !</button>
                            </Link>
                        </div>
                    </div>
                </div>

             
            </div>

            
        </>
    )
}

export default Checkout_Details