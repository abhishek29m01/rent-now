import { useState } from 'react'
import { BrowserRouter,Router,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import CollegeCard from './components/CollegeCard'
import PGCard from './components/PGCard'
import SliderBanner from './components/SliderBanner'
import UserLocation from './components/UserLocation'
import PGMainContainer from './components/PGMainContainer'


function App() {
  
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/collegeCard' element={<CollegeCard/>} />
            <Route path='/pgcard' element={<PGCard/>} />
            <Route path='/bannerSlider' element={<SliderBanner/>} />
            <Route path='/location' element={<UserLocation/>} />
            <Route path='/home-pg' element={<PGMainContainer/>} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
