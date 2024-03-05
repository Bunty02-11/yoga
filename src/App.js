import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Component/Mainpage/Home'
import About from './Component/About/About'
import Contatc from './Contact/Contatc'
import Blog from './Component/Blogs/Blog'
import Services from './Component/Service/Services'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/service' element={<Services/>} />
          <Route exact path='/blog' element={<Blog />} />
          <Route exact path='/contact' element={<Contatc />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

