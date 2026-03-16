import { Link } from "react-router";
import { FaHome, FaUser, FaServicestack } from "react-icons/fa";
import { FaNewspaper } from "react-icons/fa";
import { FaGopuram } from "react-icons/fa";
import { HiCamera } from "react-icons/hi2";
import { FaLayerGroup } from "react-icons/fa6";
import { FaUserGroup } from "react-icons/fa6";
import { FaHandsAslInterpreting } from "react-icons/fa6";
import { FaSignInAlt } from "react-icons/fa";




const Sidebar = () => {




  return (
    <>

      <section className="h-screen  bg-white shadow fixed w-[20%]  ">

      
         

        <div className="">
          <div className="w-full h-18.75 bg-[#45437F] pt-4">

            <div className="bg-primary w-30  h-30 mx-auto rounded-full border-6 border-white "></div>

          </div>
          <div className="mt-18.75">
            <h2 className="text-[16px] text-black font-bold font-poppins text-center">A B M Shawon Islam</h2>
            <h4 className="text-[12px] text-tertiary font-medium font-poppins text-center">www.abm.com</h4>
          </div>
        </div>
        <div className="px-15 mt-10.5 ">
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

        <div className=" pl-10 pr-5 mt-16">
          <ul className=" space-y-1">
            
            <Link to="/about">
            <li className="flex items-center gap-7.5 py-4 px-5 rounded-[10px] text-[14px] text-tertiary font-semibold font-poppins bg-white duration-300 ease-in-out hover:bg-[#23D2E2] hover:text-white focus:bg-[#23D2E2] focus:text-white cursor-pointer "><FaNewspaper className="text-[20px]"/> Newsfeed</li>
           </Link>
            <Link to="/">
              <li className="flex items-center gap-7.5 py-4 px-5 rounded-[10px] text-[14px] text-tertiary font-semibold font-poppins bg-white duration-300 ease-in-out hover:bg-[#23D2E2] hover:text-white focus:bg-[#23D2E2] focus:text-white cursor-pointer "><FaGopuram className="text-[20px]" /> Videos</li>
            </Link>
            <li className="flex items-center gap-7.5 py-4 px-5 rounded-[10px] text-[14px] text-tertiary font-semibold font-poppins bg-white duration-300 ease-in-out hover:bg-[#23D2E2] hover:text-white focus:bg-[#23D2E2] focus:text-white cursor-pointer "><FaLayerGroup className="text-[20px]" /> Groups</li>
            <li className="flex items-center gap-7.5 py-4 px-5 rounded-[10px] text-[14px] text-tertiary font-semibold font-poppins bg-white duration-300 ease-in-out hover:bg-[#23D2E2] hover:text-white focus:bg-[#23D2E2] focus:text-white cursor-pointer "><HiCamera className="text-[20px]" /> Photos</li>
            <Link to="/Add_friend">
            
            <li className="flex items-center gap-7.5 py-4 px-5 rounded-[10px] text-[14px] text-tertiary font-semibold font-poppins bg-white duration-300 ease-in-out hover:bg-[#23D2E2] hover:text-white focus:bg-[#23D2E2] focus:text-white cursor-pointer "><FaUserGroup className="text-[20px]" /> Friends</li>
            </Link>
            <li className="flex items-center gap-7.5 py-4 px-5 rounded-[10px] text-[14px] text-tertiary font-semibold font-poppins bg-white duration-300 ease-in-out hover:bg-[#23D2E2] hover:text-white focus:bg-[#23D2E2] focus:text-white cursor-pointer "><FaHandsAslInterpreting className="text-[20px]" /> Friends Request</li>
            <li className="flex items-center gap-7.5 py-4 px-5 rounded-[10px] text-[14px] text-tertiary font-semibold font-poppins bg-white duration-300 ease-in-out hover:bg-[#23D2E2] hover:text-white focus:bg-[#23D2E2] focus:text-white cursor-pointer "><FaSignInAlt className="text-[20px]" /> Logout</li>
          </ul>

        </div>

      </section>


    </>
  );
};

export default Sidebar;