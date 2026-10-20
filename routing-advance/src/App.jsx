
import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contect from './pages/Contect'
import PageNotFound from './pages/PageNotFound'
import Man from './pages/Man'
import Women from './pages/Women'
import Kides from './pages/Kides'
import Courses from './pages/Courses'
import CoursDetailPage from './pages/CoursDetailPage'
import Navbar2 from './components/Navbar2'

const App = () => {
  return (
    <div >
      <Navbar/>
      <Navbar2/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/courses" element={<Courses/>} />
        <Route path="/courses/:id" element={<CoursDetailPage/>} />
        <Route path="/contect" element={<Contect/>}>
          <Route path="man" element={<Man/>} />
          <Route path="women" element={<Women/>} />
          <Route path="kides" element={<Kides/>} />
        </Route>
      
        <Route path="*" element={<PageNotFound/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
