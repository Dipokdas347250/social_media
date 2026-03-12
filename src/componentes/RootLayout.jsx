import Navber from './common/Navber'
import Sideber from './common/Sideber'
import RoundBer from './common/RoundBer'
import { Outlet } from 'react-router'

const RootLayout = () => {
  return (
    <>
    <Navber/>
    
  
   
    <div className="flex justify-between">
      <div className="min-w-[20%] ">

      <Sideber/>
      </div>
      <div className="w-full p-7.5">

       <Outlet/>
      </div>
      <div className=" min-w-[5%]">
          <RoundBer/>
      </div>
    </div>
    </>
  )
}

export default RootLayout
