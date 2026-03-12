import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import RootLayout from './componentes/RootLayout'
import Home from './componentes/home_route/Home'
import About from './componentes/about_route/About'





const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayout/>}>
    <Route index element={<Home/>}></Route>
    <Route path='/About' element={<About/>}></Route>


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

