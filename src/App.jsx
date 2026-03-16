import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import RootLayout from './componentes/RootLayout'
import Home from './componentes/home_route/Home'
import About from './componentes/about_route/About'
import Add_friend from './componentes/add_friend_route/Add_friend'
import About_me from './componentes/about_me_route/About_me'
import Store from './componentes/store_route/Store'
import Product from './componentes/Product_route/Product'





const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout/>}>
    <Route index element={<Home/>}></Route>
    <Route path='/About' element={<About/>}></Route>
    <Route path='/Add_friend' element={<Add_friend/>}></Route>
    <Route path='/About_me' element={<About_me/>}></Route>
    <Route path='/Store' element={<Store/>}></Route>
    <Route path='/Product' element={<Product/>}></Route>


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

