import React from 'react';
import Home from './component/Home';
import About from './component/About';
import Jobs from './component/Jobs';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Error from './component/Errorpage';
import { Route, Routes } from 'react-router-dom';

const App=()=>{
  return(
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route path='/AboutUs' element={<About/>} />
        <Route path='/Jobs' element={<Jobs/>} />
        <Route element={<Error/>} />
      </Routes>
      <Footer />
    </>
  )
}
export default App;