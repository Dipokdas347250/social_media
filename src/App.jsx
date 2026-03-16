import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import RootLayout from './componentes/RootLayout'
import Home from './componentes/home_route/Home'
import About from './componentes/about_route/About'
import Add_friend from './componentes/add_friend_route/Add_friend'
import About_meRoute from './componentes/about_me_route/About_meRoute'





const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout/>}>
    <Route index element={<Home/>}></Route>
    <Route path='/About' element={<About/>}></Route>
    <Route path='/Add_friend' element={<Add_friend/>}></Route>
    <Route path='/About_meRoute' element={<About_meRoute/>}></Route>


  </Route>
))

const App = () => {
  return (
   <>
   <RouterProvider router={router} />
   </>
  )
}

export default App

