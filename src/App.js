import React from 'react'
import Home from './Components/Home/Home'
import Sidebar from './Components/Aside/Sidebar';
import About from './Components/About/About';
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Skills from './Components/Skills/Skills';
import Project from './Components/Projects/Project';
import Contact from './Components/Contacts/Contact';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (
    <div className='app'>

      <div className='aisde'>
        <Sidebar />
      </div>
      <div className='main-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Project />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App