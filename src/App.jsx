import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Accounts from './pages/Accounts'
import About from './pages/About'
import Contact from './pages/Contact'
import Details from './pages/Details'
import { Routes,Route } from 'react-router-dom'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/accounts' element={<Accounts/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
    <Footer/>
      
    </>
  )
}

export default App
