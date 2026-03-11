import Navber from './common/Navber'
import Sideber from './common/Sideber'
import RoundBer from './common/RoundBer'
import { Outlet } from 'react-router'

const RootLayout = () => {
  return (
    <>
    <Navber/>
    <Sideber/>
    <RoundBer/>
    <Outlet/>
    </>
  )
}

export default RootLayout
