import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import React from 'react'
import Landingpage from './pages/Landingpage/LandingPage.jsx'
import './App.css'
import Mainlayout from './layout/MainLayout.jsx'
import Home from './pages/HomePage/Home.jsx'
import GamePage from './pages/GamePage/GamePage.jsx'
import Playerpage from './pages/PlayerPage/Playerpage.jsx'
import LoginPage from './pages/LoginPage/LoginPage.jsx'
import Forgot from './pages/LoginPage/Forgot.jsx'
import RegisterPage from './pages/LoginPage/RegisterPage.jsx'
import ProfilePage from './pages/ProfilePage/ProfilePage.jsx'
import ShopPage from './pages/ShopPage/ShopPage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<Mainlayout/>}>
    <Route index element={<Landingpage/>}/>
    <Route path='/home' element={<Home/>}/>
    <Route path='/game' element={<GamePage/>}/>
    <Route path='/player' element={<Playerpage/>}/>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/forget' element={<Forgot/>}/>
    <Route path='/register' element={<RegisterPage/>}/>
    <Route path='/profile' element={<ProfilePage/>}/>
    <Route path='/shop' element={<ShopPage/>}/>
  </Route>
)
)

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App