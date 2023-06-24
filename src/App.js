import React from 'react'
import About from './component/About/About.jsx'
import Header from './component/Header/Header.jsx'
import  Navbar  from './component/Navbar/Navbar.jsx'
import  Skills  from './component/Skills/Skills.jsx'
import Contact from './component/Contact/Contact.jsx'

export default function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <About />
      <Skills/>
      <Contact/>
    </>
  )
}
